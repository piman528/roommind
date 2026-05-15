"""Climate platform for RoomMind."""

from __future__ import annotations

import time
from typing import Any

from homeassistant.components.climate import (
    ClimateEntity,
    ClimateEntityFeature,
    HVACMode,
)
from homeassistant.config_entries import ConfigEntry
from homeassistant.const import UnitOfTemperature
from homeassistant.core import HomeAssistant
from homeassistant.helpers.entity_platform import AddEntitiesCallback
from homeassistant.helpers.update_coordinator import CoordinatorEntity

from .const import DEFAULT_COMFORT_TEMP, DOMAIN, OVERRIDE_CUSTOM
from .coordinator import RoomMindCoordinator


def _create_room_climates(
    coordinator: RoomMindCoordinator,
    area_id: str,
) -> list[ClimateEntity]:
    """Create climate entities for a room."""
    return [
        RoomMindOverrideClimate(coordinator, area_id),
        RoomMindTargetClimate(coordinator, area_id),
    ]


async def async_setup_entry(
    hass: HomeAssistant,
    entry: ConfigEntry,
    async_add_entities: AddEntitiesCallback,
) -> None:
    """Set up RoomMind climate entities from a config entry."""
    coordinator: RoomMindCoordinator = hass.data[DOMAIN][entry.entry_id]
    store = hass.data[DOMAIN]["store"]
    coordinator.async_add_climate_entities = async_add_entities
    rooms = store.get_rooms()
    entities: list[ClimateEntity] = []
    for area_id in rooms:
        entities.extend(_create_room_climates(coordinator, area_id))
        coordinator._climate_entity_areas.add(area_id)
    if entities:
        async_add_entities(entities)


class RoomMindOverrideClimate(CoordinatorEntity, ClimateEntity):
    """Climate entity for room override control."""

    _attr_has_entity_name = True
    _attr_icon = "mdi:thermometer-alert"
    _attr_hvac_modes = [HVACMode.OFF, HVACMode.AUTO]
    _attr_supported_features = (
        ClimateEntityFeature.TARGET_TEMPERATURE | ClimateEntityFeature.TURN_ON | ClimateEntityFeature.TURN_OFF
    )
    _attr_temperature_unit = UnitOfTemperature.CELSIUS
    _attr_target_temperature_step = 0.5
    _attr_min_temp = 5.0
    _attr_max_temp = 35.0

    def __init__(self, coordinator: RoomMindCoordinator, area_id: str) -> None:
        super().__init__(coordinator)
        self._area_id = area_id
        self._attr_unique_id = f"{DOMAIN}_{area_id}_override"
        self._attr_name = f"{area_id} Override"
        self.entity_id = f"climate.{DOMAIN}_{area_id}_override"

    def _is_override_active(self) -> bool:
        """Return True if override is currently active."""
        store = self.coordinator.hass.data[DOMAIN]["store"]
        room = store.get_room(self._area_id)
        if not room:
            return False
        override_temp = room.get("override_temp")
        if override_temp is None:
            return False
        override_until = room.get("override_until")
        return override_until is None or time.time() < override_until

    @property
    def hvac_mode(self) -> HVACMode:
        """Return AUTO if override is active, OFF otherwise."""
        return HVACMode.AUTO if self._is_override_active() else HVACMode.OFF

    @property
    def target_temperature(self) -> float:
        """Return override temp if active, else DEFAULT_COMFORT_TEMP."""
        if self._is_override_active():
            store = self.coordinator.hass.data[DOMAIN]["store"]
            room = store.get_room(self._area_id)
            if room:
                val = room.get("override_temp")
                if isinstance(val, (int, float)):
                    return float(val)
        return DEFAULT_COMFORT_TEMP

    @property
    def current_temperature(self) -> float | None:
        """Return the room's current temperature from coordinator data."""
        data = self.coordinator.data
        if not data:
            return None
        room_data = data.get("rooms", {}).get(self._area_id)
        if not room_data:
            return None
        val = room_data.get("current_temp")
        return float(val) if isinstance(val, (int, float)) else None

    async def async_set_temperature(self, **kwargs: Any) -> None:
        """Set override temperature."""
        temperature = kwargs.get("temperature")
        if temperature is None:
            return
        store = self.coordinator.hass.data[DOMAIN]["store"]
        await store.async_update_room(
            self._area_id,
            {
                "override_temp": temperature,
                "override_until": None,
                "override_type": OVERRIDE_CUSTOM,
            },
        )
        await self.coordinator.async_request_refresh()

    async def async_set_hvac_mode(self, hvac_mode: HVACMode) -> None:
        """Set HVAC mode: OFF clears override, AUTO activates."""
        store = self.coordinator.hass.data[DOMAIN]["store"]
        if hvac_mode == HVACMode.OFF:
            await store.async_update_room(
                self._area_id,
                {
                    "override_temp": None,
                    "override_until": None,
                    "override_type": None,
                },
            )
        elif hvac_mode == HVACMode.AUTO:
            if not self._is_override_active():
                await store.async_update_room(
                    self._area_id,
                    {
                        "override_temp": DEFAULT_COMFORT_TEMP,
                        "override_until": None,
                        "override_type": OVERRIDE_CUSTOM,
                    },
                )
        await self.coordinator.async_request_refresh()


