"""Tests for RoomMind climate platform."""

from __future__ import annotations

import time
from unittest.mock import AsyncMock, MagicMock

import pytest
from homeassistant.components.climate import HVACMode

from custom_components.roommind.climate import (
    RoomMindOverrideClimate,
    RoomMindTargetClimate,
    _create_room_climates,
    async_setup_entry,
)
from custom_components.roommind.const import DEFAULT_COMFORT_TEMP, DOMAIN, OVERRIDE_CUSTOM


@pytest.fixture
def mock_coordinator():
    coordinator = MagicMock()
    coordinator.hass = MagicMock()
    coordinator.async_request_refresh = AsyncMock()
    store = MagicMock()
    coordinator.hass.data = {DOMAIN: {"store": store}}
    coordinator.data = {}
    return coordinator, store


def test_create_room_climates(mock_coordinator):
    """Factory creates override and target climate entities per room."""
    coordinator, _ = mock_coordinator
    climates = _create_room_climates(coordinator, "living_room")
    assert len(climates) == 2
    assert isinstance(climates[0], RoomMindOverrideClimate)
    assert isinstance(climates[1], RoomMindTargetClimate)


def test_unique_id_and_entity_id(mock_coordinator):
    """Climate entity has correct unique_id and entity_id."""
    coordinator, _ = mock_coordinator
    entity = RoomMindOverrideClimate(coordinator, "living_room")
    assert entity.unique_id == "roommind_living_room_override"
    assert entity.entity_id == "climate.roommind_living_room_override"


def test_target_unique_id_and_entity_id(mock_coordinator):
    """Target climate entity has correct unique_id and entity_id."""
    coordinator, _ = mock_coordinator
    entity = RoomMindTargetClimate(coordinator, "living_room")
    assert entity.unique_id == "roommind_living_room_target"
    assert entity.entity_id == "climate.roommind_living_room_target"


def test_hvac_mode_off_when_no_override(mock_coordinator):
    """hvac_mode returns OFF when no override is set."""
    coordinator, store = mock_coordinator
    store.get_room.return_value = {
        "override_temp": None,
        "override_until": None,
        "override_type": None,
    }
    entity = RoomMindOverrideClimate(coordinator, "living_room")
    assert entity.hvac_mode == HVACMode.OFF


def test_hvac_mode_auto_when_permanent_override(mock_coordinator):
    """hvac_mode returns AUTO when permanent override is active."""
    coordinator, store = mock_coordinator
    store.get_room.return_value = {
        "override_temp": 23.5,
        "override_until": None,
        "override_type": "custom",
    }
    entity = RoomMindOverrideClimate(coordinator, "living_room")
    assert entity.hvac_mode == HVACMode.AUTO


def test_hvac_mode_auto_when_timed_override_active(mock_coordinator):
    """hvac_mode returns AUTO when timed override is still active."""
    coordinator, store = mock_coordinator
    store.get_room.return_value = {
        "override_temp": 25.0,
        "override_until": time.time() + 3600,
        "override_type": "boost",
    }
    entity = RoomMindOverrideClimate(coordinator, "living_room")
    assert entity.hvac_mode == HVACMode.AUTO


def test_hvac_mode_off_when_timed_override_expired(mock_coordinator):
    """hvac_mode returns OFF when timed override has expired."""
    coordinator, store = mock_coordinator
    store.get_room.return_value = {
        "override_temp": 25.0,
        "override_until": time.time() - 100,
        "override_type": "boost",
    }
    entity = RoomMindOverrideClimate(coordinator, "living_room")
    assert entity.hvac_mode == HVACMode.OFF


def test_target_temperature_returns_override_temp_when_active(mock_coordinator):
    """target_temperature returns override_temp when override is active."""
    coordinator, store = mock_coordinator
    store.get_room.return_value = {
        "override_temp": 23.5,
        "override_until": None,
        "override_type": "custom",
    }
    entity = RoomMindOverrideClimate(coordinator, "living_room")
    assert entity.target_temperature == 23.5


def test_target_temperature_returns_default_when_no_override(mock_coordinator):
    """target_temperature returns DEFAULT_COMFORT_TEMP when no override."""
    coordinator, store = mock_coordinator
    store.get_room.return_value = {
        "override_temp": None,
        "override_until": None,
        "override_type": None,
    }
    entity = RoomMindOverrideClimate(coordinator, "living_room")
    assert entity.target_temperature == DEFAULT_COMFORT_TEMP


