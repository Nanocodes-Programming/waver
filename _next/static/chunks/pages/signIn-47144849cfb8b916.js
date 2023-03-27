(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9256],{42293:function(e,o,t){"use strict";t.d(o,{Z:function(){return k}});var r=t(63366),a=t(87462),n=t(67294),i=t(86010),s=t(94780),l=t(58271),c=t(54502),p=t(98216),u=t(90629),d=t(1588),f=t(27621);function m(e){return(0,f.Z)("MuiAppBar",e)}(0,d.Z)("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent"]);var g=t(85893);const x=["className","color","enableColorOnDark","position"],h=(e,o)=>`${null==e?void 0:e.replace(")","")}, ${o})`,v=(0,l.ZP)(u.Z,{name:"MuiAppBar",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,o[`position${(0,p.Z)(t.position)}`],o[`color${(0,p.Z)(t.color)}`]]}})((({theme:e,ownerState:o})=>{const t="light"===e.palette.mode?e.palette.grey[100]:e.palette.grey[900];return(0,a.Z)({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},"fixed"===o.position&&{position:"fixed",zIndex:(e.vars||e).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},"absolute"===o.position&&{position:"absolute",zIndex:(e.vars||e).zIndex.appBar,top:0,left:"auto",right:0},"sticky"===o.position&&{position:"sticky",zIndex:(e.vars||e).zIndex.appBar,top:0,left:"auto",right:0},"static"===o.position&&{position:"static"},"relative"===o.position&&{position:"relative"},!e.vars&&(0,a.Z)({},"default"===o.color&&{backgroundColor:t,color:e.palette.getContrastText(t)},o.color&&"default"!==o.color&&"inherit"!==o.color&&"transparent"!==o.color&&{backgroundColor:e.palette[o.color].main,color:e.palette[o.color].contrastText},"inherit"===o.color&&{color:"inherit"},"dark"===e.palette.mode&&!o.enableColorOnDark&&{backgroundColor:null,color:null},"transparent"===o.color&&(0,a.Z)({backgroundColor:"transparent",color:"inherit"},"dark"===e.palette.mode&&{backgroundImage:"none"})),e.vars&&(0,a.Z)({},"default"===o.color&&{"--AppBar-background":o.enableColorOnDark?e.vars.palette.AppBar.defaultBg:h(e.vars.palette.AppBar.darkBg,e.vars.palette.AppBar.defaultBg),"--AppBar-color":o.enableColorOnDark?e.vars.palette.text.primary:h(e.vars.palette.AppBar.darkColor,e.vars.palette.text.primary)},o.color&&!o.color.match(/^(default|inherit|transparent)$/)&&{"--AppBar-background":o.enableColorOnDark?e.vars.palette[o.color].main:h(e.vars.palette.AppBar.darkBg,e.vars.palette[o.color].main),"--AppBar-color":o.enableColorOnDark?e.vars.palette[o.color].contrastText:h(e.vars.palette.AppBar.darkColor,e.vars.palette[o.color].contrastText)},{backgroundColor:"var(--AppBar-background)",color:"inherit"===o.color?"inherit":"var(--AppBar-color)"},"transparent"===o.color&&{backgroundImage:"none",backgroundColor:"transparent",color:"inherit"}))}));var k=n.forwardRef((function(e,o){const t=(0,c.Z)({props:e,name:"MuiAppBar"}),{className:n,color:l="primary",enableColorOnDark:u=!1,position:d="fixed"}=t,f=(0,r.Z)(t,x),h=(0,a.Z)({},t,{color:l,position:d,enableColorOnDark:u}),k=(e=>{const{color:o,position:t,classes:r}=e,a={root:["root",`color${(0,p.Z)(o)}`,`position${(0,p.Z)(t)}`]};return(0,s.Z)(a,m,r)})(h);return(0,g.jsx)(v,(0,a.Z)({square:!0,component:"header",ownerState:h,elevation:4,className:(0,i.Z)(k.root,n,"fixed"===d&&"mui-fixed"),ref:o},f))}))},19500:function(e,o,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signIn",function(){return t(33337)}])},33337:function(e,o,t){"use strict";t.r(o),t.d(o,{default:function(){return k}});var r=t(85893),a=t(84985),n=t(9607),i=t(11163),s=t(67294),l=t(34249),c=t(87611),p=t(45821),u=t(4076),d=t(73936),f=t(44875),m=t(32916),g=t(83058),x=t(92544),h=[(0,p.D9)({name:"email",placeholder:"Enter your email",label:"Email"}),(0,p.D9)({name:"password",label:"Password",placeholder:"Enter your password",isPasswordField:!0,withForgotPasswordLink:!0})];function v(){var e=(0,s.useContext)(g.kn),o=(0,i.useRouter)(),t=(0,s.useState)(!1),a=t[0],n=t[1],v=(0,s.useState)({severity:"success",message:"Login Successful"}),k=v[0],y=v[1],b=(0,l.RX)({fetchData:(0,c.B)(c.G.userLoginIn),setOpen:n,setFeedBack:y,context:e,router:o}),w=b.mutate,B=b.isLoading,C=b.isSuccess,S=(0,p.FW)({formData:h,initialValues:!1,buttonState:{isLoading:B,isSuccess:C},styleOptions:(new x.K).copyWith("formContainerStyle","  card__container__two py-[2rem] grid grid-cols-2 w-full gap-[1rem] seven:grid-cols-1").copyWith("submitButtonStyle","max-w-[150px] text-white").formStyleData,submitButtonData:(0,u.Zi)({title:"login",onPress:function(e){w(e)}}),heading:"Enter your details",validate:!1,headingStyle:"font-bold text-primaryColors-textBlue"});return(0,s.useEffect)((function(){o.isReady&&(o.query.signUpSuccessful&&(n(!0),y({severity:"success",message:"Sign up was Successful, you can now login with your details !"})),o.query.resetPasswordSuccessful&&(n(!0),y({severity:"success",message:"Password change was Successful, you can now login with your details !"})))}),[o.isReady]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"mb-[3rem]",children:(0,r.jsxs)("div",{className:"max-w-[800px] mx-auto four:max-w-none four:px-[1rem] threehalf:px-[0.5rem]",children:[(0,r.jsx)(d.Tw,{title:"Hey there, Sign in"}),(0,r.jsx)(d.nV,{superFormBuilderData:S}),(0,r.jsx)(f.PL,{richTextBuilderData:(0,u.hM)({textOne:"New to OpenWave Ltd?",linkBuilderData:(0,u.Dy)({title:"Create an account",style:"h6 font-normal",href:"/signUp"})})})]})}),(0,r.jsx)(m.h,{open:a,setOpen:n,feedback:k,duration:4e3,onClose:function(){n(!1)}})]})}function k(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.Z,{}),(0,r.jsx)(v,{}),(0,r.jsx)(a.Z,{})]})}}},function(e){e.O(0,[5445,4617,6556,5937,2013,3874,3609,5006,4090,7133,5805,1257,6570,2993,5369,9774,2888,179],(function(){return o=19500,e(e.s=o);var o}));var o=e.O();_N_E=o}]);