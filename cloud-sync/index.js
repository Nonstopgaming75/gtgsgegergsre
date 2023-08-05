(function(h,me,G,d,A,C,_,S,c,U,i,g,E,z,be,Ce,Te){"use strict";const{TextStyleSheet:Ie}=d.findByProps("TextStyleSheet"),{View:P,Text:H,Pressable:Pe}=g.General,{FormRow:Ne}=g.Forms,q=d.find(function(e){return e.render?.name==="ActionSheet"}),{openLazy:Ae,hideActionSheet:Z}=d.findByProps("openLazy","hideActionSheet"),{ActionSheetTitleHeader:De,ActionSheetCloseButton:Be,ActionSheetContentContainer:_e}=d.findByProps("ActionSheetTitleHeader","ActionSheetCloseButton","ActionSheetContentContainer");function Oe(e){const t=d.findByProps("colors","meta"),n=d.findByStoreName("ThemeStore");return t.meta.resolveSemanticColor(n.theme,e)}function ee(e,t){q?Ae(new Promise(function(n){return n({default:e})}),"ActionSheet",t):S.showToast("You cannot open ActionSheets on this version! Update to 163+",c.getAssetIDByName("Small"))}function $e(e){let{title:t,onPress:n,icon:r}=e;const o=i.stylesheet.createThemedStyleSheet({androidRipple:{color:E.semanticColors.ANDROID_RIPPLE},mainText:{fontFamily:i.constants.Fonts.PRIMARY_SEMIBOLD,fontSize:14,includeFontPadding:!1,letterSpacing:void 0,lineHeight:18,textTransform:"none",color:E.semanticColors.HEADER_SECONDARY},icon:{height:14,tintColor:E.semanticColors.HEADER_SECONDARY}}),a=n?Pe:P;return i.React.createElement(a,{android_ripple:o.androidRipple,disabled:!1,accessibilityRole:"button",onPress:n,style:{marginBottom:8,flexDirection:"row",justifyContent:"flex-start",alignItems:"center"}},r&&i.React.createElement(P,{style:{marginRight:4}},i.React.createElement(Ne.Icon,{style:o.icon,source:r,size:"small"})),i.React.createElement(H,{style:o.mainText},t))}function j(e){let{title:t,onTitlePress:n,icon:r,children:o,padding:a}=e;const l=i.stylesheet.createThemedStyleSheet({main:{backgroundColor:E.semanticColors.BACKGROUND_TERTIARY,borderRadius:16,overflow:"hidden",flex:1}});return i.React.createElement(P,{style:{marginHorizontal:16,marginTop:16}},i.React.createElement($e,{title:t,onPress:n,icon:r}),i.React.createElement(P,{style:l.main},a?i.React.createElement(P,{style:{paddingHorizontal:16,paddingVertical:16}},o):o))}function xe(e){let{addPadding:t}=e;const n=i.stylesheet.createThemedStyleSheet({line:{width:"100%",height:2,backgroundColor:E.semanticColors.BACKGROUND_ACCENT,borderRadius:2147483647}});return i.React.createElement(P,{style:[{marginTop:16,marginBottom:16},t&&{marginHorizontal:16}]},i.React.createElement(P,{style:n.line}))}var te;(function(e){function t(r){let{children:o,onPress:a}=r;return i.React.createElement(ne,{variant:"text-md/bold",onPress:a},o)}e.Bold=t;function n(r){let{children:o,onPress:a}=r;return i.React.createElement(H,{style:{textDecorationLine:"underline"},onPress:a},o)}e.Underline=n})(te||(te={}));function ne(e){let{variant:t,lineClamp:n,color:r,align:o,style:a,onPress:l,getChildren:y,children:u,liveUpdate:m}=e;const[b,v]=i.React.useReducer(function(R){return~R},0);return i.React.useEffect(function(){if(!m)return;const R=new Date().setMilliseconds(1e3);let w,I;return I=setTimeout(function(){v(),w=setInterval(v,1e3)},R-Date.now()),function(){clearTimeout(I),clearInterval(w)}},[]),i.React.createElement(H,{style:[t?Ie[t]:{},r?{color:Oe(E.semanticColors[r])}:{},o?{textAlign:o}:{},a??{}],numberOfLines:n,onPress:l},y?.()??u)}function ie(e){let{onPress:t,icon:n,style:r,destructive:o}=e;const a=i.stylesheet.createThemedStyleSheet({headerStyleIcon:{width:24,height:24,marginRight:10,tintColor:E.semanticColors.HEADER_PRIMARY},cardStyleIcon:{width:22,height:22,marginLeft:5,tintColor:E.semanticColors.INTERACTIVE_NORMAL},destructiveIcon:{tintColor:E.semanticColors.TEXT_DANGER}});return i.React.createElement(i.ReactNative.TouchableOpacity,{onPress:t},i.React.createElement(i.ReactNative.Image,{style:[typeof r=="string"?r==="header"?a.headerStyleIcon:a.cardStyleIcon:r,o&&a.destructiveIcon].filter(function(l){return!!l}),source:n}))}const{View:Me,Text:re}=g.General,{TextStyleSheet:ae}=d.findByProps("TextStyleSheet"),oe=i.stylesheet.createThemedStyleSheet({count:{...ae["text-lg/bold"],color:E.semanticColors.TEXT_NORMAL,textAlign:"center"},subtitle:{...ae["text-md/medium"],color:E.semanticColors.TEXT_MUTED,textAlign:"center"}});function ce(e){let{subtitle:t,count:n,contents:r}=e;return React.createElement(Me,{style:{alignItems:"center",justifyContent:"center",marginHorizontal:16}},React.createElement(re,{style:oe.count},n),React.createElement(re,{style:oe.subtitle},t))}const se="https://cloudsync.nexpid.xyz/";var N={api:se,oauth2:{clientId:"1120793656878714913",redirectURL:`${se}api/oauth2-response`}};function Le(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ue(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function k(e,t,n){return le()?k=Reflect.construct:k=function(r,o,a){var l=[null];l.push.apply(l,o);var y=Function.bind.apply(r,l),u=new y;return a&&$(u,a.prototype),u},k.apply(null,arguments)}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},O(e)}function je(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&$(e,t)}function ke(e){return Function.toString.call(e).indexOf("[native code]")!==-1}function Fe(e,t){return t&&(Ve(t)==="object"||typeof t=="function")?t:Le(e)}function $(e,t){return $=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n},$(e,t)}function Ve(e){"@swc/helpers - typeof";return e&&typeof Symbol<"u"&&e.constructor===Symbol?"symbol":typeof e}function Y(e){var t=typeof Map=="function"?new Map:void 0;return Y=function(n){if(n===null||!ke(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(typeof t<"u"){if(t.has(n))return t.get(n);t.set(n,r)}function r(){return k(n,arguments,O(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),$(r,n)},Y(e)}function le(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Ge(e){var t=le();return function(){var n=O(e),r;if(t){var o=O(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Fe(this,r)}}const ue=d.findByStoreName("UserStore");let x=function(e){je(n,e);var t=Ge(n);function n(r){Ue(this,n);var o;return o=t.call(this,`${r.status}: ${r.message}${r.error?` (${r.error})`:""}`),o.name=o.constructor.name,o}return n}(Y(Error));function T(){return s.auth?.[ue.getCurrentUser().id]}async function J(){const e=new Error("Unauthorized, try logging out and back in again");let t=T();if(!t)throw e;if(t.expiresAt>=Date.now()){const n=await fetch(`${N.api}api/refresh-access-token?refresh_token=${encodeURIComponent(t.refreshToken)}`);if(n.status!==200)throw new x(await n.json());t=await n.json(),s.auth??={},s.auth[ue.getCurrentUser().id]=t}return t.accessToken}async function ze(e){const t=await fetch(`${N.api}api/get-access-token?code=${encodeURIComponent(e)}`);if(t.status===200)return await t.json();throw new x(await t.json())}async function He(){if(!T())return;const e=await fetch(`${N.api}api/get-data`,{headers:{authorization:await J()}});if(e.status===200)return await e.json();throw new x(await e.json())}async function de(e){if(!T())return;const t=await fetch(`${N.api}api/sync-data`,{method:"POST",headers:{authorization:await J(),"content-type":"application/json"},body:JSON.stringify(e)});if(t.status===200)return await t.json();throw new x(await t.json())}async function Ye(){if(!T())return;const e=await fetch(`${N.api}api/delete-data`,{method:"DELETE",headers:{authorization:await J()}});if(e.status===200)return await e.json();throw new x(await e.json())}const{pushModal:Je,popModal:Xe}=d.findByProps("pushModal","popModal"),Ke=d.findByName("OAuth2AuthorizeModal"),We=d.findByStoreName("UserStore");function Qe(){Je({key:"oauth2-authorize",modal:{key:"oauth2-authorize",modal:Ke,animation:"slide-up",shouldPersistUnderModals:!1,props:{clientId:N.oauth2.clientId,redirectUri:N.oauth2.redirectURL,scopes:["identify"],responseType:"code",permissions:0n,cancelCompletesFlow:!1,callback:async function(e){let{location:t}=e;try{const n=new URL(t).searchParams.get("code"),r=await ze(n);s.auth??={},s.auth[We.getCurrentUser().id]=r,Q(),S.showToast("Successfully authenticated",c.getAssetIDByName("Check"))}catch(n){S.showToast(String(n),c.getAssetIDByName("Small"))}},dismissOAuthModal:function(){return Xe("oauth2-authorize")}},closable:!0}})}const{BundleUpdaterManager:bt,MMKVManager:qe}=window.nativeModuleProxy;async function fe(){const e={themes:[],plugins:[]};for(const t of Object.values(C.plugins)){const n=s.pluginSettings?.[t.id];if(n?.syncPlugin===!1)continue;const r=n?.syncStorage===!1?{}:await G.createMMKVBackend(t.id).get();e.plugins.push({id:t.id,enabled:t.enabled,options:r})}for(const t of Object.values(_.themes))e.themes.push({id:t.id,enabled:t.selected});return e}let F;function Ze(e){F=e}async function et(e){if(!f.save)return;F?.(!0);const t=[...f.save.sync.plugins.filter(function(r){return!C.plugins[r.id]&&!M(r.id)&&e.unproxiedPlugins}),...f.save.sync.plugins.filter(function(r){return!C.plugins[r.id]&&M(r.id)&&e.plugins})],n=f.save.sync.themes.filter(function(r){return!_.themes[r.id]&&e.themes});if(!t[0]&&!n[0])return F?.(!1),S.showToast("Nothing to import",c.getAssetIDByName("Small"));S.showToast(`Importing ${[t.length&&`${t.length} plugin${t.length!==1?"s":""}`,n.length&&`${n.length} theme${n.length!==1?"s":""}`].filter(function(r){return!!r}).join(" and ")}`,c.getAssetIDByName("toast_image_saved")),await Promise.all([async function(){for(const r of t)qe.setItem(r.id,JSON.stringify(r.options)),await C.installPlugin(r.id,r.enabled)}(),async function(){for(const r of n)await _.installTheme(r.id)}()]),S.showToast(`Imported ${[t.length&&"plugins",n.length&&"themes"].filter(function(r){return!!r}).join("&")}!`,c.getAssetIDByName("check")),F?.(!1)}const{FormCheckboxRow:X}=g.Forms;function ge(e){let{defOptions:t}=e;const n={unproxiedPlugins:f.save.sync.plugins.filter(function(a){return!C.plugins[a.id]&&!M(a.id)}).length,plugins:f.save.sync.plugins.filter(function(a){return!C.plugins[a.id]&&M(a.id)}).length,themes:f.save.sync.themes.filter(function(a){return!_.themes[a.id]}).length},[r,o]=i.React.useState(t??{unproxiedPlugins:!1,plugins:!!n.plugins,themes:!!n.themes});return i.React.createElement(q,null,i.React.createElement(_e,null,i.React.createElement(De,{title:"Import Data",trailing:i.React.createElement(Be,{onPress:function(){return Z()}})}),i.React.createElement(X,{label:`Unproxied Plugins (${n.unproxiedPlugins})`,disabled:!n.unproxiedPlugins,onPress:function(){return n.unproxiedPlugins&&(!r.unproxiedPlugins&&!t?U.showConfirmationAlert({title:"Warning",content:"Installing unproxied plugins can be dangerous since they haven't been verified by Vendetta staff. Are you sure you want to import them?",isDismissable:!0,confirmText:"Yes",confirmColor:"brand",onConfirm:function(){return ee(ge,{defOptions:{...r,unproxiedPlugins:!0}})},cancelText:"Cancel"}):o({...r,unproxiedPlugins:!r.unproxiedPlugins}))},selected:r.unproxiedPlugins}),i.React.createElement(X,{label:`Plugins (${n.plugins})`,disabled:!n.plugins,onPress:function(){return n.plugins&&o({...r,plugins:!r.plugins})},selected:r.plugins}),i.React.createElement(X,{label:`Themes (${n.themes})`,disabled:!n.themes,onPress:function(){return n.themes&&o({...r,themes:!r.themes})},selected:r.themes}),i.React.createElement(g.Button,{text:"Import",color:"green",size:"medium",renderIcon:function(){return i.React.createElement(i.ReactNative.Image,{style:{marginRight:8},source:c.getAssetIDByName("ic_download_24px")})},onPress:function(){et(r),Z()},style:{marginHorizontal:16,marginVertical:16},disabled:!r.unproxiedPlugins&&!r.plugins&&!r.themes})))}const he=d.findByProps("isTablet"),{View:tt}=g.General,{FormRow:nt}=g.Forms;function it(){const[e,t]=i.React.useState({});return T()?i.React.createElement(tt,{style:{flexDirection:he.isTablet?"row":"column",justifyContent:"flex-end"}},[{text:"Save Data",onPress:async function(n){n(!0);try{f.save=await de(await fe()),B(),S.showToast("Successfully synced data",c.getAssetIDByName("Check"))}catch(r){S.showToast(String(r),c.getAssetIDByName("Small"))}n(!1)}},{text:"Import Data",onPress:function(n){f.save&&(ee(ge,{}),Ze(n))}}].map(function(n,r){const o=r!==0?8:0;return i.React.createElement(g.Button,{text:n.text,color:"green",size:"small",onPress:function(){return!e[r]&&n.onPress(function(a){t({...e,[r]:!!a})})},trailing:i.React.createElement(nt.Icon,{source:c.getAssetIDByName("Check")}),loading:e[r],style:[he.isTablet?{marginLeft:o}:{marginTop:o}]})})):i.React.createElement(ne,{variant:"text-md/semibold",color:"TEXT_NORMAL",align:"center"},"Authenticate first to manage your data")}const{FormSwitchRow:ye}=g.Forms;function rt(){const[e,t]=i.React.useState(""),[,n]=i.React.useReducer(function(a){return~a},0);i.React.useEffect(function(){t("")},[]),G.useProxy(s);const r=i.NavigationNative.useNavigation(),o=r.addListener("focus",function(){o(),r.setOptions({title:"Plugin Settings",headerRight:function(){return i.React.createElement(ie,{onPress:function(){return U.showConfirmationAlert({title:"Revert Settings",content:"Are you sure you want to revert all plugin settings?",confirmText:"Revert",cancelText:"Cancel",confirmColor:"red",onConfirm:function(){return s.pluginSettings={}}})},icon:c.getAssetIDByName("ic_message_delete"),style:"header"})}})});return i.React.createElement(i.ReactNative.FlatList,{ListHeaderComponent:i.React.createElement(g.Search,{style:{marginBottom:10},onChangeText:function(a){return t(a.toLowerCase())}}),style:{paddingHorizontal:10,paddingTop:10},contentContainerStyle:{paddingBottom:20},data:Object.entries(C.plugins).filter(function(a){return a[1].manifest.name?.toLowerCase().includes(e)}),renderItem:function(a){let{item:[l,y]}=a;s.pluginSettings??={};const u=s.pluginSettings[l]??{syncPlugin:!0,syncStorage:!0},m=function(){s.pluginSettings??={},u.syncPlugin===!0&&u.syncStorage===!0?delete s.pluginSettings[l]:s.pluginSettings[l]=u,n()};return i.React.createElement(g.Summary,{label:y.manifest.name,icon:y.manifest.vendetta.icon??":3"},i.React.createElement(ye,{label:"Sync Plugin",onValueChange:function(){u.syncPlugin=!u.syncPlugin,m()},value:u.syncPlugin}),i.React.createElement(ye,{label:"Sync Plugin Storage",onValueChange:function(){u.syncStorage=!u.syncStorage,m()},value:u.syncStorage}))}})}var pe={github:{url:"https://github.com/Gabe616/VendettaPlugins/"}};const{showSimpleActionSheet:at}=d.findByProps("showSimpleActionSheet"),ot=d.findByStoreName("UserStore");function ct(){const e=Te.getDebugInfo(),t=i.ReactNative.NativeModules.InfoDictionaryManager??i.ReactNative.NativeModules.RTNClientInfoManager;return`Device: ${e.os.name==="iOS"?e.device.codename:`${e.device.brand} ${e.device.model}`}
Model: ${e.device.model}
Manufacturer: ${e.device.manufacturer}
Brand: ${e.device.brand}

OS: ${e.os.name}
Version: ${e.os.version}

Discord Branch: ${t.ReleaseChannel}
Discord Version: ${e.discord.version}
Discord Build: ${e.discord.build}
Vendetta Version: ${e.vendetta.version}

React Version: ${e.react.version}
Hermes Bytecode: ${e.hermes.bytecodeVersion}`}function Se(e){const t=ot.getCurrentUser(),n=new URLSearchParams;for(const[r,o]of Object.entries(e))n.set(r,o);return n.set("discord-username",`@${t.username}${t.discriminator!=="0"?`#${t.discriminator}`:""}`),console.log(`${pe.github.url}issues/new?${n.toString()}`),`${pe.github.url}issues/new?${n.toString()}`}const st=function(e){return at({key:"CardOverflow",header:{title:"GitHub Reports"},options:[{label:"Copy bug report link",icon:c.getAssetIDByName("copy"),onPress:function(){i.clipboard.setString(Se({title:`bug(${e}): `,template:"bug_report.yml",labels:"bug",sysinfo:ct()})),S.showToast("Copied",c.getAssetIDByName("toast_copy_link"))}},{label:"Copy feature suggestion link",icon:c.getAssetIDByName("copy"),onPress:function(){i.clipboard.setString(Se({title:`suggest(${e}): `,labels:"suggestion",template:"suggestion.yml"})),S.showToast("Copied",c.getAssetIDByName("toast_copy_link"))}}]})},{ScrollView:lt,View:ut}=g.General,{FormRow:p,FormSwitchRow:Re}=g.Forms,Ee=d.findByStoreName("UserStore");function K(){const[,e]=i.React.useReducer(function(r){return~r},0);G.useProxy(s),h.cacheUpd.push(e),i.React.useEffect(function(){return function(){h.cacheUpd=h.cacheUpd.filter(function(r){return r!==e})}},[]);const t=i.NavigationNative.useNavigation(),n=t.addListener("focus",function(){n(),t.setOptions({headerRight:function(){return i.React.createElement(ie,{icon:c.getAssetIDByName("ic_report_message"),style:"header",onPress:function(){return st("cloud-sync")}})}})});return i.React.createElement(lt,null,i.React.createElement(j,{title:"Current Data",icon:c.getAssetIDByName("ic_contact_sync"),padding:!0},i.React.createElement(ut,{style:{flexDirection:"row",alignItems:"center",justifyContent:"center",marginVertical:8}},i.React.createElement(ce,{count:f.save?.sync?.plugins?.length??"-",subtitle:"plugins",contents:2}),i.React.createElement(ce,{count:f.save?.sync?.themes?.length??"-",subtitle:"themes",contents:2}))),i.React.createElement(j,{title:"Settings",icon:c.getAssetIDByName("ic_cog_24px")},i.React.createElement(Re,{label:"Auto Save",subLabel:"Automatically save data to cloud",leading:i.React.createElement(p.Icon,{source:c.getAssetIDByName("ic_contact_sync")}),onValueChange:function(){return s.autoSync=!s.autoSync},value:s.autoSync??!1}),i.React.createElement(Re,{label:"Pin To Settings",subLabel:"Pin Cloud Sync to the settings page",leading:i.React.createElement(p.Icon,{source:c.getAssetIDByName("ic_message_pin")}),onValueChange:function(){return s.addToSettings=!s.addToSettings},value:s.addToSettings??!1}),i.React.createElement(p,{label:"Plugin Settings",leading:i.React.createElement(p.Icon,{source:c.getAssetIDByName("debug")}),trailing:i.React.createElement(p.Arrow,null),onPress:function(){return t.push("VendettaCustomPage",{render:rt})}})),i.React.createElement(j,{title:"Authentication",icon:c.getAssetIDByName("lock")},T()?i.React.createElement(i.React.Fragment,null,i.React.createElement(p,{label:"Log out",subLabel:"Logs you out of CloudSync",leading:i.React.createElement(p.Icon,{source:c.getAssetIDByName("ic_logout_24px")}),onPress:function(){s.auth??={},delete s.auth[Ee.getCurrentUser().id],delete f.save,B(),S.showToast("Successfully logged out",c.getAssetIDByName("ic_logout_24px"))}}),i.React.createElement(p,{label:"Delete data",subLabel:"Deletes your CloudSync data",leading:i.React.createElement(p.Icon,{source:c.getAssetIDByName("trash")}),onPress:async function(){await Ye(),s.auth??={},delete s.auth[Ee.getCurrentUser().id],delete f.save,B(),S.showToast("Successfully deleted data",c.getAssetIDByName("trash"))}})):i.React.createElement(p,{label:"Authenticate",leading:i.React.createElement(p.Icon,{source:c.getAssetIDByName("copy")}),trailing:p.Arrow,onPress:Qe})),i.React.createElement(j,{title:"Data Management",icon:c.getAssetIDByName("ic_message_edit"),padding:!0},i.React.createElement(it,null),T()&&i.React.createElement(i.React.Fragment,null,i.React.createElement(xe,null),i.React.createElement(p,{label:"Copy Data as JSON",leading:i.React.createElement(p.Icon,{source:c.getAssetIDByName("copy")}),onPress:function(){i.clipboard.setString(JSON.stringify(f.save??{},void 0,3)),S.showToast("Copied",c.getAssetIDByName("Check"))}}))))}let ve=0;function dt(e){clearTimeout(ve),ve=setTimeout(e,1500)}const{FormRow:W}=g.Forms;function ft(){const e=i.NavigationNative.useNavigation();return React.createElement(g.ErrorBoundary,null,React.createElement(W,{label:"Cloud Sync",leading:React.createElement(W.Icon,{source:c.getAssetIDByName("ic_contact_sync")}),trailing:W.Arrow,onPress:function(){return e.push("VendettaCustomPage",{title:"CloudSync",render:K})}}))}const{FormSection:gt}=g.Forms,ht=d.findByName("getScreens"),yt=d.findByName("UserSettingsOverviewWrapper",!1),pt=d.findByName("SettingsOverviewScreen",!1),D=d.findByProps("SETTING_RELATIONSHIPS","SETTING_RENDERER_CONFIGS"),St=d.findByProps("getSettingTitleConfig"),Rt=i.stylesheet.createThemedStyleSheet({container:{flex:1,backgroundColor:E.semanticColors.BACKGROUND_MOBILE_PRIMARY}});function Et(e,t,n){const r=[],o=A.after("default",yt,function(a,l){o();const y=z.findInReactTree(l.props.children,function(u){return u.type&&u.type.name==="UserSettingsOverview"});r.push(A.after("render",y.type.prototype,function(u,m){let{props:{children:b}}=m;const v=[i.i18n.Messages.BILLING_SETTINGS,i.i18n.Messages.PREMIUM_SETTINGS];b=z.findInReactTree(b,function(w){return w.children[1].type===gt}).children;const R=b.findIndex(function(w){return v.includes(w?.props.label)});e()&&b.splice(R===-1?4:R,0,t())}))},!0);if(r.push(o),ht&&n){const a=`VENDETTA_PLUGIN_${i.lodash.snakeCase(n.key).toUpperCase()}`;r.push(A.after("default",pt,function(b,v){const R=v.props.sections,w=R.findIndex(function(I){return I.title==="Vendetta"});if(R[w]&&e()){const I={...R[w]};I.settings=[...I.settings,a],R[w]=I}})),r.push(A.after("getSettingTitleConfig",St,function(b,v){return{...v,...Object.fromEntries([[a,typeof n.title=="function"?n.title():n.title]])}}));const l=n.page.render,y=i.React.memo(function(b){let{navigation:v}=b;const R=v.addListener("focus",function(){R(),v.setOptions(z.without(n.page,"noErrorBoundary","render"))});return i.React.createElement(i.ReactNative.View,{style:Rt.container},n.page.noErrorBoundary?i.React.createElement(l,null):i.React.createElement(g.ErrorBoundary,null,i.React.createElement(l,null)))}),u=D.SETTING_RELATIONSHIPS;D.SETTING_RELATIONSHIPS={...u,...Object.fromEntries([[a,null]])};const m=D.SETTING_RENDERER_CONFIGS;D.SETTING_RENDERER_CONFIGS={...m,...Object.fromEntries([[a,{type:"route",icon:n.icon,screen:{route:`VendettaPlugin${i.lodash.chain(n.key).camelCase().upperFirst().value()}`,getComponent:function(){return y}}}]])},r.push(function(){D.SETTING_RELATIONSHIPS=u,D.SETTING_RENDERER_CONFIGS=m})}return function(){return r.forEach(function(a){return a()})}}function vt(){let e=[];return e.push(Et(function(){return s.addToSettings},function(){return React.createElement(ft,null)},{key:be.plugin.manifest.name,icon:c.getAssetIDByName("ic_contact_sync"),title:"Cloud Sync",page:{title:"CloudSync",render:K}})),function(){return e.forEach(function(t){return t()})}}const s=me.storage,f={};h.cacheUpd=[];function B(){h.cacheUpd.forEach(function(e){return e()})}async function Q(){try{f.save=await He()}catch{}B()}async function wt(e,t,n,r,o,a,l){return e?new Promise(function(y){U.showConfirmationAlert({title:t,content:n,confirmText:r,cancelText:o,confirmColor:"green",isDismissable:!1,onConfirm:function(){return a?a().then(y):y()},onCancel:function(){return l?l().then(y):y()}})}):await a?.()}function M(e){return e.startsWith(Ce.PROXY_PREFIX)}const we=async function(){if(!s.autoSync)return;const e=await fe();JSON.stringify(f.save)!==JSON.stringify(e)&&dt(async function(){f.save=await de(e),B()})};let V=[];const L=2;var mt={onLoad:function(){T()&&Q(),["installPlugin","startPlugin","stopPlugin","removePlugin"].forEach(function(t){return V.push(A.before(t,C,function(){we()}))}),["installTheme","selectTheme","removeTheme"].forEach(function(t){return V.push(A.before(t,_,function(){we()}))}),V.push(vt());const e=function(t,n){return U.showConfirmationAlert({title:t,content:n,onConfirm:function(){},confirmText:"Dismiss",confirmColor:"brand",secondaryConfirmText:"Don't show again",onConfirmSecondary:function(){return s.databaseMigrate=L}})};s.databaseMigrate!==L&&window.CSmigrationStage!==L&&(window.CSmigrationStage=L,e("Cloud Sync \u2014 DB Migration Stage 2",`CloudSync has officially switched to an SQLite database! (Cloudflare's D1) Make sure to sync your data again in case any was lost while migrating.

- nexx`))},onUnload:function(){return V.forEach(function(e){return e()})},settings:K};return h.cache=f,h.cacheUpdated=B,h.currentMigrationStage=L,h.default=mt,h.fillCache=Q,h.isPluginProxied=M,h.promptOrRun=wt,h.vstorage=s,Object.defineProperty(h,"__esModule",{value:!0}),h})({},vendetta.plugin,vendetta.storage,vendetta.metro,vendetta.patcher,vendetta.plugins,vendetta.themes,vendetta.ui.toasts,vendetta.ui.assets,vendetta.ui.alerts,vendetta.metro.common,vendetta.ui.components,vendetta.ui,vendetta.utils,vendetta,vendetta.constants,vendetta.debug);