def test_current_temperature_from_coordinator_data(mock_coordinator):
    """current_temperature reads from coordinator.data."""
    coordinator, store = mock_coordinator
    store.get_room.return_value = {"override_temp": None}
    coordinator.data = {"rooms": {"living_room": {"current_temp": 20.5}}}
    entity = RoomMindOverrideClimate(coordinator, "living_room")
    assert entity.current_temperature == 20.5


def test_current_temperature_none_when_no_data(mock_coordinator):
    """current_temperature returns None when coordinator has no data."""
    coordinator, store = mock_coordinator
    coordinator.data = None
    entity = RoomMindOverrideClimate(coordinator, "living_room")
    assert entity.current_temperature is None


def test_current_temperature_none_when_room_not_in_data(mock_coordinator):
    """current_temperature returns None when room not in coordinator data."""
    coordinator, store = mock_coordinator
    coordinator.data = {"rooms": {"other_room": {"current_temp": 20.0}}}
    entity = RoomMindOverrideClimate(coordinator, "living_room")
    assert entity.current_temperature is None


@pytest.mark.asyncio
async def test_set_temperature(mock_coordinator):
    """set_temperature activates permanent override and refreshes."""
    coordinator, store = mock_coordinator
    store.async_update_room = AsyncMock()
    entity = RoomMindOverrideClimate(coordinator, "living_room")
    await entity.async_set_temperature(temperature=22.0)
    store.async_update_room.assert_awaited_once_with(
        "living_room",
        {
            "override_temp": 22.0,
            "override_until": None,
            "override_type": OVERRIDE_CUSTOM,
        },
    )
    coordinator.async_request_refresh.assert_awaited_once()


@pytest.mark.asyncio
async def test_set_temperature_no_temp_kwarg(mock_coordinator):
    """set_temperature does nothing when temperature kwarg is missing."""
    coordinator, store = mock_coordinator
    store.async_update_room = AsyncMock()
    entity = RoomMindOverrideClimate(coordinator, "living_room")
    await entity.async_set_temperature()
    store.async_update_room.assert_not_awaited()


@pytest.mark.asyncio
async def test_set_hvac_mode_off_clears_override(mock_coordinator):
    """Setting hvac_mode to OFF clears override and refreshes."""
    coordinator, store = mock_coordinator
    store.async_update_room = AsyncMock()
    entity = RoomMindOverrideClimate(coordinator, "living_room")
    await entity.async_set_hvac_mode(HVACMode.OFF)
    store.async_update_room.assert_awaited_once_with(
        "living_room",
        {
            "override_temp": None,
            "override_until": None,
            "override_type": None,
        },
    )
    coordinator.async_request_refresh.assert_awaited_once()


@pytest.mark.asyncio
async def test_set_hvac_mode_auto_activates_with_default(mock_coordinator):
    """Setting hvac_mode to AUTO activates with DEFAULT_COMFORT_TEMP if no override."""
    coordinator, store = mock_coordinator
    store.get_room.return_value = {
        "override_temp": None,
        "override_until": None,
        "override_type": None,
    }
    store.async_update_room = AsyncMock()
    entity = RoomMindOverrideClimate(coordinator, "living_room")
    await entity.async_set_hvac_mode(HVACMode.AUTO)
    store.async_update_room.assert_awaited_once_with(
        "living_room",
        {
            "override_temp": DEFAULT_COMFORT_TEMP,
            "override_until": None,
            "override_type": OVERRIDE_CUSTOM,
        },
    )
    coordinator.async_request_refresh.assert_awaited_once()


@pytest.mark.asyncio
async def test_set_hvac_mode_auto_noop_when_override_exists(mock_coordinator):
    """Setting hvac_mode to AUTO does not update store if override already active."""
    coordinator, store = mock_coordinator
    store.get_room.return_value = {
        "override_temp": 23.0,
        "override_until": None,
        "override_type": "custom",
    }
    store.async_update_room = AsyncMock()
    entity = RoomMindOverrideClimate(coordinator, "living_room")
    await entity.async_set_hvac_mode(HVACMode.AUTO)
    store.async_update_room.assert_not_awaited()
    coordinator.async_request_refresh.assert_awaited_once()


