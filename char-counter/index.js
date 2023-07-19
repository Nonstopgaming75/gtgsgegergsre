(function(C,V,c,b,x,t,y,z,G,u,v){"use strict";const H=c.findByStoreName("UserStore");function _(n){return o.commas?n.toString().split("").reverse().map(function(r,a,i){return a%3===0&&i.length>3&&a!==0?`${r},`:r}).reverse().join(""):n.toString()}function F(){return!!(o.supportSLM&&Object.values(z.plugins).find(function(n){return n.manifest.name==="SplitLargeMessages"})?.enabled)}function U(){return H.getCurrentUser()?.premiumType===2?4e3:2e3}const{Animated:A}=t.ReactNative;function B(n){let{duration:r,children:a,style:i,fade:e,trigger:s,customOpacity:l,setDisplay:R,animateOnInit:d}=n;d??=!0;const g=t.React.useRef(!0),p=t.React.useRef(!0),f=t.React.useRef(new A.Value(d&&e==="in"?1:0)).current;return t.React.useEffect(function(){if(!d&&g.current){g.current=!1;return}!d&&p.current&&(f.setValue(e==="in"?0:1),p.current=!1),A.timing(f,{toValue:l??(e==="in"?1:0),duration:r,useNativeDriver:!0}).start()},[f,e,l,s]),t.React.createElement(A.View,{style:[{opacity:f},R&&f._value===0&&{display:"none"},i]},a)}const{TextStyleSheet:Y}=c.findByProps("TextStyleSheet"),{View:h,Text:P,Pressable:j}=y.General,{FormRow:X}=y.Forms;c.find(function(n){return n.render?.name==="ActionSheet"}),c.findByProps("openLazy","hideActionSheet"),c.findByProps("ActionSheetTitleHeader","ActionSheetCloseButton","ActionSheetContentContainer");function $(n){const r=c.findByProps("colors","meta"),a=c.findByStoreName("ThemeStore");return r.meta.resolveSemanticColor(a.theme,n)}function k(n){let{title:r,onPress:a,icon:i}=n;const e=t.stylesheet.createThemedStyleSheet({androidRipple:{color:u.semanticColors.ANDROID_RIPPLE},mainText:{fontFamily:t.constants.Fonts.PRIMARY_SEMIBOLD,fontSize:14,includeFontPadding:!1,letterSpacing:void 0,lineHeight:18,textTransform:"none",color:u.semanticColors.HEADER_SECONDARY},icon:{height:14,tintColor:u.semanticColors.HEADER_SECONDARY}}),s=a?j:h;return t.React.createElement(s,{android_ripple:e.androidRipple,disabled:!1,accessibilityRole:"button",onPress:a,style:{marginBottom:8,flexDirection:"row",justifyContent:"flex-start",alignItems:"center"}},i&&t.React.createElement(h,{style:{marginRight:4}},t.React.createElement(X.Icon,{style:e.icon,source:i,size:"small"})),t.React.createElement(P,{style:e.mainText},r))}function K(n){let{title:r,onTitlePress:a,icon:i,children:e,padding:s}=n;const l=t.stylesheet.createThemedStyleSheet({main:{backgroundColor:u.semanticColors.BACKGROUND_TERTIARY,borderRadius:16,overflow:"hidden",flex:1}});return t.React.createElement(h,{style:{marginHorizontal:16,marginTop:16}},t.React.createElement(k,{title:r,onPress:a,icon:i}),t.React.createElement(h,{style:l.main},s?t.React.createElement(h,{style:{paddingHorizontal:16,paddingVertical:16}},e):e))}var N;(function(n){function r(i){let{children:e,onPress:s}=i;return t.React.createElement(D,{variant:"text-md/bold",onPress:s},e)}n.Bold=r;function a(i){let{children:e,onPress:s}=i;return t.React.createElement(P,{style:{textDecorationLine:"underline"},onPress:s},e)}n.Underline=a})(N||(N={}));function D(n){let{variant:r,lineClamp:a,color:i,align:e,style:s,onPress:l,getChildren:R,children:d,liveUpdate:g}=n;const[p,f]=t.React.useReducer(function(I){return~I},0),E=new Date().setMilliseconds(1e3);return g&&setTimeout(function(){return f()},E-Date.now()),t.React.createElement(P,{style:[r?Y[r]:{},i?{color:$(u.semanticColors[i])}:{},e?{textAlign:e}:{},s??{}],numberOfLines:a,onPress:l},R?.()??d)}const{Text:ae,View:W,Pressable:J}=y.General,{TextStyleSheet:M}=c.findByProps("TextStyleSheet"),S=M["text-xs/semibold"].fontSize,T=t.stylesheet.createThemedStyleSheet({androidRipple:{color:u.semanticColors.ANDROID_RIPPLE,cornerRadius:8},container:{backgroundColor:u.semanticColors.BACKGROUND_TERTIARY,borderRadius:8,marginRight:8,marginTop:-12},text:{...M["text-xs/semibold"],textAlign:"right",paddingHorizontal:8,paddingVertical:8},extraMessagesCircle:{backgroundColor:u.semanticColors.REDESIGN_BUTTON_PRIMARY_BACKGROUND,borderRadius:2147483647,position:"absolute",left:0,top:0,transform:[{translateX:-S},{translateY:-S}],minWidth:S*2,height:S*2,justifyContent:"center",alignItems:"center",zIndex:2},normal:{color:u.semanticColors.TEXT_NORMAL},jinkies:{color:u.semanticColors.TEXT_DANGER}});function q(n){let{inputProps:r}=n;const[a,i]=t.React.useState(!1),e=t.React.useRef(null);r.onChangeText?b.after("onChangeText",r,function(E){let[I]=E;return e.current=I},!0):r.onChangeText=function(E){return e.current=E};const s=e.current?.length??0,l=U(),R=F()?Math.floor(s/l):0,d=s-R*l,g=T.text.fontSize*2+T.text.paddingVertical,p=s>0,f=p?J:W;return t.React.createElement(B,{duration:100,style:{flexDirection:"row-reverse",position:"absolute",right:0,top:-g,zIndex:1},fade:p?"in":"out",customOpacity:a&&p?.3:void 0},t.React.createElement(f,{android_ripple:T.androidRipple,disabled:!1,accessibilityRole:"button",accessibilityState:{disabled:!1,expanded:!1},accessibilityLabel:"Character counter",accessibilityHint:"Tap to toggle character counter translucency",style:T.container,onPress:p?function(){return i(!a)}:void 0},t.React.createElement(B,{fade:R>0&&p?"in":"out",duration:100,style:T.extraMessagesCircle},t.React.createElement(D,{variant:"text-xs/semibold",color:"TEXT_NORMAL",style:{paddingHorizontal:S/2}},R)),t.React.createElement(D,{variant:"text-xs/semibold",color:d<=l?"TEXT_NORMAL":"TEXT_DANGER",style:{paddingHorizontal:8,paddingVertical:8}},_(d),"/",_(l))))}const{ChatInput:Q}=c.findByProps("ChatInput"),{MessagesWrapper:Z}=c.findByProps("MessagesWrapper");let m=[];function ee(){return m.push(b.after("render",Q.prototype,function(n,r){const a=x.findInReactTree(r,function(e){return typeof e?.placeholder=="string"});if(!a?.onChangeText)return;const i=x.findInReactTree(r,function(e){return e?.type?.displayName==="View"&&Array.isArray(e?.props?.children)})?.props?.children;i&&i.unshift(React.createElement(q,{inputProps:a}))})),m.push(b.after("render",Z.prototype,function(n,r){const a=x.findInReactTree(r,function(i){return i?.type?.name==="JumpToPresentButton"});a&&m.push(b.after("type",a,function(i,e){e?.props?.style&&(e.props.style[1].bottom+=32+8)}))})),function(){m.forEach(function(n){return n()}),m=[]}}const{ScrollView:te}=y.General,{FormSwitchRow:w,FormRow:L}=y.Forms;function ne(){return o.commas??=!0,G.useProxy(o),React.createElement(te,null,React.createElement(K,{title:"Settings",icon:v.getAssetIDByName("ic_cog_24px")},React.createElement(w,{label:"Add Thousand Seperators",subLabel:"Adds thousand seperators (1,234,567) to numbers",leading:React.createElement(L.Icon,{source:v.getAssetIDByName("ic_message_edit")}),onValueChange:function(){return o.commas=!o.commas},value:o.commas}),React.createElement(w,{label:"Support SplitLargeMessages",leading:React.createElement(L.Icon,{source:v.getAssetIDByName("ic_message_edit")}),onValueChange:function(){return o.supportSLM=!o.supportSLM},value:o.supportSLM})))}const o=V.storage;let O;var re={onLoad:function(){return O=ee()},onUnload:function(){return O?.()},settings:ne};return C.default=re,C.vstorage=o,Object.defineProperty(C,"__esModule",{value:!0}),C})({},vendetta.plugin,vendetta.metro,vendetta.patcher,vendetta.utils,vendetta.metro.common,vendetta.ui.components,vendetta.plugins,vendetta.storage,vendetta.ui,vendetta.ui.assets);