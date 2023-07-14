(function(T,U,e,b,g,d,c,y,S,x,$,J,Z){"use strict";const{TextStyleSheet:Q}=g.findByProps("TextStyleSheet"),{View:_,Text:O,Pressable:ee}=b.General,{FormRow:te}=b.Forms,ne=g.findByName("ActionSheet"),{openLazy:re,hideActionSheet:Me}=g.findByProps("openLazy","hideActionSheet");g.findByProps("ActionSheetTitleHeader","ActionSheetCloseButton");function ae(t){const r=g.findByProps("colors","meta"),a=g.findByStoreName("ThemeStore");return r.meta.resolveSemanticColor(a.theme,t)}function ie(t,r){ne?re(new Promise(function(a){return a({default:t})}),"ActionSheet",r):y.showToast("You cannot open ActionSheets on this version! Update to 163+",c.getAssetIDByName("Small"))}function k(t){let{title:r,onPress:a,icon:n}=t;const i=e.stylesheet.createThemedStyleSheet({androidRipple:{color:d.semanticColors.ANDROID_RIPPLE},mainText:{fontFamily:e.constants.Fonts.PRIMARY_SEMIBOLD,fontSize:14,includeFontPadding:!1,letterSpacing:void 0,lineHeight:18,textTransform:"none",color:d.semanticColors.HEADER_SECONDARY},icon:{height:14,tintColor:d.semanticColors.HEADER_SECONDARY}}),o=a?ee:_;return e.React.createElement(o,{android_ripple:i.androidRipple,disabled:!1,accessibilityRole:"button",onPress:a,style:{marginBottom:8,flexDirection:"row",justifyContent:"flex-start",alignItems:"center"}},n&&e.React.createElement(_,{style:{marginRight:4}},e.React.createElement(te.Icon,{style:i.icon,source:n,size:"small"})),e.React.createElement(O,{style:i.mainText},r))}function G(t){let{title:r,onTitlePress:a,icon:n,children:i,padding:o}=t;const R=e.stylesheet.createThemedStyleSheet({main:{backgroundColor:d.semanticColors.BACKGROUND_TERTIARY,borderRadius:16,overflow:"hidden",flex:1}});return e.React.createElement(_,{style:{marginHorizontal:16,marginTop:16}},e.React.createElement(k,{title:r,onPress:a,icon:n}),e.React.createElement(_,{style:R.main},o?e.React.createElement(_,{style:{paddingHorizontal:16,paddingVertical:16}},i):i))}function oe(t){let{addPadding:r}=t;const a=e.stylesheet.createThemedStyleSheet({line:{width:"100%",height:2,backgroundColor:d.semanticColors.BACKGROUND_ACCENT,borderRadius:2147483647}});return e.React.createElement(_,{style:[{marginTop:16,marginBottom:16},r&&{marginHorizontal:16}]},e.React.createElement(_,{style:a.line}))}var P;(function(t){function r(n){let{children:i,onPress:o}=n;return e.React.createElement(p,{variant:"text-md/bold",onPress:o},i)}t.Bold=r;function a(n){let{children:i,onPress:o}=n;return e.React.createElement(O,{style:{textDecorationLine:"underline"},onPress:o},i)}t.Underline=a})(P||(P={}));function p(t){let{variant:r,lineClamp:a,color:n,align:i,style:o,onPress:R,getChildren:m,children:l,liveUpdate:E}=t;const[f,M]=e.React.useReducer(function(Ve){return~Ve},0),Le=new Date().setMilliseconds(1e3);return E&&setTimeout(function(){return M()},Le-Date.now()),e.React.createElement(O,{style:[r?Q[r]:{},n?{color:ae(d.semanticColors[n])}:{},i?{textAlign:i}:{},o??{}],numberOfLines:a,onPress:R},m?.()??l)}function ce(t){let{onPress:r,icon:a,style:n,destructive:i}=t;const o=e.stylesheet.createThemedStyleSheet({headerStyleIcon:{width:24,height:24,marginRight:10,tintColor:d.semanticColors.HEADER_PRIMARY},cardStyleIcon:{width:22,height:22,marginLeft:5,tintColor:d.semanticColors.INTERACTIVE_NORMAL},destructiveIcon:{tintColor:d.semanticColors.TEXT_DANGER}});return e.React.createElement(e.ReactNative.TouchableOpacity,{onPress:r},e.React.createElement(e.ReactNative.Image,{style:[typeof n=="string"?n==="header"?o.headerStyleIcon:o.cardStyleIcon:n,i&&o.destructiveIcon].filter(function(R){return!!R}),source:a}))}const le=g.findByName("CustomColorPickerActionSheet"),{View:se,Pressable:de}=b.General;function w(t){let{title:r,color:a,update:n}=t;const i=e.stylesheet.createThemedStyleSheet({androidRipple:{color:d.semanticColors.ANDROID_RIPPLE,cornerRadius:2147483647}});return React.createElement(se,{style:{flexDirection:"column",alignItems:"center",justifyContent:"center",flex:1/5}},React.createElement(de,{android_ripple:i.androidRipple,disabled:!1,accessibilityRole:"button",accessibilityState:{disabled:!1,expanded:!1},accessibilityLabel:`${r} Color Preview`,accessibilityHint:`Shows the ${r} color used in this theme`,style:{width:48,aspectRatio:1,backgroundColor:a,borderRadius:2147483647,marginBottom:8},onPress:function(){return ie(le,{color:parseInt(a.slice(1),16),onSelect:function(o){return n(`#${o.toString(16).padStart(6,"0")}`)}})},onLongPress:function(){e.clipboard.setString(a),y.showToast("Copied",c.getAssetIDByName("toast_copy_message"))}}),React.createElement(p,{variant:"text-sm/semibold",color:"TEXT_NORMAL",align:"center"},r))}function C(t){const r=Number(t.split("_")[1]);if(d.rawColors[t])return d.rawColors[t];if(t.startsWith("N1_"))return A(s.colors.neutral1,r);if(t.startsWith("N2_"))return A(s.colors.neutral2,r);if(t.startsWith("A1_"))return A(s.colors.accent1,r);if(t.startsWith("A2_"))return A(s.colors.accent2,r);if(t.startsWith("A3_"))return A(s.colors.accent3,r);if(t.match(/^#(?:[0-9a-f]{6})|(?:[0-9a-f]{3})$/))return t}function A(t,r,a){a??=1;const n=e.chroma.hex(t).lab(),i=(500-r)/1e3*2;return n[0]+=n[0]*i*a,e.chroma.lab(...n).hex()}function j(t){const r={name:"Material You Theme 1.0.43",description:"A Discord theme with Material You theming.",authors:[{name:"nexpid",id:"853550207039832084"},{name:"Taki_Shiwa",id:"466968658997149706"}],semanticColors:{},rawColors:{},spec:2},a=function(n){return Object.assign(n.both,s.lightmode?n.light:n.dark)};for(const[n,i]of Object.entries(a(t.replacers))){const o=C(i[0]);if(o)for(const R of Object.keys(d.rawColors).filter(function(m){return m.startsWith(`${n.split("_")[0]}_`)})){const m=Number(R.split("_")[1]);let l=!0;for(const f of n.split("_").slice(1)){if(!l)break;f.startsWith(">=")?l=m>=Number(f.slice(2)):f.startsWith("<=")?l=m<=Number(f.slice(2)):f.startsWith(">")?l=m>Number(f.slice(1)):f.startsWith("<")&&(l=m<Number(f.slice(1)))}if(!l)continue;const E=i[1];r.rawColors[R]=A(o,m,E)}}for(const[n,i]of Object.entries(a(t.raw)))r.rawColors[n]=C(i);for(const[n,i]of Object.entries(t.semantic.both))r.semanticColors[n]=[C(i),C(i)];for(const[n,i]of Object.entries(t.semantic.dark))r.semanticColors[n]?r.semanticColors[n][0]=C(i):r.semanticColors[n]=[C(i)];for(const[n,i]of Object.entries(t.semantic.light))r.semanticColors[n]?r.semanticColors[n][1]=C(i):r.semanticColors[n]=[void 0,C(i)];return JSON.parse(JSON.stringify(r))}const{View:B,Pressable:ue}=b.General;function H(t){let{commit:r,list:a,onPress:n}=t;const i=e.stylesheet.createThemedStyleSheet({androidRipple:{color:d.semanticColors.ANDROID_RIPPLE,cornerRadius:8},container:{backgroundColor:d.semanticColors.BACKGROUND_SECONDARY_ALT,flexDirection:"column",borderRadius:8}}),o=n?ue:B;return React.createElement(B,{style:a?{paddingHorizontal:12,paddingTop:12}:{paddingHorizontal:16,paddingTop:16}},React.createElement(o,{android_ripple:i.androidRipple,disabled:!1,accessibilityRole:"button",accessibilityState:{disabled:!1,expanded:!1},accessibilityLabel:"Commit",onPress:function(){return n()},style:i.container},React.createElement(B,{style:{marginHorizontal:12,marginVertical:12}},React.createElement(B,{style:{flexDirection:"row",marginBottom:4}},React.createElement(e.ReactNative.Image,{style:{width:20,height:20,borderRadius:2147483647,marginRight:8},source:{uri:r.committer.avatar_url}}),React.createElement(p,{style:{marginRight:8},variant:"text-sm/semibold",color:"TEXT_NORMAL"},r.committer.login),React.createElement(p,{style:{marginRight:8},variant:"text-sm/semibold",color:"TEXT_NORMAL"},"\u2022"),React.createElement(p,{color:"TEXT_NORMAL",style:{fontFamily:e.constants.Fonts.CODE_SEMIBOLD}},r.sha.slice(0,7))),React.createElement(p,{variant:"text-md/semibold",color:"TEXT_NORMAL"},r.commit.message))))}const{ScrollView:he}=b.General,me=function(){return V?React.createElement(he,null,V.map(function(t){return React.createElement(H,{commit:t,list:!0,onPress:function(){return e.url.openURL(t.html_url)}})})):React.createElement(e.ReactNative.ActivityIndicator,{style:{flex:1}})};function Re(t){t.push("VendettaCustomPage",{render:me,title:"Commits"})}function ge(t){return JSON.parse(t.replace(/\r/g,"").replace(/\/\/.*$/gm,"").replace(/\/\*(?:.|\n)*?(?=\*\/)\*\//g,""))}var z={github:{url:"https://github.com/Gabe616/VendettaPlugins/"}};const{showSimpleActionSheet:fe}=g.findByProps("showSimpleActionSheet"),ye=g.findByStoreName("UserStore");function pe(){const t=$.getDebugInfo(),r=e.ReactNative.NativeModules.InfoDictionaryManager??e.ReactNative.NativeModules.RTNClientInfoManager;return`Device: ${t.os.name==="iOS"?t.device.codename:`${t.device.brand} ${t.device.model}`}
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
Hermes Bytecode: ${t.hermes.bytecodeVersion}`}function F(t){const r=ye.getCurrentUser(),a=new URLSearchParams;for(const[n,i]of Object.entries(t))a.set(n,i);return a.set("discord-username",`@${r.username}${r.discriminator!=="0"?`#${r.discriminator}`:""}`),console.log(`${z.github.url}issues/new?${a.toString()}`),`${z.github.url}issues/new?${a.toString()}`}const Ee=function(t){return fe({key:"CardOverflow",header:{title:"GitHub Reports"},options:[{label:"Copy bug report link",icon:c.getAssetIDByName("copy"),onPress:function(){e.clipboard.setString(F({title:`bug(${t}): `,template:"bug_report.yml",labels:"bug",sysinfo:pe()})),y.showToast("Copied",c.getAssetIDByName("toast_copy_link"))}},{label:"Copy feature suggestion link",icon:c.getAssetIDByName("copy"),onPress:function(){e.clipboard.setString(F({title:`suggest(${t}): `,labels:"suggestion",template:"suggestion.yml"})),y.showToast("Copied",c.getAssetIDByName("toast_copy_link"))}}]})};function X(t){return t.match(J.HTTP_REGEX_MULTI)?.filter(function(r){return r.startsWith("https://repainter.app/themes/")})[0]}async function be(t){return await(await Z.safeFetch(`https://repainter.app/_next/data/Z0BCpVYZyrdkss0k0zqLC/themes/${t.match(/themes\/([a-z0-9]+)/i)?.[1]??""}.json`,{cache:"no-store"})).json()}function Ce(t){const r=Object.values(t.pageProps.fallback)[0];if(!r)throw new Error("Invalid Repainter theme!");const a=function(i){return(i&16777215).toString(16).padStart(6,"0")},n=r.colors.map(function(i){return`#${a(i)}`});return{name:r.name,description:r.description,createdAt:new Date(r.createdAt),updatedAt:new Date(r.updatedAt),settings:r.settingsLines,likes:r.voteCount,colors:{neutral1:n[44],neutral2:n[57],accent1:n[5],accent2:n[18],accent3:n[31]}}}const _e=["dark","light","amoled"];function u(t,r){const{SemanticColor:a,default:{meta:{resolveSemanticColor:n}}}=g.findByProps("SemanticColor");if(!d.semanticColors[r])throw new Error(`Invalid color: ${r}`);if(!t.theme)return n("dark",d.semanticColors[r]);if(t.theme.semanticColors[r])return t.theme.semanticColors[r][_e.indexOf(t.origin)];const i=a[r];return i&&t.theme.rawColors[i[t.origin].raw]?t.theme.rawColors[i[t.origin].raw]:n(t.origin,d.semanticColors[r])}const{TextStyleSheet:Te}=g.findByProps("TextStyleSheet"),{View:Ae}=b.General,Ie="iIjl ";function L(t){let{size:r,variant:a,color:n,children:i}=t;const o=Te[`text-${r}/${a}`].fontSize*.6,R=i.toString().split("").reduce(function(m,l){return m+(Ie.includes(l)?.3:.65)},0);return React.createElement(Ae,{style:{width:R*o,height:o,backgroundColor:n,borderRadius:2147483647,opacity:.85}})}const{View:h}=b.General;function Ne(t){let{style:r,theme:a}=t;const n=e.stylesheet.createThemedStyleSheet({bottomCont:{flex:1/5,justifyContent:"center",alignItems:"center"},bottomIcon:{height:"50%",aspectRatio:1},round:{aspectRatio:1,borderRadius:2147483647},middle:{justifyContent:"center",alignItems:"center"}}),i="https://cdn.discordapp.com/attachments/919655852724604978/1129359052045025322/5b7f29e9c670fbcbf476b4d88fbd081f.png",o=["clyde-avatar","role_subscription_earning_metric_avatar","role_subscription_benefit_avatar_1","role_subscription_benefit_wise_avatar","role_subscription_benefit_bunny_avatar","role_subscription_benefit_nelly_avatar","avatar_onboarding"],R=[];for(const m of o)R.push(React.createElement(h,{style:{marginBottom:13,flexDirection:"row"}},React.createElement(e.ReactNative.Image,{style:[n.round,{marginRight:8,width:"15%"}],source:c.getAssetIDByName(m)}),React.createElement(h,{style:{flexDirection:"column",justifyContent:"center"}},React.createElement(L,{size:"sm",variant:"semibold",color:u(a,"TEXT_NORMAL")},"Random User"))));return React.createElement(h,{style:[r,{backgroundColor:u(a,"ACTIVITY_CARD_BACKGROUND")}]},React.createElement(h,{style:{width:"20%",height:"100%",position:"absolute",left:0,top:"4%",paddingHorizontal:10,flexDirection:"column"}},React.createElement(h,{style:[n.round,n.middle,{borderRadius:10,backgroundColor:u(a,"BUTTON_OUTLINE_BRAND_BACKGROUND_HOVER"),marginBottom:8,width:"100%"}]},React.createElement(e.ReactNative.Image,{source:c.getAssetIDByName("ic_chat_bubble_16px"),style:[n.bottomIcon,{tintColor:u(a,"INTERACTIVE_ACTIVE")}]})),React.createElement(h,{style:{width:"100%",marginBottom:8}},React.createElement(h,{style:{height:1,backgroundColor:u(a,"BACKGROUND_MOBILE_PRIMARY")}})),React.createElement(e.ReactNative.Image,{style:[n.round,{marginBottom:8,width:"100%"}],source:{uri:i}}),React.createElement(h,{style:[n.round,n.middle,{backgroundColor:u(a,"BACKGROUND_MOBILE_SECONDARY"),marginBottom:8,width:"100%"}]},React.createElement(e.ReactNative.Image,{style:[n.bottomIcon,{tintColor:u(a,"BUTTON_OUTLINE_POSITIVE_BORDER")}],source:c.getAssetIDByName("hub-add")})),React.createElement(h,{style:[n.round,n.middle,{backgroundColor:u(a,"BACKGROUND_MOBILE_SECONDARY"),marginBottom:8,width:"100%"}]},React.createElement(e.ReactNative.Image,{style:[n.bottomIcon,{tintColor:u(a,"BUTTON_OUTLINE_POSITIVE_BORDER")}],source:c.getAssetIDByName("hub-icon")}))),React.createElement(h,{style:{position:"absolute",left:"20%",top:"4%",width:"80%",height:"100%",paddingRight:10}},React.createElement(h,{style:{borderTopLeftRadius:8,borderTopRightRadius:8,backgroundColor:u(a,"BACKGROUND_MOBILE_SECONDARY"),height:"100%",paddingHorizontal:12,paddingVertical:12}},React.createElement(h,{style:{marginBottom:10,flexDirection:"row",alignItems:"center"}},React.createElement(h,{style:{paddingVertical:6}},React.createElement(L,{size:"md",variant:"bold",color:u(a,"TEXT_NORMAL")},"Direct Messages")),React.createElement(e.ReactNative.Image,{style:{position:"absolute",right:0,height:"80%",aspectRatio:1,tintColor:u(a,"HEADER_SECONDARY")},source:c.getAssetIDByName("ic-new-message")})),React.createElement(h,{style:{marginBottom:14,backgroundColor:u(a,"ACTIVITY_CARD_BACKGROUND"),paddingHorizontal:6,borderRadius:4,flexDirection:"row",alignItems:"center"}},React.createElement(h,{style:{paddingVertical:10}},React.createElement(L,{variant:"semibold",size:"sm",color:u(a,"TEXT_MUTED")},"Tap here to search stuff")),React.createElement(e.ReactNative.Image,{style:{position:"absolute",right:6,height:"50%",aspectRatio:1,tintColor:u(a,"TEXT_MUTED")},source:c.getAssetIDByName("ic_search")})),...R)),React.createElement(h,{style:{position:"absolute",bottom:0,left:0,width:"100%",height:"7.5%",flexDirection:"row",backgroundColor:u(a,"BACKGROUND_FLOATING"),zIndex:2}},React.createElement(h,{style:n.bottomCont},React.createElement(e.ReactNative.Image,{source:c.getAssetIDByName("ic_discord"),style:[n.bottomIcon,{tintColor:u(a,"INTERACTIVE_ACTIVE")}]})),React.createElement(h,{style:n.bottomCont},React.createElement(e.ReactNative.Image,{source:c.getAssetIDByName("friends_toast_icon"),style:[n.bottomIcon,{tintColor:u(a,"INTERACTIVE_NORMAL")}]})),React.createElement(h,{style:n.bottomCont},React.createElement(e.ReactNative.Image,{source:c.getAssetIDByName("ic_search"),style:[n.bottomIcon,{tintColor:u(a,"INTERACTIVE_NORMAL")}]})),React.createElement(h,{style:n.bottomCont},React.createElement(e.ReactNative.Image,{source:c.getAssetIDByName("ic_notif"),style:[n.bottomIcon,{tintColor:u(a,"INTERACTIVE_NORMAL")}]})),React.createElement(h,{style:n.bottomCont},React.createElement(e.ReactNative.Image,{source:c.getAssetIDByName("ic_profile_24px"),style:[n.bottomIcon,{tintColor:u(a,"INTERACTIVE_NORMAL")}]}))))}function we(t){let{theme:r,fullscreen:a}=t;const n=e.ReactNative.Dimensions.get("window"),i=e.stylesheet.createThemedStyleSheet({card:{width:a?"100%":n.width*.7,height:a?"100%":n.height*.7,borderRadius:8,backgroundColor:d.semanticColors.BACKGROUND_SECONDARY_ALT,marginHorizontal:8,overflow:"hidden"}});return e.React.createElement(b.ErrorBoundary,null,e.React.createElement(Ne,{style:i.card,theme:r}))}const{BundleUpdaterManager:De}=window.nativeModuleProxy,{ScrollView:ve,View:I,Pressable:Y}=b.General,{FormRow:D,FormSwitchRow:Se}=b.Forms,{TextStyleSheet:Be}=g.findByProps("TextStyleSheet"),N=Be["text-md/semibold"].fontSize,v=e.stylesheet.createThemedStyleSheet({androidRipple:{color:d.semanticColors.ANDROID_RIPPLE,cornerRadius:8},warning:{color:d.semanticColors.TEXT_DANGER},info:{color:d.semanticColors.TEXT_BRAND},experimental:{backgroundColor:d.semanticColors.TEXT_BRAND,borderRadius:4,paddingHorizontal:3,paddingVertical:3,justifyContent:"center",alignItems:"center",flexDirection:"row"}}),K=function(t){s.colors={neutral1:t.neutral1[7],neutral2:t.neutral2[7],accent1:t.accent1[7],accent2:t.accent2[7],accent3:t.accent3[7]}};let V;function xe(){const t=e.NavigationNative.useNavigation(),[r,a]=e.React.useState(void 0),[n,i]=e.React.useState(void 0);V=r,s.lightmode??=!1,x.useProxy(s),e.React.useEffect(function(){n||fetch(W,{cache:"no-store"}).then(function(l){return l.text().then(function(E){try{i(ge(E.replace(/\r/g,"")))}catch{return y.showToast("Failed to parse patches.json",c.getAssetIDByName("Small"))}})}).catch(function(){return y.showToast("Failed to fetch patches.json",c.getAssetIDByName("Small"))})},[n]),e.React.useEffect(function(){r||fetch(q,{cache:"no-store"}).then(function(l){return l.json().then(function(E){return a(E)}).catch(function(){return y.showToast("Failed to parse commits",c.getAssetIDByName("Small"))})}).catch(function(){return y.showToast("Failed to fetch commits",c.getAssetIDByName("Small"))})},[r]),t.setOptions({headerRight:function(){return e.React.createElement(ce,{style:"header",icon:c.getAssetIDByName("ic_report_message"),onPress:function(){return Ee("customrpc")}})}});let o;const R=$.getDebugInfo(),m=window[window.__vendetta_loader.features.syscolors?.prop];return R.os.name!=="Android"?o={error:!1,message:"Dynamic colors are only available on Android.",onPress:function(){}}:R.os.sdk<31?o={error:!1,message:"Dynamic colors are only available on Android 12+ (SDK 31+).",onPress:function(){}}:m||(o={error:!0,message:"Dynamic colors not available. ",cta:"Fix",onPress:function(){return S.showConfirmationAlert({title:"Enable Dynamic Colors",content:"To use dynamic colors, use nexx's modified VendettaXposed (until it gets merged to the normal XPosed module)",onConfirm:function(){return e.url.openURL("https://github.com/Gabe616/VendettaMod-VendettaXposed#readme")},confirmText:"View on GitHub",cancelText:"Okay"})}}),s.colors?e.React.createElement(ve,null,o&&e.React.createElement(I,{style:{flexDirection:"row",alignItems:"center",justifyContent:"center",marginTop:8}},e.React.createElement(e.ReactNative.Image,{source:c.getAssetIDByName(o.error?"ic_warning_24px":"ic_info_24px"),style:{width:N,height:N,tintColor:o.error?v.warning.color:v.info.color,marginRight:4}}),e.React.createElement(p,{variant:"text-md/semibold",color:o.error?"TEXT_DANGER":"TEXT_BRAND"},o.message,o.cta&&e.React.createElement(P.Underline,{onPress:o.onPress},o.cta))),e.React.createElement(G,{title:"Colors",icon:c.getAssetIDByName("ic_theme_24px"),padding:!0},e.React.createElement(I,{style:{marginBottom:8,flexDirection:"row",alignItems:"center",justifyContent:"center"}},m&&e.React.createElement(Y,{android_ripple:v.androidRipple,disabled:!1,accessibilityRole:"button",accessibilityState:{disabled:!1,expanded:!1},accessibilityLabel:"Autofill button",accessibilityHint:"Autofills colors to system's dynamic colors",style:{flexDirection:"row",alignItems:"center",paddingHorizontal:4,paddingVertical:4},onPress:function(){K(m),y.showToast("Autofilled",c.getAssetIDByName("Check"))}},e.React.createElement(e.ReactNative.Image,{source:c.getAssetIDByName("img_nitro_remixing"),style:{width:N,height:N,marginRight:4}}),e.React.createElement(p,{variant:"text-md/semibold",color:"TEXT_NORMAL"},"Autofill")),m&&e.React.createElement(p,{variant:"text-md/semibold",color:"TEXT_NORMAL",style:{marginHorizontal:5}},"\u2022"),e.React.createElement(Y,{android_ripple:v.androidRipple,disabled:!1,accessibilityRole:"button",accessibilityState:{disabled:!1,expanded:!1},accessibilityLabel:"Use Repainter theme",accessibilityHint:"Inputs a Repainter theme",style:{flexDirection:"row",alignItems:"center",paddingHorizontal:4,paddingVertical:4},onPress:async function(){const l=X(await e.clipboard.getString()??"");S.showInputAlert({title:"Enter Repainter link",placeholder:"https://repainter.app/themes/123ABC",initialValue:l,onConfirm:async function(E){const f=X(E);if(!f)throw new Error("No Repainter link found!");const M=Ce(await be(f));s.colors=M.colors,y.showToast("Imported",c.getAssetIDByName("toast_image_saved"))},confirmText:"Use",confirmColor:"brand",cancelText:"Cancel"})}},e.React.createElement(e.ReactNative.Image,{source:c.getAssetIDByName("ic_theme_24px"),style:{width:N,height:N,marginRight:4}}),e.React.createElement(p,{variant:"text-md/semibold",color:"TEXT_NORMAL"},"Use Repainter theme"))),e.React.createElement(I,{style:{flexDirection:"row",alignItems:"center",justifyContent:"center"}},e.React.createElement(w,{title:`Neutral
`,color:s.colors.neutral1,update:function(l){return s.colors.neutral1=l}}),e.React.createElement(w,{title:`Neutral
Variant`,color:s.colors.neutral2,update:function(l){return s.colors.neutral2=l}}),e.React.createElement(w,{title:`Primary
`,color:s.colors.accent1,update:function(l){return s.colors.accent1=l}}),e.React.createElement(w,{title:`Secondary
`,color:s.colors.accent2,update:function(l){return s.colors.accent2=l}}),e.React.createElement(w,{title:`Tertiary
`,color:s.colors.accent3,update:function(l){return s.colors.accent3=l}}))),e.React.createElement(G,{title:"Theme",icon:c.getAssetIDByName("ic_cog_24px"),padding:!n},n?e.React.createElement(e.React.Fragment,null,r?e.React.createElement(H,{commit:r[0],onPress:function(){return Re(t)}}):e.React.createElement(e.ReactNative.ActivityIndicator,{style:{flex:1,paddingTop:16}}),e.React.createElement(oe,{addPadding:!0}),e.React.createElement(D,{label:"Load Theme",leading:e.React.createElement(D.Icon,{source:c.getAssetIDByName("debug")}),onPress:function(){let l;try{l=j(n)}catch(E){return y.showToast(E.toString(),c.getAssetIDByName("Small"))}S.showConfirmationAlert({title:"Reload required",content:"A reload is required to load this theme. Do you want to reload?",confirmText:"Reload",confirmColor:"red",cancelText:"Cancel",onConfirm:async function(){await x.createFileBackend("vendetta_theme.json").set({id:U.id,selected:!0,data:l}),De.reload()}})}}),e.React.createElement(Se,{label:["Light Theme",e.React.createElement(I,{style:{width:10}}),e.React.createElement(I,{style:v.experimental},e.React.createElement(p,{variant:"text-xs/semibold",color:"BACKGROUND_SECONDARY_ALT"},"EXPERIMENTAL"))],leading:e.React.createElement(D.Icon,{source:c.getAssetIDByName("ic_message_edit")}),onValueChange:function(){return s.lightmode=!s.lightmode},value:s.lightmode}),e.React.createElement(D,{label:"Reload Theme Patches",leading:e.React.createElement(D.Icon,{source:c.getAssetIDByName("ic_sync_24px")}),onPress:function(){a(void 0),i(void 0)}})):e.React.createElement(e.ReactNative.ActivityIndicator,{style:{flex:1}})),n&&e.React.createElement(I,{style:{marginVertical:16,marginHorizontal:16}},e.React.createElement(k,{title:"Theme Preview",icon:c.getAssetIDByName("img_nitro_remixing")}),e.React.createElement(we,{theme:{theme:j(n),origin:s.lightmode?"light":"dark"}}))):(m?K(m):s.colors={neutral1:"#747679",neutral2:"#70777C",accent1:"#007FAC",accent2:"#657985",accent3:"#787296"},e.React.createElement(e.React.Fragment,null))}const s=U.storage,W="https://raw.githubusercontent.com/Gabe616/VendettaMonetTheme/master/patches.jsonc",q="https://api.github.com/repos/Gabe616/VendettaMonetTheme/commits?path=patches.jsonc",{BundleUpdaterManager:Oe}=window.nativeModuleProxy;var Pe={settings:xe,onUnload:function(){window.__vendetta_theme?.id.includes("monet-theme")&&S.showConfirmationAlert({title:"Unload Theme",content:"Monet theme is currently selected, would you like to unload it?",onConfirm:async function(){await x.createFileBackend("vendetta_theme.json").set({}),Oe.reload()},confirmText:"Unload",confirmColor:"brand",cancelText:"Cancel"})}};return T.commitsURL=q,T.default=Pe,T.patchesURL=W,T.vstorage=s,Object.defineProperty(T,"__esModule",{value:!0}),T})({},vendetta.plugin,vendetta.metro.common,vendetta.ui.components,vendetta.metro,vendetta.ui,vendetta.ui.assets,vendetta.ui.toasts,vendetta.ui.alerts,vendetta.storage,vendetta.debug,vendetta.constants,vendetta.utils);