def test_target_hvac_mode_from_room_settings(mock_coordinator):
    """Target climate maps room settings to HVAC modes."""
    coordinator, store = mock_coordinator
    entity = RoomMindTargetClimate(coordinator, "living_room")

    store.get_room.return_value = {"climate_control_enabled": False}
    assert entity.hvac_mode == HVACMode.OFF

    store.get_room.return_value = {"climate_control_enabled": True, "climate_mode": "heat_only"}
    assert entity.hvac_mode == HVACMode.HEAT

    store.get_room.return_value = {"climate_control_enabled": True, "climate_mode": "cool_only"}
    assert entity.hvac_mode == HVACMode.COOL

    store.get_room.return_value = {"climate_control_enabled": True, "climate_mode": "auto"}
    assert entity.hvac_mode == HVACMode.AUTO


def test_target_temperature_range_from_room_settings(mock_coordinator):
    """Target climate exposes persistent heat/cool comfort range."""
    coordinator, store = mock_coordinator
    store.get_room.return_value = {"comfort_heat": 20.0, "comfort_cool": 25.5}
    entity = RoomMindTargetClimate(coordinator, "living_room")

    assert entity.target_temperature_low == 20.0
    assert entity.target_temperature_high == 25.5


@pytest.mark.asyncio
async def test_target_set_temperature_range(mock_coordinator):
    """Setting target range persists comfort heat/cool values."""
    coordinator, store = mock_coordinator
    store.async_update_room = AsyncMock()
    entity = RoomMindTargetClimate(coordinator, "living_room")

    await entity.async_set_temperature(target_temp_low=19.0, target_temp_high=26.0)

    store.async_update_room.assert_awaited_once_with(
        "living_room",
        {
            "comfort_heat": 19.0,
            "comfort_cool": 26.0,
        },
    )
    coordinator.async_request_refresh.assert_awaited_once()


@pytest.mark.asyncio
async def test_target_set_hvac_mode_updates_room_settings(mock_coordinator):
    """Setting target climate HVAC mode updates room control settings."""
    coordinator, store = mock_coordinator
    store.async_update_room = AsyncMock()
    entity = RoomMindTargetClimate(coordinator, "living_room")

    await entity.async_set_hvac_mode(HVACMode.COOL)

    store.async_update_room.assert_awaited_once_with(
        "living_room",
        {
            "climate_control_enabled": True,
            "climate_mode": "cool_only",
        },
    )
    coordinator.async_request_refresh.assert_awaited_once()


def test_hvac_mode_off_when_room_missing(mock_coordinator):
    """hvac_mode returns OFF when room doesn't exist in store."""
    coordinator, store = mock_coordinator
    store.get_room.return_value = None
    entity = RoomMindOverrideClimate(coordinator, "nonexistent")
    assert entity.hvac_mode == HVACMode.OFF


@pytest.mark.asyncio
async def test_async_setup_entry_creates_entities_for_all_rooms():
    """async_setup_entry creates climate entities for all rooms."""
    coordinator = MagicMock()
    coordinator._climate_entity_areas = set()

    store = MagicMock()
    store.get_rooms.return_value = {
        "living_room": {"thermostats": ["climate.living"]},
        "bedroom": {},
    }

    entry = MagicMock()
    entry.entry_id = "test_entry"

    hass = MagicMock()
    hass.data = {DOMAIN: {entry.entry_id: coordinator, "store": store}}

    async_add_entities = MagicMock()

    await async_setup_entry(hass, entry, async_add_entities)

    assert coordinator.async_add_climate_entities is async_add_entities
    async_add_entities.assert_called_once()
    entities = async_add_entities.call_args[0][0]
    assert len(entities) == 4
    assert sum(isinstance(e, RoomMindOverrideClimate) for e in entities) == 2
    assert sum(isinstance(e, RoomMindTargetClimate) for e in entities) == 2
    assert "living_room" in coordinator._climate_entity_areas
    assert "bedroom" in coordinator._climate_entity_areas


@pytest.mark.asyncio
async def test_async_setup_entry_no_rooms():
    """async_setup_entry does not call async_add_entities when no rooms exist."""
    coordinator = MagicMock()
    coordinator._climate_entity_areas = set()

    store = MagicMock()
    store.get_rooms.return_value = {}

    entry = MagicMock()
    entry.entry_id = "test_entry"

    hass = MagicMock()
    hass.data = {DOMAIN: {entry.entry_id: coordinator, "store": store}}

    async_add_entities = MagicMock()

    await async_setup_entry(hass, entry, async_add_entities)

    async_add_entities.assert_not_called()
