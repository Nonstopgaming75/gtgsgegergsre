(function(o,a,C,v,s,E,m,D,x,ce,oe,M,$,se){"use strict";function le(){const e=window[window.__vendetta_loader?.features?.themes?.prop];if(e)return e?.data?.plus}const I=s.findByStoreName("SelectivelySyncedUserSettingsStore");function O(e){return a.ReactNative.StyleSheet.flatten(e)??{}}function k(e,t){e.style=Object.assign(O(e.style),t)}function F(){const e=I.getAppearanceSettings().theme.slice(),t=function(){I.removeChangeListener(t),a.FluxDispatcher.dispatch({type:"SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE",changes:{appearance:{settings:{theme:e}}}})};I.addChangeListener(t),a.FluxDispatcher.dispatch({type:"SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE",changes:{appearance:{settings:{theme:e==="light"?"dark":"light"}}}})}const ue=s.findByStoreName("ThemeStore"),de=s.findByProps("colors","meta"),{TextStyleSheet:he}=s.findByProps("TextStyleSheet"),{View:Ve,Text:G,Pressable:je}=m.General,V=s.find(function(e){return e.render?.name==="ActionSheet"}),{openLazy:fe,hideActionSheet:pe}=s.findByProps("openLazy","hideActionSheet"),{ActionSheetTitleHeader:ge,ActionSheetCloseButton:ye,ActionSheetContentContainer:me}=s.findByProps("ActionSheetTitleHeader","ActionSheetCloseButton","ActionSheetContentContainer"),Re=s.findByName("Navigator"),{getRenderCloseButton:ve}=s.findByProps("getRenderCloseButton"),{popModal:j,pushModal:Te}=s.findByProps("popModal","pushModal");function A(e){return de.meta.resolveSemanticColor(ue.theme,e)}function Ee(e,t){V?fe(new Promise(function(i){return i({default:e})}),"ActionSheet",t):D.showToast("You cannot open ActionSheets on this version! Update to 163+",v.getAssetIDByName("Small"))}function z(e,t){Te({key:e,modal:{key:e,modal:t,animation:"slide-up",shouldPersistUnderModals:!1,closable:!0}})}function Ce(e){return a.React.createElement(Re,{initialRouteName:e.mkey,screens:{[e.mkey]:Object.assign(x.without(e,"mkey","children"),{headerLeft:ve(function(){return j(e.mkey)}),render:function(){return e.children}})}})}var X;(function(e){function t(n){let{children:r,onPress:c}=n;return a.React.createElement(y,{variant:"text-md/bold",onPress:c},r)}e.Bold=t;function i(n){let{children:r,onPress:c}=n;return a.React.createElement(G,{style:{textDecorationLine:"underline"},onPress:c},r)}e.Underline=i})(X||(X={}));function y(e){let{variant:t,lineClamp:i,color:n,align:r,style:c,onPress:d,getChildren:f,children:R,liveUpdate:l}=e;const[P,p]=a.React.useReducer(function(T){return~T},0);return a.React.useEffect(function(){if(!l)return;const T=new Date().setMilliseconds(1e3);let g,_;return _=setTimeout(function(){p(),g=setInterval(p,1e3)},T-Date.now()),function(){clearTimeout(_),clearInterval(g)}},[]),a.React.createElement(G,{style:[t?he[t]:{},n?{color:A(E.semanticColors[n])}:{},r?{textAlign:r}:{},c??{}],numberOfLines:i,onPress:d},f?.()??R)}const ke=s.findByStoreName("UnsyncedUserSettingsStore");function Se(e){const t=ke.useAMOLEDTheme;if(t===3)return e.darker??e.dark;if(t===2)return e.amoled??e.dark;if(t===1)return e.light;if(t===0)return e.dark}function B(e){if(Array.isArray(e))return Se({dark:e[0],light:e[1],amoled:e[2],darker:e[3]});if(e.startsWith("SC_"))return E.semanticColors[e.slice(3)]?A(E.semanticColors[e.slice(3)]):"#ffffff";if(e.startsWith("RC_"))return E.rawColors[e.slice(3)]??"#ffffff";if(e.startsWith("#")&&e.length===4)return`#${e[1].repeat(2)}${e[2].repeat(2)}${e[3].repeat(2)}`;if(e.startsWith("#")&&e.length===7)return e}function Pe(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:255;const[i,n,r,c]=e.match(/#([A-F0-9]{2})([A-F0-9]{2})([A-F0-9]{2})/i);return(t&255)<<24|(parseInt(n,16)&255)<<16|(parseInt(r,16)&255)<<8|parseInt(c,16)&255}function H(e,t,i){const n=i??v.getAssetByID(t)?.name;if(n&&e.icons[n])return B(e.icons[n])}function W(e,t,i){if(typeof i.props.source=="number"){const n=H(e,i.props.source,t);n&&k(i.props,{tintColor:n})}return i.props.ignore=!0,i}function Y(e){if(e.unreadBadgeColor)return B(e.unreadBadgeColor)}const{View:w}=m.General,{MaskedBadge:_e}=s.findByProps("MaskedBadge"),be=a.stylesheet.createThemedStyleSheet({maskPins:{position:"absolute",right:-10,bottom:-10,backgroundColor:E.semanticColors.BACKGROUND_SECONDARY}}),K="https://cdn.discordapp.com/attachments/919655852724604978/1134434803228344360/inner_check.png";function Ie(e,t,i){const n=v.getAssetByID(t)?.name;if(n){if(["ic_new_pins_light","ic_new_pins"].includes(n))return{replace:n.includes("light")?"icon-pins":"ic_pins",children:React.createElement(w,{style:{position:"absolute",right:0,bottom:0}},React.createElement(_e,{maskStyle:be.maskPins,value:1,hideCount:!0}))};if(["ic_selection_checked_24px","ic_radio_square_checked_24px","ic_check","ic_radio_circle_checked"].includes(n))return{style:{tintColor:"#5865F2"},children:React.createElement(w,{style:{position:"absolute",left:0,top:0}},W(e,`${n}__overlay`,React.createElement(a.ReactNative.Image,{source:{uri:K},style:[...i,{tintColor:"#FFF"}]})))};if(["app_installed_check","ic_radio_circle_checked_green"].includes(n))return{style:{tintColor:"#3BA55C"},children:React.createElement(w,{style:{position:"absolute",left:0,top:0}},W(e,`${n}__overlay`,React.createElement(a.ReactNative.Image,{source:{uri:K},style:[...i,{tintColor:"#FFF"}]})))}}}var q={iconpacks:{list:"https://raw.githubusercontent.com/Gabe616/VendettaThemesPlus/main/iconpacks/list.json",assets:"https://raw.githubusercontent.com/Gabe616/VendettaThemesPlus/main/iconpacks/assets/"}},Ae=void 0;const{View:Be}=m.General,J=s.findByProps("MaskedBadge"),we=s.findByProps("createBackgroundHighlight"),Ne=s.findByStoreName("UserStore"),N=new Array;async function Le(){const e=new Array,t=le();u.patches.length=0;const i=await(await fetch(q.iconpacks.list)).json();if(!o.enabled)return function(){};const n=Ne.getCurrentUser();if(t?.version!==void 0){if(u.active=!0,t.icons||t.customOverlays||t.iconpack||h.iconpack?.url){t.icons&&u.patches.push(o.PatchType.Icons),t.customOverlays&&u.patches.push(o.PatchType.CustomIconOverlays),(t.iconpack||h.iconpack?.url)&&u.patches.push(o.PatchType.IconPack);const r=h.iconpack?.url?{id:"custom-iconpack",description:"A custom iconpack!",credits:{authors:[`${n.username} <${n.id}>`],source:"N/A"},suffix:h.iconpack.suffix,load:h.iconpack.url}:i.list.find(function(d){return d.id===t.iconpack});u.iconpack=r??null;const c=r&&(r.load?r.load.endsWith("/")?r.load:r.load+"/":`${q.iconpacks.assets}${r.id}/`);e.push(C.instead("render",a.ReactNative.Image,function(d,f){const R=d.slice(),[l]=R;if(!l.source||typeof l.source!="number"||l.ignore)return f(...R);let P=l.source;const p=v.getAssetByID(P),T=r&&!N.includes(p.name);let g;if(t.customOverlays&&!T&&(g=Ie(t,P,l.style?Array.isArray(l.style)?l.style:[l.style]:[]),g&&(g.replace&&(l.source=v.getAssetIDByName(g.replace)),g.style&&k(l,g.style))),t.icons){const b=H(t,P);b&&k(l,{tintColor:b})}const _=function(){return Ae?.setState(function(b){return{forceUpdate:~(b.forceUpdate??0)}})};T&&(l.onError=function(){N.includes(p.name)||N.push(p.name),_()},l.source={uri:`${c}${[...p.httpServerLocation.split("/").slice(2),`${p.name}${r.suffix}.${p.type}`].join("/")}`},l.style=O(l.style),l.style.width??=p.width,l.style.height??=p.height,l.style.tintColor??=A(E.semanticColors.INTERACTIVE_NORMAL));const ie=f(...R);return g?.children&&!T?a.React.createElement(Be,null,ie,g.children):ie}))}t.unreadBadgeColor&&(u.patches.push(o.PatchType.UnreadBadgeColor),e.push(C.after("MaskedBadge",J,function(r,c){const d=c&&x.findInReactTree(c,function(f){return f?.type?.name==="Badge"});d&&e.push(C.after("type",d,function(f,R){return R?.props&&k(R.props,{backgroundColor:Y(t)})},!0))})),e.push(C.after("default",J,function(r,c){return c?.props&&k(c.props,{backgroundColor:Y(t)})}))),t.mentionLineColor&&(u.patches.push(o.PatchType.MentionLineColor),e.push(C.after("createBackgroundHighlight",we,function(r,c){let[d]=r;const f=B(t.mentionLineColor);d?.message?.mentioned&&f&&(c.gutterColor=Pe(f,200))})))}else u.active=!1;return u.patches[0]&&F(),function(){F(),e.forEach(function(r){return r()})}}const{BadgableTabBar:Ue}=s.findByProps("BadgableTabBar"),{ScrollView:De,View:xe}=m.General,{FormInput:Q}=m.Forms;function Z(){const[e,t]=a.React.useState("iconpack");return h.iconpack??={url:null,suffix:""},ce.useProxy(h),a.React.createElement(Ce,{mkey:"dev-modal",title:"Developer Modal"},a.React.createElement(De,null,a.React.createElement(xe,{style:{marginHorizontal:16,marginVertical:16}},a.React.createElement(Ue,{activeTab:e,onTabSelected:t,tabs:[{id:"iconpack",title:"Custom Iconpack"}]})),e==="iconpack"&&a.React.createElement(a.React.Fragment,null,a.React.createElement(y,{variant:"text-md/semibold",color:"TEXT_NORMAL",style:{marginHorizontal:16}},"Uses a custom iconpack, regardless of the current theme's settings"),a.React.createElement(Q,{title:"Root URL (raw.githubusercontent.com)",value:h.iconpack.url??"",onChange:function(i){return h.iconpack.url=i.match(oe.HTTP_REGEX_MULTI)?.[0]??null}}),a.React.createElement(Q,{title:"Icon Suffix",value:h.iconpack.suffix,onChange:function(i){return h.iconpack.suffix=i}}),a.React.createElement(m.Button,{size:"small",color:"green",text:"Reload",onPress:function(){M.stopPlugin($.plugin.id,!0),j("dev-modal"),M.startPlugin($.plugin.id)},style:{marginHorizontal:16}}))))}const{showUserProfile:ee}=s.findByProps("showUserProfile"),{fetchProfile:te}=s.findByProps("fetchProfile"),L=s.findByStoreName("UserStore");function Me(e){let{userId:t,color:i,loadUsername:n,children:r}=e;const[c,d]=a.React.useState(!1);return a.React.useEffect(function(){return!c&&n&&(L.getUser(t)?d(L.getUser(t).username):te(t).then(function(f){return d(f.user.username)}))},[n]),a.React.createElement(y,{variant:"text-md/bold",color:i??"TEXT_NORMAL",onPress:function(){return L.getUser(t)?ee({userId:t}):te(t).then(function(){return ee({userId:t})})}},n?`@${c??"..."}`:r)}const{FormRow:$e}=m.Forms,ne=function(e){const t=e.split(" <");return t[1]?[t[0],t[1].slice(0,-1)]:[t[0]]};function Oe(e){const{iconpack:t}=u,i=[];if(t)for(let n=0;n<t.credits.authors.length;n++){const r=ne(t.credits.authors[n]);r[1]?i.push(React.createElement(Me,{userId:r[1],loadUsername:!1,color:"TEXT_LINK"},r[0])):i.push(r[0]),n!==t.credits.authors.length-1&&i.push(", ")}return React.createElement(V,null,React.createElement(me,null,t?React.createElement(React.Fragment,null,React.createElement(ge,{title:t.id,trailing:React.createElement(ye,{onPress:function(){return pe()}})}),[["Description",[t.description]],["Authors",i,t.credits.authors.map(function(n){return ne(n)[0]}).join(", ")],["Description",[t.description]],["Source",[t.credits.source]],["Icon Suffix",[t.suffix??"N/A"]],["Load URL",[t.load??"N/A"]]].map(function(n){let[r,c,d]=n;return React.createElement($e,{label:c,subLabel:r,onLongPress:function(){a.clipboard.setString(d??c.join("")),D.showToast("Copied",v.getAssetIDByName("toast_copy_link"))}})})):React.createElement(y,{variant:"text-md/semibold",color:"TEXT_NORMAL"},"womp womp")))}const{View:S}=m.General,ae="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/",{TextStyleSheet:U}=s.findByProps("TextStyleSheet");function Fe(){let e=0;return React.createElement(S,{style:{flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100%"}},u.active?React.createElement(React.Fragment,null,React.createElement(S,{style:{flexDirection:"row",justifyContent:"center",marginBottom:16}},React.createElement(a.ReactNative.Image,{source:{uri:`${ae}2705.png`},style:{height:U["heading-xxl/semibold"].fontSize,aspectRatio:1/1,marginRight:8,marginTop:6}}),React.createElement(y,{variant:"heading-xxl/semibold",color:"TEXT_NORMAL",onPress:function(){return e>=Date.now()?z("dev-modal",Z):e=Date.now()+500}},"Themes+ is Active")),React.createElement(S,{style:{flexDirection:"column",marginHorizontal:16}},[[o.PatchType.Icons,["Custom icon colors"]],[o.PatchType.UnreadBadgeColor,["Unread badge color"]],[o.PatchType.CustomIconOverlays,["Custom icon overlays"]],[o.PatchType.MentionLineColor,["Mention line color"]],[o.PatchType.IconPack,u.iconpack?[React.createElement(y,{variant:"text-lg/bold",color:"TEXT_LINK",onPress:function(){return Ee(Oe,{})}},"Custom icon pack")]:["Custom icon pack"]]].map(function(t){let[i,n]=t;return React.createElement(S,{style:{flexDirection:"row"}},React.createElement(a.ReactNative.Image,{source:v.getAssetIDByName(u.patches.includes(i)?"ic_radio_square_checked_24px":"ic_radio_square_24px"),style:{marginRight:8,height:U["text-lg/semibold"].fontSize,aspectRatio:1/1,marginTop:4}}),React.createElement(y,{variant:"text-lg/semibold",color:"TEXT_NORMAL"},n))}))):React.createElement(S,{style:{flexDirection:"row",justifyContent:"center"}},React.createElement(a.ReactNative.Image,{source:{uri:`${ae}274c.png`},style:{height:U["heading-xxl/semibold"].fontSize,aspectRatio:1/1,marginRight:8,marginTop:6}}),React.createElement(y,{variant:"heading-xxl/semibold",color:"TEXT_NORMAL",onPress:function(){return e>=Date.now()?z("dev-modal",Z):e=Date.now()+500}},"Themes+ is not Active")),React.createElement(y,{variant:"text-lg/bold",color:"TEXT_LINK",style:{textDecorationLine:"underline",marginTop:32},onPress:function(){return a.url.openURL("https://github.com/Gabe616/VendettaThemesPlus#info")}},"Why is Themes+ inactive?"),React.createElement(y,{variant:"text-lg/bold",color:"TEXT_LINK",style:{textDecorationLine:"underline",marginTop:4},onPress:function(){return a.url.openURL("https://github.com/Gabe616/VendettaThemesPlus#using-vendetta-themes")}},"How to use Themes+?"))}o.PatchType=void 0,function(e){e[e.Icons=0]="Icons",e[e.UnreadBadgeColor=1]="UnreadBadgeColor",e[e.CustomIconOverlays=2]="CustomIconOverlays",e[e.MentionLineColor=3]="MentionLineColor",e[e.IconPack=4]="IconPack"}(o.PatchType||(o.PatchType={}));let u={active:!1,iconpack:null,patches:[]};const h=se.storage;o.enabled=!1;let re;var Ge={onLoad:async function(){o.enabled=!0,re=await Le()},onUnload:function(){o.enabled=!1,re?.()},settings:Fe};return o.active=u,o.default=Ge,o.vstorage=h,Object.defineProperty(o,"__esModule",{value:!0}),o})({},vendetta.metro.common,vendetta.patcher,vendetta.ui.assets,vendetta.metro,vendetta.ui,vendetta.ui.components,vendetta.ui.toasts,vendetta.utils,vendetta.storage,vendetta.constants,vendetta.plugins,vendetta,vendetta.plugin);