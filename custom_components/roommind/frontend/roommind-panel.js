(function(){var e=Object.defineProperty,t=(e,t)=>()=>(e&&(t=e(e=0)),t),n=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r},r,i,a,o,s,c,l,u,d,f=t((()=>{r=globalThis,i=r.ShadowRoot&&(r.ShadyCSS===void 0||r.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,a=Symbol(),o=new WeakMap,s=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(i&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=o.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&o.set(t,e))}return e}toString(){return this.cssText}},c=e=>new s(typeof e==`string`?e:e+``,void 0,a),l=(e,...t)=>new s(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,a),u=(e,t)=>{if(i)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),i=r.litNonce;i!==void 0&&t.setAttribute(`nonce`,i),t.textContent=n.cssText,e.appendChild(t)}},d=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return c(t)})(e):e})),p,ee,te,ne,re,ie,ae,oe,m,se,ce,le,ue,de,fe,pe=t((()=>{f(),{is:p,defineProperty:ee,getOwnPropertyDescriptor:te,getOwnPropertyNames:ne,getOwnPropertySymbols:re,getPrototypeOf:ie}=Object,ae=globalThis,oe=ae.trustedTypes,m=oe?oe.emptyScript:``,se=ae.reactiveElementPolyfillSupport,ce=(e,t)=>e,le={toAttribute(e,t){switch(t){case Boolean:e=e?m:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},ue=(e,t)=>!p(e,t),de={attribute:!0,type:String,converter:le,reflect:!1,useDefault:!1,hasChanged:ue},Symbol.metadata??=Symbol(`metadata`),ae.litPropertyMetadata??=new WeakMap,fe=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=de){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&ee(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=te(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??de}static _$Ei(){if(this.hasOwnProperty(ce(`elementProperties`)))return;let e=ie(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ce(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ce(`properties`))){let e=this.properties,t=[...ne(e),...re(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(d(e))}else e!==void 0&&t.push(d(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return u(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?le:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?le:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??ue)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}},fe.elementStyles=[],fe.shadowRootOptions={mode:`open`},fe[ce(`elementProperties`)]=new Map,fe[ce(`finalized`)]=new Map,se?.({ReactiveElement:fe}),(ae.reactiveElementVersions??=[]).push(`2.1.2`)}));function me(e,t){if(!Ee(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return ye===void 0?t:ye.createHTML(t)}function he(e,t,n=e,r){if(t===Le)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=Te(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=he(e,i._$AS(e,t.values),i,r)),t}var ge,_e,ve,ye,be,h,xe,Se,Ce,we,Te,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,g,Le,_,Re,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze=t((()=>{ge=globalThis,_e=e=>e,ve=ge.trustedTypes,ye=ve?ve.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,be=`$lit$`,h=`lit$${Math.random().toFixed(9).slice(2)}$`,xe=`?`+h,Se=`<${xe}>`,Ce=document,we=()=>Ce.createComment(``),Te=e=>e===null||typeof e!=`object`&&typeof e!=`function`,Ee=Array.isArray,De=e=>Ee(e)||typeof e?.[Symbol.iterator]==`function`,Oe=`[ 	
\f\r]`,ke=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ae=/-->/g,je=/>/g,Me=RegExp(`>|${Oe}(?:([^\\s"'>=/]+)(${Oe}*=${Oe}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),Ne=/'/g,Pe=/"/g,Fe=/^(?:script|style|textarea|title)$/i,Ie=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),g=Ie(1),Ie(2),Ie(3),Le=Symbol.for(`lit-noChange`),_=Symbol.for(`lit-nothing`),Re=new WeakMap,ze=Ce.createTreeWalker(Ce,129),Be=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=ke;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===ke?c[1]===`!--`?o=Ae:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=Me):(Fe.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=Me):o=je:o===Me?c[0]===`>`?(o=i??ke,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?Me:c[3]===`"`?Pe:Ne):o===Pe||o===Ne?o=Me:o===Ae||o===je?o=ke:(o=Me,i=void 0);let d=o===Me&&e[t+1].startsWith(`/>`)?` `:``;a+=o===ke?n+Se:l>=0?(r.push(s),n.slice(0,l)+be+n.slice(l)+h+d):n+h+(l===-2?t:d)}return[me(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},Ve=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=Be(t,n);if(this.el=e.createElement(l,r),ze.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=ze.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(be)){let t=u[o++],n=i.getAttribute(e).split(h),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Ge:r[1]===`?`?Ke:r[1]===`@`?qe:We}),i.removeAttribute(e)}else e.startsWith(h)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Fe.test(i.tagName)){let e=i.textContent.split(h),t=e.length-1;if(t>0){i.textContent=ve?ve.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],we()),ze.nextNode(),c.push({type:2,index:++a});i.append(e[t],we())}}}else if(i.nodeType===8)if(i.data===xe)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(h,e+1))!==-1;)c.push({type:7,index:a}),e+=h.length-1}a++}}static createElement(e,t){let n=Ce.createElement(`template`);return n.innerHTML=e,n}},He=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??Ce).importNode(t,!0);ze.currentNode=r;let i=ze.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Ue(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Je(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=ze.nextNode(),a++)}return ze.currentNode=Ce,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Ue=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=he(this,e,t),Te(e)?e===_||e==null||e===``?(this._$AH!==_&&this._$AR(),this._$AH=_):e!==this._$AH&&e!==Le&&this._(e):e._$litType$===void 0?e.nodeType===void 0?De(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==_&&Te(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ce.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Ve.createElement(me(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new He(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Re.get(e.strings);return t===void 0&&Re.set(e.strings,t=new Ve(e)),t}k(t){Ee(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(we()),this.O(we()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=_e(e).nextSibling;_e(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},We=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=_,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=_}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=he(this,e,t,0),a=!Te(e)||e!==this._$AH&&e!==Le,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=he(this,r[n+o],t,o),s===Le&&(s=this._$AH[o]),a||=!Te(s)||s!==this._$AH[o],s===_?e=_:e!==_&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Ge=class extends We{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===_?void 0:e}},Ke=class extends We{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==_)}},qe=class extends We{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=he(this,e,t,0)??_)===Le)return;let n=this._$AH,r=e===_&&n!==_||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==_&&(n===_||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Je=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){he(this,e)}},Ye=ge.litHtmlPolyfillSupport,Ye?.(Ve,Ue),(ge.litHtmlVersions??=[]).push(`3.3.2`),Xe=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Ue(t.insertBefore(we(),e),e,void 0,n??{})}return i._$AI(e),i}})),Qe,v,$e,et=t((()=>{pe(),pe(),Ze(),Ze(),Qe=globalThis,v=class extends fe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Xe(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Le}},v._$litElement$=!0,v.finalized=!0,Qe.litElementHydrateSupport?.({LitElement:v}),$e=Qe.litElementPolyfillSupport,$e?.({LitElement:v}),(Qe.litElementVersions??=[]).push(`4.2.2`)})),tt=t((()=>{})),y=t((()=>{pe(),Ze(),et(),tt()})),b,nt=t((()=>{b=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})}}));function x(e){return(t,n)=>typeof n==`object`?it(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}var rt,it,at=t((()=>{pe(),rt={attribute:!0,type:String,converter:le,reflect:!1,hasChanged:ue},it=(e=rt,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)}}));function S(e){return x({...e,state:!0,attribute:!1})}var ot=t((()=>{at()})),st=t((()=>{})),ct,lt=t((()=>{ct=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n)}));function ut(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return ct(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return ct(n,r,{get(){return a(this)}})}}var dt=t((()=>{lt()})),ft=t((()=>{})),pt=t((()=>{})),mt=t((()=>{})),ht=t((()=>{})),C=t((()=>{nt(),at(),ot(),st(),dt(),ft(),pt(),mt(),ht()}));y(),C();var gt={en:{"panel.title":`RoomMind`,"panel.subtitle":`Climate management`,"panel.tab.rooms":`Rooms`,"panel.edit":`Edit room`,"panel.tab.settings":`Settings`,"panel.loading":`Loading...`,"panel.no_areas":`No areas configured in Home Assistant.`,"panel.no_areas_hint":`Add areas in HA settings to get started.`,"badge.beta":`Beta`,"badge.beta_hint":`This feature is in beta and may change or be restructured in future updates.`,"common.learn_more":`Learn more`,"panel.stat.rooms":`Rooms`,"panel.stat.heating":`Heating`,"panel.stat.cooling":`Cooling`,"panel.stat.vacation":`Vacation`,"panel.stat.away":`Away`,"panel.stat.mold":`Mold`,"panel.hide_room":`Hide`,"panel.unhide":`Show`,"panel.hidden_rooms":`Hidden rooms`,"panel.floor_other":`Other`,"panel.reorder":`Reorder rooms`,"panel.reorder_done":`Done`,"room.back":`Back to rooms`,"room.section.climate_mode":`Climate Mode`,"room.section.schedule":`Schedule & Temperatures`,"room.section.control_mode":`Control Mode`,"room.section.devices":`Devices`,"room.section.sensors":`Sensors`,"room.section.windows":`Window Sensors`,"room.control_mode.full_control":`Full Control`,"room.control_mode.managed":`Managed`,"room.control_mode.external_sensor":`External sensor: {sensor}`,"room.control_mode.no_sensor":`No external temperature sensor assigned`,"room.control_mode.mpc_active":`MPC active`,"room.control_mode.mpc_learning":`Learning`,"room.control_mode.device_setpoint":`Device setpoint: {temp}`,"room.control_mode.power":`Power: {power}%`,"room.control_mode.full_control_info":`RoomMind has full control over your climate devices. An external temperature sensor provides the actual room temperature, enabling proportional setpoint calculation. The device setpoint is dynamically adjusted based on MPC power output. The thermal model (EKF) learns your room's behavior for optimal comfort and energy efficiency.`,"room.control_mode.managed_info":`RoomMind sets the target temperature on your device (from schedule, override, or vacation settings), but the device self-regulates using its own internal sensor. No proportional boost, no thermal model learning, and no MPC optimization. For more precise control, assign an external temperature sensor in the Devices section.`,"room.delete":`Delete room`,"room.deleting":`Deleting...`,"room.saving":`Saving...`,"room.saved":`Saved`,"room.error_saving":`Error saving`,"room.confirm_delete":`Remove RoomMind configuration for "{name}"?`,"room.error_save_fallback":`Failed to save configuration`,"room.error_delete_fallback":`Failed to delete configuration`,"room.climate_control_toggle":`Climate control`,"room.climate_control_hint":`When disabled, RoomMind will not control devices in this room`,"room.outdoor_toggle":`Outdoor area`,"room.outdoor_hint":`Disables climate control, mold detection, and model training. Sensor monitoring continues.`,"room.alias.placeholder":`Custom display name`,"room.alias.clear":`Reset to area name`,"override.label":`Temporary Override`,"override.comfort":`Comfort`,"override.eco":`Eco`,"override.custom":`Custom`,"override.target":`Target:`,"override.activate_for":`Activate for:`,"override.error_set":`Failed to set override`,"override.error_clear":`Failed to clear override`,"hero.target":`Target`,"hero.override":`Override`,"hero.remaining":`{time} remaining`,"hero.humidity":`{value}% humidity`,"hero.device_setpoint":`Device set to {value}{unit}`,"hero.heat_source_primary":`Heating: TRV`,"hero.heat_source_secondary":`Heating: AC`,"hero.heat_source_both":`Heating: TRV + AC`,"hero.permanent":`Permanent`,"hero.waiting":`Waiting for sensor data...`,"hero.not_configured":`Not configured yet`,"hero.mpc_learning_paused":`MPC learning paused`,"hero.mpc_learning_paused.outdoor_unavailable":`RoomMind needs an outdoor temperature to learn this room's thermal model. The configured outdoor sensor is unavailable and no weather entity is set as a fallback. Configure either in Settings.`,"card.target":`Target`,"card.waiting":`Waiting for data...`,"card.humidity":`{value}% humidity`,"card.thermostat":`Thermostat`,"card.thermostats":`Thermostats`,"card.ac":`AC`,"card.acs":`ACs`,"card.climate_device":`climate device`,"card.climate_devices":`climate devices`,"card.temp_sensor":`temp sensor`,"card.temp_sensors":`temp sensors`,"card.no_climate":`No climate devices`,"card.outdoor":`Outdoor`,"card.tap_configure":`Tap to configure`,"card.mpc_active":`MPC active`,"card.mpc_learning":`MPC learning`,"card.not_controlled":`Not controlled by RoomMind`,"mode.auto":`Auto`,"mode.auto_desc":`Heats & cools automatically based on target temperature`,"mode.heat_only":`Heat Only`,"mode.heat_only_desc":`Only uses thermostats, ACs stay off`,"mode.cool_only":`Cool Only`,"mode.cool_only_desc":`Only uses ACs, thermostats stay off`,"mode.heating":`Heating`,"mode.cooling":`Cooling`,"mode.idle":`Standby`,"schedule.add_schedule":`Add schedule`,"schedule.select_schedule":`Select schedule helper`,"schedule.create_helper_hint":`Create new schedule helper in HA settings`,"schedule.selector_label":`Schedule selector entity`,"schedule.selector_value_boolean":`Current: {value}`,"schedule.selector_value_number":`Current value: {value}`,"schedule.selector_warning":`Multiple schedules but no selector set. Only the first will be used.`,"schedule.off_action_label":`Action when schedule is off`,"schedule.off_action_eco":`Use eco temperature`,"schedule.off_action_off":`Turn off devices`,"schedule.state_active":`Active`,"schedule.state_inactive":`Inactive`,"schedule.state_unreachable":`Unreachable`,"schedule.no_schedules":`No schedules configured`,"schedule.done":`Done`,"schedule.view_comfort":`Comfort: {temp}{unit}`,"schedule.view_eco":`Eco: {temp}{unit}`,"schedule.view_selector":`Active schedule selected by: {name}`,"schedule.view_selector_prefix":`Active schedule selected by:`,"schedule.help_header":`How do schedules work?`,"schedule.help_temps_title":`How is the target temperature determined?`,"schedule.help_temps":`The target temperature follows this priority chain:`,"schedule.help_temps_1":`<strong>Manual override</strong> – A temporary boost/eco/custom override always takes highest priority.`,"schedule.help_temps_2":`<strong>Block temperature</strong> – If the active schedule block has a <code>temperature</code> value in its data, that value is used.`,"schedule.help_temps_3":`<strong>Comfort temperature</strong> – If the schedule is "on" but the block has no temperature, the comfort fallback temperature below is used.`,"schedule.help_temps_4":`<strong>Eco temperature</strong> – When the schedule is "off" (outside all time blocks), the eco temperature is used.`,"schedule.help_block_title":`Setting temperature per time block`,"schedule.help_block":`You can set a specific temperature for each time block by adding a <code>temperature</code> value in the schedule's YAML configuration:`,"schedule.help_block_note":`If a block has no <code>temperature</code> data, the comfort fallback temperature is used instead.`,"schedule.help_split_title":`Separate heating/cooling targets per block`,"schedule.help_split":`For auto-mode rooms, you can set separate heating and cooling targets per time block using <code>heat_temperature</code> and <code>cool_temperature</code>:`,"schedule.help_split_note":`If only one is set, the other falls back to the room's comfort temperature. These keys take priority over <code>temperature</code> when present.`,"schedule.help_multi_title":`Multiple schedules`,"schedule.help_multi":`You can add multiple schedules and switch between them using a <strong>selector entity</strong>. This can be an <code>input_boolean</code> (toggles between schedule 1 and 2) or an <code>input_number</code> (selects by number). Without a selector entity, only the first schedule is used.`,"schedule.column_comfort":`Comfort`,"schedule.column_eco":`Eco`,"schedule.row_heat":`Heat`,"schedule.row_cool":`Cool`,"schedule.view_heat":`Heat: {comfort} / {eco}{unit}`,"schedule.view_cool":`Cool: {comfort} / {eco}{unit}`,"schedule.comfort_hint_auto":`Comfort: target when schedule is on. Eco: target when schedule is off. Rows set the target for heating and cooling.`,"schedule.comfort_label":`Fallback comfort temperature`,"schedule.eco_label":`Eco temperature`,"schedule.comfort_hint":`Used when schedule is "on" but no temperature is set in the block`,"schedule.from_schedule":`{temp}{unit} from schedule`,"schedule.from_schedule_split":`{heat}{unit} / {cool}{unit} from schedule`,"schedule.fallback":`{temp}{unit} (fallback)`,"schedule.eco_detail":`{temp}{unit} (eco)`,"devices.climate_entities":`Climate entities`,"devices.temp_sensors":`Temperature sensors`,"devices.humidity_sensors":`Humidity sensors`,"devices.no_climate":`No climate entities found in this area.`,"devices.no_temp_sensors":`No temperature sensors found in this area.`,"devices.no_humidity_sensors":`No humidity sensors found in this area.`,"devices.occupancy_sensors":`Occupancy Sensors`,"devices.no_occupancy_sensors":`No occupancy sensors found in this area`,"devices.occupancy_sensor_hint":`Improves thermal model accuracy by tracking room occupancy`,"devices.window_sensors":`Window / door sensors`,"devices.no_window_sensors":`No window/door sensors found in this area.`,"devices.window_open_delay":`Delay before pausing`,"devices.window_close_delay":`Delay before resuming`,"devices.add_entity":`Add entity`,"devices.done":`Done`,"devices.other_area":`Other area`,"devices.type_thermostat":`Thermostat`,"devices.type_ac":`Climate Device`,"devices.type_label":`Type`,"devices.select_to_configure":`Select a device to configure`,"devices.heating_system_type":`Heating System Type`,"devices.heating_system_type_info":`After heating stops, radiators and especially underfloor systems continue to release stored heat. RoomMind accounts for this residual heat to avoid overshooting and improve model accuracy. Underfloor rooms also get longer minimum run times.`,"devices.system_type_none":`Standard (no residual heat)`,"devices.system_type_radiator":`Radiator`,"devices.system_type_underfloor":`Underfloor Heating`,"devices.underfloor_delay_hint":`Underfloor heating has long restart times. A window-open delay of at least 5 minutes is recommended to avoid unnecessary shutoffs.`,"devices.heating_system_type_boost_hint":`Tip: If the heating system has changed, you can accelerate re-learning under Settings.`,"devices.idle_action":`When idle`,"devices.idle_action_off":`Turn off`,"devices.idle_action_fan_only":`Fan only`,"devices.idle_action_setback":`Setback`,"devices.idle_action_low":`Low setpoint (keep awake)`,"devices.idle_action_low_hint":`Lowers the setpoint to the device minimum instead of sending off. Prevents TRVs that hibernate in off mode from losing later commands.`,"devices.idle_fan_mode":`Fan speed`,"devices.setpoint_mode":`Setpoint mode`,"devices.setpoint_mode_proportional":`Proportional (valve control)`,"devices.setpoint_mode_direct":`Direct (device regulates)`,"devices.setpoint_mode_hint":`Direct sends the actual room target to the device — best for thermostats and space heaters that regulate themselves. Proportional sends a boosted setpoint toward the device max_temp — best for radiator valves (TRVs).`,"devices.valve_protection_excluded":`Excluded from valve protection`,"devices.valve_protection_exclude_hint":`This entity will not be cycled by valve protection (e.g. virtual boiler entities)`,"devices.info.types_title":`Device types`,"devices.info.types_body":`Thermostat means a radiator thermostat / TRV. Climate Device means an AC, heat pump, or other climate entity used for cooling or forced-air heating. Both are Home Assistant climate entities; the distinction is how RoomMind controls them.`,"devices.info.control_title":`How RoomMind controls them`,"devices.info.control_body":`Setpoint mode only applies to thermostats in Full Control rooms with an external temperature sensor. Use Proportional when RoomMind should drive heating output by sending boosted setpoints. Use Direct when the device should regulate itself around the real target temperature.`,"devices.info.modes_title":`Idle behavior`,"devices.info.modes_body":`When idle only applies to Climate Devices. Turn off powers the device down. Fan only keeps airflow without heating or cooling. Setback keeps the current mode active but moves the target 2°C away from the room target. This setback offset is currently fixed. For Thermostats, Low keeps the TRV active at its minimum setpoint instead of off, useful for battery-powered Zigbee TRVs that sleep when set to off.`,"devices.info.heat_source_title":`Smart source selection`,"devices.info.heat_source_body":`This appears only when a room has both a thermostat/TRV and a Climate Device plus an external temperature sensor. RoomMind can then choose which source should handle heating based on temperature gap and outdoor conditions.`,"hero.window_open":`Window open – paused`,"card.window_open":`Window open`,"room.section.covers":`Covers & Blinds`,"covers.section_title":`Covers & Blinds`,"covers.auto_control":`Automatic blind control`,"covers.auto_control_hint":`RoomMind closes blinds when solar gain is predicted to overheat the room.`,"covers.deploy_threshold":`Deploy threshold`,"covers.deploy_threshold_hint":`Close blinds when predicted temperature exceeds target by this amount.`,"covers.min_position":`Minimum open position`,"covers.min_position_hint":`Blinds will never close further than this (0 = fully closed allowed).`,"covers.override_minutes":`Override pause duration`,"covers.override_minutes_hint":`How long to pause automatic control after manual cover movement. Set to 0 for no pause.`,"covers.no_covers":`No cover entities configured.`,"covers.no_covers_in_area":`No cover entities found in this area.`,"covers.add_cover":`Add cover entity...`,"covers.shading_active":`Shading active`,"covers.auto_paused":`Auto paused (manual override)`,"covers.done":`Done`,"covers.night_close":`Close at night`,"covers.night_close_hint":`Automatically close covers at sunset and open at sunrise.`,"covers.night_close_active":`Night closing active`,"covers.schedule_group_title":`Schedule`,"covers.solar_group_title":`Solar control`,"covers.schedule_section":`Cover schedules`,"covers.schedule_section_hint":`Define time windows for cover control using HA schedule helpers. In Force position mode the schedule's position overrides solar/thermal logic. In Allow solar protection mode RoomMind decides the position within the active window.`,"covers.add_schedule":`Add cover schedule...`,"covers.schedule_mode_force":`Force position`,"covers.schedule_mode_gate":`Allow solar protection`,"covers.schedule_mode_gate_short":`Solar gate`,"covers.schedule_position":`Position`,"covers.schedule_position_hint":`Cover position when this schedule is active (0% = fully closed, 100% = fully open).`,"covers.schedule_selector":`Schedule selector entity`,"covers.schedule_selector_hint":`Choose which schedule is active. input_boolean: off=#1, on=#2. input_number: value selects schedule number.`,"covers.schedule_selector_warning":`Multiple schedules configured but no selector set. Only the first schedule will be used.`,"covers.schedule_state_active":`Active`,"covers.schedule_state_inactive":`Inactive`,"covers.schedule_state_unreachable":`Unreachable`,"covers.schedule_active":`Schedule active`,"covers.schedule_create_link":`Create schedule helper`,"covers.night_position":`Night position`,"covers.night_position_hint":`Cover position when night close is active (0% = fully closed). Covers with an individual min. position will never go below that.`,"covers.night_close_advanced":`Advanced`,"covers.night_close_elevation":`Sun position threshold`,"covers.night_close_elevation_hint":`How far below or above the horizon the sun must be. 0° = exactly at sunset/sunrise. Negative = darker (e.g. -6° = dusk, when it's noticeably dark). Positive = still bright (e.g. 5° = sun still visible above horizon).`,"covers.night_close_offset":`Time offset`,"covers.night_close_offset_hint":`Additional shift relative to the sun position threshold. Positive = close later (e.g. +20 = 20 min after threshold is reached), negative = close earlier.`,"covers.outdoor_min_temp":`Min. outdoor temperature`,"covers.outdoor_min_temp_hint":`Don't close covers for solar protection below this outdoor temperature. Solar heat gain is welcome when it's cold.`,"covers.per_cover_title":`Per-cover settings`,"covers.per_cover_hint":`Set the compass direction each cover faces and optional individual minimum positions.`,"covers.per_cover_min_short":`Min`,"covers.per_cover_min_position":`Min. position`,"covers.per_cover_min_position_hint":`Individual minimum position per cover. Covers will never close further than this. Useful when blinds are physically fully closed at a position > 0%.`,"covers.snap_deploy":`Snap to minimum position`,"covers.snap_deploy_hint":`Close covers directly to the minimum position instead of gradually closing. Recommended for triple-pane windows where intermediate positions can cause thermal stress.`,"covers.info.selection_title":`Cover selection`,"covers.info.selection_body":`Select covers/blinds from this area or add entities from other areas. RoomMind tracks their position and can control them automatically.`,"covers.info.schedule_title":`Schedule control`,"covers.info.schedule_body":`Use HA schedule helpers to define times when covers should close (e.g. privacy in the evening). The schedule's position attribute determines how far they close. Schedules override all other automatic logic.`,"covers.info.solar_title":`Solar/thermal control`,"covers.info.solar_body":`When automatic control is enabled, RoomMind predicts whether solar radiation will overheat the room and closes blinds preventively. It uses learned thermal data when available, otherwise a conservative default. The deploy threshold controls how much predicted overshoot is needed before blinds close.`,"covers.info.night_title":`Night closing`,"covers.info.night_body":`Closes covers at sunset and opens them at sunrise. You can set a custom night position (e.g. 10% = almost closed but not fully).`,"covers.info.override_title":`Manual override`,"covers.info.override_body":`If you manually move a cover, RoomMind detects this and pauses automatic control for the configured duration. This prevents fighting with the user.`,"covers.info.priority_title":`Priority order`,"covers.info.priority_body":`Manual override > Schedule > Night close > Solar/thermal control. Higher priority rules always win. When no rule applies, covers stay open.`,"covers.info.entities_title":`HA entities`,"covers.info.entities_body":`RoomMind creates two entities per room for external use: switch.roommind_{area}_cover_auto (enable/disable automatic cover control — usable in automations or dashboards) and binary_sensor.roommind_{area}_cover_paused (on when manual override is active, e.g. after manually moving a cover).`,"covers.orientation_group_title":`Cover orientation`,"covers.orientation_hint":`Set the compass direction each cover faces. RoomMind uses this to skip solar deployment when the sun is not shining on that side of the building.`,"covers.orientation_none":`Any direction`,"covers.orientation_N":`N`,"covers.orientation_NE":`NE`,"covers.orientation_E":`E`,"covers.orientation_SE":`SE`,"covers.orientation_S":`S`,"covers.orientation_SW":`SW`,"covers.orientation_W":`W`,"covers.orientation_NW":`NW`,"covers.orientation_N_full":`North`,"covers.orientation_NE_full":`Northeast`,"covers.orientation_E_full":`East`,"covers.orientation_SE_full":`Southeast`,"covers.orientation_S_full":`South`,"covers.orientation_SW_full":`Southwest`,"covers.orientation_W_full":`West`,"covers.orientation_NW_full":`Northwest`,"settings.general_title":`General`,"settings.group_by_floor":`Group rooms by floor`,"settings.climate_control_active":`Climate control active`,"settings.climate_control_hint":`When disabled, RoomMind continues to monitor all sensors and train the model, but will not send any commands to your heating or cooling devices.`,"settings.learning_title":`Model Training`,"settings.learning_hint":`When paused, RoomMind stops collecting new measurement data and training the thermal model. Existing model data is preserved.`,"settings.learning_exceptions":`Exceptions`,"settings.learning_room_paused":`room paused`,"settings.learning_rooms_paused":`rooms paused`,"settings.sensors_title":`Sensors & Data Sources`,"settings.control_title":`Control`,"settings.outdoor_sensor":`Outdoor Temperature`,"settings.outdoor_sensor_label":`Outdoor temperature sensor`,"settings.outdoor_current":`Currently {temp}{unit} outside`,"settings.outdoor_waiting":`Waiting for sensor data...`,"settings.outdoor_humidity_sensor":`Outdoor Humidity`,"settings.outdoor_humidity_label":`Outdoor humidity sensor`,"settings.outdoor_humidity_current":`Currently {value}% outside`,"settings.smart_control":`Smart Climate Control`,"settings.smart_control_hint":`Configure outdoor temperature limits for heating and cooling.`,"settings.outdoor_cooling_min":`Minimum outdoor temp for cooling`,"settings.outdoor_cooling_min_hint":`AC stays off when outdoor temperature is below this value`,"settings.outdoor_heating_max":`Maximum outdoor temp for heating`,"settings.outdoor_heating_max_hint":`Heating stays off when outdoor temperature exceeds this value`,"settings.saving":`Saving...`,"settings.saved":`Saved`,"settings.error":`Error saving`,"devices.using_builtin_sensor":`Using thermostat's built-in sensor`,"settings.climate_intelligence":`Climate Intelligence`,"settings.control_mode":`Control Mode`,"settings.control_mode_simple":`Simple (Bang-Bang)`,"settings.control_mode_mpc":`Intelligent (MPC)`,"settings.control_mode_hint":`MPC learns your room's thermal behavior for optimal control`,"settings.comfort_weight":`Priority`,"settings.comfort_weight_comfort":`Comfort`,"settings.comfort_weight_efficiency":`Efficiency`,"settings.comfort_weight_hint":`Balances temperature precision against energy use. Comfort reacts earlier and stays closer to target. Efficiency allows more drift to reduce heating/cooling runtime.`,"settings.weather_entity":`Weather Forecast`,"settings.weather_entity_hint":`Optional: enables predictive outdoor temperature planning, and acts as a fallback when the outdoor sensor is unavailable`,"settings.outdoor_unavailable_notify":`Notify when outdoor temperature is unavailable`,"settings.outdoor_unavailable_notify_hint":`Show a Home Assistant notification when neither the outdoor sensor nor the weather entity has reported a temperature for 30 minutes. While this is the case, RoomMind pauses thermal model learning to avoid corruption.`,"settings.prediction_enabled":`Temperature prediction`,"settings.prediction_enabled_hint":`Show predicted temperature trend in analytics charts. Disable if you experience slow performance.`,"vacation.title":`Vacation Mode`,"vacation.hint":`Sets all rooms to a setback temperature until the end date.`,"vacation.active_label":`Vacation mode active`,"vacation.end_date":`End date & time`,"vacation.setback_temp":`Setback temperature`,"vacation.no_end_date":`No end date`,"vacation.deactivate":`Deactivate`,"tabs.analytics":`Analytics`,"analytics.select_room":`Select Room`,"analytics.temperature":`Temperature`,"analytics.target":`Target`,"analytics.prediction":`Prediction`,"analytics.outdoor":`Outdoor`,"analytics.model_status":`Model Status`,"analytics.confidence":`Confidence`,"analytics.heating_rate":`Heating Strength`,"analytics.cooling_rate":`Cooling Strength`,"analytics.solar_gain":`Solar Gain`,"analytics.occupancy_gain":`Occupancy Gain`,"analytics.time_constant":`Time Constant`,"analytics.samples":`Samples`,"analytics.prediction_accuracy":`Prediction Accuracy`,"analytics.avg_deviation":`Avg. Deviation`,"analytics.data_sources":`Data Sources`,"analytics.data_points":`Data Points`,"analytics.control_mode":`Control Mode`,"analytics.control_mode_mpc":`MPC active`,"analytics.control_mode_bangbang":`MPC learning`,"analytics.last_model_update":`Last Model Update`,"analytics.accuracy_idle":`Accuracy (Idle)`,"analytics.accuracy_heating":`Accuracy (Heating)`,"analytics.info.accuracy_idle":`How precisely the model predicts temperature when neither heating nor cooling is active. A lower value means the model understands your room's natural heat loss well. This is the first value to improve because idle data is collected continuously.`,"analytics.info.accuracy_heating":`How precisely the model predicts temperature during active heating. This value stays high initially because the model needs real heating cycles to learn from. Once your heating has run a few times, this value will drop and MPC control becomes available.`,"analytics.info.confidence":`Overall model readiness for intelligent MPC control, combining two factors: data quantity (how many idle and active-mode samples have been collected) and prediction accuracy (how precise the temperature forecasts are). Confidence starts at 0% and rises as the model collects data and learns. Around 50% means enough idle data but still waiting for heating/cooling cycles. Above 80% means the model has enough data and accurate predictions — MPC control becomes available. 100% is the theoretical maximum when predictions are as accurate as physically possible.`,"analytics.info.time_constant":`How long it takes your room to naturally cool down halfway toward the outdoor temperature when heating is off. A longer time constant means better insulation — the room holds warmth longer. A short time constant means the room cools quickly. The model learns this by observing temperature drops during idle periods.`,"analytics.info.heating_rate":`How strongly your heating affects the room temperature. A higher value means your heating system warms the room faster relative to its thermal mass. The model learns this by observing how quickly the temperature rises during active heating, and uses it to predict how long heating needs to run.`,"analytics.info.cooling_rate":`How strongly your AC affects the room temperature. A higher value means the AC cools the room faster relative to its thermal mass. The model learns this by observing how quickly the temperature drops during active cooling, and uses it to predict how long the AC needs to run.`,"analytics.info.solar_gain":`The estimated effect of solar radiation through windows on room temperature. The model learns this by observing how the room warms during sunny periods when heating is off. Rooms with large south-facing windows will have higher values. The model uses this to reduce heating when solar gain is expected.`,"analytics.info.occupancy_gain":`The estimated heat contribution from occupancy (people, pets, computers) while the room is occupied. The model learns this by observing temperature changes when the configured occupancy sensors are active. Separating this from solar gain prevents body heat from being misattributed to sunlight. Only shown when at least one occupancy sensor is configured for this room.`,"analytics.info.data_sources":`Number of measurement samples used for model training.`,"analytics.info.data_points":`Total number of observations the model has been trained on. More data points generally lead to better predictions. The model collects a new data point roughly every 3 minutes while RoomMind is running.`,"analytics.no_data":`No data yet — model is learning`,"analytics.loading":`Loading analytics...`,"settings.reset_title":`Reset Thermal Data`,"settings.reset_hint":`Clear learned thermal model data and history. The model will start learning from scratch.`,"settings.reset_all_label":`All rooms`,"settings.reset_all_hint":`Clear thermal data and history for all rooms at once.`,"settings.reset_all_btn":`Reset all`,"settings.reset_all_confirm":`Clear all learned thermal data and history for ALL rooms? All models will start learning from scratch.`,"settings.reset_room_label":`Individual room`,"settings.reset_room_hint":`Select a room to clear its thermal data and history.`,"settings.reset_room_confirm":`Clear all learned thermal data and history for this room? The model will start learning from scratch.`,"settings.reset_room_select":`Select room`,"settings.reset_btn":`Reset`,"settings.reset_no_rooms":`No configured rooms.`,"settings.boost_title":`Accelerate Learning`,"settings.boost_hint":`The thermal model learns your room's heating and cooling behavior over time. After major changes (new radiator, AC, insulation, furniture), the model may be inaccurate. This increases the model's uncertainty so it adapts faster to new conditions.`,"settings.boost_label":`Accelerate learning`,"settings.boost_room_select":`Select room`,"settings.boost_btn":`Accelerate`,"settings.boost_cooldown":`Active – re-learning in progress`,"settings.boost_no_rooms":`No configured rooms.`,"analytics.range_1d":`Today`,"analytics.range_2d":`2 days`,"analytics.range_7d":`Week`,"analytics.range_30d":`Month`,"analytics.export":`Measurements`,"analytics.heating_period":`Heating`,"analytics.cooling_period":`Cooling`,"analytics.blind_position":`Blind position`,"analytics.window_open_period":`Window open`,"analytics.chart_info_title":`How to read this chart`,"analytics.exported":`Exported!`,"analytics.copy_diagnostics":`Diagnostics`,"analytics.export_download":`Download file`,"analytics.export_clipboard":`Copy to clipboard`,"analytics.copied_to_clipboard":`Copied!`,"analytics.range_from":`From`,"analytics.range_to":`To`,"analytics.chart_info_body":`**Lines:** The solid orange line shows the measured room temperature. The green dashed line is the target temperature from your schedule. The blue dotted line is the model's temperature prediction.

**Shaded areas:** Red shading marks heating periods, blue marks cooling, and teal marks times when a window was open.

**Future forecast (right of the 'now' line):** The green dashed line shows the upcoming schedule targets for the next 3 hours. The blue dotted line shows the predicted temperature trend.

**Prediction modes:** When 'MPC active' is shown, the prediction uses the full MPC optimizer with intelligent pre-heating/pre-cooling. While the model is still learning, a simpler simulation is used.

**Limitations:** The prediction assumes current conditions stay constant (outdoor temperature, window state). The simulation accuracy depends on how well the thermal model has learned your room — early on, predictions may be less accurate. Once MPC activates, predictions become significantly more reliable.`,"presence.title":`Presence Detection`,"presence.hint":`Uses eco temperature when nobody is home.`,"presence.hint_detail":`When enabled, all rooms switch to eco temperature as soon as none of the configured persons are home. You can optionally restrict per room which persons are relevant.`,"presence.add_person":`Add person`,"presence.add_entity":`Add presence entity`,"presence.person_label":`Person`,"room.section.presence":`Presence`,"presence.room_help_header":`How does per-room presence work?`,"presence.room_help_body":`Select which persons are relevant for this room. The room switches to eco temperature when none of the selected persons are home. Without selection, the global rule applies: eco when nobody is home.`,"presence.state_home":`Home`,"presence.state_away":`Away`,"presence.room_none_assigned":`Global rule — eco when nobody is home`,"presence.ignore_toggle":`Ignore presence`,"presence.ignore_hint":`Controls how this room reacts to presence. You can assign specific persons below. The room switches to eco when none of the assigned persons are home. Use the toggle above to skip detection entirely and always follow the schedule.`,"presence.help_ignore_title":`What does "Ignore presence" do?`,"presence.help_ignore_body":`When enabled, this room skips presence detection entirely. It always follows its schedule and never switches to eco based on who is home. Useful for rooms that should maintain temperature regardless of presence, such as a server room, a pet room, or a guest room used by someone not tracked by Home Assistant.`,"presence.tile_ignored":`Presence detection is ignored. Room always follows its schedule.`,"presence.away_action_label":`Action when nobody is home`,"presence.away_action_eco":`Use eco temperature`,"presence.away_action_off":`Turn off devices`,"presence.clears_override_label":`Absence stops override`,"presence.clears_override_hint":`When nobody is home, manual overrides are paused and the room follows the away action. When someone returns, the override resumes until it expires.`,"card.presence_away":`Away`,"valve_protection.title":`Valve Protection`,"valve_protection.hint":`Periodically opens idle TRV valves briefly to prevent seizing or calcification.`,"valve_protection.interval_label":`Cycle interval`,"valve_protection.interval_suffix":`days`,"valve_protection.interval_hint":`How long a valve can be idle before being cycled (1–90 days)`,"compressor.title":`Compressor Protection`,"compressor.no_groups":`No compressor groups configured.`,"compressor.add_group":`Add compressor group`,"compressor.group_name":`Group name`,"compressor.members":`Indoor units`,"compressor.members_hint":`Select all climate devices powered by this compressor (indoor splits, TRVs on radiators, fan coils).`,"compressor.min_run":`Minimum run time`,"compressor.min_run_hint":`Compressor must run at least this long once started.`,"compressor.min_run_suffix":`min`,"compressor.min_off":`Minimum off time`,"compressor.min_off_hint":`Compressor must stay off at least this long after stopping.`,"compressor.min_off_suffix":`min`,"compressor.delete":`Delete group`,"compressor.delete_confirm":`Delete compressor group "{name}"?`,"compressor.master_entity":`Master device`,"compressor.master_entity_hint":`The central unit that powers the indoor devices in this group, e.g. a gas boiler, outdoor heat pump unit, or ducted AC master switch. RoomMind will turn it on when any room needs heating or cooling, and off when all rooms are idle. Leave empty to use only the action script or short-cycle protection.`,"compressor.conflict_resolution":`Conflict resolution`,"compressor.conflict_resolution_hint":`Determines what happens when some rooms need heating while others need cooling at the same time. Heating priority: heating always wins (safest for frost protection). Cooling priority: cooling always wins. Majority: the mode with more rooms wins, ties go to heating. Outdoor temperature: uses the outdoor heating max threshold from settings to decide automatically.`,"compressor.conflict_heating_priority":`Heating priority (frost protection)`,"compressor.conflict_cooling_priority":`Cooling priority`,"compressor.conflict_majority":`Majority wins`,"compressor.conflict_outdoor_temp":`Based on outdoor temperature`,"compressor.action_script":`Action script`,"compressor.action_script_hint":`A Home Assistant script that runs whenever the heating/cooling demand changes. Useful for systems that need special commands, e.g. cancelling a Vaillant Quick Veto or toggling a relay. Works with or without a master device. Without a master device, only the script is triggered. Receives variables: action (heat/cool/idle), master_entity, members, active_members.`,"compressor.enforce_uniform_mode":`Enforce uniform mode`,"compressor.enforce_uniform_mode_hint":`All thermostats in this group must operate in the same HVAC mode (all heating or all cooling). Rooms that disagree with the resolved group mode will be set to idle. Use this for heat pumps that start automatically but require all connected units to run the same mode.`,"mold.title":`Mold Risk Protection`,"mold.detection":`Mold Detection`,"mold.detection_desc":`Receive notifications when humidity indicates mold risk`,"mold.threshold":`Humidity threshold (%)`,"mold.threshold_hint":`Alert when room humidity stays above this value`,"mold.sustained":`Sustained duration (minutes)`,"mold.sustained_hint":`Alert only after risk persists for this long`,"mold.prevention":`Mold Prevention`,"mold.prevention_desc":`Automatically raise temperature to reduce mold risk`,"mold.intensity":`Intensity`,"mold.intensity_light":`Light (+{delta}{unit})`,"mold.intensity_medium":`Medium (+{delta}{unit})`,"mold.intensity_strong":`Strong (+{delta}{unit})`,"mold.intensity_hint":`Warmer air reduces surface humidity on cold walls. Light is usually sufficient for moderate risk, Strong can lower surface humidity by up to 8–10% — but uses noticeably more energy.`,"card.mold_warning":`Mold risk`,"card.mold_critical":`Mold danger!`,"card.mold_prevention":`Mold prevention +{delta}{unit}`,"room.mold_surface_rh":`Est. surface humidity: {value}%`,"settings.intro.general":`Basic display and control settings.`,"settings.intro.sensors":`Configure outdoor sensors and weather data for accurate climate control.`,"settings.intro.control":`Choose how RoomMind controls your climate devices and set priority and thresholds.`,"settings.intro.presence":`Automatically reduce temperature when nobody is home.`,"settings.intro.vacation":`Set all rooms to a reduced temperature while you are away.`,"settings.intro.valve":`Periodically move idle TRV valves to prevent seizing or calcification.`,"settings.intro.compressor":`Manage groups of indoor units that share an outdoor compressor or central heating source. Optionally assign a master device (boiler, outdoor unit) to automatically turn on/off based on room demand. Short-cycle protection prevents rapid on/off switching that can damage equipment.`,"settings.intro.mold":`Monitor humidity and automatically reduce mold risk.`,"settings.intro.notifications":`Configure who receives alerts and how.`,"settings.intro.learning":`Manage thermal model training and accelerate re-learning after changes.`,"settings.intro.reset":`Clear learned thermal model data. The model will start learning from scratch.`,"notifications.title":`Notifications`,"notifications.enabled":`Enable notifications`,"notifications.enabled_hint":`When disabled, no notifications are sent — neither to devices nor to the HA sidebar.`,"notifications.desc":`Choose which devices receive alerts. Without targets, alerts appear in the HA sidebar.`,"notifications.add_target_label":`Add notification device`,"notifications.add_target_hint":`Type the entity ID if your device is not listed (e.g. notify.mobile_app_...). You can find it under Settings → Devices → your phone → Notify entity.`,"notifications.target_unnamed":`Unnamed device`,"notifications.target_person":`Person`,"notifications.target_when_always":`Always`,"notifications.target_when_home":`Only when home`,"notifications.cooldown":`Notification cooldown (minutes)`,"notifications.cooldown_hint":`Minimum time between repeated alerts per room`,"notifications.mold_prevention_notify":`Notify when mold prevention activates`,"notifications.mold_prevention_notify_hint":`Also send a notification when prevention activates (temperature raised)`,"room.section.heat_source":`Heat Source Orchestration`,"heat_source.toggle":`Smart source selection`,"heat_source.toggle_hint":`When this room has both radiator thermostats and an AC/heat pump, RoomMind intelligently routes heating demand to the most efficient device based on temperature gap and outdoor conditions.`,"heat_source.primary_delta":`Boiler activation threshold`,"heat_source.primary_delta_hint":`Only activate the primary source when the temperature gap exceeds this value. Below this threshold, only the fast secondary source is used.`,"heat_source.primary_delta_suffix":`°C`,"heat_source.outdoor_threshold":`Outdoor preference switchover`,"heat_source.outdoor_threshold_hint":`Above this outdoor temperature, prefer the AC/heat pump (higher efficiency). Below, prefer the gas boiler/radiator.`,"heat_source.outdoor_threshold_suffix":`°C`,"heat_source.ac_min_outdoor":`Min. outdoor temp for AC heating`,"heat_source.ac_min_outdoor_hint":`Disable AC heating entirely below this temperature to protect the heat pump hardware.`,"heat_source.ac_min_outdoor_suffix":`°C`,"heat_source.summary_disabled":`Smart source selection is off`},de:{"panel.title":`RoomMind`,"panel.subtitle":`Klimasteuerung`,"panel.tab.rooms":`Räume`,"panel.tab.settings":`Einstellungen`,"panel.edit":`Raum bearbeiten`,"panel.loading":`Laden...`,"panel.no_areas":`Keine Bereiche in Home Assistant konfiguriert.`,"panel.no_areas_hint":`Bereiche in den HA-Einstellungen anlegen.`,"badge.beta":`Beta`,"badge.beta_hint":`Dieses Feature ist in der Beta-Phase und kann sich in zukünftigen Updates noch ändern.`,"common.learn_more":`Mehr erfahren`,"panel.stat.rooms":`Räume`,"panel.stat.heating":`Heizen`,"panel.stat.cooling":`Kühlen`,"panel.stat.vacation":`Urlaub`,"panel.stat.away":`Abwesend`,"panel.stat.mold":`Schimmel`,"panel.hide_room":`Ausblenden`,"panel.unhide":`Einblenden`,"panel.hidden_rooms":`Ausgeblendete Räume`,"panel.floor_other":`Sonstige`,"panel.reorder":`Räume sortieren`,"panel.reorder_done":`Fertig`,"room.back":`Zurück zu den Räumen`,"room.section.climate_mode":`Klimamodus`,"room.section.schedule":`Zeitplan & Temperaturen`,"room.section.control_mode":`Steuerungsmodus`,"room.section.devices":`Geräte`,"room.section.sensors":`Sensoren`,"room.section.windows":`Fenstersensoren`,"room.control_mode.full_control":`Full Control`,"room.control_mode.managed":`Managed`,"room.control_mode.external_sensor":`Externer Sensor: {sensor}`,"room.control_mode.no_sensor":`Kein externer Temperatursensor zugewiesen`,"room.control_mode.mpc_active":`MPC aktiv`,"room.control_mode.mpc_learning":`Lernphase`,"room.control_mode.device_setpoint":`Geräte-Setpoint: {temp}`,"room.control_mode.power":`Leistung: {power}%`,"room.control_mode.full_control_info":`RoomMind hat volle Kontrolle über deine Klimageräte. Ein externer Temperatursensor liefert die tatsächliche Raumtemperatur, was eine proportionale Setpoint-Berechnung ermöglicht. Der Geräte-Setpoint wird dynamisch basierend auf der MPC-Leistung angepasst. Das thermische Modell (EKF) lernt das Verhalten deines Raums für optimalen Komfort und Energieeffizienz.`,"room.control_mode.managed_info":`RoomMind setzt die Zieltemperatur auf deinem Gerät (aus Zeitplan, Override oder Urlaubsmodus), aber das Gerät regelt selbstständig mit seinem internen Sensor. Kein proportionaler Boost, kein thermisches Modell-Lernen und keine MPC-Optimierung. Für präzisere Steuerung einen externen Temperatursensor in der Geräte-Sektion zuweisen.`,"room.delete":`Raum löschen`,"room.deleting":`Wird gelöscht...`,"room.saving":`Speichern...`,"room.saved":`Gespeichert`,"room.error_saving":`Fehler beim Speichern`,"room.confirm_delete":`RoomMind-Konfiguration für "{name}" entfernen?`,"room.error_save_fallback":`Konfiguration konnte nicht gespeichert werden`,"room.error_delete_fallback":`Konfiguration konnte nicht gelöscht werden`,"room.climate_control_toggle":`Klimasteuerung`,"room.climate_control_hint":`Wenn deaktiviert, steuert RoomMind keine Geräte in diesem Raum`,"room.outdoor_toggle":`Außenbereich`,"room.outdoor_hint":`Deaktiviert Klimasteuerung, Schimmelerkennung und Modell-Training. Sensorüberwachung läuft weiter.`,"room.alias.placeholder":`Eigener Anzeigename`,"room.alias.clear":`Auf Bereichsname zurücksetzen`,"override.label":`Temporärer Override`,"override.comfort":`Komfort`,"override.eco":`Eco`,"override.custom":`Individuell`,"override.target":`Ziel:`,"override.activate_for":`Aktivieren für:`,"override.error_set":`Override konnte nicht gesetzt werden`,"override.error_clear":`Override konnte nicht aufgehoben werden`,"hero.target":`Ziel`,"hero.override":`Override`,"hero.remaining":`noch {time}`,"hero.humidity":`{value}% Luftfeuchtigkeit`,"hero.device_setpoint":`Gerät auf {value}{unit}`,"hero.heat_source_primary":`Heizung: TRV`,"hero.heat_source_secondary":`Heizung: AC`,"hero.heat_source_both":`Heizung: TRV + AC`,"hero.permanent":`Dauerhaft`,"hero.waiting":`Warte auf Sensordaten...`,"hero.not_configured":`Noch nicht konfiguriert`,"hero.mpc_learning_paused":`MPC-Lernen pausiert`,"hero.mpc_learning_paused.outdoor_unavailable":`RoomMind benötigt eine Außentemperatur, um das thermische Modell dieses Raums zu lernen. Der konfigurierte Außensensor ist nicht verfügbar und es ist keine Wetter-Entity als Fallback gesetzt. Konfiguriere eine der beiden in den Einstellungen.`,"card.target":`Ziel`,"card.waiting":`Warte auf Daten...`,"card.humidity":`{value}% Luftfeuchtigkeit`,"card.thermostat":`Thermostat`,"card.thermostats":`Thermostate`,"card.ac":`Klimaanlage`,"card.acs":`Klimaanlagen`,"card.climate_device":`Klimagerät`,"card.climate_devices":`Klimageräte`,"card.temp_sensor":`Temperatursensor`,"card.temp_sensors":`Temperatursensoren`,"card.no_climate":`Keine Klimageräte`,"card.outdoor":`Außen`,"card.tap_configure":`Tippen zum Konfigurieren`,"card.mpc_active":`MPC aktiv`,"card.mpc_learning":`MPC lernt`,"card.not_controlled":`Nicht von RoomMind gesteuert`,"mode.auto":`Automatisch`,"mode.auto_desc":`Heizt und kühlt automatisch basierend auf der Zieltemperatur`,"mode.heat_only":`Nur Heizen`,"mode.heat_only_desc":`Nutzt nur Thermostate, Klimaanlagen bleiben aus`,"mode.cool_only":`Nur Kühlen`,"mode.cool_only_desc":`Nutzt nur Klimaanlagen, Thermostate bleiben aus`,"mode.heating":`Heizen`,"mode.cooling":`Kühlen`,"mode.idle":`Standby`,"schedule.add_schedule":`Zeitplan hinzufügen`,"schedule.select_schedule":`Zeitplan-Helfer auswählen`,"schedule.create_helper_hint":`Neuen Zeitplan-Helfer in HA erstellen`,"schedule.selector_label":`Zeitplan-Auswahl`,"schedule.selector_value_boolean":`Aktuell: {value}`,"schedule.selector_value_number":`Aktueller Wert: {value}`,"schedule.selector_warning":`Mehrere Zeitpläne, aber keine Auswahl-Entity gesetzt. Nur der erste wird verwendet.`,"schedule.off_action_label":`Aktion wenn Zeitplan aus`,"schedule.off_action_eco":`Eco-Temperatur verwenden`,"schedule.off_action_off":`Geräte ausschalten`,"schedule.state_active":`Aktiv`,"schedule.state_inactive":`Inaktiv`,"schedule.state_unreachable":`Nicht erreichbar`,"schedule.no_schedules":`Keine Zeitpläne konfiguriert`,"schedule.done":`Fertig`,"schedule.view_comfort":`Komfort: {temp}{unit}`,"schedule.view_eco":`Eco: {temp}{unit}`,"schedule.view_selector":`Aktiver Zeitplan gewählt durch: {name}`,"schedule.view_selector_prefix":`Aktiver Zeitplan gewählt durch:`,"schedule.help_header":`Wie funktionieren Zeitpläne?`,"schedule.help_temps_title":`Wie wird die Zieltemperatur bestimmt?`,"schedule.help_temps":`Die Zieltemperatur folgt dieser Prioritätskette:`,"schedule.help_temps_1":`<strong>Manueller Override</strong> – Ein temporärer Komfort-/Eco-/Individueller Override hat immer die höchste Priorität.`,"schedule.help_temps_2":`<strong>Block-Temperatur</strong> – Wenn der aktive Zeitblock einen <code>temperature</code>-Wert in seinen Daten hat, wird dieser verwendet.`,"schedule.help_temps_3":`<strong>Komforttemperatur</strong> – Wenn der Zeitplan "an" ist, aber der Block keine Temperatur hat, wird die Komfort-Fallback-Temperatur verwendet.`,"schedule.help_temps_4":`<strong>Eco-Temperatur</strong> – Wenn der Zeitplan "aus" ist (außerhalb aller Zeitblöcke), wird die Eco-Temperatur verwendet.`,"schedule.help_block_title":`Temperatur pro Zeitblock setzen`,"schedule.help_block":`Du kannst für jeden Zeitblock eine eigene Temperatur setzen, indem du einen <code>temperature</code>-Wert in der YAML-Konfiguration des Zeitplans angibst:`,"schedule.help_block_note":`Wenn ein Block keinen <code>temperature</code>-Wert hat, wird stattdessen die Komfort-Fallback-Temperatur verwendet.`,"schedule.help_split_title":`Getrennte Heiz-/Kühlziele pro Block`,"schedule.help_split":`Für Räume im Auto-Modus kannst du pro Zeitblock separate Heiz- und Kühlziele mit <code>heat_temperature</code> und <code>cool_temperature</code> setzen:`,"schedule.help_split_note":`Wenn nur eines gesetzt ist, wird das andere auf die Komforttemperatur des Raumes zurückgesetzt. Diese Schlüssel haben Vorrang vor <code>temperature</code>.`,"schedule.help_multi_title":`Mehrere Zeitpläne`,"schedule.help_multi":`Du kannst mehrere Zeitpläne hinzufügen und mit einer <strong>Auswahl-Entity</strong> zwischen ihnen wechseln. Das kann ein <code>input_boolean</code> (wechselt zwischen Zeitplan 1 und 2) oder ein <code>input_number</code> (wählt nach Nummer) sein. Ohne Auswahl-Entity wird nur der erste Zeitplan verwendet.`,"schedule.column_comfort":`Komfort`,"schedule.column_eco":`Eco`,"schedule.row_heat":`Heizen`,"schedule.row_cool":`Kühlen`,"schedule.view_heat":`Heizen: {comfort} / {eco}{unit}`,"schedule.view_cool":`Kühlen: {comfort} / {eco}{unit}`,"schedule.comfort_hint_auto":`Komfort: Ziel wenn Zeitplan an. Eco: Ziel wenn Zeitplan aus. Zeilen: Ziel für Heizen bzw. Kühlen.`,"schedule.comfort_label":`Komfort-Fallback-Temperatur`,"schedule.eco_label":`Eco-Temperatur`,"schedule.comfort_hint":`Wird verwendet wenn der Zeitplan "an" ist, aber keine Temperatur im Block gesetzt ist`,"schedule.from_schedule":`{temp}{unit} vom Zeitplan`,"schedule.from_schedule_split":`{heat}{unit} / {cool}{unit} vom Zeitplan`,"schedule.fallback":`{temp}{unit} (Fallback)`,"schedule.eco_detail":`{temp}{unit} (Eco)`,"devices.climate_entities":`Klimageräte`,"devices.temp_sensors":`Temperatursensoren`,"devices.humidity_sensors":`Feuchtigkeitssensoren`,"devices.no_climate":`Keine Klimageräte in diesem Bereich gefunden.`,"devices.no_temp_sensors":`Keine Temperatursensoren in diesem Bereich gefunden.`,"devices.no_humidity_sensors":`Keine Feuchtigkeitssensoren in diesem Bereich gefunden.`,"devices.occupancy_sensors":`Anwesenheitssensoren`,"devices.no_occupancy_sensors":`Keine Anwesenheitssensoren in diesem Bereich gefunden`,"devices.occupancy_sensor_hint":`Verbessert die Genauigkeit des Wärmemodells durch Erkennung der Raumbelegung`,"devices.window_sensors":`Fenster- / Türsensoren`,"devices.no_window_sensors":`Keine Fenster-/Türsensoren in diesem Bereich gefunden.`,"devices.window_open_delay":`Verzögerung vor Pause`,"devices.window_close_delay":`Verzögerung vor Wiederaufnahme`,"devices.add_entity":`Entität hinzufügen`,"devices.done":`Fertig`,"devices.other_area":`Anderer Bereich`,"devices.type_thermostat":`Thermostat`,"devices.type_ac":`Klimagerät`,"devices.type_label":`Typ`,"devices.select_to_configure":`Gerät zum Konfigurieren auswählen`,"devices.heating_system_type":`Heizungstyp`,"devices.heating_system_type_info":`Nach dem Abschalten geben Heizkörper und besonders Fußbodenheizungen gespeicherte Wärme weiter ab. RoomMind berücksichtigt diese Nachlaufwärme, um Überschwingen zu vermeiden und die Modellgenauigkeit zu verbessern. Fußbodenheizungen erhalten außerdem längere Mindestlaufzeiten.`,"devices.system_type_none":`Standard (kein Nachlauf)`,"devices.system_type_radiator":`Heizkörper`,"devices.system_type_underfloor":`Fußbodenheizung`,"devices.underfloor_delay_hint":`Fußbodenheizung hat lange Anlaufzeiten. Eine Fenster-Verzögerung von mindestens 5 Minuten wird empfohlen, um unnötige Abschaltungen zu vermeiden.`,"devices.heating_system_type_boost_hint":`Tipp: Wenn sich die Heizungsart geändert hat, kannst du unter Einstellungen das Lernen beschleunigen.`,"devices.idle_action":`Im Leerlauf`,"devices.idle_action_off":`Ausschalten`,"devices.idle_action_fan_only":`Nur Ventilator`,"devices.idle_action_setback":`Absenkung`,"devices.idle_action_low":`Niedriger Sollwert (wach halten)`,"devices.idle_action_low_hint":`Senkt den Sollwert auf das Geräteminimum ab, statt auszuschalten. Verhindert, dass TRVs, die im Aus-Modus in Tiefschlaf gehen, spätere Befehle verlieren.`,"devices.idle_fan_mode":`Lüftergeschwindigkeit`,"devices.setpoint_mode":`Sollwert-Modus`,"devices.setpoint_mode_proportional":`Proportional (Ventilsteuerung)`,"devices.setpoint_mode_direct":`Direkt (Gerät regelt selbst)`,"devices.setpoint_mode_hint":`Direkt sendet die tatsächliche Raum-Zieltemperatur ans Gerät — geeignet für Thermostate und Heizlüfter mit eigener Regelung. Proportional sendet einen erhöhten Sollwert Richtung Geräte-max_temp — geeignet für Heizkörperventile (TRVs).`,"devices.valve_protection_excluded":`Vom Ventilschutz ausgenommen`,"devices.valve_protection_exclude_hint":`Dieses Gerät wird nicht vom Ventilschutz bewegt (z.B. virtuelle Kessel-Entitäten)`,"devices.info.types_title":`Gerätetypen`,"devices.info.types_body":`Thermostat bedeutet Heizkörperthermostat / TRV. Klimagerät bedeutet AC, Wärmepumpe oder eine andere Klima-Entität für Kühlung oder Warmluftheizung. Beides sind Home-Assistant-Klima-Entitäten; der Unterschied liegt darin, wie RoomMind sie ansteuert.`,"devices.info.control_title":`Wie RoomMind sie steuert`,"devices.info.control_body":`Der Sollwert-Modus gilt nur für Thermostate in Räumen mit Full Control und externem Temperatursensor. Verwende Proportional, wenn RoomMind die Heizleistung über angehobene Sollwerte steuern soll. Verwende Direkt, wenn das Gerät selbst um den echten Zielwert regeln soll.`,"devices.info.modes_title":`Verhalten im Leerlauf`,"devices.info.modes_body":`Im Leerlauf gilt nur für Klimageräte. Ausschalten schaltet das Gerät aus. Nur Ventilator hält die Luftzirkulation ohne Heizen oder Kühlen aufrecht. Absenkung lässt den aktuellen Modus aktiv, verschiebt den Sollwert aber um 2°C vom Raumziel weg. Dieser Offset ist derzeit fest. Für Thermostate hält Niedrig den TRV aktiv auf minimalem Sollwert statt ihn auszuschalten, nützlich für batteriebetriebene Zigbee-TRVs, die beim Ausschalten in den Tiefschlaf gehen.`,"devices.info.heat_source_title":`Intelligente Quellenwahl`,"devices.info.heat_source_body":`Diese Funktion erscheint nur, wenn ein Raum sowohl ein Thermostat/TRV als auch ein Klimagerät und zusätzlich einen externen Temperatursensor hat. RoomMind kann dann je nach Temperaturdifferenz und Außenbedingungen auswählen, welche Quelle das Heizen übernimmt.`,"hero.window_open":`Fenster offen – pausiert`,"card.window_open":`Fenster offen`,"room.section.covers":`Rollos & Jalousien`,"covers.section_title":`Rollos & Jalousien`,"covers.auto_control":`Automatische Rollosteuerung`,"covers.auto_control_hint":`RoomMind schließt Rollos, wenn Solarwärme den Raum voraussichtlich überhitzen würde.`,"covers.deploy_threshold":`Auslöseschwelle`,"covers.deploy_threshold_hint":`Rollos schließen, wenn die vorhergesagte Temperatur den Zielwert um diesen Betrag übersteigt.`,"covers.min_position":`Minimale Öffnungsposition`,"covers.min_position_hint":`Rollos werden nie weiter als diese Position geschlossen (0 = vollständig schließen erlaubt).`,"covers.override_minutes":`Override-Pausendauer`,"covers.override_minutes_hint":`Wie lange die automatische Steuerung nach manueller Rolloverstellung pausiert. 0 = keine Pause.`,"covers.no_covers":`Keine Rollo-Entitäten konfiguriert.`,"covers.no_covers_in_area":`Keine Rollo-Entitäten in diesem Bereich gefunden.`,"covers.add_cover":`Rollo-Entität hinzufügen...`,"covers.shading_active":`Beschattung aktiv`,"covers.auto_paused":`Automatik pausiert (manuell übersteuert)`,"covers.done":`Fertig`,"covers.night_close":`Nachts automatisch schließen`,"covers.night_close_hint":`Rolläden bei Sonnenuntergang schließen und bei Sonnenaufgang öffnen.`,"covers.night_close_active":`Nachtschließung aktiv`,"covers.schedule_group_title":`Zeitplan`,"covers.solar_group_title":`Solar-Steuerung`,"covers.schedule_section":`Rolläden-Zeitpläne`,"covers.schedule_section_hint":`Definiere Zeitfenster für die Rolladensteuerung. Im Modus 'Position erzwingen' überschreibt der Zeitplan die Solar-/Thermik-Logik. Im Modus 'Sonnenschutz erlauben' entscheidet RoomMind innerhalb des aktiven Zeitfensters selbst über die Position.`,"covers.add_schedule":`Zeitplan hinzufügen...`,"covers.schedule_mode_force":`Position erzwingen`,"covers.schedule_mode_gate":`Sonnenschutz erlauben`,"covers.schedule_mode_gate_short":`Solarschutz-Gate`,"covers.schedule_position":`Position`,"covers.schedule_position_hint":`Rolloposition wenn dieser Zeitplan aktiv ist (0% = vollständig geschlossen, 100% = vollständig offen).`,"covers.schedule_selector":`Zeitplan-Selektor`,"covers.schedule_selector_hint":`Bestimmt welcher Zeitplan aktiv ist. input_boolean: aus=#1, an=#2. input_number: Wert wählt Zeitplan-Nummer.`,"covers.schedule_selector_warning":`Mehrere Zeitpläne konfiguriert aber kein Selektor gesetzt. Nur der erste Zeitplan wird verwendet.`,"covers.schedule_state_active":`Aktiv`,"covers.schedule_state_inactive":`Inaktiv`,"covers.schedule_state_unreachable":`Nicht erreichbar`,"covers.schedule_active":`Zeitplan aktiv`,"covers.schedule_create_link":`Zeitplan-Helfer erstellen`,"covers.night_position":`Nachtposition`,"covers.night_position_hint":`Rolloposition wenn Nachtschließung aktiv ist (0% = vollständig geschlossen). Bei Rollos mit individueller Min. Position wird diese nie unterschritten.`,"covers.night_close_advanced":`Erweitert`,"covers.night_close_elevation":`Sonnenstand-Schwellwert`,"covers.night_close_elevation_hint":`Wie weit die Sonne unter oder über dem Horizont stehen muss. 0° = genau bei Sonnenuntergang/-aufgang. Negativ = dunkler (z.B. -6° = Dämmerung, wenn es merklich dunkel wird). Positiv = noch hell (z.B. 5° = Sonne noch sichtbar).`,"covers.night_close_offset":`Zeitversatz`,"covers.night_close_offset_hint":`Zusätzliche Verschiebung relativ zum Sonnenstand-Schwellwert. Positiv = später schließen (z.B. +20 = 20 Min. nach Erreichen des Schwellwerts), negativ = früher.`,"covers.outdoor_min_temp":`Min. Außentemperatur`,"covers.outdoor_min_temp_hint":`Rollos bei dieser Außentemperatur nicht für Sonnenschutz schließen. Bei Kälte ist der Solareintrag erwünscht.`,"covers.per_cover_title":`Pro-Rollo Einstellungen`,"covers.per_cover_hint":`Himmelsrichtung pro Rollo und optionale individuelle Mindestposition.`,"covers.per_cover_min_short":`Min`,"covers.per_cover_min_position":`Min. Position`,"covers.per_cover_min_position_hint":`Individuelle Mindestposition pro Rollo. Rollos werden nicht weiter geschlossen. Nützlich wenn Rollos physisch schon bei > 0% ganz zu sind.`,"covers.snap_deploy":`Direkt auf Minimalposition`,"covers.snap_deploy_hint":`Rolläden direkt auf die Minimalposition schließen statt schrittweise. Empfohlen für Dreifachverglasung, bei der Zwischenpositionen thermische Spannungen verursachen können.`,"covers.info.selection_title":`Rollo-Auswahl`,"covers.info.selection_body":`Wähle Rollos/Jalousien aus diesem Bereich oder füge Entitäten aus anderen Bereichen hinzu. RoomMind verfolgt deren Position und kann sie automatisch steuern.`,"covers.info.schedule_title":`Zeitplan-Steuerung`,"covers.info.schedule_body":`Verwende HA-Zeitplan-Helfer um festzulegen, wann Rollos schließen sollen (z.B. Sichtschutz am Abend). Das Positions-Attribut des Zeitplans bestimmt, wie weit sie schließen. Zeitpläne überschreiben alle andere Automatik-Logik.`,"covers.info.solar_title":`Solar-/Thermik-Steuerung`,"covers.info.solar_body":`Bei aktivierter Automatik sagt RoomMind vorher, ob Sonneneinstrahlung den Raum überhitzen wird und schließt Rollos präventiv. Es nutzt gelernte Thermodaten wenn verfügbar, sonst einen konservativen Standardwert. Die Auslöseschwelle bestimmt, wie viel vorhergesagte Überschreitung nötig ist.`,"covers.info.night_title":`Nachtschließung`,"covers.info.night_body":`Schließt Rollos bei Sonnenuntergang und öffnet sie bei Sonnenaufgang. Du kannst eine eigene Nachtposition setzen (z.B. 10% = fast geschlossen aber nicht komplett).`,"covers.info.override_title":`Manuelles Übersteuern`,"covers.info.override_body":`Wenn du ein Rollo manuell bewegst, erkennt RoomMind dies und pausiert die Automatik für die konfigurierte Dauer. So wird nicht gegen den Nutzer gearbeitet.`,"covers.info.priority_title":`Prioritätsreihenfolge`,"covers.info.priority_body":`Manuelles Override > Zeitplan > Nachtschließung > Solar-/Thermik-Steuerung. Höhere Priorität gewinnt immer. Wenn keine Regel greift, bleiben Rollos offen.`,"covers.info.entities_title":`HA-Entitäten`,"covers.info.entities_body":`RoomMind erstellt zwei Entitäten pro Raum zur externen Nutzung: switch.roommind_{bereich}_cover_auto (automatische Rollosteuerung ein-/ausschalten — nutzbar in Automatisierungen oder Dashboards) und binary_sensor.roommind_{bereich}_cover_paused (an wenn manuelles Override aktiv ist, z.B. nach manuellem Bewegen eines Rollos).`,"covers.orientation_group_title":`Rolloausrichtung`,"covers.orientation_hint":`Himmelsrichtung, in die das Rollo zeigt. RoomMind nutzt dies, um Sonnenschutz zu überspringen, wenn die Sonne nicht auf diese Gebäudeseite scheint.`,"covers.orientation_none":`Beliebige Richtung`,"covers.orientation_N":`N`,"covers.orientation_NE":`NO`,"covers.orientation_E":`O`,"covers.orientation_SE":`SO`,"covers.orientation_S":`S`,"covers.orientation_SW":`SW`,"covers.orientation_W":`W`,"covers.orientation_NW":`NW`,"covers.orientation_N_full":`Nord`,"covers.orientation_NE_full":`Nordost`,"covers.orientation_E_full":`Ost`,"covers.orientation_SE_full":`Südost`,"covers.orientation_S_full":`Süd`,"covers.orientation_SW_full":`Südwest`,"covers.orientation_W_full":`West`,"covers.orientation_NW_full":`Nordwest`,"settings.general_title":`Allgemein`,"settings.group_by_floor":`Räume nach Etagen gruppieren`,"settings.climate_control_active":`Klimasteuerung aktiv`,"settings.climate_control_hint":`Wenn deaktiviert, überwacht RoomMind weiterhin alle Sensoren und trainiert das Modell, steuert aber keine Heizungen oder Klimaanlagen mehr an.`,"settings.learning_title":`Modell-Training`,"settings.learning_hint":`Wenn pausiert, sammelt RoomMind keine neuen Messdaten und trainiert das thermische Modell nicht weiter. Bestehende Modelldaten bleiben erhalten.`,"settings.learning_exceptions":`Ausnahmen`,"settings.learning_room_paused":`Raum pausiert`,"settings.learning_rooms_paused":`Räume pausiert`,"settings.sensors_title":`Sensoren & Datenquellen`,"settings.control_title":`Steuerung`,"settings.outdoor_sensor":`Außentemperatur`,"settings.outdoor_sensor_label":`Außentemperatursensor`,"settings.outdoor_current":`Aktuell {temp}{unit} draußen`,"settings.outdoor_waiting":`Warte auf Sensordaten...`,"settings.outdoor_humidity_sensor":`Außenluftfeuchtigkeit`,"settings.outdoor_humidity_label":`Außenluftfeuchtigkeitssensor`,"settings.outdoor_humidity_current":`Aktuell {value}% draußen`,"settings.smart_control":`Intelligente Klimasteuerung`,"settings.smart_control_hint":`Außentemperaturgrenzen für Heiz- und Kühlentscheidungen konfigurieren.`,"settings.outdoor_cooling_min":`Mindest-Außentemperatur für Kühlung`,"settings.outdoor_cooling_min_hint":`Klimaanlage bleibt aus wenn Außentemperatur unter diesem Wert`,"settings.outdoor_heating_max":`Maximal-Außentemperatur für Heizung`,"settings.outdoor_heating_max_hint":`Heizung bleibt aus wenn Außentemperatur über diesem Wert`,"settings.saving":`Speichern...`,"settings.saved":`Gespeichert`,"settings.error":`Fehler beim Speichern`,"devices.using_builtin_sensor":`Nutzt den eingebauten Thermostat-Sensor`,"settings.climate_intelligence":`Klimaintelligenz`,"settings.control_mode":`Steuerungsmodus`,"settings.control_mode_simple":`Einfach (Ein/Aus)`,"settings.control_mode_mpc":`Intelligent (MPC)`,"settings.control_mode_hint":`MPC lernt das thermische Verhalten deiner Räume für optimale Steuerung`,"settings.comfort_weight":`Priorität`,"settings.comfort_weight_comfort":`Komfort`,"settings.comfort_weight_efficiency":`Effizienz`,"settings.comfort_weight_hint":`Gewichtet Temperaturgenauigkeit gegen Energieverbrauch. Komfort reagiert früher und bleibt näher am Zielwert. Effizienz erlaubt mehr Abweichung, um Heiz- und Kühllaufzeiten zu reduzieren.`,"settings.weather_entity":`Wettervorhersage`,"settings.weather_entity_hint":`Optional: ermöglicht vorausschauende Außentemperaturplanung und dient als Fallback wenn der Außensensor nicht verfügbar ist`,"settings.outdoor_unavailable_notify":`Hinweis bei fehlender Außentemperatur`,"settings.outdoor_unavailable_notify_hint":`Zeigt eine Home-Assistant-Benachrichtigung, wenn weder Außensensor noch Wetter-Entity 30 Minuten lang eine Temperatur geliefert haben. In dieser Zeit pausiert RoomMind das Lernen des thermischen Modells, um Korruption zu vermeiden.`,"settings.prediction_enabled":`Temperaturvorhersage`,"settings.prediction_enabled_hint":`Zeigt den vorhergesagten Temperaturverlauf im Analyse-Diagramm. Bei langsamer Performance deaktivieren.`,"vacation.title":`Urlaubsmodus`,"vacation.hint":`Setzt alle Räume auf eine Absenktemperatur bis zum Enddatum.`,"vacation.active_label":`Urlaubsmodus aktiv`,"vacation.end_date":`Enddatum & Uhrzeit`,"vacation.setback_temp":`Absenktemperatur`,"vacation.no_end_date":`Kein Enddatum`,"vacation.deactivate":`Deaktivieren`,"tabs.analytics":`Analyse`,"analytics.select_room":`Raum auswählen`,"analytics.temperature":`Temperatur`,"analytics.target":`Ziel`,"analytics.prediction":`Vorhersage`,"analytics.outdoor":`Außen`,"analytics.model_status":`Modellstatus`,"analytics.confidence":`Konfidenz`,"analytics.heating_rate":`Heizstärke`,"analytics.cooling_rate":`Kühlstärke`,"analytics.solar_gain":`Solargewinn`,"analytics.occupancy_gain":`Anwesenheitsgewinn`,"analytics.time_constant":`Zeitkonstante`,"analytics.samples":`Datenpunkte`,"analytics.prediction_accuracy":`Vorhersagegenauigkeit`,"analytics.avg_deviation":`Durchschn. Abweichung`,"analytics.data_sources":`Datenquellen`,"analytics.data_points":`Datenpunkte`,"analytics.control_mode":`Steuerungsmodus`,"analytics.control_mode_mpc":`MPC aktiv`,"analytics.control_mode_bangbang":`MPC wird trainiert`,"analytics.last_model_update":`Letztes Modell-Update`,"analytics.accuracy_idle":`Genauigkeit (Leerlauf)`,"analytics.accuracy_heating":`Genauigkeit (Heizen)`,"analytics.info.accuracy_idle":`Wie genau das Modell die Temperatur vorhersagt, wenn weder geheizt noch gekühlt wird. Ein niedrigerer Wert bedeutet, dass das Modell den natürlichen Wärmeverlust deines Raums gut versteht. Dieser Wert verbessert sich als erstes, da Leerlauf-Daten kontinuierlich gesammelt werden.`,"analytics.info.accuracy_heating":`Wie genau das Modell die Temperatur während des aktiven Heizens vorhersagt. Dieser Wert bleibt anfangs hoch, da das Modell echte Heizzyklen zum Lernen braucht. Sobald deine Heizung ein paar Mal gelaufen ist, sinkt dieser Wert und die intelligente MPC-Steuerung wird verfügbar.`,"analytics.info.confidence":`Gesamte Modellreife für die intelligente MPC-Steuerung, basierend auf zwei Faktoren: Datenmenge (wie viele Leerlauf- und Aktiv-Messwerte gesammelt wurden) und Vorhersagegenauigkeit (wie präzise die Temperaturprognosen sind). Die Konfidenz startet bei 0% und steigt mit zunehmenden Daten. Etwa 50% bedeutet: genug Leerlaufdaten, aber noch zu wenig Heiz-/Kühlzyklen. Über 80% bedeutet: genug Daten und genaue Vorhersagen — MPC-Steuerung wird verfügbar. 100% ist das theoretische Maximum, wenn die Vorhersagen so genau wie physikalisch möglich sind.`,"analytics.info.time_constant":`Wie lange es dauert, bis sich die Raumtemperatur bei ausgeschalteter Heizung halbwegs der Außentemperatur annähert. Eine längere Zeitkonstante bedeutet bessere Dämmung — der Raum hält die Wärme länger. Eine kurze Zeitkonstante bedeutet schnelles Auskühlen. Das Modell lernt diesen Wert, indem es Temperaturabfälle im Leerlauf beobachtet.`,"analytics.info.heating_rate":`Wie stark deine Heizung die Raumtemperatur beeinflusst. Ein höherer Wert bedeutet, dass dein Heizsystem den Raum schneller erwärmt relativ zur thermischen Masse. Das Modell lernt dies durch Beobachtung der Temperaturanstiege beim Heizen und nutzt es um vorherzusagen, wie lange geheizt werden muss.`,"analytics.info.cooling_rate":`Wie stark deine Klimaanlage die Raumtemperatur beeinflusst. Ein höherer Wert bedeutet schnellere Kühlung relativ zur thermischen Masse. Das Modell lernt dies durch Beobachtung der Temperaturabfälle bei aktiver Kühlung und nutzt es um vorherzusagen, wie lange gekühlt werden muss.`,"analytics.info.solar_gain":`Der geschätzte Effekt der Sonneneinstrahlung durch Fenster auf die Raumtemperatur. Wird gelernt, indem beobachtet wird, wie sich der Raum bei Sonnenschein erwärmt, wenn nicht geheizt wird. Räume mit großen Südfenstern haben höhere Werte. Das Modell nutzt dies um die Heizung zu reduzieren, wenn Solargewinn erwartet wird.`,"analytics.info.occupancy_gain":`Der geschätzte Wärmebeitrag durch Anwesenheit (Personen, Haustiere, Computer), solange der Raum belegt ist. Wird gelernt, indem Temperaturänderungen beobachtet werden, während die konfigurierten Anwesenheitssensoren aktiv sind. Durch die Trennung vom Solargewinn wird Körperwärme nicht mehr fälschlich der Sonneneinstrahlung zugeschrieben. Wird nur angezeigt, wenn für diesen Raum mindestens ein Anwesenheitssensor konfiguriert ist.`,"analytics.info.data_sources":`Anzahl der Messwerte, die für das Modelltraining verwendet werden.`,"analytics.info.data_points":`Gesamtzahl der Beobachtungen, mit denen das Modell trainiert wurde. Mehr Datenpunkte führen in der Regel zu besseren Vorhersagen. Das Modell sammelt etwa alle 3 Minuten einen neuen Datenpunkt während RoomMind läuft.`,"analytics.no_data":`Noch keine Daten — Modell lernt`,"analytics.loading":`Analyse wird geladen...`,"settings.reset_title":`Thermische Daten zurücksetzen`,"settings.reset_hint":`Gelernte thermische Modelldaten und Verlauf löschen. Das Modell beginnt von vorne zu lernen.`,"settings.reset_all_label":`Alle Räume`,"settings.reset_all_hint":`Thermische Daten und Verlauf für alle Räume auf einmal löschen.`,"settings.reset_all_btn":`Alle zurücksetzen`,"settings.reset_all_confirm":`Alle gelernten thermischen Daten und Verlauf für ALLE Räume löschen? Alle Modelle beginnen von vorne zu lernen.`,"settings.reset_room_label":`Einzelner Raum`,"settings.reset_room_hint":`Wähle einen Raum, um dessen thermische Daten und Verlauf zu löschen.`,"settings.reset_room_confirm":`Alle gelernten thermischen Daten und Verlauf für diesen Raum löschen? Das Modell beginnt von vorne zu lernen.`,"settings.reset_room_select":`Raum auswählen`,"settings.reset_btn":`Zurücksetzen`,"settings.reset_no_rooms":`Keine konfigurierten Räume.`,"settings.boost_title":`Lernen beschleunigen`,"settings.boost_hint":`Das thermische Modell lernt das Heiz- und Kühlverhalten deines Raumes über die Zeit. Nach grösseren Änderungen (neuer Heizkörper, Klimaanlage, Dämmung, Möbel) kann das Modell ungenau sein. Dies erhöht die Unsicherheit des Modells, damit es sich schneller an die neuen Bedingungen anpasst.`,"settings.boost_label":`Lernen beschleunigen`,"settings.boost_room_select":`Raum auswählen`,"settings.boost_btn":`Beschleunigen`,"settings.boost_cooldown":`Aktiv – Neues Lernen läuft`,"settings.boost_no_rooms":`Keine konfigurierten Räume.`,"analytics.range_1d":`Heute`,"analytics.range_2d":`2 Tage`,"analytics.range_7d":`Woche`,"analytics.range_30d":`Monat`,"analytics.export":`Messdaten`,"analytics.heating_period":`Heizen`,"analytics.cooling_period":`Kühlung`,"analytics.window_open_period":`Fenster offen`,"analytics.blind_position":`Rolloposition`,"analytics.chart_info_title":`So liest du dieses Diagramm`,"analytics.exported":`Exportiert!`,"analytics.copy_diagnostics":`Diagnose`,"analytics.export_download":`Datei herunterladen`,"analytics.export_clipboard":`In Zwischenablage kopieren`,"analytics.copied_to_clipboard":`Kopiert!`,"analytics.range_from":`Von`,"analytics.range_to":`Bis`,"analytics.chart_info_body":`**Linien:** Die durchgezogene orangene Linie zeigt die gemessene Raumtemperatur. Die grüne gestrichelte Linie ist die Zieltemperatur aus deinem Zeitplan. Die blaue gepunktete Linie ist die Temperaturvorhersage des Modells.

**Schattierte Bereiche:** Rote Schattierung markiert Heizperioden, blaue Kühlung und türkise Bereiche zeigen an, wenn ein Fenster offen war.

**Zukunftsprognose (rechts der 'Jetzt'-Linie):** Die grüne gestrichelte Linie zeigt die kommenden Zieltemperaturen für die nächsten 3 Stunden. Die blaue gepunktete Linie zeigt den vorhergesagten Temperaturverlauf.

**Vorhersage-Modus:** Wenn 'MPC aktiv' angezeigt wird, nutzt die Vorhersage den vollständigen MPC-Optimizer mit intelligentem Vorheizen/-kühlen. Solange das Modell noch lernt, wird eine einfachere Simulation verwendet.

**Einschränkungen:** Die Vorhersage nimmt an, dass aktuelle Bedingungen konstant bleiben (Außentemperatur, Fensterstatus). Die Genauigkeit hängt davon ab, wie gut das Modell deinen Raum bereits gelernt hat — anfangs können die Vorhersagen ungenau sein. Sobald MPC aktiviert wird, werden die Vorhersagen deutlich zuverlässiger.`,"presence.title":`Anwesenheitserkennung`,"presence.hint":`Eco-Temperatur wenn niemand zu Hause ist.`,"presence.hint_detail":`Wenn aktiviert, werden alle Räume auf Eco-Temperatur gesetzt, sobald keine der konfigurierten Personen zu Hause ist. Pro Raum kann optional eingeschränkt werden, welche Personen relevant sind.`,"presence.add_person":`Person hinzufügen`,"presence.add_entity":`Präsenz-Entity hinzufügen`,"presence.person_label":`Person`,"room.section.presence":`Anwesenheit`,"presence.room_help_header":`Wie funktioniert die Raum-Anwesenheit?`,"presence.room_help_body":`Wähle aus, welche Personen für diesen Raum relevant sind. Der Raum schaltet auf Eco-Temperatur, wenn keine der ausgewählten Personen zu Hause ist. Ohne Auswahl greift die globale Regel: Eco wenn niemand zu Hause ist.`,"presence.state_home":`Zu Hause`,"presence.state_away":`Abwesend`,"presence.room_none_assigned":`Globale Regel — Eco wenn niemand zu Hause ist`,"presence.ignore_toggle":`Anwesenheit ignorieren`,"presence.ignore_hint":`Hier wird festgelegt, wie dieser Raum auf Anwesenheit reagiert. Unten kannst du einzelne Personen zuweisen. Der Raum wechselt auf Eco, wenn keine der zugewiesenen Personen zu Hause ist. Mit dem Toggle oben wird die Erkennung komplett übersprungen und der Raum heizt immer nach Zeitplan.`,"presence.help_ignore_title":`Was bewirkt "Ignore presence"?`,"presence.help_ignore_body":`Wenn aktiviert, ignoriert dieser Raum die Anwesenheitserkennung komplett. Er folgt immer seinem Zeitplan und wechselt nie aufgrund von Anwesenheit auf Eco. Nützlich für Räume, die unabhängig von Anwesenheit ihre Temperatur halten sollen, etwa Serverräume, Tierzimmer oder Gästezimmer mit Personen, die nicht in Home Assistant getrackt werden.`,"presence.tile_ignored":`Anwesenheitserkennung ist deaktiviert. Raum folgt immer dem Zeitplan.`,"presence.away_action_label":`Aktion wenn niemand zuhause`,"presence.away_action_eco":`Eco-Temperatur verwenden`,"presence.away_action_off":`Geräte ausschalten`,"presence.clears_override_label":`Abwesenheit beendet Override`,"presence.clears_override_hint":`Sobald niemand zuhause ist, wird ein manueller Override pausiert und der Raum folgt der Abwesenheits-Aktion. Kommt jemand zurück, läuft der Override weiter, bis er abläuft.`,"card.presence_away":`Abwesend`,"valve_protection.title":`Ventilschutz`,"valve_protection.hint":`Bewegt inaktive TRV-Ventile regelmäßig kurz, um Festsitzen oder Verkalkung zu verhindern.`,"valve_protection.interval_label":`Zyklusintervall`,"valve_protection.interval_suffix":`Tage`,"valve_protection.interval_hint":`Wie lange ein Ventil inaktiv sein darf, bevor es bewegt wird (1–90 Tage)`,"compressor.title":`Kompressorschutz`,"compressor.no_groups":`Keine Kompressorgruppen konfiguriert.`,"compressor.add_group":`Kompressorgruppe hinzufügen`,"compressor.group_name":`Gruppenname`,"compressor.members":`Innengeräte`,"compressor.members_hint":`Alle Klimageräte auswählen, die von diesem Kompressor versorgt werden (Splits, TRVs an Radiatoren, Fan Coils).`,"compressor.min_run":`Mindestlaufzeit`,"compressor.min_run_hint":`Kompressor muss nach dem Start mindestens so lange laufen.`,"compressor.min_run_suffix":`Min.`,"compressor.min_off":`Mindestauszeit`,"compressor.min_off_hint":`Kompressor muss nach dem Stopp mindestens so lange aus bleiben.`,"compressor.min_off_suffix":`Min.`,"compressor.delete":`Gruppe löschen`,"compressor.delete_confirm":`Kompressorgruppe "{name}" löschen?`,"compressor.master_entity":`Hauptgerät`,"compressor.master_entity_hint":`Das zentrale Gerät das die Innengeräte dieser Gruppe versorgt, z.B. ein Gaskessel, eine Wärmepumpen-Außeneinheit oder ein Kanalklima-Hauptschalter. RoomMind schaltet es ein wenn ein Raum Heiz- oder Kühlbedarf hat und aus wenn alle Räume im Leerlauf sind. Leer lassen um nur das Aktionsskript oder den Kurzzyklusschutz zu verwenden.`,"compressor.conflict_resolution":`Konfliktlösung`,"compressor.conflict_resolution_hint":`Bestimmt was passiert wenn einige Räume heizen und andere gleichzeitig kühlen wollen. Heizpriorität: Heizen gewinnt immer (sicherste Option für Frostschutz). Kühlpriorität: Kühlen gewinnt immer. Mehrheit: Der Modus mit mehr Räumen gewinnt, bei Gleichstand wird geheizt. Außentemperatur: Entscheidet automatisch anhand des Heiz-Schwellwerts aus den Einstellungen.`,"compressor.conflict_heating_priority":`Heizpriorität (Frostschutz)`,"compressor.conflict_cooling_priority":`Kühlpriorität`,"compressor.conflict_majority":`Mehrheit gewinnt`,"compressor.conflict_outdoor_temp":`Nach Außentemperatur`,"compressor.action_script":`Aktionsskript`,"compressor.action_script_hint":`Ein Home Assistant Skript das bei jedem Wechsel des Heiz-/Kühlbedarfs ausgeführt wird. Nützlich für Systeme die spezielle Befehle benötigen, z.B. zum Aufheben eines Vaillant Quick Veto oder Schalten eines Relais. Funktioniert mit oder ohne Hauptgerät. Ohne Hauptgerät wird nur das Skript ausgelöst. Erhält Variablen: action (heat/cool/idle), master_entity, members, active_members.`,"compressor.enforce_uniform_mode":`Einheitlichen Modus erzwingen`,"compressor.enforce_uniform_mode_hint":`Alle Thermostate in dieser Gruppe müssen im gleichen HVAC-Modus arbeiten (alle heizen oder alle kühlen). Räume, die dem aufgelösten Gruppenmodus widersprechen, werden auf Leerlauf gesetzt. Für Wärmepumpen die automatisch starten, aber alle angeschlossenen Geräte im gleichen Modus benötigen.`,"mold.title":`Schimmelschutz`,"mold.detection":`Schimmelerkennung`,"mold.detection_desc":`Benachrichtigung bei Schimmelgefahr durch hohe Luftfeuchtigkeit`,"mold.threshold":`Feuchtigkeitsschwelle (%)`,"mold.threshold_hint":`Warnung wenn die Raumluftfeuchte diesen Wert dauerhaft überschreitet`,"mold.sustained":`Mindestdauer (Minuten)`,"mold.sustained_hint":`Warnung erst nach anhaltender Überschreitung`,"mold.prevention":`Schimmelprävention`,"mold.prevention_desc":`Temperatur automatisch erhöhen um Schimmelrisiko zu senken`,"mold.intensity":`Intensität`,"mold.intensity_light":`Leicht (+{delta}{unit})`,"mold.intensity_medium":`Mittel (+{delta}{unit})`,"mold.intensity_strong":`Stark (+{delta}{unit})`,"mold.intensity_hint":`Wärmere Raumluft senkt die Oberflächenfeuchte an kalten Wänden. Leicht reicht meist bei moderatem Risiko, Stark kann die Oberflächenfeuchte um bis zu 8–10 % senken — verbraucht aber deutlich mehr Energie.`,"card.mold_warning":`Schimmelrisiko`,"card.mold_critical":`Schimmelgefahr!`,"card.mold_prevention":`Schimmelschutz +{delta}{unit}`,"room.mold_surface_rh":`Geschätzte Oberflächenfeuchte: {value}%`,"settings.intro.general":`Grundlegende Anzeige- und Steuerungseinstellungen.`,"settings.intro.sensors":`Außensensoren und Wetterdaten für eine präzise Klimasteuerung konfigurieren.`,"settings.intro.control":`Wähle, wie RoomMind deine Klimageräte steuert und setze Priorität und Schwellenwerte.`,"settings.intro.presence":`Temperatur automatisch absenken wenn niemand zu Hause ist.`,"settings.intro.vacation":`Alle Räume auf eine reduzierte Temperatur setzen während du abwesend bist.`,"settings.intro.valve":`Inaktive TRV-Ventile regelmäßig bewegen um Festsitzen oder Verkalkung zu verhindern.`,"settings.intro.compressor":`Gruppen von Innengeräten verwalten die sich einen Außenkompressor oder eine zentrale Heizquelle teilen. Optional ein Hauptgerät (Kessel, Außeneinheit) zuweisen das automatisch je nach Raumbedarf ein- und ausgeschaltet wird. Kurzzyklusschutz verhindert schnelles Ein-/Ausschalten das Geräte beschädigen kann.`,"settings.intro.mold":`Luftfeuchtigkeit überwachen und Schimmelrisiko automatisch reduzieren.`,"settings.intro.notifications":`Konfiguriere wer Benachrichtigungen erhält und wie.`,"settings.intro.learning":`Thermisches Modelltraining verwalten und Lernen nach Änderungen beschleunigen.`,"settings.intro.reset":`Gelernte thermische Modelldaten löschen. Das Modell beginnt von vorne zu lernen.`,"notifications.title":`Benachrichtigungen`,"notifications.enabled":`Benachrichtigungen aktivieren`,"notifications.enabled_hint":`Wenn deaktiviert, werden keine Benachrichtigungen gesendet — weder an Geräte noch an die HA-Seitenleiste.`,"notifications.desc":`Wähle die Geräte, die Benachrichtigungen erhalten. Ohne Ziele erscheint eine Meldung in der HA-Seitenleiste.`,"notifications.add_target_label":`Benachrichtigungsgerät hinzufügen`,"notifications.add_target_hint":`Tippe die Entity-ID ein, falls dein Gerät nicht angezeigt wird (z.B. notify.mobile_app_...). Du findest sie unter Einstellungen → Geräte → dein Telefon → Notify-Entität.`,"notifications.target_unnamed":`Unbenanntes Gerät`,"notifications.target_person":`Person`,"notifications.target_when_always":`Immer`,"notifications.target_when_home":`Nur wenn zuhause`,"notifications.cooldown":`Benachrichtigungspause (Minuten)`,"notifications.cooldown_hint":`Mindestabstand zwischen wiederholten Warnungen pro Raum`,"notifications.mold_prevention_notify":`Bei Aktivierung der Prävention benachrichtigen`,"notifications.mold_prevention_notify_hint":`Auch benachrichtigen wenn die Prävention aktiviert wird (Temperaturerhöhung)`,"room.section.heat_source":`Heizquellen-Orchestrierung`,"heat_source.toggle":`Intelligente Quellenauswahl`,"heat_source.toggle_hint":`Wenn dieser Raum sowohl Heizkörper-Thermostate als auch eine AC/Wärmepumpe hat, leitet RoomMind die Heizanforderung intelligent an das effizienteste Gerät weiter, basierend auf Temperaturlücke und Außenbedingungen.`,"heat_source.primary_delta":`Boiler-Aktivierungsschwelle`,"heat_source.primary_delta_hint":`Primärquelle erst aktivieren, wenn die Temperaturlücke diesen Wert überschreitet. Darunter wird nur die schnelle Sekundärquelle genutzt.`,"heat_source.primary_delta_suffix":`°C`,"heat_source.outdoor_threshold":`Außentemperatur-Umschaltpunkt`,"heat_source.outdoor_threshold_hint":`Über dieser Außentemperatur die AC/Wärmepumpe bevorzugen (höhere Effizienz). Darunter den Gas-Boiler/Heizkörper.`,"heat_source.outdoor_threshold_suffix":`°C`,"heat_source.ac_min_outdoor":`Min. Außentemp. für AC-Heizen`,"heat_source.ac_min_outdoor_hint":`AC-Heizen unter dieser Temperatur komplett deaktivieren, um die Wärmepumpen-Hardware zu schützen.`,"heat_source.ac_min_outdoor_suffix":`°C`,"heat_source.summary_disabled":`Intelligente Quellenwahl ist aus`}};function w(e,t,n){let r=(gt[t]??gt[t.split(`-`)[0]]??gt.en)[e]??gt.en[e]??e;if(n)for(let[e,t]of Object.entries(n))r=r.replaceAll(`{${e}}`,String(t));return r}function _t(e,t){if(e.area_id)return e.area_id;if(e.device_id&&t){let n=t[e.device_id];if(n?.area_id)return n.area_id}return null}function vt(e,t,n){return t?Object.values(t).filter(t=>_t(t,n)===e):[]}function yt(e){switch(e){case`heating`:return`mode-heating`;case`cooling`:return`mode-cooling`;case`idle`:return`mode-idle`;default:return`mode-other`}}var bt={heating:`mode.heating`,cooling:`mode.cooling`,idle:`mode.idle`};function xt(e,t){return w(bt[e],t)}var St=l`
  .mode-pill {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 13px;
    font-weight: 500;
    padding: 4px 14px;
    border-radius: 16px;
  }

  .mode-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }

  .mode-heating {
    color: var(--warning-color, #ff9800);
    background: rgba(255, 152, 0, 0.12);
  }
  .mode-heating .mode-dot {
    background: var(--warning-color, #ff9800);
  }

  .mode-cooling {
    color: #2196f3;
    background: rgba(33, 150, 243, 0.12);
  }
  .mode-cooling .mode-dot {
    background: #2196f3;
  }

  .mode-idle {
    color: var(--secondary-text-color, #757575);
    background: rgba(0, 0, 0, 0.05);
  }
  .mode-idle .mode-dot {
    background: var(--disabled-text-color, #bdbdbd);
  }

  .mode-other {
    color: var(--secondary-text-color);
    background: rgba(0, 0, 0, 0.05);
  }
  .mode-other .mode-dot {
    background: var(--secondary-text-color);
  }
`,Ct=`M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z`;function wt(e){return e.config?.unit_system?.temperature===`°F`}function T(e){return wt(e)?`°F`:`°C`}function E(e,t){return wt(t)?e*9/5+32:e}function Tt(e,t){return wt(t)?(e-32)*5/9:e}function D(e,t){return wt(t)?e*9/5:e}function O(e,t,n=1){return E(e,t).toFixed(n)}function k(e){return wt(e)?`1`:`0.5`}function A(e,t,n){return{min:String(Math.round(E(e,n))),max:String(Math.round(E(t,n)))}}function j(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}var M=t((()=>{}));y(),M();var N=class extends v{constructor(...e){super(...e),this.config=null,this.climateEntityCount=0,this.tempSensorCount=0,this.controlMode=`bangbang`,this.climateControlActive=!0,this.reordering=!1,this.canMoveUp=!1,this.canMoveDown=!1}static{this.styles=[St,l`
      :host {
        display: block;
      }

      ha-card {
        cursor: pointer;
        transition:
          box-shadow 0.2s ease,
          transform 0.15s ease;
        overflow: hidden;
        position: relative;
        height: 100%;
        box-sizing: border-box;
      }

      ha-card:hover {
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
        transform: translateY(-1px);
      }

      .hide-btn {
        --mdc-icon-button-size: 28px;
        --mdc-icon-size: 16px;
        color: var(--secondary-text-color);
        opacity: 0;
        transition: opacity 0.2s ease;
        position: absolute;
        top: 8px;
        right: 8px;
      }

      ha-card:hover .hide-btn {
        opacity: 0.4;
      }

      .hide-btn:hover {
        opacity: 1 !important;
      }

      /* Colored left accent based on mode */
      .accent {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 4px;
      }

      .accent-heating {
        background: var(--warning-color, #ff9800);
      }

      .accent-cooling {
        background: #2196f3;
      }

      .accent-idle {
        background: var(--disabled-text-color, #bdbdbd);
      }

      .accent-unconfigured {
        background: transparent;
      }

      .card-inner {
        padding: 20px 20px 16px;
      }

      /* Header row: name + badge */
      .card-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .area-name {
        font-size: 15px;
        font-weight: 500;
        color: var(--primary-text-color);
        margin: 0;
        letter-spacing: 0.01em;
      }

      /* Card-specific mode-pill overrides (smaller than default) */
      .mode-pill {
        gap: 5px;
        font-size: 12px;
        padding: 3px 10px;
        border-radius: 12px;
      }

      .mode-dot {
        width: 7px;
        height: 7px;
      }

      /* Temperature display */
      .temp-section {
        display: flex;
        align-items: baseline;
        gap: 8px;
        margin: 12px 0 0 0;
      }

      .current-temp {
        font-size: 36px;
        font-weight: 300;
        color: var(--primary-text-color);
        line-height: 1;
      }

      .temp-unit {
        font-size: 18px;
        font-weight: 300;
        color: var(--secondary-text-color);
      }

      .target-info {
        font-size: 13px;
        color: var(--secondary-text-color);
        margin-left: auto;
      }

      .target-value {
        font-weight: 500;
        color: var(--primary-text-color);
      }

      .override-icon {
        --mdc-icon-size: 14px;
        vertical-align: middle;
        margin-left: 4px;
        color: var(--warning-color, #ff9800);
      }

      .window-icon {
        --mdc-icon-size: 14px;
        vertical-align: middle;
        margin-left: 4px;
        color: var(--warning-color, #ff9800);
      }

      .away-icon {
        --mdc-icon-size: 14px;
        vertical-align: middle;
        margin-left: 4px;
        color: var(--info-color, #2196f3);
      }

      /* Footer row: humidity + MPC status */
      .card-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 8px;
        min-height: 20px;
      }

      .humidity-info {
        font-size: 13px;
        color: var(--secondary-text-color);
      }

      .mpc-badge {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        font-size: 11px;
        font-weight: 500;
        padding: 2px 8px 2px 6px;
        border-radius: 10px;
        --mdc-icon-size: 14px;
      }

      .mpc-badge.active {
        color: var(--success-color, #4caf50);
        background: rgba(76, 175, 80, 0.12);
      }

      .mpc-badge.learning {
        color: var(--secondary-text-color);
        background: rgba(158, 158, 158, 0.1);
      }

      .mold-badge {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        font-size: 11px;
        font-weight: 500;
        padding: 2px 8px 2px 6px;
        border-radius: 10px;
        --mdc-icon-size: 14px;
      }

      .mold-badge.warning {
        color: var(--warning-color, #ff9800);
        background: rgba(255, 152, 0, 0.12);
      }

      .mold-badge.critical {
        color: var(--error-color, #db4437);
        background: rgba(219, 68, 55, 0.12);
      }

      .mold-badge.prevention {
        color: var(--info-color, #2196f3);
        background: rgba(33, 150, 243, 0.12);
      }

      .outdoor-badge {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        font-size: 11px;
        font-weight: 500;
        padding: 2px 8px 2px 6px;
        border-radius: 10px;
        --mdc-icon-size: 14px;
        color: var(--success-color, #4caf50);
        background: rgba(76, 175, 80, 0.12);
      }

      .badge-row {
        display: flex;
        gap: 6px;
        flex-wrap: wrap;
      }

      .no-temp {
        font-size: 24px;
        font-weight: 300;
        color: var(--secondary-text-color);
        line-height: 1;
      }

      .uncontrolled-hint {
        font-size: 11px;
        color: var(--disabled-text-color, #9e9e9e);
        margin-top: 6px;
      }

      .reorder-overlay {
        position: absolute;
        inset: 0;
        z-index: 2;
        display: flex;
        pointer-events: none;
        border-radius: inherit;
        overflow: hidden;
      }

      .reorder-half {
        pointer-events: auto;
        flex: 0 0 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: background 0.15s ease;
        background: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.05);
      }

      .reorder-half.left {
        border-radius: inherit;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-right: 1px solid rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.08);
      }

      .reorder-half.right {
        border-radius: inherit;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-left: 1px solid rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.08);
        margin-left: auto;
      }

      .reorder-half:hover {
        background: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.1);
      }

      .reorder-half ha-icon-button {
        --mdc-icon-button-size: 36px;
        --mdc-icon-size: 20px;
        color: var(--secondary-text-color);
        pointer-events: none;
      }

      .reorder-half:hover ha-icon-button {
        color: var(--primary-text-color);
      }

      .reorder-half.disabled {
        opacity: 0.25;
        cursor: default;
      }

      .reorder-half.disabled:hover {
        background: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.05);
      }

      /* Device summary for unconfigured cards */
      .device-summary {
        font-size: 13px;
        color: var(--secondary-text-color);
        margin-top: 8px;
      }

      .device-summary.empty {
        color: var(--disabled-text-color, #9e9e9e);
        font-style: italic;
      }

      /* Configure prompt for unconfigured areas */
      .configure-prompt {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 12px;
        padding-top: 12px;
        border-top: 1px solid var(--divider-color, #eee);
      }

      .configure-text {
        font-size: 13px;
        color: var(--secondary-text-color);
      }

      .configure-arrow {
        font-size: 18px;
        color: var(--primary-color);
      }

      /* Waiting state */
      .waiting {
        font-size: 13px;
        color: var(--disabled-text-color, #9e9e9e);
        font-style: italic;
        margin-top: 8px;
      }
    `]}render(){let e=this.climateEntityCount>0,t=(this.config?.devices?.length??0)>0||(this.config?.thermostats?.length??0)>0||(this.config?.acs?.length??0)>0,n=this.config?.is_outdoor??!1,r=this.config!==null&&t&&!n,i=this.config?.live,a=i?.mode,o=(!r||n)&&i&&(i.current_temp!==null||i.current_humidity!==null),s=r?a===`heating`?`accent-heating`:a===`cooling`?`accent-cooling`:`accent-idle`:o?`accent-idle`:`accent-unconfigured`;return g`
      <ha-card @click=${this._onCardClick}>
        <div class="accent ${s}"></div>
        ${this.reordering?_:g`<ha-icon-button
              class="hide-btn"
              .path=${Ct}
              @click=${this._onHideClick}
            ></ha-icon-button>`}
        ${this.reordering?g`<div class="reorder-overlay">
              <div
                class="reorder-half left ${this.canMoveUp?``:`disabled`}"
                @click=${this._onMoveUp}
              >
                <ha-icon-button
                  .path=${`M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z`}
                ></ha-icon-button>
              </div>
              <div
                class="reorder-half right ${this.canMoveDown?``:`disabled`}"
                @click=${this._onMoveDown}
              >
                <ha-icon-button
                  .path=${`M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z`}
                ></ha-icon-button>
              </div>
            </div>`:_}
        <div class="card-inner">
          <div class="card-header">
            <h3 class="area-name">${this.config?.display_name||this.area.name}</h3>
            ${r&&i?g`
                  <span class="mode-pill ${yt(i.mode)}">
                    <span class="mode-dot"></span>
                    ${xt(i.mode,this.hass.language)}${i.heating_power>0&&i.heating_power<100?g` ${i.heating_power}%`:_}
                  </span>
                `:_}
          </div>

          ${r?this._renderConfigured():this.config?.live&&(this.config.live.current_temp!==null||this.config.live.current_humidity!==null)?this._renderSensorOnly():this._renderUnconfigured(e)}
        </div>
      </ha-card>
    `}_renderConfigured(){let e=this.config?.live;if(!e)return g`<div class="waiting">${w(`card.waiting`,this.hass.language)}</div>`;let t=this.controlMode===`mpc`;return g`
      <div class="temp-section">
        ${e.current_temp===null?g`<span class="no-temp">--</span>`:g`
              <span class="current-temp">${O(e.current_temp,this.hass)}</span>
              <span class="temp-unit">${T(this.hass)}</span>
            `}
        ${this._renderTargetInfo(e)}
      </div>
      <div class="card-footer">
        <span class="humidity-info">
          ${e.current_humidity===null?_:w(`card.humidity`,this.hass.language,{value:e.current_humidity.toFixed(0)})}
        </span>
        <span class="badge-row">
          ${e.mold_risk_level&&e.mold_risk_level!==`ok`?g`<span class="mold-badge ${e.mold_risk_level}">
                <ha-icon icon="mdi:water-alert"></ha-icon>
                ${e.mold_risk_level===`critical`?w(`card.mold_critical`,this.hass.language):w(`card.mold_warning`,this.hass.language)}
              </span>`:_}
          ${e.mold_prevention_active?g`<span class="mold-badge prevention">
                <ha-icon icon="mdi:shield-check"></ha-icon>
                ${w(`card.mold_prevention`,this.hass.language,{delta:D(e.mold_prevention_delta,this.hass).toFixed(0),unit:T(this.hass)})}
              </span>`:_}
          ${t?g`<span class="mpc-badge ${e.mpc_active?`active`:`learning`}">
                <ha-icon .icon=${e.mpc_active?`mdi:brain`:`mdi:school-outline`}></ha-icon>
                ${e.mpc_active?w(`card.mpc_active`,this.hass.language):w(`card.mpc_learning`,this.hass.language)}
              </span>`:_}
        </span>
      </div>
      ${!this.climateControlActive||this.config?.climate_control_enabled===!1?g`<div class="uncontrolled-hint">
            ${w(`card.not_controlled`,this.hass.language)}
          </div>`:_}
    `}_renderTargetInfo(e){if(e.target_temp===null&&e.heat_target===null)return _;let t=(this.config?.climate_mode??`auto`)===`auto`&&e.heat_target!=null&&e.cool_target!=null&&e.heat_target!==e.cool_target?g`<span class="target-value"
          >${O(e.heat_target,this.hass)} –
          ${O(e.cool_target,this.hass)}${T(this.hass)}</span
        >`:g`<span class="target-value"
          >${O(e.target_temp??e.heat_target,this.hass)}${T(this.hass)}</span
        >`;return g`
      <span class="target-info">
        ${w(`card.target`,this.hass.language)} ${t}
        ${e.override_active?g`<ha-icon class="override-icon" icon="mdi:timer-outline"></ha-icon>`:_}
        ${e.window_open?g`<ha-icon class="window-icon" icon="mdi:window-open-variant"></ha-icon>`:_}
        ${e.presence_away?g`<ha-icon class="away-icon" icon="mdi:home-off-outline"></ha-icon>`:_}
      </span>
    `}_renderSensorOnly(){let e=this.config.live,t=this.config?.is_outdoor??!1;return g`
      <div class="temp-section">
        ${e.current_temp===null?g`<span class="no-temp">--</span>`:g`
              <span class="current-temp">${O(e.current_temp,this.hass)}</span>
              <span class="temp-unit">${T(this.hass)}</span>
            `}
      </div>
      <div class="card-footer">
        <span class="humidity-info">
          ${e.current_humidity===null?_:w(`card.humidity`,this.hass.language,{value:e.current_humidity.toFixed(0)})}
        </span>
        <span class="badge-row">
          ${t?g`<span class="outdoor-badge">
                <ha-icon icon="mdi:tree"></ha-icon>
                ${w(`card.outdoor`,this.hass.language)}
              </span>`:_}
          ${e.mold_risk_level&&e.mold_risk_level!==`ok`?g`<span class="mold-badge ${e.mold_risk_level}">
                <ha-icon icon="mdi:water-alert"></ha-icon>
                ${e.mold_risk_level===`critical`?w(`card.mold_critical`,this.hass.language):w(`card.mold_warning`,this.hass.language)}
              </span>`:_}
        </span>
      </div>
    `}_renderUnconfigured(e){let t=this.hass.language;if(!e)return g`<div class="device-summary empty">${w(`card.no_climate`,t)}</div>`;let n=this.climateEntityCount,r=this.tempSensorCount;return g`
      <div class="device-summary">
        ${n}
        ${w(n===1?`card.climate_device`:`card.climate_devices`,t)}${r>0?` \u00B7 ${r} ${w(r===1?`card.temp_sensor`:`card.temp_sensors`,t)}`:``}
      </div>
      <div class="configure-prompt">
        <span class="configure-text">${w(`card.tap_configure`,t)}</span>
        <span class="configure-arrow">›</span>
      </div>
    `}_onCardClick(){this.dispatchEvent(new CustomEvent(`area-selected`,{detail:{areaId:this.area.area_id},bubbles:!0,composed:!0}))}_onMoveUp(e){e.stopPropagation(),this.canMoveUp&&this.dispatchEvent(new CustomEvent(`move-room-up`,{detail:{areaId:this.area.area_id},bubbles:!0,composed:!0}))}_onMoveDown(e){e.stopPropagation(),this.canMoveDown&&this.dispatchEvent(new CustomEvent(`move-room-down`,{detail:{areaId:this.area.area_id},bubbles:!0,composed:!0}))}_onHideClick(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent(`hide-room`,{detail:{areaId:this.area.area_id},bubbles:!0,composed:!0}))}};j([x({attribute:!1})],N.prototype,`area`,void 0),j([x({attribute:!1})],N.prototype,`config`,void 0),j([x({type:Number})],N.prototype,`climateEntityCount`,void 0),j([x({type:Number})],N.prototype,`tempSensorCount`,void 0),j([x({attribute:!1})],N.prototype,`hass`,void 0),j([x({type:String})],N.prototype,`controlMode`,void 0),j([x({type:Boolean})],N.prototype,`climateControlActive`,void 0),j([x({type:Boolean})],N.prototype,`reordering`,void 0),j([x({type:Boolean})],N.prototype,`canMoveUp`,void 0),j([x({type:Boolean})],N.prototype,`canMoveDown`,void 0),N=j([b(`rs-area-card`)],N);var Et={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Dt=e=>(...t)=>({_$litDirective$:e,values:t}),Ot=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};Ze();var kt=class extends Ot{constructor(e){if(super(e),this.it=_,e.type!==Et.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===_||e==null)return this._t=void 0,this.it=e;if(e===Le)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};kt.directiveName=`unsafeHTML`,kt.resultType=1;var P=Dt(kt);y(),C(),M();var At=class extends v{constructor(...e){super(...e),this.text=``,this.icon=`mdi:information-outline`,this._open=!1,this._style=`visibility: hidden;`,this._onDocPointer=e=>{e.composedPath().includes(this)||this._close()},this._onKey=e=>{e.key===`Escape`&&(e.stopPropagation(),this._close())},this._onScroll=()=>this._close()}disconnectedCallback(){super.disconnectedCallback(),this._removeListeners()}static{this.styles=l`
    :host {
      display: inline-flex;
      position: relative;
      vertical-align: middle;
      line-height: 0;
    }

    button {
      background: none;
      border: none;
      padding: 2px;
      margin: 0;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: var(--secondary-text-color);
      opacity: 0.65;
      transition:
        opacity 0.15s,
        color 0.15s,
        background 0.15s;
      border-radius: 50%;
      line-height: 0;
    }

    button:hover,
    button:focus-visible {
      opacity: 1;
      color: var(--primary-color);
      background: rgba(3, 169, 244, 0.1);
      outline: none;
    }

    button.open {
      opacity: 1;
      color: var(--primary-color);
      background: rgba(3, 169, 244, 0.12);
    }

    ha-icon {
      --mdc-icon-size: 16px;
    }

    .tooltip {
      position: fixed;
      z-index: 1100;
      max-width: 280px;
      min-width: 180px;
      width: max-content;
      padding: 10px 12px;
      background: var(--card-background-color, #1f1f1f);
      border: 1px solid var(--divider-color, rgba(255, 255, 255, 0.12));
      border-radius: 8px;
      font-size: 12px;
      font-weight: 400;
      line-height: 1.5;
      letter-spacing: normal;
      text-transform: none;
      color: var(--primary-text-color);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
      white-space: normal;
      pointer-events: auto;
      animation: tooltip-fade 0.15s ease-out;
    }

    @keyframes tooltip-fade {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `}render(){return g`
      <button
        type="button"
        class=${this._open?`open`:``}
        @click=${this._toggle}
        aria-label="Info"
        aria-expanded=${this._open?`true`:`false`}
      >
        <ha-icon .icon=${this.icon}></ha-icon>
      </button>
      ${this._open?g`<div
            class="tooltip"
            role="tooltip"
            style=${this._style}
            @click=${e=>e.stopPropagation()}
          >
            ${this.text?this.text:_}<slot></slot>
          </div>`:_}
    `}_toggle(e){e.stopPropagation(),this._open?this._close():this._openTooltip()}_openTooltip(){this._open=!0,this._style=`visibility: hidden;`,requestAnimationFrame(()=>{this._positionTooltip()}),setTimeout(()=>{document.addEventListener(`pointerdown`,this._onDocPointer,!0),document.addEventListener(`keydown`,this._onKey,!0),document.addEventListener(`scroll`,this._onScroll,!0),window.addEventListener(`resize`,this._onScroll,!0)},0)}_positionTooltip(){let e=this.renderRoot.querySelector(`.tooltip`),t=this.renderRoot.querySelector(`button`);if(!e||!t)return;let n=t.getBoundingClientRect(),r=e.getBoundingClientRect(),i=window.innerWidth,a=window.innerHeight,o=a-n.bottom,s=n.top,c;c=o>=r.height+8?n.bottom+6:s>=r.height+8?n.top-r.height-6:Math.max(8,(a-r.height)/2);let l=n.left+n.width/2-r.width/2;l=Math.max(8,Math.min(l,i-r.width-8)),this._style=`top: ${c}px; left: ${l}px;`}_close(){this._open&&(this._open=!1,this._style=`visibility: hidden;`,this._removeListeners())}_removeListeners(){document.removeEventListener(`pointerdown`,this._onDocPointer,!0),document.removeEventListener(`keydown`,this._onKey,!0),document.removeEventListener(`scroll`,this._onScroll,!0),window.removeEventListener(`resize`,this._onScroll,!0)}};j([x({type:String})],At.prototype,`text`,void 0),j([x({type:String})],At.prototype,`icon`,void 0),j([S()],At.prototype,`_open`,void 0),j([S()],At.prototype,`_style`,void 0),At=j([b(`rs-info-icon`)],At),y(),C(),M();var jt=`M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z`,Mt=`M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z`,F=class extends v{constructor(...e){super(...e),this.config=null,this.climateControlActive=!0,this.isOutdoor=!1,this.overrideInfo=null,this._countdown=``,this._editingName=!1,this._nameInput=``,this._controlModeInfoExpanded=!1}static{this.styles=[St,l`
      :host {
        display: block;
      }

      ha-card {
        padding: 28px 24px;
        position: relative;
        overflow: hidden;
      }

      .hero-accent {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
      }

      .hero-accent-heating {
        background: linear-gradient(90deg, var(--warning-color, #ff9800), #ffb74d);
      }

      .hero-accent-cooling {
        background: linear-gradient(90deg, #2196f3, #64b5f6);
      }

      .hero-accent-idle {
        background: linear-gradient(90deg, var(--disabled-text-color, #bdbdbd), #e0e0e0);
      }

      .hero-accent-none {
        background: var(--divider-color, #e0e0e0);
      }

      .hero-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 16px;
      }

      .area-name {
        font-size: 22px;
        font-weight: 400;
        color: var(--primary-text-color);
        margin: 0;
      }

      .hero-temps {
        display: flex;
        align-items: baseline;
        gap: 8px;
      }

      .hero-current {
        font-size: 48px;
        font-weight: 300;
        color: var(--primary-text-color);
        line-height: 1;
      }

      .hero-unit {
        font-size: 24px;
        font-weight: 300;
        color: var(--secondary-text-color);
      }

      .hero-target {
        margin-left: auto;
        text-align: right;
      }

      .hero-target-label {
        font-size: 12px;
        color: var(--secondary-text-color);
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .hero-target-value {
        font-size: 22px;
        font-weight: 400;
        color: var(--primary-text-color);
      }

      /* Override-aware target styling */
      .hero-target-label.override-boost {
        color: var(--warning-color, #ff9800);
      }

      .hero-target-label.override-eco {
        color: #4caf50;
      }

      .hero-target-label.override-custom {
        color: #2196f3;
      }

      .hero-target-label ha-icon {
        --mdc-icon-size: 12px;
        vertical-align: middle;
      }

      .hero-target-countdown {
        font-size: 11px;
        color: var(--secondary-text-color);
        margin-top: 2px;
      }

      .hero-metric {
        display: flex;
        align-items: center;
        gap: 4px;
        font-size: 14px;
        color: var(--secondary-text-color);
        margin-top: 6px;
      }

      .hero-metric ha-icon {
        --mdc-icon-size: 16px;
        flex-shrink: 0;
      }

      .hero-metric.warning {
        color: var(--warning-color, #ff9800);
      }

      .hero-metric.critical {
        color: var(--error-color, #db4437);
      }

      .hero-metric.info {
        color: var(--info-color, #2196f3);
      }

      .hero-no-data {
        font-size: 14px;
        color: var(--disabled-text-color, #9e9e9e);
        font-style: italic;
        padding: 8px 0;
      }

      .hero-window-open {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 6px 10px;
        margin-bottom: 12px;
        border-radius: 8px;
        font-size: 13px;
        font-weight: 500;
        color: var(--warning-color, #ff9800);
        background: rgba(255, 152, 0, 0.1);
      }

      .hero-window-open ha-icon {
        --mdc-icon-size: 18px;
      }

      .name-row {
        display: flex;
        align-items: center;
        gap: 4px;
      }

      .name-edit-btn {
        --mdc-icon-button-size: 28px;
        --mdc-icon-size: 16px;
        color: var(--secondary-text-color);
        opacity: 0;
        transition: opacity 0.15s;
      }

      .name-row:hover .name-edit-btn {
        opacity: 1;
      }

      @media (hover: none) {
        .name-edit-btn {
          opacity: 0.5;
        }
      }

      .name-edit-row {
        display: flex;
        align-items: center;
        gap: 4px;
      }

      .name-input {
        font-size: 22px;
        font-weight: 400;
        color: var(--primary-text-color);
        background: transparent;
        border: none;
        border-bottom: 2px solid var(--primary-color);
        outline: none;
        padding: 0 0 2px;
        width: 100%;
        font-family: inherit;
      }

      .name-done-btn {
        --mdc-icon-button-size: 28px;
        --mdc-icon-size: 16px;
        color: var(--primary-color);
      }

      .name-clear-btn {
        background: none;
        border: none;
        color: var(--secondary-text-color);
        font-size: 12px;
        cursor: pointer;
        padding: 2px 0;
        text-decoration: underline;
      }

      .hero-status-pills {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 2px;
        flex-shrink: 0;
      }
      .control-mode-badge {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        font-size: 11px;
        color: var(--secondary-text-color);
        cursor: pointer;
      }
      .control-mode-info-icon {
        --mdc-icon-size: 14px;
        opacity: 0.4;
      }
      .control-mode-badge:hover .control-mode-info-icon,
      .control-mode-info-icon.active {
        opacity: 0.8;
      }
      .control-mode-info-panel {
        padding: 8px 12px;
        margin-bottom: 8px;
        font-size: 12px;
        line-height: 1.5;
        color: var(--secondary-text-color);
        background: var(--secondary-background-color);
        border-radius: 8px;
      }

      .learning-paused rs-info-icon {
        margin-left: 2px;
      }

      .uncontrolled-hint {
        font-size: 12px;
        color: var(--disabled-text-color, #9e9e9e);
        margin-top: 8px;
      }
    `]}disconnectedCallback(){super.disconnectedCallback(),this._clearCountdownTimer()}updated(e){(e.has(`overrideInfo`)||e.has(`config`))&&this._updateCountdown()}_clearCountdownTimer(){this._countdownTimer&&=(clearInterval(this._countdownTimer),void 0)}_getOverrideUntil(){return this.overrideInfo?.active?this.overrideInfo.until:null}_updateCountdown(){if(this._clearCountdownTimer(),!this._getOverrideUntil()){let e=this._getEffectiveOverride();this._countdown=e?w(`hero.permanent`,this.hass?.language??`en`):``;return}let e=()=>{let e=this._getOverrideUntil();if(!e){this._countdown=``,this._clearCountdownTimer();return}let t=e-Date.now()/1e3;if(t<=0){this._countdown=``,this._clearCountdownTimer();return}let n=Math.floor(t/3600),r=Math.floor(t%3600/60);this._countdown=n>0?`${n}h ${r}m`:`${r}m`};e(),this._countdownTimer=setInterval(e,3e4)}_getEffectiveOverride(){return this.overrideInfo?.active?this.overrideInfo:null}_renderTargetSection(e){let t=e.target_temp,n=this.hass?.language??`en`,r=this._getEffectiveOverride();if(r){let e=r.type===`boost`?`mdi:fire`:r.type===`eco`?`mdi:leaf`:`mdi:thermometer`,i=r.type===`boost`?w(`override.comfort`,n):r.type===`eco`?w(`override.eco`,n):w(`override.custom`,n),a=`override-${r.type}`,o=r.temp??t;return g`
        <div class="hero-target">
          <div class="hero-target-label ${a}">
            <ha-icon icon=${e}></ha-icon>
            ${i} ${w(`hero.override`,n)}
          </div>
          <div class="hero-target-value">
            ${o===null?`--`:g`${O(o,this.hass)}${T(this.hass)}`}
          </div>
          ${this._countdown?g`<div class="hero-target-countdown">
                ${w(`hero.remaining`,n,{time:this._countdown})}
              </div>`:_}
        </div>
      `}if(t!==null||e.heat_target!=null&&e.cool_target!=null){let r=(this.config?.climate_mode??`auto`)===`auto`&&e.heat_target!=null&&e.cool_target!=null&&e.heat_target!==e.cool_target?g`${O(e.heat_target,this.hass)} –
          ${O(e.cool_target,this.hass)}${T(this.hass)}`:g`${O(t??e.heat_target,this.hass)}${T(this.hass)}`;return g`
        <div class="hero-target">
          <div class="hero-target-label">${w(`hero.target`,n)}</div>
          <div class="hero-target-value">${r}</div>
        </div>
      `}return _}_toggleControlModeInfo(){this._controlModeInfoExpanded=!this._controlModeInfoExpanded}_onEditName(){this._nameInput=this.config?.display_name||``,this._editingName=!0,this.updateComplete.then(()=>{let e=this.renderRoot.querySelector(`.name-input`);e?.focus(),e?.select()})}_onNameInput(e){this._nameInput=e.target.value}_onNameKeydown(e){e.key===`Enter`?this._onNameDone():e.key===`Escape`&&(this._editingName=!1)}_onNameDone(){let e=this._nameInput.trim();this.dispatchEvent(new CustomEvent(`display-name-changed`,{detail:{value:e},bubbles:!0,composed:!0})),this._editingName=!1}_onNameClear(){this.dispatchEvent(new CustomEvent(`display-name-changed`,{detail:{value:``},bubbles:!0,composed:!0})),this._editingName=!1,this._nameInput=``}render(){let e=this.config?.live,t=e?.mode;return g`
      <ha-card>
        <div class="hero-accent ${e?t===`heating`?`hero-accent-heating`:t===`cooling`?`hero-accent-cooling`:`hero-accent-idle`:`hero-accent-none`}"></div>
        <div class="hero-header">
          ${this._editingName?g`
                <div class="name-edit-row">
                  <input
                    class="name-input"
                    type="text"
                    .value=${this._nameInput}
                    placeholder=${w(`room.alias.placeholder`,this.hass?.language??`en`)}
                    @input=${this._onNameInput}
                    @keydown=${this._onNameKeydown}
                  />
                  <ha-icon-button
                    class="name-done-btn"
                    .path=${Mt}
                    @click=${this._onNameDone}
                  ></ha-icon-button>
                </div>
                ${this.config?.display_name?g`<button class="name-clear-btn" @click=${this._onNameClear}>
                      ${w(`room.alias.clear`,this.hass?.language??`en`)}
                    </button>`:_}
              `:g`
                <div class="name-row">
                  <h2 class="area-name">${this.config?.display_name||this.area.name}</h2>
                  <ha-icon-button
                    class="name-edit-btn"
                    .path=${jt}
                    @click=${this._onEditName}
                  ></ha-icon-button>
                </div>
              `}
          ${this.isOutdoor?_:g`
                <div class="hero-status-pills">
                  ${e?g`
                        <span class="mode-pill ${yt(e.mode)}">
                          <span class="mode-dot"></span>
                          ${xt(e.mode,this.hass?.language??`en`)}${e.heating_power>0&&e.heating_power<100?g` ${e.heating_power}%`:_}
                        </span>
                      `:_}
                  ${this.config?g`
                        <span class="control-mode-badge" @click=${this._toggleControlModeInfo}>
                          ${this.config.temperature_sensor?w(`room.control_mode.full_control`,this.hass?.language??`en`):w(`room.control_mode.managed`,this.hass?.language??`en`)}
                          <ha-icon
                            class="control-mode-info-icon ${this._controlModeInfoExpanded?`active`:``}"
                            icon="mdi:information-outline"
                          ></ha-icon>
                        </span>
                      `:_}
                </div>
              `}
        </div>
        ${this._controlModeInfoExpanded&&this.config&&!this.isOutdoor?g`
              <div class="control-mode-info-panel">
                ${this.config.temperature_sensor?w(`room.control_mode.full_control_info`,this.hass?.language??`en`):w(`room.control_mode.managed_info`,this.hass?.language??`en`)}
              </div>
            `:_}
        ${e?g`
              ${e.window_open&&!this.isOutdoor?g`<div class="hero-window-open">
                    <ha-icon icon="mdi:window-open-variant"></ha-icon>
                    ${w(`hero.window_open`,this.hass?.language??`en`)}
                  </div>`:_}
              <div class="hero-temps">
                ${e.current_temp===null?g`<span class="hero-current" style="opacity: 0.3">--</span>`:g`
                      <span class="hero-current">${O(e.current_temp,this.hass)}</span>
                      <span class="hero-unit">${T(this.hass)}</span>
                    `}
                ${this.isOutdoor?_:this._renderTargetSection(e)}
              </div>
              ${e.current_humidity===null?_:g`<div class="hero-metric">
                    <ha-icon icon="mdi:water-percent"></ha-icon>
                    ${w(`hero.humidity`,this.hass?.language??`en`,{value:e.current_humidity.toFixed(0)})}
                  </div>`}
              ${e.device_setpoint!=null&&!this.isOutdoor?g`<div class="hero-metric">
                    <ha-icon
                      icon=${e.mode===`cooling`?`mdi:snowflake`:`mdi:radiator`}
                    ></ha-icon>
                    ${w(`hero.device_setpoint`,this.hass?.language??`en`,{value:O(e.device_setpoint,this.hass),unit:T(this.hass)})}
                  </div>`:_}
              ${e.active_heat_sources&&e.active_heat_sources!==`none`&&!this.isOutdoor?g`<div class="hero-metric">
                    <ha-icon icon="mdi:swap-horizontal"></ha-icon>
                    ${e.active_heat_sources===`primary`?w(`hero.heat_source_primary`,this.hass?.language??`en`):e.active_heat_sources===`secondary`?w(`hero.heat_source_secondary`,this.hass?.language??`en`):w(`hero.heat_source_both`,this.hass?.language??`en`)}
                  </div>`:_}
              ${e.mold_surface_rh!=null&&!this.isOutdoor?g`<div
                    class="hero-metric ${e.mold_risk_level===`critical`?`critical`:e.mold_risk_level===`warning`?`warning`:``}"
                  >
                    <ha-icon icon="mdi:water-alert"></ha-icon>
                    ${w(`room.mold_surface_rh`,this.hass?.language??`en`,{value:String(e.mold_surface_rh.toFixed(0))})}
                  </div>`:_}
              ${e.mold_prevention_active&&!this.isOutdoor?g`<div class="hero-metric info">
                    <ha-icon icon="mdi:shield-check"></ha-icon>
                    ${w(`card.mold_prevention`,this.hass?.language??`en`,{delta:D(e.mold_prevention_delta,this.hass).toFixed(0),unit:T(this.hass)})}
                  </div>`:_}
              ${e.learning_paused_reason===`outdoor_unavailable`&&!this.isOutdoor?g`<div class="hero-metric warning learning-paused">
                    <ha-icon icon="mdi:school-outline"></ha-icon>
                    ${w(`hero.mpc_learning_paused`,this.hass?.language??`en`)}
                    <rs-info-icon
                      icon="mdi:information-outline"
                      .text=${w(`hero.mpc_learning_paused.outdoor_unavailable`,this.hass?.language??`en`)}
                    ></rs-info-icon>
                  </div>`:_}
              ${!this.climateControlActive&&!this.isOutdoor?g`<div class="uncontrolled-hint">
                    ${w(`card.not_controlled`,this.hass?.language??`en`)}
                  </div>`:_}
            `:this.config?g`<div class="hero-no-data">
                ${w(`hero.waiting`,this.hass?.language??`en`)}
              </div>`:g`<div class="hero-no-data">
                ${w(`hero.not_configured`,this.hass?.language??`en`)}
              </div>`}
      </ha-card>
    `}};j([x({attribute:!1})],F.prototype,`hass`,void 0),j([x({attribute:!1})],F.prototype,`area`,void 0),j([x({attribute:!1})],F.prototype,`config`,void 0),j([x({type:Boolean})],F.prototype,`climateControlActive`,void 0),j([x({type:Boolean})],F.prototype,`isOutdoor`,void 0),j([x({attribute:!1})],F.prototype,`overrideInfo`,void 0),j([S()],F.prototype,`_countdown`,void 0),j([S()],F.prototype,`_editingName`,void 0),j([S()],F.prototype,`_nameInput`,void 0),j([S()],F.prototype,`_controlModeInfoExpanded`,void 0),F=j([b(`rs-hero-status`)],F),y(),C(),M();var Nt=class extends v{constructor(...e){super(...e),this.climateMode=`auto`,this.language=`en`}static{this.styles=l`
    :host {
      display: block;
    }

    .mode-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }

    .mode-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      padding: 14px 8px;
      border: 2px solid var(--divider-color, #e0e0e0);
      border-radius: 12px;
      cursor: pointer;
      transition:
        border-color 0.2s,
        background 0.2s,
        box-shadow 0.2s;
      background: transparent;
      font-family: inherit;
      color: var(--primary-text-color);
      text-align: center;
    }

    .mode-card:hover {
      border-color: var(--primary-color, #03a9f4);
      box-shadow: 0 2px 8px rgba(3, 169, 244, 0.1);
    }

    .mode-card[active] {
      border-color: var(--primary-color, #03a9f4);
      background: rgba(3, 169, 244, 0.06);
      box-shadow: 0 2px 8px rgba(3, 169, 244, 0.12);
    }

    .mode-card-icon {
      --mdc-icon-size: 24px;
    }

    .mode-card[active] .mode-card-icon {
      color: var(--primary-color, #03a9f4);
    }

    .mode-card-label {
      font-weight: 500;
      font-size: 13px;
    }

    .mode-card[active] .mode-card-label {
      color: var(--primary-color, #03a9f4);
    }
  `}render(){let e=this.language;return g`
      <div class="mode-grid">
        ${[{value:`auto`,labelKey:`mode.auto`,icon:`mdi:autorenew`},{value:`heat_only`,labelKey:`mode.heat_only`,icon:`mdi:fire`},{value:`cool_only`,labelKey:`mode.cool_only`,icon:`mdi:snowflake`}].map(t=>g`
            <button
              class="mode-card"
              ?active=${this.climateMode===t.value}
              @click=${()=>this._onModeClick(t.value)}
            >
              <ha-icon class="mode-card-icon" icon=${t.icon}></ha-icon>
              <div class="mode-card-label">${w(t.labelKey,e)}</div>
            </button>
          `)}
      </div>
    `}_onModeClick(e){this.dispatchEvent(new CustomEvent(`mode-changed`,{detail:{mode:e},bubbles:!0,composed:!0}))}};j([x({type:String})],Nt.prototype,`climateMode`,void 0),j([x({type:String})],Nt.prototype,`language`,void 0),Nt=j([b(`rs-climate-mode-selector`)],Nt);function I(e){return e.detail?.value??e.target.value??``}function L(e,t){e.dispatchEvent(new CustomEvent(`save-status`,{detail:{status:t},bubbles:!0,composed:!0}))}function Pt(e,t){e.dispatchEvent(new CustomEvent(`hass-more-info`,{bubbles:!0,composed:!0,detail:{entityId:t}}))}y(),C(),M();var Ft=class e extends v{constructor(...e){super(...e),this.activeIndex=-1,this.selectorEntity=``,this.editing=!1}static{this.sharedStyles=l`
    :host {
      display: block;
    }

    .schedule-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-bottom: 12px;
    }

    .schedule-row {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 14px;
      border-radius: 8px;
      transition:
        background 0.3s,
        opacity 0.3s;
    }

    .schedule-row.active {
      background: rgba(76, 175, 80, 0.1);
    }
    .schedule-row.inactive {
      background: rgba(0, 0, 0, 0.04);
    }
    .schedule-row.unreachable {
      background: rgba(0, 0, 0, 0.02);
      opacity: 0.4;
    }

    .schedule-number {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: 500;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: var(--divider-color, #e0e0e0);
      color: var(--primary-text-color);
      flex-shrink: 0;
    }
    .schedule-row.active .schedule-number {
      background: #4caf50;
      color: #fff;
    }

    .schedule-status-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      flex-shrink: 0;
    }
    .schedule-row.active .schedule-status-dot {
      background: #4caf50;
      box-shadow: 0 0 6px rgba(76, 175, 80, 0.5);
    }
    .schedule-row.inactive .schedule-status-dot {
      background: var(--disabled-text-color, #bdbdbd);
    }
    .schedule-row.unreachable .schedule-status-dot {
      background: var(--disabled-text-color, #bdbdbd);
    }

    .schedule-name {
      flex: 1;
      font-size: 14px;
      font-weight: 500;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .schedule-link {
      cursor: pointer;
    }
    .schedule-link:hover {
      text-decoration: underline;
    }
    .schedule-row.active .schedule-name {
      color: var(--primary-text-color);
    }
    .schedule-row.inactive .schedule-name {
      color: var(--secondary-text-color);
    }
    .schedule-row.unreachable .schedule-name {
      color: var(--secondary-text-color);
    }

    .schedule-status {
      font-size: 12px;
      white-space: nowrap;
    }
    .schedule-row.active .schedule-status {
      color: #2e7d32;
    }
    .schedule-row.inactive .schedule-status {
      color: var(--secondary-text-color);
    }
    .schedule-row.unreachable .schedule-status {
      color: var(--secondary-text-color);
    }

    .schedule-controls {
      display: flex;
      align-items: center;
      gap: 2px;
      flex-shrink: 0;
    }
    .schedule-controls ha-icon-button {
      --mdc-icon-button-size: 28px;
      --mdc-icon-size: 16px;
    }

    .add-schedule-row {
      margin-top: 4px;
    }
    .add-schedule-row ha-select {
      width: 100%;
    }

    .helper-link {
      display: inline-block;
      margin-top: 4px;
      font-size: 12px;
      color: var(--primary-color);
      text-decoration: none;
    }
    .helper-link:hover {
      text-decoration: underline;
    }

    .no-schedules {
      font-size: 13px;
      color: var(--secondary-text-color);
      padding: 12px 0;
      text-align: center;
    }

    .form-label {
      display: block;
      font-size: 13px;
      font-weight: 500;
      color: var(--secondary-text-color);
      margin-bottom: 6px;
      text-transform: uppercase;
      letter-spacing: 0.3px;
    }

    .selector-section {
      margin-top: 16px;
    }

    .selector-value {
      font-size: 12px;
      color: var(--secondary-text-color);
      margin-top: 4px;
      padding-left: 4px;
    }

    .selector-warning {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 8px;
      padding: 10px 14px;
      border-radius: 8px;
      background: rgba(255, 152, 0, 0.08);
      color: var(--warning-color, #ff9800);
      font-size: 13px;
    }
    .selector-warning ha-icon {
      --mdc-icon-size: 18px;
      flex-shrink: 0;
    }

    .section-hint {
      font-size: 12px;
      color: var(--secondary-text-color);
      line-height: 1.5;
      margin-bottom: 12px;
    }
  `}static{this.ICON_CLOSE=`M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z`}static{this.ICON_UP=`M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z`}static{this.ICON_DOWN=`M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z`}_getScheduleState(e,t){if(t===0)return`inactive`;if(e===this.activeIndex)return`active`;if(!this.selectorEntity)return e===0?`active`:`unreachable`;let n=this.hass?.states?.[this.selectorEntity];if(!n)return`inactive`;if(this.selectorEntity.startsWith(`input_boolean.`))return e<=1?`inactive`:`unreachable`;if(this.selectorEntity.startsWith(`input_number.`)){let r=Number(n.attributes?.min??1),i=Number(n.attributes?.max??t);return e+1>=r&&e+1<=i?`inactive`:`unreachable`}return`inactive`}_getAvailableEntities(e){return this.hass?.states?Object.keys(this.hass.states).filter(t=>t.startsWith(`schedule.`)&&!e.has(t)):[]}_getFriendlyName(e){return this.hass?.states?.[e]?.attributes?.friendly_name||e}_renderAddRow(e,t,n,r){return g`
      <div class="add-schedule-row">
        <ha-select
          .value=${``}
          .label=${e}
          .options=${t.map(e=>({value:e,label:this._getFriendlyName(e)}))}
          @selected=${e=>{let t=I(e);t&&(n(t),requestAnimationFrame(()=>{e.target.value=``}))}}
          @closed=${e=>e.stopPropagation()}
          fixedMenuPosition
          naturalMenuWidth
        >
          ${t.map(e=>g`
              <ha-list-item value=${e}>${this._getFriendlyName(e)}</ha-list-item>
            `)}
        </ha-select>
        <a href="/config/helpers" target="_top" class="helper-link"> ${r} </a>
      </div>
    `}_renderSelectorSection(e,t,n,r,i){if(e<2)return _;let a=this.selectorEntity?this.hass?.states?.[this.selectorEntity]:null;return g`
      <div class="selector-section">
        <label class="form-label">${t}</label>
        <ha-entity-picker
          .hass=${this.hass}
          .value=${this.selectorEntity}
          .includeDomains=${[`input_boolean`,`input_number`]}
          allow-custom-entity
          @value-changed=${e=>{e.stopPropagation(),i(e.detail?.value??``)}}
        ></ha-entity-picker>
        ${this.selectorEntity&&a?g`
              <div class="selector-value">
                ${this.selectorEntity.startsWith(`input_boolean.`)?w(`schedule.selector_value_boolean`,this.hass.language,{value:a.state===`on`?`On`:`Off`}):w(`schedule.selector_value_number`,this.hass.language,{value:a.state})}
              </div>
            `:_}
        <div class="section-hint" style="margin-top:4px">${n}</div>
        ${e>1&&!this.selectorEntity?g`
              <div class="selector-warning">
                <ha-icon icon="mdi:alert-outline"></ha-icon>
                ${r}
              </div>
            `:_}
      </div>
    `}_renderScheduleControls(t,n,r,i){let a=n>=2;return g`
      <span class="schedule-controls">
        ${a&&t>0?g`
              <ha-icon-button
                .path=${e.ICON_UP}
                @click=${()=>r(t,-1)}
              ></ha-icon-button>
            `:_}
        ${a&&t<n-1?g`
              <ha-icon-button
                .path=${e.ICON_DOWN}
                @click=${()=>r(t,1)}
              ></ha-icon-button>
            `:_}
        <ha-icon-button
          .path=${e.ICON_CLOSE}
          @click=${()=>i(t)}
        ></ha-icon-button>
      </span>
    `}_openEntityInfo(e){Pt(this,e)}};j([x({attribute:!1})],Ft.prototype,`hass`,void 0),j([x({type:Number})],Ft.prototype,`activeIndex`,void 0),j([x({type:String})],Ft.prototype,`selectorEntity`,void 0),j([x({type:Boolean})],Ft.prototype,`editing`,void 0),y();var R=l`
  ha-textfield,
  ha-select,
  ha-entity-picker,
  ha-combo-box {
    --mdc-shape-small: 8px;
    --mdc-shape-medium: 8px;
    --md-filled-text-field-container-shape: 8px;
    --md-outlined-text-field-container-shape: 8px;
    display: block;
    border-radius: 8px;
    overflow: hidden;
    isolation: isolate;
    /* clip-path is more reliable than overflow:hidden for shape clipping
       on the bottom corners of MDC filled inputs. */
    clip-path: inset(0 round 8px);
  }

  /* ha-entity-picker wraps an inner ha-combo-box that doesn't always
     reach the host's bottom edge. Use a tighter clip so the visible
     input's bottom matches the inner's top radius. */
  ha-entity-picker {
    clip-path: inset(0 round 8px 8px 4px 4px);
  }
`;y(),C(),M();var z=class extends Ft{constructor(...e){super(...e),this.schedules=[],this.comfortHeat=21,this.comfortCool=24,this.ecoHeat=17,this.ecoCool=27,this.climateMode=`auto`}set scheduleSelectorEntity(e){this.selectorEntity=e}get scheduleSelectorEntity(){return this.selectorEntity}set activeScheduleIndex(e){this.activeIndex=e}get activeScheduleIndex(){return this.activeIndex}static{this.styles=[Ft.sharedStyles,R,l`
      .fallback-hint {
        font-size: 11px;
        color: var(--secondary-text-color);
        margin-top: 4px;
        font-style: italic;
      }

      .temp-inputs {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
        margin-top: 16px;
      }

      .temp-input-group {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }

      ha-textfield {
        flex: 1;
      }

      .view-temps {
        display: flex;
        gap: 16px;
        font-size: 13px;
        color: var(--secondary-text-color);
        margin-top: 12px;
        padding-top: 12px;
        border-top: 1px solid var(--divider-color, #eee);
      }

      .view-temps span {
        font-weight: 500;
        color: var(--primary-text-color);
      }

      .view-selector-info {
        font-size: 12px;
        color: var(--secondary-text-color);
        margin-top: 8px;
      }

      .temp-grid-auto {
        display: grid;
        grid-template-columns: auto 1fr 1fr;
        gap: 8px 12px;
        align-items: center;
        margin-top: 16px;
      }
      .temp-grid-header {
        font-size: 12px;
        font-weight: 600;
        color: var(--secondary-text-color);
        text-transform: uppercase;
        letter-spacing: 0.3px;
        text-align: center;
      }
      .temp-grid-row-label {
        display: flex;
        align-items: center;
        gap: 4px;
        font-size: 13px;
        font-weight: 500;
        color: var(--secondary-text-color);
        white-space: nowrap;
      }

      @media (max-width: 600px) {
        .temp-grid-auto {
          grid-template-columns: 1fr 1fr;
        }
        .temp-grid-row-label {
          grid-column: 1 / -1;
          margin-top: 8px;
        }
        .temp-grid-header {
          display: none;
        }
      }
    `]}render(){return this.editing?this._renderEditMode():this._renderViewMode()}_renderViewMode(){let e=this.hass.language,t=this.schedules.length>=2;return g`
      ${this.schedules.length>0?g`
            <div class="schedule-list">
              ${this.schedules.map((e,n)=>{let r=this._getScheduleState(n,this.schedules.length);return g`
                  <div class="schedule-row ${r}">
                    ${t?g`<span class="schedule-number">${n+1}</span>`:_}
                    <span class="schedule-status-dot"></span>
                    <span
                      class="schedule-name schedule-link"
                      @click=${()=>this._openEntityInfo(e.entity_id)}
                      >${this._getFriendlyName(e.entity_id)}</span
                    >
                    <span class="schedule-status">${this._getStatusText(n,r)}</span>
                  </div>
                `})}
            </div>
          `:g`<div class="no-schedules">${w(`schedule.no_schedules`,e)}</div>`}
      ${this.climateMode===`auto`?g`
            <div class="view-temps">
              ${w(`schedule.view_heat`,e,{comfort:O(this.comfortHeat,this.hass),eco:O(this.ecoHeat,this.hass),unit:T(this.hass)})}
               · 
              ${w(`schedule.view_cool`,e,{comfort:O(this.comfortCool,this.hass),eco:O(this.ecoCool,this.hass),unit:T(this.hass)})}
            </div>
          `:g`
            <div class="view-temps">
              ${w(`schedule.view_comfort`,e,{temp:O(this.climateMode===`cool_only`?this.comfortCool:this.comfortHeat,this.hass),unit:T(this.hass)})}
               · 
              ${w(`schedule.view_eco`,e,{temp:O(this.climateMode===`cool_only`?this.ecoCool:this.ecoHeat,this.hass),unit:T(this.hass)})}
            </div>
          `}
      ${this.scheduleSelectorEntity?g`<div class="view-selector-info">
            ${w(`schedule.view_selector_prefix`,e)}
            <span
              class="schedule-link"
              @click=${()=>this._openEntityInfo(this.scheduleSelectorEntity)}
              >${this._getFriendlyName(this.scheduleSelectorEntity)}</span
            >
          </div>`:_}
    `}_renderEditMode(){let e=this.hass.language,t=this.schedules.length,n=new Set(this.schedules.map(e=>e.entity_id));return g`
      ${this._renderScheduleList()}
      ${this._renderAddRow(w(`schedule.select_schedule`,e),this._getAvailableEntities(n),e=>this._addSchedule(e),w(`schedule.create_helper_hint`,e))}
      ${this._renderSelectorSection(t,w(`schedule.selector_label`,e),this.scheduleSelectorEntity?this._getSelectorValueText(e):``,w(`schedule.selector_warning`,e),e=>this._onSelectorEntityChange(e))}
      ${this._renderTemperatureInputs(e)}
    `}_renderScheduleList(){let e=this.hass.language,t=this.schedules.length;return t===0?g`<div class="no-schedules">${w(`schedule.no_schedules`,e)}</div>`:g`
      <div class="schedule-list">
        ${this.schedules.map((e,n)=>{let r=this._getScheduleState(n,t);return g`
            <div class="schedule-row ${r}">
              ${t>=2?g`<span class="schedule-number">${n+1}</span>`:_}
              <span class="schedule-status-dot"></span>
              <span class="schedule-name">${this._getFriendlyName(e.entity_id)}</span>
              <span class="schedule-status">${this._getStatusText(n,r)}</span>
              ${this._renderScheduleControls(n,t,(e,t)=>this._moveSchedule(e,t),e=>this._removeSchedule(e))}
            </div>
          `})}
      </div>
    `}_renderTemperatureInputs(e){return this.climateMode===`auto`?g`
        <div class="temp-grid-auto">
          <div class="temp-grid-header"></div>
          <div class="temp-grid-header">${w(`schedule.column_comfort`,e)}</div>
          <div class="temp-grid-header">${w(`schedule.column_eco`,e)}</div>
          <div class="temp-grid-row-label">
            <ha-icon icon="mdi:fire" style="--mdc-icon-size:16px"></ha-icon>
            ${w(`schedule.row_heat`,e)}
          </div>
          <ha-textfield
            type="number"
            .value=${String(E(this.comfortHeat,this.hass))}
            suffix=${T(this.hass)}
            step=${k(this.hass)}
            min=${A(5,35,this.hass).min}
            max=${A(5,35,this.hass).max}
            @change=${this._onComfortHeatChange}
          ></ha-textfield>
          <ha-textfield
            type="number"
            .value=${String(E(this.ecoHeat,this.hass))}
            suffix=${T(this.hass)}
            step=${k(this.hass)}
            min=${A(5,35,this.hass).min}
            max=${A(5,35,this.hass).max}
            @change=${this._onEcoHeatChange}
          ></ha-textfield>
          <div class="temp-grid-row-label">
            <ha-icon icon="mdi:snowflake" style="--mdc-icon-size:16px"></ha-icon>
            ${w(`schedule.row_cool`,e)}
          </div>
          <ha-textfield
            type="number"
            .value=${String(E(this.comfortCool,this.hass))}
            suffix=${T(this.hass)}
            step=${k(this.hass)}
            min=${A(5,35,this.hass).min}
            max=${A(5,35,this.hass).max}
            @change=${this._onComfortCoolChange}
          ></ha-textfield>
          <ha-textfield
            type="number"
            .value=${String(E(this.ecoCool,this.hass))}
            suffix=${T(this.hass)}
            step=${k(this.hass)}
            min=${A(5,35,this.hass).min}
            max=${A(5,35,this.hass).max}
            @change=${this._onEcoCoolChange}
          ></ha-textfield>
        </div>
      `:g`
      <div class="temp-inputs">
        <div class="temp-input-group">
          <ha-textfield
            type="number"
            label=${w(`schedule.comfort_label`,e)}
            suffix=${T(this.hass)}
            step=${k(this.hass)}
            .value=${String(E(this.climateMode===`cool_only`?this.comfortCool:this.comfortHeat,this.hass))}
            min=${A(5,35,this.hass).min}
            max=${A(5,35,this.hass).max}
            @change=${this.climateMode===`cool_only`?this._onComfortCoolChange:this._onComfortHeatChange}
          ></ha-textfield>
        </div>
        <div class="temp-input-group">
          <ha-textfield
            type="number"
            label=${w(`schedule.eco_label`,e)}
            suffix=${T(this.hass)}
            step=${k(this.hass)}
            .value=${String(E(this.climateMode===`cool_only`?this.ecoCool:this.ecoHeat,this.hass))}
            min=${A(5,35,this.hass).min}
            max=${A(5,35,this.hass).max}
            @change=${this.climateMode===`cool_only`?this._onEcoCoolChange:this._onEcoHeatChange}
          ></ha-textfield>
        </div>
      </div>
      <div class="fallback-hint">${w(`schedule.comfort_hint`,e)}</div>
    `}_getSelectorValueText(e){let t=this.hass?.states?.[this.scheduleSelectorEntity];return t?this.scheduleSelectorEntity.startsWith(`input_boolean.`)?w(`schedule.selector_value_boolean`,e,{value:t.state===`on`?`On`:`Off`}):w(`schedule.selector_value_number`,e,{value:t.state}):``}_getStatusText(e,t){let n=this.hass.language;if(t===`unreachable`)return w(`schedule.state_unreachable`,n);if(t===`inactive`)return w(`schedule.state_inactive`,n);let r=this.schedules[e],i=this.hass?.states?.[r.entity_id];if(!i)return w(`schedule.state_active`,n);if(i.state===`on`){let e=i.attributes??{},t=e.temperature;if(t!=null)return w(`schedule.from_schedule`,n,{temp:String(t),unit:T(this.hass)});let r=e.heat_temperature,a=e.cool_temperature;return r!=null||a!=null?w(`schedule.from_schedule_split`,n,{heat:String(r??this.comfortHeat),cool:String(a??this.comfortCool),unit:T(this.hass)}):w(`schedule.fallback`,n,{temp:O(this.climateMode===`cool_only`?this.comfortCool:this.comfortHeat,this.hass),unit:T(this.hass)})}return w(`schedule.eco_detail`,n,{temp:O(this.climateMode===`cool_only`?this.ecoCool:this.ecoHeat,this.hass),unit:T(this.hass)})}_addSchedule(e){this._emitSchedules([...this.schedules,{entity_id:e}])}_removeSchedule(e){this._emitSchedules(this.schedules.filter((t,n)=>n!==e))}_moveSchedule(e,t){let n=e+t;if(n<0||n>=this.schedules.length)return;let r=[...this.schedules];[r[e],r[n]]=[r[n],r[e]],this._emitSchedules(r)}_emitSchedules(e){this.dispatchEvent(new CustomEvent(`schedules-changed`,{detail:{value:e},bubbles:!0,composed:!0}))}_onSelectorEntityChange(e){this.dispatchEvent(new CustomEvent(`schedule-selector-changed`,{detail:{value:e},bubbles:!0,composed:!0}))}_onComfortHeatChange(e){let t=e.target,n=Tt(parseFloat(t.value)||E(21,this.hass),this.hass);this.dispatchEvent(new CustomEvent(`comfort-heat-changed`,{detail:{value:n},bubbles:!0,composed:!0})),this.comfortCool<n&&this.dispatchEvent(new CustomEvent(`comfort-cool-changed`,{detail:{value:n},bubbles:!0,composed:!0}))}_onComfortCoolChange(e){let t=e.target,n=Tt(parseFloat(t.value)||E(24,this.hass),this.hass);this.dispatchEvent(new CustomEvent(`comfort-cool-changed`,{detail:{value:n},bubbles:!0,composed:!0})),this.comfortHeat>n&&this.dispatchEvent(new CustomEvent(`comfort-heat-changed`,{detail:{value:n},bubbles:!0,composed:!0}))}_onEcoHeatChange(e){let t=e.target,n=Tt(parseFloat(t.value)||E(17,this.hass),this.hass);this.dispatchEvent(new CustomEvent(`eco-heat-changed`,{detail:{value:n},bubbles:!0,composed:!0})),this.ecoCool<n&&this.dispatchEvent(new CustomEvent(`eco-cool-changed`,{detail:{value:n},bubbles:!0,composed:!0}))}_onEcoCoolChange(e){let t=e.target,n=Tt(parseFloat(t.value)||E(27,this.hass),this.hass);this.dispatchEvent(new CustomEvent(`eco-cool-changed`,{detail:{value:n},bubbles:!0,composed:!0})),this.ecoHeat>n&&this.dispatchEvent(new CustomEvent(`eco-heat-changed`,{detail:{value:n},bubbles:!0,composed:!0}))}};j([x({attribute:!1})],z.prototype,`schedules`,void 0),j([x({type:String})],z.prototype,`scheduleSelectorEntity`,null),j([x({type:Number})],z.prototype,`activeScheduleIndex`,null),j([x({type:Number})],z.prototype,`comfortHeat`,void 0),j([x({type:Number})],z.prototype,`comfortCool`,void 0),j([x({type:Number})],z.prototype,`ecoHeat`,void 0),j([x({type:Number})],z.prototype,`ecoCool`,void 0),j([x({type:String})],z.prototype,`climateMode`,void 0),z=j([b(`rs-schedule-settings`)],z);var It={underfloor:2,radiator:1,"":0};function Lt(e){let t=``;for(let n of e){if(n.type!==`trv`)continue;let e=n.heating_system_type??``;(It[e]??0)>(It[t]??0)&&(t=e)}return t}y();var Rt=l`
  .master {
    display: flex;
    flex-direction: column;
    gap: 12px;
    min-width: 0;
  }

  .master-list {
    display: flex;
    flex-direction: column;
    gap: 4px;
    min-width: 0;
  }

  .master-row {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 10px;
    border-radius: 10px;
    cursor: pointer;
    transition:
      background 0.15s,
      border-color 0.15s;
    border: 1px solid transparent;
    min-width: 0;
  }

  .master-row:hover {
    background: rgba(255, 255, 255, 0.03);
  }

  .master-row.focused {
    background: rgba(3, 169, 244, 0.08);
    border-color: rgba(3, 169, 244, 0.5);
  }

  .master-row ha-checkbox {
    flex-shrink: 0;
    margin-left: -8px;
  }

  .master-info {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .master-name-row {
    display: flex;
    align-items: center;
    gap: 6px;
    min-width: 0;
  }

  .master-name {
    font-size: 14px;
    font-weight: 450;
    color: var(--primary-text-color);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 0;
  }

  .master-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }

  .type-pill,
  .meta-pill {
    display: inline-block;
    font-size: 10px;
    font-weight: 500;
    padding: 1px 8px;
    border-radius: 8px;
    letter-spacing: 0.3px;
    text-transform: uppercase;
    color: var(--secondary-text-color);
    background: rgba(255, 255, 255, 0.05);
  }

  .type-pill {
    color: var(--primary-color);
    background: rgba(3, 169, 244, 0.12);
  }

  .external-badge {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 10px;
    font-weight: 500;
    color: var(--warning-color, #ff9800);
    background: rgba(255, 152, 0, 0.1);
    padding: 2px 8px;
    border-radius: 10px;
    letter-spacing: 0.3px;
    text-transform: uppercase;
    flex-shrink: 0;
  }

  .detail-panel {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 12px 16px;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid var(--divider-color, rgba(255, 255, 255, 0.08));
    border-radius: 12px;
    min-width: 0;
    min-height: 200px;
  }

  .empty-detail {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    flex: 1;
    min-height: 180px;
    color: var(--secondary-text-color);
    font-size: 13px;
    font-style: italic;
    opacity: 0.7;
    text-align: center;
  }

  .empty-detail ha-icon {
    --mdc-icon-size: 28px;
    opacity: 0.6;
  }

  .detail-head {
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding-bottom: 6px;
    border-bottom: 1px solid var(--divider-color, rgba(255, 255, 255, 0.06));
  }

  .detail-title {
    font-size: 15px;
    font-weight: 500;
    color: var(--primary-text-color);
  }

  .detail-entity-id {
    font-family: var(--code-font-family, monospace);
    font-size: 11px;
    color: var(--secondary-text-color);
    opacity: 0.7;
  }

  .detail-field {
    display: flex;
    flex-direction: column;
  }

  .detail-field ha-select {
    width: 100%;
  }

  .detail-field.with-info {
    flex-direction: row;
    align-items: center;
    gap: 6px;
  }

  .detail-field.with-info ha-select,
  .detail-field.with-info ha-textfield {
    flex: 1;
    min-width: 0;
  }

  .detail-field.with-info rs-info-icon {
    flex-shrink: 0;
  }

  .detail-hint {
    font-size: 12px;
    color: var(--secondary-text-color);
    line-height: 1.5;
  }

  .detail-toggle-row {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 8px 0;
  }

  .detail-toggle-row ha-checkbox {
    margin-top: -8px;
    margin-left: -8px;
  }

  .detail-toggle-label {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
    color: var(--primary-text-color);
  }

  .detail-toggle-label ha-icon {
    --mdc-icon-size: 16px;
    color: var(--secondary-text-color);
  }

  .inline-hint {
    margin-top: 2px;
  }

  .block {
    margin-top: 4px;
  }

  .block-divider {
    height: 1px;
    background: var(--divider-color, rgba(255, 255, 255, 0.08));
    margin: 16px 0 8px;
  }

  .block-title {
    font-size: 12px;
    font-weight: 500;
    color: var(--secondary-text-color);
    text-transform: uppercase;
    letter-spacing: 0.4px;
    margin-bottom: 8px;
  }

  .empty-list {
    color: var(--secondary-text-color);
    font-size: 13px;
    font-style: italic;
    padding: 12px 14px;
  }

  ha-entity-picker {
    width: 100%;
  }

  .picker-wrap {
    margin-top: 8px;
  }
`;y(),C(),M();var zt=class extends v{constructor(...e){super(...e),this.masterWidth=`260px`,this.breakpoint=720}static{this.styles=l`
    :host {
      display: block;
      container-type: inline-size;
    }

    .wrap {
      display: grid;
      grid-template-columns: var(--rs-master-width, 260px) minmax(0, 1fr);
      gap: 20px;
      align-items: start;
    }

    @container (max-width: 720px) {
      .wrap {
        grid-template-columns: minmax(0, 1fr);
      }
    }

    /* Fallback for browsers without container queries */
    @media (max-width: 720px) {
      .wrap {
        grid-template-columns: minmax(0, 1fr);
      }
    }

    ::slotted([slot="master"]) {
      min-width: 0;
    }

    ::slotted([slot="detail"]) {
      min-width: 0;
    }
  `}render(){return g`
      <div class="wrap" style="--rs-master-width: ${this.masterWidth};">
        <div class="master"><slot name="master"></slot></div>
        <div class="detail"><slot name="detail"></slot></div>
      </div>
    `}};j([x({type:String})],zt.prototype,`masterWidth`,void 0),j([x({type:Number})],zt.prototype,`breakpoint`,void 0),zt=j([b(`rs-master-detail`)],zt),y(),C(),M();var B=class extends v{constructor(...e){super(...e),this.devices=[],this.selectedTempSensor=``,this.valveProtectionExclude=new Set,this.valveProtectionEnabled=!1,this.editing=!1,this._systemTypeInfoExpanded=!1,this._showBoostHint=!1,this._selectedThermostats=new Set,this._selectedCoolingDevices=new Set,this._heatingSystemType=``,this._selectedForEdit=``,this._entityFilter=e=>{let t=e.entity_id;return t.substring(t.indexOf(`.`)+1).startsWith(`roommind_`)||this.devices.some(e=>e.entity_id===t)?!1:t.startsWith(`climate.`)}}willUpdate(e){if(e.has(`devices`)){this._selectedThermostats=new Set(this.devices.filter(e=>e.type===`trv`).map(e=>e.entity_id)),this._selectedCoolingDevices=new Set(this.devices.filter(e=>e.type===`ac`).map(e=>e.entity_id)),this._heatingSystemType=Lt(this.devices);let e=new Set(this.devices.map(e=>e.entity_id));this._selectedForEdit&&!e.has(this._selectedForEdit)&&(this._selectedForEdit=``),!this._selectedForEdit&&this.devices.length>0&&(this._selectedForEdit=this.devices[0].entity_id)}}static{this.styles=[Rt,R,l`
      :host {
        display: block;
      }

      .section-subtitle {
        font-size: 12px;
        font-weight: 500;
        color: var(--secondary-text-color);
        margin: 12px 0 8px 0;
        text-transform: uppercase;
        letter-spacing: 0.4px;
      }

      .section-subtitle:first-child {
        margin-top: 0;
      }

      .device-group {
        padding: 4px 0;
      }

      .device-group + .device-group {
        margin-top: 8px;
        padding-top: 12px;
        border-top: 1px solid var(--divider-color, #eee);
      }

      .device-list-scroll {
        max-height: 168px;
        overflow-y: auto;
        overflow-x: hidden;
        scrollbar-width: thin;
      }

      /* Device rows */
      .device-row {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 8px 14px;
        font-size: 14px;
        color: var(--primary-text-color);
        border-radius: 10px;
        margin-bottom: 2px;
        transition: background 0.15s;
      }

      .device-row:last-child {
        margin-bottom: 0;
      }

      .device-row:hover {
        background: rgba(0, 0, 0, 0.02);
      }

      .device-row.selected {
        background: rgba(3, 169, 244, 0.035);
      }

      .device-row ha-checkbox,
      .device-row ha-radio {
        flex-shrink: 0;
      }

      .device-info {
        flex: 1;
        min-width: 0;
      }

      .device-name-row {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .device-name {
        font-size: 14px;
        font-weight: 450;
        color: var(--primary-text-color);
      }

      .device-value {
        margin-left: auto;
        font-size: 14px;
        font-weight: 500;
        color: var(--primary-text-color);
        flex-shrink: 0;
      }

      .device-entity {
        font-family: var(--code-font-family, monospace);
        font-size: 11px;
        color: var(--secondary-text-color);
        margin-top: 2px;
        opacity: 0.7;
      }

      .external-badge {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        font-size: 10px;
        font-weight: 500;
        color: var(--warning-color, #ff9800);
        background: rgba(255, 152, 0, 0.1);
        padding: 2px 8px;
        border-radius: 10px;
        letter-spacing: 0.3px;
        text-transform: uppercase;
        flex-shrink: 0;
      }

      .device-type-select {
        flex-shrink: 0;
        --ha-select-min-width: 90px;
      }

      .no-devices {
        color: var(--secondary-text-color);
        font-size: 13px;
        font-style: italic;
        padding: 12px 14px;
      }

      .entity-picker-wrap {
        margin-top: 12px;
        padding-top: 12px;
        border-top: 1px solid var(--divider-color, #eee);
      }

      .subtitle-row {
        display: flex;
        align-items: center;
        gap: 4px;
      }

      .info-icon {
        --mdc-icon-size: 16px;
        color: var(--secondary-text-color);
        cursor: pointer;
        opacity: 0.6;
      }
      .info-icon:hover,
      .info-icon.info-active {
        opacity: 1;
        color: var(--primary-color);
      }

      .system-type-info {
        font-size: 12px;
        line-height: 1.5;
        color: var(--secondary-text-color);
        padding: 8px 14px 4px;
      }

      .boost-hint {
        display: flex;
        align-items: flex-start;
        gap: 8px;
        margin-top: 8px;
        padding: 8px 12px;
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.08);
        border-radius: 8px;
        font-size: 13px;
        color: var(--primary-text-color);
        line-height: 1.4;
        --mdc-icon-size: 18px;
      }
      .boost-hint ha-icon {
        color: var(--primary-color);
        flex-shrink: 0;
        margin-top: 1px;
      }

      .idle-action-row {
        display: flex;
        gap: 12px;
        padding: 4px 14px 4px 42px;
      }

      .idle-action-row ha-select {
        flex: 1;
        min-width: 0;
      }

      .setpoint-mode-row {
        display: flex;
        gap: 12px;
        padding: 4px 14px 4px 42px;
      }

      .setpoint-mode-row ha-select {
        flex: 1;
        min-width: 0;
      }

      .setpoint-mode-hint {
        font-size: 12px;
        color: var(--secondary-text-color);
        padding: 2px 14px 4px 42px;
      }

      .valve-exclude-row {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 2px 14px 2px 42px;
        font-size: 12px;
        color: var(--secondary-text-color);
      }

      .valve-exclude-row ha-icon {
        --mdc-icon-size: 14px;
        color: var(--secondary-text-color);
      }

      .valve-exclude-row ha-checkbox {
        --mdc-checkbox-unchecked-color: var(--secondary-text-color);
        margin: -8px -4px -8px -8px;
      }

      .valve-exclude-badge {
        display: inline-flex;
        align-items: center;
        gap: 3px;
        font-size: 10px;
        font-weight: 500;
        color: var(--secondary-text-color);
        background: var(--secondary-background-color);
        padding: 2px 6px;
        border-radius: 8px;
        --mdc-icon-size: 12px;
      }

      /* View mode styles */
      .view-row {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 8px 14px;
        font-size: 14px;
        color: var(--primary-text-color);
      }

      .view-name {
        flex: 1;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .entity-link {
        cursor: pointer;
      }

      .entity-link:hover {
        text-decoration: underline;
      }

      .view-value {
        font-weight: 500;
        flex-shrink: 0;
      }
    `]}render(){return this.editing?this._renderEditMode():this._renderViewMode()}_renderViewMode(){return g`
      ${this._selectedThermostats.size>0||this._selectedCoolingDevices.size>0?g`
            <div class="device-group">
              <div class="section-subtitle">
                ${w(`devices.climate_entities`,this.hass.language)}
              </div>
              ${[...this._selectedThermostats].map(e=>this._renderViewRow(e,`climate`))}
              ${[...this._selectedCoolingDevices].map(e=>this._renderViewRow(e,`climate`))}
            </div>
          `:_}
      ${this._heatingSystemType?g`
            <div class="device-group">
              <div class="section-subtitle">
                ${w(`devices.heating_system_type`,this.hass.language)}
              </div>
              <div class="view-row">
                <span class="view-name"
                  >${this._heatingSystemType===`radiator`?w(`devices.system_type_radiator`,this.hass.language):this._heatingSystemType===`underfloor`?w(`devices.system_type_underfloor`,this.hass.language):this._heatingSystemType}</span
                >
              </div>
            </div>
          `:_}
    `}_renderViewRow(e,t){let n=this.hass.states[e],r=n?.attributes?.friendly_name||e,i=n?.state,a=n?.attributes??{},o=``;if(t===`climate`){let e=a.current_temperature;e!=null&&(o=`${e.toFixed(1)}${T(this.hass)}`)}else if(t===`temp`){let t=e.startsWith(`climate.`)?a.current_temperature:i;t!=null&&t!==``&&t!==`unknown`&&t!==`unavailable`&&(o=`${Number(t).toFixed(1)}${T(this.hass)}`)}else i&&i!==`unknown`&&i!==`unavailable`&&(o=`${Math.round(Number(i))}%`);let s=t===`climate`&&this.valveProtectionEnabled&&this.valveProtectionExclude.has(e),c=t===`climate`?this.devices.find(t=>t.entity_id===e):void 0,l=c?.idle_action===`fan_only`||c?.idle_action===`setback`||c?.idle_action===`low`,u=c?.setpoint_mode===`direct`&&!!this.selectedTempSensor;return g`
      <div class="view-row">
        <span class="view-name entity-link" @click=${()=>Pt(this,e)}
          >${r}</span
        >
        ${l?g`<span class="valve-exclude-badge">
              ${c.idle_action===`fan_only`?g`${w(`devices.idle_action_fan_only`,this.hass.language)}${c.idle_fan_mode?` (${c.idle_fan_mode})`:_}`:c.idle_action===`low`?w(`devices.idle_action_low`,this.hass.language):w(`devices.idle_action_setback`,this.hass.language)}
            </span>`:_}
        ${u?g`<span class="valve-exclude-badge">
              ${w(`devices.setpoint_mode_direct`,this.hass.language)}
            </span>`:_}
        ${s?g`<span class="valve-exclude-badge">
              <ha-icon icon="mdi:shield-off-outline"></ha-icon>
              ${w(`devices.valve_protection_excluded`,this.hass.language)}
            </span>`:_}
        ${o?g`<span class="view-value">${o}</span>`:_}
      </div>
    `}_renderEditMode(){let e=vt(this.area.area_id,this.hass?.entities,this.hass?.devices).filter(e=>!e.entity_id.substring(e.entity_id.indexOf(`.`)+1).startsWith(`roommind_`)).filter(e=>e.entity_id.startsWith(`climate.`)),t=new Set(e.map(e=>e.entity_id)),n=new Set(this.devices.map(e=>e.entity_id)),r=[...n].filter(e=>!t.has(e)),i=e=>n.has(e),a=this._selectedForEdit;return g`
      <rs-master-detail>
        <div slot="master" class="master">
          <div class="section-subtitle">
            ${w(`devices.climate_entities`,this.hass.language)}
          </div>
          <div class="master-list">
            ${e.length>0?e.map(e=>this._renderMasterRow(e.entity_id,!1)):g`<div class="no-devices">
                  ${w(`devices.no_climate`,this.hass.language)}
                </div>`}
            ${r.map(e=>this._renderMasterRow(e,!0))}
          </div>
          <div class="entity-picker-wrap">
            <ha-entity-picker
              .hass=${this.hass}
              .includeDomains=${[`climate`]}
              .entityFilter=${this._entityFilter}
              .value=${``}
              label=${w(`devices.add_entity`,this.hass.language)}
              @value-changed=${this._onEntityPicked}
            ></ha-entity-picker>
          </div>
        </div>

        <div slot="detail" class="detail-panel">
          ${a&&i(a)?this._renderDeviceDetail(a):g`<div class="empty-detail">
                <ha-icon icon="mdi:gesture-tap"></ha-icon>
                <span>${w(`devices.select_to_configure`,this.hass.language)}</span>
              </div>`}
        </div>
      </rs-master-detail>

      ${this._selectedThermostats.size>0?g`
            <div class="block-divider"></div>
            <div class="block">
              <div class="subtitle-row">
                <div class="section-subtitle">
                  ${w(`devices.heating_system_type`,this.hass.language)}
                </div>
                <ha-icon
                  class="info-icon ${this._systemTypeInfoExpanded?`info-active`:``}"
                  icon="mdi:information-outline"
                  @click=${()=>{this._systemTypeInfoExpanded=!this._systemTypeInfoExpanded}}
                ></ha-icon>
              </div>
              ${this._systemTypeInfoExpanded?g`
                    <div class="system-type-info">
                      ${w(`devices.heating_system_type_info`,this.hass.language)}
                    </div>
                  `:_}
              <ha-select
                .value=${this._heatingSystemType||`standard`}
                .options=${[{value:`standard`,label:w(`devices.system_type_none`,this.hass.language)},{value:`radiator`,label:w(`devices.system_type_radiator`,this.hass.language)},{value:`underfloor`,label:w(`devices.system_type_underfloor`,this.hass.language)}]}
                @selected=${this._onHeatingSystemTypeChange}
                @closed=${e=>e.stopPropagation()}
                fixedMenuPosition
                style="width: 100%;"
              >
                <ha-list-item value="standard"
                  >${w(`devices.system_type_none`,this.hass.language)}</ha-list-item
                >
                <ha-list-item value="radiator"
                  >${w(`devices.system_type_radiator`,this.hass.language)}</ha-list-item
                >
                <ha-list-item value="underfloor"
                  >${w(`devices.system_type_underfloor`,this.hass.language)}</ha-list-item
                >
              </ha-select>
              ${this._showBoostHint?g`
                    <div class="boost-hint">
                      <ha-icon icon="mdi:information-outline"></ha-icon>
                      <span
                        >${w(`devices.heating_system_type_boost_hint`,this.hass.language)}</span
                      >
                    </div>
                  `:_}
            </div>
          `:_}
    `}_renderMasterRow(e,t){let n=this._selectedThermostats.has(e),r=this._selectedCoolingDevices.has(e),i=n||r,a=this._selectedForEdit===e,o=this.hass.states[e]?.attributes?.friendly_name||e,s=this.devices.find(t=>t.entity_id===e),c=n?w(`devices.type_thermostat`,this.hass.language):r?w(`devices.type_ac`,this.hass.language):``;return g`
      <div
        class="master-row ${a?`focused`:``} ${i?`in-room`:``}"
        @click=${()=>this._onSelectForEdit(e)}
      >
        <ha-checkbox
          .checked=${i}
          @click=${e=>e.stopPropagation()}
          @change=${t=>{let n=t.target;this._onClimateToggle(e,n.checked),n.checked&&(this._selectedForEdit=e)}}
        ></ha-checkbox>
        <div class="master-info">
          <div class="master-name-row">
            <span class="master-name">${o}</span>
            ${t?g`<span class="external-badge"
                  >${w(`devices.other_area`,this.hass.language)}</span
                >`:_}
          </div>
          <div class="master-meta">
            ${c?g`<span class="type-pill">${c}</span>`:_}
            ${s?.idle_action&&s.idle_action!==`off`?g`<span class="meta-pill"
                  >${w(`devices.idle_action_${s.idle_action}`,this.hass.language)}</span
                >`:_}
            ${s?.setpoint_mode===`direct`&&this.selectedTempSensor?g`<span class="meta-pill"
                  >${w(`devices.setpoint_mode_direct`,this.hass.language)}</span
                >`:_}
          </div>
        </div>
      </div>
    `}_onSelectForEdit(e){this._selectedForEdit=e}_renderDeviceDetail(e){let t=this.devices.find(t=>t.entity_id===e);if(!t)return _;let n=t.type===`trv`,r=t.type===`ac`,i=this.hass.states[e],a=i?.attributes?.friendly_name||e,o=(i?.attributes?.hvac_modes??[]).includes(`fan_only`),s=this.valveProtectionExclude.has(e),c=this.hass.language;return g`
      <div class="detail-head">
        <div class="detail-title">${a}</div>
        <div class="detail-entity-id">${e}</div>
      </div>

      <div class="detail-field">
        <ha-select
          .label=${w(`devices.type_label`,c)||`Type`}
          .value=${this._getDeviceDisplayType(e)}
          .options=${[{value:`thermostat`,label:w(`devices.type_thermostat`,c)},{value:`ac`,label:w(`devices.type_ac`,c)}]}
          @selected=${t=>this._onDeviceTypeChange(e,I(t))}
          @closed=${e=>e.stopPropagation()}
          fixedMenuPosition
        >
          <ha-list-item value="thermostat"
            >${w(`devices.type_thermostat`,c)}</ha-list-item
          >
          <ha-list-item value="ac">${w(`devices.type_ac`,c)}</ha-list-item>
        </ha-select>
      </div>

      ${r?g`
            <div class="detail-field">
              <ha-select
                .label=${w(`devices.idle_action`,c)}
                .value=${t.idle_action??`off`}
                .options=${[{value:`off`,label:w(`devices.idle_action_off`,c)},...o?[{value:`fan_only`,label:w(`devices.idle_action_fan_only`,c)}]:[],{value:`setback`,label:w(`devices.idle_action_setback`,c)}]}
                @selected=${t=>this._onIdleActionChange(e,I(t))}
                @closed=${e=>e.stopPropagation()}
                fixedMenuPosition
              >
                <ha-list-item value="off"
                  >${w(`devices.idle_action_off`,c)}</ha-list-item
                >
                ${o?g`<ha-list-item value="fan_only"
                      >${w(`devices.idle_action_fan_only`,c)}</ha-list-item
                    >`:_}
                <ha-list-item value="setback"
                  >${w(`devices.idle_action_setback`,c)}</ha-list-item
                >
              </ha-select>
            </div>
            ${t.idle_action===`fan_only`?g`<div class="detail-field">
                  <ha-select
                    .label=${w(`devices.idle_fan_mode`,c)}
                    .value=${t.idle_fan_mode??`low`}
                    .options=${(i?.attributes?.fan_modes??[]).map(e=>({value:e,label:e}))}
                    @selected=${t=>this._onIdleFanModeChange(e,I(t))}
                    @closed=${e=>e.stopPropagation()}
                    fixedMenuPosition
                  >
                    ${(i?.attributes?.fan_modes??[]).map(e=>g`<ha-list-item value="${e}">${e}</ha-list-item>`)}
                  </ha-select>
                </div>`:_}
          `:_}
      ${n?g`
            <div class="detail-field with-info">
              <ha-select
                .label=${w(`devices.idle_action`,c)}
                .value=${t.idle_action??`off`}
                .options=${[{value:`off`,label:w(`devices.idle_action_off`,c)},{value:`low`,label:w(`devices.idle_action_low`,c)}]}
                @selected=${t=>this._onIdleActionChange(e,I(t))}
                @closed=${e=>e.stopPropagation()}
                fixedMenuPosition
              >
                <ha-list-item value="off"
                  >${w(`devices.idle_action_off`,c)}</ha-list-item
                >
                <ha-list-item value="low"
                  >${w(`devices.idle_action_low`,c)}</ha-list-item
                >
              </ha-select>
              ${t.idle_action===`low`?g`<rs-info-icon
                    .text=${w(`devices.idle_action_low_hint`,c)}
                  ></rs-info-icon>`:_}
            </div>
          `:_}
      ${this.selectedTempSensor?g`
            <div class="detail-field with-info">
              <ha-select
                .label=${w(`devices.setpoint_mode`,c)}
                .value=${t.setpoint_mode??`proportional`}
                .options=${[{value:`proportional`,label:w(`devices.setpoint_mode_proportional`,c)},{value:`direct`,label:w(`devices.setpoint_mode_direct`,c)}]}
                @selected=${t=>this._onSetpointModeChange(e,I(t))}
                @closed=${e=>e.stopPropagation()}
                fixedMenuPosition
              >
                <ha-list-item value="proportional"
                  >${w(`devices.setpoint_mode_proportional`,c)}</ha-list-item
                >
                <ha-list-item value="direct"
                  >${w(`devices.setpoint_mode_direct`,c)}</ha-list-item
                >
              </ha-select>
              <rs-info-icon .text=${w(`devices.setpoint_mode_hint`,c)}></rs-info-icon>
            </div>
          `:_}
      ${n&&this.valveProtectionEnabled?g`
            <div class="detail-toggle-row">
              <ha-checkbox
                .checked=${s}
                @change=${t=>{let n=t.target;this._onValveProtectionExcludeToggle(e,n.checked)}}
              ></ha-checkbox>
              <div class="detail-toggle-label">
                <ha-icon icon="mdi:shield-off-outline"></ha-icon>
                ${w(`devices.valve_protection_excluded`,c)}
                <rs-info-icon
                  .text=${w(`devices.valve_protection_exclude_hint`,c)}
                ></rs-info-icon>
              </div>
            </div>
          `:_}
    `}_detectClimateType(e){return(this.hass.states[e]?.attributes?.hvac_modes??[]).some(e=>[`cool`,`heat_cool`].includes(e))?`ac`:`thermostat`}_getDeviceDisplayType(e){let t=this.devices.find(t=>t.entity_id===e);return t&&t.type===`ac`?`ac`:`thermostat`}_onClimateToggle(e,t){let n;if(t){let t=this._detectClimateType(e)===`thermostat`?`trv`:`ac`;n=[...this.devices,{entity_id:e,type:t,role:`auto`}]}else n=this.devices.filter(t=>t.entity_id!==e);this._fireDeviceChanged(n)}_onDeviceTypeChange(e,t){let n=t===`thermostat`?`trv`:`ac`,r=this.devices.map(t=>{if(t.entity_id!==e)return t;let r={...t,type:n};return n===`ac`&&r.idle_action===`low`&&(r.idle_action=`off`),r});this._fireDeviceChanged(r)}_onValveProtectionExcludeToggle(e,t){this.dispatchEvent(new CustomEvent(`valve-protection-exclude-toggle`,{detail:{entityId:e,excluded:t},bubbles:!0,composed:!0}))}_onIdleActionChange(e,t){let n=this.devices.map(n=>{if(n.entity_id!==e)return n;let r={...n,idle_action:t};return t===`fan_only`&&!n.idle_fan_mode&&(r.idle_fan_mode=`low`),r});this._fireDeviceChanged(n)}_onIdleFanModeChange(e,t){let n=this.devices.map(n=>n.entity_id===e?{...n,idle_fan_mode:t}:n);this._fireDeviceChanged(n)}_onSetpointModeChange(e,t){let n=this.devices.map(n=>n.entity_id===e?{...n,setpoint_mode:t}:n);this._fireDeviceChanged(n)}_onHeatingSystemTypeChange(e){let t=I(e)??``,n=t===`standard`?``:t;this._showBoostHint=!0;let r=this.devices.map(e=>e.type===`trv`?{...e,heating_system_type:n}:e);this._fireDeviceChanged(r)}_fireDeviceChanged(e){this.dispatchEvent(new CustomEvent(`device-changed`,{detail:{devices:e},bubbles:!0,composed:!0}))}_onEntityPicked(e){let t=e.detail?.value,n=e.target;if(n.value=``,!t||!t.startsWith(`climate.`)||this.devices.some(e=>e.entity_id===t))return;let r=this._detectClimateType(t)===`thermostat`?`trv`:`ac`,i=[...this.devices,{entity_id:t,type:r,role:`auto`}];this._fireDeviceChanged(i)}};j([x({attribute:!1})],B.prototype,`hass`,void 0),j([x({attribute:!1})],B.prototype,`area`,void 0),j([x({attribute:!1})],B.prototype,`devices`,void 0),j([x({type:String})],B.prototype,`selectedTempSensor`,void 0),j([x({attribute:!1})],B.prototype,`valveProtectionExclude`,void 0),j([x({type:Boolean})],B.prototype,`valveProtectionEnabled`,void 0),j([x({type:Boolean})],B.prototype,`editing`,void 0),j([S()],B.prototype,`_systemTypeInfoExpanded`,void 0),j([S()],B.prototype,`_showBoostHint`,void 0),j([S()],B.prototype,`_selectedThermostats`,void 0),j([S()],B.prototype,`_selectedCoolingDevices`,void 0),j([S()],B.prototype,`_heatingSystemType`,void 0),j([S()],B.prototype,`_selectedForEdit`,void 0),B=j([b(`rs-device-section`)],B),y(),C(),M();var V=class extends v{constructor(...e){super(...e),this.temperatureSensor=``,this.humiditySensor=``,this.occupancySensors=new Set,this.windowSensors=new Set,this.windowOpenDelay=0,this.windowCloseDelay=0,this.heatingSystemType=``,this.editing=!1,this.language=`en`,this._pickerOpen=!1,this._collapsed={},this._globalEntityFilter=e=>{let t=e.entity_id;if(t.substring(t.indexOf(`.`)+1).startsWith(`roommind_`)||this.temperatureSensor===t||this.humiditySensor===t||this.occupancySensors.has(t)||this.windowSensors.has(t))return!1;if(t.startsWith(`sensor.`)){let e=this.hass.states[t]?.attributes?.device_class;return e===`temperature`||e===`humidity`}if(t.startsWith(`binary_sensor.`)){let e=this.hass.states[t]?.attributes?.device_class;return e===`occupancy`||e===`motion`||e===`presence`||e===`window`||e===`door`||e===`opening`}return t.startsWith(`climate.`)?this.hass.states[t]?.attributes?.current_temperature!=null:t.startsWith(`input_number.`)||t.startsWith(`input_boolean.`)},this._onGlobalPickerValueChanged=e=>{let t=e.detail?.value,n=e.target;if(n.value=``,t){if(t.startsWith(`binary_sensor.`)){let e=this.hass.states[t]?.attributes?.device_class;e===`window`||e===`door`||e===`opening`?this.windowSensors.has(t)||this._onWindowToggle(t,!0):this.occupancySensors.has(t)||this._onOccupancyToggle(t,!0)}else if(t.startsWith(`input_boolean.`))this.occupancySensors.has(t)||this._onOccupancyToggle(t,!0);else if(t.startsWith(`input_number.`)){let e=this.hass.states[t]?.attributes?.unit_of_measurement;this._onSensorSelected(t,e===`%`?`humidity`:`temp`)}else if(t.startsWith(`climate.`))this._onSensorSelected(t,`temp`);else{let e=this.hass.states[t]?.attributes?.device_class;this._onSensorSelected(t,e===`humidity`?`humidity`:`temp`)}this._pickerOpen=!1}},this._onWindowOpenDelayChange=e=>{let t=Math.max(0,parseInt(e.target.value)||0);this.dispatchEvent(new CustomEvent(`sensor-changed`,{detail:{key:`window_open_delay`,value:t},bubbles:!0,composed:!0}))},this._onWindowCloseDelayChange=e=>{let t=Math.max(0,parseInt(e.target.value)||0);this.dispatchEvent(new CustomEvent(`sensor-changed`,{detail:{key:`window_close_delay`,value:t},bubbles:!0,composed:!0}))}}static{this.styles=[R,l`
      :host {
        display: block;
      }

      .sensor-block {
        display: flex;
        flex-direction: column;
        gap: 6px;
        padding: 12px 14px;
        background: rgba(255, 255, 255, 0.02);
        border: 1px solid var(--divider-color, rgba(255, 255, 255, 0.08));
        border-radius: 12px;
      }

      .sensor-block + .sensor-block {
        margin-top: 12px;
      }

      .block-header {
        display: flex;
        align-items: center;
        gap: 8px;
        padding-bottom: 6px;
        cursor: pointer;
        user-select: none;
      }

      .block-header:hover .block-title {
        color: var(--primary-color);
      }

      .block-header ha-icon {
        --mdc-icon-size: 18px;
        color: var(--secondary-text-color);
      }

      .chevron {
        --mdc-icon-size: 18px;
        color: var(--secondary-text-color);
        transition: transform 0.2s ease;
      }

      .chevron.collapsed {
        transform: rotate(-90deg);
      }

      .block-body {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }

      .sensor-block.collapsed .block-header {
        padding-bottom: 0;
      }

      .block-title {
        font-size: 13px;
        font-weight: 500;
        color: var(--primary-text-color);
        letter-spacing: 0.2px;
        flex: 1;
      }

      .count-chip {
        font-size: 11px;
        font-weight: 500;
        padding: 1px 7px;
        border-radius: 10px;
        background: rgba(255, 255, 255, 0.06);
        color: var(--secondary-text-color);
      }

      .count-chip.has-selection {
        background: rgba(3, 169, 244, 0.15);
        color: var(--primary-color);
      }

      .row-list {
        display: flex;
        flex-direction: column;
        gap: 2px;
        max-height: 168px;
        overflow-y: auto;
        overflow-x: hidden;
        scrollbar-width: thin;
      }

      .row {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 6px 8px;
        border-radius: 8px;
        cursor: pointer;
        border-left: 2px solid transparent;
        transition:
          background 0.15s,
          border-color 0.15s;
        min-width: 0;
      }

      .row:hover {
        background: rgba(255, 255, 255, 0.03);
      }

      .row.selected {
        background: rgba(3, 169, 244, 0.08);
        border-left-color: var(--primary-color);
      }

      .row ha-checkbox,
      .row ha-radio {
        flex-shrink: 0;
        margin: -4px 0;
      }

      .row-info {
        flex: 1;
        min-width: 0;
        display: flex;
        flex-direction: column;
        gap: 1px;
      }

      .row-name-line {
        display: flex;
        align-items: center;
        gap: 6px;
        min-width: 0;
      }

      .row-name {
        font-size: 13px;
        font-weight: 450;
        color: var(--primary-text-color);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .row-eid {
        font-family: var(--code-font-family, monospace);
        font-size: 10.5px;
        color: var(--secondary-text-color);
        opacity: 0.65;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .external-badge {
        display: inline-flex;
        align-items: center;
        font-size: 9.5px;
        font-weight: 500;
        color: var(--warning-color, #ff9800);
        background: rgba(255, 152, 0, 0.1);
        padding: 1px 6px;
        border-radius: 8px;
        letter-spacing: 0.3px;
        text-transform: uppercase;
        flex-shrink: 0;
      }

      .value-chip {
        flex-shrink: 0;
        font-size: 12px;
        font-weight: 500;
        padding: 3px 9px;
        border-radius: 10px;
        background: rgba(255, 255, 255, 0.05);
        color: var(--primary-text-color);
        font-variant-numeric: tabular-nums;
      }

      .row.selected .value-chip {
        background: rgba(3, 169, 244, 0.15);
        color: var(--primary-color);
      }

      .occupancy-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        flex-shrink: 0;
        transition: background 0.2s;
      }

      .occupancy-dot.on {
        background: var(--success-color, #4caf50);
        box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.18);
      }

      .occupancy-dot.off {
        background: rgba(255, 255, 255, 0.2);
      }

      .window-dot.on {
        background: var(--warning-color, #ff9800);
        box-shadow: 0 0 0 3px rgba(255, 152, 0, 0.18);
      }

      .window-dot.off {
        background: rgba(255, 255, 255, 0.2);
      }

      .delay-fields {
        display: flex;
        gap: 8px;
        margin-top: 8px;
      }

      .delay-fields ha-textfield {
        flex: 1;
      }

      .delay-hint {
        display: flex;
        align-items: flex-start;
        gap: 6px;
        font-size: 11.5px;
        line-height: 1.5;
        color: var(--warning-color, #ff9800);
        margin-top: 6px;
      }

      .delay-hint ha-icon {
        --mdc-icon-size: 16px;
        flex-shrink: 0;
        margin-top: 1px;
      }

      .delay-view {
        font-size: 12px;
        color: var(--secondary-text-color);
        padding-top: 4px;
      }

      .empty-row {
        color: var(--secondary-text-color);
        font-size: 12.5px;
        font-style: italic;
        padding: 6px 4px;
        opacity: 0.7;
      }

      .add-row,
      .global-add {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .global-add {
        margin-top: 12px;
      }

      .add-row ha-entity-picker,
      .global-add ha-entity-picker {
        flex: 1;
      }

      .add-button {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 6px 10px;
        margin: 12px 0 0 0;
        background: none;
        border: none;
        cursor: pointer;
        color: var(--secondary-text-color);
        font-size: 12px;
        font-weight: 500;
        border-radius: 6px;
        transition:
          color 0.15s,
          background 0.15s;
      }

      .add-button:hover,
      .add-button:focus-visible {
        color: var(--primary-color);
        background: rgba(3, 169, 244, 0.08);
        outline: none;
      }

      .add-button ha-icon {
        --mdc-icon-size: 16px;
      }

      .picker-close {
        --mdc-icon-button-size: 32px;
        --mdc-icon-size: 18px;
        color: var(--secondary-text-color);
        flex-shrink: 0;
      }

      /* View mode rows */
      .view-row {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 6px 0;
        font-size: 14px;
        color: var(--primary-text-color);
      }

      .view-name {
        flex: 1;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .entity-link {
        cursor: pointer;
      }

      .entity-link:hover {
        text-decoration: underline;
      }

      .view-value {
        font-weight: 500;
        flex-shrink: 0;
      }

      .section-subtitle {
        font-size: 12px;
        font-weight: 500;
        color: var(--secondary-text-color);
        margin: 12px 0 4px 0;
        text-transform: uppercase;
        letter-spacing: 0.4px;
      }

      .section-subtitle:first-child {
        margin-top: 0;
      }
    `]}render(){return this.editing?this._renderEditMode():this._renderViewMode()}_renderViewMode(){let e=!!this.temperatureSensor,t=!!this.humiditySensor,n=this.occupancySensors.size>0,r=this.windowSensors.size>0;if(!e&&!t&&!n&&!r)return _;let i=this.hass.language;return g`
      ${e?g`
            <div class="section-subtitle">${w(`devices.temp_sensors`,i)}</div>
            ${this._renderSensorViewRow(this.temperatureSensor,`temp`)}
          `:_}
      ${t?g`
            <div class="section-subtitle">${w(`devices.humidity_sensors`,i)}</div>
            ${this._renderSensorViewRow(this.humiditySensor,`humidity`)}
          `:_}
      ${n?g`
            <div class="section-subtitle">${w(`devices.occupancy_sensors`,i)}</div>
            ${[...this.occupancySensors].map(e=>this._renderOccupancyViewRow(e))}
          `:_}
      ${r?g`
            <div class="section-subtitle">${w(`devices.window_sensors`,i)}</div>
            ${[...this.windowSensors].map(e=>this._renderWindowViewRow(e))}
            ${this.windowOpenDelay||this.windowCloseDelay?g`<div class="delay-view">
                  ${this.windowOpenDelay?g`${w(`devices.window_open_delay`,i)}: ${this.windowOpenDelay}s`:_}
                  ${this.windowOpenDelay&&this.windowCloseDelay?` · `:_}
                  ${this.windowCloseDelay?g`${w(`devices.window_close_delay`,i)}:
                      ${this.windowCloseDelay}s`:_}
                </div>`:_}
          `:_}
    `}_renderWindowViewRow(e){let t=this.hass.states[e];return g`
      <div class="view-row">
        <span class="view-name entity-link" @click=${()=>Pt(this,e)}
          >${t?.attributes?.friendly_name||e}</span
        >
        <span class="occupancy-dot window-dot ${t?.state===`on`?`on`:`off`}"></span>
      </div>
    `}_renderSensorViewRow(e,t){let n=this.hass.states[e],r=n?.attributes?.friendly_name||e,i=n?.state,a=n?.attributes??{},o=``;if(t===`temp`){let t=e.startsWith(`climate.`)?a.current_temperature:i;t!=null&&t!==``&&t!==`unknown`&&t!==`unavailable`&&(o=`${Number(t).toFixed(1)}${T(this.hass)}`)}else i&&i!==`unknown`&&i!==`unavailable`&&(o=`${Math.round(Number(i))}%`);return g`
      <div class="view-row">
        <span class="view-name entity-link" @click=${()=>Pt(this,e)}
          >${r}</span
        >
        ${o?g`<span class="view-value">${o}</span>`:_}
      </div>
    `}_renderOccupancyViewRow(e){let t=this.hass.states[e];return g`
      <div class="view-row">
        <span class="view-name entity-link" @click=${()=>Pt(this,e)}
          >${t?.attributes?.friendly_name||e}</span
        >
        <span class="occupancy-dot ${t?.state===`on`?`on`:`off`}"></span>
      </div>
    `}_renderEditMode(){let e=vt(this.area.area_id,this.hass?.entities,this.hass?.devices).filter(e=>!e.entity_id.substring(e.entity_id.indexOf(`.`)+1).startsWith(`roommind_`)),t=this.hass?.states?e.filter(e=>e.entity_id.startsWith(`sensor.`)&&this.hass.states[e.entity_id]?.attributes?.device_class===`temperature`||e.entity_id.startsWith(`climate.`)&&this.hass.states[e.entity_id]?.attributes?.current_temperature!=null):[],n=this.hass?.states?e.filter(e=>e.entity_id.startsWith(`sensor.`)&&this.hass.states[e.entity_id]?.attributes?.device_class===`humidity`):[],r=this.hass?.states?e.filter(e=>e.entity_id.startsWith(`binary_sensor.`)&&[`occupancy`,`motion`,`presence`].includes(this.hass.states[e.entity_id]?.attributes?.device_class)||e.entity_id.startsWith(`input_boolean.`)):[],i=new Set(t.map(e=>e.entity_id)),a=this.temperatureSensor&&!i.has(this.temperatureSensor)?this.temperatureSensor:null,o=new Set(n.map(e=>e.entity_id)),s=this.humiditySensor&&!o.has(this.humiditySensor)?this.humiditySensor:null,c=new Set(r.map(e=>e.entity_id)),l=[...this.occupancySensors].filter(e=>!c.has(e)),u=this.hass?.states?e.filter(e=>e.entity_id.startsWith(`binary_sensor.`)&&[`window`,`door`,`opening`].includes(this.hass.states[e.entity_id]?.attributes?.device_class)):[],d=new Set(u.map(e=>e.entity_id)),f=[...this.windowSensors].filter(e=>!d.has(e)),p=this.hass.language;return g`
      ${this._renderBlock({kind:`temp`,icon:`mdi:thermometer`,title:w(`devices.temp_sensors`,p),emptyText:w(`devices.no_temp_sensors`,p),areaSensors:t,externalSensors:a?[a]:[],selectedCount:+!!this.temperatureSensor})}
      ${this._renderBlock({kind:`humidity`,icon:`mdi:water-percent`,title:w(`devices.humidity_sensors`,p),emptyText:w(`devices.no_humidity_sensors`,p),areaSensors:n,externalSensors:s?[s]:[],selectedCount:+!!this.humiditySensor})}
      ${this._renderBlock({kind:`occupancy`,icon:`mdi:account-eye`,title:w(`devices.occupancy_sensors`,p),emptyText:w(`devices.no_occupancy_sensors`,p),areaSensors:r,externalSensors:l,selectedCount:this.occupancySensors.size})}
      ${this._renderBlock({kind:`window`,icon:`mdi:window-open-variant`,title:w(`devices.window_sensors`,p),emptyText:w(`devices.no_window_sensors`,p),areaSensors:u,externalSensors:f,selectedCount:this.windowSensors.size,extras:this._renderWindowExtras(p)})}
      ${this._renderGlobalAdd(p)}
    `}_renderWindowExtras(e){return this.windowSensors.size===0?_:g`
      <div class="delay-fields">
        <ha-textfield
          type="number"
          min="0"
          suffix="s"
          .label=${w(`devices.window_open_delay`,e)}
          .value=${String(this.windowOpenDelay)}
          @change=${this._onWindowOpenDelayChange}
        ></ha-textfield>
        <ha-textfield
          type="number"
          min="0"
          suffix="s"
          .label=${w(`devices.window_close_delay`,e)}
          .value=${String(this.windowCloseDelay)}
          @change=${this._onWindowCloseDelayChange}
        ></ha-textfield>
      </div>
      ${this.heatingSystemType===`underfloor`&&this.windowOpenDelay<300?g`
            <div class="delay-hint">
              <ha-icon icon="mdi:information-outline"></ha-icon>
              ${w(`devices.underfloor_delay_hint`,e)}
            </div>
          `:_}
    `}_renderGlobalAdd(e){return this._pickerOpen?g`
        <div class="global-add">
          <ha-entity-picker
            .hass=${this.hass}
            .includeDomains=${[`sensor`,`binary_sensor`,`climate`,`input_number`,`input_boolean`]}
            .entityFilter=${this._globalEntityFilter}
            .value=${``}
            .autofocus=${!0}
            label=${w(`devices.add_entity`,e)}
            @value-changed=${this._onGlobalPickerValueChanged}
          ></ha-entity-picker>
          <ha-icon-button
            class="picker-close"
            .path=${`M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z`}
            @click=${()=>this._pickerOpen=!1}
          ></ha-icon-button>
        </div>
      `:g`
      <button type="button" class="add-button global" @click=${()=>this._pickerOpen=!0}>
        <ha-icon icon="mdi:plus"></ha-icon>
        ${w(`devices.add_entity`,e)}
      </button>
    `}_renderBlock(e){this.hass.language;let t=e.areaSensors.length+e.externalSensors.length,n=this._collapsed[e.kind]??!0;return g`
      <div class="sensor-block ${n?`collapsed`:``}">
        <div class="block-header" @click=${()=>this._toggleBlock(e.kind)}>
          <ha-icon icon=${e.icon}></ha-icon>
          <div class="block-title">${e.title}</div>
          ${e.selectedCount>0?g`<span class="count-chip has-selection">${e.selectedCount}</span>`:t>0?g`<span class="count-chip">${t}</span>`:_}
          <ha-icon
            class="chevron ${n?`collapsed`:``}"
            icon="mdi:chevron-down"
          ></ha-icon>
        </div>
        ${n?_:g`
              <div class="block-body">
                <div class="row-list">
                  ${e.areaSensors.length>0||e.externalSensors.length>0?g`
                        ${e.areaSensors.map(t=>this._renderEditRow(t.entity_id,e.kind,!1))}
                        ${e.externalSensors.map(t=>this._renderEditRow(t,e.kind,!0))}
                      `:g`<div class="empty-row">${e.emptyText}</div>`}
                </div>
                ${e.extras??_}
              </div>
            `}
      </div>
    `}_toggleBlock(e){let t=this._collapsed[e]??!0;this._collapsed={...this._collapsed,[e]:!t}}_renderEditRow(e,t,n){let r=this.hass.states[e],i=r?.attributes?.friendly_name||e,a=this.hass.language;if(t===`occupancy`||t===`window`){let o=(t===`occupancy`?this.occupancySensors:this.windowSensors).has(e),s=r?.state===`on`,c=t===`window`?`occupancy-dot window-dot`:`occupancy-dot`,l=n=>t===`occupancy`?this._onOccupancyToggle(e,n):this._onWindowToggle(e,n);return g`
        <div
          class="row ${o?`selected`:``}"
          @click=${e=>{e.target.tagName!==`HA-CHECKBOX`&&l(!o)}}
        >
          <ha-checkbox
            .checked=${o}
            @change=${e=>{let t=e.target;l(t.checked)}}
          ></ha-checkbox>
          <div class="row-info">
            <div class="row-name-line">
              <span class="row-name">${i}</span>
              ${n?g`<span class="external-badge">${w(`devices.other_area`,a)}</span>`:_}
            </div>
            <div class="row-eid">${e}</div>
          </div>
          <span class="${c} ${s?`on`:`off`}"></span>
        </div>
      `}let o=(t===`temp`?this.temperatureSensor:this.humiditySensor)===e,s=t===`temp`?T(this.hass):`%`,c=e.startsWith(`climate.`)?r?.attributes?.current_temperature:r?.state,l=c&&c!==`unknown`&&c!==`unavailable`?`${t===`humidity`?Math.round(Number(c)):Number(c).toFixed(1)}${s}`:``;return g`
      <div
        class="row ${o?`selected`:``}"
        @click=${()=>this._onSensorSelected(o?``:e,t)}
      >
        <ha-radio .checked=${o} name="${t}-sensor"></ha-radio>
        <div class="row-info">
          <div class="row-name-line">
            <span class="row-name">${i}</span>
            ${n?g`<span class="external-badge">${w(`devices.other_area`,a)}</span>`:_}
          </div>
          <div class="row-eid">${e}</div>
        </div>
        ${l?g`<span class="value-chip">${l}</span>`:_}
      </div>
    `}_onSensorSelected(e,t){let n=t===`temp`?`temperature_sensor`:`humidity_sensor`;this.dispatchEvent(new CustomEvent(`sensor-changed`,{detail:{key:n,value:e},bubbles:!0,composed:!0}))}_onOccupancyToggle(e,t){let n=new Set(this.occupancySensors);t?n.add(e):n.delete(e),this.dispatchEvent(new CustomEvent(`sensor-changed`,{detail:{key:`occupancy_sensors`,value:[...n]},bubbles:!0,composed:!0}))}_onWindowToggle(e,t){let n=new Set(this.windowSensors);t?n.add(e):n.delete(e),this.dispatchEvent(new CustomEvent(`sensor-changed`,{detail:{key:`window_sensors`,value:[...n]},bubbles:!0,composed:!0}))}};j([x({attribute:!1})],V.prototype,`hass`,void 0),j([x({attribute:!1})],V.prototype,`area`,void 0),j([x({type:String})],V.prototype,`temperatureSensor`,void 0),j([x({type:String})],V.prototype,`humiditySensor`,void 0),j([x({attribute:!1})],V.prototype,`occupancySensors`,void 0),j([x({attribute:!1})],V.prototype,`windowSensors`,void 0),j([x({type:Number})],V.prototype,`windowOpenDelay`,void 0),j([x({type:Number})],V.prototype,`windowCloseDelay`,void 0),j([x({type:String})],V.prototype,`heatingSystemType`,void 0),j([x({type:Boolean})],V.prototype,`editing`,void 0),j([x()],V.prototype,`language`,void 0),j([S()],V.prototype,`_pickerOpen`,void 0),j([S()],V.prototype,`_collapsed`,void 0),V=j([b(`rs-sensor-section`)],V),y(),C(),M();var Bt=class extends v{constructor(...e){super(...e),this.label=``,this.hint=``}static{this.styles=l`
    :host {
      display: inline-block;
    }

    .badge {
      font-size: 10px;
      font-weight: 600;
      color: var(--primary-color);
      background: color-mix(in srgb, var(--primary-color) 12%, transparent);
      padding: 2px 6px;
      border-radius: 4px;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      cursor: default;
    }
  `}render(){return g`<span class="badge" title=${this.hint}>${this.label}</span>`}};j([x({type:String})],Bt.prototype,`label`,void 0),j([x({type:String})],Bt.prototype,`hint`,void 0),Bt=j([b(`rs-badge`)],Bt),y(),C(),M();var Vt=`M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z`,Ht=class extends v{constructor(...e){super(...e),this.icon=``,this.heading=``,this.badge=``,this.badgeHint=``,this.editable=!1}static{this.styles=l`
    :host {
      display: block;
    }

    ha-card {
      overflow: hidden;
      min-width: 0;
    }

    .section-header {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 16px 20px 12px;
    }

    .section-icon {
      --mdc-icon-size: 18px;
      opacity: 0.7;
    }

    .section-title {
      font-size: 15px;
      font-weight: 500;
      color: var(--primary-text-color);
      margin: 0;
      flex: 1;
    }

    .edit-btn {
      --mdc-icon-button-size: 32px;
      --mdc-icon-size: 18px;
      color: var(--secondary-text-color);
      margin: -4px -8px -4px 0;
      transition: opacity 0.15s ease;
    }

    @media (hover: hover) {
      .edit-btn {
        opacity: 0;
      }

      ha-card:hover .edit-btn,
      ha-card:focus-within .edit-btn {
        opacity: 1;
      }
    }

    .section-body {
      padding: 0 20px 20px;
    }
  `}render(){return g`
      <ha-card>
        <div class="section-header">
          <ha-icon class="section-icon" icon=${this.icon}></ha-icon>
          <h3 class="section-title">${this.heading}</h3>
          ${this.badge?g`<rs-badge .label=${this.badge} .hint=${this.badgeHint}></rs-badge>`:_}
          <slot name="header-extras"></slot>
          ${this.editable?g`
                <ha-icon-button
                  class="edit-btn"
                  .path=${Vt}
                  @click=${this._onEditClick}
                ></ha-icon-button>
              `:_}
        </div>
        <div class="section-body">
          <slot></slot>
        </div>
      </ha-card>
    `}_onEditClick(){this.dispatchEvent(new CustomEvent(`edit-click`,{bubbles:!0,composed:!0}))}};j([x({type:String})],Ht.prototype,`icon`,void 0),j([x({type:String})],Ht.prototype,`heading`,void 0),j([x({type:String})],Ht.prototype,`badge`,void 0),j([x({type:String})],Ht.prototype,`badgeHint`,void 0),j([x({type:Boolean})],Ht.prototype,`editable`,void 0),Ht=j([b(`rs-section-card`)],Ht),y(),C(),M();var H=class extends v{constructor(...e){super(...e),this.climateMode=`auto`,this.comfortHeat=21,this.comfortCool=24,this.ecoHeat=17,this.ecoCool=27,this.language=`en`,this._overridePending=null,this._overrideCustomTemp=21,this._overrideError=``,this._optimisticOverride=null,this._optimisticClear=!1}static{this.styles=[R,l`
      :host {
        display: block;
      }

      .override-divider {
        border: none;
        border-top: 1px solid var(--divider-color, #e0e0e0);
        margin: 16px 0 12px;
      }

      .override-label {
        font-size: 13px;
        font-weight: 500;
        color: var(--secondary-text-color);
        margin-bottom: 10px;
      }

      .override-presets {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }

      .override-preset {
        cursor: pointer;
        border: 1px solid var(--divider-color, #e0e0e0);
        border-radius: 8px;
        padding: 6px 12px;
        font-size: 13px;
        background: transparent;
        color: var(--primary-text-color);
        display: flex;
        align-items: center;
        gap: 6px;
        transition:
          background 0.15s,
          border-color 0.15s;
      }

      .override-preset:hover {
        background: rgba(0, 0, 0, 0.04);
      }

      .override-preset.pending {
        border-color: var(--primary-color);
        background: rgba(var(--rgb-primary-color, 33, 150, 243), 0.08);
      }

      .override-preset.active.boost {
        border-color: var(--warning-color, #ff9800);
        background: rgba(255, 152, 0, 0.15);
        color: var(--warning-color, #ff9800);
      }

      .override-preset.active.eco {
        border-color: #4caf50;
        background: rgba(76, 175, 80, 0.15);
        color: #4caf50;
      }

      .override-preset.active.custom {
        border-color: #2196f3;
        background: rgba(33, 150, 243, 0.15);
        color: #2196f3;
      }

      .override-preset:disabled {
        opacity: 0.35;
        cursor: default;
      }

      .override-preset:disabled:hover {
        background: transparent;
      }

      .override-preset ha-icon {
        --mdc-icon-size: 16px;
      }

      .override-target {
        display: block;
        width: 160px;
        margin-top: 12px;
      }

      .override-duration {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 12px;
        align-items: center;
      }

      .override-duration-label {
        font-size: 13px;
        font-weight: 500;
        color: var(--secondary-text-color);
      }

      .override-dur-chips {
        display: flex;
        gap: 6px;
      }

      .override-dur-chip {
        cursor: pointer;
        border: 1px solid var(--divider-color);
        border-radius: 8px;
        padding: 6px 14px;
        font-size: 13px;
        font-weight: 500;
        background: var(--card-background-color);
        color: var(--primary-text-color);
        transition:
          border-color 0.15s ease,
          background 0.15s ease;
      }

      .override-dur-chip:hover {
        background: rgba(255, 255, 255, 0.04);
        border-color: rgba(3, 169, 244, 0.4);
      }

      .override-dur-chip:disabled {
        opacity: 0.5;
        pointer-events: none;
      }

      .override-error {
        color: var(--error-color, #d32f2f);
        font-size: 12px;
        margin-top: 6px;
      }
    `]}updated(e){if(e.has(`config`)&&this.config?.live){let e=this.config.live;this._optimisticOverride&&e.override_active&&(this._optimisticOverride=null),this._optimisticClear&&!e.override_active&&(this._optimisticClear=!1)}}getEffectiveOverride(){if(this._optimisticClear)return{active:!1,type:null,temp:null,until:null};if(this._optimisticOverride)return{active:!0,type:this._optimisticOverride.type,temp:this._optimisticOverride.temp,until:this._optimisticOverride.until};let e=this.config?.live;return e?.override_active&&e.override_type?{active:!0,type:e.override_type,temp:e.override_temp,until:e.override_until}:{active:!1,type:null,temp:null,until:null}}render(){let e=this.getEffectiveOverride();return g`
      <hr class="override-divider" />
      <div class="override-label">${w(`override.label`,this.language)}</div>
      ${this._renderOverrideButtons(e)}
      ${this._overrideError?g`<div class="override-error">${this._overrideError}</div>`:_}
    `}_renderOverrideButtons(e){let t=e.active?e.type:null,n=!t&&this._overridePending;return g`
      <div class="override-presets">
        ${[`boost`,`eco`,`custom`].map(e=>{let n=t===e,r=t!==null&&!n,i=!t&&this._overridePending===e;return g`
            <button
              class="override-preset ${e} ${n?`active`:``} ${i?`pending`:``}"
              ?disabled=${r}
              @click=${()=>n?this._onClearOverride():this._onOverridePreset(e)}
            >
              <ha-icon
                icon=${e===`boost`?`mdi:fire`:e===`eco`?`mdi:leaf`:`mdi:thermometer`}
              ></ha-icon>
              ${w(e===`boost`?`override.comfort`:e===`eco`?`override.eco`:`override.custom`,this.language)}
            </button>
          `})}
      </div>
      ${n?g`
            ${this._overridePending===`custom`?g`
                  <ha-textfield
                    class="override-target"
                    type="number"
                    .label=${w(`override.target`,this.language)}
                    .suffix=${T(this.hass)}
                    min=${A(5,35,this.hass).min}
                    max=${A(5,35,this.hass).max}
                    step=${k(this.hass)}
                    .value=${String(E(this._overrideCustomTemp,this.hass))}
                    @input=${this._onOverrideCustomTempInput}
                  ></ha-textfield>
                `:_}
            <div class="override-duration">
              <span class="override-duration-label"
                >${w(`override.activate_for`,this.language)}</span
              >
              <div class="override-dur-chips">
                ${[{label:`1h`,hours:1},{label:`2h`,hours:2},{label:`4h`,hours:4}].map(e=>g`
                    <button
                      class="override-dur-chip"
                      @click=${()=>this._onOverrideActivate(e.hours)}
                    >
                      ${e.label}
                    </button>
                  `)}
              </div>
            </div>
          `:_}
    `}_onOverridePreset(e){this._overridePending===e?this._overridePending=null:(this._overridePending=e,e===`custom`&&(this._overrideCustomTemp=this.climateMode===`cool_only`?this.comfortCool:this.comfortHeat)),this._overrideError=``}_onOverrideCustomTempInput(e){this._overrideCustomTemp=Tt(Number(e.target.value)||E(21,this.hass),this.hass)}async _onOverrideActivate(e){if(!this._overridePending||!this.config)return;let t=this._overridePending,n;n=t===`boost`?this.climateMode===`cool_only`?this.comfortCool:this.comfortHeat:t===`eco`?this.climateMode===`cool_only`?this.ecoCool:this.ecoHeat:this._overrideCustomTemp,this._optimisticOverride={type:t,temp:n,until:Date.now()/1e3+e*3600},this._optimisticClear=!1,this._overridePending=null,this._overrideError=``;let r={type:`roommind/override/set`,area_id:this.config.area_id,override_type:t,duration:e};t===`custom`&&(r.temperature=n);try{await this.hass.callWS(r),this._fireRoomUpdated()}catch(e){this._optimisticOverride=null,this._overrideError=e instanceof Error?e.message:w(`override.error_set`,this.language),console.error(`Override set failed:`,e)}}async _onClearOverride(){if(this.config){this._optimisticClear=!0,this._optimisticOverride=null,this._overrideError=``;try{await this.hass.callWS({type:`roommind/override/clear`,area_id:this.config.area_id}),this._fireRoomUpdated()}catch(e){this._optimisticClear=!1,this._overrideError=e instanceof Error?e.message:w(`override.error_clear`,this.language),console.error(`Override clear failed:`,e)}}}_fireRoomUpdated(){this.dispatchEvent(new CustomEvent(`room-updated`,{bubbles:!0,composed:!0}))}};j([x({attribute:!1})],H.prototype,`hass`,void 0),j([x({attribute:!1})],H.prototype,`config`,void 0),j([x()],H.prototype,`climateMode`,void 0),j([x({type:Number})],H.prototype,`comfortHeat`,void 0),j([x({type:Number})],H.prototype,`comfortCool`,void 0),j([x({type:Number})],H.prototype,`ecoHeat`,void 0),j([x({type:Number})],H.prototype,`ecoCool`,void 0),j([x()],H.prototype,`language`,void 0),j([S()],H.prototype,`_overridePending`,void 0),j([S()],H.prototype,`_overrideCustomTemp`,void 0),j([S()],H.prototype,`_overrideError`,void 0),j([S()],H.prototype,`_optimisticOverride`,void 0),j([S()],H.prototype,`_optimisticClear`,void 0),H=j([b(`rs-override-section`)],H),y(),C(),M();var Ut=class extends v{constructor(...e){super(...e),this.label=``,this.hint=``,this.checked=!1,this.disabled=!1}static{this.styles=l`
    :host {
      display: block;
    }

    .toggle-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 16px;
    }

    .toggle-text {
      display: flex;
      align-items: center;
      gap: 4px;
      min-width: 0;
    }

    .toggle-label {
      font-weight: 500;
    }

    ha-switch {
      flex-shrink: 0;
    }
  `}render(){return g`
      <div class="toggle-row">
        <div class="toggle-text">
          <span class="toggle-label">${this.label}</span>
          ${this.hint?g`<rs-info-icon .text=${this.hint}></rs-info-icon>`:_}
        </div>
        <ha-switch
          .checked=${this.checked}
          .disabled=${this.disabled}
          @change=${this._onToggle}
        ></ha-switch>
      </div>
    `}_onToggle(e){this.dispatchEvent(new CustomEvent(`toggle-changed`,{detail:e.target.checked,bubbles:!0,composed:!0}))}};j([x({type:String})],Ut.prototype,`label`,void 0),j([x({type:String})],Ut.prototype,`hint`,void 0),j([x({type:Boolean})],Ut.prototype,`checked`,void 0),j([x({type:Boolean})],Ut.prototype,`disabled`,void 0),Ut=j([b(`rs-toggle-row`)],Ut),y(),C(),M();var U=class extends v{constructor(...e){super(...e),this.presenceEnabled=!1,this.presencePersons=[],this.selectedPresencePersons=[],this.ignorePresence=!1,this.editing=!1,this.language=`en`}static{this.styles=l`
    :host {
      display: block;
    }

    .presence-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 8px;
      margin-top: 12px;
    }

    .presence-card {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 12px 8px 6px;
      border: 1px solid var(--divider-color);
      border-radius: 10px;
      background: var(--card-background-color);
      cursor: pointer;
      transition:
        border-color 0.15s ease,
        background 0.15s ease;
      user-select: none;
    }

    .presence-card:hover {
      background: rgba(255, 255, 255, 0.03);
    }

    .presence-card.active {
      border-color: rgba(3, 169, 244, 0.4);
      background: rgba(3, 169, 244, 0.08);
    }

    .presence-card ha-checkbox {
      flex-shrink: 0;
    }

    .person-icon {
      --mdc-icon-size: 18px;
      color: var(--secondary-text-color);
      flex-shrink: 0;
    }

    .presence-card.active .person-icon {
      color: var(--primary-color);
    }

    .person-name {
      flex: 1;
      font-size: 14px;
      font-weight: 450;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .presence-list {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .presence-row {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 14px;
      border-radius: 8px;
      transition: background 0.3s;
    }

    .presence-row.home {
      background: rgba(76, 175, 80, 0.1);
    }

    .presence-row.away {
      background: rgba(0, 0, 0, 0.04);
    }

    .presence-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      flex-shrink: 0;
    }

    .presence-row.home .presence-dot {
      background: #4caf50;
      box-shadow: 0 0 6px rgba(76, 175, 80, 0.5);
    }

    .presence-row.away .presence-dot {
      background: var(--disabled-text-color, #bdbdbd);
    }

    .presence-name {
      flex: 1;
      font-size: 14px;
      font-weight: 500;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .presence-row.home .presence-name {
      color: var(--primary-text-color);
    }

    .presence-row.away .presence-name {
      color: var(--secondary-text-color);
    }

    .presence-state {
      font-size: 12px;
      white-space: nowrap;
    }

    .presence-row.home .presence-state {
      color: #2e7d32;
    }

    .presence-row.away .presence-state {
      color: var(--secondary-text-color);
    }

    .section-divider {
      border-top: 1px solid var(--divider-color, #e0e0e0);
      margin: 8px 0;
    }

    .field-hint {
      color: var(--secondary-text-color);
      font-size: 12px;
    }
  `}render(){return!this.presenceEnabled||this.presencePersons.length===0?_:this.editing?g`
      <rs-toggle-row
        .label=${w(`presence.ignore_toggle`,this.language)}
        .checked=${this.ignorePresence}
        @toggle-changed=${this._onIgnoreToggle}
      ></rs-toggle-row>
      ${this.ignorePresence?_:g`<div class="section-divider"></div>
            ${this._renderEditMode()}`}
    `:this.ignorePresence?g`<span class="field-hint"
          >${w(`presence.tile_ignored`,this.language)}</span
        >`:this._renderViewMode()}_renderEditMode(){return g`
      <div class="presence-grid">
        ${this.presencePersons.map(e=>{let t=this.selectedPresencePersons.includes(e),n=this.hass.states[e]?.attributes?.friendly_name??e.split(`.`).slice(1).join(`.`);return g`
            <div
              class="presence-card ${t?`active`:``}"
              role="checkbox"
              tabindex="0"
              aria-checked=${t}
              @click=${()=>this._onTogglePerson(e,t)}
              @keydown=${n=>{(n.key===`Enter`||n.key===` `)&&(n.preventDefault(),this._onTogglePerson(e,t))}}
            >
              <ha-checkbox
                .checked=${t}
                tabindex="-1"
                @click=${e=>e.stopPropagation()}
                @change=${()=>this._onTogglePerson(e,t)}
              ></ha-checkbox>
              <ha-icon class="person-icon" icon="mdi:account"></ha-icon>
              <span class="person-name">${n}</span>
            </div>
          `})}
      </div>
    `}_renderViewMode(){return this.selectedPresencePersons.length===0?g`<span class="field-hint"
        >${w(`presence.room_none_assigned`,this.language)}</span
      >`:g`
      <div class="presence-list">
        ${this.selectedPresencePersons.map(e=>{let t=this.hass.states[e]?.attributes?.friendly_name??e.split(`.`).slice(1).join(`.`),n=this.hass.states[e]?.state,r=e.startsWith(`person.`)||e.startsWith(`device_tracker.`)?n===`home`:n===`on`;return g`
            <div class="presence-row ${r?`home`:`away`}">
              <span class="presence-dot"></span>
              <span class="presence-name">${t}</span>
              <span class="presence-state"
                >${w(r?`presence.state_home`:`presence.state_away`,this.language)}</span
              >
            </div>
          `})}
      </div>
    `}_onIgnoreToggle(e){this.dispatchEvent(new CustomEvent(`ignore-presence-changed`,{detail:e.detail,bubbles:!0,composed:!0}))}_onTogglePerson(e,t){let n;n=t?this.selectedPresencePersons.filter(t=>t!==e):[...this.selectedPresencePersons,e],this.dispatchEvent(new CustomEvent(`presence-persons-changed`,{detail:n,bubbles:!0,composed:!0}))}};j([x({attribute:!1})],U.prototype,`hass`,void 0),j([x({type:Boolean})],U.prototype,`presenceEnabled`,void 0),j([x({attribute:!1})],U.prototype,`presencePersons`,void 0),j([x({attribute:!1})],U.prototype,`selectedPresencePersons`,void 0),j([x({type:Boolean})],U.prototype,`ignorePresence`,void 0),j([x({type:Boolean})],U.prototype,`editing`,void 0),j([x()],U.prototype,`language`,void 0),U=j([b(`rs-presence-section`)],U),y(),C(),M();var W=class extends v{constructor(...e){super(...e),this.label=``,this.suffix=``,this.hint=``}static{this.styles=[R,l`
      :host {
        display: block;
      }

      .row {
        display: flex;
        align-items: center;
        gap: 6px;
      }

      ha-textfield {
        display: block;
        flex: 1;
        min-width: 0;
      }

      rs-info-icon {
        flex-shrink: 0;
      }
    `]}render(){return g`
      <div class="row">
        <ha-textfield
          .label=${this.label}
          .suffix=${this.suffix}
          .value=${this.value==null?``:String(this.value)}
          .min=${this.min==null?``:String(this.min)}
          .max=${this.max==null?``:String(this.max)}
          .step=${this.step==null?``:String(this.step)}
          type="number"
          @input=${this._onInput}
        ></ha-textfield>
        ${this.hint?g`<rs-info-icon .text=${this.hint}></rs-info-icon>`:_}
      </div>
    `}_onInput(e){let t=parseFloat(e.target.value);isNaN(t)||this.dispatchEvent(new CustomEvent(`value-changed`,{detail:t,bubbles:!0,composed:!0}))}};j([x({type:String})],W.prototype,`label`,void 0),j([x({type:String})],W.prototype,`suffix`,void 0),j([x({type:Number})],W.prototype,`value`,void 0),j([x({type:Number})],W.prototype,`min`,void 0),j([x({type:Number})],W.prototype,`max`,void 0),j([x({type:Number})],W.prototype,`step`,void 0),j([x({type:String})],W.prototype,`hint`,void 0),W=j([b(`rs-threshold-field`)],W),y(),C(),M();var Wt=class extends Ft{constructor(...e){super(...e),this.schedules=[]}static{this.styles=[Ft.sharedStyles,R,l`
      .pos-badge {
        font-size: 0.8em;
        padding: 1px 6px;
        border-radius: 10px;
        background: var(--primary-color);
        color: var(--text-primary-color);
        flex-shrink: 0;
      }
      .gate-badge {
        font-size: 0.8em;
        padding: 1px 6px;
        border-radius: 10px;
        background: var(--accent-color, var(--primary-color));
        color: var(--text-primary-color);
        opacity: 0.8;
        flex-shrink: 0;
      }
      .mode-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px;
        padding: 4px 0 0;
      }
      @media (max-width: 480px) {
        .mode-row {
          grid-template-columns: 1fr;
        }
      }
      .mode-option {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 6px 12px;
        font-size: 13px;
        cursor: pointer;
        color: var(--primary-text-color);
        border: 1px solid var(--divider-color);
        border-radius: 8px;
        background: var(--card-background-color);
        transition:
          border-color 0.15s ease,
          background 0.15s ease;
      }
      .mode-option.active {
        border-color: rgba(3, 169, 244, 0.4);
        background: rgba(3, 169, 244, 0.08);
      }
    `]}render(){return this.editing?this._renderEdit():this._renderView()}_renderView(){let e=this.hass.language;if(this.schedules.length===0)return _;let t=this.schedules.length>=2;return g`
      <div class="schedule-list">
        ${this.schedules.map((n,r)=>{let i=this._getScheduleState(r,this.schedules.length),a=n.mode===`gate`,o=a?null:this._getBlockPosition(n.entity_id);return g`
            <div class="schedule-row ${i}">
              ${t?g`<span class="schedule-number">${r+1}</span>`:_}
              <span class="schedule-status-dot"></span>
              <span
                class="schedule-name schedule-link"
                @click=${()=>this._openEntityInfo(n.entity_id)}
                >${this._getFriendlyName(n.entity_id)}</span
              >
              ${a?g`<span class="gate-badge"
                    >${w(`covers.schedule_mode_gate_short`,e)}</span
                  >`:o===null?_:g`<span class="pos-badge">${o}%</span>`}
              <span class="schedule-status">${this._statusText(i,e)}</span>
            </div>
          `})}
      </div>
    `}_renderEdit(){let e=this.hass.language,t=this.schedules.length,n=new Set(this.schedules.map(e=>e.entity_id));return g`
      ${t>0?g`
            <div class="schedule-list">
              ${this.schedules.map((n,r)=>{let i=this._getScheduleState(r,t);return g`
                  <div class="schedule-row ${i}">
                    ${t>=2?g`<span class="schedule-number">${r+1}</span>`:_}
                    <span class="schedule-status-dot"></span>
                    <span class="schedule-name">${this._getFriendlyName(n.entity_id)}</span>
                    <span class="schedule-status">${this._statusText(i,e)}</span>
                    ${this._renderScheduleControls(r,t,(e,t)=>this._moveSchedule(e,t),e=>this._removeSchedule(e))}
                  </div>
                  <div class="mode-row">
                    <div
                      class="mode-option ${(n.mode??`force`)===`force`?`active`:``}"
                      role="radio"
                      tabindex="0"
                      aria-checked=${(n.mode??`force`)===`force`}
                      @click=${()=>this._updateMode(r,`force`)}
                      @keydown=${e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this._updateMode(r,`force`))}}
                    >
                      <ha-radio
                        .checked=${(n.mode??`force`)===`force`}
                        tabindex="-1"
                      ></ha-radio>
                      ${w(`covers.schedule_mode_force`,e)}
                    </div>
                    <div
                      class="mode-option ${n.mode===`gate`?`active`:``}"
                      role="radio"
                      tabindex="0"
                      aria-checked=${n.mode===`gate`}
                      @click=${()=>this._updateMode(r,`gate`)}
                      @keydown=${e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this._updateMode(r,`gate`))}}
                    >
                      <ha-radio .checked=${n.mode===`gate`} tabindex="-1"></ha-radio>
                      ${w(`covers.schedule_mode_gate`,e)}
                    </div>
                  </div>
                `})}
            </div>
          `:_}
      ${this._renderAddRow(w(`covers.add_schedule`,e),this._getAvailableEntities(n),e=>this._addSchedule(e),w(`covers.schedule_create_link`,e))}
      ${this._renderSelectorSection(t,w(`covers.schedule_selector`,e),w(`covers.schedule_selector_hint`,e),w(`covers.schedule_selector_warning`,e),e=>this._emitSelectorChanged(e))}
    `}_getBlockPosition(e){let t=this.hass?.states?.[e];if(!t||t.state!==`on`)return null;let n=t.attributes?.position;return n==null?null:Number(n)}_statusText(e,t){return w(e===`active`?`covers.schedule_state_active`:e===`unreachable`?`covers.schedule_state_unreachable`:`covers.schedule_state_inactive`,t)}_addSchedule(e){this._emitSchedules([...this.schedules,{entity_id:e,mode:`force`}])}_removeSchedule(e){this._emitSchedules(this.schedules.filter((t,n)=>n!==e))}_moveSchedule(e,t){let n=e+t;if(n<0||n>=this.schedules.length)return;let r=[...this.schedules];[r[e],r[n]]=[r[n],r[e]],this._emitSchedules(r)}_updateMode(e,t){let n=this.schedules.map((n,r)=>r===e?{...n,mode:t}:n);this._emitSchedules(n)}_emitSchedules(e){this.dispatchEvent(new CustomEvent(`cover-schedules-changed`,{detail:{value:e},bubbles:!0,composed:!0}))}_emitSelectorChanged(e){this.dispatchEvent(new CustomEvent(`cover-schedule-selector-changed`,{detail:{value:e},bubbles:!0,composed:!0}))}};j([x({attribute:!1})],Wt.prototype,`schedules`,void 0),Wt=j([b(`rs-cover-schedule`)],Wt),y(),C(),M();var Gt,G=class extends v{static{Gt=this}constructor(...e){super(...e),this.selectedCovers=new Set,this.editing=!1,this.autoEnabled=!1,this.deployThreshold=1.5,this.minPosition=0,this.overrideMinutes=60,this.autoPaused=!1,this.coverSchedules=[],this.coverScheduleSelectorEntity=``,this.activeCoverScheduleIndex=-1,this.nightClose=!1,this.nightPosition=0,this.snapDeploy=!1,this.forcedReason=``,this.coverOrientations={},this.nightCloseElevation=0,this.nightCloseOffsetMinutes=0,this.outdoorMinTemp=10,this.coverMinPositions={},this._selectedForEdit=``,this._scheduleCollapsed=!0,this._solarCollapsed=!0,this._entityFilter=e=>{let t=e.entity_id;return t.startsWith(`cover.roommind_`)?!1:t.startsWith(`cover.`)&&!this.selectedCovers.has(t)}}willUpdate(e){e.has(`selectedCovers`)&&(this._selectedForEdit&&!this.selectedCovers.has(this._selectedForEdit)&&(this._selectedForEdit=``),!this._selectedForEdit&&this.selectedCovers.size>0&&(this._selectedForEdit=[...this.selectedCovers][0]))}static{this.styles=[Rt,R,l`
      :host {
        display: block;
      }

      /* Tile view rows (match rs-sensor-section visual rhythm) */
      .view-row {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 6px 0;
        font-size: 14px;
        color: var(--primary-text-color);
      }

      .view-name {
        flex: 1;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .view-pill {
        font-size: 10px;
        font-weight: 500;
        padding: 1px 7px;
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.05);
        color: var(--secondary-text-color);
        letter-spacing: 0.3px;
        text-transform: uppercase;
        flex-shrink: 0;
      }

      .view-value {
        font-weight: 500;
        flex-shrink: 0;
        color: var(--primary-text-color);
      }

      /* Device-row style (matches rs-device-section) */
      .device-list-scroll {
        max-height: 210px;
        overflow-y: auto;
      }
      .device-row {
        display: flex;
        align-items: center;
        padding: 4px 0;
        margin-bottom: 2px;
        border-radius: 8px;
        transition: background 0.15s;
      }
      .device-row:hover {
        background: rgba(0, 0, 0, 0.02);
      }
      .device-row.selected {
        background: rgba(3, 169, 244, 0.035);
      }
      .device-row ha-checkbox {
        flex-shrink: 0;
      }
      .device-info {
        flex: 1;
        min-width: 0;
      }
      .device-name-row {
        display: flex;
        align-items: center;
        gap: 6px;
      }
      .device-name {
        font-size: 14px;
        font-weight: 450;
      }
      .device-value {
        margin-left: auto;
        font-size: 13px;
        font-weight: 500;
        padding-right: 4px;
        white-space: nowrap;
      }
      .device-entity {
        font-family: var(--code-font-family, monospace);
        font-size: 11px;
        color: var(--secondary-text-color);
        opacity: 0.7;
      }
      .external-badge {
        display: inline-flex;
        align-items: center;
        font-size: 10px;
        font-weight: 500;
        color: var(--secondary-text-color);
        background: var(--divider-color, rgba(0, 0, 0, 0.06));
        padding: 1px 6px;
        border-radius: 4px;
        white-space: nowrap;
      }
      .no-devices {
        color: var(--secondary-text-color);
        font-size: 13px;
        padding: 8px 0;
      }

      .entity-picker-wrap {
        margin-top: 8px;
      }
      ha-entity-picker {
        width: 100%;
      }
      .settings-group {
        margin-top: 16px;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .sub-section {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .sub-section:first-child {
        margin-top: 8px;
      }
      .sub-section-header {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 13px;
        font-weight: 500;
        color: var(--secondary-text-color);
        text-transform: uppercase;
        letter-spacing: 0.3px;
        padding-bottom: 4px;
        border-bottom: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
      }
      .sub-section-header ha-icon {
        --mdc-icon-size: 18px;
      }
      .field-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
      }
      @media (max-width: 450px) {
        .field-row {
          grid-template-columns: 1fr;
        }
      }
      .no-items {
        color: var(--secondary-text-color);
        font-size: 0.9em;
        margin: 0;
      }
      .status-hint {
        display: flex;
        align-items: center;
        gap: 6px;
        color: var(--secondary-text-color);
        font-size: 0.85em;
      }
      .status-hint.paused {
        color: var(--warning-color, #ff9800);
      }
      .pill {
        font-size: 10px;
        font-weight: 500;
        padding: 1px 6px;
        border-radius: 10px;
        background: var(--divider-color, rgba(0, 0, 0, 0.08));
        color: var(--secondary-text-color);
        white-space: nowrap;
      }

      /* Editing layout — feature card + grouped sections */
      .feature-card {
        display: flex;
        align-items: center;
        gap: 14px;
        padding: 14px 16px;
        border: 1px solid var(--divider-color);
        border-radius: 12px;
        background: var(--card-background-color);
        transition:
          border-color 0.2s ease,
          background 0.2s ease;
      }

      .feature-card.enabled {
        border-color: rgba(3, 169, 244, 0.4);
        background: rgba(3, 169, 244, 0.06);
      }

      .feature-text {
        flex: 1;
        min-width: 0;
      }

      .feature-title {
        font-size: 14px;
        font-weight: 500;
        margin: 0 0 4px;
      }

      .feature-description {
        font-size: 12px;
        color: var(--secondary-text-color);
        line-height: 1.5;
        margin: 0;
      }

      .feature-card ha-switch {
        flex-shrink: 0;
      }

      .group-card {
        margin-top: 16px;
        border: 1px solid var(--divider-color);
        border-radius: 12px;
        background: var(--card-background-color);
        padding: 14px 16px;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      .group-header {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.4px;
        color: var(--secondary-text-color);
        cursor: pointer;
        user-select: none;
      }

      .group-header > span:first-of-type {
        flex: 1;
        min-width: 0;
      }

      .group-header ha-icon {
        --mdc-icon-size: 18px;
        color: var(--secondary-text-color);
      }

      .group-header .chevron {
        transition: transform 0.2s ease;
        margin-left: auto;
      }

      .group-header .chevron.collapsed {
        transform: rotate(-90deg);
      }

      .group-card.collapsed {
        gap: 0;
        padding-bottom: 14px;
      }

      .group-divider {
        height: 1px;
        background: var(--divider-color);
        margin: 4px -16px;
      }
    `]}render(){let e=this.hass.language;return this.editing?this._renderEdit(e):this._renderView(e)}_renderView(e){let t=[...this.selectedCovers];return t.length===0?g`<p class="no-items">${w(`covers.no_covers`,e)}</p>`:g`
      ${t.map(t=>{let n=this.hass.states[t],r=n?.attributes?.friendly_name??t,i=n?.attributes?.current_position,a=this.coverOrientations[t],o=a===void 0?void 0:Gt._DIRECTIONS.find(e=>e.deg===a),s=o?w(o.shortLabel,e):void 0,c=this.coverMinPositions[t];return g`
          <div class="view-row">
            <span class="view-name">${r}</span>
            ${s?g`<span class="view-pill">${s}</span>`:_}
            ${c!==void 0&&c>0?g`<span class="view-pill"
                  >${w(`covers.per_cover_min_short`,e)} ${c}%</span
                >`:_}
            ${i===void 0?_:g`<span class="view-value">${i}%</span>`}
          </div>
        `})}
      ${this.autoPaused?g`
            <div class="status-hint paused">
              <ha-icon icon="mdi:hand-back-right"></ha-icon>
              <span>${w(`covers.auto_paused`,e)}</span>
            </div>
          `:this.autoEnabled?g`
              <div class="status-hint">
                <ha-icon icon="mdi:sun-angle-outline"></ha-icon>
                <span>${w(`covers.shading_active`,e)}</span>
              </div>
            `:_}
      ${this.forcedReason===`schedule_active`?g`
            <div class="status-hint">
              <ha-icon icon="mdi:calendar-clock"></ha-icon>
              <span>${w(`covers.schedule_active`,e)}</span>
            </div>
          `:this.forcedReason===`night_close`?g`
              <div class="status-hint">
                <ha-icon icon="mdi:weather-night"></ha-icon>
                <span>${w(`covers.night_close_active`,e)}</span>
              </div>
            `:_}
    `}_renderMasterRow(e,t){let n=this.selectedCovers.has(e),r=this._selectedForEdit===e,i=this.hass.states[e],a=i?.attributes?.friendly_name||e,o=i?.attributes?.current_position,s=this.hass.language,c=this.coverOrientations[e],l=c===void 0?void 0:Gt._DIRECTIONS.find(e=>e.deg===c),u=l?w(l.shortLabel,s):``,d=this.coverMinPositions[e];return g`
      <div
        class="master-row ${r?`focused`:``}"
        @click=${()=>this._selectedForEdit=e}
      >
        <ha-checkbox
          .checked=${n}
          @click=${e=>e.stopPropagation()}
          @change=${t=>{let n=t.target;this._onToggle(e,n.checked),n.checked&&(this._selectedForEdit=e)}}
        ></ha-checkbox>
        <div class="master-info">
          <div class="master-name-row">
            <span class="master-name">${a}</span>
            ${t?g`<span class="external-badge">${w(`devices.other_area`,s)}</span>`:_}
          </div>
          <div class="master-meta">
            ${u?g`<span class="meta-pill">${u}</span>`:_}
            ${d!==void 0&&d>0?g`<span class="meta-pill">min ${d}%</span>`:_}
            ${o===void 0?_:g`<span class="meta-pill" style="color: var(--primary-color);">${o}%</span>`}
          </div>
        </div>
      </div>
    `}_renderCoverDetail(e){let t=this.hass.language,n=this.hass.states[e]?.attributes?.friendly_name||e,r=this.coverOrientations[e],i=this.coverMinPositions[e];return g`
      <div class="detail-head">
        <div class="detail-title">${n}</div>
        <div class="detail-entity-id">${e}</div>
      </div>
      <div class="detail-field">
        <ha-select
          .label=${w(`covers.orientation_group_title`,t)}
          .value=${r===void 0?``:String(r)}
          .options=${[{value:``,label:w(`covers.orientation_none`,t)},...Gt._DIRECTIONS.map(e=>({value:String(e.deg),label:w(e.longLabel,t)}))]}
          fixedMenuPosition
          @selected=${t=>{let n=I(t);this._setOrientation(e,n===``?void 0:Number(n))}}
          @closed=${e=>e.stopPropagation()}
        >
          <ha-list-item value="">${w(`covers.orientation_none`,t)}</ha-list-item>
          ${Gt._DIRECTIONS.map(e=>g`
              <ha-list-item value=${String(e.deg)}>${w(e.longLabel,t)}</ha-list-item>
            `)}
        </ha-select>
      </div>
      <div class="detail-field">
        <rs-threshold-field
          .label=${w(`covers.per_cover_min_position`,t)}
          .value=${i??0}
          .min=${0}
          .max=${99}
          .step=${1}
          suffix="%"
          @value-changed=${t=>this._setMinPosition(e,t.detail)}
        ></rs-threshold-field>
      </div>
    `}_renderEdit(e){let t=vt(this.area.area_id,this.hass?.entities,this.hass?.devices).filter(e=>!e.entity_id.substring(e.entity_id.indexOf(`.`)+1).startsWith(`roommind_`)).filter(e=>e.entity_id.startsWith(`cover.`)),n=new Set(t.map(e=>e.entity_id)),r=[...this.selectedCovers].filter(e=>!n.has(e)),i=this.selectedCovers.size>0,a=this._selectedForEdit,o=a&&this.selectedCovers.has(a);return g`
      <rs-master-detail>
        <div slot="master" class="master">
          <div class="block-title">${w(`covers.add_cover`,e)}</div>
          <div class="master-list">
            ${t.length>0?t.map(e=>this._renderMasterRow(e.entity_id,!1)):g`<div class="empty-list">${w(`covers.no_covers_in_area`,e)}</div>`}
            ${r.map(e=>this._renderMasterRow(e,!0))}
          </div>
          <div class="picker-wrap">
            <ha-entity-picker
              .hass=${this.hass}
              .includeDomains=${[`cover`]}
              .entityFilter=${this._entityFilter}
              .value=${``}
              .label=${w(`covers.add_cover`,e)}
              @value-changed=${this._onEntityPicked}
            ></ha-entity-picker>
          </div>
        </div>
        <div slot="detail">
          ${o?g`<div class="detail-panel">${this._renderCoverDetail(a)}</div>`:g`<div class="detail-panel">
                <div class="empty-detail">
                  <ha-icon icon="mdi:gesture-tap"></ha-icon>
                  <span>${w(`devices.select_to_configure`,e)}</span>
                </div>
              </div>`}
        </div>
      </rs-master-detail>

      ${i?g`
            <div class="block-divider"></div>
            <div class="feature-card ${this.autoEnabled?`enabled`:``}">
              <div class="feature-text">
                <div class="feature-title">${w(`covers.auto_control`,e)}</div>
                <div class="feature-description">${w(`covers.auto_control_hint`,e)}</div>
              </div>
              <ha-switch
                .checked=${this.autoEnabled}
                @change=${e=>this._emit(`covers_auto_enabled`,e.target.checked)}
              ></ha-switch>
            </div>

            ${this.autoEnabled?g`
                  <div class="group-card ${this._scheduleCollapsed?`collapsed`:``}">
                    <div
                      class="group-header"
                      @click=${()=>this._scheduleCollapsed=!this._scheduleCollapsed}
                    >
                      <ha-icon icon="mdi:calendar-clock"></ha-icon>
                      <span>${w(`covers.schedule_group_title`,e)}</span>
                      <rs-info-icon
                        .text=${w(`covers.schedule_section_hint`,e)}
                      ></rs-info-icon>
                      <ha-icon
                        class="chevron ${this._scheduleCollapsed?`collapsed`:``}"
                        icon="mdi:chevron-down"
                      ></ha-icon>
                    </div>
                    ${this._scheduleCollapsed?_:g`<rs-cover-schedule
                            .hass=${this.hass}
                            .schedules=${this.coverSchedules}
                            .selectorEntity=${this.coverScheduleSelectorEntity}
                            .activeIndex=${this.activeCoverScheduleIndex}
                            .editing=${!0}
                            @cover-schedules-changed=${e=>this._emit(`cover_schedules`,e.detail.value)}
                            @cover-schedule-selector-changed=${e=>this._emit(`cover_schedule_selector_entity`,e.detail.value)}
                          ></rs-cover-schedule>
                          <div class="group-divider"></div>
                          <rs-toggle-row
                            .label=${w(`covers.night_close`,e)}
                            .hint=${w(`covers.night_close_hint`,e)}
                            .checked=${this.nightClose}
                            @toggle-changed=${e=>this._emit(`covers_night_close`,e.detail)}
                          ></rs-toggle-row>
                          ${this.nightClose?g`
                                <rs-threshold-field
                                  .label=${w(`covers.night_position`,e)}
                                  .hint=${w(`covers.night_position_hint`,e)}
                                  .value=${this.nightPosition}
                                  .min=${0}
                                  .max=${100}
                                  .step=${5}
                                  suffix="%"
                                  @value-changed=${e=>this._emit(`covers_night_position`,e.detail)}
                                ></rs-threshold-field>
                                <ha-expansion-panel
                                  .header=${w(`covers.night_close_advanced`,e)}
                                  outlined
                                >
                                  <div class="field-row" style="padding:8px 0;">
                                    <rs-threshold-field
                                      .label=${w(`covers.night_close_elevation`,e)}
                                      .hint=${w(`covers.night_close_elevation_hint`,e)}
                                      .value=${this.nightCloseElevation}
                                      .min=${-18}
                                      .max=${10}
                                      .step=${1}
                                      suffix="°"
                                      @value-changed=${e=>this._emit(`covers_night_close_elevation`,e.detail)}
                                    ></rs-threshold-field>
                                    <rs-threshold-field
                                      .label=${w(`covers.night_close_offset`,e)}
                                      .hint=${w(`covers.night_close_offset_hint`,e)}
                                      .value=${this.nightCloseOffsetMinutes}
                                      .min=${-120}
                                      .max=${120}
                                      .step=${5}
                                      suffix="min"
                                      @value-changed=${e=>this._emit(`covers_night_close_offset_minutes`,e.detail)}
                                    ></rs-threshold-field>
                                  </div>
                                </ha-expansion-panel>
                              `:_}`}
                  </div>

                  <div class="group-card ${this._solarCollapsed?`collapsed`:``}">
                    <div
                      class="group-header"
                      @click=${()=>this._solarCollapsed=!this._solarCollapsed}
                    >
                      <ha-icon icon="mdi:white-balance-sunny"></ha-icon>
                      <span>${w(`covers.solar_group_title`,e)}</span>
                      <ha-icon
                        class="chevron ${this._solarCollapsed?`collapsed`:``}"
                        icon="mdi:chevron-down"
                      ></ha-icon>
                    </div>
                    ${this._solarCollapsed?_:g`<div class="field-row">
                            <rs-threshold-field
                              .label=${w(`covers.deploy_threshold`,e)}
                              .hint=${w(`covers.deploy_threshold_hint`,e)}
                              .value=${this.deployThreshold}
                              .min=${.5}
                              .max=${5}
                              .step=${.5}
                              suffix="°C"
                              @value-changed=${e=>this._emit(`covers_deploy_threshold`,e.detail)}
                            ></rs-threshold-field>
                            <rs-threshold-field
                              .label=${w(`covers.min_position`,e)}
                              .hint=${w(`covers.min_position_hint`,e)}
                              .value=${this.minPosition}
                              .min=${0}
                              .max=${80}
                              .step=${5}
                              suffix="%"
                              @value-changed=${e=>this._emit(`covers_min_position`,e.detail)}
                            ></rs-threshold-field>
                          </div>
                          <div class="field-row">
                            <rs-threshold-field
                              .label=${w(`covers.override_minutes`,e)}
                              .hint=${w(`covers.override_minutes_hint`,e)}
                              .value=${this.overrideMinutes}
                              .min=${0}
                              .max=${480}
                              .step=${15}
                              suffix="min"
                              @value-changed=${e=>this._emit(`covers_override_minutes`,e.detail)}
                            ></rs-threshold-field>
                            <rs-threshold-field
                              .label=${w(`covers.outdoor_min_temp`,e)}
                              .hint=${w(`covers.outdoor_min_temp_hint`,e)}
                              .value=${this.outdoorMinTemp??10}
                              .min=${0}
                              .max=${35}
                              .step=${1}
                              suffix="°C"
                              @value-changed=${e=>this._emit(`covers_outdoor_min_temp`,e.detail)}
                            ></rs-threshold-field>
                          </div>
                          <div class="group-divider"></div>
                          <rs-toggle-row
                            .label=${w(`covers.snap_deploy`,e)}
                            .hint=${w(`covers.snap_deploy_hint`,e)}
                            .checked=${this.snapDeploy}
                            @toggle-changed=${e=>this._emit(`covers_snap_deploy`,e.detail)}
                          ></rs-toggle-row>`}
                  </div>
                `:_}
          `:_}
    `}static{this._DIRECTIONS=[{shortLabel:`covers.orientation_N`,longLabel:`covers.orientation_N_full`,deg:0},{shortLabel:`covers.orientation_NE`,longLabel:`covers.orientation_NE_full`,deg:45},{shortLabel:`covers.orientation_E`,longLabel:`covers.orientation_E_full`,deg:90},{shortLabel:`covers.orientation_SE`,longLabel:`covers.orientation_SE_full`,deg:135},{shortLabel:`covers.orientation_S`,longLabel:`covers.orientation_S_full`,deg:180},{shortLabel:`covers.orientation_SW`,longLabel:`covers.orientation_SW_full`,deg:225},{shortLabel:`covers.orientation_W`,longLabel:`covers.orientation_W_full`,deg:270},{shortLabel:`covers.orientation_NW`,longLabel:`covers.orientation_NW_full`,deg:315}]}_setMinPosition(e,t){let n={...this.coverMinPositions};n[e]=t,this._emit(`cover_min_positions`,n)}_setOrientation(e,t){let n={...this.coverOrientations};t===void 0?delete n[e]:n[e]=t,this._emit(`cover_orientations`,n)}_onEntityPicked(e){e.stopPropagation();let t=e.detail.value;if(!t)return;this._onToggle(t,!0);let n=e.target;n.value=``}_onToggle(e,t){this.dispatchEvent(new CustomEvent(`covers-toggle`,{detail:{entityId:e,checked:t},bubbles:!0,composed:!0}))}_emit(e,t){this.dispatchEvent(new CustomEvent(`setting-changed`,{detail:{key:e,value:t},bubbles:!0,composed:!0}))}};j([x({attribute:!1})],G.prototype,`hass`,void 0),j([x({attribute:!1})],G.prototype,`area`,void 0),j([x({attribute:!1})],G.prototype,`selectedCovers`,void 0),j([x({type:Boolean})],G.prototype,`editing`,void 0),j([x({type:Boolean})],G.prototype,`autoEnabled`,void 0),j([x({type:Number})],G.prototype,`deployThreshold`,void 0),j([x({type:Number})],G.prototype,`minPosition`,void 0),j([x({type:Number})],G.prototype,`overrideMinutes`,void 0),j([x({type:Boolean})],G.prototype,`autoPaused`,void 0),j([x({attribute:!1})],G.prototype,`coverSchedules`,void 0),j([x({type:String})],G.prototype,`coverScheduleSelectorEntity`,void 0),j([x({type:Number})],G.prototype,`activeCoverScheduleIndex`,void 0),j([x({type:Boolean})],G.prototype,`nightClose`,void 0),j([x({type:Number})],G.prototype,`nightPosition`,void 0),j([x({type:Boolean})],G.prototype,`snapDeploy`,void 0),j([x({type:String})],G.prototype,`forcedReason`,void 0),j([x({attribute:!1})],G.prototype,`coverOrientations`,void 0),j([x({type:Number})],G.prototype,`nightCloseElevation`,void 0),j([x({type:Number})],G.prototype,`nightCloseOffsetMinutes`,void 0),j([x({type:Number})],G.prototype,`outdoorMinTemp`,void 0),j([x({attribute:!1})],G.prototype,`coverMinPositions`,void 0),j([S()],G.prototype,`_selectedForEdit`,void 0),j([S()],G.prototype,`_scheduleCollapsed`,void 0),j([S()],G.prototype,`_solarCollapsed`,void 0),G=Gt=j([b(`rs-covers-section`)],G),y(),C(),M();var Kt=class extends v{constructor(...e){super(...e),this.enabled=!1,this.primaryDelta=1.5,this.outdoorThreshold=5,this.acMinOutdoor=-15,this.editing=!1}static{this.styles=[R,l`
      :host {
        display: block;
      }

      /* Read-only summary (tile) */
      .summary {
        padding: 0 16px 16px;
        font-size: 13px;
        color: var(--secondary-text-color);
        line-height: 1.6;
      }

      .summary.disabled {
        font-style: italic;
        opacity: 0.75;
      }

      /* Editing layout */
      .feature-card {
        display: flex;
        align-items: center;
        gap: 14px;
        padding: 14px 16px;
        border: 1px solid var(--divider-color);
        border-radius: 12px;
        background: var(--card-background-color);
        transition:
          border-color 0.2s ease,
          background 0.2s ease;
      }

      .feature-card.enabled {
        border-color: rgba(3, 169, 244, 0.4);
        background: rgba(3, 169, 244, 0.06);
      }

      .feature-text {
        flex: 1;
        min-width: 0;
      }

      .feature-title {
        font-size: 14px;
        font-weight: 500;
        margin: 0 0 4px;
      }

      .feature-description {
        font-size: 12px;
        color: var(--secondary-text-color);
        line-height: 1.5;
        margin: 0;
      }

      ha-switch {
        flex-shrink: 0;
      }

      .thresholds {
        margin-top: 16px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 12px;
      }

      @media (max-width: 600px) {
        .thresholds {
          grid-template-columns: 1fr;
        }
      }

      .threshold-cell {
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 12px 14px;
        border: 1px solid var(--divider-color);
        border-radius: 10px;
        background: var(--card-background-color);
      }

      .threshold-label {
        font-size: 12px;
        font-weight: 500;
        color: var(--secondary-text-color);
        display: flex;
        align-items: center;
        gap: 4px;
        line-height: 1.3;
      }

      .threshold-label > span {
        flex: 1;
        min-width: 0;
      }

      .threshold-cell ha-textfield {
        width: 100%;
      }
    `]}render(){let e=this.hass.language;return this.editing?g`
      <div class="feature-card ${this.enabled?`enabled`:``}">
        <div class="feature-text">
          <div class="feature-title">${w(`heat_source.toggle`,e)}</div>
          <div class="feature-description">${w(`heat_source.toggle_hint`,e)}</div>
        </div>
        <ha-switch .checked=${this.enabled} @change=${this._onSwitchChange}></ha-switch>
      </div>

      ${this.enabled?g`
            <div class="thresholds">
              ${this._renderThresholdCell({label:w(`heat_source.primary_delta`,e),hint:w(`heat_source.primary_delta_hint`,e),suffix:w(`heat_source.primary_delta_suffix`,e),value:this.primaryDelta,min:.5,max:5,step:.1,key:`heat_source_primary_delta`})}
              ${this._renderThresholdCell({label:w(`heat_source.outdoor_threshold`,e),hint:w(`heat_source.outdoor_threshold_hint`,e),suffix:w(`heat_source.outdoor_threshold_suffix`,e),value:this.outdoorThreshold,min:-20,max:25,step:1,key:`heat_source_outdoor_threshold`})}
              ${this._renderThresholdCell({label:w(`heat_source.ac_min_outdoor`,e),hint:w(`heat_source.ac_min_outdoor_hint`,e),suffix:w(`heat_source.ac_min_outdoor_suffix`,e),value:this.acMinOutdoor,min:-30,max:5,step:1,key:`heat_source_ac_min_outdoor`})}
            </div>
          `:_}
    `:this.enabled?g`<div class="summary">
        ${w(`heat_source.primary_delta`,e)}:
        <strong>${this.primaryDelta}${w(`heat_source.primary_delta_suffix`,e)}</strong>
        · ${w(`heat_source.outdoor_threshold`,e)}:
        <strong
          >${this.outdoorThreshold}${w(`heat_source.outdoor_threshold_suffix`,e)}</strong
        >
        · ${w(`heat_source.ac_min_outdoor`,e)}:
        <strong>${this.acMinOutdoor}${w(`heat_source.ac_min_outdoor_suffix`,e)}</strong>
      </div>`:g`<div class="summary disabled">
          ${w(`heat_source.summary_disabled`,e)}
        </div>`}_renderThresholdCell(e){return g`
      <div class="threshold-cell">
        <div class="threshold-label">
          <span>${e.label}</span>
          <rs-info-icon .text=${e.hint}></rs-info-icon>
        </div>
        <ha-textfield
          .value=${String(e.value)}
          .min=${String(e.min)}
          .max=${String(e.max)}
          .step=${String(e.step)}
          .suffix=${e.suffix}
          type="number"
          @input=${t=>this._onNumberInput(e.key,t)}
        ></ha-textfield>
      </div>
    `}_onSwitchChange(e){this._emit(`heat_source_orchestration`,e.target.checked)}_onNumberInput(e,t){let n=parseFloat(t.target.value);isNaN(n)||this._emit(e,n)}_emit(e,t){this.dispatchEvent(new CustomEvent(`setting-changed`,{detail:{key:e,value:t},bubbles:!0,composed:!0}))}};j([x({attribute:!1})],Kt.prototype,`hass`,void 0),j([x({type:Boolean})],Kt.prototype,`enabled`,void 0),j([x({type:Number})],Kt.prototype,`primaryDelta`,void 0),j([x({type:Number})],Kt.prototype,`outdoorThreshold`,void 0),j([x({type:Number})],Kt.prototype,`acMinOutdoor`,void 0),j([x({type:Boolean})],Kt.prototype,`editing`,void 0),Kt=j([b(`rs-heat-source-section`)],Kt),y(),C(),M();var qt=class extends v{constructor(...e){super(...e),this.icon=``,this.label=``,this.hint=``,this.checked=!1,this.disabled=!1}static{this.styles=l`
    :host {
      display: block;
    }

    ha-card {
      padding: 16px 20px;
      min-width: 0;
    }

    .row {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .icon {
      --mdc-icon-size: 18px;
      color: var(--secondary-text-color);
      opacity: 0.7;
      flex-shrink: 0;
    }

    rs-toggle-row {
      flex: 1;
      min-width: 0;
    }
  `}render(){return g`
      <ha-card>
        <div class="row">
          ${this.icon?g`<ha-icon class="icon" icon=${this.icon}></ha-icon>`:_}
          <rs-toggle-row
            .label=${this.label}
            .hint=${this.hint}
            .checked=${this.checked}
            .disabled=${this.disabled}
            @toggle-changed=${this._onToggle}
          ></rs-toggle-row>
        </div>
      </ha-card>
    `}_onToggle(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent(`toggle-changed`,{detail:e.detail,bubbles:!0,composed:!0}))}};j([x({type:String})],qt.prototype,`icon`,void 0),j([x({type:String})],qt.prototype,`label`,void 0),j([x({type:String})],qt.prototype,`hint`,void 0),j([x({type:Boolean})],qt.prototype,`checked`,void 0),j([x({type:Boolean})],qt.prototype,`disabled`,void 0),qt=j([b(`rs-toggle-card`)],qt),y(),C(),M();var Jt=`M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z`,Yt=`M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z`,Xt=class extends v{constructor(...e){super(...e),this.open=!1,this.heading=``,this.icon=``,this.hasInfo=!1,this._infoExpanded=!1,this._onKeyDown=e=>{e.key===`Escape`&&this.open&&(e.stopPropagation(),this._close())}}connectedCallback(){super.connectedCallback(),window.addEventListener(`keydown`,this._onKeyDown)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`keydown`,this._onKeyDown)}static{this.styles=l`
    :host {
      display: contents;
    }

    .backdrop {
      position: fixed;
      inset: 0;
      z-index: 1000;
      background: rgba(0, 0, 0, 0.55);
      backdrop-filter: blur(2px);
      display: flex;
      align-items: flex-start;
      justify-content: center;
      padding: 32px 16px;
      box-sizing: border-box;
      overflow-y: auto;
      animation: fade-in 0.18s ease-out;
    }

    @media (max-width: 600px) {
      .backdrop {
        padding: 0;
        align-items: stretch;
      }
    }

    .dialog {
      background: var(--card-background-color, #1c1c1c);
      color: var(--primary-text-color);
      border-radius: 14px;
      box-shadow: 0 24px 48px rgba(0, 0, 0, 0.5);
      width: 100%;
      max-width: 760px;
      display: flex;
      flex-direction: column;
      max-height: calc(100vh - 64px);
      animation: pop-in 0.18s ease-out;
    }

    @media (min-width: 1400px) {
      .dialog {
        max-width: 880px;
      }
    }

    @media (max-width: 600px) {
      .dialog {
        max-width: 100%;
        max-height: 100vh;
        border-radius: 0;
      }
    }

    .dialog-header {
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 18px 24px;
      border-bottom: 1px solid var(--divider-color, rgba(255, 255, 255, 0.08));
    }

    .dialog-icon {
      --mdc-icon-size: 20px;
      opacity: 0.7;
      flex-shrink: 0;
      margin-right: 8px;
    }

    .dialog-title {
      flex: 1;
      font-size: 16px;
      font-weight: 500;
      margin: 0;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .info-btn {
      --mdc-icon-button-size: 36px;
      --mdc-icon-size: 20px;
      color: var(--secondary-text-color);
      transition:
        color 0.15s,
        background 0.15s;
      border-radius: 50%;
    }

    .info-btn.active {
      color: var(--primary-color);
      background: rgba(3, 169, 244, 0.12);
    }

    .close-btn {
      --mdc-icon-button-size: 36px;
      --mdc-icon-size: 20px;
      color: var(--secondary-text-color);
      margin: -6px -10px -6px 0;
    }

    .dialog-body {
      flex: 1;
      overflow-y: auto;
      padding: 20px 24px 24px;
    }

    .dialog-body ::slotted(*) {
      display: block;
    }

    .info-panel {
      margin-bottom: 16px;
      padding: 12px 14px;
      background: rgba(3, 169, 244, 0.06);
      border: 1px solid rgba(3, 169, 244, 0.18);
      border-radius: 10px;
      font-size: 13px;
      line-height: 1.6;
      color: var(--primary-text-color);
      animation: info-fade 0.18s ease-out;
    }

    .info-panel ::slotted(*) {
      display: block;
    }

    @keyframes fade-in {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes pop-in {
      from {
        opacity: 0;
        transform: scale(0.97);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }

    @keyframes info-fade {
      from {
        opacity: 0;
        transform: translateY(-4px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `}render(){return this.open?g`
      <div class="backdrop" @click=${this._onBackdropClick} role="dialog" aria-modal="true">
        <div class="dialog" @click=${e=>e.stopPropagation()}>
          <div class="dialog-header">
            ${this.icon?g`<ha-icon class="dialog-icon" icon=${this.icon}></ha-icon>`:_}
            <h3 class="dialog-title">${this.heading}</h3>
            ${this.hasInfo?g`<ha-icon-button
                  class="info-btn ${this._infoExpanded?`active`:``}"
                  .path=${Yt}
                  @click=${this._toggleInfo}
                ></ha-icon-button>`:_}
            <ha-icon-button
              class="close-btn"
              .path=${Jt}
              @click=${this._close}
            ></ha-icon-button>
          </div>
          <div class="dialog-body">
            ${this.hasInfo&&this._infoExpanded?g`<div class="info-panel"><slot name="info"></slot></div>`:_}
            <slot></slot>
          </div>
        </div>
      </div>
    `:_}_onBackdropClick(e){e.target===e.currentTarget&&this._close()}_toggleInfo(){this._infoExpanded=!this._infoExpanded}_close(){this._infoExpanded=!1,this.dispatchEvent(new CustomEvent(`rs-dialog-closed`,{bubbles:!0,composed:!0}))}};j([x({type:Boolean,reflect:!0})],Xt.prototype,`open`,void 0),j([x({type:String})],Xt.prototype,`heading`,void 0),j([x({type:String})],Xt.prototype,`icon`,void 0),j([x({type:Boolean})],Xt.prototype,`hasInfo`,void 0),j([S()],Xt.prototype,`_infoExpanded`,void 0),Xt=j([b(`rs-edit-dialog`)],Xt),y(),C(),M();var Zt=`https://github.com/snazzybean/roommind/blob/main/docs/control-and-devices.md`,K=class extends v{constructor(...e){super(...e),this.config=null,this.presenceEnabled=!1,this.presencePersons=[],this.climateControlActive=!0,this.valveProtectionEnabled=!1,this._devices=[],this._selectedTempSensor=``,this._selectedHumiditySensor=``,this._selectedOccupancySensors=new Set,this._selectedWindowSensors=new Set,this._windowOpenDelay=0,this._windowCloseDelay=0,this._climateMode=`auto`,this._schedules=[],this._scheduleSelectorEntity=``,this._comfortHeat=21,this._comfortCool=24,this._ecoHeat=17,this._ecoCool=27,this._error=``,this._dirty=!1,this._editing=null,this._selectedPresencePersons=[],this._displayName=``,this._selectedCovers=new Set,this._coversAutoEnabled=!1,this._coversDeployThreshold=1.5,this._coversMinPosition=0,this._coversOverrideMinutes=60,this._coverSchedules=[],this._coverScheduleSelectorEntity=``,this._coversNightClose=!1,this._coversNightPosition=0,this._coversSnapDeploy=!1,this._coverOrientations={},this._coversNightCloseElevation=0,this._coversNightCloseOffsetMinutes=0,this._coversOutdoorMinTemp=10,this._coverMinPositions={},this._ignorePresence=!1,this._isOutdoor=!1,this._valveProtectionExclude=new Set,this._climateControlEnabled=!0,this._heatSourceOrchestration=!1,this._heatSourcePrimaryDelta=1.5,this._heatSourceOutdoorThreshold=5,this._heatSourceAcMinOutdoor=-15,this._prevAreaId=null,this._openEdit=e=>()=>{this._editing=e},this._closeEdit=()=>{this._editing=null}}static{this.styles=l`
    :host {
      display: block;
      max-width: 2400px;
      margin: 0 auto;
    }

    .detail-layout {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .detail-grid {
      column-count: 3;
      column-width: 360px;
      column-gap: 16px;
      column-fill: balance;
    }

    .detail-grid > * {
      display: block;
      width: 100%;
      break-inside: avoid;
      page-break-inside: avoid;
      margin-bottom: 16px;
    }

    @media (min-width: 1900px) {
      .detail-grid {
        column-count: 4;
      }
    }

    /* Section cards handled by rs-section-card */

    /* YAML code block for info panels (slotted into edit dialogs) */
    .yaml-block {
      background: var(--code-editor-background-color, rgba(0, 0, 0, 0.35));
      border: 1px solid var(--divider-color, rgba(255, 255, 255, 0.12));
      border-radius: 6px;
      padding: 10px 14px;
      margin: 8px 0;
      font-family: var(--code-font-family, monospace);
      font-size: 12px;
      line-height: 1.6;
      white-space: pre;
      overflow-x: auto;
      color: var(--primary-text-color);
    }
    .yaml-key {
      color: #82aaff;
    }
    .yaml-value {
      color: #e2a76a;
    }

    /* Actions */
    .actions {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-top: 8px;
      margin-bottom: 24px;
    }

    .error {
      color: var(--error-color, #d32f2f);
      font-size: 13px;
      margin-top: 8px;
    }

    .field-hint {
      color: var(--secondary-text-color);
      font-size: 12px;
    }

    .exceptions-link {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      background: none;
      border: none;
      padding: 8px 0 0;
      margin: 0;
      cursor: pointer;
      font-size: 13px;
      color: var(--primary-color);
      font-family: inherit;
    }

    .exceptions-link:hover {
      text-decoration: underline;
    }

    .helper-link {
      display: inline-block;
      margin-top: 12px;
      color: var(--primary-color);
      font-size: 12px;
      text-decoration: none;
    }

    .helper-link:hover {
      text-decoration: underline;
    }
  `}connectedCallback(){super.connectedCallback(),this._initFromConfig()}disconnectedCallback(){super.disconnectedCallback(),this._saveDebounce&&clearTimeout(this._saveDebounce)}updated(e){let t=this.config?.area_id??this.area?.area_id??null;t===this._prevAreaId?e.has(`config`)&&!this._dirty&&(e.get(`config`)??this._initFromConfig()):(this._initFromConfig(),this._prevAreaId=t)}_initFromConfig(){this.config?(this.config.devices?.length?this._devices=[...this.config.devices]:this._devices=[...(this.config.thermostats??[]).map(e=>({entity_id:e,type:`trv`,role:`auto`,heating_system_type:this.config.heating_system_type??``})),...(this.config.acs??[]).map(e=>({entity_id:e,type:`ac`,role:`auto`}))],this._selectedTempSensor=this.config.temperature_sensor,this._selectedHumiditySensor=this.config.humidity_sensor??``,this._selectedOccupancySensors=new Set(this.config.occupancy_sensors??[]),this._selectedWindowSensors=new Set(this.config.window_sensors??[]),this._windowOpenDelay=this.config.window_open_delay??0,this._windowCloseDelay=this.config.window_close_delay??0,this._climateMode=this.config.climate_mode,this._schedules=this.config.schedules??[],this._scheduleSelectorEntity=this.config.schedule_selector_entity??``,this._comfortHeat=this.config.comfort_heat??this.config.comfort_temp??21,this._comfortCool=this.config.comfort_cool??24,this._ecoHeat=this.config.eco_heat??this.config.eco_temp??17,this._ecoCool=this.config.eco_cool??27,this._selectedPresencePersons=this.config.presence_persons??[],this._displayName=this.config.display_name??``,this._selectedCovers=new Set(this.config.covers??[]),this._coversAutoEnabled=this.config.covers_auto_enabled??!1,this._coversDeployThreshold=this.config.covers_deploy_threshold??1.5,this._coversMinPosition=this.config.covers_min_position??0,this._coversOverrideMinutes=this.config.covers_override_minutes??60,this._coverSchedules=this.config.cover_schedules??[],this._coverScheduleSelectorEntity=this.config.cover_schedule_selector_entity??``,this._coversNightClose=this.config.covers_night_close??!1,this._coversNightPosition=this.config.covers_night_position??0,this._coversSnapDeploy=this.config.covers_snap_deploy??!1,this._coverOrientations=this.config.cover_orientations??{},this._coversNightCloseElevation=this.config.covers_night_close_elevation??0,this._coversNightCloseOffsetMinutes=this.config.covers_night_close_offset_minutes??0,this._coversOutdoorMinTemp=this.config.covers_outdoor_min_temp??10,this._coverMinPositions=this.config.cover_min_positions??{},this._ignorePresence=this.config.ignore_presence??!1,this._isOutdoor=this.config.is_outdoor??!1,this._valveProtectionExclude=new Set(this.config.valve_protection_exclude??[]),this._climateControlEnabled=this.config.climate_control_enabled??!0,this._heatSourceOrchestration=this.config.heat_source_orchestration??!1,this._heatSourcePrimaryDelta=this.config.heat_source_primary_delta??1.5,this._heatSourceOutdoorThreshold=this.config.heat_source_outdoor_threshold??5,this._heatSourceAcMinOutdoor=this.config.heat_source_ac_min_outdoor??-15):(this._devices=[],this._selectedTempSensor=``,this._selectedHumiditySensor=``,this._selectedOccupancySensors=new Set,this._selectedWindowSensors=new Set,this._windowOpenDelay=0,this._windowCloseDelay=0,this._climateMode=`auto`,this._schedules=[],this._scheduleSelectorEntity=``,this._comfortHeat=21,this._comfortCool=24,this._ecoHeat=17,this._ecoCool=27,this._selectedPresencePersons=[],this._displayName=``,this._selectedCovers=new Set,this._coversAutoEnabled=!1,this._coversDeployThreshold=1.5,this._coversMinPosition=0,this._coversOverrideMinutes=60,this._coverSchedules=[],this._coverScheduleSelectorEntity=``,this._coversNightClose=!1,this._coversNightPosition=0,this._coversSnapDeploy=!1,this._coverOrientations={},this._coversNightCloseElevation=0,this._coversNightCloseOffsetMinutes=0,this._coversOutdoorMinTemp=10,this._coverMinPositions={},this._ignorePresence=!1,this._isOutdoor=!1,this._valveProtectionExclude=new Set,this._climateControlEnabled=!0,this._heatSourceOrchestration=!1,this._heatSourcePrimaryDelta=1.5,this._heatSourceOutdoorThreshold=5,this._heatSourceAcMinOutdoor=-15),this._dirty=!1,this._devices.length===0&&this._editing===null&&(this._editing=`devices`)}_getEffectiveOverride(){let e=this.shadowRoot?.querySelector(`rs-override-section`);if(e)return e.getEffectiveOverride();let t=this.config?.live;return t?.override_active&&t.override_type?{active:!0,type:t.override_type,temp:t.override_temp,until:t.override_until}:{active:!1,type:null,temp:null,until:null}}render(){return this.area?g`
      <div class="detail-layout">
        <rs-hero-status
          .hass=${this.hass}
          .area=${this.area}
          .config=${this.config}
          .isOutdoor=${this._isOutdoor}
          .overrideInfo=${this._getEffectiveOverride()}
          .climateControlActive=${this.climateControlActive&&this._climateControlEnabled}
          @display-name-changed=${this._onDisplayNameChanged}
        ></rs-hero-status>

        <div class="detail-grid">
          ${this._isOutdoor?_:g`
                <rs-toggle-card
                  icon="mdi:power"
                  .label=${w(`room.climate_control_toggle`,this.hass.language)}
                  .hint=${w(`room.climate_control_hint`,this.hass.language)}
                  .checked=${this._climateControlEnabled}
                  @toggle-changed=${this._onClimateControlToggle}
                ></rs-toggle-card>

                <rs-section-card
                  icon="mdi:cog"
                  .heading=${w(`room.section.climate_mode`,this.hass.language)}
                >
                  <rs-info-icon slot="header-extras">
                    <b>${w(`mode.auto`,this.hass.language)}</b> —
                    ${w(`mode.auto_desc`,this.hass.language)}<br />
                    <b>${w(`mode.heat_only`,this.hass.language)}</b> —
                    ${w(`mode.heat_only_desc`,this.hass.language)}<br />
                    <b>${w(`mode.cool_only`,this.hass.language)}</b> —
                    ${w(`mode.cool_only_desc`,this.hass.language)}
                  </rs-info-icon>
                  <rs-climate-mode-selector
                    .climateMode=${this._climateMode}
                    .language=${this.hass.language}
                    @mode-changed=${this._onModeChanged}
                  ></rs-climate-mode-selector>
                </rs-section-card>

                <rs-section-card
                  icon="mdi:calendar"
                  .heading=${w(`room.section.schedule`,this.hass.language)}
                  editable
                  @edit-click=${this._openEdit(`schedule`)}
                >
                  <rs-schedule-settings
                    .hass=${this.hass}
                    .schedules=${this._schedules}
                    .scheduleSelectorEntity=${this._scheduleSelectorEntity}
                    .activeScheduleIndex=${this.config?.live?.active_schedule_index??-1}
                    .comfortHeat=${this._comfortHeat}
                    .comfortCool=${this._comfortCool}
                    .ecoHeat=${this._ecoHeat}
                    .ecoCool=${this._ecoCool}
                    .climateMode=${this._climateMode}
                    .editing=${!1}
                    @schedules-changed=${this._onSchedulesChanged}
                    @schedule-selector-changed=${this._onScheduleSelectorChanged}
                    @comfort-heat-changed=${this._onComfortHeatChanged}
                    @comfort-cool-changed=${this._onComfortCoolChanged}
                    @eco-heat-changed=${this._onEcoHeatChanged}
                    @eco-cool-changed=${this._onEcoCoolChanged}
                  ></rs-schedule-settings>
                  ${this.config?g`
                        <rs-override-section
                          .hass=${this.hass}
                          .config=${this.config}
                          .climateMode=${this._climateMode}
                          .comfortHeat=${this._comfortHeat}
                          .comfortCool=${this._comfortCool}
                          .ecoHeat=${this._ecoHeat}
                          .ecoCool=${this._ecoCool}
                          .language=${this.hass.language}
                        ></rs-override-section>
                      `:_}
                </rs-section-card>
              `}
          ${this._isOutdoor?_:g`
                <rs-section-card
                  icon="mdi:power-plug"
                  .heading=${w(`room.section.devices`,this.hass.language)}
                  editable
                  @edit-click=${this._openEdit(`devices`)}
                >
                  <rs-device-section
                    .hass=${this.hass}
                    .area=${this.area}
                    .editing=${!1}
                    .devices=${this._devices}
                    .selectedTempSensor=${this._selectedTempSensor}
                    .valveProtectionExclude=${this._valveProtectionExclude}
                    .valveProtectionEnabled=${this.valveProtectionEnabled}
                    @device-changed=${this._onDeviceChanged}
                    @valve-protection-exclude-toggle=${this._onValveProtectionExcludeToggle}
                  ></rs-device-section>
                </rs-section-card>

                <rs-section-card
                  icon="mdi:thermometer"
                  .heading=${w(`room.section.sensors`,this.hass.language)}
                  editable
                  @edit-click=${this._openEdit(`sensors`)}
                >
                  <rs-sensor-section
                    .hass=${this.hass}
                    .area=${this.area}
                    .editing=${!1}
                    .temperatureSensor=${this._selectedTempSensor}
                    .humiditySensor=${this._selectedHumiditySensor}
                    .occupancySensors=${this._selectedOccupancySensors}
                    .windowSensors=${this._selectedWindowSensors}
                    .windowOpenDelay=${this._windowOpenDelay}
                    .windowCloseDelay=${this._windowCloseDelay}
                    .heatingSystemType=${Lt(this._devices)}
                    .language=${this.hass.language}
                    @sensor-changed=${this._onSensorChanged}
                  ></rs-sensor-section>
                </rs-section-card>

                ${this.presenceEnabled&&this.presencePersons.length>0?g`<rs-section-card
                      icon="mdi:home-account"
                      .heading=${w(`room.section.presence`,this.hass.language)}
                      editable
                      @edit-click=${this._openEdit(`presence`)}
                    >
                      <rs-info-icon
                        slot="header-extras"
                        .text=${w(`presence.ignore_hint`,this.hass.language)}
                      ></rs-info-icon>
                      <rs-presence-section
                        .hass=${this.hass}
                        .presenceEnabled=${this.presenceEnabled}
                        .presencePersons=${this.presencePersons}
                        .selectedPresencePersons=${this._selectedPresencePersons}
                        .ignorePresence=${this._ignorePresence}
                        .editing=${!1}
                        .language=${this.hass.language}
                        @presence-persons-changed=${this._onPresencePersonsChanged}
                        @ignore-presence-changed=${this._onIgnorePresenceChanged}
                      ></rs-presence-section>
                    </rs-section-card>`:_}
              `}
          ${this._isOutdoor?_:g`<rs-section-card
                icon="mdi:blinds-horizontal"
                .heading=${w(`room.section.covers`,this.hass.language)}
                .badge=${w(`badge.beta`,this.hass.language)}
                .badgeHint=${w(`badge.beta_hint`,this.hass.language)}
                editable
                @edit-click=${this._openEdit(`covers`)}
              >
                <rs-covers-section
                  .hass=${this.hass}
                  .area=${this.area}
                  .editing=${!1}
                  .selectedCovers=${this._selectedCovers}
                  .autoEnabled=${this._coversAutoEnabled}
                  .deployThreshold=${this._coversDeployThreshold}
                  .minPosition=${this._coversMinPosition}
                  .overrideMinutes=${this._coversOverrideMinutes}
                  .coverSchedules=${this._coverSchedules}
                  .coverScheduleSelectorEntity=${this._coverScheduleSelectorEntity}
                  .activeCoverScheduleIndex=${this.config?.live?.active_cover_schedule_index??-1}
                  .nightClose=${this._coversNightClose}
                  .nightPosition=${this._coversNightPosition}
                  .snapDeploy=${this._coversSnapDeploy}
                  .forcedReason=${this.config?.live?.cover_forced_reason??``}
                  .autoPaused=${this.config?.live?.cover_auto_paused??!1}
                  .coverOrientations=${this._coverOrientations}
                  .nightCloseElevation=${this._coversNightCloseElevation}
                  .nightCloseOffsetMinutes=${this._coversNightCloseOffsetMinutes}
                  .outdoorMinTemp=${this._coversOutdoorMinTemp}
                  .coverMinPositions=${this._coverMinPositions}
                  @covers-toggle=${this._onCoversToggle}
                  @setting-changed=${this._onCoverSettingChanged}
                ></rs-covers-section>
              </rs-section-card>`}
          ${!this._isOutdoor&&this._selectedTempSensor&&this._devices.some(e=>e.type===`trv`)&&this._devices.some(e=>e.type===`ac`)?g`<rs-section-card
                icon="mdi:swap-horizontal"
                .heading=${w(`room.section.heat_source`,this.hass.language)}
                editable
                @edit-click=${this._openEdit(`heatSource`)}
              >
                <rs-heat-source-section
                  .hass=${this.hass}
                  .editing=${!1}
                  .enabled=${this._heatSourceOrchestration}
                  .primaryDelta=${this._heatSourcePrimaryDelta}
                  .outdoorThreshold=${this._heatSourceOutdoorThreshold}
                  .acMinOutdoor=${this._heatSourceAcMinOutdoor}
                  @setting-changed=${this._onHeatSourceSettingChanged}
                ></rs-heat-source-section>
              </rs-section-card>`:_}

          <rs-toggle-card
            icon="mdi:tree"
            .label=${w(`room.outdoor_toggle`,this.hass.language)}
            .hint=${w(`room.outdoor_hint`,this.hass.language)}
            .checked=${this._isOutdoor}
            @toggle-changed=${this._onOutdoorToggle}
          ></rs-toggle-card>
        </div>
        ${this._error?g`<div class="error">${this._error}</div>`:_}
        ${this._renderEditDialog()}
      </div>
    `:_}_renderEditDialog(){if(this._editing===null)return _;let e=this.hass.language;switch(this._editing){case`schedule`:return g`<rs-edit-dialog
          open
          icon="mdi:calendar"
          .heading=${w(`room.section.schedule`,e)}
          hasInfo
          @rs-dialog-closed=${this._closeEdit}
        >
          <div slot="info">
            <p><strong>${w(`schedule.help_temps_title`,e)}</strong></p>
            <p>${w(`schedule.help_temps`,e)}</p>
            <ol style="margin: 4px 0 0 0; padding-left: 20px; line-height: 1.8">
              <li>${P(w(`schedule.help_temps_1`,e))}</li>
              <li>${P(w(`schedule.help_temps_2`,e))}</li>
              <li>${P(w(`schedule.help_temps_3`,e))}</li>
              <li>${P(w(`schedule.help_temps_4`,e))}</li>
            </ol>
            <p style="margin-top: 12px">
              <strong>${w(`schedule.help_block_title`,e)}</strong>
            </p>
            <p>${P(w(`schedule.help_block`,e))}</p>
            <div class="yaml-block">
              ${P(`<span class="yaml-key">schedule</span>:
  <span class="yaml-key">living_room_heating</span>:
    <span class="yaml-key">name</span>: <span class="yaml-value">Living Room Heating</span>
    <span class="yaml-key">monday</span>:
      - <span class="yaml-key">from</span>: <span class="yaml-value">"06:00:00"</span>
        <span class="yaml-key">to</span>: <span class="yaml-value">"08:00:00"</span>
        <span class="yaml-key">data</span>:
          <span class="yaml-key">temperature</span>: <span class="yaml-value">23</span>
      - <span class="yaml-key">from</span>: <span class="yaml-value">"17:00:00"</span>
        <span class="yaml-key">to</span>: <span class="yaml-value">"22:00:00"</span>
        <span class="yaml-key">data</span>:
          <span class="yaml-key">temperature</span>: <span class="yaml-value">21.5</span>`)}
            </div>
            <p style="margin-top: 8px">${P(w(`schedule.help_block_note`,e))}</p>
            <p style="margin-top: 12px">
              <strong>${w(`schedule.help_split_title`,e)}</strong>
            </p>
            <p>${P(w(`schedule.help_split`,e))}</p>
            <div class="yaml-block">
              ${P(`- <span class="yaml-key">from</span>: <span class="yaml-value">"06:00:00"</span>
  <span class="yaml-key">to</span>: <span class="yaml-value">"08:00:00"</span>
  <span class="yaml-key">data</span>:
    <span class="yaml-key">heat_temperature</span>: <span class="yaml-value">21</span>
    <span class="yaml-key">cool_temperature</span>: <span class="yaml-value">24</span>`)}
            </div>
            <p style="margin-top: 8px">${P(w(`schedule.help_split_note`,e))}</p>
            <p style="margin-top: 12px">
              <strong>${w(`schedule.help_multi_title`,e)}</strong>
            </p>
            <p>${P(w(`schedule.help_multi`,e))}</p>
          </div>
          <rs-schedule-settings
            .hass=${this.hass}
            .schedules=${this._schedules}
            .scheduleSelectorEntity=${this._scheduleSelectorEntity}
            .activeScheduleIndex=${this.config?.live?.active_schedule_index??-1}
            .comfortHeat=${this._comfortHeat}
            .comfortCool=${this._comfortCool}
            .ecoHeat=${this._ecoHeat}
            .ecoCool=${this._ecoCool}
            .climateMode=${this._climateMode}
            .editing=${!0}
            @schedules-changed=${this._onSchedulesChanged}
            @schedule-selector-changed=${this._onScheduleSelectorChanged}
            @comfort-heat-changed=${this._onComfortHeatChanged}
            @comfort-cool-changed=${this._onComfortCoolChanged}
            @eco-heat-changed=${this._onEcoHeatChanged}
            @eco-cool-changed=${this._onEcoCoolChanged}
          ></rs-schedule-settings>
        </rs-edit-dialog>`;case`devices`:return g`<rs-edit-dialog
          open
          icon="mdi:power-plug"
          .heading=${w(`room.section.devices`,e)}
          hasInfo
          @rs-dialog-closed=${this._closeEdit}
        >
          <div slot="info">
            <b>${w(`devices.info.types_title`,e)}</b><br />
            ${w(`devices.info.types_body`,e)}
            <br /><br />
            <b>${w(`devices.info.control_title`,e)}</b><br />
            ${w(`devices.info.control_body`,e)}
            <br /><br />
            <b>${w(`devices.info.modes_title`,e)}</b><br />
            ${w(`devices.info.modes_body`,e)}
            <br /><br />
            <b>${w(`devices.info.heat_source_title`,e)}</b><br />
            ${w(`devices.info.heat_source_body`,e)}
            <br />
            <a class="helper-link" href=${Zt} target="_blank" rel="noreferrer">
              ${w(`common.learn_more`,e)}
            </a>
          </div>
          <rs-device-section
            .hass=${this.hass}
            .area=${this.area}
            .editing=${!0}
            .devices=${this._devices}
            .selectedTempSensor=${this._selectedTempSensor}
            .valveProtectionExclude=${this._valveProtectionExclude}
            .valveProtectionEnabled=${this.valveProtectionEnabled}
            @device-changed=${this._onDeviceChanged}
            @valve-protection-exclude-toggle=${this._onValveProtectionExcludeToggle}
          ></rs-device-section>
        </rs-edit-dialog>`;case`sensors`:return g`<rs-edit-dialog
          open
          icon="mdi:thermometer"
          .heading=${w(`room.section.sensors`,e)}
          @rs-dialog-closed=${this._closeEdit}
        >
          <rs-sensor-section
            .hass=${this.hass}
            .area=${this.area}
            .editing=${!0}
            .temperatureSensor=${this._selectedTempSensor}
            .humiditySensor=${this._selectedHumiditySensor}
            .occupancySensors=${this._selectedOccupancySensors}
            .windowSensors=${this._selectedWindowSensors}
            .windowOpenDelay=${this._windowOpenDelay}
            .windowCloseDelay=${this._windowCloseDelay}
            .heatingSystemType=${Lt(this._devices)}
            .language=${this.hass.language}
            @sensor-changed=${this._onSensorChanged}
          ></rs-sensor-section>
        </rs-edit-dialog>`;case`presence`:return g`<rs-edit-dialog
          open
          icon="mdi:home-account"
          .heading=${w(`room.section.presence`,e)}
          hasInfo
          @rs-dialog-closed=${this._closeEdit}
        >
          <div slot="info">
            <b>${w(`presence.room_help_header`,e)}</b><br />
            ${w(`presence.room_help_body`,e)}
            <br /><br />
            <b>${w(`presence.help_ignore_title`,e)}</b><br />
            ${w(`presence.help_ignore_body`,e)}
          </div>
          <rs-presence-section
            .hass=${this.hass}
            .presenceEnabled=${this.presenceEnabled}
            .presencePersons=${this.presencePersons}
            .selectedPresencePersons=${this._selectedPresencePersons}
            .ignorePresence=${this._ignorePresence}
            .editing=${!0}
            .language=${this.hass.language}
            @presence-persons-changed=${this._onPresencePersonsChanged}
            @ignore-presence-changed=${this._onIgnorePresenceChanged}
          ></rs-presence-section>
        </rs-edit-dialog>`;case`covers`:return g`<rs-edit-dialog
          open
          icon="mdi:blinds-horizontal"
          .heading=${w(`room.section.covers`,e)}
          hasInfo
          @rs-dialog-closed=${this._closeEdit}
        >
          <div slot="info">
            <b>${w(`covers.info.selection_title`,e)}</b><br />
            ${w(`covers.info.selection_body`,e)}
            <br /><br />
            <b>${w(`covers.info.schedule_title`,e)}</b><br />
            ${w(`covers.info.schedule_body`,e)}
            <div class="yaml-block">
              ${P(`<span class="yaml-key">schedule</span>:
  <span class="yaml-key">cover_evening</span>:
    <span class="yaml-key">name</span>: <span class="yaml-value">Cover Evening</span>
    <span class="yaml-key">monday</span>:
      - <span class="yaml-key">from</span>: <span class="yaml-value">"20:00:00"</span>
        <span class="yaml-key">to</span>: <span class="yaml-value">"06:00:00"</span>
        <span class="yaml-key">data</span>:
          <span class="yaml-key">position</span>: <span class="yaml-value">10</span>`)}
            </div>
            <b>${w(`covers.info.solar_title`,e)}</b><br />
            ${w(`covers.info.solar_body`,e)}
            <br /><br />
            <b>${w(`covers.info.night_title`,e)}</b><br />
            ${w(`covers.info.night_body`,e)}
            <br /><br />
            <b>${w(`covers.info.override_title`,e)}</b><br />
            ${w(`covers.info.override_body`,e)}
            <br /><br />
            <b>${w(`covers.info.priority_title`,e)}</b><br />
            ${w(`covers.info.priority_body`,e)}
            <br /><br />
            <b>${w(`covers.info.entities_title`,e)}</b><br />
            ${w(`covers.info.entities_body`,e)}
          </div>
          <rs-covers-section
            .hass=${this.hass}
            .area=${this.area}
            .editing=${!0}
            .selectedCovers=${this._selectedCovers}
            .autoEnabled=${this._coversAutoEnabled}
            .deployThreshold=${this._coversDeployThreshold}
            .minPosition=${this._coversMinPosition}
            .overrideMinutes=${this._coversOverrideMinutes}
            .coverSchedules=${this._coverSchedules}
            .coverScheduleSelectorEntity=${this._coverScheduleSelectorEntity}
            .activeCoverScheduleIndex=${this.config?.live?.active_cover_schedule_index??-1}
            .nightClose=${this._coversNightClose}
            .nightPosition=${this._coversNightPosition}
            .snapDeploy=${this._coversSnapDeploy}
            .forcedReason=${this.config?.live?.cover_forced_reason??``}
            .autoPaused=${this.config?.live?.cover_auto_paused??!1}
            .coverOrientations=${this._coverOrientations}
            .nightCloseElevation=${this._coversNightCloseElevation}
            .nightCloseOffsetMinutes=${this._coversNightCloseOffsetMinutes}
            .outdoorMinTemp=${this._coversOutdoorMinTemp}
            .coverMinPositions=${this._coverMinPositions}
            @covers-toggle=${this._onCoversToggle}
            @setting-changed=${this._onCoverSettingChanged}
          ></rs-covers-section>
        </rs-edit-dialog>`;case`heatSource`:return g`<rs-edit-dialog
          open
          icon="mdi:swap-horizontal"
          .heading=${w(`room.section.heat_source`,e)}
          @rs-dialog-closed=${this._closeEdit}
        >
          <rs-heat-source-section
            .hass=${this.hass}
            .editing=${!0}
            .enabled=${this._heatSourceOrchestration}
            .primaryDelta=${this._heatSourcePrimaryDelta}
            .outdoorThreshold=${this._heatSourceOutdoorThreshold}
            .acMinOutdoor=${this._heatSourceAcMinOutdoor}
            @setting-changed=${this._onHeatSourceSettingChanged}
          ></rs-heat-source-section>
        </rs-edit-dialog>`}}_onModeChanged(e){this._climateMode=e.detail.mode,this._autoSave()}_onSchedulesChanged(e){this._schedules=e.detail.value,this._autoSave()}_onScheduleSelectorChanged(e){this._scheduleSelectorEntity=e.detail.value,this._autoSave()}_onComfortHeatChanged(e){this._comfortHeat=e.detail.value,this._comfortCool<this._comfortHeat&&(this._comfortCool=this._comfortHeat),this._autoSave()}_onComfortCoolChanged(e){this._comfortCool=e.detail.value,this._comfortHeat>this._comfortCool&&(this._comfortHeat=this._comfortCool),this._autoSave()}_onEcoHeatChanged(e){this._ecoHeat=e.detail.value,this._ecoCool<this._ecoHeat&&(this._ecoCool=this._ecoHeat),this._autoSave()}_onEcoCoolChanged(e){this._ecoCool=e.detail.value,this._ecoHeat>this._ecoCool&&(this._ecoHeat=this._ecoCool),this._autoSave()}_onDeviceChanged(e){let t=new Set(this._devices.map(e=>e.entity_id));this._devices=e.detail.devices;let n=new Set(this._devices.map(e=>e.entity_id));for(let e of t)if(!n.has(e)&&this._valveProtectionExclude.has(e)){let t=new Set(this._valveProtectionExclude);t.delete(e),this._valveProtectionExclude=t}for(let e of this._devices)if(e.type!==`trv`&&this._valveProtectionExclude.has(e.entity_id)){let t=new Set(this._valveProtectionExclude);t.delete(e.entity_id),this._valveProtectionExclude=t}this._autoSave()}_onSensorChanged(e){let{key:t,value:n}=e.detail;t===`temperature_sensor`?this._selectedTempSensor=n:t===`humidity_sensor`?this._selectedHumiditySensor=n:t===`occupancy_sensors`?this._selectedOccupancySensors=new Set(n):t===`window_sensors`?this._selectedWindowSensors=new Set(n):t===`window_open_delay`?this._windowOpenDelay=n:t===`window_close_delay`&&(this._windowCloseDelay=n),this._autoSave()}_onValveProtectionExcludeToggle(e){let{entityId:t,excluded:n}=e.detail,r=new Set(this._valveProtectionExclude);n?r.add(t):r.delete(t),this._valveProtectionExclude=r,this._autoSave()}_onPresencePersonsChanged(e){this._selectedPresencePersons=e.detail,this._autoSave()}_onIgnorePresenceChanged(e){this._ignorePresence=e.detail,this._autoSave()}_onCoversToggle(e){let{entityId:t,checked:n}=e.detail,r=new Set(this._selectedCovers);if(n)r.add(t);else{if(r.delete(t),t in this._coverOrientations){let e={...this._coverOrientations};delete e[t],this._coverOrientations=e}if(t in this._coverMinPositions){let e={...this._coverMinPositions};delete e[t],this._coverMinPositions=e}}this._selectedCovers=r,this._autoSave()}_onCoverSettingChanged(e){let{key:t,value:n}=e.detail;e.stopPropagation(),t===`covers_auto_enabled`?this._coversAutoEnabled=n:t===`covers_deploy_threshold`?this._coversDeployThreshold=n:t===`covers_min_position`?this._coversMinPosition=n:t===`covers_override_minutes`?this._coversOverrideMinutes=n:t===`cover_schedules`?this._coverSchedules=n:t===`cover_schedule_selector_entity`?this._coverScheduleSelectorEntity=n:t===`covers_night_close`?this._coversNightClose=n:t===`covers_night_position`?this._coversNightPosition=n:t===`covers_snap_deploy`?this._coversSnapDeploy=n:t===`cover_orientations`?this._coverOrientations=n:t===`covers_night_close_elevation`?this._coversNightCloseElevation=n:t===`covers_night_close_offset_minutes`?this._coversNightCloseOffsetMinutes=n:t===`covers_outdoor_min_temp`?this._coversOutdoorMinTemp=n:t===`cover_min_positions`&&(this._coverMinPositions=n),this._autoSave()}_onHeatSourceSettingChanged(e){let{key:t,value:n}=e.detail;e.stopPropagation(),t===`heat_source_orchestration`?this._heatSourceOrchestration=n:t===`heat_source_primary_delta`?this._heatSourcePrimaryDelta=n:t===`heat_source_outdoor_threshold`?this._heatSourceOutdoorThreshold=n:t===`heat_source_ac_min_outdoor`&&(this._heatSourceAcMinOutdoor=n),this._autoSave()}_onClimateControlToggle(e){this._climateControlEnabled=e.detail,this._autoSave()}_onOutdoorToggle(e){this._isOutdoor=e.detail,this._autoSave()}_onDisplayNameChanged(e){this._displayName=e.detail.value,this._autoSave()}_autoSave(){this._dirty=!0,this._saveDebounce&&clearTimeout(this._saveDebounce),this._saveDebounce=setTimeout(()=>this._doSave(),500)}async _doSave(){L(this,`saving`),this._error=``;try{await this.hass.callWS({type:`roommind/rooms/save`,area_id:this.area.area_id,devices:this._devices,temperature_sensor:this._selectedTempSensor,humidity_sensor:this._selectedHumiditySensor,occupancy_sensors:[...this._selectedOccupancySensors],window_sensors:[...this._selectedWindowSensors],window_open_delay:this._windowOpenDelay,window_close_delay:this._windowCloseDelay,climate_mode:this._climateMode,schedules:this._schedules,schedule_selector_entity:this._scheduleSelectorEntity,comfort_heat:this._comfortHeat,comfort_cool:this._comfortCool,eco_heat:this._ecoHeat,eco_cool:this._ecoCool,presence_persons:this._selectedPresencePersons.filter(e=>e),display_name:this._displayName,covers:[...this._selectedCovers],climate_control_enabled:this._climateControlEnabled,covers_auto_enabled:this._coversAutoEnabled,covers_deploy_threshold:this._coversDeployThreshold,covers_min_position:this._coversMinPosition,covers_override_minutes:this._coversOverrideMinutes,cover_schedules:this._coverSchedules,cover_schedule_selector_entity:this._coverScheduleSelectorEntity,covers_night_close:this._coversNightClose,covers_night_position:this._coversNightPosition,covers_snap_deploy:this._coversSnapDeploy,cover_orientations:this._coverOrientations,covers_night_close_elevation:this._coversNightCloseElevation,covers_night_close_offset_minutes:this._coversNightCloseOffsetMinutes,covers_outdoor_min_temp:this._coversOutdoorMinTemp,cover_min_positions:this._coverMinPositions,ignore_presence:this._ignorePresence,is_outdoor:this._isOutdoor,valve_protection_exclude:[...this._valveProtectionExclude],heat_source_orchestration:this._heatSourceOrchestration,heat_source_primary_delta:this._heatSourcePrimaryDelta,heat_source_outdoor_threshold:this._heatSourceOutdoorThreshold,heat_source_ac_min_outdoor:this._heatSourceAcMinOutdoor}),this._dirty=!1,L(this,`saved`),this.dispatchEvent(new CustomEvent(`room-updated`,{bubbles:!0,composed:!0}))}catch(e){let t=e instanceof Error?e.message:w(`room.error_save_fallback`,this.hass.language);this._error=t,L(this,`error`)}}};j([x({attribute:!1})],K.prototype,`area`,void 0),j([x({attribute:!1})],K.prototype,`config`,void 0),j([x({attribute:!1})],K.prototype,`hass`,void 0),j([x({type:Boolean})],K.prototype,`presenceEnabled`,void 0),j([x({attribute:!1})],K.prototype,`presencePersons`,void 0),j([x({type:Boolean})],K.prototype,`climateControlActive`,void 0),j([x({type:Boolean})],K.prototype,`valveProtectionEnabled`,void 0),j([S()],K.prototype,`_devices`,void 0),j([S()],K.prototype,`_selectedTempSensor`,void 0),j([S()],K.prototype,`_selectedHumiditySensor`,void 0),j([S()],K.prototype,`_selectedOccupancySensors`,void 0),j([S()],K.prototype,`_selectedWindowSensors`,void 0),j([S()],K.prototype,`_windowOpenDelay`,void 0),j([S()],K.prototype,`_windowCloseDelay`,void 0),j([S()],K.prototype,`_climateMode`,void 0),j([S()],K.prototype,`_schedules`,void 0),j([S()],K.prototype,`_scheduleSelectorEntity`,void 0),j([S()],K.prototype,`_comfortHeat`,void 0),j([S()],K.prototype,`_comfortCool`,void 0),j([S()],K.prototype,`_ecoHeat`,void 0),j([S()],K.prototype,`_ecoCool`,void 0),j([S()],K.prototype,`_error`,void 0),j([S()],K.prototype,`_dirty`,void 0),j([S()],K.prototype,`_editing`,void 0),j([S()],K.prototype,`_selectedPresencePersons`,void 0),j([S()],K.prototype,`_displayName`,void 0),j([S()],K.prototype,`_selectedCovers`,void 0),j([S()],K.prototype,`_coversAutoEnabled`,void 0),j([S()],K.prototype,`_coversDeployThreshold`,void 0),j([S()],K.prototype,`_coversMinPosition`,void 0),j([S()],K.prototype,`_coversOverrideMinutes`,void 0),j([S()],K.prototype,`_coverSchedules`,void 0),j([S()],K.prototype,`_coverScheduleSelectorEntity`,void 0),j([S()],K.prototype,`_coversNightClose`,void 0),j([S()],K.prototype,`_coversNightPosition`,void 0),j([S()],K.prototype,`_coversSnapDeploy`,void 0),j([S()],K.prototype,`_coverOrientations`,void 0),j([S()],K.prototype,`_coversNightCloseElevation`,void 0),j([S()],K.prototype,`_coversNightCloseOffsetMinutes`,void 0),j([S()],K.prototype,`_coversOutdoorMinTemp`,void 0),j([S()],K.prototype,`_coverMinPositions`,void 0),j([S()],K.prototype,`_ignorePresence`,void 0),j([S()],K.prototype,`_isOutdoor`,void 0),j([S()],K.prototype,`_valveProtectionExclude`,void 0),j([S()],K.prototype,`_climateControlEnabled`,void 0),j([S()],K.prototype,`_heatSourceOrchestration`,void 0),j([S()],K.prototype,`_heatSourcePrimaryDelta`,void 0),j([S()],K.prototype,`_heatSourceOutdoorThreshold`,void 0),j([S()],K.prototype,`_heatSourceAcMinOutdoor`,void 0),K=j([b(`rs-room-detail`)],K);var Qt=n({HaTextfieldPolyfill:()=>q}),q,$t=t((()=>{y(),C(),M(),q=class extends v{constructor(...e){super(...e),this.value=``,this.type=`text`,this.label=``,this.placeholder=``,this.suffix=``,this.prefix=``,this.helper=``,this.disabled=!1,this.required=!1,this.readOnly=!1,this.min=``,this.max=``,this.step=null,this.name=``}static{this.shadowRootOptions={mode:`open`,delegatesFocus:!0}}static{this.styles=l`
    :host {
      display: inline-flex;
      flex-direction: column;
      outline: none;
      width: 100%;
    }
    ha-input {
      --ha-input-padding-bottom: 0;
      width: 100%;
    }
    .prefix,
    .suffix {
      color: var(--secondary-text-color);
    }
  `}render(){return g`
      <ha-input
        .type=${this.type}
        .value=${this.value||``}
        .label=${this.label}
        .placeholder=${this.placeholder}
        .disabled=${this.disabled}
        .required=${this.required}
        .readonly=${this.readOnly}
        .min=${this.min===``?void 0:this.min}
        .max=${this.max===``?void 0:this.max}
        .step=${this.step??void 0}
        .name=${this.name||void 0}
        .hint=${this.helper}
        .withoutSpinButtons=${this.type===`number`}
        @input=${this._sync}
        @change=${this._sync}
      >
        ${this.prefix?g`<span class="prefix" slot="start">${this.prefix}</span>`:_}
        ${this.suffix?g`<span class="suffix" slot="end">${this.suffix}</span>`:_}
      </ha-input>
    `}_sync(){this.value=this._haInput?.value??``}},j([x({type:String})],q.prototype,`value`,void 0),j([x({type:String})],q.prototype,`type`,void 0),j([x({type:String})],q.prototype,`label`,void 0),j([x({type:String})],q.prototype,`placeholder`,void 0),j([x({type:String})],q.prototype,`suffix`,void 0),j([x({type:String})],q.prototype,`prefix`,void 0),j([x({type:String})],q.prototype,`helper`,void 0),j([x({type:Boolean})],q.prototype,`disabled`,void 0),j([x({type:Boolean})],q.prototype,`required`,void 0),j([x({type:Boolean,reflect:!0,attribute:`readonly`})],q.prototype,`readOnly`,void 0),j([x()],q.prototype,`min`,void 0),j([x()],q.prototype,`max`,void 0),j([x()],q.prototype,`step`,void 0),j([x({type:String})],q.prototype,`name`,void 0),j([ut(`ha-input`)],q.prototype,`_haInput`,void 0)})),en=async()=>{if(!customElements.get(`ha-entity-picker`)){if(!customElements.get(`ha-selector`)){await customElements.whenDefined(`partial-panel-resolver`);let e=document.createElement(`partial-panel-resolver`);e.hass={panels:[{url_path:`tmp`,component_name:`config`}]},e._updateRoutes(),await e.routerOptions.routes.tmp.load(),await customElements.whenDefined(`ha-panel-config`),await document.createElement(`ha-panel-config`).routerOptions.routes.automation.load()}if(!customElements.get(`ha-entity-picker`))try{await(await(await window.loadCardHelpers()).createCardElement({type:`entities`,entities:[]})).constructor.getConfigElement()}catch{}if(!customElements.get(`ha-entity-picker`))try{await Promise.race([customElements.whenDefined(`ha-selector`),new Promise((e,t)=>setTimeout(()=>t(Error(`timeout`)),1e4))]);let e=document.querySelector(`home-assistant`)?.hass,t=document.createElement(`div`);t.style.cssText=`position:fixed;left:-9999px;opacity:0;pointer-events:none`,document.body.appendChild(t);try{let n=document.createElement(`ha-selector`);n.hass=e,n.selector={entity:{}},t.appendChild(n),await Promise.race([customElements.whenDefined(`ha-entity-picker`),new Promise(e=>setTimeout(e,5e3))])}finally{t.remove()}}catch{}if(await customElements.whenDefined(`ha-card`),!customElements.get(`ha-textfield`))try{await Promise.race([customElements.whenDefined(`ha-input`),new Promise((e,t)=>setTimeout(()=>t(Error(`timeout`)),5e3))]);let{HaTextfieldPolyfill:e}=await Promise.resolve().then(()=>($t(),Qt));customElements.get(`ha-textfield`)||customElements.define(`ha-textfield`,e)}catch{}if(!customElements.get(`ha-date-range-picker`))try{await(await window.loadCardHelpers()).createCardElement({type:`energy-date-selection`,entities:[]}),await Promise.race([customElements.whenDefined(`ha-date-range-picker`),new Promise((e,t)=>setTimeout(t,5e3))])}catch{}if(!customElements.get(`ha-chart-base`))try{await(await window.loadCardHelpers()).createCardElement({type:`statistics-graph`,entities:[]}),await Promise.race([customElements.whenDefined(`ha-chart-base`),new Promise((e,t)=>setTimeout(t,5e3))])}catch{}}},tn=3250368e4;y(),C(),M();var nn=class extends v{constructor(...e){super(...e),this.icon=``,this.heading=``,this.intro=``,this.badge=``,this.badgeHint=``}render(){return g`
      <ha-expansion-panel outlined>
        <div slot="header" class="panel-header">
          <ha-icon .icon=${this.icon}></ha-icon>
          <span>${this.heading}</span>
          ${this.badge?g`<rs-badge .label=${this.badge} .hint=${this.badgeHint}></rs-badge>`:_}
        </div>
        <div class="panel-content">
          ${this.intro?g`<p class="section-intro">${this.intro}</p>`:_}
          <slot></slot>
        </div>
      </ha-expansion-panel>
    `}static{this.styles=l`
    :host {
      display: block;
    }

    .panel-header {
      display: flex;
      align-items: center;
      gap: 10px;
      --mdc-icon-size: 20px;
      color: var(--secondary-text-color);
    }

    .panel-header span {
      color: var(--primary-text-color);
      font-weight: 500;
    }

    .panel-content {
      padding: 16px 16px 16px;
    }

    .section-intro {
      color: var(--secondary-text-color);
      font-size: 13px;
      line-height: 1.5;
      margin: 0 0 16px;
      padding: 2px 0 2px 12px;
      border-left: 3px solid var(--divider-color);
    }
  `}};j([x({type:String})],nn.prototype,`icon`,void 0),j([x({type:String})],nn.prototype,`heading`,void 0),j([x({type:String})],nn.prototype,`intro`,void 0),j([x({type:String})],nn.prototype,`badge`,void 0),j([x({type:String})],nn.prototype,`badgeHint`,void 0),nn=j([b(`rs-settings-panel`)],nn),y();var J=class extends v{_fire(e,t){this.dispatchEvent(new CustomEvent(`setting-changed`,{detail:{key:e,value:t},bubbles:!0,composed:!0}))}static{this.settingsBaseStyles=l`
    :host {
      display: block;
    }

    /* Round HA's MDC-based inputs to match the rest of the design */
    ha-textfield,
    ha-select,
    ha-entity-picker,
    ha-combo-box {
      --mdc-shape-small: 8px;
      --mdc-shape-medium: 8px;
      --md-filled-text-field-container-shape: 8px;
      --md-outlined-text-field-container-shape: 8px;
      display: block;
      border-radius: 8px;
      overflow: hidden;
      isolation: isolate;
      clip-path: inset(0 round 8px);
    }

    ha-entity-picker {
      clip-path: inset(0 round 8px 8px 4px 4px);
    }

    .settings-section {
      padding: 16px 0;
      border-top: 1px solid var(--divider-color);
    }
    .settings-section:first-child,
    .settings-section.first {
      border-top: none;
      padding-top: 0;
    }

    .toggle-row {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 16px;
    }
    .toggle-text {
      display: flex;
      flex-direction: column;
      gap: 4px;
      flex: 1;
    }
    .toggle-label {
      font-size: 14px;
      font-weight: 500;
      color: var(--primary-text-color);
    }
    .toggle-hint {
      font-size: 13px;
      color: var(--secondary-text-color);
      line-height: 1.4;
    }

    .threshold-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }
    .threshold-field {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .threshold-field ha-textfield {
      width: 100%;
    }
    .field-hint {
      color: var(--secondary-text-color);
      font-size: 12px;
    }

    @media (max-width: 600px) {
      .threshold-grid {
        grid-template-columns: 1fr;
      }
    }
  `}};y(),C(),M();var rn=class extends J{constructor(...e){super(...e),this.groupByFloor=!1,this.climateControlActive=!0}render(){let e=this.hass.language;return g`
      ${this.hass.floors&&Object.keys(this.hass.floors).length>0?g`<div class="settings-section first">
            <div class="toggle-row">
              <div class="toggle-text">
                <span class="toggle-label">${w(`settings.group_by_floor`,e)}</span>
              </div>
              <ha-switch
                .checked=${this.groupByFloor}
                @change=${e=>this._fire(`groupByFloor`,e.target.checked)}
              ></ha-switch>
            </div>
          </div>`:_}

      <div
        class="settings-section ${this.hass.floors&&Object.keys(this.hass.floors).length>0?``:`first`}"
      >
        <div class="toggle-row">
          <div class="toggle-text">
            <span class="toggle-label">${w(`settings.climate_control_active`,e)}</span>
            <span class="toggle-hint">${w(`settings.climate_control_hint`,e)}</span>
          </div>
          <ha-switch
            .checked=${this.climateControlActive}
            @change=${e=>this._fire(`climateControlActive`,e.target.checked)}
          ></ha-switch>
        </div>
      </div>
    `}static{this.styles=[J.settingsBaseStyles]}};j([x({attribute:!1})],rn.prototype,`hass`,void 0),j([x({type:Boolean})],rn.prototype,`groupByFloor`,void 0),j([x({type:Boolean})],rn.prototype,`climateControlActive`,void 0),rn=j([b(`rs-settings-general`)],rn),y(),C(),M();var an=class extends J{constructor(...e){super(...e),this.outdoorTempSensor=``,this.outdoorHumiditySensor=``,this.weatherEntity=``,this.outdoorUnavailableNotify=!0,this._filterTemperature=e=>e.attributes?.device_class===`temperature`,this._filterHumidity=e=>e.attributes?.device_class===`humidity`}_getSensorValue(e){let t=this.hass.states[e];if(!t||t.state===`unavailable`||t.state===`unknown`)return null;let n=parseFloat(t.state);return isNaN(n)?null:Math.round(n*10)/10}render(){let e=this.hass.language,t=this.outdoorTempSensor?this._getSensorValue(this.outdoorTempSensor):null,n=this.outdoorHumiditySensor?this._getSensorValue(this.outdoorHumiditySensor):null;return g`
      <div class="settings-section first">
        <div class="sensor-grid">
          <div class="sensor-field">
            <ha-entity-picker
              .hass=${this.hass}
              .value=${this.outdoorTempSensor}
              .includeDomains=${[`sensor`]}
              .entityFilter=${this._filterTemperature}
              .label=${w(`settings.outdoor_sensor_label`,e)}
              allow-custom-entity
              @value-changed=${e=>{let t=e.detail?.value??``;t!==this.outdoorTempSensor&&this._fire(`outdoorTempSensor`,t)}}
            ></ha-entity-picker>
            ${t===null?this.outdoorTempSensor?g`<div class="current-value muted">
                    ${w(`settings.outdoor_waiting`,e)}
                  </div>`:_:g`<div class="current-value">
                  ${w(`settings.outdoor_current`,e,{temp:t.toFixed(1),unit:T(this.hass)})}
                </div>`}
          </div>
          <div class="sensor-field">
            <ha-entity-picker
              .hass=${this.hass}
              .value=${this.outdoorHumiditySensor}
              .includeDomains=${[`sensor`]}
              .entityFilter=${this._filterHumidity}
              .label=${w(`settings.outdoor_humidity_label`,e)}
              allow-custom-entity
              @value-changed=${e=>{let t=e.detail?.value??``;t!==this.outdoorHumiditySensor&&this._fire(`outdoorHumiditySensor`,t)}}
            ></ha-entity-picker>
            ${n===null?this.outdoorHumiditySensor?g`<div class="current-value muted">
                    ${w(`settings.outdoor_waiting`,e)}
                  </div>`:_:g`<div class="current-value">
                  ${w(`settings.outdoor_humidity_current`,e,{value:String(n)})}
                </div>`}
          </div>
        </div>
      </div>

      <div class="settings-section">
        <ha-entity-picker
          .hass=${this.hass}
          .value=${this.weatherEntity}
          .includeDomains=${[`weather`]}
          .label=${w(`settings.weather_entity`,e)}
          allow-custom-entity
          @value-changed=${e=>{let t=e.detail?.value??``;t!==this.weatherEntity&&this._fire(`weatherEntity`,t)}}
        ></ha-entity-picker>
        <span class="field-hint">${w(`settings.weather_entity_hint`,e)}</span>
      </div>

      <div class="settings-section">
        <rs-toggle-row
          .label=${w(`settings.outdoor_unavailable_notify`,e)}
          .hint=${w(`settings.outdoor_unavailable_notify_hint`,e)}
          .checked=${this.outdoorUnavailableNotify}
          @toggle-changed=${e=>this._fire(`outdoorUnavailableNotify`,e.detail)}
        ></rs-toggle-row>
      </div>
    `}static{this.styles=[J.settingsBaseStyles,l`
      .sensor-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
      }
      .current-value {
        margin-top: 8px;
        font-size: 14px;
        color: var(--primary-text-color);
      }
      .current-value.muted {
        color: var(--secondary-text-color);
      }

      @media (max-width: 600px) {
        .sensor-grid {
          grid-template-columns: 1fr;
        }
      }
    `]}};j([x({attribute:!1})],an.prototype,`hass`,void 0),j([x({type:String})],an.prototype,`outdoorTempSensor`,void 0),j([x({type:String})],an.prototype,`outdoorHumiditySensor`,void 0),j([x({type:String})],an.prototype,`weatherEntity`,void 0),j([x({type:Boolean})],an.prototype,`outdoorUnavailableNotify`,void 0),an=j([b(`rs-settings-sensors`)],an),y(),C(),M();var on=`https://github.com/snazzybean/roommind/blob/main/docs/control-and-devices.md`,sn=class extends J{constructor(...e){super(...e),this.controlMode=`mpc`,this.comfortWeight=70,this.outdoorCoolingMin=16,this.outdoorHeatingMax=22,this.predictionEnabled=!0,this.scheduleOffAction=`eco`}render(){let e=this.hass.language;return g`
      <div class="settings-section first">
        <p class="hint">${w(`settings.control_mode_hint`,e)}</p>
        <div class="radio-group">
          <label class="radio-option" @click=${()=>this._setControlMode(`mpc`)}>
            <ha-radio name="control_mode" .checked=${this.controlMode===`mpc`}></ha-radio>
            <span>${w(`settings.control_mode_mpc`,e)}</span>
          </label>
          <label class="radio-option" @click=${()=>this._setControlMode(`bangbang`)}>
            <ha-radio name="control_mode" .checked=${this.controlMode===`bangbang`}></ha-radio>
            <span>${w(`settings.control_mode_simple`,e)}</span>
          </label>
        </div>
      </div>

      <div class="settings-section">
        <label class="section-label">${w(`settings.comfort_weight`,e)}</label>
        <div class="slider-row">
          <span class="slider-label">${w(`settings.comfort_weight_efficiency`,e)}</span>
          <input
            type="range"
            min="0"
            max="100"
            step="5"
            .value=${String(this.comfortWeight)}
            @change=${e=>{let t=parseInt(e.target.value,10);!isNaN(t)&&t!==this.comfortWeight&&this._fire(`comfortWeight`,t)}}
          />
          <span class="slider-label">${w(`settings.comfort_weight_comfort`,e)}</span>
        </div>
        <p class="hint helper-text">${w(`settings.comfort_weight_hint`,e)}</p>
        <a class="helper-link" href=${on} target="_blank" rel="noreferrer">
          ${w(`common.learn_more`,e)}
        </a>
      </div>

      <div class="settings-section">
        <p class="hint">${w(`settings.smart_control_hint`,e)}</p>
        <div class="threshold-grid">
          <div class="threshold-field">
            <ha-textfield
              .value=${String(E(this.outdoorCoolingMin,this.hass))}
              .label=${w(`settings.outdoor_cooling_min`,e)}
              .suffix=${T(this.hass)}
              type="number"
              step=${k(this.hass)}
              min=${A(-10,40,this.hass).min}
              max=${A(-10,40,this.hass).max}
              @change=${e=>{let t=parseFloat(e.target.value);isNaN(t)||this._fire(`outdoorCoolingMin`,Tt(t,this.hass))}}
            ></ha-textfield>
            <span class="field-hint">${w(`settings.outdoor_cooling_min_hint`,e)}</span>
          </div>
          <div class="threshold-field">
            <ha-textfield
              .value=${String(E(this.outdoorHeatingMax,this.hass))}
              .label=${w(`settings.outdoor_heating_max`,e)}
              .suffix=${T(this.hass)}
              type="number"
              step=${k(this.hass)}
              min=${A(0,40,this.hass).min}
              max=${A(0,40,this.hass).max}
              @change=${e=>{let t=parseFloat(e.target.value);isNaN(t)||this._fire(`outdoorHeatingMax`,Tt(t,this.hass))}}
            ></ha-textfield>
            <span class="field-hint">${w(`settings.outdoor_heating_max_hint`,e)}</span>
          </div>
        </div>
      </div>

      <div class="settings-section">
        <div class="toggle-row">
          <div class="toggle-text">
            <span class="toggle-label">${w(`settings.prediction_enabled`,e)}</span>
            <span class="toggle-hint">${w(`settings.prediction_enabled_hint`,e)}</span>
          </div>
          <ha-switch
            .checked=${this.predictionEnabled}
            @change=${e=>this._fire(`predictionEnabled`,e.target.checked)}
          ></ha-switch>
        </div>
      </div>

      <div class="settings-section">
        <ha-select
          .label=${w(`schedule.off_action_label`,e)}
          .value=${this.scheduleOffAction}
          .options=${[{value:`eco`,label:w(`schedule.off_action_eco`,e)},{value:`off`,label:w(`schedule.off_action_off`,e)}]}
          fixedMenuPosition
          @selected=${e=>{let t=I(e);t&&t!==this.scheduleOffAction&&this._fire(`scheduleOffAction`,t)}}
          @closed=${e=>e.stopPropagation()}
        >
          <ha-list-item value="eco">${w(`schedule.off_action_eco`,e)}</ha-list-item>
          <ha-list-item value="off">${w(`schedule.off_action_off`,e)}</ha-list-item>
        </ha-select>
      </div>
    `}_setControlMode(e){this.controlMode!==e&&this._fire(`controlMode`,e)}static{this.styles=[J.settingsBaseStyles,l`
      .hint {
        color: var(--secondary-text-color);
        font-size: 13px;
        margin: 0 0 12px;
      }
      .helper-text {
        margin: 10px 0 0;
      }
      .section-label {
        display: block;
        margin-bottom: 8px;
        font-size: 14px;
        color: var(--primary-text-color);
      }

      .radio-group {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .radio-option {
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
      }

      .slider-row {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .slider-row input[type="range"] {
        flex: 1;
        accent-color: var(--primary-color);
      }
      .slider-label {
        font-size: 12px;
        color: var(--secondary-text-color);
        white-space: nowrap;
      }
      .helper-link {
        display: inline-block;
        margin-top: 6px;
        font-size: 12px;
        color: var(--primary-color);
        text-decoration: none;
      }
      .helper-link:hover {
        text-decoration: underline;
      }
    `]}};j([x({attribute:!1})],sn.prototype,`hass`,void 0),j([x({type:String})],sn.prototype,`controlMode`,void 0),j([x({type:Number})],sn.prototype,`comfortWeight`,void 0),j([x({type:Number})],sn.prototype,`outdoorCoolingMin`,void 0),j([x({type:Number})],sn.prototype,`outdoorHeatingMax`,void 0),j([x({type:Boolean})],sn.prototype,`predictionEnabled`,void 0),j([x({type:String})],sn.prototype,`scheduleOffAction`,void 0),sn=j([b(`rs-settings-control`)],sn),y(),C(),M();var cn=class extends J{constructor(...e){super(...e),this.presenceEnabled=!1,this.presencePersons=[],this.presenceAwayAction=`eco`,this.presenceClearsOverride=!1}render(){let e=this.hass.language;return g`
      <div class="toggle-row">
        <div class="toggle-text">
          <span class="toggle-label">${w(`presence.title`,e)}</span>
          <span class="toggle-hint">${w(`presence.hint`,e)}</span>
        </div>
        <ha-switch
          .checked=${this.presenceEnabled}
          @change=${e=>this._fire(`presenceEnabled`,e.target.checked)}
        ></ha-switch>
      </div>

      ${this.presenceEnabled?g`
            <div class="detail-section">
              <span class="field-hint">${w(`presence.hint_detail`,e)}</span>
              ${this.presencePersons.length>0?g`
                    <div class="person-list">
                      ${this.presencePersons.map(e=>g`
                          <div class="person-row">
                            <ha-icon
                              icon="mdi:account"
                              style="--mdc-icon-size: 18px; color: var(--secondary-text-color)"
                            ></ha-icon>
                            <span class="person-name">${this.hass.states[e]?.attributes?.friendly_name??e.split(`.`).slice(1).join(`.`)}</span>
                            <ha-icon-button
                              .path=${`M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z`}
                              @click=${()=>this._fire(`presencePersons`,this.presencePersons.filter(t=>t!==e))}
                            ></ha-icon-button>
                          </div>
                        `)}
                    </div>
                  `:_}
              <ha-entity-picker
                .hass=${this.hass}
                .includeDomains=${[`person`,`device_tracker`,`binary_sensor`,`input_boolean`]}
                .entityFilter=${e=>!this.presencePersons.includes(e.entity_id)}
                .label=${w(`presence.add_entity`,e)}
                @value-changed=${e=>{let t=e.detail?.value;t&&!this.presencePersons.includes(t)&&this._fire(`presencePersons`,[...this.presencePersons,t]);let n=e.target;n.value=``}}
              ></ha-entity-picker>
              <ha-select
                .label=${w(`presence.away_action_label`,e)}
                .value=${this.presenceAwayAction}
                .options=${[{value:`eco`,label:w(`presence.away_action_eco`,e)},{value:`off`,label:w(`presence.away_action_off`,e)}]}
                fixedMenuPosition
                @selected=${e=>{let t=I(e);t&&t!==this.presenceAwayAction&&this._fire(`presenceAwayAction`,t)}}
                @closed=${e=>e.stopPropagation()}
                style="margin-top: 8px"
              >
                <ha-list-item value="eco">${w(`presence.away_action_eco`,e)}</ha-list-item>
                <ha-list-item value="off">${w(`presence.away_action_off`,e)}</ha-list-item>
              </ha-select>
              <div class="toggle-row">
                <div class="toggle-text">
                  <span class="toggle-label">${w(`presence.clears_override_label`,e)}</span>
                  <span class="toggle-hint">${w(`presence.clears_override_hint`,e)}</span>
                </div>
                <ha-switch
                  .checked=${this.presenceClearsOverride}
                  @change=${e=>this._fire(`presenceClearsOverride`,e.target.checked)}
                ></ha-switch>
              </div>
            </div>
          `:_}
    `}static{this.styles=[J.settingsBaseStyles,l`
      .detail-section {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-top: 12px;
      }

      .person-list {
        display: flex;
        flex-direction: column;
        gap: 2px;
      }
      .person-row {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 4px 8px 4px 12px;
        border-radius: 8px;
        background: rgba(0, 0, 0, 0.04);
      }
      .person-name {
        flex: 1;
        font-size: 14px;
        font-weight: 500;
      }
    `]}};j([x({attribute:!1})],cn.prototype,`hass`,void 0),j([x({type:Boolean})],cn.prototype,`presenceEnabled`,void 0),j([x({type:Array})],cn.prototype,`presencePersons`,void 0),j([x({type:String})],cn.prototype,`presenceAwayAction`,void 0),j([x({type:Boolean})],cn.prototype,`presenceClearsOverride`,void 0),cn=j([b(`rs-settings-presence`)],cn),y(),C(),M();var ln=class extends J{constructor(...e){super(...e),this.vacationActive=!1,this.vacationTemp=15,this.vacationUntil=``}render(){let e=this.hass.language;return g`
      <div class="toggle-row">
        <div class="toggle-text">
          <span class="toggle-label">${w(`vacation.title`,e)}</span>
          <span class="toggle-hint">${w(`vacation.hint`,e)}</span>
        </div>
        <ha-switch
          .checked=${this.vacationActive}
          @change=${e=>{let t=e.target.checked;this._fire(`vacationActive`,t),t||this._fire(`vacationUntil`,``)}}
        ></ha-switch>
      </div>

      ${this.vacationActive?g`
            <div class="threshold-grid" style="margin-top: 12px">
              <div class="threshold-field">
                <ha-textfield
                  .value=${this.vacationUntil}
                  .label=${w(`vacation.end_date`,e)}
                  type="datetime-local"
                  @change=${e=>this._fire(`vacationUntil`,e.target.value)}
                ></ha-textfield>
              </div>
              <div class="threshold-field">
                <ha-textfield
                  .value=${String(E(this.vacationTemp,this.hass))}
                  .label=${w(`vacation.setback_temp`,e)}
                  .suffix=${T(this.hass)}
                  type="number"
                  step=${k(this.hass)}
                  min=${A(5,25,this.hass).min}
                  max=${A(5,25,this.hass).max}
                  @change=${e=>{let t=parseFloat(e.target.value);isNaN(t)||this._fire(`vacationTemp`,Tt(t,this.hass))}}
                ></ha-textfield>
              </div>
            </div>
          `:_}
    `}static{this.styles=[J.settingsBaseStyles]}};j([x({attribute:!1})],ln.prototype,`hass`,void 0),j([x({type:Boolean})],ln.prototype,`vacationActive`,void 0),j([x({type:Number})],ln.prototype,`vacationTemp`,void 0),j([x({type:String})],ln.prototype,`vacationUntil`,void 0),ln=j([b(`rs-settings-vacation`)],ln),y(),C(),M();var un=class extends J{constructor(...e){super(...e),this.valveProtectionEnabled=!1,this.valveProtectionInterval=7}render(){let e=this.hass.language;return g`
      <div class="toggle-row">
        <div class="toggle-text">
          <span class="toggle-label">${w(`valve_protection.title`,e)}</span>
          <span class="toggle-hint">${w(`valve_protection.hint`,e)}</span>
        </div>
        <ha-switch
          .checked=${this.valveProtectionEnabled}
          @change=${e=>this._fire(`valveProtectionEnabled`,e.target.checked)}
        ></ha-switch>
      </div>

      ${this.valveProtectionEnabled?g`
            <div class="threshold-grid" style="margin-top: 12px">
              <div class="threshold-field">
                <ha-textfield
                  .value=${String(this.valveProtectionInterval)}
                  .label=${w(`valve_protection.interval_label`,e)}
                  .suffix=${w(`valve_protection.interval_suffix`,e)}
                  type="number"
                  step="1"
                  min="1"
                  max="90"
                  @change=${e=>{let t=parseInt(e.target.value,10);!isNaN(t)&&t>=1&&t<=90&&this._fire(`valveProtectionInterval`,t)}}
                ></ha-textfield>
                <span class="field-hint">${w(`valve_protection.interval_hint`,e)}</span>
              </div>
            </div>
          `:_}
    `}static{this.styles=[J.settingsBaseStyles]}};j([x({attribute:!1})],un.prototype,`hass`,void 0),j([x({type:Boolean})],un.prototype,`valveProtectionEnabled`,void 0),j([x({type:Number})],un.prototype,`valveProtectionInterval`,void 0),un=j([b(`rs-settings-valve`)],un),y(),C(),M();var dn=class extends v{constructor(...e){super(...e),this.label=``,this.confirmMessage=``,this.disabled=!1,this.destructive=!1}static{this.styles=l`
    :host {
      display: block;
    }

    .confirm-btn {
      background: transparent;
      border: 1px solid var(--divider-color);
      border-radius: 8px;
      padding: 8px 16px;
      font-size: 14px;
      font-family: inherit;
      cursor: pointer;
      color: var(--primary-text-color);
      transition: all 0.2s;
    }

    .confirm-btn.destructive {
      border-color: var(--error-color);
      color: var(--error-color);
    }

    .confirm-btn.destructive:hover:not([disabled]) {
      background: var(--error-color);
      color: #fff;
    }

    .confirm-btn[disabled] {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `}render(){return g`
      <button
        class="confirm-btn ${this.destructive?`destructive`:``}"
        ?disabled=${this.disabled}
        @click=${this._onClick}
      >
        ${this.label}
      </button>
    `}_onClick(){this.disabled||this.confirmMessage&&!confirm(this.confirmMessage)||this.dispatchEvent(new CustomEvent(`confirmed`,{bubbles:!0,composed:!0}))}};j([x({type:String})],dn.prototype,`label`,void 0),j([x({type:String})],dn.prototype,`confirmMessage`,void 0),j([x({type:Boolean})],dn.prototype,`disabled`,void 0),j([x({type:Boolean})],dn.prototype,`destructive`,void 0),dn=j([b(`rs-confirm-button`)],dn),y(),C(),M();var fn=class extends v{constructor(...e){super(...e),this.compressorGroups=[],this._memberFilter=e=>{let t=e.entity_id;if(t.substring(t.indexOf(`.`)+1).startsWith(`roommind_`))return!1;for(let e of this.compressorGroups)if(e.members.includes(t)||e.master_entity===t)return!1;return!0},this._masterFilter=e=>{let t=e.entity_id;if(t.substring(t.indexOf(`.`)+1).startsWith(`roommind_`))return!1;for(let e of this.compressorGroups)if(e.members.includes(t)||e.master_entity===t)return!1;return!0}}static{this.styles=[R,l`
      :host {
        display: block;
      }
      .group-card {
        border: 1px solid var(--divider-color);
        border-radius: 8px;
        padding: 16px;
        margin-bottom: 16px;
      }
      .member-list {
        display: flex;
        flex-direction: column;
        gap: 4px;
        margin: 8px 0;
      }
      .member-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 4px 8px;
        background: var(--card-background-color);
        border-radius: 4px;
      }
      .member-name {
        font-size: 14px;
        flex: 1;
      }
      .member-area {
        font-size: 12px;
        color: var(--secondary-text-color);
        margin-left: 4px;
      }
      .member-missing {
        color: var(--error-color);
      }
      .field-row {
        margin-top: 12px;
      }
      .field-hint {
        font-size: 12px;
        color: var(--secondary-text-color);
        margin-top: 4px;
      }
      .section-label {
        font-size: 14px;
        font-weight: 500;
        margin-top: 12px;
        margin-bottom: 4px;
      }
      .add-button {
        margin-top: 12px;
      }
      .delete-row {
        margin-top: 16px;
        display: flex;
        justify-content: flex-end;
      }
      .no-groups {
        color: var(--secondary-text-color);
        font-size: 14px;
        padding: 8px 0;
      }
      ha-textfield {
        width: 100%;
      }
      ha-entity-picker {
        width: 100%;
      }
      .number-fields {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
        margin-top: 12px;
      }
      @media (max-width: 500px) {
        .number-fields {
          grid-template-columns: 1fr;
        }
      }
    `]}render(){let e=this.hass.language;return g`
      ${this.compressorGroups.length===0?g`<div class="no-groups">${w(`compressor.no_groups`,e)}</div>`:this.compressorGroups.map((e,t)=>this._renderGroup(e,t))}
      <ha-button class="add-button" @click=${this._addGroup}>
        <ha-icon icon="mdi:plus" slot="icon"></ha-icon>
        ${w(`compressor.add_group`,e)}
      </ha-button>
    `}_renderGroup(e,t){let n=this.hass.language;return g`
      <div class="group-card">
        <ha-textfield
          .value=${e.name}
          .label=${w(`compressor.group_name`,n)}
          @change=${e=>{let n=e.target.value;this._updateGroup(t,`name`,n)}}
        ></ha-textfield>

        <div class="section-label">${w(`compressor.members`,n)}</div>
        ${e.members.length>0?g`
              <div class="member-list">
                ${e.members.map(e=>this._renderMember(e,t))}
              </div>
            `:_}
        <ha-entity-picker
          .hass=${this.hass}
          .value=${``}
          .includeDomains=${[`climate`]}
          .entityFilter=${this._memberFilter}
          @value-changed=${e=>{let n=e.detail?.value??``;if(!n)return;let r=[...this.compressorGroups];r[t]={...r[t],members:[...r[t].members,n]},this._fire(r);let i=e.target;i&&(i.value=``)}}
        ></ha-entity-picker>
        <div class="field-hint">${w(`compressor.members_hint`,n)}</div>

        <div class="number-fields">
          <div>
            <ha-textfield
              type="number"
              .value=${String(e.min_run_minutes)}
              .label=${w(`compressor.min_run`,n)}
              .suffix=${w(`compressor.min_run_suffix`,n)}
              min="1"
              max="60"
              step="1"
              @change=${e=>{let n=parseInt(e.target.value,10);!isNaN(n)&&n>=1&&n<=60&&this._updateGroup(t,`min_run_minutes`,n)}}
            ></ha-textfield>
            <div class="field-hint">${w(`compressor.min_run_hint`,n)}</div>
          </div>
          <div>
            <ha-textfield
              type="number"
              .value=${String(e.min_off_minutes)}
              .label=${w(`compressor.min_off`,n)}
              .suffix=${w(`compressor.min_off_suffix`,n)}
              min="1"
              max="30"
              step="1"
              @change=${e=>{let n=parseInt(e.target.value,10);!isNaN(n)&&n>=1&&n<=30&&this._updateGroup(t,`min_off_minutes`,n)}}
            ></ha-textfield>
            <div class="field-hint">${w(`compressor.min_off_hint`,n)}</div>
          </div>
        </div>

        <div class="section-label">${w(`compressor.master_entity`,n)}</div>
        <ha-entity-picker
          .hass=${this.hass}
          .value=${e.master_entity||``}
          .includeDomains=${[`climate`]}
          .entityFilter=${this._masterFilter}
          @value-changed=${e=>{this._updateGroup(t,`master_entity`,e.detail?.value??``)}}
        ></ha-entity-picker>
        <div class="field-hint">${w(`compressor.master_entity_hint`,n)}</div>

        <div class="field-row">
          <ha-formfield .label=${w(`compressor.enforce_uniform_mode`,n)}>
            <ha-switch
              .checked=${e.enforce_uniform_mode||!1}
              @change=${e=>{this._updateGroup(t,`enforce_uniform_mode`,e.target.checked)}}
            ></ha-switch>
          </ha-formfield>
          <div class="field-hint">${w(`compressor.enforce_uniform_mode_hint`,n)}</div>
        </div>

        ${e.master_entity||e.enforce_uniform_mode?g`
              <div class="field-row">
                <ha-select
                  .label=${w(`compressor.conflict_resolution`,n)}
                  .value=${e.conflict_resolution||`heating_priority`}
                  .options=${[{value:`heating_priority`,label:w(`compressor.conflict_heating_priority`,n)},{value:`cooling_priority`,label:w(`compressor.conflict_cooling_priority`,n)},{value:`majority`,label:w(`compressor.conflict_majority`,n)},{value:`outdoor_temp`,label:w(`compressor.conflict_outdoor_temp`,n)}]}
                  @selected=${e=>{let n=I(e);n&&this._updateGroup(t,`conflict_resolution`,n)}}
                  @closed=${e=>e.stopPropagation()}
                  fixedMenuPosition
                  style="width: 100%;"
                >
                </ha-select>
                <div class="field-hint">${w(`compressor.conflict_resolution_hint`,n)}</div>
              </div>
            `:_}

        <div class="field-row">
          <ha-entity-picker
            .hass=${this.hass}
            .value=${e.action_script||``}
            .includeDomains=${[`script`]}
            .label=${w(`compressor.action_script`,n)}
            @value-changed=${e=>{this._updateGroup(t,`action_script`,e.detail?.value??``)}}
          ></ha-entity-picker>
          <div class="field-hint">${w(`compressor.action_script_hint`,n)}</div>
        </div>

        <div class="delete-row">
          <rs-confirm-button
            .label=${w(`compressor.delete`,n)}
            .confirmMessage=${w(`compressor.delete_confirm`,n).replace(`{name}`,e.name||`#${t+1}`)}
            destructive
            @confirmed=${()=>{this._fire(this.compressorGroups.filter((e,n)=>n!==t))}}
          ></rs-confirm-button>
        </div>
      </div>
    `}_renderMember(e,t){let n=this.hass.states[e],r=!n,i=n?.attributes?.friendly_name||e,a=this.hass.entities[e]?.area_id,o=a?this.hass.areas[a]?.name:void 0;return g`
      <div class="member-row">
        <span class="member-name ${r?`member-missing`:``}"
          >${i}${o?g`<span class="member-area">(${o})</span>`:_}</span
        >
        <ha-icon-button
          .path=${`M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z`}
          @click=${()=>{let n=[...this.compressorGroups];n[t]={...n[t],members:n[t].members.filter(t=>t!==e)},this._fire(n)}}
        ></ha-icon-button>
      </div>
    `}_updateGroup(e,t,n){let r=[...this.compressorGroups];r[e]={...r[e],[t]:n},this._fire(r)}_addGroup(){this._fire([...this.compressorGroups,{id:self.crypto?.randomUUID?.()??`${Date.now()}-${Math.random().toString(36).slice(2)}`,name:``,members:[],min_run_minutes:15,min_off_minutes:5,master_entity:``,conflict_resolution:`heating_priority`,action_script:``,enforce_uniform_mode:!1}])}_fire(e){this.dispatchEvent(new CustomEvent(`setting-changed`,{detail:{key:`compressorGroups`,value:e},bubbles:!0,composed:!0}))}};j([x({attribute:!1})],fn.prototype,`hass`,void 0),j([x({type:Array})],fn.prototype,`compressorGroups`,void 0),fn=j([b(`rs-settings-compressor`)],fn),y(),C(),M();var pn=class extends J{constructor(...e){super(...e),this.moldDetectionEnabled=!1,this.moldHumidityThreshold=70,this.moldSustainedMinutes=30,this.moldPreventionEnabled=!1,this.moldPreventionIntensity=`medium`}render(){let e=this.hass.language;return g`
      <!-- Detection section -->
      <div class="settings-section first">
        <div class="toggle-row">
          <div class="toggle-text">
            <span class="toggle-label">
              <ha-icon
                icon="mdi:bell-alert"
                style="--mdc-icon-size: 18px; vertical-align: middle; margin-right: 4px"
              ></ha-icon>
              ${w(`mold.detection`,e)}
            </span>
            <span class="toggle-hint">${w(`mold.detection_desc`,e)}</span>
          </div>
          <ha-switch
            .checked=${this.moldDetectionEnabled}
            @change=${e=>this._fire(`moldDetectionEnabled`,e.target.checked)}
          ></ha-switch>
        </div>
        ${this.moldDetectionEnabled?g`
              <div class="threshold-grid" style="margin-top: 12px">
                <div class="threshold-field">
                  <ha-textfield
                    .value=${String(this.moldHumidityThreshold)}
                    .label=${w(`mold.threshold`,e)}
                    .suffix=${`%`}
                    type="number"
                    step="1"
                    min="50"
                    max="90"
                    @change=${e=>{let t=parseFloat(e.target.value);!isNaN(t)&&t>=50&&t<=90&&this._fire(`moldHumidityThreshold`,t)}}
                  ></ha-textfield>
                  <span class="field-hint">${w(`mold.threshold_hint`,e)}</span>
                </div>
                <div class="threshold-field">
                  <ha-textfield
                    .value=${String(this.moldSustainedMinutes)}
                    .label=${w(`mold.sustained`,e)}
                    .suffix=${`min`}
                    type="number"
                    step="5"
                    min="5"
                    max="120"
                    @change=${e=>{let t=parseInt(e.target.value,10);!isNaN(t)&&t>=5&&t<=120&&this._fire(`moldSustainedMinutes`,t)}}
                  ></ha-textfield>
                  <span class="field-hint">${w(`mold.sustained_hint`,e)}</span>
                </div>
              </div>
            `:_}
      </div>

      <!-- Prevention section -->
      <div class="settings-section">
        <div class="toggle-row">
          <div class="toggle-text">
            <span class="toggle-label">
              <ha-icon
                icon="mdi:shield-check"
                style="--mdc-icon-size: 18px; vertical-align: middle; margin-right: 4px"
              ></ha-icon>
              ${w(`mold.prevention`,e)}
            </span>
            <span class="toggle-hint">${w(`mold.prevention_desc`,e)}</span>
          </div>
          <ha-switch
            .checked=${this.moldPreventionEnabled}
            @change=${e=>this._fire(`moldPreventionEnabled`,e.target.checked)}
          ></ha-switch>
        </div>
        ${this.moldPreventionEnabled?g`
              <div style="margin-top: 12px; display: flex; flex-direction: column; gap: 4px;">
                <ha-select
                  style="width: 100%;"
                  .value=${this.moldPreventionIntensity}
                  .label=${w(`mold.intensity`,e)}
                  .options=${[{value:`light`,label:w(`mold.intensity_light`,e,{delta:String(D(1,this.hass)),unit:T(this.hass)})},{value:`medium`,label:w(`mold.intensity_medium`,e,{delta:String(D(2,this.hass)),unit:T(this.hass)})},{value:`strong`,label:w(`mold.intensity_strong`,e,{delta:String(D(3,this.hass)),unit:T(this.hass)})}]}
                  fixedMenuPosition
                  @selected=${e=>{let t=I(e);t&&t!==this.moldPreventionIntensity&&this._fire(`moldPreventionIntensity`,t)}}
                  @closed=${e=>e.stopPropagation()}
                >
                  <ha-list-item value="light"
                    >${w(`mold.intensity_light`,e,{delta:String(D(1,this.hass)),unit:T(this.hass)})}</ha-list-item
                  >
                  <ha-list-item value="medium"
                    >${w(`mold.intensity_medium`,e,{delta:String(D(2,this.hass)),unit:T(this.hass)})}</ha-list-item
                  >
                  <ha-list-item value="strong"
                    >${w(`mold.intensity_strong`,e,{delta:String(D(3,this.hass)),unit:T(this.hass)})}</ha-list-item
                  >
                </ha-select>
                <span class="field-hint">${w(`mold.intensity_hint`,e)}</span>
              </div>
            `:_}
      </div>
    `}static{this.styles=[J.settingsBaseStyles]}};j([x({attribute:!1})],pn.prototype,`hass`,void 0),j([x({type:Boolean})],pn.prototype,`moldDetectionEnabled`,void 0),j([x({type:Number})],pn.prototype,`moldHumidityThreshold`,void 0),j([x({type:Number})],pn.prototype,`moldSustainedMinutes`,void 0),j([x({type:Boolean})],pn.prototype,`moldPreventionEnabled`,void 0),j([x({type:String})],pn.prototype,`moldPreventionIntensity`,void 0),pn=j([b(`rs-settings-mold`)],pn),y(),C(),M();var mn=class extends J{constructor(...e){super(...e),this.notificationsEnabled=!0,this.notificationTargets=[],this.notificationCooldown=60,this.moldPreventionEnabled=!1,this.moldPreventionNotify=!1}render(){let e=this.hass.language;return g`
      <div class="toggle-row">
        <div class="toggle-text">
          <span class="toggle-label">${w(`notifications.enabled`,e)}</span>
          <span class="toggle-hint">${w(`notifications.enabled_hint`,e)}</span>
        </div>
        <ha-switch
          .checked=${this.notificationsEnabled}
          @change=${e=>this._fire(`moldNotificationsEnabled`,e.target.checked)}
        ></ha-switch>
      </div>

      ${this.notificationsEnabled?g`
            <div class="detail-section">
              <p class="hint">${w(`notifications.desc`,e)}</p>

              <div class="target-list">
                ${this.notificationTargets.map((t,n)=>g`
                    <div class="target-card">
                      <div class="target-header">
                        <ha-icon
                          icon="mdi:bell"
                          style="--mdc-icon-size: 18px; color: var(--secondary-text-color)"
                        ></ha-icon>
                        <span>${t.entity_id?this.hass.states[t.entity_id]?.attributes?.friendly_name??t.entity_id.replace(`notify.`,``):w(`notifications.target_unnamed`,e)}</span>
                        <ha-icon-button
                          .path=${`M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z`}
                          @click=${()=>{this._fire(`moldNotificationTargets`,this.notificationTargets.filter((e,t)=>t!==n))}}
                        ></ha-icon-button>
                      </div>
                      <div class="target-detail">
                        <ha-entity-picker
                          .hass=${this.hass}
                          .value=${t.person_entity}
                          .includeDomains=${[`person`]}
                          .label=${w(`notifications.target_person`,e)}
                          allow-custom-entity
                          @value-changed=${e=>{let t=[...this.notificationTargets];t[n]={...t[n],person_entity:e.detail?.value??``},this._fire(`moldNotificationTargets`,t)}}
                        ></ha-entity-picker>
                        <ha-select
                          .value=${t.notify_when}
                          .options=${[{value:`always`,label:w(`notifications.target_when_always`,e)},{value:`home_only`,label:w(`notifications.target_when_home`,e)}]}
                          fixedMenuPosition
                          @selected=${e=>{let t=I(e);if(!t)return;let r=[...this.notificationTargets];r[n]={...r[n],notify_when:t},this._fire(`moldNotificationTargets`,r)}}
                          @closed=${e=>e.stopPropagation()}
                        >
                          <ha-list-item value="always"
                            >${w(`notifications.target_when_always`,e)}</ha-list-item
                          >
                          <ha-list-item value="home_only"
                            >${w(`notifications.target_when_home`,e)}</ha-list-item
                          >
                        </ha-select>
                      </div>
                    </div>
                  `)}
              </div>

              <div style="margin-top: 8px">
                <ha-entity-picker
                  .hass=${this.hass}
                  .value=${``}
                  .includeDomains=${[`notify`]}
                  .label=${w(`notifications.add_target_label`,e)}
                  allow-custom-entity
                  @value-changed=${e=>{let t=e.detail?.value??``;if(!t)return;this._fire(`moldNotificationTargets`,[...this.notificationTargets,{entity_id:t,person_entity:``,notify_when:`always`}]);let n=e.target;n&&(n.value=``)}}
                ></ha-entity-picker>
                <span class="field-hint">${w(`notifications.add_target_hint`,e)}</span>
              </div>

              <div class="threshold-grid" style="margin-top: 12px">
                <div class="threshold-field">
                  <ha-textfield
                    .value=${String(this.notificationCooldown)}
                    .label=${w(`notifications.cooldown`,e)}
                    .suffix=${`min`}
                    type="number"
                    step="5"
                    min="10"
                    max="1440"
                    @change=${e=>{let t=parseInt(e.target.value,10);!isNaN(t)&&t>=10&&t<=1440&&this._fire(`moldNotificationCooldown`,t)}}
                  ></ha-textfield>
                  <span class="field-hint">${w(`notifications.cooldown_hint`,e)}</span>
                </div>
              </div>

              ${this.moldPreventionEnabled?g`
                    <div class="toggle-row" style="margin-top: 12px">
                      <div class="toggle-text">
                        <span class="toggle-label"
                          >${w(`notifications.mold_prevention_notify`,e)}</span
                        >
                        <span class="toggle-hint"
                          >${w(`notifications.mold_prevention_notify_hint`,e)}</span
                        >
                      </div>
                      <ha-switch
                        .checked=${this.moldPreventionNotify}
                        @change=${e=>this._fire(`moldPreventionNotify`,e.target.checked)}
                      ></ha-switch>
                    </div>
                  `:_}
            </div>
          `:_}
    `}static{this.styles=[J.settingsBaseStyles,l`
      .hint {
        color: var(--secondary-text-color);
        font-size: 13px;
        margin: 12px 0;
        line-height: 1.4;
      }
      .detail-section {
        margin-top: 4px;
      }
      .field-hint {
        color: var(--secondary-text-color);
        font-size: 12px;
      }

      .target-list {
        display: flex;
        flex-direction: column;
        gap: 2px;
      }
      .target-card {
        display: flex;
        flex-direction: column;
        gap: 4px;
        padding: 8px 8px 8px 12px;
        border-radius: 8px;
        background: rgba(0, 0, 0, 0.04);
      }
      .target-header {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .target-header span {
        flex: 1;
        font-size: 14px;
        font-weight: 500;
      }
      .target-detail {
        display: flex;
        gap: 8px;
        align-items: center;
        padding-left: 26px;
      }
      .target-detail ha-entity-picker {
        flex: 1;
      }
      .target-detail ha-select {
        min-width: 120px;
      }

      @media (max-width: 600px) {
        .target-detail {
          flex-direction: column;
          padding-left: 0;
        }
      }
    `]}};j([x({attribute:!1})],mn.prototype,`hass`,void 0),j([x({type:Boolean})],mn.prototype,`notificationsEnabled`,void 0),j([x({type:Array})],mn.prototype,`notificationTargets`,void 0),j([x({type:Number})],mn.prototype,`notificationCooldown`,void 0),j([x({type:Boolean})],mn.prototype,`moldPreventionEnabled`,void 0),j([x({type:Boolean})],mn.prototype,`moldPreventionNotify`,void 0),mn=j([b(`rs-settings-notifications`)],mn),y(),C(),M();var hn=250,gn=class extends J{constructor(...e){super(...e),this.rooms={},this.learningDisabledRooms=[],this.boostAppliedAt={},this.roomsLive={},this._showLearningExceptions=!1,this._boostSelectedRoom=``}render(){let e=this.hass.language,t=Object.entries(this.rooms).map(([e])=>({areaId:e,name:this.hass.areas?.[e]?.name??e})).sort((e,t)=>e.name.localeCompare(t.name)),n=Object.keys(this.rooms),r=n.length===0||this.learningDisabledRooms.length<n.length,i=this.learningDisabledRooms.filter(e=>n.includes(e)).length;return g`
      <!-- Learning toggle -->
      <div class="settings-section first">
        <div class="toggle-row">
          <div class="toggle-text">
            <span class="toggle-label">${w(`settings.learning_title`,e)}</span>
            <span class="toggle-hint">${w(`settings.learning_hint`,e)}</span>
          </div>
          <ha-switch
            .checked=${r}
            @change=${e=>{let t=e.target.checked;this._fire(`learningDisabledRooms`,t?[]:Object.keys(this.rooms)),t||(this._showLearningExceptions=!1)}}
          ></ha-switch>
        </div>
        ${r&&t.length>0?g`
              <button
                class="exceptions-link"
                @click=${()=>{this._showLearningExceptions=!this._showLearningExceptions}}
              >
                <span
                  >${i>0?`${i} ${w(i===1?`settings.learning_room_paused`:`settings.learning_rooms_paused`,e)}`:w(`settings.learning_exceptions`,e)}</span
                >
                <ha-icon
                  icon=${this._showLearningExceptions?`mdi:chevron-up`:`mdi:chevron-down`}
                  style="--mdc-icon-size: 16px"
                ></ha-icon>
              </button>
              ${this._showLearningExceptions?g`
                    <div class="room-toggles">
                      ${t.map(e=>g`
                          <div class="room-toggle-row">
                            <span class="room-toggle-name">${e.name}</span>
                            <ha-switch
                              .checked=${!this.learningDisabledRooms.includes(e.areaId)}
                              @change=${t=>{let n=!t.target.checked,r=new Set(this.learningDisabledRooms);n?r.add(e.areaId):r.delete(e.areaId),this._fire(`learningDisabledRooms`,[...r])}}
                            ></ha-switch>
                          </div>
                        `)}
                    </div>
                  `:_}
            `:_}
      </div>

      <!-- Boost learning -->
      <div class="settings-section">
        <span class="toggle-label">${w(`settings.boost_title`,e)}</span>
        <p class="hint">${w(`settings.boost_hint`,e)}</p>

        ${t.length>0?g`
              <div class="room-select-row">
                <ha-select
                  .value=${this._boostSelectedRoom}
                  .label=${w(`settings.boost_room_select`,e)}
                  .options=${t.map(e=>({value:e.areaId,label:e.name}))}
                  fixedMenuPosition
                  @selected=${e=>{this._boostSelectedRoom=I(e)}}
                  @closed=${e=>e.stopPropagation()}
                >
                  ${t.map(e=>g`<ha-list-item value=${e.areaId}>${e.name}</ha-list-item>`)}
                </ha-select>
                ${this._boostSelectedRoom?g`<ha-icon-button
                      .path=${`M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z`}
                      @click=${()=>{this._boostSelectedRoom=``}}
                    ></ha-icon-button>`:_}
                ${this._boostSelectedRoom&&this._isCooldown(this._boostSelectedRoom)?g`<span class="boost-status">
                      <ha-icon icon="mdi:check-circle-outline"></ha-icon>
                      ${w(`settings.boost_cooldown`,e)}
                    </span>`:g`<button
                      class="boost-btn"
                      ?disabled=${!this._boostSelectedRoom||this._isCooldown(this._boostSelectedRoom)}
                      @click=${()=>this._boostSelectedRoom&&this._boostLearning(this._boostSelectedRoom)}
                    >
                      <ha-icon icon="mdi:lightning-bolt"></ha-icon>
                      ${w(`settings.boost_btn`,e)}
                    </button>`}
              </div>
            `:g`<p class="hint">${w(`settings.boost_no_rooms`,e)}</p>`}
      </div>
    `}_isCooldown(e){let t=this.roomsLive?.[e]?.n_observations??0,n=this.boostAppliedAt[e];return n!==void 0&&t-n<hn}async _boostLearning(e){try{L(this,`saving`);let t=await this.hass.callWS({type:`roommind/model/boost_learning`,area_id:e});L(this,`saved`),this.dispatchEvent(new CustomEvent(`boost-applied`,{detail:{area_id:e,n_observations:t.n_observations},bubbles:!0,composed:!0}))}catch{L(this,`error`)}}static{this.styles=[J.settingsBaseStyles,l`
      .hint {
        color: var(--secondary-text-color);
        font-size: 13px;
        margin: 4px 0 12px;
        line-height: 1.4;
      }

      .exceptions-link {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        background: none;
        border: none;
        padding: 8px 0 0;
        margin: 0;
        cursor: pointer;
        font-size: 13px;
        color: var(--primary-color);
        font-family: inherit;
      }
      .exceptions-link:hover {
        text-decoration: underline;
      }

      .room-toggles {
        display: flex;
        flex-direction: column;
        gap: 4px;
        margin-top: 12px;
      }
      .room-toggle-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 4px 0;
      }
      .room-toggle-name {
        font-size: 14px;
        color: var(--primary-text-color);
      }

      .room-select-row {
        display: flex;
        align-items: center;
        gap: 12px;
      }
      .room-select-row ha-select {
        flex: 1;
      }

      .boost-btn {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 8px 14px;
        border: 1px solid var(--primary-color);
        border-radius: 8px;
        background: transparent;
        color: var(--primary-color);
        font-size: 13px;
        font-family: inherit;
        cursor: pointer;
        transition: background 0.15s;
        --mdc-icon-size: 16px;
        white-space: nowrap;
      }
      .boost-btn:hover {
        background: rgba(var(--rgb-primary-color), 0.08);
      }
      .boost-btn:disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }
      .boost-btn:disabled:hover {
        background: transparent;
      }

      .boost-status {
        display: flex;
        align-items: center;
        gap: 6px;
        color: var(--success-color, #4caf50);
        font-size: 13px;
        --mdc-icon-size: 16px;
        white-space: nowrap;
      }
    `]}};j([x({attribute:!1})],gn.prototype,`hass`,void 0),j([x({attribute:!1})],gn.prototype,`rooms`,void 0),j([x({type:Array})],gn.prototype,`learningDisabledRooms`,void 0),j([x({attribute:!1})],gn.prototype,`boostAppliedAt`,void 0),j([x({attribute:!1})],gn.prototype,`roomsLive`,void 0),j([S()],gn.prototype,`_showLearningExceptions`,void 0),j([S()],gn.prototype,`_boostSelectedRoom`,void 0),gn=j([b(`rs-settings-learning`)],gn),y(),C(),M();var _n=class extends J{constructor(...e){super(...e),this.rooms={},this._resetSelectedRoom=``}render(){let e=this.hass.language,t=Object.entries(this.rooms).map(([e])=>({areaId:e,name:this.hass.areas?.[e]?.name??e})).sort((e,t)=>e.name.localeCompare(t.name));return g`
      <div class="settings-section first">
        <div class="reset-row">
          <div class="reset-text">
            <span class="toggle-label">${w(`settings.reset_all_label`,e)}</span>
            <span class="toggle-hint">${w(`settings.reset_all_hint`,e)}</span>
          </div>
          <button class="reset-btn" @click=${this._resetAllModels}>
            <ha-icon icon="mdi:restart-alert"></ha-icon>
            ${w(`settings.reset_all_btn`,e)}
          </button>
        </div>
      </div>

      <div class="settings-section">
        <div class="reset-text" style="margin-bottom: 12px">
          <span class="toggle-label">${w(`settings.reset_room_label`,e)}</span>
          <span class="toggle-hint">${w(`settings.reset_room_hint`,e)}</span>
        </div>
        ${t.length>0?g`
              <div class="reset-room-row">
                <ha-select
                  .value=${this._resetSelectedRoom}
                  .label=${w(`settings.reset_room_select`,e)}
                  .options=${t.map(e=>({value:e.areaId,label:e.name}))}
                  fixedMenuPosition
                  @selected=${e=>{this._resetSelectedRoom=I(e)}}
                  @closed=${e=>e.stopPropagation()}
                >
                  ${t.map(e=>g`<ha-list-item value=${e.areaId}>${e.name}</ha-list-item>`)}
                </ha-select>
                ${this._resetSelectedRoom?g`<ha-icon-button
                      .path=${`M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z`}
                      @click=${()=>{this._resetSelectedRoom=``}}
                    ></ha-icon-button>`:_}
                <button
                  class="reset-btn"
                  ?disabled=${!this._resetSelectedRoom}
                  @click=${()=>this._resetSelectedRoom&&this._resetRoomModel(this._resetSelectedRoom)}
                >
                  <ha-icon icon="mdi:restart"></ha-icon>
                  ${w(`settings.reset_btn`,e)}
                </button>
              </div>
            `:g`<p class="hint">${w(`settings.reset_no_rooms`,e)}</p>`}
      </div>
    `}async _resetRoomModel(e){let t=this.hass.language;if(confirm(w(`settings.reset_room_confirm`,t)))try{L(this,`saving`),await this.hass.callWS({type:`roommind/thermal/reset`,area_id:e}),L(this,`saved`)}catch{L(this,`error`)}}async _resetAllModels(){let e=this.hass.language;if(confirm(w(`settings.reset_all_confirm`,e)))try{L(this,`saving`),await this.hass.callWS({type:`roommind/thermal/reset_all`}),L(this,`saved`)}catch{L(this,`error`)}}static{this.styles=[J.settingsBaseStyles,l`
      .hint {
        color: var(--secondary-text-color);
        font-size: 13px;
        margin: 0;
      }

      .reset-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 16px;
      }
      .reset-text {
        display: flex;
        flex-direction: column;
        gap: 4px;
        flex: 1;
      }

      .reset-btn {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 8px 14px;
        border: 1px solid var(--error-color, #d32f2f);
        border-radius: 8px;
        background: transparent;
        color: var(--error-color, #d32f2f);
        font-size: 13px;
        font-family: inherit;
        cursor: pointer;
        transition: background 0.15s;
        --mdc-icon-size: 16px;
        white-space: nowrap;
      }
      .reset-btn:hover {
        background: rgba(211, 47, 47, 0.08);
      }
      .reset-btn:disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }
      .reset-btn:disabled:hover {
        background: transparent;
      }

      .reset-room-row {
        display: flex;
        align-items: center;
        gap: 12px;
      }
      .reset-room-row ha-select {
        flex: 1;
      }

      @media (max-width: 600px) {
        .reset-row {
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
        }
      }
    `]}};j([x({attribute:!1})],_n.prototype,`hass`,void 0),j([x({attribute:!1})],_n.prototype,`rooms`,void 0),j([S()],_n.prototype,`_resetSelectedRoom`,void 0),_n=j([b(`rs-settings-reset`)],_n),y(),C(),M();var Y=class extends v{constructor(...e){super(...e),this.rooms={},this._groupByFloor=!1,this._climateControlActive=!0,this._learningDisabledRooms=[],this._outdoorTempSensor=``,this._outdoorHumiditySensor=``,this._outdoorCoolingMin=16,this._outdoorHeatingMax=22,this._controlMode=`mpc`,this._comfortWeight=70,this._weatherEntity=``,this._outdoorUnavailableNotify=!0,this._predictionEnabled=!0,this._vacationActive=!1,this._vacationTemp=15,this._vacationUntil=``,this._presenceEnabled=!1,this._presencePersons=[],this._presenceAwayAction=`eco`,this._presenceClearsOverride=!1,this._scheduleOffAction=`eco`,this._valveProtectionEnabled=!1,this._valveProtectionInterval=7,this._moldDetectionEnabled=!1,this._moldHumidityThreshold=70,this._moldSustainedMinutes=30,this._moldNotificationCooldown=60,this._moldNotificationsEnabled=!0,this._moldNotificationTargets=[],this._moldPreventionEnabled=!1,this._moldPreventionIntensity=`medium`,this._moldPreventionNotify=!1,this._compressorGroups=[],this._boostAppliedAt={},this._loaded=!1}connectedCallback(){super.connectedCallback(),this._loadSettings()}disconnectedCallback(){super.disconnectedCallback(),this._saveDebounce&&clearTimeout(this._saveDebounce)}async _loadSettings(){try{let e=(await this.hass.callWS({type:`roommind/settings/get`})).settings;this._groupByFloor=e.group_by_floor??!1,this._climateControlActive=e.climate_control_active??!0,this._learningDisabledRooms=e.learning_disabled_rooms??[],this._outdoorTempSensor=e.outdoor_temp_sensor??``,this._outdoorHumiditySensor=e.outdoor_humidity_sensor??``,this._outdoorCoolingMin=e.outdoor_cooling_min??16,this._outdoorHeatingMax=e.outdoor_heating_max??22,this._controlMode=e.control_mode??`mpc`,this._comfortWeight=e.comfort_weight??70,this._weatherEntity=e.weather_entity??``,this._outdoorUnavailableNotify=e.outdoor_unavailable_notify??!0,this._predictionEnabled=e.prediction_enabled??!0;let t=e.vacation_until;this._vacationActive=!!(t&&t>Date.now()/1e3),this._vacationTemp=e.vacation_temp??15,t&&t>Date.now()/1e3&&t<3250368e4?this._vacationUntil=this._tsToDatetimeLocal(t):this._vacationUntil=``,this._presenceEnabled=e.presence_enabled??!1,this._presencePersons=e.presence_persons??[],this._presenceAwayAction=e.presence_away_action??`eco`,this._presenceClearsOverride=e.presence_clears_override??!1,this._scheduleOffAction=e.schedule_off_action??`eco`,this._valveProtectionEnabled=e.valve_protection_enabled??!1,this._valveProtectionInterval=e.valve_protection_interval_days??7,this._moldDetectionEnabled=e.mold_detection_enabled??!1,this._moldHumidityThreshold=e.mold_humidity_threshold??70,this._moldSustainedMinutes=e.mold_sustained_minutes??30,this._moldNotificationCooldown=e.mold_notification_cooldown??60,this._moldNotificationsEnabled=e.mold_notifications_enabled??!0,this._moldNotificationTargets=e.mold_notification_targets??[],this._moldPreventionEnabled=e.mold_prevention_enabled??!1,this._moldPreventionIntensity=e.mold_prevention_intensity??`medium`,this._moldPreventionNotify=e.mold_prevention_notify_enabled??!1,this._compressorGroups=e.compressor_groups??[],this._boostAppliedAt=e.boost_applied_at??{}}catch(e){console.debug(`[RoomMind] loadSettings:`,e)}finally{this._loaded=!0}}render(){if(!this._loaded)return g`<div class="loading">${w(`panel.loading`,this.hass.language)}</div>`;let e=this.hass.language;return g`
      <rs-settings-panel
        icon="mdi:power"
        .heading=${w(`settings.general_title`,e)}
        .intro=${w(`settings.intro.general`,e)}
      >
        <rs-settings-general
          .hass=${this.hass}
          .groupByFloor=${this._groupByFloor}
          .climateControlActive=${this._climateControlActive}
          @setting-changed=${this._onSettingChanged}
        ></rs-settings-general>
      </rs-settings-panel>

      <rs-settings-panel
        icon="mdi:thermometer"
        .heading=${w(`settings.sensors_title`,e)}
        .intro=${w(`settings.intro.sensors`,e)}
      >
        <rs-settings-sensors
          .hass=${this.hass}
          .outdoorTempSensor=${this._outdoorTempSensor}
          .outdoorHumiditySensor=${this._outdoorHumiditySensor}
          .weatherEntity=${this._weatherEntity}
          .outdoorUnavailableNotify=${this._outdoorUnavailableNotify}
          @setting-changed=${this._onSettingChanged}
        ></rs-settings-sensors>
      </rs-settings-panel>

      <rs-settings-panel
        icon="mdi:tune-variant"
        .heading=${w(`settings.control_title`,e)}
        .intro=${w(`settings.intro.control`,e)}
      >
        <rs-settings-control
          .hass=${this.hass}
          .controlMode=${this._controlMode}
          .comfortWeight=${this._comfortWeight}
          .outdoorCoolingMin=${this._outdoorCoolingMin}
          .outdoorHeatingMax=${this._outdoorHeatingMax}
          .predictionEnabled=${this._predictionEnabled}
          .scheduleOffAction=${this._scheduleOffAction}
          @setting-changed=${this._onSettingChanged}
        ></rs-settings-control>
      </rs-settings-panel>

      <rs-settings-panel
        icon="mdi:home-account"
        .heading=${w(`presence.title`,e)}
        .intro=${w(`settings.intro.presence`,e)}
      >
        <rs-settings-presence
          .hass=${this.hass}
          .presenceEnabled=${this._presenceEnabled}
          .presencePersons=${this._presencePersons}
          .presenceAwayAction=${this._presenceAwayAction}
          .presenceClearsOverride=${this._presenceClearsOverride}
          @setting-changed=${this._onSettingChanged}
        ></rs-settings-presence>
      </rs-settings-panel>

      <rs-settings-panel
        icon="mdi:airplane"
        .heading=${w(`vacation.title`,e)}
        .intro=${w(`settings.intro.vacation`,e)}
      >
        <rs-settings-vacation
          .hass=${this.hass}
          .vacationActive=${this._vacationActive}
          .vacationTemp=${this._vacationTemp}
          .vacationUntil=${this._vacationUntil}
          @setting-changed=${this._onSettingChanged}
        ></rs-settings-vacation>
      </rs-settings-panel>

      <rs-settings-panel
        icon="mdi:shield-refresh"
        .heading=${w(`valve_protection.title`,e)}
        .intro=${w(`settings.intro.valve`,e)}
      >
        <rs-settings-valve
          .hass=${this.hass}
          .valveProtectionEnabled=${this._valveProtectionEnabled}
          .valveProtectionInterval=${this._valveProtectionInterval}
          @setting-changed=${this._onSettingChanged}
        ></rs-settings-valve>
      </rs-settings-panel>

      <rs-settings-panel
        icon="mdi:heat-pump-outline"
        .heading=${w(`compressor.title`,e)}
        .intro=${w(`settings.intro.compressor`,e)}
      >
        <rs-settings-compressor
          .hass=${this.hass}
          .compressorGroups=${this._compressorGroups}
          @setting-changed=${this._onSettingChanged}
        ></rs-settings-compressor>
      </rs-settings-panel>

      <rs-settings-panel
        icon="mdi:water-alert"
        .heading=${w(`mold.title`,e)}
        .intro=${w(`settings.intro.mold`,e)}
      >
        <rs-settings-mold
          .hass=${this.hass}
          .moldDetectionEnabled=${this._moldDetectionEnabled}
          .moldHumidityThreshold=${this._moldHumidityThreshold}
          .moldSustainedMinutes=${this._moldSustainedMinutes}
          .moldPreventionEnabled=${this._moldPreventionEnabled}
          .moldPreventionIntensity=${this._moldPreventionIntensity}
          @setting-changed=${this._onSettingChanged}
        ></rs-settings-mold>
      </rs-settings-panel>

      <rs-settings-panel
        icon="mdi:bell-outline"
        .heading=${w(`notifications.title`,e)}
        .intro=${w(`settings.intro.notifications`,e)}
        .badge=${w(`badge.beta`,e)}
        .badgeHint=${w(`badge.beta_hint`,e)}
      >
        <rs-settings-notifications
          .hass=${this.hass}
          .notificationsEnabled=${this._moldNotificationsEnabled}
          .notificationTargets=${this._moldNotificationTargets}
          .notificationCooldown=${this._moldNotificationCooldown}
          .moldPreventionEnabled=${this._moldPreventionEnabled}
          .moldPreventionNotify=${this._moldPreventionNotify}
          @setting-changed=${this._onSettingChanged}
        ></rs-settings-notifications>
      </rs-settings-panel>

      <rs-settings-panel
        icon="mdi:brain"
        .heading=${w(`settings.learning_title`,e)}
        .intro=${w(`settings.intro.learning`,e)}
      >
        <rs-settings-learning
          .hass=${this.hass}
          .rooms=${this.rooms}
          .learningDisabledRooms=${this._learningDisabledRooms}
          .boostAppliedAt=${this._boostAppliedAt}
          .roomsLive=${Object.fromEntries(Object.entries(this.rooms).map(([e,t])=>[e,t.live??{}]))}
          @setting-changed=${this._onSettingChanged}
          @boost-applied=${this._onBoostApplied}
        ></rs-settings-learning>
      </rs-settings-panel>

      <rs-settings-panel
        icon="mdi:restart"
        .heading=${w(`settings.reset_title`,e)}
        .intro=${w(`settings.intro.reset`,e)}
      >
        <rs-settings-reset .hass=${this.hass} .rooms=${this.rooms}></rs-settings-reset>
      </rs-settings-panel>
    `}_onBoostApplied(e){let{area_id:t,n_observations:n}=e.detail;this._boostAppliedAt={...this._boostAppliedAt,[t]:n}}_onSettingChanged(e){let{key:t,value:n}=e.detail;this[`_${t}`]=n,this._autoSave()}_tsToDatetimeLocal(e){let t=new Date(e*1e3),n=e=>String(e).padStart(2,`0`);return`${t.getFullYear()}-${n(t.getMonth()+1)}-${n(t.getDate())}T${n(t.getHours())}:${n(t.getMinutes())}`}_autoSave(){this._saveDebounce&&clearTimeout(this._saveDebounce),this._saveDebounce=setTimeout(()=>this._doSave(),500)}async _doSave(){L(this,`saving`);try{await this.hass.callWS({type:`roommind/settings/save`,group_by_floor:this._groupByFloor,climate_control_active:this._climateControlActive,learning_disabled_rooms:this._learningDisabledRooms,outdoor_temp_sensor:this._outdoorTempSensor,outdoor_humidity_sensor:this._outdoorHumiditySensor,outdoor_cooling_min:this._outdoorCoolingMin,outdoor_heating_max:this._outdoorHeatingMax,control_mode:this._controlMode,comfort_weight:this._comfortWeight,weather_entity:this._weatherEntity,outdoor_unavailable_notify:this._outdoorUnavailableNotify,prediction_enabled:this._predictionEnabled,vacation_temp:this._vacationTemp,vacation_until:this._vacationActive?this._vacationUntil?new Date(this._vacationUntil).getTime()/1e3:tn:null,presence_enabled:this._presenceEnabled,presence_persons:this._presencePersons.filter(e=>e),presence_away_action:this._presenceAwayAction,presence_clears_override:this._presenceClearsOverride,schedule_off_action:this._scheduleOffAction,valve_protection_enabled:this._valveProtectionEnabled,valve_protection_interval_days:this._valveProtectionInterval,compressor_groups:this._compressorGroups.filter(e=>e.members.length>0),mold_detection_enabled:this._moldDetectionEnabled,mold_humidity_threshold:this._moldHumidityThreshold,mold_sustained_minutes:this._moldSustainedMinutes,mold_notification_cooldown:this._moldNotificationCooldown,mold_notifications_enabled:this._moldNotificationsEnabled,mold_notification_targets:this._moldNotificationTargets.filter(e=>e.entity_id),mold_prevention_enabled:this._moldPreventionEnabled,mold_prevention_intensity:this._moldPreventionIntensity,mold_prevention_notify_enabled:this._moldPreventionNotify,mold_prevention_notify_targets:this._moldPreventionNotify?this._moldNotificationTargets.filter(e=>e.entity_id):[]}),L(this,`saved`)}catch{L(this,`error`)}}static{this.styles=l`
    :host {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 0 16px;
    }

    .loading {
      padding: 80px 16px;
      text-align: center;
      color: var(--secondary-text-color);
    }
  `}};j([x({attribute:!1})],Y.prototype,`hass`,void 0),j([x({attribute:!1})],Y.prototype,`rooms`,void 0),j([S()],Y.prototype,`_groupByFloor`,void 0),j([S()],Y.prototype,`_climateControlActive`,void 0),j([S()],Y.prototype,`_learningDisabledRooms`,void 0),j([S()],Y.prototype,`_outdoorTempSensor`,void 0),j([S()],Y.prototype,`_outdoorHumiditySensor`,void 0),j([S()],Y.prototype,`_outdoorCoolingMin`,void 0),j([S()],Y.prototype,`_outdoorHeatingMax`,void 0),j([S()],Y.prototype,`_controlMode`,void 0),j([S()],Y.prototype,`_comfortWeight`,void 0),j([S()],Y.prototype,`_weatherEntity`,void 0),j([S()],Y.prototype,`_outdoorUnavailableNotify`,void 0),j([S()],Y.prototype,`_predictionEnabled`,void 0),j([S()],Y.prototype,`_vacationActive`,void 0),j([S()],Y.prototype,`_vacationTemp`,void 0),j([S()],Y.prototype,`_vacationUntil`,void 0),j([S()],Y.prototype,`_presenceEnabled`,void 0),j([S()],Y.prototype,`_presencePersons`,void 0),j([S()],Y.prototype,`_presenceAwayAction`,void 0),j([S()],Y.prototype,`_presenceClearsOverride`,void 0),j([S()],Y.prototype,`_scheduleOffAction`,void 0),j([S()],Y.prototype,`_valveProtectionEnabled`,void 0),j([S()],Y.prototype,`_valveProtectionInterval`,void 0),j([S()],Y.prototype,`_moldDetectionEnabled`,void 0),j([S()],Y.prototype,`_moldHumidityThreshold`,void 0),j([S()],Y.prototype,`_moldSustainedMinutes`,void 0),j([S()],Y.prototype,`_moldNotificationCooldown`,void 0),j([S()],Y.prototype,`_moldNotificationsEnabled`,void 0),j([S()],Y.prototype,`_moldNotificationTargets`,void 0),j([S()],Y.prototype,`_moldPreventionEnabled`,void 0),j([S()],Y.prototype,`_moldPreventionIntensity`,void 0),j([S()],Y.prototype,`_moldPreventionNotify`,void 0),j([S()],Y.prototype,`_compressorGroups`,void 0),j([S()],Y.prototype,`_boostAppliedAt`,void 0),j([S()],Y.prototype,`_loaded`,void 0),Y=j([b(`rs-settings`)],Y);function vn(e){let t=[...e.history,...e.detail];return t.length===0?null:[`timestamp,datetime,room_temp,outdoor_temp,target_temp,mode,predicted_temp,window_open,heating_power,solar_irradiance,blind_position,cover_reason,device_setpoint`,...t.map(e=>{let t=new Date(e.ts*1e3).toISOString(),n=e.room_temp??``,r=e.outdoor_temp??``,i=e.target_temp??``,a=e.predicted_temp??``,o=e.heating_power??``,s=e.solar_irradiance??``,c=e.blind_position??``,l=e.cover_reason??``,u=e.device_setpoint??``;return`${e.ts},${t},${n},${r},${i},${e.mode},${a},${e.window_open},${o},${s},${c},${l},${u}`})].join(`
`)}function yn(e,t,n){let r=new Blob([e],{type:`${n};charset=utf-8`}),i=URL.createObjectURL(r),a=document.createElement(`a`);a.href=i,a.download=t,a.click(),URL.revokeObjectURL(i)}function bn(e,t,n,r,i,a,o){let s=e?.areas?.[n],c=(t[n]?.display_name||s?.name||n).replace(/\s+/g,`_`).toLowerCase();return a?`roommind_${a}_${c}.${o}`:`roommind_${c}_${new Date(r).toISOString().slice(0,10)}_${new Date(i).toISOString().slice(0,10)}.${o}`}function xn(e){return navigator.clipboard?.writeText?(navigator.clipboard.writeText(e).catch(()=>{Sn(e)}),!0):Sn(e)}function Sn(e){let t=document.createElement(`textarea`);t.value=e,t.style.position=`fixed`,t.style.opacity=`0`,document.body.appendChild(t),t.select();let n=!1;try{n=document.execCommand(`copy`)}catch(e){console.debug(`[RoomMind] clipboard fallback:`,e)}return document.body.removeChild(t),n}y(),C(),M();var X=class extends v{constructor(...e){super(...e),this.rooms={},this.selectedRoom=``,this.rangeStart=0,this.rangeEnd=0,this.activeQuick=`24h`,this.data=null,this.language=`en`,this._openDropdown=null,this._diagLoading=!1,this._boundCloseDropdowns=this._closeDropdowns.bind(this)}connectedCallback(){super.connectedCallback(),document.addEventListener(`click`,this._boundCloseDropdowns)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`click`,this._boundCloseDropdowns)}updated(e){(e.has(`rooms`)||e.has(`selectedRoom`))&&this.selectedRoom&&this.updateComplete.then(()=>{let e=this.renderRoot?.querySelector(`ha-select`);e&&e.value!==this.selectedRoom&&(e.value=this.selectedRoom)})}render(){let e=this.language,t=this._getConfiguredRooms();return g`
      ${this._renderRoomSelector(t,e)}
      ${this.selectedRoom?this._renderRangeButtons(e):_}
    `}_getConfiguredRooms(){return Object.entries(this.rooms).map(([e,t])=>{let n=this.hass?.areas?.[e];return{area_id:e,name:t.display_name||n?.name||e}})}_renderRoomSelector(e,t){return g`
      <div class="selector-row">
        <ha-select
          .value=${this.selectedRoom}
          .label=${w(`analytics.select_room`,t)}
          .options=${e.map(e=>({value:e.area_id,label:e.name}))}
          naturalMenuWidth
          fixedMenuPosition
          @selected=${this._onRoomSelected}
          @closed=${e=>e.stopPropagation()}
        >
          ${e.map(e=>g` <ha-list-item value=${e.area_id}>${e.name}</ha-list-item> `)}
        </ha-select>
      </div>
    `}_renderRangeButtons(e){let t=[{key:`24h`,label:w(`analytics.range_1d`,e),days:1},{key:`2d`,label:w(`analytics.range_2d`,e),days:2},{key:`7d`,label:w(`analytics.range_7d`,e),days:7},{key:`30d`,label:w(`analytics.range_30d`,e),days:30}],n=this.data&&(this.data.history.length>0||this.data.detail.length>0),r=e=>new Date(e).toLocaleString(this.hass.language,{month:`2-digit`,day:`2-digit`,hour:`2-digit`,minute:`2-digit`});return g`
      <div class="range-row">
        <div class="range-controls">
          <div class="range-bar">
            ${t.map(e=>g`
                <button
                  class="range-chip"
                  ?active=${this.activeQuick===e.key}
                  @click=${()=>this._onQuickRange(e.key,e.days)}
                >
                  ${e.label}
                </button>
              `)}
            <div class="range-chip picker-chip ${this.activeQuick===null?`picker-active`:``}">
              <ha-date-range-picker
                .hass=${this.hass}
                .startDate=${new Date(this.rangeStart)}
                .endDate=${new Date(this.rangeEnd)}
                .ranges=${!1}
                time-picker
                auto-apply
                minimal
                @value-changed=${this._onDateRangeChanged}
              ></ha-date-range-picker>
            </div>
          </div>
          <span class="date-label ${this.activeQuick===null?`custom-active`:``}"
            >${r(this.rangeStart)} – ${r(this.rangeEnd)}</span
          >
        </div>
        <div class="action-buttons">
          <div class="export-split">
            <button
              class="export-btn"
              ?disabled=${!n}
              @click=${e=>{e.stopPropagation(),this._toggleDropdown(`csv`)}}
            >
              <ha-icon icon="mdi:download"></ha-icon>
              ${w(`analytics.export`,e)}
              <ha-icon class="arrow-icon" icon="mdi:chevron-down"></ha-icon>
            </button>
            ${this._openDropdown===`csv`?g`<div class="export-dropdown" @click=${e=>e.stopPropagation()}>
                  <button @click=${this._exportCsv}>
                    <ha-icon icon="mdi:download"></ha-icon>
                    ${w(`analytics.export_download`,e)}
                  </button>
                  <button @click=${this._copyCsvToClipboard}>
                    <ha-icon icon="mdi:content-copy"></ha-icon>
                    ${w(`analytics.export_clipboard`,e)}
                  </button>
                </div>`:_}
          </div>
          <div class="export-split">
            <button
              class="export-btn"
              ?disabled=${this._diagLoading}
              @click=${e=>{e.stopPropagation(),this._toggleDropdown(`diag`)}}
            >
              <ha-icon icon=${this._diagLoading?`mdi:loading`:`mdi:bug-outline`}></ha-icon>
              ${w(`analytics.copy_diagnostics`,e)}
              <ha-icon class="arrow-icon" icon="mdi:chevron-down"></ha-icon>
            </button>
            ${this._openDropdown===`diag`?g`<div class="export-dropdown" @click=${e=>e.stopPropagation()}>
                  <button @click=${this._exportDiagnostics}>
                    <ha-icon icon="mdi:download"></ha-icon>
                    ${w(`analytics.export_download`,e)}
                  </button>
                  <button @click=${this._copyDiagnosticsToClipboard}>
                    <ha-icon icon="mdi:content-copy"></ha-icon>
                    ${w(`analytics.export_clipboard`,e)}
                  </button>
                </div>`:_}
          </div>
        </div>
      </div>
    `}_onRoomSelected(e){let t=I(e);t&&t!==this.selectedRoom&&this.dispatchEvent(new CustomEvent(`room-selected`,{detail:{areaId:t},bubbles:!0,composed:!0}))}_onQuickRange(e,t){let n=new Date,r=new Date(n);r.setDate(r.getDate()-(t-1)),r.setHours(0,0,0,0),this.dispatchEvent(new CustomEvent(`range-changed`,{detail:{activeQuick:e,rangeStart:r.getTime(),rangeEnd:n.getTime(),chartAnchor:n.getTime()},bubbles:!0,composed:!0}))}_onDateRangeChanged(e){let{startDate:t,endDate:n}=e.detail.value;!t||!n||this.dispatchEvent(new CustomEvent(`range-changed`,{detail:{activeQuick:null,rangeStart:t.getTime(),rangeEnd:n.getTime(),chartAnchor:n.getTime()},bubbles:!0,composed:!0}))}_exportCsv(){if(!this.data)return;let e=vn(this.data);e&&(yn(e,bn(this.hass,this.rooms,this.selectedRoom,this.rangeStart,this.rangeEnd,``,`csv`),`text/csv`),this._openDropdown=null)}async _exportDiagnostics(){if(!this._diagLoading){this._diagLoading=!0,this._openDropdown=null;try{let e=await this.hass.callWS({type:`roommind/diagnostics/get`});yn(JSON.stringify(e,null,2),`roommind_diagnostics.json`,`application/json`)}catch(e){console.warn(`[RoomMind] diagnostics export failed:`,e)}finally{this._diagLoading=!1}}}_copyCsvToClipboard(){if(!this.data)return;let e=vn(this.data);e&&(xn(e),this._openDropdown=null)}async _copyDiagnosticsToClipboard(){if(!this._diagLoading){this._diagLoading=!0,this._openDropdown=null;try{let e=await this.hass.callWS({type:`roommind/diagnostics/get`});xn(JSON.stringify(e,null,2))}catch(e){console.warn(`[RoomMind] diagnostics clipboard failed:`,e)}finally{this._diagLoading=!1}}}_toggleDropdown(e){this._openDropdown=this._openDropdown===e?null:e}_closeDropdowns(){this._openDropdown&&=null}static{this.styles=[R,l`
      :host {
        display: block;
      }

      .selector-row {
        margin-bottom: 16px;
      }

      .selector-row ha-select {
        width: 100%;
      }

      .range-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 16px;
        gap: 12px;
      }

      .range-controls {
        display: flex;
        align-items: center;
        gap: 8px;
        position: relative;
      }

      .range-bar {
        display: inline-flex;
        border-radius: 12px;
        border: 1px solid var(--divider-color);
        background: var(--card-background-color);
      }

      .range-bar > :first-child {
        border-radius: 12px 0 0 12px;
      }

      .range-bar > :last-child {
        border-radius: 0 12px 12px 0;
      }

      .range-chip {
        padding: 7px 14px;
        border: none;
        border-right: 1px solid var(--divider-color);
        background: transparent;
        color: var(--secondary-text-color);
        font-size: 12px;
        font-weight: 500;
        cursor: pointer;
        transition:
          background 0.15s ease,
          color 0.15s ease;
        font-family: inherit;
        white-space: nowrap;
      }

      .range-chip:last-child {
        border-right: none;
      }

      .range-chip:hover:not([active]) {
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.08);
        color: var(--primary-text-color);
      }

      .range-chip[active] {
        background: var(--primary-color);
        color: var(--text-primary-color, #fff);
      }

      .picker-chip {
        display: flex;
        align-items: center;
        padding: 0;
        cursor: pointer;
      }

      .picker-chip ha-date-range-picker {
        --mdc-icon-size: 18px;
        --mdc-icon-button-size: 32px;
      }

      .picker-chip.picker-active {
        background: var(--primary-color);
        color: var(--text-primary-color, #fff);
      }

      .date-label {
        font-size: 12px;
        color: var(--secondary-text-color);
        white-space: nowrap;
      }

      .date-label.custom-active {
        color: var(--primary-color);
      }

      .action-buttons {
        display: flex;
        gap: 8px;
      }

      .export-split {
        position: relative;
        display: inline-flex;
      }

      .export-btn {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding: 7px 14px;
        border: 1px solid var(--divider-color);
        border-radius: 12px;
        background: var(--card-background-color);
        color: var(--secondary-text-color);
        font-size: 12px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.15s ease;
        font-family: inherit;
        white-space: nowrap;
        --mdc-icon-size: 14px;
      }

      .export-btn:hover {
        color: var(--primary-text-color);
        border-color: var(--primary-color);
      }

      .export-btn[disabled] {
        opacity: 0.4;
        cursor: default;
      }

      .arrow-icon {
        --mdc-icon-size: 14px;
        margin-left: 2px;
        margin-right: -4px;
      }

      .export-dropdown {
        position: absolute;
        top: 100%;
        right: 0;
        margin-top: 4px;
        min-width: 100%;
        background: var(--card-background-color);
        border: 1px solid var(--divider-color);
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        z-index: 10;
        overflow: hidden;
      }

      .export-dropdown button {
        display: flex;
        align-items: center;
        gap: 8px;
        width: 100%;
        padding: 10px 14px;
        border: none;
        background: transparent;
        color: var(--primary-text-color);
        font-size: 12px;
        font-family: inherit;
        cursor: pointer;
        white-space: nowrap;
        --mdc-icon-size: 14px;
      }

      .export-dropdown button:hover {
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.08);
      }

      .export-dropdown button + button {
        border-top: 1px solid var(--divider-color);
      }

      @media (max-width: 600px) {
        .range-row {
          flex-wrap: wrap;
        }
        .range-controls {
          flex-wrap: wrap;
        }
        .range-chip {
          padding: 6px 10px;
          font-size: 11px;
        }
      }
    `]}};j([x({attribute:!1})],X.prototype,`hass`,void 0),j([x({attribute:!1})],X.prototype,`rooms`,void 0),j([x({type:String})],X.prototype,`selectedRoom`,void 0),j([x({type:Number})],X.prototype,`rangeStart`,void 0),j([x({type:Number})],X.prototype,`rangeEnd`,void 0),j([x({type:String})],X.prototype,`activeQuick`,void 0),j([x({attribute:!1})],X.prototype,`data`,void 0),j([x({type:String})],X.prototype,`language`,void 0),j([S()],X.prototype,`_openDropdown`,void 0),j([S()],X.prototype,`_diagLoading`,void 0),X=j([b(`rs-analytics-toolbar`)],X),y();var Cn=l`
  .info-icon {
    --mdc-icon-size: 16px;
    color: var(--secondary-text-color);
    opacity: 0.3;
    cursor: pointer;
    flex-shrink: 0;
    transition:
      opacity 0.15s,
      color 0.15s;
  }

  .info-icon:hover {
    opacity: 0.7;
  }

  .info-icon.info-active {
    opacity: 1;
    color: var(--primary-color);
  }

  .info-panel {
    padding: 12px;
    border-radius: 8px;
    background: var(--secondary-background-color, rgba(128, 128, 128, 0.06));
    font-size: 13px;
    line-height: 1.6;
    color: var(--secondary-text-color);
  }

  .info-panel strong {
    display: block;
    margin-bottom: 4px;
    color: var(--primary-text-color);
    font-size: 13px;
  }

  .info-panel .yaml-block {
    background: var(--primary-background-color, #f5f5f5);
    border: 1px solid var(--divider-color, #e0e0e0);
    border-radius: 6px;
    padding: 10px 14px;
    margin: 8px 0;
    font-family: var(--code-font-family, monospace);
    font-size: 12px;
    line-height: 1.6;
    white-space: pre;
    overflow-x: auto;
    color: var(--primary-text-color);
  }
  .info-panel .yaml-key {
    color: #0550ae;
  }
  .info-panel .yaml-value {
    color: #0a3069;
  }
`,wn=3*36e5;function Tn(e,t){let{hass:n,language:r,chartAnchor:i,forecast:a,isOutdoor:o}=t,s=e=>E(e,n),c=[],l=[],u=[],d=[];for(let t of e){let e=t.ts*1e3;t.room_temp!==null&&c.push([e,s(t.room_temp)]),!o&&t.target_temp!==null&&l.push([e,s(t.target_temp)]),!o&&t.predicted_temp!==null&&u.push([e,s(t.predicted_temp)]),t.outdoor_temp!==null&&d.push([e,s(t.outdoor_temp)])}for(let e of a??[]){let t=e.ts*1e3;!o&&e.target_temp!==null&&l.push([t,s(e.target_temp)]),!o&&e.predicted_temp!==null&&u.push([t,s(e.predicted_temp)])}let f=[{id:`room_temp`,type:`line`,name:w(`analytics.temperature`,r),color:`rgb(255, 152, 0)`,data:c,showSymbol:!1,smooth:!0,lineStyle:{width:2},yAxisIndex:0}];o||f.push({id:`target_temp`,type:`line`,name:w(`analytics.target`,r),color:`rgb(76, 175, 80)`,data:l,showSymbol:!1,smooth:!1,lineStyle:{width:2,type:`dashed`},yAxisIndex:0}),u.length>0&&f.push({id:`predicted_temp`,type:`line`,name:w(`analytics.prediction`,r),color:`rgb(33, 150, 243)`,data:u,showSymbol:!1,smooth:!0,lineStyle:{width:2,type:`dotted`},yAxisIndex:0}),d.length>0&&f.push({id:`outdoor_temp`,type:`line`,name:w(`analytics.outdoor`,r),color:`rgb(158, 158, 158)`,data:d,showSymbol:!1,smooth:!0,lineStyle:{width:1},yAxisIndex:0});let p=[],ee=[],te=[],ne=!1,re=!1,ie=!1;for(let t of e){let e=t.ts*1e3;t.mode===`heating`?(p.push([e,999]),ne=!0):p.push([e,null]),t.mode===`cooling`?(ee.push([e,999]),re=!0):ee.push([e,null]),t.window_open?(te.push([e,999]),ie=!0):te.push([e,null])}return ne&&f.push({id:`heating_events`,type:`line`,name:w(`analytics.heating_period`,r),color:`rgb(244, 67, 54)`,data:p,showSymbol:!1,lineStyle:{width:0},areaStyle:{color:`rgba(244, 67, 54, 0.08)`,origin:`start`},tooltip:{show:!1},yAxisIndex:0,z:-1,connectNulls:!1}),re&&f.push({id:`cooling_events`,type:`line`,name:w(`analytics.cooling_period`,r),color:`rgb(63, 81, 181)`,data:ee,showSymbol:!1,lineStyle:{width:0},areaStyle:{color:`rgba(63, 81, 181, 0.08)`,origin:`start`},tooltip:{show:!1},yAxisIndex:0,z:-1,connectNulls:!1}),ie&&f.push({id:`window_events`,type:`line`,name:w(`analytics.window_open_period`,r),color:`rgb(0, 150, 136)`,data:te,showSymbol:!1,lineStyle:{width:0},areaStyle:{color:`rgba(0, 150, 136, 0.1)`,origin:`start`},tooltip:{show:!1},yAxisIndex:0,z:-1,connectNulls:!1}),f.push({id:`now_marker`,type:`line`,name:``,color:`rgba(255,255,255,0.3)`,data:[[i,-999],[i,999]],showSymbol:!1,lineStyle:{width:1,type:`dashed`},yAxisIndex:0,tooltip:{show:!1},z:-2}),f}function En(e,t,n){let{hass:r,language:i,chartAnchor:a,rangeStart:o,rangeEnd:s}=n,c=T(r),l={type:`value`,name:c};if(e.length>0){let t=1/0,n=-1/0;for(let r of e)r<t&&(t=r),r>n&&(n=r);let r=n-t,i=Math.max(r*.1,.5);l.min=Math.floor((t-i)*2)/2,l.max=Math.ceil((n+i)*2)/2}return{xAxis:{type:`time`,min:o,max:Math.abs(s-Date.now())<36e5?a+wn:s},yAxis:l,dataZoom:[{type:`inside`,xAxisIndex:0,filterMode:`none`}],tooltip:{trigger:`axis`,axisPointer:{snap:!1},valueFormatter:e=>e.toFixed(1)+`\xA0`+c,formatter:e=>{if(!Array.isArray(e)||e.length===0)return``;let n=`<div style="font-weight:500;margin-bottom:4px">${new Date(e[0].value[0]).toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`})}</div>`,a=null,o=null;for(let t of e){if(t.seriesId?.endsWith(`_events`))continue;let e=t.value?.[1];e!=null&&(n+=`<div>${t.color?`<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${t.color};margin-right:6px"></span>`:``}${t.seriesName}: ${e.toFixed(1)}\u00A0${c}</div>`,t.seriesId===`room_temp`&&(a=e),t.seriesId===`predicted_temp`&&(o=e))}if(a!==null&&o!==null){let e=a-o;n+=`<div style="border-top:1px solid rgba(128,128,128,0.3);margin-top:4px;padding-top:4px">Delta: ${e>=0?`+`:``}${e.toFixed(2)}\u00A0${c}</div>`}if(t.length>0){let a=e[0].value[0]/1e3,o=null,s=1/0;for(let e of t){let t=Math.abs(e.ts-a);t<s&&(s=t,o=e)}if(o){let e=[];if(o.mode===`heating`){let t=o.heating_power;t!=null&&t>0&&t<100?e.push(`${w(`analytics.heating_period`,i)} ${t}%`):e.push(w(`analytics.heating_period`,i)),o.device_setpoint!=null&&e.push(`TRV ${O(o.device_setpoint,r)}\u00A0${c}`)}else o.mode===`cooling`&&(e.push(w(`analytics.cooling_period`,i)),o.device_setpoint!=null&&e.push(`AC ${O(o.device_setpoint,r)}\u00A0${c}`));o.window_open&&e.push(w(`analytics.window_open_period`,i)),e.length>0&&(n+=`<div style="border-top:1px solid rgba(128,128,128,0.3);margin-top:4px;padding-top:4px;color:rgba(255,255,255,0.7)">${e.join(` · `)}</div>`),o.blind_position!=null&&(n+=`<div style="color:rgba(255,255,255,0.7)">${w(`analytics.blind_position`,i)} ${100-o.blind_position}%</div>`)}}return n}},grid:{top:15,left:10,right:10,bottom:5,containLabel:!0}}}y(),C(),M();var Z=class extends v{constructor(...e){super(...e),this.data=null,this.rangeStart=0,this.rangeEnd=0,this.chartAnchor=0,this.language=`en`,this.isOutdoor=!1,this._hiddenSeries=new Set([`outdoor_temp`]),this._chartInfoExpanded=!1}render(){let e=this.language,t=this.data?[...this.data.history,...this.data.detail]:[],n=[...t,...this.data?.forecast??[]],r={hass:this.hass,language:e,chartAnchor:this.chartAnchor,rangeStart:this.rangeStart,rangeEnd:this.rangeEnd,forecast:this.data?.forecast,isOutdoor:this.isOutdoor},i=t.length>0?Tn(t,r):[],a=[],o=i.map(e=>{let t=e.id,n=e.lineStyle||{},r=t.endsWith(`_events`);if(this._hiddenSeries.has(t)){let t={...e,lineStyle:{...n,width:0,opacity:0}};return e.areaStyle&&(t.areaStyle={...e.areaStyle,opacity:0}),t}if(!r&&t!==`now_marker`)for(let t of e.data)t&&t[1]!=null&&a.push(t[1]);let i={...e,lineStyle:{...n,opacity:1}};return e.areaStyle&&(i.areaStyle={...e.areaStyle,opacity:1}),i}),s=En(a,n,r);return g`
      <ha-card>
        <div class="card-header">
          <span>${w(`analytics.temperature`,e)}</span>
          <ha-icon
            class="info-icon chart-info-toggle ${this._chartInfoExpanded?`info-active`:``}"
            icon="mdi:information-outline"
            @click=${()=>{this._chartInfoExpanded=!this._chartInfoExpanded}}
          ></ha-icon>
        </div>
        ${this._chartInfoExpanded?g`<div class="chart-info-panel">
              ${this._renderMarkdown(w(`analytics.chart_info_body`,e))}
            </div>`:_}
        ${t.length>0?g`
              <ha-chart-base
                .hass=${this.hass}
                .data=${o}
                .options=${s}
                .height=${`300px`}
                style="height: 300px"
              ></ha-chart-base>
              ${this._renderSeriesLegend(i)}
            `:g`<div class="chart-empty">
              <ha-icon icon="mdi:chart-line"></ha-icon>
              <span>${w(`analytics.no_data`,e)}</span>
            </div>`}
      </ha-card>
    `}_renderSeriesLegend(e){return g`
      <div class="series-legend">
        ${e.filter(e=>e.id!==`now_marker`).map(e=>{let t=e.id;return g`
            <button
              class="legend-item ${this._hiddenSeries.has(t)?`legend-hidden`:``}"
              @click=${()=>this._toggleSeries(t)}
            >
              <span class="legend-dot" style="background: ${e.color}"></span>
              ${e.name}
            </button>
          `})}
      </div>
    `}_renderMarkdown(e){return e.split(`

`).map(e=>g`<p>
          ${e.split(/(\*\*.*?\*\*)/).map(e=>e.startsWith(`**`)&&e.endsWith(`**`)?g`<strong>${e.slice(2,-2)}</strong>`:e)}
        </p>`)}_toggleSeries(e){let t=new Set(this._hiddenSeries);t.has(e)?t.delete(e):t.add(e),this._hiddenSeries=t}static{this.styles=[Cn,l`
      :host {
        display: block;
      }

      ha-card {
        margin-bottom: 16px;
      }

      .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px 16px 0;
        font-size: 16px;
        font-weight: 500;
      }

      .chart-info-toggle {
        --mdc-icon-size: 20px;
      }

      .chart-info-panel {
        margin: 8px 16px 4px;
        padding: 12px 14px;
        border-radius: 8px;
        background: var(--secondary-background-color, rgba(128, 128, 128, 0.06));
        font-size: 13px;
        line-height: 1.6;
        color: var(--secondary-text-color);
      }

      .chart-info-panel p {
        margin: 0 0 8px;
      }

      .chart-info-panel p:last-child {
        margin-bottom: 0;
      }

      .chart-info-panel strong {
        color: var(--primary-text-color);
      }

      .series-legend {
        display: flex;
        justify-content: center;
        gap: 6px;
        padding: 8px 16px 12px;
        flex-wrap: wrap;
      }

      .legend-item {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 4px 10px;
        border: none;
        border-radius: 12px;
        background: transparent;
        color: var(--primary-text-color);
        font-size: 12px;
        font-family: inherit;
        cursor: pointer;
        transition: opacity 0.2s;
      }

      .legend-item:hover {
        background: var(--secondary-background-color, rgba(128, 128, 128, 0.1));
      }

      .legend-item.legend-hidden {
        opacity: 0.35;
      }

      .legend-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        flex-shrink: 0;
      }

      .chart-empty {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 200px;
        gap: 8px;
        color: var(--secondary-text-color);
        opacity: 0.5;
        --mdc-icon-size: 40px;
        font-size: 13px;
      }
    `]}};j([x({attribute:!1})],Z.prototype,`hass`,void 0),j([x({attribute:!1})],Z.prototype,`data`,void 0),j([x({type:Number})],Z.prototype,`rangeStart`,void 0),j([x({type:Number})],Z.prototype,`rangeEnd`,void 0),j([x({type:Number})],Z.prototype,`chartAnchor`,void 0),j([x({type:String})],Z.prototype,`language`,void 0),j([x({type:Boolean})],Z.prototype,`isOutdoor`,void 0),j([S()],Z.prototype,`_hiddenSeries`,void 0),j([S()],Z.prototype,`_chartInfoExpanded`,void 0),Z=j([b(`rs-analytics-chart`)],Z),y(),C(),M();var Dn=class extends v{constructor(...e){super(...e),this.data=null,this.language=`en`,this._expandedStat=null}render(){let e=this.language,t=!!this.data?.model?.model,n=this.data?.model,r=n?.model,i=n?.confidence??0,a=n?.n_samples??0,o=n?.n_heating??0,s=n?.n_cooling??0,c=n?.applicable_modes??[],l=n?.prediction_std_idle,u=n?.prediction_std_heating,d=n?.mpc_active??!1,f=Math.round(i*100),p=new Set(c),ee=p.has(`heating`),te=p.has(`cooling`),ne=o>=10,re=s>=10,ie=a-o-s>=10,ae=n?.n_observations??a,oe=[],m=(t,n,r,i,a)=>{oe.push({id:t,labelKey:r,infoKey:a});let o=this._expandedStat===t;return g`
        <div class="model-stat ${o?`active`:``}" @click=${()=>this._toggleStat(t)}>
          <div class="stat-content">
            <span class="model-value ${n===`—`?`pending`:``}">${n}</span>
            <span class="model-label">${w(r,e)}${i?` (${i})`:``}</span>
          </div>
          <ha-icon
            class="info-icon ${o?`info-active`:``}"
            icon="mdi:information-outline"
          ></ha-icon>
        </div>
      `};return g`
      <ha-card>
        <div class="card-header">
          <span>${w(`analytics.model_status`,e)}</span>
        </div>
        <div class="card-content">
          <div class="confidence-hero">
            <div class="confidence-top">
              <div class="confidence-main">
                <span class="confidence-value">${t?f+`%`:`0%`}</span>
                <span class="confidence-label">
                  ${w(`analytics.confidence`,e)}
                  <ha-icon
                    class="info-icon ${this._expandedStat===`confidence`?`info-active`:``}"
                    icon="mdi:information-outline"
                    @click=${()=>this._toggleStat(`confidence`)}
                  ></ha-icon>
                </span>
              </div>
              <div class="confidence-meta">
                <span class="meta-value">${t?ae:0}</span>
                <span class="meta-label">
                  ${w(`analytics.data_points`,e)}
                  <ha-icon
                    class="info-icon ${this._expandedStat===`data_points`?`info-active`:``}"
                    icon="mdi:information-outline"
                    @click=${()=>this._toggleStat(`data_points`)}
                  ></ha-icon>
                </span>
              </div>
            </div>
            <div class="confidence-bar">
              <div class="confidence-fill" style="width: ${t?f:0}%"></div>
            </div>
            <div class="control-mode-badge ${d?`mpc`:`bangbang`}">
              <ha-icon icon=${d?`mdi:brain`:`mdi:school-outline`}></ha-icon>
              ${w(d?`analytics.control_mode_mpc`:`analytics.control_mode_bangbang`,e)}
            </div>
            ${this._expandedStat===`confidence`?g`<div class="info-panel stat-info-panel">
                  <strong>${w(`analytics.confidence`,e)}</strong>
                  ${w(`analytics.info.confidence`,e)}
                </div>`:_}
            ${this._expandedStat===`data_points`?g`<div class="info-panel stat-info-panel">
                  <strong>${w(`analytics.data_points`,e)}</strong>
                  ${w(`analytics.info.data_points`,e)}
                </div>`:_}
          </div>

          <div class="model-grid">
            ${m(`time_constant`,ie&&r&&r.U>0?(1/r.U).toFixed(1)+`h`:`—`,`analytics.time_constant`,``,`analytics.info.time_constant`)}
            ${ee?m(`heating_rate`,ne&&r?D(r.Q_heat,this.hass).toFixed(1)+T(this.hass)+`/h`:`—`,`analytics.heating_rate`,``,`analytics.info.heating_rate`):_}
            ${te?m(`cooling_rate`,re&&r?D(r.Q_cool,this.hass).toFixed(1)+T(this.hass)+`/h`:`—`,`analytics.cooling_rate`,``,`analytics.info.cooling_rate`):_}
            ${r&&r.Q_solar>.1?m(`solar_gain`,D(r.Q_solar,this.hass).toFixed(1)+T(this.hass)+`/h`,`analytics.solar_gain`,``,`analytics.info.solar_gain`):_}
            ${r&&n?.has_occupancy_sensors?m(`occupancy_gain`,D(r.Q_occupancy,this.hass).toFixed(1)+T(this.hass)+`/h`,`analytics.occupancy_gain`,``,`analytics.info.occupancy_gain`):_}
            ${m(`accuracy_idle`,ie&&l!=null?`±`+D(l,this.hass).toFixed(2)+T(this.hass):`—`,`analytics.accuracy_idle`,``,`analytics.info.accuracy_idle`)}
            ${ee?m(`accuracy_heating`,ne&&u!=null?`±`+D(u,this.hass).toFixed(2)+T(this.hass):`—`,`analytics.accuracy_heating`,``,`analytics.info.accuracy_heating`):_}
          </div>
          ${this._expandedStat&&oe.find(e=>e.id===this._expandedStat)?g`<div class="info-panel stat-info-panel">
                <strong
                  >${w(oe.find(e=>e.id===this._expandedStat).labelKey,e)}</strong
                >
                ${w(oe.find(e=>e.id===this._expandedStat).infoKey,e)}
              </div>`:_}
        </div>
      </ha-card>
    `}_toggleStat(e){this._expandedStat=this._expandedStat===e?null:e}static{this.styles=[Cn,l`
      :host {
        display: block;
      }

      ha-card {
        margin-bottom: 16px;
      }

      .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px 16px 0;
        font-size: 16px;
        font-weight: 500;
      }

      .card-content {
        padding: 16px;
      }

      .confidence-hero {
        margin-bottom: 16px;
      }

      .confidence-top {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-bottom: 8px;
      }

      .confidence-main {
        display: flex;
        align-items: baseline;
        gap: 8px;
      }

      .confidence-value {
        font-size: 28px;
        font-weight: 600;
        color: var(--primary-text-color);
      }

      .confidence-label {
        font-size: 13px;
        color: var(--secondary-text-color);
      }

      .confidence-meta {
        display: flex;
        align-items: baseline;
        gap: 6px;
      }

      .meta-value {
        font-size: 16px;
        font-weight: 500;
        color: var(--primary-text-color);
      }

      .meta-label {
        font-size: 12px;
        color: var(--secondary-text-color);
      }

      .control-mode-badge {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        margin-top: 8px;
        padding: 4px 12px;
        border-radius: 12px;
        font-size: 12px;
        font-weight: 500;
        --mdc-icon-size: 14px;
      }

      .control-mode-badge.mpc {
        background: rgba(76, 175, 80, 0.12);
        color: var(--success-color, #4caf50);
      }

      .control-mode-badge.bangbang {
        background: rgba(158, 158, 158, 0.12);
        color: var(--secondary-text-color);
      }

      .confidence-bar {
        height: 4px;
        border-radius: 2px;
        background: var(--divider-color);
        overflow: hidden;
      }

      .confidence-fill {
        height: 100%;
        border-radius: 2px;
        background: var(--primary-color);
        transition: width 0.6s ease;
      }

      .model-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        gap: 12px;
      }

      .model-stat {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 12px;
        border-radius: 8px;
        border: 1px solid var(--divider-color);
        cursor: pointer;
        transition: border-color 0.2s;
      }

      .model-stat.active {
        border-color: var(--primary-color);
      }

      .stat-content {
        display: flex;
        flex-direction: column;
        gap: 2px;
      }

      .model-value {
        font-size: 18px;
        font-weight: 500;
        color: var(--primary-text-color);
      }

      .model-value.pending {
        opacity: 0.2;
      }

      .model-label {
        font-size: 12px;
        color: var(--secondary-text-color);
      }

      .info-panel.stat-info-panel {
        margin-top: 12px;
      }

      @media (max-width: 600px) {
        .model-grid {
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
        }
      }
    `]}};j([x({attribute:!1})],Dn.prototype,`hass`,void 0),j([x({attribute:!1})],Dn.prototype,`data`,void 0),j([x({type:String})],Dn.prototype,`language`,void 0),j([S()],Dn.prototype,`_expandedStat`,void 0),Dn=j([b(`rs-analytics-model`)],Dn),y(),C(),M();var Q=class extends v{constructor(...e){super(...e),this.rooms={},this.initialRoom=``,this.controlMode=`bangbang`,this._selectedRoom=``,this._rangeStart=new Date(new Date().setHours(0,0,0,0)).getTime(),this._rangeEnd=Date.now(),this._data=null,this._chartAnchor=Date.now(),this._loading=!1,this._activeQuick=`24h`}connectedCallback(){super.connectedCallback(),this._refreshInterval=setInterval(()=>this._silentRefresh(),6e4)}disconnectedCallback(){super.disconnectedCallback(),this._refreshInterval&&=(clearInterval(this._refreshInterval),void 0)}willUpdate(e){e.has(`initialRoom`)&&this.initialRoom&&(this._selectedRoom=this.initialRoom);let t=!1;if(e.has(`rooms`)&&!this._selectedRoom){let e=Object.keys(this.rooms);e.length>0&&(this._selectedRoom=e[0],t=!0,this.dispatchEvent(new CustomEvent(`room-selected`,{detail:{areaId:e[0]},bubbles:!0,composed:!0})))}(t||e.has(`_selectedRoom`)||e.has(`_rangeStart`)||e.has(`_rangeEnd`))&&this._selectedRoom&&this._fetchData()}render(){let e=this.hass.language;return g`
      <rs-analytics-toolbar
        .hass=${this.hass}
        .rooms=${this.rooms}
        .selectedRoom=${this._selectedRoom}
        .rangeStart=${this._rangeStart}
        .rangeEnd=${this._rangeEnd}
        .activeQuick=${this._activeQuick}
        .data=${this._data}
        .language=${e}
        @room-selected=${this._onRoomSelected}
        @range-changed=${this._onRangeChanged}
      ></rs-analytics-toolbar>
      ${this._selectedRoom?this._loading?g`<div class="loading">${w(`panel.loading`,e)}</div>`:g`
              <rs-analytics-chart
                .hass=${this.hass}
                .data=${this._data}
                .rangeStart=${this._rangeStart}
                .rangeEnd=${this._rangeEnd}
                .chartAnchor=${this._chartAnchor}
                .language=${e}
                .isOutdoor=${this.rooms[this._selectedRoom]?.is_outdoor??!1}
              ></rs-analytics-chart>
              ${this.rooms[this._selectedRoom]?.is_outdoor?_:g` <rs-analytics-model
                    .hass=${this.hass}
                    .data=${this._data}
                    .language=${e}
                  ></rs-analytics-model>`}
            `:g`
            <div class="no-data">
              <ha-icon icon="mdi:chart-line" style="--mdc-icon-size: 48px; opacity: 0.4"></ha-icon>
              <p>${w(`analytics.select_room`,e)}</p>
            </div>
          `}
    `}_onRoomSelected(e){let t=e.detail.areaId;t&&t!==this._selectedRoom&&(this._selectedRoom=t,this.dispatchEvent(new CustomEvent(`room-selected`,{detail:{areaId:t},bubbles:!0,composed:!0})))}_onRangeChanged(e){let{activeQuick:t,rangeStart:n,rangeEnd:r,chartAnchor:i}=e.detail;this._activeQuick=t,this._rangeStart=n,this._rangeEnd=r,this._chartAnchor=i}_buildWsParams(){return{type:`roommind/analytics/get`,area_id:this._selectedRoom,start_ts:this._rangeStart/1e3,end_ts:this._rangeEnd/1e3}}async _fetchData(){if(this._selectedRoom){this._loading=!0,this._data=null,this._chartAnchor=this._rangeEnd;try{let e=await this.hass.callWS(this._buildWsParams());this._data=e}catch(e){console.debug(`[RoomMind] fetchData:`,e),this._data=null}finally{this._loading=!1}}}async _silentRefresh(){if(!(!this._selectedRoom||this._loading))try{let e=await this.hass.callWS(this._buildWsParams());this._data=e,this._chartAnchor=Date.now()}catch(e){console.debug(`[RoomMind] silentRefresh:`,e)}}static{this.styles=l`
    :host {
      display: block;
    }

    .no-data {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 80px 16px;
      text-align: center;
      color: var(--secondary-text-color);
    }

    .no-data p {
      font-size: 15px;
      max-width: 400px;
      line-height: 1.5;
      margin-top: 16px;
    }

    .loading {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 80px 16px;
      color: var(--secondary-text-color);
      font-size: 14px;
    }
  `}};j([x({attribute:!1})],Q.prototype,`hass`,void 0),j([x({type:Object})],Q.prototype,`rooms`,void 0),j([x()],Q.prototype,`initialRoom`,void 0),j([x()],Q.prototype,`controlMode`,void 0),j([S()],Q.prototype,`_selectedRoom`,void 0),j([S()],Q.prototype,`_rangeStart`,void 0),j([S()],Q.prototype,`_rangeEnd`,void 0),j([S()],Q.prototype,`_data`,void 0),j([S()],Q.prototype,`_chartAnchor`,void 0),j([S()],Q.prototype,`_loading`,void 0),j([S()],Q.prototype,`_activeQuick`,void 0),Q=j([b(`rs-analytics`)],Q),y(),C(),M();var On=`M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z`,kn=`M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z`,An=`M16,11.78L20.24,4.45L21.97,5.45L16.74,14.5L10.23,10.75L5.46,19H22V21H2V3H4V17.54L9.5,8L16,11.78Z`,jn=`M15 13V5A3 3 0 0 0 9 5V13A5 5 0 1 0 15 13M12 4A1 1 0 0 1 13 5V8H11V5A1 1 0 0 1 12 4Z`,$=class extends v{constructor(...e){super(...e),this.narrow=!1,this.route={path:``},this.panel={},this._activeTab=`areas`,this._rooms={},this._roomsLoaded=!1,this._selectedAreaId=null,this._analyticsRoom=``,this._vacationActive=!1,this._vacationTemp=null,this._vacationUntil=null,this._hiddenRooms=[],this._showHiddenRooms=!1,this._controlMode=`bangbang`,this._climateControlActive=!0,this._presenceEnabled=!1,this._valveProtectionEnabled=!1,this._anyoneHome=!0,this._presencePersons=[],this._presenceAwayAction=`eco`,this._saveStatus=`idle`,this._roomOrder=[],this._groupByFloor=!1,this._reorderMode=!1,this._elementsLoaded=!1,this._routeApplied=!1,this._areaInfosCache=[],this._onSaveStatus=e=>{e.stopPropagation(),this._saveStatusTimeout&&clearTimeout(this._saveStatusTimeout),this._saveStatus=e.detail.status,e.detail.status===`saved`&&(this._saveStatusTimeout=setTimeout(()=>{this._saveStatus=`idle`},2e3))}}static{this.styles=l`
    :host {
      display: block;
      font-family: var(--primary-font-family, Roboto, sans-serif);
      color: var(--primary-text-color);
      background: var(--primary-background-color);
      min-height: 100vh;

      /* Round the corners of all MDC-based inputs (ha-textfield, ha-select,
         ha-entity-picker, ha-combo-box) to match the rest of the design.
         The bottom corners are rounded via inputStyles in each component. */
      --mdc-shape-small: 8px;
      --mdc-shape-medium: 8px;
      --md-filled-text-field-container-shape: 8px;
      --md-outlined-text-field-container-shape: 8px;
    }

    .toolbar {
      display: flex;
      align-items: center;
      height: 56px;
      padding: 0 12px;
      font-size: 20px;
      background-color: var(--app-header-background-color, var(--primary-background-color));
      color: var(--app-header-text-color, var(--primary-text-color));
      border-bottom: 1px solid var(--divider-color);
      box-sizing: border-box;
      position: sticky;
      top: 0;
      z-index: 4;
    }

    .toolbar .title {
      margin-left: 4px;
      font-weight: 400;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      flex: 1;
    }

    .toolbar ha-icon-button {
      color: var(--app-header-text-color, var(--primary-text-color));
    }

    .save-indicator {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 13px;
      font-weight: 400;
      margin-right: 8px;
      opacity: 1;
      transition: opacity 0.3s ease;
    }

    .save-indicator.fade-out {
      opacity: 0;
    }

    .save-indicator ha-icon {
      --mdc-icon-size: 18px;
    }

    .save-indicator.saving {
      color: var(--primary-color, #03a9f4);
    }

    .save-indicator.saved {
      color: var(--success-color, #4caf50);
    }

    .save-indicator.error {
      color: var(--error-color, #d32f2f);
    }

    .tabs {
      display: flex;
      gap: 0;
      border-bottom: 1px solid var(--divider-color);
      padding: 0 16px;
      background: var(--primary-background-color);
      position: sticky;
      top: 56px;
      z-index: 3;
    }

    .tab {
      padding: 12px 24px;
      cursor: pointer;
      border: none;
      background: none;
      color: var(--secondary-text-color);
      font-size: 14px;
      font-weight: 500;
      border-bottom: 2px solid transparent;
      transition: all 0.2s ease;
      font-family: inherit;
    }

    .tab:hover {
      color: var(--primary-text-color);
    }

    .tab[active] {
      color: var(--primary-color);
      border-bottom-color: var(--primary-color);
    }

    .content {
      padding: 24px;
      max-width: 1200px;
      margin: 0 auto;
      box-sizing: border-box;
    }

    @media (max-width: 600px) {
      .content {
        padding: 16px;
      }
    }

    .placeholder {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 80px 16px;
      text-align: center;
      color: var(--secondary-text-color);
    }

    .placeholder ha-icon {
      margin-bottom: 16px;
    }

    .placeholder p {
      font-size: 15px;
      max-width: 400px;
      line-height: 1.5;
    }

    .area-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(min(360px, 100%), 1fr));
      gap: 16px;
    }

    .loading {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 80px 16px;
      color: var(--secondary-text-color);
      font-size: 14px;
    }

    .stats-separator {
      width: 1px;
      height: 28px;
      background: var(--divider-color, #444);
      margin: 0 4px;
      flex-shrink: 0;
    }

    .stats-bar {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 12px 24px;
      margin-bottom: 20px;
      padding: 12px 16px;
    }

    .stats-actions {
      display: flex;
      align-items: center;
      margin-left: auto;
      gap: 0;
    }

    .hidden-rooms-toggle {
      --mdc-icon-button-size: 36px;
      --mdc-icon-size: 20px;
      color: var(--secondary-text-color);
    }

    .hidden-rooms-panel {
      margin-bottom: 20px;
      padding: 12px 16px;
    }

    .hidden-rooms-header {
      font-size: 13px;
      font-weight: 500;
      color: var(--secondary-text-color);
      margin-bottom: 8px;
    }

    .hidden-room-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 6px 0;
    }

    .hidden-room-name {
      font-size: 14px;
      color: var(--primary-text-color);
    }

    .stat {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .stat-value {
      font-size: 20px;
      font-weight: 500;
      color: var(--primary-text-color);
      --mdc-icon-size: 22px;
      line-height: 1;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 24px;
    }

    .stat-label {
      font-size: 12px;
      color: var(--secondary-text-color);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .floor-heading {
      font-size: 14px;
      font-weight: 500;
      color: var(--secondary-text-color);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin: 20px 0 8px 0;
    }

    .floor-heading:first-of-type {
      margin-top: 0;
    }

    .reorder-btn {
      --mdc-icon-button-size: 36px;
      --mdc-icon-size: 20px;
      color: var(--secondary-text-color);
    }

    .reorder-done {
      font-size: 14px;
      margin-left: auto;
    }
  `}connectedCallback(){super.connectedCallback(),en().then(()=>{this._elementsLoaded=!0}),this._loadRooms(),this._refreshInterval=setInterval(()=>this._loadRooms(),5e3),this.addEventListener(`save-status`,this._onSaveStatus),this._routeApplied||=(this._applyRoute(),!0),this._boundVisibilityHandler||(this._boundVisibilityHandler=()=>{if(!document.hidden){if(!this.isConnected){window.location.reload();return}this._loadRooms(),this.requestUpdate()}},document.addEventListener(`visibilitychange`,this._boundVisibilityHandler))}disconnectedCallback(){super.disconnectedCallback(),this._refreshInterval&&=(clearInterval(this._refreshInterval),void 0),this._saveStatusTimeout&&clearTimeout(this._saveStatusTimeout),this.removeEventListener(`save-status`,this._onSaveStatus),this._boundConnectionReady&&=(this.hass?.connection?.removeEventListener(`ready`,this._boundConnectionReady),void 0)}render(){if(!this._elementsLoaded||!this.hass)return g``;let e=this.hass.language,t=!!this._selectedAreaId,n=t?this.hass?.areas?.[this._selectedAreaId]:null,r={areas:w(`panel.tab.rooms`,e),analytics:w(`tabs.analytics`,e),settings:w(`panel.tab.settings`,e)};return g`
      <div class="toolbar">
        ${t?g`<ha-icon-button
              .path=${On}
              @click=${this._onBackFromDetail}
            ></ha-icon-button>`:g`<ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>`}
        <div class="title">
          ${t?this._rooms[this._selectedAreaId]?.display_name||n?.name||``:w(`panel.title`,e)}
        </div>
        ${this._renderSaveIndicator()}
        ${t&&this._rooms[this._selectedAreaId]?g`<ha-icon-button
                .path=${An}
                @click=${this._onGoToAnalytics}
              ></ha-icon-button
              ><ha-icon-button .path=${kn} @click=${this._onDeleteRoom}></ha-icon-button>`:_}
        ${!t&&this._activeTab===`analytics`&&this._analyticsRoom?g`<ha-icon-button
              .path=${jn}
              @click=${this._onGoToRoomFromAnalytics}
            ></ha-icon-button>`:_}
      </div>

      ${t?_:g`
            <div class="tabs">
              ${Object.keys(r).map(e=>g`
                  <button
                    class="tab"
                    ?active=${this._activeTab===e}
                    @click=${()=>this._onTabClicked(e)}
                  >
                    ${r[e]}
                  </button>
                `)}
            </div>
          `}

      <div class="content">${this._renderTab()}</div>
    `}_renderTab(){switch(this._activeTab){case`areas`:return this._renderAreas();case`analytics`:return g`<rs-analytics
          .hass=${this.hass}
          .rooms=${this._rooms}
          .initialRoom=${this._analyticsRoom}
          .controlMode=${this._controlMode}
          @room-selected=${this._onAnalyticsRoomSelected}
        ></rs-analytics>`;case`settings`:return this._renderSettings();default:return _}}_renderAreas(){if(this._selectedAreaId){let e=this.hass?.areas?.[this._selectedAreaId];if(e)return g`
          <rs-room-detail
            .area=${e}
            .config=${this._rooms[this._selectedAreaId]??null}
            .hass=${this.hass}
            .presenceEnabled=${this._presenceEnabled}
            .presencePersons=${this._presencePersons}
            .climateControlActive=${this._climateControlActive}
            .valveProtectionEnabled=${this._valveProtectionEnabled}
            @back-clicked=${this._onBackFromDetail}
            @room-updated=${this._onRoomUpdated}
          ></rs-room-detail>
        `;this._selectedAreaId=null}if(!this._roomsLoaded)return g`<div class="loading">${w(`panel.loading`,this.hass.language)}</div>`;let e=this._areaInfosCache,t=e.filter(e=>!this._hiddenRooms.includes(e.area.area_id)),n=e.filter(e=>this._hiddenRooms.includes(e.area.area_id));if(e.length===0)return g`
        <div class="placeholder">
          <ha-icon icon="mdi:home" style="--mdc-icon-size: 56px; opacity: 0.4"></ha-icon>
          <p>
            ${w(`panel.no_areas`,this.hass.language)}<br />${w(`panel.no_areas_hint`,this.hass.language)}
          </p>
        </div>
      `;let r=t.filter(e=>e.config).length,i=t.filter(e=>e.config?.live?.mode===`heating`).length,a=t.filter(e=>e.config?.live?.mode===`cooling`).length,o=t.filter(e=>e.config?.live?.mold_risk_level===`warning`||e.config?.live?.mold_risk_level===`critical`).length,s=this._vacationActive||this._presenceEnabled&&!this._anyoneHome||o>0,c=this.hass.language;return g`
      ${r>0||n.length>0?g`
            <ha-card class="stats-bar">
              ${r>0?g`
                    <div class="stat">
                      <span class="stat-value">${r}</span>
                      <span class="stat-label">${w(`panel.stat.rooms`,c)}</span>
                    </div>
                    <div class="stat">
                      <span class="stat-value" style="color: var(--warning-color, #ff9800)"
                        >${i}</span
                      >
                      <span class="stat-label">${w(`panel.stat.heating`,c)}</span>
                    </div>
                    <div class="stat">
                      <span class="stat-value" style="color: var(--info-color, #2196f3)"
                        >${a}</span
                      >
                      <span class="stat-label">${w(`panel.stat.cooling`,c)}</span>
                    </div>
                  `:_}
              ${s?g`<div class="stats-separator"></div>`:_}
              ${this._vacationActive?g`
                    <div class="stat">
                      <span class="stat-value" style="color: var(--success-color, #4caf50)">
                        <ha-icon icon="mdi:airplane"></ha-icon>
                      </span>
                      <span class="stat-label">${w(`panel.stat.vacation`,c)}</span>
                    </div>
                  `:_}
              ${this._presenceEnabled&&!this._anyoneHome?g`
                    <div class="stat">
                      <span class="stat-value" style="color: var(--secondary-text-color)">
                        <ha-icon icon="mdi:power"></ha-icon>
                      </span>
                      <span class="stat-label">${w(`panel.stat.away`,c)}</span>
                    </div>
                  `:_}
              ${o>0?g`
                    <div class="stat">
                      <span class="stat-value" style="color: var(--error-color, #f44336)"
                        >${o}</span
                      >
                      <span class="stat-label">${w(`panel.stat.mold`,c)}</span>
                    </div>
                  `:_}
              <span class="stats-actions">
                ${n.length>0?g`<ha-icon-button
                      class="hidden-rooms-toggle"
                      .path=${Ct}
                      @click=${()=>{this._showHiddenRooms=!this._showHiddenRooms}}
                    ></ha-icon-button>`:_}
                ${this._reorderMode?g`<ha-button class="reorder-done" @click=${this._onReorderDone}>
                      ${w(`panel.reorder_done`,c)}
                    </ha-button>`:g`<ha-icon-button
                      class="reorder-btn"
                      .path=${`M9,3L5,7H8V14H10V7H13M16,17V10H14V17H11L15,21L19,17H16Z`}
                      @click=${()=>{this._reorderMode=!0}}
                      title=${w(`panel.reorder`,c)}
                    ></ha-icon-button>`}
              </span>
            </ha-card>
          `:_}
      ${this._showHiddenRooms&&n.length>0?g`
            <ha-card class="hidden-rooms-panel">
              <div class="hidden-rooms-header">
                <span>${w(`panel.hidden_rooms`,c)} (${n.length})</span>
              </div>
              ${n.map(e=>g`
                  <div class="hidden-room-row">
                    <span class="hidden-room-name">${e.area.name}</span>
                    <ha-button @click=${()=>this._unhideRoom(e.area.area_id)}>
                      ${w(`panel.unhide`,c)}
                    </ha-button>
                  </div>
                `)}
            </ha-card>
          `:_}
      ${this._getFloorGroups(t).map(e=>g`
          ${e.name?g`<h4 class="floor-heading">${e.name}</h4>`:_}
          <div class="area-grid">
            ${e.items.map((t,n)=>g`
                <rs-area-card
                  .area=${t.area}
                  .config=${t.config}
                  .climateEntityCount=${t.climateEntityCount}
                  .tempSensorCount=${t.tempSensorCount}
                  .hass=${this.hass}
                  .controlMode=${this._controlMode}
                  .climateControlActive=${this._climateControlActive}
                  .reordering=${this._reorderMode}
                  .canMoveUp=${n>0}
                  .canMoveDown=${n<e.items.length-1}
                  @area-selected=${this._onAreaSelected}
                  @hide-room=${this._onHideRoom}
                  @move-room-up=${this._onMoveRoomUp}
                  @move-room-down=${this._onMoveRoomDown}
                ></rs-area-card>
              `)}
          </div>
        `)}
    `}_renderSettings(){return g`<rs-settings .hass=${this.hass} .rooms=${this._rooms}></rs-settings>`}_computeAreaInfos(){if(!this.hass?.areas)return[];let e=Object.values(this.hass.areas).map(e=>{let t=vt(e.area_id,this.hass.entities,this.hass.devices).filter(e=>!e.entity_id.substring(e.entity_id.indexOf(`.`)+1).startsWith(`roommind_`)),n=t.filter(e=>e.entity_id.startsWith(`climate.`)).length,r=t.filter(e=>e.entity_id.startsWith(`sensor.`)&&this.hass.states[e.entity_id]?.attributes?.device_class===`temperature`).length;return{area:e,config:this._rooms[e.area_id]??null,climateEntityCount:n,tempSensorCount:r}}),t=new Map(this._roomOrder.map((e,t)=>[e,t]));return e.sort((e,n)=>{let r=t.get(e.area.area_id),i=t.get(n.area.area_id);if(r!==void 0&&i!==void 0)return r-i;if(r!==void 0)return-1;if(i!==void 0)return 1;let a=e.config?2:+(e.climateEntityCount>0),o=n.config?2:+(n.climateEntityCount>0);return a===o?e.area.name.localeCompare(n.area.name):o-a}),e}_getFloorGroups(e){if(!this._groupByFloor||!this.hass.floors)return[{name:``,items:e}];let t=this.hass.floors,n=this.hass.language,r=new Map,i=[];for(let t of e){let e=t.area.floor_id??null;r.has(e)||(r.set(e,[]),i.push(e)),r.get(e).push(t)}return i.sort((e,n)=>{if(e===null)return 1;if(n===null)return-1;let r=t[e],i=t[n];return r?.level!=null&&i?.level!=null?i.level-r.level:r?.level==null?i?.level==null?(r?.name??``).localeCompare(i?.name??``):1:-1}),i.map(e=>({name:e===null?w(`panel.floor_other`,n):t[e]?.name??w(`panel.floor_other`,n),items:r.get(e)}))}async _loadRooms(){if(this.hass)try{let e=await this.hass.callWS({type:`roommind/rooms/list`});this._rooms=e.rooms,this._vacationActive=e.vacation_active??!1,this._vacationTemp=e.vacation_temp??null,this._vacationUntil=e.vacation_until??null,this._hiddenRooms=e.hidden_rooms??[],this._roomOrder=e.room_order??[],this._groupByFloor=e.group_by_floor??!1,this._controlMode=e.control_mode??`bangbang`,this._climateControlActive=e.climate_control_active??!0,this._presenceEnabled=e.presence_enabled??!1,this._valveProtectionEnabled=e.valve_protection_enabled??!1,this._anyoneHome=e.anyone_home??!0,this._presencePersons=e.presence_persons??[],this._presenceAwayAction=e.presence_away_action??`eco`}catch(e){console.debug(`[RoomMind] loadRooms:`,e)}finally{this._roomsLoaded=!0}}_onBackFromDetail(){this._selectedAreaId=null,this._navigate(``)}async _onDeleteRoom(){if(!this._selectedAreaId)return;let e=this.hass?.areas?.[this._selectedAreaId];if(e&&confirm(w(`room.confirm_delete`,this.hass.language,{name:e.name})))try{await this.hass.callWS({type:`roommind/rooms/delete`,area_id:this._selectedAreaId}),this._selectedAreaId=null,this._navigate(``),this._loadRooms()}catch(e){console.debug(`[RoomMind] deleteRoom:`,e)}}_onTabClicked(e){this._activeTab=e,this._selectedAreaId=null,e===`areas`?this._navigate(``):this._navigate(`/${e}`)}_onAreaSelected(e){this._selectedAreaId=e.detail.areaId,this._navigate(`/room/${e.detail.areaId}`)}async _onHideRoom(e){let t=[...new Set([...this._hiddenRooms,e.detail.areaId])];this._hiddenRooms=t;try{await this.hass.callWS({type:`roommind/settings/save`,hidden_rooms:t})}catch(e){console.debug(`[RoomMind] hideRoom:`,e)}}async _unhideRoom(e){let t=this._hiddenRooms.filter(t=>t!==e);this._hiddenRooms=t,t.length===0&&(this._showHiddenRooms=!1);try{await this.hass.callWS({type:`roommind/settings/save`,hidden_rooms:t})}catch(e){console.debug(`[RoomMind] unhideRoom:`,e)}}_onGoToAnalytics(){this._selectedAreaId&&(this._analyticsRoom=this._selectedAreaId,this._selectedAreaId=null,this._activeTab=`analytics`,this._navigate(`/analytics/${this._analyticsRoom}`))}_onGoToRoomFromAnalytics(){this._analyticsRoom&&(this._selectedAreaId=this._analyticsRoom,this._activeTab=`areas`,this._navigate(`/room/${this._analyticsRoom}`))}_onAnalyticsRoomSelected(e){this._analyticsRoom=e.detail.areaId,this._navigate(`/analytics/${e.detail.areaId}`)}async _onMoveRoomUp(e){this._moveRoom(e.detail.areaId,-1)}async _onMoveRoomDown(e){this._moveRoom(e.detail.areaId,1)}async _moveRoom(e,t){let n=this._areaInfosCache.filter(e=>!this._hiddenRooms.includes(e.area.area_id));if(this._groupByFloor&&this.hass.floors){let r=this._getFloorGroups(n);for(let n of r){let i=n.items.map(e=>e.area.area_id),a=i.indexOf(e);if(a===-1)continue;let o=a+t;if(o<0||o>=i.length)return;[i[a],i[o]]=[i[o],i[a]];let s=r.flatMap(e=>e===n?i:e.items.map(e=>e.area.area_id));await this._saveRoomOrder(s);return}}else{let r=n.map(e=>e.area.area_id),i=r.indexOf(e);if(i===-1)return;let a=i+t;if(a<0||a>=r.length)return;[r[i],r[a]]=[r[a],r[i]],await this._saveRoomOrder(r)}}async _saveRoomOrder(e){this._roomOrder=e,this._areaInfosCache=this._computeAreaInfos();try{await this.hass.callWS({type:`roommind/settings/save`,room_order:e})}catch(e){console.debug(`[RoomMind] saveRoomOrder:`,e)}}_onReorderDone(){this._reorderMode=!1}_onRoomUpdated(){this._loadRooms()}_renderSaveIndicator(){if(this._saveStatus===`idle`)return _;let e=this.hass.language,t=this._saveStatus===`saving`?`mdi:content-save-outline`:this._saveStatus===`saved`?`mdi:check`:`mdi:alert-circle-outline`,n=this._saveStatus===`saving`?w(`settings.saving`,e):this._saveStatus===`saved`?w(`settings.saved`,e):w(`settings.error`,e);return g`
      <span class="save-indicator ${this._saveStatus}">
        <ha-icon .icon=${t}></ha-icon>
        ${n}
      </span>
    `}willUpdate(e){e.has(`route`)&&this._routeApplied&&this._applyRoute(),(e.has(`_rooms`)||e.has(`hass`))&&(this._areaInfosCache=this._computeAreaInfos())}updated(e){e.has(`hass`)&&this.hass&&!this._roomsLoaded&&this._loadRooms(),e.has(`hass`)&&this.hass?.connection&&!this._boundConnectionReady&&(this._boundConnectionReady=()=>{this._loadRooms(),this.requestUpdate()},this.hass.connection.addEventListener(`ready`,this._boundConnectionReady))}_navigate(e){history.replaceState(null,``,`/roommind${e}`),window.dispatchEvent(new Event(`location-changed`))}_applyRoute(){let e=this.route?.path??``;e.startsWith(`/room/`)?(this._activeTab=`areas`,this._selectedAreaId=decodeURIComponent(e.slice(6))):e.startsWith(`/analytics/`)?(this._activeTab=`analytics`,this._selectedAreaId=null,this._analyticsRoom=decodeURIComponent(e.slice(11))):e===`/analytics`?(this._activeTab=`analytics`,this._selectedAreaId=null,this._analyticsRoom=``):e===`/settings`?(this._activeTab=`settings`,this._selectedAreaId=null):(this._activeTab=`areas`,this._selectedAreaId=null)}};j([x({attribute:!1})],$.prototype,`hass`,void 0),j([x({type:Boolean,reflect:!0})],$.prototype,`narrow`,void 0),j([x({type:Object})],$.prototype,`route`,void 0),j([x({type:Object})],$.prototype,`panel`,void 0),j([S()],$.prototype,`_activeTab`,void 0),j([S()],$.prototype,`_rooms`,void 0),j([S()],$.prototype,`_roomsLoaded`,void 0),j([S()],$.prototype,`_selectedAreaId`,void 0),j([S()],$.prototype,`_analyticsRoom`,void 0),j([S()],$.prototype,`_vacationActive`,void 0),j([S()],$.prototype,`_vacationTemp`,void 0),j([S()],$.prototype,`_vacationUntil`,void 0),j([S()],$.prototype,`_hiddenRooms`,void 0),j([S()],$.prototype,`_showHiddenRooms`,void 0),j([S()],$.prototype,`_controlMode`,void 0),j([S()],$.prototype,`_climateControlActive`,void 0),j([S()],$.prototype,`_presenceEnabled`,void 0),j([S()],$.prototype,`_valveProtectionEnabled`,void 0),j([S()],$.prototype,`_anyoneHome`,void 0),j([S()],$.prototype,`_presencePersons`,void 0),j([S()],$.prototype,`_presenceAwayAction`,void 0),j([S()],$.prototype,`_saveStatus`,void 0),j([S()],$.prototype,`_roomOrder`,void 0),j([S()],$.prototype,`_groupByFloor`,void 0),j([S()],$.prototype,`_reorderMode`,void 0),j([S()],$.prototype,`_elementsLoaded`,void 0),$=j([b(`roommind-panel`)],$)})();