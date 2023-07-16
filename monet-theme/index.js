(function(A,M,e,b,f,d,c,p,O,P,U,J,Z){"use strict";const{TextStyleSheet:Q}=f.findByProps("TextStyleSheet"),{View:_,Text:x,Pressable:ee}=b.General,{FormRow:te}=b.Forms,re=f.findByName("ActionSheet"),{openLazy:ae,hideActionSheet:$e}=f.findByProps("openLazy","hideActionSheet");f.findByProps("ActionSheetTitleHeader","ActionSheetCloseButton");function ne(t){const a=f.findByProps("colors","meta"),n=f.findByStoreName("ThemeStore");return a.meta.resolveSemanticColor(n.theme,t)}function ie(t,a){re?ae(new Promise(function(n){return n({default:t})}),"ActionSheet",a):p.showToast("You cannot open ActionSheets on this version! Update to 163+",c.getAssetIDByName("Small"))}function k(t){let{title:a,onPress:n,icon:r}=t;const i=e.stylesheet.createThemedStyleSheet({androidRipple:{color:d.semanticColors.ANDROID_RIPPLE},mainText:{fontFamily:e.constants.Fonts.PRIMARY_SEMIBOLD,fontSize:14,includeFontPadding:!1,letterSpacing:void 0,lineHeight:18,textTransform:"none",color:d.semanticColors.HEADER_SECONDARY},icon:{height:14,tintColor:d.semanticColors.HEADER_SECONDARY}}),o=n?ee:_;return e.React.createElement(o,{android_ripple:i.androidRipple,disabled:!1,accessibilityRole:"button",onPress:n,style:{marginBottom:8,flexDirection:"row",justifyContent:"flex-start",alignItems:"center"}},r&&e.React.createElement(_,{style:{marginRight:4}},e.React.createElement(te.Icon,{style:i.icon,source:r,size:"small"})),e.React.createElement(x,{style:i.mainText},a))}function G(t){let{title:a,onTitlePress:n,icon:r,children:i,padding:o}=t;const h=e.stylesheet.createThemedStyleSheet({main:{backgroundColor:d.semanticColors.BACKGROUND_TERTIARY,borderRadius:16,overflow:"hidden",flex:1}});return e.React.createElement(_,{style:{marginHorizontal:16,marginTop:16}},e.React.createElement(k,{title:a,onPress:n,icon:r}),e.React.createElement(_,{style:h.main},o?e.React.createElement(_,{style:{paddingHorizontal:16,paddingVertical:16}},i):i))}function oe(t){let{addPadding:a}=t;const n=e.stylesheet.createThemedStyleSheet({line:{width:"100%",height:2,backgroundColor:d.semanticColors.BACKGROUND_ACCENT,borderRadius:2147483647}});return e.React.createElement(_,{style:[{marginTop:16,marginBottom:16},a&&{marginHorizontal:16}]},e.React.createElement(_,{style:n.line}))}var S;(function(t){function a(r){let{children:i,onPress:o}=r;return e.React.createElement(g,{variant:"text-md/bold",onPress:o},i)}t.Bold=a;function n(r){let{children:i,onPress:o}=r;return e.React.createElement(x,{style:{textDecorationLine:"underline"},onPress:o},i)}t.Underline=n})(S||(S={}));function g(t){let{variant:a,lineClamp:n,color:r,align:i,style:o,onPress:h,getChildren:m,children:l,liveUpdate:E}=t;const[y,$]=e.React.useReducer(function(Ve){return~Ve},0),Le=new Date().setMilliseconds(1e3);return E&&setTimeout(function(){return $()},Le-Date.now()),e.React.createElement(x,{style:[a?Q[a]:{},r?{color:ne(d.semanticColors[r])}:{},i?{textAlign:i}:{},o??{}],numberOfLines:n,onPress:h},m?.()??l)}function ce(t){let{onPress:a,icon:n,style:r,destructive:i}=t;const o=e.stylesheet.createThemedStyleSheet({headerStyleIcon:{width:24,height:24,marginRight:10,tintColor:d.semanticColors.HEADER_PRIMARY},cardStyleIcon:{width:22,height:22,marginLeft:5,tintColor:d.semanticColors.INTERACTIVE_NORMAL},destructiveIcon:{tintColor:d.semanticColors.TEXT_DANGER}});return e.React.createElement(e.ReactNative.TouchableOpacity,{onPress:a},e.React.createElement(e.ReactNative.Image,{style:[typeof r=="string"?r==="header"?o.headerStyleIcon:o.cardStyleIcon:r,i&&o.destructiveIcon].filter(function(h){return!!h}),source:n}))}const le=f.findByName("CustomColorPickerActionSheet"),{View:se,Pressable:de}=b.General;function v(t){let{title:a,color:n,update:r}=t;const i=e.stylesheet.createThemedStyleSheet({androidRipple:{color:d.semanticColors.ANDROID_RIPPLE,cornerRadius:2147483647}});return React.createElement(se,{style:{flexDirection:"column",alignItems:"center",justifyContent:"center",flex:1/5}},React.createElement(de,{android_ripple:i.androidRipple,disabled:!1,accessibilityRole:"button",accessibilityState:{disabled:!1,expanded:!1},accessibilityLabel:`${a} Color Preview`,accessibilityHint:`Shows the ${a} color used in this theme`,style:{width:48,aspectRatio:1,backgroundColor:n,borderRadius:2147483647,marginBottom:8},onPress:function(){return ie(le,{color:parseInt(n.slice(1),16),onSelect:function(o){return r(`#${o.toString(16).padStart(6,"0")}`)}})},onLongPress:function(){e.clipboard.setString(n),p.showToast("Copied",c.getAssetIDByName("toast_copy_message"))}}),React.createElement(g,{variant:"text-sm/semibold",color:"TEXT_NORMAL",align:"center"},a))}function C(t){const a=Number(t.split("_")[1]);if(d.rawColors[t])return d.rawColors[t];if(t.startsWith("N1_"))return I(s.colors.neutral1,a);if(t.startsWith("N2_"))return I(s.colors.neutral2,a);if(t.startsWith("A1_"))return I(s.colors.accent1,a);if(t.startsWith("A2_"))return I(s.colors.accent2,a);if(t.startsWith("A3_"))return I(s.colors.accent3,a);if(t.match(/^#(?:[0-9a-f]{6})|(?:[0-9a-f]{3})$/))return t}function I(t,a,n){n??=1;const r=e.chroma.hex(t).lab(),i=(500-a)/1e3*2;return r[0]+=r[0]*i*n,e.chroma.lab(...r).hex()}function j(t){const a={name:"Material You Theme 1.0.43",description:"A Discord theme with Material You theming.",authors:[{name:"nexpid",id:"853550207039832084"},{name:"Taki_Shiwa",id:"466968658997149706"}],semanticColors:{},rawColors:{},spec:2},n=function(r){return Object.assign(r.both,s.lightmode?r.light:r.dark)};for(const[r,i]of Object.entries(n(t.replacers))){const o=C(i[0]);if(o)for(const h of Object.keys(d.rawColors).filter(function(m){return m.startsWith(`${r.split("_")[0]}_`)})){const m=Number(h.split("_")[1]);let l=!0;for(const y of r.split("_").slice(1)){if(!l)break;y.startsWith(">=")?l=m>=Number(y.slice(2)):y.startsWith("<=")?l=m<=Number(y.slice(2)):y.startsWith(">")?l=m>Number(y.slice(1)):y.startsWith("<")&&(l=m<Number(y.slice(1)))}if(!l)continue;const E=i[1];a.rawColors[h]=I(o,m,E)}}for(const[r,i]of Object.entries(n(t.raw)))a.rawColors[r]=C(i);for(const[r,i]of Object.entries(t.semantic.both))a.semanticColors[r]=[C(i),C(i)];for(const[r,i]of Object.entries(t.semantic.dark))a.semanticColors[r]?a.semanticColors[r][0]=C(i):a.semanticColors[r]=[C(i)];for(const[r,i]of Object.entries(t.semantic.light))a.semanticColors[r]?a.semanticColors[r][1]=C(i):a.semanticColors[r]=[void 0,C(i)];return JSON.parse(JSON.stringify(a))}const{View:B,Pressable:ue}=b.General;function z(t){let{commit:a,list:n,onPress:r}=t;const i=e.stylesheet.createThemedStyleSheet({androidRipple:{color:d.semanticColors.ANDROID_RIPPLE,cornerRadius:8},container:{backgroundColor:d.semanticColors.BACKGROUND_SECONDARY_ALT,flexDirection:"column",borderRadius:8}}),o=r?ue:B;return React.createElement(B,{style:n?{paddingHorizontal:12,paddingTop:12}:{paddingHorizontal:16,paddingTop:16}},React.createElement(o,{android_ripple:i.androidRipple,disabled:!1,accessibilityRole:"button",accessibilityState:{disabled:!1,expanded:!1},accessibilityLabel:"Commit",onPress:function(){return r()},style:i.container},React.createElement(B,{style:{marginHorizontal:12,marginVertical:12}},React.createElement(B,{style:{flexDirection:"row",marginBottom:4}},React.createElement(e.ReactNative.Image,{style:{width:20,height:20,borderRadius:2147483647,marginRight:8},source:{uri:a.committer.avatar_url}}),React.createElement(g,{style:{marginRight:8},variant:"text-sm/semibold",color:"TEXT_NORMAL"},a.committer.login),React.createElement(g,{style:{marginRight:8},variant:"text-sm/semibold",color:"TEXT_NORMAL"},"\u2022"),React.createElement(g,{color:"TEXT_NORMAL",style:{fontFamily:e.constants.Fonts.CODE_SEMIBOLD}},a.sha.slice(0,7))),React.createElement(g,{variant:"text-md/semibold",color:"TEXT_NORMAL"},a.commit.message))))}const{ScrollView:Re}=b.General,me=function(){return V?React.createElement(Re,null,V.map(function(t){return React.createElement(z,{commit:t,list:!0,onPress:function(){return e.url.openURL(t.html_url)}})})):React.createElement(e.ReactNative.ActivityIndicator,{style:{flex:1}})};function he(t){t.push("VendettaCustomPage",{render:me,title:"Commits"})}function ge(t){return JSON.parse(t.replace(/\r/g,"").replace(/\/\/.*$/gm,"").replace(/\/\*(?:.|\n)*?(?=\*\/)\*\//g,""))}var H={github:{url:"https://github.com/Gabe616/VendettaPlugins/"}};const{showSimpleActionSheet:fe}=f.findByProps("showSimpleActionSheet"),ye=f.findByStoreName("UserStore");function pe(){const t=U.getDebugInfo(),a=e.ReactNative.NativeModules.InfoDictionaryManager??e.ReactNative.NativeModules.RTNClientInfoManager;return`Device: ${t.os.name==="iOS"?t.device.codename:`${t.device.brand} ${t.device.model}`}
Model: ${t.device.model}
Manufacturer: ${t.device.manufacturer}
Brand: ${t.device.brand}

OS: ${t.os.name}
Version: ${t.os.version}

Discord Branch: ${a.ReleaseChannel}
Discord Version: ${t.discord.version}
Discord Build: ${t.discord.build}
Vendetta Version: ${t.vendetta.version}

React Version: ${t.react.version}
Hermes Bytecode: ${t.hermes.bytecodeVersion}`}function F(t){const a=ye.getCurrentUser(),n=new URLSearchParams;for(const[r,i]of Object.entries(t))n.set(r,i);return n.set("discord-username",`@${a.username}${a.discriminator!=="0"?`#${a.discriminator}`:""}`),console.log(`${H.github.url}issues/new?${n.toString()}`),`${H.github.url}issues/new?${n.toString()}`}const Ee=function(t){return fe({key:"CardOverflow",header:{title:"GitHub Reports"},options:[{label:"Copy bug report link",icon:c.getAssetIDByName("copy"),onPress:function(){e.clipboard.setString(F({title:`bug(${t}): `,template:"bug_report.yml",labels:"bug",sysinfo:pe()})),p.showToast("Copied",c.getAssetIDByName("toast_copy_link"))}},{label:"Copy feature suggestion link",icon:c.getAssetIDByName("copy"),onPress:function(){e.clipboard.setString(F({title:`suggest(${t}): `,labels:"suggestion",template:"suggestion.yml"})),p.showToast("Copied",c.getAssetIDByName("toast_copy_link"))}}]})};function X(t){return t.match(J.HTTP_REGEX_MULTI)?.filter(function(a){return a.startsWith("https://repainter.app/themes/")})[0]}async function be(t){return await(await Z.safeFetch(`https://repainter.app/_next/data/Z0BCpVYZyrdkss0k0zqLC/themes/${t.match(/themes\/([a-z0-9]+)/i)?.[1]??""}.json`,{cache:"no-store"})).json()}function Ce(t){const a=Object.values(t.pageProps.fallback)[0];if(!a)throw new Error("Invalid Repainter theme!");const n=function(i){return(i&16777215).toString(16).padStart(6,"0")},r=a.colors.map(function(i){return`#${n(i)}`});return{name:a.name,description:a.description,createdAt:new Date(a.createdAt),updatedAt:new Date(a.updatedAt),settings:a.settingsLines,likes:a.voteCount,colors:{neutral1:r[44],neutral2:r[57],accent1:r[5],accent2:r[18],accent3:r[31]}}}const _e=["dark","light","amoled"];function u(t,a){const{SemanticColor:n,default:{meta:{resolveSemanticColor:r}}}=f.findByProps("SemanticColor");if(!d.semanticColors[a])throw new Error(`Invalid color: ${a}`);if(!t.theme)return r("dark",d.semanticColors[a]);if(t.theme.semanticColors[a])return t.theme.semanticColors[a][_e.indexOf(t.origin)];const i=n[a];return i&&t.theme.rawColors[i[t.origin].raw]?t.theme.rawColors[i[t.origin].raw]:r(t.origin,d.semanticColors[a])}const{TextStyleSheet:Te}=f.findByProps("TextStyleSheet"),{View:Ae}=b.General,Ie="iIjl ";function L(t){let{size:a,variant:n,color:r,children:i}=t;const o=Te[`text-${a}/${n}`].fontSize*.6,h=i.toString().split("").reduce(function(m,l){return m+(Ie.includes(l)?.3:.65)},0);return React.createElement(Ae,{style:{width:h*o,height:o,backgroundColor:r,borderRadius:2147483647,opacity:.85}})}const{View:R}=b.General;function Ne(t){let{style:a,theme:n}=t;const r=e.stylesheet.createThemedStyleSheet({bottomCont:{flex:1/5,justifyContent:"center",alignItems:"center"},bottomIcon:{height:"50%",aspectRatio:1},round:{aspectRatio:1,borderRadius:2147483647},middle:{justifyContent:"center",alignItems:"center"}}),i="https://cdn.discordapp.com/attachments/919655852724604978/1129359052045025322/5b7f29e9c670fbcbf476b4d88fbd081f.png",o=["clyde-avatar","role_subscription_earning_metric_avatar","role_subscription_benefit_avatar_1","role_subscription_benefit_wise_avatar","role_subscription_benefit_bunny_avatar","role_subscription_benefit_nelly_avatar","avatar_onboarding"],h=[];for(const m of o)h.push(React.createElement(R,{style:{marginBottom:13,flexDirection:"row"}},React.createElement(e.ReactNative.Image,{style:[r.round,{marginRight:8,width:"15%"}],source:c.getAssetIDByName(m)}),React.createElement(R,{style:{flexDirection:"column",justifyContent:"center"}},React.createElement(L,{size:"sm",variant:"semibold",color:u(n,"TEXT_NORMAL")},"Random User"))));return React.createElement(R,{style:[a,{backgroundColor:u(n,"ACTIVITY_CARD_BACKGROUND")}]},React.createElement(R,{style:{width:"20%",height:"100%",position:"absolute",left:0,top:"4%",paddingHorizontal:10,flexDirection:"column"}},React.createElement(R,{style:[r.round,r.middle,{borderRadius:10,backgroundColor:u(n,"BUTTON_OUTLINE_BRAND_BACKGROUND_HOVER"),marginBottom:8,width:"100%"}]},React.createElement(e.ReactNative.Image,{source:c.getAssetIDByName("ic_chat_bubble_16px"),style:[r.bottomIcon,{tintColor:u(n,"INTERACTIVE_ACTIVE")}]})),React.createElement(R,{style:{width:"100%",marginBottom:8}},React.createElement(R,{style:{height:1,backgroundColor:u(n,"BACKGROUND_MOBILE_PRIMARY")}})),React.createElement(e.ReactNative.Image,{style:[r.round,{marginBottom:8,width:"100%"}],source:{uri:i}}),React.createElement(R,{style:[r.round,r.middle,{backgroundColor:u(n,"BACKGROUND_MOBILE_SECONDARY"),marginBottom:8,width:"100%"}]},React.createElement(e.ReactNative.Image,{style:[r.bottomIcon,{tintColor:u(n,"BUTTON_OUTLINE_POSITIVE_BORDER")}],source:c.getAssetIDByName("hub-add")})),React.createElement(R,{style:[r.round,r.middle,{backgroundColor:u(n,"BACKGROUND_MOBILE_SECONDARY"),marginBottom:8,width:"100%"}]},React.createElement(e.ReactNative.Image,{style:[r.bottomIcon,{tintColor:u(n,"BUTTON_OUTLINE_POSITIVE_BORDER")}],source:c.getAssetIDByName("hub-icon")}))),React.createElement(R,{style:{position:"absolute",left:"20%",top:"4%",width:"80%",height:"100%",paddingRight:10}},React.createElement(R,{style:{borderTopLeftRadius:8,borderTopRightRadius:8,backgroundColor:u(n,"BACKGROUND_MOBILE_SECONDARY"),height:"100%",paddingHorizontal:12,paddingVertical:12}},React.createElement(R,{style:{marginBottom:10,flexDirection:"row",alignItems:"center"}},React.createElement(R,{style:{paddingVertical:6}},React.createElement(L,{size:"md",variant:"bold",color:u(n,"TEXT_NORMAL")},"Direct Messages")),React.createElement(e.ReactNative.Image,{style:{position:"absolute",right:0,height:"80%",aspectRatio:1,tintColor:u(n,"HEADER_SECONDARY")},source:c.getAssetIDByName("ic-new-message")})),React.createElement(R,{style:{marginBottom:14,backgroundColor:u(n,"ACTIVITY_CARD_BACKGROUND"),paddingHorizontal:6,borderRadius:4,flexDirection:"row",alignItems:"center"}},React.createElement(R,{style:{paddingVertical:10}},React.createElement(L,{variant:"semibold",size:"sm",color:u(n,"TEXT_MUTED")},"Tap here to search stuff")),React.createElement(e.ReactNative.Image,{style:{position:"absolute",right:6,height:"50%",aspectRatio:1,tintColor:u(n,"TEXT_MUTED")},source:c.getAssetIDByName("ic_search")})),...h)),React.createElement(R,{style:{position:"absolute",bottom:0,left:0,width:"100%",height:"7.5%",flexDirection:"row",backgroundColor:u(n,"BACKGROUND_FLOATING"),zIndex:2}},React.createElement(R,{style:r.bottomCont},React.createElement(e.ReactNative.Image,{source:c.getAssetIDByName("ic_discord"),style:[r.bottomIcon,{tintColor:u(n,"INTERACTIVE_ACTIVE")}]})),React.createElement(R,{style:r.bottomCont},React.createElement(e.ReactNative.Image,{source:c.getAssetIDByName("friends_toast_icon"),style:[r.bottomIcon,{tintColor:u(n,"INTERACTIVE_NORMAL")}]})),React.createElement(R,{style:r.bottomCont},React.createElement(e.ReactNative.Image,{source:c.getAssetIDByName("ic_search"),style:[r.bottomIcon,{tintColor:u(n,"INTERACTIVE_NORMAL")}]})),React.createElement(R,{style:r.bottomCont},React.createElement(e.ReactNative.Image,{source:c.getAssetIDByName("ic_notif"),style:[r.bottomIcon,{tintColor:u(n,"INTERACTIVE_NORMAL")}]})),React.createElement(R,{style:r.bottomCont},React.createElement(e.ReactNative.Image,{source:c.getAssetIDByName("ic_profile_24px"),style:[r.bottomIcon,{tintColor:u(n,"INTERACTIVE_NORMAL")}]}))))}function ve(t){let{theme:a,fullscreen:n}=t;const r=e.ReactNative.Dimensions.get("window"),i=e.stylesheet.createThemedStyleSheet({card:{width:n?"100%":r.width*.7,height:n?"100%":r.height*.7,borderRadius:8,backgroundColor:d.semanticColors.BACKGROUND_SECONDARY_ALT,marginHorizontal:8,overflow:"hidden"}});return e.React.createElement(b.ErrorBoundary,null,e.React.createElement(Ne,{style:i.card,theme:a}))}const{BundleUpdaterManager:we}=window.nativeModuleProxy,{ScrollView:De,View:T,Pressable:Y}=b.General,{FormRow:w,FormSwitchRow:Se}=b.Forms,{TextStyleSheet:Be}=f.findByProps("TextStyleSheet"),N=Be["text-md/semibold"].fontSize,D=e.stylesheet.createThemedStyleSheet({androidRipple:{color:d.semanticColors.ANDROID_RIPPLE,cornerRadius:8},warning:{color:d.semanticColors.TEXT_DANGER},info:{color:d.semanticColors.TEXT_BRAND},experimental:{backgroundColor:d.semanticColors.TEXT_BRAND,borderRadius:4,paddingHorizontal:3,paddingVertical:3,justifyContent:"center",alignItems:"center",flexDirection:"row"}}),K=function(t){s.colors={neutral1:t.neutral1[7],neutral2:t.neutral2[7],accent1:t.accent1[7],accent2:t.accent2[7],accent3:t.accent3[7]}};let V;function Oe(){const t=e.NavigationNative.useNavigation(),[a,n]=e.React.useState(void 0),[r,i]=e.React.useState(void 0);V=a,s.lightmode??=!1,P.useProxy(s),e.React.useEffect(function(){r||fetch(W,{cache:"no-store"}).then(function(l){return l.text().then(function(E){try{i(ge(E.replace(/\r/g,"")))}catch{return p.showToast("Failed to parse patches.json",c.getAssetIDByName("Small"))}})}).catch(function(){return p.showToast("Failed to fetch patches.json",c.getAssetIDByName("Small"))})},[r]),e.React.useEffect(function(){a||fetch(q,{cache:"no-store"}).then(function(l){return l.json().then(function(E){return n(E)}).catch(function(){return p.showToast("Failed to parse commits",c.getAssetIDByName("Small"))})}).catch(function(){return p.showToast("Failed to fetch commits",c.getAssetIDByName("Small"))})},[a]),e.React.useEffect(function(){t.setOptions({headerRight:function(){return e.React.createElement(ce,{style:"header",icon:c.getAssetIDByName("ic_report_message"),onPress:function(){return Ee("customrpc")}})}})},[]);let o;const h=U.getDebugInfo(),m=window[window.__vendetta_loader.features.syscolors?.prop];return h.os.name!=="Android"?o={error:!1,message:"Dynamic colors are only available on Android.",onPress:function(){}}:h.os.sdk<31?o={error:!1,message:"Dynamic colors are only available on Android 12+ (SDK 31+).",onPress:function(){}}:m===void 0?o={error:!1,message:"Dynamic colors are only available on newest Vendetta version.",onPress:function(){}}:m===null&&(o={error:!1,message:"Dynamic colors are unavailable.",onPress:function(){}}),s.colors?e.React.createElement(De,null,o&&e.React.createElement(T,{style:{flexDirection:"row",alignItems:"center",justifyContent:"center",marginTop:8}},e.React.createElement(e.ReactNative.Image,{source:c.getAssetIDByName(o.error?"ic_warning_24px":"ic_info_24px"),style:{width:N,height:N,tintColor:o.error?D.warning.color:D.info.color,marginRight:4}}),e.React.createElement(g,{variant:"text-md/semibold",color:o.error?"TEXT_DANGER":"TEXT_BRAND"},o.message,o.cta&&e.React.createElement(S.Underline,{onPress:o.onPress},o.cta))),e.React.createElement(G,{title:"Colors",icon:c.getAssetIDByName("ic_theme_24px"),padding:!0},e.React.createElement(T,{style:{marginBottom:8,flexDirection:"row",alignItems:"center",justifyContent:"center"}},m&&e.React.createElement(Y,{android_ripple:D.androidRipple,disabled:!1,accessibilityRole:"button",accessibilityState:{disabled:!1,expanded:!1},accessibilityLabel:"Autofill button",accessibilityHint:"Autofills colors to system's dynamic colors",style:{flexDirection:"row",alignItems:"center",paddingHorizontal:4,paddingVertical:4},onPress:function(){K(m),p.showToast("Autofilled",c.getAssetIDByName("Check"))}},e.React.createElement(e.ReactNative.Image,{source:c.getAssetIDByName("img_nitro_remixing"),style:{width:N,height:N,marginRight:4}}),e.React.createElement(g,{variant:"text-md/semibold",color:"TEXT_NORMAL"},"Autofill")),m&&e.React.createElement(g,{variant:"text-md/semibold",color:"TEXT_NORMAL",style:{marginHorizontal:5}},"\u2022"),e.React.createElement(Y,{android_ripple:D.androidRipple,disabled:!1,accessibilityRole:"button",accessibilityState:{disabled:!1,expanded:!1},accessibilityLabel:"Use Repainter theme",accessibilityHint:"Inputs a Repainter theme",style:{flexDirection:"row",alignItems:"center",paddingHorizontal:4,paddingVertical:4},onPress:async function(){const l=X(await e.clipboard.getString()??"");O.showInputAlert({title:"Enter Repainter link",placeholder:"https://repainter.app/themes/123ABC",initialValue:l,onConfirm:async function(E){const y=X(E);if(!y)throw new Error("No Repainter link found!");const $=Ce(await be(y));s.colors=$.colors,p.showToast("Imported",c.getAssetIDByName("toast_image_saved"))},confirmText:"Use",confirmColor:"brand",cancelText:"Cancel"})}},e.React.createElement(e.ReactNative.Image,{source:c.getAssetIDByName("ic_theme_24px"),style:{width:N,height:N,marginRight:4}}),e.React.createElement(g,{variant:"text-md/semibold",color:"TEXT_NORMAL"},"Use Repainter theme"))),e.React.createElement(T,{style:{flexDirection:"row",alignItems:"center",justifyContent:"center"}},e.React.createElement(v,{title:`Neutral
`,color:s.colors.neutral1,update:function(l){return s.colors.neutral1=l}}),e.React.createElement(v,{title:`Neutral
Variant`,color:s.colors.neutral2,update:function(l){return s.colors.neutral2=l}}),e.React.createElement(v,{title:`Primary
`,color:s.colors.accent1,update:function(l){return s.colors.accent1=l}}),e.React.createElement(v,{title:`Secondary
`,color:s.colors.accent2,update:function(l){return s.colors.accent2=l}}),e.React.createElement(v,{title:`Tertiary
`,color:s.colors.accent3,update:function(l){return s.colors.accent3=l}}))),e.React.createElement(G,{title:"Theme",icon:c.getAssetIDByName("ic_cog_24px"),padding:!r},r?e.React.createElement(e.React.Fragment,null,a?Array.isArray(a)?e.React.createElement(z,{commit:a[0],onPress:function(){return he(t)}}):e.React.createElement(T,{style:{marginTop:35,marginBottom:20,flexDirection:"column",justifyContent:"center",alignItems:"center"}},e.React.createElement(g,{variant:"text-md/semibold",color:"TEXT_DANGER",align:"center"},"You got ratelimited by GitHub. Congrats!"),e.React.createElement(g,{variant:"text-md/semibold",color:"TEXT_DANGER",align:"center",onPress:function(){return n(void 0)}},e.React.createElement(S.Underline,null,"Tap to retry"))):e.React.createElement(e.ReactNative.ActivityIndicator,{style:{marginVertical:35},size:"small"}),e.React.createElement(oe,{addPadding:!0}),e.React.createElement(w,{label:"Load Theme",leading:e.React.createElement(w.Icon,{source:c.getAssetIDByName("debug")}),onPress:function(){let l;try{l=j(r)}catch(E){return p.showToast(E.toString(),c.getAssetIDByName("Small"))}O.showConfirmationAlert({title:"Reload required",content:"A reload is required to load this theme. Do you want to reload?",confirmText:"Reload",confirmColor:"red",cancelText:"Cancel",onConfirm:async function(){await P.createFileBackend("vendetta_theme.json").set({id:M.id,selected:!0,data:l}),we.reload()}})}}),e.React.createElement(Se,{label:["Light Theme",e.React.createElement(T,{style:{width:10}}),e.React.createElement(T,{style:D.experimental},e.React.createElement(g,{variant:"text-xs/semibold",color:"BACKGROUND_SECONDARY_ALT"},"EXPERIMENTAL"))],leading:e.React.createElement(w.Icon,{source:c.getAssetIDByName("ic_message_edit")}),onValueChange:function(){return s.lightmode=!s.lightmode},value:s.lightmode}),e.React.createElement(w,{label:"Reload Theme Patches",leading:e.React.createElement(w.Icon,{source:c.getAssetIDByName("ic_sync_24px")}),onPress:function(){n(void 0),i(void 0)}})):e.React.createElement(e.ReactNative.ActivityIndicator,{style:{marginVertical:125},size:"small"})),r&&e.React.createElement(T,{style:{marginVertical:16,marginHorizontal:16}},e.React.createElement(k,{title:"Theme Preview",icon:c.getAssetIDByName("img_nitro_remixing")}),e.React.createElement(ve,{theme:{theme:j(r),origin:s.lightmode?"light":"dark"}}))):(m?K(m):s.colors={neutral1:"#747679",neutral2:"#70777C",accent1:"#007FAC",accent2:"#657985",accent3:"#787296"},e.React.createElement(e.React.Fragment,null))}const s=M.storage,W="https://raw.githubusercontent.com/Gabe616/VendettaMonetTheme/master/patches.jsonc",q="https://api.github.com/repos/Gabe616/VendettaMonetTheme/commits?path=patches.jsonc",{BundleUpdaterManager:Pe}=window.nativeModuleProxy;var xe={settings:Oe,onUnload:function(){window.__vendetta_theme?.id.includes("monet-theme")&&O.showConfirmationAlert({title:"Unload Theme",content:"Monet theme is currently selected, would you like to unload it?",onConfirm:async function(){await P.createFileBackend("vendetta_theme.json").set({}),Pe.reload()},confirmText:"Unload",confirmColor:"brand",cancelText:"Cancel"})}};return A.commitsURL=q,A.default=xe,A.patchesURL=W,A.vstorage=s,Object.defineProperty(A,"__esModule",{value:!0}),A})({},vendetta.plugin,vendetta.metro.common,vendetta.ui.components,vendetta.metro,vendetta.ui,vendetta.ui.assets,vendetta.ui.toasts,vendetta.ui.alerts,vendetta.storage,vendetta.debug,vendetta.constants,vendetta.utils);