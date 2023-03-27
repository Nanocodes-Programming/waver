(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7059],{42293:function(e,t,o){"use strict";o.d(t,{Z:function(){return v}});var r=o(63366),a=o(87462),n=o(67294),s=o(86010),i=o(94780),l=o(58271),c=o(54502),u=o(98216),p=o(90629),d=o(1588),m=o(27621);function f(e){return(0,m.Z)("MuiAppBar",e)}(0,d.Z)("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent"]);var x=o(85893);const h=["className","color","enableColorOnDark","position"],g=(e,t)=>`${null==e?void 0:e.replace(")","")}, ${t})`,k=(0,l.ZP)(p.Z,{name:"MuiAppBar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[`position${(0,u.Z)(o.position)}`],t[`color${(0,u.Z)(o.color)}`]]}})((({theme:e,ownerState:t})=>{const o="light"===e.palette.mode?e.palette.grey[100]:e.palette.grey[900];return(0,a.Z)({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},"fixed"===t.position&&{position:"fixed",zIndex:(e.vars||e).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},"absolute"===t.position&&{position:"absolute",zIndex:(e.vars||e).zIndex.appBar,top:0,left:"auto",right:0},"sticky"===t.position&&{position:"sticky",zIndex:(e.vars||e).zIndex.appBar,top:0,left:"auto",right:0},"static"===t.position&&{position:"static"},"relative"===t.position&&{position:"relative"},!e.vars&&(0,a.Z)({},"default"===t.color&&{backgroundColor:o,color:e.palette.getContrastText(o)},t.color&&"default"!==t.color&&"inherit"!==t.color&&"transparent"!==t.color&&{backgroundColor:e.palette[t.color].main,color:e.palette[t.color].contrastText},"inherit"===t.color&&{color:"inherit"},"dark"===e.palette.mode&&!t.enableColorOnDark&&{backgroundColor:null,color:null},"transparent"===t.color&&(0,a.Z)({backgroundColor:"transparent",color:"inherit"},"dark"===e.palette.mode&&{backgroundImage:"none"})),e.vars&&(0,a.Z)({},"default"===t.color&&{"--AppBar-background":t.enableColorOnDark?e.vars.palette.AppBar.defaultBg:g(e.vars.palette.AppBar.darkBg,e.vars.palette.AppBar.defaultBg),"--AppBar-color":t.enableColorOnDark?e.vars.palette.text.primary:g(e.vars.palette.AppBar.darkColor,e.vars.palette.text.primary)},t.color&&!t.color.match(/^(default|inherit|transparent)$/)&&{"--AppBar-background":t.enableColorOnDark?e.vars.palette[t.color].main:g(e.vars.palette.AppBar.darkBg,e.vars.palette[t.color].main),"--AppBar-color":t.enableColorOnDark?e.vars.palette[t.color].contrastText:g(e.vars.palette.AppBar.darkColor,e.vars.palette[t.color].contrastText)},{backgroundColor:"var(--AppBar-background)",color:"inherit"===t.color?"inherit":"var(--AppBar-color)"},"transparent"===t.color&&{backgroundImage:"none",backgroundColor:"transparent",color:"inherit"}))}));var v=n.forwardRef((function(e,t){const o=(0,c.Z)({props:e,name:"MuiAppBar"}),{className:n,color:l="primary",enableColorOnDark:p=!1,position:d="fixed"}=o,m=(0,r.Z)(o,h),g=(0,a.Z)({},o,{color:l,position:d,enableColorOnDark:p}),v=(e=>{const{color:t,position:o,classes:r}=e,a={root:["root",`color${(0,u.Z)(t)}`,`position${(0,u.Z)(o)}`]};return(0,i.Z)(a,f,r)})(g);return(0,x.jsx)(k,(0,a.Z)({square:!0,component:"header",ownerState:g,elevation:4,className:(0,s.Z)(v.root,n,"fixed"===d&&"mui-fixed"),ref:t},m))}))},94413:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/confirmEmail",function(){return o(47094)}])},26622:function(e,t,o){"use strict";o.d(t,{t:function(){return k},z:function(){return h}});var r=o(85893),a=o(45821),n=o(4076),s=o(73936),i=o(22532),l=o(11163),c=o(67294),u=o(32916),p=o(92544),d=o(83058),m=o(34249),f=o(87611),x=[(0,a.D9)({name:"email",placeholder:"Enter your email",label:"Email"})];function h(){var e=(0,c.useContext)(d.kn),t=(0,l.useRouter)(),o=(0,c.useState)(!1),h=o[0],g=o[1],k=(0,c.useState)({severity:"success",message:"Login Successful"}),v=k[0],b=k[1],w=(0,m.RX)({fetchData:(0,f.B)(f.G.userConfirmEmail),setOpen:g,setFeedBack:b,context:e,router:t}),y=w.mutate,B=w.isLoading,C=w.isError,S=w.isSuccess,D=(0,a.FW)({formData:x,initialValues:!1,styleOptions:(new p.K).copyWith("formContainerStyle","  card__container__two py-[2rem]  w-full p-[2rem] four:px-[0.5rem]").copyWith("submitButtonStyle","max-w-[150px] text-white").formStyleData,buttonState:{isLoading:B,isSuccess:S},submitButtonData:(0,n.Zi)({title:"send",isLoading:B,isError:C,onPress:function(e){y(e)}}),heading:"Please enter your email to reset your password",headingStyle:"text-center h6"});return(0,r.jsxs)("div",{className:"mb-[3rem]",children:[(0,r.jsxs)("div",{className:"mx-auto max-w-[450px] four:max-w-none four:px-[2rem] threehalf:px-[1rem]",children:[(0,r.jsx)(s.Tw,{title:"Forgot Password"}),(0,r.jsx)(s.nV,{superFormBuilderData:D}),(0,r.jsx)("div",{className:" text-center mt-[2rem]",children:(0,r.jsx)(i.V,{linkBuilderData:(0,n.Dy)({title:"Back to login",style:"h6 text-primaryColors-skyBlue font-bold",href:"/signIn"})})})]}),(0,r.jsx)(u.h,{open:h,setOpen:g,feedback:v,duration:5e3,onClose:function(){g(!1)}})]})}var g=[(0,a.D9)({name:"userForgotPasswordCode",placeholder:"Enter the code sent to your mail",label:"Code"}),(0,a.D9)({name:"newPassword",label:"New Password",placeholder:"Enter new password",isPasswordField:!0,withForgotPasswordLink:!1})];function k(){var e=(0,l.useRouter)(),t=(0,c.useContext)(d.kn),o=(0,c.useState)(!1),i=o[0],x=o[1],h=(0,c.useState)({severity:"success",message:"Password Change Successful"}),k=h[0],v=h[1],b=(0,m.RX)({fetchData:(0,f.B)(f.G.userResetEmail),setOpen:x,setFeedBack:v,context:t,router:e}),w=b.mutate,y=b.isLoading,B=(b.isError,b.isSuccess),C=(0,a.FW)({formData:g,initialValues:!1,buttonState:{isLoading:y,isSuccess:B},submitButtonData:(0,n.Zi)({title:"Reset",onPress:function(e){w(e)}}),styleOptions:(new p.K).copyWith("formContainerStyle","  card__container__two py-[2rem]  w-full p-[2rem] four:px-[0.5rem]").copyWith("submitButtonStyle","max-w-[150px] text-white").formStyleData,heading:"Please enter the code sent to your mail and your password",headingStyle:"text-center h6"});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"mb-[4rem]",children:(0,r.jsxs)("div",{className:"mx-auto max-w-[450px] four:max-w-none four:px-[2rem] threehalf:px-[1rem]",children:[(0,r.jsx)(s.Tw,{title:"Reset Password"}),(0,r.jsx)(s.nV,{superFormBuilderData:C})]})}),(0,r.jsx)(u.h,{open:i,setOpen:x,feedback:k,duration:2e3,onClose:function(){x(!1)}})]})}},47094:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return i}});var r=o(85893),a=o(26622),n=o(84985),s=o(9607);function i(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.Z,{}),(0,r.jsx)(a.z,{}),(0,r.jsx)(n.Z,{})]})}}},function(e){e.O(0,[5445,4617,6556,5937,2013,3874,3609,5006,4090,7133,5805,1257,6570,2993,5369,9774,2888,179],(function(){return t=94413,e(e.s=t);var t}));var t=e.O();_N_E=t}]);