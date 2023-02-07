(function(){"use strict";var t={6574:function(t,e,r){var s=r(9242),a=r(3396);const o={id:"app"};function n(t,e,r,s,n,c){const l=(0,a.up)("Header"),d=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)("div",o,[(0,a.Wm)(l,{cartlist:s.cartlist},null,8,["cartlist"]),(0,a._)("main",null,[(0,a.Wm)(d)])])}var c=r(7139);const l={class:"py-6"},d={class:"py-3 mx-auto border shadow-md w-[350px] rounded-3xl"},i=(0,a._)("h1",{class:"mb-2 text-center"},[(0,a._)("span",{class:"text-5xl brand-name"},"Medusa"),(0,a.Uk)("手工坊")],-1),u={class:"flex items-center justify-center"};function p(t,e,r,s,o,n){const p=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("header",l,[(0,a._)("div",d,[i,(0,a._)("div",u,[(0,a.Wm)(p,{to:"/Vue-CourseCart",class:"mr-4 hover:text-[#B95756]"},{default:(0,a.w5)((()=>[(0,a.Uk)("About Us")])),_:1}),(0,a.Uk)(" | "),(0,a.Wm)(p,{to:"/Vue-CourseCart/Course",class:"mx-4 hover:text-[#B95756]"},{default:(0,a.w5)((()=>[(0,a.Uk)("Course List")])),_:1}),(0,a.Uk)(" | "),(0,a.Wm)(p,{to:"/Vue-CourseCart/Cart",class:"ml-4 hover:text-[#B95756]"},{default:(0,a.w5)((()=>[(0,a.Uk)("Cart ("+(0,c.zw)(s.amount)+")",1)])),_:1})])])])}var m=r(4870),f=r(65),v={setup(t){const e=(0,f.oR)(),r=(0,m.iH)(0);return(0,a.YP)(e.getters.cartList,(t=>{r.value=t.length})),{amount:r}}},b=r(89);const g=(0,b.Z)(v,[["render",p]]);var h=g,w=r(6050),x=r.n(w),C={components:{Header:h},setup(){let t=(0,m.qj)([]);new(x())({live:!1}).init();const e=e=>{t[0]=e};return{handcartlist:e,cartlist:t}}};const _=(0,b.Z)(C,[["render",n]]);var y=_,L=r(2483);const k={class:"px-5 pt-10"},j={key:0,class:"sm:text-3xl mx-auto font-shadow border-4 border-yellow-500 bg-[#ffffff90] rounded-md groove-border h-8 sm:h-12 w-fit text-sm"},D={class:"grid max-w-6xl grid-cols-1 gap-4 mx-auto sm:grid-cols-2"};function F(t,e,r,s,o,n){const c=(0,a.up)("CourseCard");return(0,a.wg)(),(0,a.iD)("div",k,[s.isLoad?((0,a.wg)(),(0,a.iD)("div",j," 載入中 ")):(0,a.kq)("",!0),(0,a._)("div",D,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.courseList,(t=>((0,a.wg)(),(0,a.j4)(c,{key:t.id,item:t},null,8,["item"])))),128))])])}const A={class:"flex items-center ml-3"},I={class:"w-1/2 aspect-[8/11] animated fadeInLeft"},O=["src","alt"],z={class:"flex flex-col justify-center w-1/2 p-3 pl-5 -ml-3 border h-44 bg-[#FFFFCC80] rounded-xl animated fadeInRight"},E={class:"mb-2 font-bold text-purple-600"},U={class:"mb-2"},H={class:"flex items-end justify-between"};function V(t,e,r,s,o,n){const l=(0,a.up)("font-awesome-icon");return(0,a.wg)(),(0,a.iD)("section",A,[(0,a._)("div",I,[(0,a._)("img",{class:"object-cover w-full h-full rounded-xl",src:s.props.item.picture,alt:s.props.item.title},null,8,O)]),(0,a._)("div",z,[(0,a._)("div",null,[(0,a._)("h2",E,(0,c.zw)(s.props.item.title),1),(0,a._)("p",U,"$"+(0,c.zw)(s.props.item.price),1)]),(0,a._)("div",H,[(0,a._)("p",{class:(0,c.C_)({"text-red-500":"尚未開始"!==s.props.item.status})},(0,c.zw)(s.props.item.status),3),"尚未開始"!==s.props.item.status?((0,a.wg)(),(0,a.iD)("button",{key:0,class:"px-3 py-2 text-gray-500 bg-purple-200 rounded-full hover:bg-purple-300",onClick:e[0]||(e[0]=t=>s.addToCart(r.item))},[(0,a.Wm)(l,{icon:"fa-solid fa-cart-arrow-down"})])):(0,a.kq)("",!0)])])])}var W=r(6666),Z={props:["item"],setup(t){const e=(0,f.oR)(),r=t=>{(0,W.bM)({title:"成功加入購物車！！",duration:800}),e.dispatch("handaddtoCart",t)};return{props:t,addToCart:r}}};const q=(0,b.Z)(Z,[["render",V]]);var B=q,M={components:{CourseCard:B},setup(){const t=(0,f.oR)(),e=(0,a.Fl)((()=>t.getters.courseList)),r=(0,a.Fl)((()=>t.getters.isLoadDone)),s=()=>{t.dispatch("handgetCourse")};return(0,a.bv)((()=>{s()})),{courseList:e,isLoad:r}}};const P=(0,b.Z)(M,[["render",F]]);var R=P;const S={class:"px-3 cart"},T={key:0,class:"w-full mx-auto sm:w-2/3"},Y={class:"flex justify-between mb-2"},N={class:"py-3 text-xl font-bold text-purple-700"},K=(0,a._)("div",{class:"flex justify-end"},[(0,a._)("button",{class:"px-4 py-2 text-white bg-green-400 rounded-md"}," 結帳 ")],-1),$={key:1,class:"sm:text-3xl mx-auto font-shadow border-4 border-yellow-500 bg-[#ffffff90] rounded-md groove-border h-8 sm:h-12 w-fit text-sm",ref:"notCart"};function G(t,e,r,s,o,n){const l=(0,a.up)("CartCard");return(0,a.wg)(),(0,a.iD)("div",S,[0!==s.cartList.length?((0,a.wg)(),(0,a.iD)("div",T,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.cartList,(t=>((0,a.wg)(),(0,a.j4)(l,{key:t.id,item:t},null,8,["item"])))),128)),(0,a._)("div",Y,[(0,a._)("button",{class:"p-2 text-xs text-white bg-red-200 rounded-xl hover:text-red-500",onClick:e[0]||(e[0]=(...t)=>s.deletedChecked&&s.deletedChecked(...t))}," 刪除已選 "),(0,a._)("p",N,"總金額：＄"+(0,c.zw)(s.sum),1)]),K])):(0,a.kq)("",!0),0==s.cartList.length?((0,a.wg)(),(0,a.iD)("div",$,null,512)):(0,a.kq)("",!0)])}const J={class:"flex pr-3 mb-3 items-center text-sm border-4 border-yellow-500 bg-[#ffffff90] rounded-md groove-border sm:text-lg"},Q=["value"],X=["src","alt"],tt={class:"flex-1 py-1 ml-4 font-bold text-purple-800"},et={class:"mb-2"},rt={class:"flex items-end justify-between"},st={class:"mb-2"},at=(0,a._)("div",null,null,-1),ot={class:"flex items-center remove"};function nt(t,e,r,o,n,l){const d=(0,a.up)("font-awesome-icon");return(0,a.wg)(),(0,a.iD)("section",J,[(0,a.wy)((0,a._)("input",{type:"checkbox",class:"mx-3 scale-150","onUpdate:modelValue":e[0]||(e[0]=t=>o.deletedList=t),value:o.props.item.id},null,8,Q),[[s.e8,o.deletedList]]),(0,a._)("img",{class:"object-cover w-32 aspect-square",src:o.props.item.picture,alt:o.props.item.title},null,8,X),(0,a._)("div",tt,[(0,a._)("p",et,(0,c.zw)(o.props.item.title),1),(0,a._)("div",rt,[(0,a._)("div",null,[(0,a._)("p",st,"$"+(0,c.zw)(o.props.item.price),1),(0,a._)("p",null,"數量："+(0,c.zw)(o.props.item.amount),1)]),at])]),(0,a._)("div",ot,[(0,a._)("button",{class:"p-2 rounded-md hover:bg-red-400 sm:p-3",onClick:e[1]||(e[1]=t=>o.deleted(o.props.item))},[(0,a.Wm)(d,{icon:"fa-solid fa-trash-can"})])])])}var ct={props:["item"],setup(t){const e=(0,f.oR)(),r=(0,a.Fl)((()=>e.getters.cartList)),s=t=>{e.dispatch("handdelted",t)},o=(0,a.Fl)({get(){return e.getters.deletedList},set(t){e.dispatch("handaddtodeletedArr",t)}});return{cartList:r,deleted:s,deletedList:o,props:t}}};const lt=(0,b.Z)(ct,[["render",nt]]);var dt=lt,it={components:{CartCard:dt},setup(){const t=(0,f.oR)(),e=(0,m.iH)(null);let r=null;const s="目前還沒有商品在購物車喔！".split(""),o=(0,a.Fl)((()=>t.getters.cartList)),n=(0,a.Fl)((()=>t.getters.cartSum)),c=()=>{t.dispatch("handdeltedChecked")},l=()=>{let t=0;if(0===o.value.length){function a(){t<s.length?e.value.innerHTML+=s[t++]:clearInterval(r)}r=setInterval(a,200)}};return(0,a.YP)(o.value,(()=>{l()})),(0,a.bv)((()=>{l()})),{cartList:o,sum:n,deletedChecked:c,notCart:e}}};const ut=(0,b.Z)(it,[["render",G]]);var pt=ut,mt=r.p+"img/aboutus1.ef18602a.png",ft=r.p+"img/aboutus4.9eb3e1c6.png",vt=r.p+"img/aboutus3.9edb6f21.png",bt=r.p+"img/aboutus2.eab854c0.png";const gt=t=>((0,a.dD)("data-v-c658a9c4"),t=t(),(0,a.Cn)(),t),ht={class:"flex w-11/12 sm:w-2/3 mx-auto aspect-[4/2] pt-8 mb-10"},wt={class:"w-1/2 h-full"},xt=gt((()=>(0,a._)("img",{src:mt,alt:"",class:"object-cover w-full animated zoomIn h-3/5"},null,-1))),Ct={class:"flex w-full h-2/5"},_t=gt((()=>(0,a._)("img",{src:ft,alt:"",class:"object-cover w-1/2 h-full"},null,-1))),yt={class:"brand-slogan bg-[#544E70] text-[#FEC37D] animated rubberBand"},Lt=gt((()=>(0,a._)("p",null,"Nature",-1))),kt=gt((()=>(0,a._)("p",null,"Funny",-1))),jt=(0,a.uE)('<div class="w-1/2 h-full" data-v-c658a9c4><div class="flex w-full h-2/5" data-v-c658a9c4><div class="brand-slogan bg-[#FEC37D] text-[#544E70] animated rubberBand" data-v-c658a9c4><p data-v-c658a9c4>Family</p><p data-v-c658a9c4>Friends</p><p data-v-c658a9c4>Couple</p></div><img src="'+vt+'" alt="" class="object-cover w-1/2 h-full" data-v-c658a9c4></div><img src="'+bt+'" alt="" class="object-cover w-full h-3/5 animated zoomIn" data-v-c658a9c4></div>',1),Dt=(0,a.uE)('<div class="w-3/4 text-sm lg:text-base lg:w-1/2 mx-auto bg-[#00000090] py-8 groove-border border-4 px-6 border-yellow-500 text-white" data-v-c658a9c4><p class="mb-3" data-v-c658a9c4>↠ AboutUs： <br data-v-c658a9c4> We are the home-made shop. In here, we provide several course, you can choose the one that you interesting</p><p class="mb-3" data-v-c658a9c4>↠ Business Hours：<br data-v-c658a9c4> 10:00 ~ 20:00</p><p class="mb-3" data-v-c658a9c4>↠ Address：<br data-v-c658a9c4> 31 23rd Avenue NE, Niagara,nd, 58266 </p><p class="" data-v-c658a9c4>↠ Contact：<br data-v-c658a9c4> +1-8446658794</p></div>',1);function Ft(t,e,r,s,o,n){const c=(0,a.up)("P");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",ht,[(0,a._)("div",wt,[xt,(0,a._)("div",Ct,[_t,(0,a._)("div",yt,[Lt,(0,a.Wm)(c,null,{default:(0,a.w5)((()=>[(0,a.Uk)("Innocuous")])),_:1}),kt])])]),jt]),Dt],64)}var At={setup(){}};const It=(0,b.Z)(At,[["render",Ft],["__scopeId","data-v-c658a9c4"]]);var Ot=It;const zt=(0,L.PO)(),Et=[{path:"/Vue-CourseCart",name:"Introduce",component:Ot},{path:"/Vue-CourseCart/Course",name:"Course",component:R},{path:"/Vue-CourseCart/Cart",name:"Cart",component:pt}],Ut=(0,L.p7)({history:zt,routes:Et});var Ht=Ut,Vt=(r(7658),r(6943)),Wt=(0,f.MT)({state:{course:[],cartList:[],sum:0,deletedArr:[],isLoad:!0},actions:{handgetCourse({commit:t}){Vt.Z.get("https://run.mocky.io/v3/d7a29aba-9aac-4a97-b1b7-7b3d87ae8b7e").then((e=>{t("getCourse",e.data)}))},handaddtoCart({commit:t},e){t("addtoCart",e),t("getSum")},handdelted({commit:t},e){t("deleted",e),t("getSum")},handdeltedChecked({commit:t}){t("deletedChecked"),t("getSum")},handaddtodeletedArr({commit:t},e){t("addtodeletedArr",e)}},mutations:{getCourse(t,e){t.isLoad=!1,t.course=e},addtoCart(t,e){let r=t.cartList.findIndex((t=>t.title===e.title));-1!==r?t.cartList[r].amount++:t.cartList.push({...e,amount:1}),console.log(t.cartList)},getSum(t){t.sum=0,t.cartList.forEach((e=>{t.sum+=e.amount*e.price}))},deleted(t,e){const r=t.cartList.findIndex((t=>t.name===e.name));r>=0&&t.cartList.splice(r,1)},deletedChecked(t){t.deletedArr.forEach((e=>{const r=t.cartList.findIndex((t=>t.id===e));r>=0&&t.cartList.splice(r,1)})),t.deletedArr.length=0},addtodeletedArr(t,e){console.log(e),t.deletedArr=e}},getters:{courseList(t){return t.course},cartList(t){return t.cartList},cartSum(t){return t.sum},deletedList(t){return t.deletedArr},isLoadDone(t){return t.isLoad}}}),Zt=r(3494),qt=r(7749),Bt=r(8539),Mt=r(585);r(4415);Zt.vI.add(Bt.bMA,Bt.Vui),(0,s.ri)(y).use(Mt.Z).use(Wt).use(Ht).component("font-awesome-icon",qt.GN).mount("#app")}},e={};function r(s){var a=e[s];if(void 0!==a)return a.exports;var o=e[s]={exports:{}};return t[s].call(o.exports,o,o.exports,r),o.exports}r.m=t,function(){var t=[];r.O=function(e,s,a,o){if(!s){var n=1/0;for(i=0;i<t.length;i++){s=t[i][0],a=t[i][1],o=t[i][2];for(var c=!0,l=0;l<s.length;l++)(!1&o||n>=o)&&Object.keys(r.O).every((function(t){return r.O[t](s[l])}))?s.splice(l--,1):(c=!1,o<n&&(n=o));if(c){t.splice(i--,1);var d=a();void 0!==d&&(e=d)}}return e}o=o||0;for(var i=t.length;i>0&&t[i-1][2]>o;i--)t[i]=t[i-1];t[i]=[s,a,o]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var s in e)r.o(e,s)&&!r.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){r.p="/Vue-CourseCart/"}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,s){var a,o,n=s[0],c=s[1],l=s[2],d=0;if(n.some((function(e){return 0!==t[e]}))){for(a in c)r.o(c,a)&&(r.m[a]=c[a]);if(l)var i=l(r)}for(e&&e(s);d<n.length;d++)o=n[d],r.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return r.O(i)},s=self["webpackChunkcoursecart"]=self["webpackChunkcoursecart"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=r.O(void 0,[998],(function(){return r(6574)}));s=r.O(s)})();
//# sourceMappingURL=app.98a892f1.js.map