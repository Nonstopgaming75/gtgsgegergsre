(function(p,v,a,l,g,c,u,y,Y,D,F){"use strict";function N(){const e=window[window.__vendetta_loader?.features?.themes?.prop];if(e)return e?.data?.plus}function d(e,t){e.style=Object.assign(a.ReactNative.StyleSheet.flatten(e.style),t)}const{TextStyleSheet:O}=c.findByProps("TextStyleSheet"),{View:J,Text:B,Pressable:Q}=y.General;c.find(function(e){return e.render?.name==="ActionSheet"}),c.findByProps("openLazy","hideActionSheet"),c.findByProps("ActionSheetTitleHeader","ActionSheetCloseButton","ActionSheetContentContainer");function S(e){const t=c.findByProps("colors","meta"),r=c.findByStoreName("ThemeStore");return t.meta.resolveSemanticColor(r.theme,e)}var k;(function(e){function t(n){let{children:i,onPress:o}=n;return a.React.createElement(L,{variant:"text-md/bold",onPress:o},i)}e.Bold=t;function r(n){let{children:i,onPress:o}=n;return a.React.createElement(B,{style:{textDecorationLine:"underline"},onPress:o},i)}e.Underline=r})(k||(k={}));function L(e){let{variant:t,lineClamp:r,color:n,align:i,style:o,onPress:s,getChildren:f,children:h,liveUpdate:K}=e;const[X,w]=a.React.useReducer(function(_){return~_},0);return a.React.useEffect(function(){if(!K)return;const _=new Date().setMilliseconds(1e3);let E,x;return x=setTimeout(function(){w(),E=setInterval(w,1e3)},_-Date.now()),function(){clearTimeout(x),clearInterval(E)}},[]),a.React.createElement(B,{style:[t?O[t]:{},n?{color:S(u.semanticColors[n])}:{},i?{textAlign:i}:{},o??{}],numberOfLines:r,onPress:s},f?.()??h)}const M=c.findByStoreName("UnsyncedUserSettingsStore");function U(e){const t=M.useAMOLEDTheme;if(t===3)return e.darker??e.dark;if(t===2)return e.amoled??e.dark;if(t===1)return e.light;if(t===0)return e.dark}function m(e){if(Array.isArray(e))return U({dark:e[0],light:e[1],amoled:e[2],darker:e[3]});if(e.startsWith("SC_"))return u.semanticColors[e.slice(3)]?S(u.semanticColors[e.slice(3)]):"#ffffff";if(e.startsWith("RC_"))return u.rawColors[e.slice(3)]??"#ffffff";if(e.startsWith("#")&&e.length===4)return`#${e[1].repeat(2)}${e[2].repeat(2)}${e[3].repeat(2)}`;if(e.startsWith("#")&&e.length===7)return e}function $(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:255;const[r,n,i,o]=e.match(/#([A-F0-9]{2})([A-F0-9]{2})([A-F0-9]{2})/i);return(t&255)<<24|(parseInt(n,16)&255)<<16|(parseInt(i,16)&255)<<8|parseInt(o,16)&255}function A(e,t,r){const n=r??g.getAssetByID(t)?.name;if(n&&e.icons[n])return m(e.icons[n])}function R(e,t,r){if(typeof r.props.source=="number"){const n=A(e,r.props.source,t);n&&d(r.props,{tintColor:n})}return r.props.ignore=!0,r}function b(e){if(e.unreadBadgeColor)return m(e.unreadBadgeColor)}const{View:C}=y.General,{MaskedBadge:G}=c.findByProps("MaskedBadge"),V=a.stylesheet.createThemedStyleSheet({maskPins:{position:"absolute",right:-10,bottom:-10,backgroundColor:u.semanticColors.BACKGROUND_SECONDARY}}),T="https://cdn.discordapp.com/attachments/919655852724604978/1134434803228344360/inner_check.png";function W(e,t,r){const n=g.getAssetByID(t)?.name;if(n){if(["ic_new_pins_light","ic_new_pins"].includes(n))return{replace:n.includes("light")?"icon-pins":"ic_pins",children:React.createElement(C,{style:{position:"absolute",right:0,bottom:0}},React.createElement(G,{maskStyle:V.maskPins,value:1,hideCount:!0}))};if(["ic_selection_checked_24px","ic_radio_square_checked_24px","ic_check","ic_radio_circle_checked"].includes(n))return{style:{tintColor:"#5865F2"},children:React.createElement(C,{style:{position:"absolute",left:0,top:0}},R(e,`${n}__overlay`,React.createElement(a.ReactNative.Image,{source:{uri:T},style:[...r,{tintColor:"#FFF"}]})))};if(["app_installed_check","ic_radio_circle_checked_green"].includes(n))return{style:{tintColor:"#3BA55C"},children:React.createElement(C,{style:{position:"absolute",left:0,top:0}},R(e,`${n}__overlay`,React.createElement(a.ReactNative.Image,{source:{uri:T},style:[...r,{tintColor:"#FFF"}]})))}}}const{View:H}=y.General,P=c.findByProps("MaskedBadge"),j=c.findByProps("createBackgroundHighlight");function z(){const e=new Array,t=N();return t?.version!==void 0&&((t.icons||t.customOverlays)&&e.push(l.instead("render",a.ReactNative.Image,function(r,n){const[i]=r;if(!i.source||typeof i.source!="number"||i.ignore)return n(...r);let o=i.source,s;if(t.customOverlays&&(s=W(t,o,i.style?Array.isArray(i.style)?i.style:[i.style]:[]),s&&(s.replace&&(i.source=g.getAssetIDByName(s.replace)),s.style&&d(i,s.style))),t.icons){const h=A(t,o);h&&d(i,{tintColor:h})}const f=n(...r);return s?.children?React.createElement(H,null,f,s.children):f})),t.unreadBadgeColor&&(e.push(l.after("MaskedBadge",P,function(r,n){const i=n&&D.findInReactTree(n,function(o){return o?.type?.name==="Badge"});i&&e.push(l.after("type",i,function(o,s){return s?.props&&d(s.props,{backgroundColor:b(t)})},!0))})),e.push(l.after("default",P,function(r,n){return n?.props&&d(n.props,{backgroundColor:b(t)})}))),t.mentionLineColor&&e.push(l.after("createBackgroundHighlight",j,function(r,n){let[i]=r;const o=m(t.mentionLineColor);i?.message?.mentioned&&o&&(n.gutterColor=$(o,200))}))),function(){e.forEach(function(r){return r()})}}let I;var q={onLoad:function(){I=z(),v.storage.firstInstall||(v.storage.firstInstall=!0,F.showConfirmationAlert({title:"About Themes+",content:"Themes+ is a plugin that adds more customizability to themes, such as recoloring icons.",confirmText:"More Info",confirmColor:"brand",onConfirm:function(){return a.url.openURL("https://github.com/Gabe616/VendettaThemesPlus/#info")},cancelText:"Close"}))},onUnload:function(){return I?.()}};return p.default=q,Object.defineProperty(p,"__esModule",{value:!0}),p})({},vendetta.plugin,vendetta.metro.common,vendetta.patcher,vendetta.ui.assets,vendetta.metro,vendetta.ui,vendetta.ui.components,vendetta.ui.toasts,vendetta.utils,vendetta.ui.alerts);
