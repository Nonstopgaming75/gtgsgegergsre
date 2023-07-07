(function(g,ne,m,E,v,z,D,R,s,p,e,h,u,U,k){"use strict";const{TextStyleSheet:ae}=p.findByProps("TextStyleSheet"),{View:S,Text:B,Pressable:ie}=u.General,{FormRow:re}=u.Forms;function ce(t){const n=p.findByProps("colors","meta"),a=p.findByStoreName("ThemeStore");return n.meta.resolveSemanticColor(a.theme,t)}function I(t){let{title:n,onTitlePress:a,icon:i,children:l,padding:r}=t;const o=e.stylesheet.createThemedStyleSheet({androidRipple:{color:h.semanticColors.ANDROID_RIPPLE},mainText:{fontFamily:e.constants.Fonts.PRIMARY_SEMIBOLD,fontSize:14,includeFontPadding:!1,letterSpacing:void 0,lineHeight:18,textTransform:"none",color:h.semanticColors.HEADER_SECONDARY},icon:{height:14,tintColor:h.semanticColors.HEADER_SECONDARY},main:{backgroundColor:h.semanticColors.BACKGROUND_TERTIARY,borderRadius:16,overflow:"hidden",flex:1}}),f=a?ie:S;return e.React.createElement(S,{style:{marginHorizontal:16,marginTop:16}},e.React.createElement(f,{android_ripple:o.androidRipple,disabled:!1,accessibilityRole:"button",onPress:a,style:{marginBottom:8,flexDirection:"row",justifyContent:"flex-start",alignItems:"center"}},i&&e.React.createElement(S,{style:{marginRight:4}},e.React.createElement(re.Icon,{style:o.icon,source:i,size:"small"})),e.React.createElement(B,{style:o.mainText},n)),e.React.createElement(S,{style:o.main},r?e.React.createElement(S,{style:{paddingHorizontal:16,paddingVertical:16}},l):l))}function le(t){let{addPadding:n}=t;const a=e.stylesheet.createThemedStyleSheet({line:{width:"100%",height:2,backgroundColor:h.semanticColors.BACKGROUND_ACCENT,borderRadius:2147483647}});return e.React.createElement(S,{style:[{marginTop:16,marginBottom:16},n&&{marginHorizontal:16}]},e.React.createElement(S,{style:a.line}))}var A;(function(t){function n(i){let{children:l,onPress:r}=i;return e.React.createElement(se,{variant:"text-md/bold",onPress:r},l)}t.Bold=n;function a(i){let{children:l,onPress:r}=i;return e.React.createElement(B,{style:{textDecorationLine:"underline"},onPress:r},l)}t.Underline=a})(A||(A={}));function se(t){let{variant:n,lineClamp:a,color:i,align:l,style:r,onPress:o,getChildren:f,children:L,liveUpdate:P}=t;const[N,_e]=e.React.useReducer(function(Me){return~Me},0),Oe=new Date().setMilliseconds(1e3);return P&&setTimeout(function(){return _e()},Oe-Date.now()),e.React.createElement(B,{style:[n?ae[n]:{},i?{color:ce(h.semanticColors[i])}:{},l?{textAlign:l}:{},r??{}],numberOfLines:a,onPress:o},f?.()??L)}function oe(t){let{onPress:n,icon:a,style:i,destructive:l}=t;const r=e.stylesheet.createThemedStyleSheet({headerStyleIcon:{width:24,height:24,marginRight:10,tintColor:h.semanticColors.HEADER_PRIMARY},cardStyleIcon:{width:22,height:22,marginLeft:5,tintColor:h.semanticColors.INTERACTIVE_NORMAL},destructiveIcon:{tintColor:h.semanticColors.TEXT_DANGER}});return e.React.createElement(e.ReactNative.TouchableOpacity,{onPress:n},e.React.createElement(e.ReactNative.Image,{style:[typeof i=="string"?i==="header"?r.headerStyleIcon:r.cardStyleIcon:i,l&&r.destructiveIcon].filter(function(o){return!!o}),source:a}))}const{View:ue,Text:F}=u.General,{TextStyleSheet:j}=p.findByProps("TextStyleSheet"),$=e.stylesheet.createThemedStyleSheet({count:{...j["text-lg/bold"],color:h.semanticColors.TEXT_NORMAL,textAlign:"center"},subtitle:{...j["text-md/medium"],color:h.semanticColors.TEXT_MUTED,textAlign:"center"}});function V(t){let{subtitle:n,count:a,contents:i}=t;return React.createElement(ue,{style:{alignItems:"center",justifyContent:"center",marginHorizontal:16}},React.createElement(F,{style:$.count},a),React.createElement(F,{style:$.subtitle},n))}const C="https://vd-cloudsync.nexpid.workers.dev/",G={clientId:"1120793656878714913",redirectURL:`${C}api/oauth2-response`};async function de(t){const n=await fetch(`${C}api/oauth2-response?code=${encodeURIComponent(t)}&vendetta=true`);if(n.status===200)return await n.text();throw(await n.json())?.message}async function ge(){if(!c.authorization)return;const t=await fetch(`${C}api/get-data`,{headers:{authorization:c.authorization}});if(t.status===200)return await t.json();throw(await t.json())?.message}async function H(t){if(!c.authorization)return;const n=await fetch(`${C}api/sync-data`,{method:"POST",headers:{authorization:c.authorization,"content-type":"application/json"},body:JSON.stringify(t)});if(n.status===200)return await n.json();throw(await n.json())?.message}async function he(){if(!c.authorization)return;const t=await fetch(`${C}api/delete-data`,{method:"DELETE",headers:{authorization:c.authorization}});if(t.status===200)return await t.json();throw(await t.json())?.message}const{pushModal:ye,popModal:fe}=p.findByProps("pushModal","popModal"),Re=p.findByName("OAuth2AuthorizeModal");function pe(){ye({key:"oauth2-authorize",modal:{key:"oauth2-authorize",modal:Re,animation:"slide-up",shouldPersistUnderModals:!1,props:{clientId:G.clientId,redirectUri:G.redirectURL,scopes:["identify"],responseType:"code",permissions:0n,cancelCompletesFlow:!1,callback:async function(t){let{location:n}=t;try{const a=new URL(n).searchParams.get("code"),i=await de(a);c.authorization=i,_(),R.showToast("Successfully authenticated",s.getAssetIDByName("Check"))}catch(a){R.showToast(a?.message??a?.toString()??"An error occured during authentication",s.getAssetIDByName("Small"))}},dismissOAuthModal:function(){return fe("oauth2-authorize")}},closable:!0}})}const Se=window.nativeModuleProxy.BundleUpdaterManager;async function Y(){const t={themes:[],plugins:[]};for(const n of Object.values(v.plugins.plugins)){const a=c.pluginSettings[n.id];if(a?.syncPlugin===!1)continue;const i=a?.syncStorage===!1?{}:await m.createMMKVBackend(n.id).get();t.plugins.push({id:n.id,enabled:n.enabled,options:i})}for(const n of Object.values(v.themes.themes))t.themes.push({id:n.id,enabled:n.selected});return t}async function Ee(t){if(!y.save)return;let n=!1;const a=y.save.sync.plugins.filter(function(r){return!Object.keys(v.plugins.plugins).includes(r.id)});a.length>0&&await b(t,"Install Plugins",["Would you like to install ",React.createElement(A.Bold,null,a.length.toString()),` new plugin${a.length!==1?"s":""}?`],async function(){n=!0;for(const r of a)m.createMMKVBackend(r.id).set(r.options),await z.installPlugin(r.id,r.enabled);R.showToast("Synced plugins",s.getAssetIDByName("Check"))});let i;const l=y.save.sync.themes.filter(function(r){return!Object.keys(v.themes.themes).includes(r.id)});l.length>0&&await b(t,"Install Themes",["Would you like to install ",React.createElement(A.Bold,null,l.length.toString()),` new theme${l.length!==1?"s":""}?`],async function(){n=!0;for(const r of l)r.enabled&&(i=r.id),await D.installTheme(r.id);R.showToast("Synced themes",s.getAssetIDByName("Check"))}),i&&await b(t,"Reload Required","A reload is required to apply the theme. Would you like to reload?",async function(){await D.fetchTheme(i,!0),Se.reload()}),n||R.showToast("Already synced",s.getAssetIDByName("ic_sync_24px"))}const J=p.findByProps("isTablet"),{Text:we,View:Te}=u.General,{FormRow:me}=u.Forms,{TextStyleSheet:K}=p.findByProps("TextStyleSheet"),W=e.stylesheet.createThemedStyleSheet({text:{...K["text-md/medium"],color:h.semanticColors.TEXT_NORMAL},button:{...K["text-md/medium"],color:h.semanticColors.TEXT_NORMAL,borderRadius:8}});function ve(){const[t,n]=e.React.useState({});return c.authorization?e.React.createElement(Te,{style:{flexDirection:J.isTablet?"row":"column",justifyContent:"flex-end"}},[{text:"Sync Data",onPress:async function(a){a(!0);try{y.save=await H(await Y()),w(),R.showToast("Successfully synced data",s.getAssetIDByName("Check"))}catch(i){R.showToast(`Failed to sync data: ${i}`,s.getAssetIDByName("Small"))}a(!1)}},{text:"Load Data",onPress:async function(a){a(!0),await Ee(!0),a(!1)}}].map(function(a,i){const l=i!==0?8:0;return e.React.createElement(u.Button,{text:a.text,color:"green",size:"small",onPress:function(){return!t[i]&&a.onPress(function(r){n({...t,[i]:!!r})})},trailing:e.React.createElement(me.Icon,{source:s.getAssetIDByName("Check")}),loading:t[i],style:{...W.button,...J.isTablet?{marginLeft:l}:{marginTop:l}}})})):e.React.createElement(we,{style:{...W.text,textAlign:"center"}},"Authenticate first to manage your data")}const{FormSwitchRow:X}=u.Forms;function Ce(){const[t,n]=e.React.useState(""),[,a]=e.React.useReducer(function(i){return~i},0);return e.React.useEffect(function(){n("")},[]),m.useProxy(c),e.NavigationNative.useNavigation().setOptions({title:"Plugin Settings",headerRight:function(){return e.React.createElement(oe,{onPress:function(){return U.showConfirmationAlert({title:"Revert Settings",content:"Would you like to revert all plugin settings?",confirmText:"Revert",cancelText:"Cancel",confirmColor:"red",onConfirm:function(){return c.pluginSettings={}}})},icon:s.getAssetIDByName("ic_message_delete"),style:"header"})}}),e.React.createElement(e.ReactNative.FlatList,{ListHeaderComponent:e.React.createElement(u.Search,{style:{marginBottom:10},onChangeText:function(i){return n(i.toLowerCase())}}),style:{paddingHorizontal:10,paddingTop:10},contentContainerStyle:{paddingBottom:20},data:Object.entries(v.plugins.plugins).filter(function(i){return i[1].manifest.name?.toLowerCase().includes(t)}),renderItem:function(i){let{item:[l,r]}=i;const o=c.pluginSettings[l]??{syncPlugin:!0,syncStorage:!0},f=function(){o.syncPlugin===!0&&o.syncStorage===!0?delete c.pluginSettings[l]:c.pluginSettings[l]=o,a()};return e.React.createElement(u.Summary,{label:r.manifest.name,icon:r.manifest.vendetta.icon??":3"},e.React.createElement(X,{label:"Sync Plugin",onValueChange:function(){o.syncPlugin=!o.syncPlugin,f()},value:o.syncPlugin}),e.React.createElement(X,{label:"Sync Plugin Storage",onValueChange:function(){o.syncStorage=!o.syncStorage,f()},value:o.syncStorage}))}})}const{ScrollView:Ie,View:Ae}=u.General,{FormRow:d,FormSwitchRow:q}=u.Forms;function Q(){const[,t]=e.React.useReducer(function(a){return~a},0);m.useProxy(c),g.cacheUpd.push(t),e.React.useEffect(function(){return function(){g.cacheUpd=g.cacheUpd.filter(function(a){return a!==t})}},[]);const n=e.NavigationNative.useNavigation();return n.setOptions({title:"Cloud Sync Settings"}),e.React.createElement(Ie,null,e.React.createElement(I,{title:"Current Data",icon:s.getAssetIDByName("ic_contact_sync"),padding:!0},e.React.createElement(Ae,{style:{flexDirection:"row",alignItems:"center",justifyContent:"center",marginVertical:8}},e.React.createElement(V,{count:y.save?.sync?.plugins?.length??"-",subtitle:"plugins",contents:2}),e.React.createElement(V,{count:y.save?.sync?.themes?.length??"-",subtitle:"themes",contents:2}))),e.React.createElement(I,{title:"Settings",icon:s.getAssetIDByName("ic_cog_24px")},e.React.createElement(q,{label:"Auto Sync",subLabel:"Automatically sync data to cloud",leading:e.React.createElement(d.Icon,{source:s.getAssetIDByName("ic_contact_sync")}),onValueChange:function(){return c.autoSync=!c.autoSync},value:c.autoSync}),e.React.createElement(q,{label:"Add To Settings",subLabel:"Add Cloud Sync to the settings page",leading:e.React.createElement(d.Icon,{source:s.getAssetIDByName("ic_message_pin")}),onValueChange:function(){return c.addToSettings=!c.addToSettings},value:c.addToSettings}),e.React.createElement(d,{label:"Plugin Settings",leading:e.React.createElement(d.Icon,{source:s.getAssetIDByName("debug")}),trailing:e.React.createElement(d.Arrow,null),onPress:function(){return n.push("VendettaCustomPage",{render:Ce})}})),e.React.createElement(I,{title:"Authentication",icon:s.getAssetIDByName("lock")},c.authorization?e.React.createElement(e.React.Fragment,null,e.React.createElement(d,{label:"Log out",subLabel:"Logs you out of CloudSync",leading:e.React.createElement(d.Icon,{source:s.getAssetIDByName("ic_logout_24px")}),onPress:function(){delete c.authorization,delete y.save,w(),R.showToast("Successfully logged out",s.getAssetIDByName("ic_logout_24px"))}}),e.React.createElement(d,{label:"Delete data",subLabel:"Deletes your data and logs you out of CloudSync",leading:e.React.createElement(d.Icon,{source:s.getAssetIDByName("trash")}),onPress:async function(){await he(),delete c.authorization,delete y.save,w(),R.showToast("Successfully deleted data",s.getAssetIDByName("trash"))}})):e.React.createElement(d,{label:"Authenticate",leading:e.React.createElement(d.Icon,{source:s.getAssetIDByName("copy")}),trailing:d.Arrow,onPress:pe})),e.React.createElement(I,{title:"Data Management",icon:s.getAssetIDByName("ic_message_edit"),padding:!0},e.React.createElement(ve,null),c.authorization&&e.React.createElement(e.React.Fragment,null,e.React.createElement(le,null),e.React.createElement(d,{label:"Copy Data as JSON",leading:e.React.createElement(d.Icon,{source:s.getAssetIDByName("copy")}),onPress:function(){e.clipboard.setString(JSON.stringify(y.save??{},void 0,3)),R.showToast("Copied",s.getAssetIDByName("Check"))}}))))}let Z=0;function be(t){clearTimeout(Z),Z=setTimeout(t,1500)}const{FormRow:x}=u.Forms;function Pe(){const t=e.NavigationNative.useNavigation();return React.createElement(u.ErrorBoundary,null,React.createElement(x,{label:"Cloud Sync",leading:React.createElement(x.Icon,{source:s.getAssetIDByName("ic_contact_sync")}),trailing:x.Arrow,onPress:function(){return t.push("VendettaCustomPage",{render:Q})}}))}const{FormSection:Ne}=u.Forms,De=p.findByName("UserSettingsOverviewWrapper",!1);function Be(){let t=[],n=E.after("default",De,function(a,i){n();const l=k.findInReactTree(i.props.children,function(r){return r.type&&r.type.name==="UserSettingsOverview"});t.push(E.after("render",l.type.prototype,function(r,o){let{props:{children:f}}=o;if(!c.addToSettings)return;const L=[e.i18n.Messages.BILLING_SETTINGS,e.i18n.Messages.PREMIUM_SETTINGS];f=k.findInReactTree(f,function(N){return N.children[1].type===Ne}).children;const P=f.findIndex(function(N){return L.includes(N?.props.label)});f.splice(P===-1?4:P,0,React.createElement(Pe,null))}))},!0);return function(){return t.forEach(function(a){return a()})}}const c=ne.storage,y={};g.cacheUpd=[];function w(){g.cacheUpd.forEach(function(t){return t()})}async function _(){try{y.save=await ge()}catch{}w()}c.autoSync??=!1,c.addToSettings??=!0,c.pluginSettings??={};let T=[];const O=async function(){if(!c.autoSync)return;const t=await Y();JSON.stringify(y.save)!==JSON.stringify(t)&&be(async function(){y.save=await H(t),w()})};async function b(t,n,a,i){return t?new Promise(function(l){U.showConfirmationAlert({title:n,content:a,confirmText:"Yes",cancelText:"No",confirmColor:"green",isDismissable:!1,onConfirm:function(){return i?.().then(l)}})}):await i?.()}const ee=function(){T.push(E.after("createMMKVBackend",m,function(t,n){T.push(E.after("set",n,function(){return O()}))}))};let te=!1,M=!1;e.FluxDispatcher.subscribe("I18N_LOAD_SUCCESS",function(){te=!0,M&&ee()});var xe={onLoad:function(){M=!0,c.authorization&&_(),["installPlugin","startPlugin","stopPlugin","removePlugin"].forEach(function(t){return T.push(E.after(t,z,function(){return O()}))}),["installTheme","selectTheme","removeTheme"].forEach(function(t){return T.push(E.after(t,D,function(){return O()}))}),te&&ee(),T.push(Be())},onUnload:function(){M=!1,T.forEach(function(t){return t()})},settings:Q};return g.cache=y,g.cacheUpdated=w,g.default=xe,g.fillCache=_,g.promptOrRun=b,g.vstorage=c,Object.defineProperty(g,"__esModule",{value:!0}),g})({},vendetta.plugin,vendetta.storage,vendetta.patcher,vendetta,vendetta.plugins,vendetta.themes,vendetta.ui.toasts,vendetta.ui.assets,vendetta.metro,vendetta.metro.common,vendetta.ui,vendetta.ui.components,vendetta.ui.alerts,vendetta.utils);