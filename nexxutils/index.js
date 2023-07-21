(function(y,V,p,g,l,i,f,R,Pe,G){"use strict";const{TextStyleSheet:H}=l.findByProps("TextStyleSheet"),{View:v,Text:x,Pressable:j}=f.General,{FormRow:W}=f.Forms;l.find(function(e){return e.render?.name==="ActionSheet"}),l.findByProps("openLazy","hideActionSheet"),l.findByProps("ActionSheetTitleHeader","ActionSheetCloseButton","ActionSheetContentContainer");function X(e){const t=l.findByProps("colors","meta"),n=l.findByStoreName("ThemeStore");return t.meta.resolveSemanticColor(n.theme,e)}function Y(e,t){const n=e.discriminator==="0";return e.avatar?`https://cdn.discordapp.com/avatars/${e.id}/${t&&e.avatar.startsWith("a_")?`${e.avatar}.gif`:`${e.avatar}.png`}`:`https://cdn.discordapp.com/embed/avatars/${n?(parseInt(e.id)>>22)%6:parseInt(e.discriminator)%5}`}function q(e){let{title:t,onPress:n,icon:r}=e;const a=i.stylesheet.createThemedStyleSheet({androidRipple:{color:R.semanticColors.ANDROID_RIPPLE},mainText:{fontFamily:i.constants.Fonts.PRIMARY_SEMIBOLD,fontSize:14,includeFontPadding:!1,letterSpacing:void 0,lineHeight:18,textTransform:"none",color:R.semanticColors.HEADER_SECONDARY},icon:{height:14,tintColor:R.semanticColors.HEADER_SECONDARY}}),s=n?j:v;return i.React.createElement(s,{android_ripple:a.androidRipple,disabled:!1,accessibilityRole:"button",onPress:n,style:{marginBottom:8,flexDirection:"row",justifyContent:"flex-start",alignItems:"center"}},r&&i.React.createElement(v,{style:{marginRight:4}},i.React.createElement(W.Icon,{style:a.icon,source:r,size:"small"})),i.React.createElement(x,{style:a.mainText},t))}function K(e){let{title:t,onTitlePress:n,icon:r,children:a,padding:s}=e;const o=i.stylesheet.createThemedStyleSheet({main:{backgroundColor:R.semanticColors.BACKGROUND_TERTIARY,borderRadius:16,overflow:"hidden",flex:1}});return i.React.createElement(v,{style:{marginHorizontal:16,marginTop:16}},i.React.createElement(q,{title:t,onPress:n,icon:r}),i.React.createElement(v,{style:o.main},s?i.React.createElement(v,{style:{paddingHorizontal:16,paddingVertical:16}},a):a))}var C;(function(e){function t(r){let{children:a,onPress:s}=r;return i.React.createElement(b,{variant:"text-md/bold",onPress:s},a)}e.Bold=t;function n(r){let{children:a,onPress:s}=r;return i.React.createElement(x,{style:{textDecorationLine:"underline"},onPress:s},a)}e.Underline=n})(C||(C={}));function b(e){let{variant:t,lineClamp:n,color:r,align:a,style:s,onPress:o,getChildren:u,children:d,liveUpdate:S}=e;const[Ne,we]=i.React.useReducer(function(me){return~me},0),Ae=new Date().setMilliseconds(1e3);return S&&setTimeout(function(){return we()},Ae-Date.now()),i.React.createElement(x,{style:[t?H[t]:{},r?{color:X(R.semanticColors[r])}:{},a?{textAlign:a}:{},s??{}],numberOfLines:n,onPress:o},u?.()??d)}const{showUserProfile:B}=l.findByProps("showUserProfile"),{fetchProfile:F}=l.findByProps("fetchProfile"),w=l.findByStoreName("UserStore");function J(e){let{userId:t,color:n,loadUsername:r,children:a}=e;const[s,o]=i.React.useState(!1);return i.React.useEffect(function(){return!s&&r&&(w.getUser(t)?o(w.getUser(t).username):F(t).then(function(u){return o(u.user.username)}))},[r]),i.React.createElement(b,{variant:"text-md/bold",color:n??"TEXT_NORMAL",onPress:function(){return w.getUser(t)?B({userId:t}):F(t).then(function(){return B({userId:t})})}},r?`@${s??"..."}`:a)}function Q(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function Z(e,t){return t.get?t.get.call(e):t.value}function ee(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}function U(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function $(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}function L(e,t){var n=$(e,t,"get");return Z(e,n)}function k(e,t,n){Q(e,t),t.set(e,n)}function D(e,t,n){var r=$(e,t,"set");return ee(e,r,n),n}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function M(e,t,n){return t&&_(e.prototype,t),n&&_(e,n),e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const{View:te}=f.General,{FormRow:A,FormSwitchRow:ne,FormDivider:ie}=f.Forms;var h;(function(e){e[e.Unlocks=0]="Unlocks",e[e.Fixes=1]="Fixes"})(h||(h={}));const re=[{category:h.Unlocks,title:"Unlocks",icon:p.getAssetIDByName("unlocked")},{category:h.Fixes,title:"Fixes",icon:p.getAssetIDByName("debug")}];let ae=function(){function e(){U(this,e),c(this,"store",new Array)}return M(e,[{key:"add",value:function(t){this.store.push(t)}},{key:"unpatch",value:function(){this.store.forEach(function(t){return t()}),this.store.length=0}}]),e}();var m=new WeakMap,P=new WeakMap;let N=function(){function e(t){let{id:n,label:r,sublabel:a,category:s,icon:o,settings:u,extra:d,runner:S}=t;U(this,e),c(this,"id",void 0),c(this,"label",void 0),c(this,"sublabel",void 0),c(this,"category",void 0),c(this,"icon",void 0),c(this,"settings",void 0),c(this,"extra",void 0),k(this,m,{writable:!0,value:void 0}),k(this,P,{writable:!0,value:void 0}),c(this,"patches",new ae),this.id=n,this.label=r,this.sublabel=a,this.category=s,this.icon=o,this.settings=u,this.extra=d,D(this,m,S.onStart.bind(this)),D(this,P,S.onStop.bind(this))}return M(e,[{key:"storage",get:function(){return E.modules[this.id]}},{key:"init",value:function(){E.modules[this.id]??={enabled:!1,options:this.settings?Object.fromEntries(Object.entries(this.settings).map(function(t){let[n,r]=t;return[n,r.default]})):{}},this.storage.enabled?this.start():this.stop()}},{key:"exit",value:function(){this.storage.enabled&&this.stop()}},{key:"component",get:function(){var t=this;return function(){const[n,r]=i.React.useReducer(function(o){return~o},0),[a,s]=i.React.useState(!0);return i.React.createElement(i.React.Fragment,null,i.React.createElement(A,{label:t.label,subLabel:t.sublabel,leading:t.icon&&i.React.createElement(A.Icon,{source:t.icon}),trailing:i.React.createElement(A.Arrow,{style:{transform:[{rotate:`${a?180:90}deg`}]}}),onPress:function(){s(!a),i.ReactNative.LayoutAnimation.configureNext(i.ReactNative.LayoutAnimation.Presets.easeInEaseOut)}}),!a&&i.React.createElement(i.React.Fragment,null,i.React.createElement(ie,null),i.React.createElement(i.ReactNative.View,{style:{paddingHorizontal:15}},t.extra?.credits&&i.React.createElement(te,{style:{marginHorizontal:12,marginVertical:12}},i.React.createElement(b,{variant:"text-md/semibold",color:"TEXT_NORMAL"},"Additional credits go to:"," ",t.extra.credits.map(function(o,u,d){return i.React.createElement(i.React.Fragment,null,Number.isNaN(Number(o))?o:i.React.createElement(J,{userId:o,loadUsername:!0}),u!==d.length-1?", ":"")}))),i.React.createElement(ne,{label:"Enabled",onValueChange:function(){t.toggle(),r()},value:t.storage.enabled}))))}.bind(this)}},{key:"toggle",value:function(){this.storage.enabled&&this.stop(),this.storage.enabled=!this.storage.enabled,this.storage.enabled?this.start():this.stop()}},{key:"start",value:function(){L(this,m).call(this)}},{key:"stop",value:function(){L(this,P).call(this),this.patches.unpatch()}}]),e}();const se=l.findByProps("useIsCurrentUserEligibleForRemix"),oe=l.findByProps("uploadLocalFiles");var le=new N({id:"freemix",label:"Freemix",sublabel:"Unlocks the Remix feature without nitro",category:h.Unlocks,icon:p.getAssetIDByName("img_nitro_remixing"),extra:{credits:["257109471589957632"]},runner:{onStart(){var e=this;["useIsCurrentUserEligibleForRemix","useIsRemixEnabledForMedia","useIsRemixEnabled"].forEach(function(t){return e.patches.add(g.after(t,se,function(){return!0}))}),this.patches.add(g.before("uploadLocalFiles",oe,function(t){return t.map(function(n){return n.items=n.items.map(function(r){return r.isRemix=!1,r.item.isRemix=!1,r}),n})}))},onStop(){}}});const T=l.findByStoreName("SpotifyStore"),{sync:ce}=l.findByProps("play","sync");function ue(e){let{background:t,activity:n,user:r}=e;const[a,s]=i.React.useReducer(function(o){return~o},0);return i.React.useEffect(function(){return T.addChangeListener(s),function(){return T.removeChangeListener(s)}},[]),T.getSyncingWith()?.userId===r.id?i.React.createElement(i.React.Fragment,null):i.React.createElement(f.Button,{text:"Listen Along",style:{backgroundColor:t,marginTop:8},onPress:function(){return ce(n,r.id)}})}const de=l.findByName("UserProfileSection",!1);var fe=new N({id:"spotify-listen-along",label:"Add Listen Along",sublabel:"Adds a Listen Along button to Spotify activites",category:h.Fixes,icon:p.getAssetIDByName("ic_music"),extra:{credits:["1034579679526526976"]},runner:{onStart(){var e=this;this.patches.add(g.before("default",de,function(t){let[n]=t;if(n.title?.toLowerCase().includes("spotify")){const r=G.findInReactTree(n.children,function(a){return a?.type?.name==="Actions"});if(r){const{activityButtonColor:a,activity:s,user:o}=r.props;a&&s&&o&&e.patches.add(g.after("type",r,function(u,d){return d.props.children=[d.props.children,React.createElement(ue,{background:a,activity:s,user:o})]},!0))}else console.log("no actions :(")}}))},onStop(){}}});const he=l.findByProps("downloadMediaAsset"),ge=l.findByProps("openLazy","hideActionSheet"),O=function(e){const t=e.split("/"),n=t.findIndex(function(o){return o.endsWith(".tenor.com")});if(n===-1)return;const[r,a,s]=t.slice(n,n+3);if(!(!r||!a||!s))return`https://${r}/${a.slice(0,-2)}AC/${s.split(".")[0]}.gif`};var ye=new N({id:"tenor-gif-fix",label:"Tenor GIF Fix",sublabel:"Downloads Tenor links as GIFs instead of videos",category:h.Fixes,icon:p.getAssetIDByName("ic_gif_24px"),runner:{onStart(){this.patches.add(g.before("downloadMediaAsset",he,function(e){const t=e[0];if(!t||typeof t!="string")return;const n=O(t);n&&(e[0]=n,e[1]=1)})),this.patches.add(g.before("openLazy",ge,function(e){const[t,n,r]=e;if(n!=="MediaShareActionSheet")return;const a=r?.syncer?.sources?.[0];if(!a||typeof a.uri!="string")return;const s=O(a.uri);s&&(a.uri=s,a.sourceURI=s,delete a.videoURI,delete a.isGIFV),r.syncer.sources[0]=a}))},onStop(){}}}),I=[le,ye,fe];const{Pressable:pe}=f.General,Re=l.findByStoreName("UserStore");function ve(){const[e,t]=i.React.useState(0),[n,r]=i.React.useState(!1),a=i.React.useRef(new i.ReactNative.Animated.Value(0)).current;return i.React.useEffect(function(){i.ReactNative.Animated.timing(a,{toValue:e*(Math.PI/180),duration:4e3,easing:i.ReactNative.Easing.out(i.ReactNative.Easing.quad),useNativeDriver:!0}).start()},[e]),i.React.createElement(pe,{onPress:function(){return t(e+360*5)},style:{marginRight:12},onLongPress:function(){r(!n),i.ReactNative.LayoutAnimation.configureNext({duration:700})}},i.React.createElement(i.ReactNative.Animated.Image,{style:{height:85,width:85,borderRadius:18,transform:[{rotate:a}]},source:{uri:n?Y(Re.getCurrentUser(),!0):"https://cdn.discordapp.com/attachments/919655852724604978/1131722678450004118/fish.gif"}}))}const{View:be,ScrollView:Ee}=f.General;function Se(){return React.createElement(Ee,null,React.createElement(be,{style:{marginHorizontal:20,marginTop:20,marginBottom:10,flexDirection:"row",justifyContent:"center",alignItems:"center"}},React.createElement(ve,null),React.createElement(b,{variant:"text-lg/semibold",color:"TEXT_NORMAL"},"NexxUtils v",z)),re.map(function(e){let{category:t,title:n,icon:r}=e;const a=I.filter(function(s){return s.category===t});return React.createElement(K,{title:n,icon:r,padding:a.length===0},a.length>0?a.map(function(s){return React.createElement(s.component,null)}):React.createElement(b,{variant:"text-md/semibold",color:"TEXT_NORMAL",style:{fontStyle:"italic"}},`No plugins in the ${n} category yet!`))}))}const E=V.storage,z="0.1.1";var xe={onLoad:function(){E.modules??={},I.forEach(function(e){return e.init()})},onUnload:function(){return I.forEach(function(e){return e.exit()})},settings:Se};return y.default=xe,y.version=z,y.vstorage=E,Object.defineProperty(y,"__esModule",{value:!0}),y})({},vendetta.plugin,vendetta.ui.assets,vendetta.patcher,vendetta.metro,vendetta.metro.common,vendetta.ui.components,vendetta.ui,vendetta.ui.toasts,vendetta.utils);