(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8051],{42293:function(e,r,t){"use strict";t.d(r,{Z:function(){return y}});var n=t(63366),o=t(87462),a=t(67294),i=t(86010),s=t(94780),l=t(58271),c=t(54502),d=t(98216),u=t(90629),p=t(1588),m=t(27621);function f(e){return(0,m.Z)("MuiAppBar",e)}(0,p.Z)("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent"]);var h=t(85893);const x=["className","color","enableColorOnDark","position"],v=(e,r)=>`${null==e?void 0:e.replace(")","")}, ${r})`,g=(0,l.ZP)(u.Z,{name:"MuiAppBar",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[`position${(0,d.Z)(t.position)}`],r[`color${(0,d.Z)(t.color)}`]]}})((({theme:e,ownerState:r})=>{const t="light"===e.palette.mode?e.palette.grey[100]:e.palette.grey[900];return(0,o.Z)({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},"fixed"===r.position&&{position:"fixed",zIndex:(e.vars||e).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},"absolute"===r.position&&{position:"absolute",zIndex:(e.vars||e).zIndex.appBar,top:0,left:"auto",right:0},"sticky"===r.position&&{position:"sticky",zIndex:(e.vars||e).zIndex.appBar,top:0,left:"auto",right:0},"static"===r.position&&{position:"static"},"relative"===r.position&&{position:"relative"},!e.vars&&(0,o.Z)({},"default"===r.color&&{backgroundColor:t,color:e.palette.getContrastText(t)},r.color&&"default"!==r.color&&"inherit"!==r.color&&"transparent"!==r.color&&{backgroundColor:e.palette[r.color].main,color:e.palette[r.color].contrastText},"inherit"===r.color&&{color:"inherit"},"dark"===e.palette.mode&&!r.enableColorOnDark&&{backgroundColor:null,color:null},"transparent"===r.color&&(0,o.Z)({backgroundColor:"transparent",color:"inherit"},"dark"===e.palette.mode&&{backgroundImage:"none"})),e.vars&&(0,o.Z)({},"default"===r.color&&{"--AppBar-background":r.enableColorOnDark?e.vars.palette.AppBar.defaultBg:v(e.vars.palette.AppBar.darkBg,e.vars.palette.AppBar.defaultBg),"--AppBar-color":r.enableColorOnDark?e.vars.palette.text.primary:v(e.vars.palette.AppBar.darkColor,e.vars.palette.text.primary)},r.color&&!r.color.match(/^(default|inherit|transparent)$/)&&{"--AppBar-background":r.enableColorOnDark?e.vars.palette[r.color].main:v(e.vars.palette.AppBar.darkBg,e.vars.palette[r.color].main),"--AppBar-color":r.enableColorOnDark?e.vars.palette[r.color].contrastText:v(e.vars.palette.AppBar.darkColor,e.vars.palette[r.color].contrastText)},{backgroundColor:"var(--AppBar-background)",color:"inherit"===r.color?"inherit":"var(--AppBar-color)"},"transparent"===r.color&&{backgroundImage:"none",backgroundColor:"transparent",color:"inherit"}))}));var y=a.forwardRef((function(e,r){const t=(0,c.Z)({props:e,name:"MuiAppBar"}),{className:a,color:l="primary",enableColorOnDark:u=!1,position:p="fixed"}=t,m=(0,n.Z)(t,x),v=(0,o.Z)({},t,{color:l,position:p,enableColorOnDark:u}),y=(e=>{const{color:r,position:t,classes:n}=e,o={root:["root",`color${(0,d.Z)(r)}`,`position${(0,d.Z)(t)}`]};return(0,s.Z)(o,f,n)})(v);return(0,h.jsx)(g,(0,o.Z)({square:!0,component:"header",ownerState:v,elevation:4,className:(0,i.Z)(y.root,a,"fixed"===p&&"mui-fixed"),ref:r},m))}))},83829:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/aboutUs",function(){return t(73907)}])},22532:function(e,r,t){"use strict";t.d(r,{V:function(){return i},W:function(){return s}});var n=t(85893),o=t(41664),a=t.n(o);function i(e){var r=e.linkBuilderData;return(0,n.jsx)(a(),{href:r.href,children:(0,n.jsx)("a",{className:" "+r.style,children:r.title})})}function s(e){var r=e.navLinkBuilderData;return(0,n.jsx)(a(),{href:r.href,children:(0,n.jsxs)("a",{className:"".concat(r.style),children:[(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:"w-[30px] h-[30px] flex justify-center items-center h1 text-primaryColors-lightBlue",children:[" ",r.icon]})}),(0,n.jsx)("span",{className:"h6",children:r.title})]})})}},44875:function(e,r,t){"use strict";t.d(r,{PL:function(){return p},RU:function(){return d},bF:function(){return u}});var n=t(26042),o=t(69396),a=t(85893),i=t(25675),s=t.n(i),l=(t(67294),t(4076)),c=t(22532);function d(e){var r=e.imageBuilderData;return(0,a.jsx)("div",{className:"relative ".concat(r.style),children:(0,a.jsx)(s(),{src:r.url,alt:r.alt,layout:"fill",objectFit:r.objectFit,placeholder:"blur"})})}function u(e){var r=e.buttonBuilderData;return(0,a.jsx)("button",{className:"".concat(r.style),onClick:r.onPress,children:r.title})}function p(e){var r=e.richTextBuilderData;return(0,a.jsxs)("span",{className:"h6 flex justify-center items-center mt-[3rem] gap-[0.2rem] five:mt-[2rem] ".concat(r.style),children:[(0,a.jsx)("span",{children:r.textOne}),(0,a.jsx)("span",{className:"text-primaryColors-skyBlue",children:(0,a.jsx)(c.V,{linkBuilderData:(0,l.Dy)((0,o.Z)((0,n.Z)({},r.linkBuilderData),{style:"h6 font-normal p-0 m-0"}))})})]})}},4076:function(e,r,t){"use strict";function n(e){var r=e.url,t=e.alt,n=void 0===t?"image":t,o=e.style,a=void 0===o?"":o,i=e.defaultLayout,s=void 0===i||i,l=e.objectFit;return{url:r,alt:n,style:a,defaultLayout:s,objectFit:void 0===l?"cover":l}}function o(e){var r=e.href,t=void 0===r?"/":r,n=e.title,o=e.style;return{href:t,title:n,style:void 0===o?"/":o}}function a(e){var r=e.title,t=e.onPress,n=void 0===t?function(){return""}:t,o=e.style,a=void 0===o?"":o,i=e.isLoading,s=void 0!==i&&i,l=e.isError;return{title:r,onPress:n,style:a,isLoading:s,isError:void 0!==l&&l}}function i(e){var r=e.href,t=void 0===r?"/":r,n=e.title,o=e.style;return{href:t,title:n,style:void 0===o?"/":o,icon:e.icon}}function s(e){var r=e.textOne,t=e.linkBuilderData,n=e.style;return{textOne:r,linkBuilderData:t,style:void 0===n?"":n}}t.d(r,{Dy:function(){return o},Hl:function(){return i},Zi:function(){return a},hM:function(){return s},sj:function(){return n}})},73907:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return u}});var n=t(85893),o=t(25675),a=t.n(o),i=t(90845);function s(){return(0,n.jsxs)("div",{className:"flex max m-auto max-w-[1200px] nine:flex-col justify-center items-center align-center max min gap-[6rem] ten:gap-[4rem]",children:[(0,n.jsxs)("div",{className:"flex-1 nine:flex flex-col nine:mx-[2rem] p-[2rem] four:px-[1rem] three:mx-[1rem] justify-center items-center card__container__two rounded-[8px] ",children:[(0,n.jsx)("h1",{className:"bigh text-center my-[2rem] mx-[3rem] eight:mx[2rem] four:mx-[1rem]",children:"How it Works"}),(0,n.jsx)("p",{className:"h5 text-center",children:"To get started earning with Open Waves is very simple. You only need to register a new account and make a deposit using a cryptocurrency of your choice. After your deposit is complete, you will instantly begin to earn profits every day . You can also earn additional income by referring your friends and family through our multi-level referral system. We offer 24/7 support through email and are always here to answer your questions or to solve any problem."})]}),(0,n.jsx)("div",{className:"order-first ten:order-last",children:(0,n.jsx)("div",{className:"ten:ml-[2rem]",children:(0,n.jsx)(a(),{src:i.Z.onboarding,width:510,height:565})})})]})}function l(){return(0,n.jsxs)("div",{className:"flex max m-auto max-w-[1200px] nine:flex-col justify-center items-center align-center max min gap-[4rem] ",children:[(0,n.jsxs)("div",{className:"flex-1 nine:flex flex-col nine:mx-[2rem] p-[2rem] four:px-[1rem] three:mx-[1rem] justify-center items-center card__container__two rounded-[8px]",children:[(0,n.jsx)("h1",{className:"bigh text-center my-[2rem] mx-[3rem] eight:mx[2rem] four:mx-[1rem]",children:"Affiliate System"}),(0,n.jsx)("p",{className:"h5 text-center",children:"Our Affiliate Program opens up additional opportunities for all our investors. By inviting your friends, acquaintances, relatives or colleagues to our Affiliate Program, you earn a guaranteed decent reward for your work! Our Affiliate program offers a reward of 5 dollars for every referred user."})]}),(0,n.jsx)("div",{className:"",children:(0,n.jsx)("div",{className:"",children:(0,n.jsx)(a(),{src:i.Z.globeFive,width:500,height:300,alt:"image"})})})]})}var c=t(84985),d=t(9607);function u(){return(0,n.jsxs)("div",{className:"bg-[white] text-primaryColors-textBlue",children:[(0,n.jsx)(d.Z,{}),(0,n.jsx)(p,{}),(0,n.jsxs)("div",{className:"bg-primaryColors-backgroundBlue1",children:[(0,n.jsxs)("div",{className:"pt-[8rem] eight:pt-[4rem]",children:["    ",(0,n.jsx)(s,{}),"   "]}),(0,n.jsx)("div",{className:"mb-[8rem] four:mb-[4rem] mt-[8rem]",children:(0,n.jsx)(l,{})}),(0,n.jsx)(c.Z,{})]})]})}function p(){return(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"bigh font-bold text-primaryColors-skyBlue text-center m-[4rem]",children:" About us "}),(0,n.jsx)("div",{className:"flex justify-center",children:(0,n.jsxs)("div",{className:"flex gap-[40px] mb-[6rem] four:mb-[3rem] text-primaryColors-textBlue ",children:[(0,n.jsx)("div",{className:"max-w-[700px] mx-[2rem] ",children:m.map((function(e,r){return(0,n.jsxs)("p",{className:"text-center mb-[2rem]",children:[" ",e,"  "]},r)}))}),(0,n.jsx)("div",{className:" max-w-[300px] eight:hidden ",children:(0,n.jsx)(a(),{src:i.Z.cryptoanalyst,alt:"image",placeholder:"blur"})})]})})]})}var m=["Openwave limited is a thesis-driven investment firm that invests in cryptocurrencies, tokens, and blockchain companies reshaping million-dollar markets. We manage a hedge fund and a venture fund, investing across both public and private markets.","Since founding the firm in 2002, we\u2019ve developed a reputation for being forward-leaning, independent thinkers. We are known for pioneering token economic models, valuation methodologies, and challenging long-standing assumptions that the crypto ecosystem takes for granted.","Cryptocurrency is the first inherently global asset class, and we\u2019ve built our team around the world. It represents disruptive technology, liquid public markets, and new use cases and business models built on top of programmable blockchains.","Navigating this space requires an approach operating at the intersection of cryptography, game theory, network and behavioral economics, competitive strategy, computer science, early stage investing, credit analysis, and portfolio management.","We are a team of venture investors, traders, credit underwriters, engineers, data scientists, operators, and risk managers focused on stewarding capital and helping to responsibly build this globally-connected industry.","We partner with the teams and projects building this paradigm-shifting technology, as investors and as users, from the earliest stages to and through the liquid market journey.","Today, we manage long duration capital on behalf of storied venture capital funds, family offices, institutions, and high net worth individual and we work with real-world credit originators to provide capital and support as they move along their growth path."]}},function(e){e.O(0,[5445,4617,6556,3874,3609,4090,7133,2993,9774,2888,179],(function(){return r=83829,e(e.s=r);var r}));var r=e.O();_N_E=r}]);