class RoomMindTargetClimate(CoordinatorEntity, ClimateEntity):
    """Climate entity for persistent room target settings."""

    _attr_has_entity_name = True
    _attr_icon = "mdi:thermostat"
    _attr_hvac_modes = [HVACMode.OFF, HVACMode.HEAT_COOL, HVACMode.HEAT, HVACMode.COOL]
    _attr_supported_features = (
        ClimateEntityFeature.TARGET_TEMPERATURE_RANGE | ClimateEntityFeature.TURN_ON | ClimateEntityFeature.TURN_OFF
    )
    _attr_temperature_unit = UnitOfTemperature.CELSIUS
    _attr_target_temperature_step = 0.5
    _attr_min_temp = 5.0
    _attr_max_temp = 35.0

    def __init__(self, coordinator: RoomMindCoordinator, area_id: str) -> None:
        super().__init__(coordinator)
        self._area_id = area_id
        self._attr_unique_id = f"{DOMAIN}_{area_id}_target"
        self._attr_name = f"{area_id} Target"
        self.entity_id = f"climate.{DOMAIN}_{area_id}_target"

    def _room(self) -> dict:
        """Return the current room config, or an empty dict if it is gone."""
        store = self.coordinator.hass.data[DOMAIN]["store"]
        return store.get_room(self._area_id) or {}

    @property
    def hvac_mode(self) -> HVACMode:
        """Return mode from persistent room control settings."""
        room = self._room()
        if not room.get("climate_control_enabled", True):
            return HVACMode.OFF
        climate_mode = room.get("climate_mode", "auto")
        if climate_mode == "heat_only":
            return HVACMode.HEAT
        if climate_mode == "cool_only":
            return HVACMode.COOL
        return HVACMode.HEAT_COOL

    @property
    def target_temperature_low(self) -> float | None:
        """Return the persistent heating target."""
        room = self._room()
        return float(room.get("comfort_heat", room.get("comfort_temp", DEFAULT_COMFORT_TEMP)))

    @property
    def target_temperature_high(self) -> float | None:
        """Return the persistent cooling target."""
        room = self._room()
        return float(room.get("comfort_cool", 24.0))

    @property
    def current_temperature(self) -> float | None:
        """Return the room's current temperature from coordinator data."""
        data = self.coordinator.data
        if not data:
            return None
        room_data = data.get("rooms", {}).get(self._area_id)
        if not room_data:
            return None
        val = room_data.get("current_temp")
        return float(val) if isinstance(val, (int, float)) else None

    async def async_set_temperature(self, **kwargs: Any) -> None:
        """Persist the heat/cool comfort range."""
        changes: dict[str, float] = {}
        low = kwargs.get("target_temp_low")
        high = kwargs.get("target_temp_high")

        if low is not None:
            changes["comfort_heat"] = float(low)
        if high is not None:
            changes["comfort_cool"] = float(high)

        if not changes:
            return

        store = self.coordinator.hass.data[DOMAIN]["store"]
        await store.async_update_room(self._area_id, changes)
        await self.coordinator.async_request_refresh()

    async def async_set_hvac_mode(self, hvac_mode: HVACMode) -> None:
        """Set room climate control and persistent mode."""
        if hvac_mode not in (*self._attr_hvac_modes, HVACMode.AUTO):
            return

        if hvac_mode == HVACMode.OFF:
            changes: dict[str, Any] = {"climate_control_enabled": False}
        elif hvac_mode == HVACMode.HEAT:
            changes = {"climate_control_enabled": True, "climate_mode": "heat_only"}
        elif hvac_mode == HVACMode.COOL:
            changes = {"climate_control_enabled": True, "climate_mode": "cool_only"}
        else:
            changes = {"climate_control_enabled": True, "climate_mode": "auto"}

        store = self.coordinator.hass.data[DOMAIN]["store"]
        await store.async_update_room(self._area_id, changes)
        await self.coordinator.async_request_refresh()

    async def async_turn_on(self) -> None:
        """Enable automatic room climate control."""
        await self.async_set_hvac_mode(HVACMode.HEAT_COOL)

    async def async_turn_off(self) -> None:
        """Disable automatic room climate control."""
        await self.async_set_hvac_mode(HVACMode.OFF)
