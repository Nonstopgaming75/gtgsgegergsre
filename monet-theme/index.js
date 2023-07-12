(function(y,P,e,f,p,s,g,I,b,x,B){"use strict";const{TextStyleSheet:U}=p.findByProps("TextStyleSheet"),{View:m,Text:A,Pressable:k}=f.General,{FormRow:z}=f.Forms;function X(t){const r=p.findByProps("colors","meta"),a=p.findByStoreName("ThemeStore");return r.meta.resolveSemanticColor(a.theme,t)}function O(t){let{title:r,onTitlePress:a,icon:n,children:o,padding:i}=t;const c=e.stylesheet.createThemedStyleSheet({androidRipple:{color:s.semanticColors.ANDROID_RIPPLE},mainText:{fontFamily:e.constants.Fonts.PRIMARY_SEMIBOLD,fontSize:14,includeFontPadding:!1,letterSpacing:void 0,lineHeight:18,textTransform:"none",color:s.semanticColors.HEADER_SECONDARY},icon:{height:14,tintColor:s.semanticColors.HEADER_SECONDARY},main:{backgroundColor:s.semanticColors.BACKGROUND_TERTIARY,borderRadius:16,overflow:"hidden",flex:1}}),d=a?k:m;return e.React.createElement(m,{style:{marginHorizontal:16,marginTop:16}},e.React.createElement(d,{android_ripple:c.androidRipple,disabled:!1,accessibilityRole:"button",onPress:a,style:{marginBottom:8,flexDirection:"row",justifyContent:"flex-start",alignItems:"center"}},n&&e.React.createElement(m,{style:{marginRight:4}},e.React.createElement(z.Icon,{style:c.icon,source:n,size:"small"})),e.React.createElement(A,{style:c.mainText},r)),e.React.createElement(m,{style:c.main},i?e.React.createElement(m,{style:{paddingHorizontal:16,paddingVertical:16}},o):o))}function W(t){let{addPadding:r}=t;const a=e.stylesheet.createThemedStyleSheet({line:{width:"100%",height:2,backgroundColor:s.semanticColors.BACKGROUND_ACCENT,borderRadius:2147483647}});return e.React.createElement(m,{style:[{marginTop:16,marginBottom:16},r&&{marginHorizontal:16}]},e.React.createElement(m,{style:a.line}))}var N;(function(t){function r(n){let{children:o,onPress:i}=n;return e.React.createElement(E,{variant:"text-md/bold",onPress:i},o)}t.Bold=r;function a(n){let{children:o,onPress:i}=n;return e.React.createElement(A,{style:{textDecorationLine:"underline"},onPress:i},o)}t.Underline=a})(N||(N={}));function E(t){let{variant:r,lineClamp:a,color:n,align:o,style:i,onPress:c,getChildren:d,children:h,liveUpdate:u}=t;const[fe,ge]=e.React.useReducer(function(he){return~he},0),Re=new Date().setMilliseconds(1e3);return u&&setTimeout(function(){return ge()},Re-Date.now()),e.React.createElement(A,{style:[r?U[r]:{},n?{color:X(s.semanticColors[n])}:{},o?{textAlign:o}:{},i??{}],numberOfLines:a,onPress:c},d?.()??h)}function Y(t){let{onPress:r,icon:a,style:n,destructive:o}=t;const i=e.stylesheet.createThemedStyleSheet({headerStyleIcon:{width:24,height:24,marginRight:10,tintColor:s.semanticColors.HEADER_PRIMARY},cardStyleIcon:{width:22,height:22,marginLeft:5,tintColor:s.semanticColors.INTERACTIVE_NORMAL},destructiveIcon:{tintColor:s.semanticColors.TEXT_DANGER}});return e.React.createElement(e.ReactNative.TouchableOpacity,{onPress:r},e.React.createElement(e.ReactNative.Image,{style:[typeof n=="string"?n==="header"?i.headerStyleIcon:i.cardStyleIcon:n,o&&i.destructiveIcon].filter(function(c){return!!c}),source:a}))}const{View:K,Pressable:J}=f.General;function S(t){let{title:r,color:a}=t;const n=e.stylesheet.createThemedStyleSheet({androidRipple:{color:s.semanticColors.ANDROID_RIPPLE,cornerRadius:2147483647}});return React.createElement(K,{style:{flexDirection:"column",alignItems:"center",justifyContent:"center"}},React.createElement(J,{android_ripple:n.androidRipple,disabled:!1,accessibilityRole:"button",accessibilityState:{disabled:!1,expanded:!1},accessibilityLabel:`${r} Color Preview`,accessibilityHint:`Shows the ${r} color used in this theme`,style:{width:48,aspectRatio:1,backgroundColor:a,borderRadius:2147483647,marginBottom:8,marginHorizontal:10},onPress:function(){}}),React.createElement(E,{variant:"text-md/semibold",color:"TEXT_NORMAL"},r))}function w(t){const r=Number(t.split("_")[1]);if(s.rawColors[t])return s.rawColors[t];if(t.startsWith("N1_"))return C(l.colors.neutral1,r);if(t.startsWith("N2_"))return C(l.colors.neutral2,r);if(t.startsWith("A1_"))return C(l.colors.accent1,r);if(t.startsWith("A2_"))return C(l.colors.accent2,r);if(t.startsWith("A3_"))return C(l.colors.accent3,r);if(t.match(/^#(?:[0-9a-f]{6})|(?:[0-9a-f]{3})$/))return t}function C(t,r,a){a??=1;const n=e.chroma.hex(t).lab(),o=(500-r)/1e3*2;return n[0]+=n[0]*o*a,e.chroma.lab(...n).hex()}function q(t){const r={name:"Material You Theme 1.0.43",description:"A Discord theme with Material You theming.",authors:[{name:"nexpid",id:"853550207039832084"},{name:"Taki_Shiwa",id:"466968658997149706"}],semanticColors:{},rawColors:{},spec:2};for(const[a,n]of Object.entries(t.replacers)){const o=w(n[0]);if(o)for(const i of Object.keys(s.rawColors).filter(function(c){return c.startsWith(`${a.split("_")[0]}_`)})){const c=Number(i.split("_")[1]);let d=!0;for(const u of a.split("_").slice(1)){if(!d)break;u.startsWith(">=")?d=c>=Number(u.slice(2)):u.startsWith("<=")?d=c<=Number(u.slice(2)):u.startsWith(">")?d=c>Number(u.slice(1)):u.startsWith("<")&&(d=c<Number(u.slice(1)))}if(!d)continue;const h=n[1];r.rawColors[i]=C(o,c,h)}}for(const[a,n]of Object.entries(t.semantic))r.semanticColors[a]=[w(n)];for(const[a,n]of Object.entries(t.raw))r.rawColors[a]=w(n);return console.log(JSON.stringify(r)),JSON.parse(JSON.stringify(r))}const{View:v,Pressable:Q}=f.General;function $(t){let{commit:r,list:a,onPress:n}=t;const o=e.stylesheet.createThemedStyleSheet({androidRipple:{color:s.semanticColors.ANDROID_RIPPLE,cornerRadius:8},container:{backgroundColor:s.semanticColors.BACKGROUND_SECONDARY_ALT,flexDirection:"column",borderRadius:8}}),i=n?Q:v;return React.createElement(v,{style:a?{paddingHorizontal:12,paddingTop:12}:{paddingHorizontal:16,paddingTop:16}},React.createElement(i,{android_ripple:o.androidRipple,disabled:!1,accessibilityRole:"button",accessibilityState:{disabled:!1,expanded:!1},accessibilityLabel:"Commit",onPress:function(){return n()},style:o.container},React.createElement(v,{style:{marginHorizontal:12,marginVertical:12}},React.createElement(v,{style:{flexDirection:"row",marginBottom:4}},React.createElement(e.ReactNative.Image,{style:{width:20,height:20,borderRadius:2147483647,marginRight:8},source:{uri:r.committer.avatar_url}}),React.createElement(E,{style:{marginRight:8},variant:"text-sm/semibold",color:"TEXT_NORMAL"},r.committer.login),React.createElement(E,{style:{marginRight:8},variant:"text-sm/semibold",color:"TEXT_NORMAL"},"\u2022"),React.createElement(E,{color:"TEXT_NORMAL",style:{fontFamily:e.constants.Fonts.CODE_SEMIBOLD}},r.sha.slice(0,7))),React.createElement(E,{variant:"text-md/semibold",color:"TEXT_NORMAL"},r.commit.message))))}const{ScrollView:Z}=f.General,ee=function(){return D?React.createElement(Z,null,D.map(function(t){return React.createElement($,{commit:t,list:!0,onPress:function(){return e.url.openURL(t.html_url)}})})):React.createElement(e.ReactNative.ActivityIndicator,{style:{flex:1}})};function te(t){t.push("VendettaCustomPage",{render:ee,title:"Commits"})}function re(t){return JSON.parse(t.replace(/\r/g,"").replace(/\/\/.*$/gm,"").replace(/\/\*(?:.|\n)*?(?=\*\/)\*\//g,""))}var L={github:{url:"https://github.com/Gabe616/VendettaPlugins/"}};const{showSimpleActionSheet:ne}=p.findByProps("showSimpleActionSheet"),ae=p.findByStoreName("UserStore");function ie(){const t=B.getDebugInfo(),r=e.ReactNative.NativeModules.InfoDictionaryManager??e.ReactNative.NativeModules.RTNClientInfoManager;return`Device: ${t.os.name==="iOS"?t.device.codename:`${t.device.brand} ${t.device.model}`}
Model: ${t.device.model}
Manufacturer: ${t.device.manufacturer}
Brand: ${t.device.brand}

OS: ${t.os.name}
Version: ${t.os.version}

Discord Branch: ${r.ReleaseChannel}
Discord Version: ${t.discord.version}
Discord Build: ${t.discord.build}
Vendetta Version: ${t.vendetta.version}

React Version: ${t.react.version}
Hermes Bytecode: ${t.hermes.bytecodeVersion}`}function M(t){const r=ae.getCurrentUser(),a=new URLSearchParams;for(const[n,o]of Object.entries(t))a.set(n,o);return a.set("discord-username",`@${r.username}${r.discriminator!=="0"?`#${r.discriminator}`:""}`),console.log(`${L.github.url}issues/new?${a.toString()}`),`${L.github.url}issues/new?${a.toString()}`}const oe=function(t){return ne({key:"CardOverflow",header:{title:"GitHub Reports"},options:[{label:"Copy bug report link",icon:g.getAssetIDByName("copy"),onPress:function(){e.clipboard.setString(M({title:`bug(${t}): `,template:"bug_report.yml",labels:"bug",sysinfo:ie()})),b.showToast("Copied",g.getAssetIDByName("toast_copy_link"))}},{label:"Copy feature suggestion link",icon:g.getAssetIDByName("copy"),onPress:function(){e.clipboard.setString(M({title:`suggest(${t}): `,labels:"suggestion",template:"suggestion.yml"})),b.showToast("Copied",g.getAssetIDByName("toast_copy_link"))}}]})},{BundleUpdaterManager:se}=window.nativeModuleProxy,{ScrollView:ce,View:V,Text:F,Pressable:le}=f.General,{FormRow:T}=f.Forms,{TextStyleSheet:_}=p.findByProps("TextStyleSheet"),R=e.stylesheet.createThemedStyleSheet({androidRipple:{color:s.semanticColors.ANDROID_RIPPLE,cornerRadius:8},warning:{..._["text-md/semibold"],color:s.semanticColors.TEXT_DANGER},info:{..._["text-md/semibold"],color:s.semanticColors.TEXT_BRAND},text:{..._["text-md/semibold"],color:s.semanticColors.TEXT_NORMAL}}),j=function(t){l.colors={neutral1:t.neutral1[7],neutral2:t.neutral2[7],accent1:t.accent1[7],accent2:t.accent2[7],accent3:t.accent3[7]}};let D;function de(){const t=e.NavigationNative.useNavigation(),[r,a]=e.React.useState(void 0),[n,o]=e.React.useState(void 0);D=r,l.colors??={neutral1:"#747679",neutral2:"#70777C",accent1:"#007FAC",accent2:"#657985",accent3:"#787296"},I.useProxy(l),e.React.useEffect(function(){n||fetch(G,{cache:"no-store"}).then(async function(h){try{const u=(await h.text()).replace(/\r/g,"");o(re(u))}catch{return b.showToast("Failed to parse patches.json",g.getAssetIDByName("Small"))}}).catch(function(){return b.showToast("Failed to fetch patches.json",g.getAssetIDByName("Small"))})},[n]),e.React.useEffect(function(){r||fetch(H,{cache:"no-store"}).then(async function(h){try{const u=await h.json();a(u)}catch{return b.showToast("Failed to parse commits",g.getAssetIDByName("Small"))}})},[r]),t.setOptions({headerRight:function(){return e.React.createElement(Y,{style:"header",icon:g.getAssetIDByName("ic_report_message"),onPress:function(){return oe("customrpc")}})}});let i;const c=B.getDebugInfo(),d=window[window.__vendetta_loader.features.syscolors?.prop];return c.os.name!=="Android"?i={error:!1,message:"Dynamic colors are only available on Android.",onPress:function(){}}:c.os.sdk<31?i={error:!1,message:"Dynamic colors are only available on Android 12+ (SDK 31+).",onPress:function(){}}:d||(i={error:!0,message:"Dynamic colors not available. ",cta:"Fix",onPress:function(){return x.showConfirmationAlert({title:"Enable Dynamic Colors",content:"To use dynamic colors, use nexx's modified VendettaXposed (until it gets merged to the normal XPosed module)",onConfirm:function(){return e.url.openURL("https://github.com/Gabe616/VendettaMod-VendettaXposed#readme")},confirmText:"View on GitHub",cancelText:"Okay"})}}),l.colors?e.React.createElement(ce,null,i&&e.React.createElement(V,{style:{flexDirection:"row",alignItems:"center",justifyContent:"center",marginTop:8}},e.React.createElement(e.ReactNative.Image,{source:g.getAssetIDByName(i.error?"ic_warning_24px":"ic_info_24px"),style:{width:i.error?R.warning.fontSize:R.info.fontSize,height:i.error?R.warning.fontSize:R.info.fontSize,tintColor:i.error?R.warning.color:R.info.color,marginRight:4}}),e.React.createElement(F,{style:i.error?R.warning:R.info},i.message,i.cta&&e.React.createElement(N.Underline,{onPress:i.onPress},i.cta))),e.React.createElement(O,{title:"Colors",icon:g.getAssetIDByName("ic_theme_24px"),padding:!0},d&&e.React.createElement(le,{android_ripple:R.androidRipple,disabled:!1,accessibilityRole:"button",accessibilityState:{disabled:!1,expanded:!1},accessibilityLabel:"Autofill button",accessibilityHint:"Autofills colors to system's dynamic colors",style:{flexDirection:"row",alignItems:"center",justifyContent:"center",marginBottom:8},onPress:function(){return j(d)}},e.React.createElement(e.ReactNative.Image,{source:g.getAssetIDByName("img_nitro_remixing"),style:{width:R.text.fontSize,height:R.text.fontSize,tintColor:R.text.color,marginRight:4}}),e.React.createElement(F,{style:R.text},"Autofill")),e.React.createElement(V,{style:{flexDirection:"row",alignItems:"center",justifyContent:"center"}},e.React.createElement(S,{title:"Neutral 1",color:l.colors.neutral1}),e.React.createElement(S,{title:"Neutral 2",color:l.colors.neutral2}),e.React.createElement(S,{title:"Accent 1",color:l.colors.accent1}),e.React.createElement(S,{title:"Accent 2",color:l.colors.accent2}),e.React.createElement(S,{title:"Accent 3",color:l.colors.accent3}))),e.React.createElement(O,{title:"Theme",icon:g.getAssetIDByName("cog_24px"),padding:!n},n?e.React.createElement(e.React.Fragment,null,r?e.React.createElement($,{commit:r[0],onPress:function(){return te(t)}}):e.React.createElement(e.ReactNative.ActivityIndicator,{style:{flex:1,paddingTop:16}}),e.React.createElement(W,{addPadding:!0}),e.React.createElement(T,{label:"Load Theme",leading:e.React.createElement(T.Icon,{source:g.getAssetIDByName("debug")}),onPress:function(){let h;try{h=q(n)}catch(u){return b.showToast(u.toString(),g.getAssetIDByName("Small"))}x.showConfirmationAlert({title:"Reload required",content:"A reload is required to load this theme. Do you want to reload?",confirmText:"Reload",confirmColor:"red",cancelText:"Cancel",onConfirm:async function(){await I.createFileBackend("vendetta_theme.json").set({id:P.id,selected:!0,data:h}),se.reload()}})}}),e.React.createElement(T,{label:"Reload Theme Patches",leading:e.React.createElement(T.Icon,{source:g.getAssetIDByName("ic_sync_24px")}),onPress:function(){a(void 0),o(void 0)}})):e.React.createElement(e.ReactNative.ActivityIndicator,{style:{flex:1}}))):(d?j(d):l.colors={neutral1:"#747679",neutral2:"#70777C",accent1:"#007FAC",accent2:"#657985",accent3:"#787296"},e.React.createElement(e.React.Fragment,null))}const l=P.storage,G="https://raw.githubusercontent.com/Gabe616/VendettaMonetTheme/master/patches.jsonc",H="https://api.github.com/repos/Gabe616/VendettaMonetTheme/commits?path=patches.jsonc";var ue={settings:de};return y.commitsURL=H,y.default=ue,y.patchesURL=G,y.vstorage=l,Object.defineProperty(y,"__esModule",{value:!0}),y})({},vendetta.plugin,vendetta.metro.common,vendetta.ui.components,vendetta.metro,vendetta.ui,vendetta.ui.assets,vendetta.storage,vendetta.ui.toasts,vendetta.ui.alerts,vendetta.debug);
