(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-79e117ca"],{"0cb2":function(e,t,o){var s=o("7b0b"),r=Math.floor,a="".replace,i=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,n=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,o,c,d,u){var l=o+e.length,p=c.length,h=n;return void 0!==d&&(d=s(d),h=i),a.call(u,h,(function(s,a){var i;switch(a.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,o);case"'":return t.slice(l);case"<":i=d[a.slice(1,-1)];break;default:var n=+a;if(0===n)return s;if(n>p){var u=r(n/10);return 0===u?s:u<=p?void 0===c[u-1]?a.charAt(1):c[u-1]+a.charAt(1):s}i=c[n-1]}return void 0===i?"":i}))}},"159b":function(e,t,o){var s=o("da84"),r=o("fdbc"),a=o("785a"),i=o("17c2"),n=o("9112"),c=function(e){if(e&&e.forEach!==i)try{n(e,"forEach",i)}catch(t){e.forEach=i}};for(var d in r)r[d]&&c(s[d]&&s[d].prototype);c(a)},"17c2":function(e,t,o){"use strict";var s=o("b727").forEach,r=o("a640"),a=r("forEach");e.exports=a?[].forEach:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}},"3d4b":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAApCAMAAACMabAwAAAAYFBMVEUAAACFhYWDg4OFhYWGhoaFhYWHh4eFhYWFhYWFhYWFhYWGhoaFhYWFhYWFhYWFhYWGhoaFhYWFhYWFhYWEhISHh4eFhYWFhYWFhYWGhoaEhISFhYWFhYWEhISFhYWFhYW9FeYWAAAAH3RSTlMA9hLLYuMH1Zkj3KttUTfrfii/hUAajFmzpKC3dy1HVbq6wgAAAaRJREFUOMt1k9t6gkAMhDe7LCignCzWqv3f/y0rhCzKR+cqkUkyE7PuDZehj4LEfri4Hfi2YUXT+i2hFl4oqrEdq2IKpf5s0E+fa29pPZH6tzbHEprrR821gfJo2VeEu9/qukP80jgP8LOj/QYhn6MBvt0evmGYRQjR7zJ8RCYpP3Cy37q26qu2s/Q0j/dCsJoKRWU9A+JdBtniOQJlKIGoPvXjDbxaKuD+fAXPOxRqwk9jCgrlPxbPKu2hUUFwQqVJSZMvjLyh1KhCHBx0sTA6wwi6zgMkxlkVJ4XnxJBloZ3OTpq6Za3iAlFnC31i9Ei+iAtTn6P9Uad1lzcTd5iyWscIctXbEKQzPaepe0jyCG3WBiBL0/ws9+ysVvHqZeqraclwt2MbIxBH3cVc/KuOWN+HP/r1fE3AEw32zvCamtU7hPNa6Zvp2rbIS7VgGwr5ljHCYc0qy1b88nHgvkhLMuPN6tBWrtbd+soGS5IUOb8Z3Xll2TtlgNK7LdqVUkOzsa+FRqkt2KWclGA2dgZRP5T3DzKB1GEfFzHCv+iK8uk+8AdilCdjtHlkBgAAAABJRU5ErkJggg=="},"3e0f":function(e,t,o){"use strict";o.d(t,"a",(function(){return a}));var s=o("b775"),r=s["b"];function a(e){return r({url:"/api/wx/order/wxUnifiedPay",method:"POST",data:e})}},5319:function(e,t,o){"use strict";var s=o("d784"),r=o("d039"),a=o("825a"),i=o("1626"),n=o("5926"),c=o("50c4"),d=o("577e"),u=o("1d80"),l=o("8aa5"),p=o("dc4a"),h=o("0cb2"),m=o("14c3"),v=o("b622"),f=v("replace"),g=Math.max,b=Math.min,C=function(e){return void 0===e?e:String(e)},L=function(){return"$0"==="a".replace(/./,"$0")}(),y=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),k=!r((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));s("replace",(function(e,t,o){var s=y?"$":"$0";return[function(e,o){var s=u(this),r=void 0==e?void 0:p(e,f);return r?r.call(e,s,o):t.call(d(s),e,o)},function(e,r){var u=a(this),p=d(e);if("string"===typeof r&&-1===r.indexOf(s)&&-1===r.indexOf("$<")){var v=o(t,u,p,r);if(v.done)return v.value}var f=i(r);f||(r=d(r));var L=u.global;if(L){var y=u.unicode;u.lastIndex=0}var k=[];while(1){var A=m(u,p);if(null===A)break;if(k.push(A),!L)break;var x=d(A[0]);""===x&&(u.lastIndex=l(p,c(u.lastIndex),y))}for(var w="",S=0,T=0;T<k.length;T++){A=k[T];for(var I=d(A[0]),_=g(b(n(A.index),p.length),0),N=[],P=1;P<A.length;P++)N.push(C(A[P]));var $=A.groups;if(f){var O=[I].concat(N,_,p);void 0!==$&&O.push($);var R=d(r.apply(void 0,O))}else R=h(I,p,_,N,$,r);_>=S&&(w+=p.slice(S,_)+R,S=_+I.length)}return w+p.slice(S)}]}),!k||!L||y)},"548f":function(e,t,o){},"770c":function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"main-div"},[o("van-nav-bar",{attrs:{title:"下单","left-text":"返回","left-arrow":""},on:{"click-left":e.onClickLeft}}),o("Loading",{attrs:{loading:e.loadingPage}}),o("div",{staticClass:"main-center"},[o("div",{staticClass:"main-card top-time"},[e._v("立即自取 预计"+e._s(e.reserveTime)+"可取")]),o("div",{staticClass:"main-card shop-info"},[o("img",{attrs:{src:e.locationHollow}}),o("div",{staticClass:"shop-info-detail"},[o("div",{staticClass:"shop-name"},[e._v(e._s(e.orderList.storeName))]),o("div",{staticClass:"shop-address"},[e._v(e._s(e.orderList.storeAddress))])]),e._m(0)]),o("div",{staticClass:"main-card order-main"},[e._l(e.orderList.foodItemList,(function(t,s){return[o("div",{key:s,staticClass:"order-item"},[o("img",{staticClass:"goods-img",attrs:{src:t.foodImg}}),o("div",{staticClass:"goods-info"},[o("div",{staticClass:"goods-name"},[e._v(e._s(t.foodName))]),o("div",{staticClass:"goods-specifications"},[o("span",{staticClass:"specifications"},[e._v(e._s(e._f("getSizeJson")(t.sizeList)))]),o("span",{staticClass:"num"},[e._v("x"+e._s(t.number))])])]),o("div",{staticClass:"goods-price"},[o("div",{staticClass:"price"},[e._v("￥"+e._s(t.totalFoodPrice))])])])]})),Array.isArray(e.canUseCouponList)||e.orderList.memberCoupon?o("div",{staticClass:"coupon-item"},[o("div",{staticClass:"icon"},[e._v("券")]),o("div",{staticClass:"title"},[e._v("优惠券")]),o("div",{staticClass:"coupon-detail"},[o("CouponComponents",{attrs:{canUseCouponList:e.canUseCouponList,disabledCouponList:e.disabledCouponList,memberCoupon:e.orderList.memberCoupon||{},couponName:e.couponName},on:{chosenCoupon:e.chosenCoupon}}),e.orderList.memberCoupon?3==e.orderList.memberCoupon.discountType?[e._v(" "+e._s("全场"+e.orderList.memberCoupon.unifiedPrice+"元任选")+" ")]:2==e.orderList.memberCoupon.discountType?[e._v(" "+e._s(e.orderList.memberCoupon.discountProportionShow+"折")+" ")]:[e._v(" -￥"+e._s(""+e.orderList.memberCoupon.discountPrice))]:[e._v("未使用或无可用优惠券")]],2)]):e._e(),Array.isArray(e.orderList.canUseVoucherList)||e.orderList.memberVoucher?o("div",{staticClass:"coupon-item"},[o("div",{staticClass:"icon"},[e._v("券")]),o("div",{staticClass:"title"},[e._v("抵用券")]),o("div",{staticClass:"coupon-detail"},[o("CouponComponents",{attrs:{canUseCouponList:e.orderList.canUseVoucherList,disabledCouponList:e.orderList.disabledVoucherList||[],closeButtonText:"不使用抵用券",memberCoupon:e.orderList.memberVoucher||{},couponName:e.couponName},on:{chosenCoupon:e.chosenVoucher}}),e.orderList.memberVoucher?3==e.orderList.memberVoucher.discountType?[e._v(" "+e._s("全场"+e.orderList.memberVoucher.unifiedPrice+"元任选")+" ")]:2==e.orderList.memberVoucher.discountType?[e._v(" "+e._s(e.orderList.memberVoucher.discountProportionShow+"折")+" ")]:[e._v(" -￥"+e._s(""+e.orderList.memberVoucher.discountPrice))]:[e._v("未使用或无可用抵用券")]],2)]):e._e(),o("div",{staticClass:"divide"}),o("div",{staticClass:"total-detail"},[o("div",{staticClass:"discount"},[o("div",{staticClass:"title"},[e._v("共优惠")]),o("div",{staticClass:"price"},[e._v("￥"+e._s(e.orderList.discountedPrice))])]),o("div",{staticClass:"actually-paid"},[o("div",{staticClass:"title"},[e._v("实付")]),o("div",{staticClass:"price"},[e._v("￥"+e._s(e.orderList.actualPrice))])])])],2),o("div",{staticClass:"main-card order-additional"},[o("div",{staticClass:"phone-detail"},[o("div",{staticClass:"title"},[e._v("手机号:")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.reserveTel,expression:"reserveTel"}],staticClass:"phone",domProps:{value:e.reserveTel},on:{input:function(t){t.target.composing||(e.reserveTel=t.target.value)}}})]),o("div",{staticClass:"divide"}),o("div",{staticClass:"remark-detail"},[o("div",{staticClass:"title"},[e._v("备注:")]),o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.remark,expression:"remark"}],staticClass:"text",attrs:{rows:"3"},domProps:{value:e.remark},on:{input:function(t){t.target.composing||(e.remark=t.target.value)}}})])]),o("div",{staticClass:"main-bottom"},[o("div",{staticClass:"order-price"},[o("div",{staticClass:"price"},[e._v("￥"+e._s(e.orderList.actualPrice))]),o("div",{staticClass:"discount"},[e._v("共优惠￥"+e._s(e.orderList.discountedPrice))])]),o("div",{staticClass:"submit-btn",on:{click:e.handlePay}},[e._v("去支付")])])])],1)},r=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"distribution-type"},[o("span",[e._v("自取")])])}],a=o("2909"),i=o("1da1"),n=(o("96cf"),o("a15b"),o("d81d"),o("159b"),o("d3b7"),o("ddb0"),o("ac1f"),o("5319"),o("466d"),o("4ec3")),c=o("3d4b"),d=o.n(c),u=o("3e0f"),l=o("2241"),p=o("d399"),h=o("f99e"),m={data:function(){return{loadingPage:!0,locationHollow:d.a,dataList:{},remark:"",orderList:{},reserveTel:"",addressInfo:{},reserveTime:void 0,canUseCouponList:[],disabledCouponList:[],columns:[{values:[],defaultIndex:1},{values:[],defaultIndex:1}]}},components:{CouponComponents:h["a"]},filters:{getSizeJson:function(e){if(!e)return"默认";var t=JSON.parse(e).map((function(e){return e.tagValue.sizeName})).join(",");return t}},created:function(){this.couponName=this.$route.query.couponName,console.log(this.$route.query.couponName,"优惠券0000");var e=JSON.parse(localStorage.getItem("orderInfo"));this.reserveTel=JSON.parse(localStorage.getItem("reserveTel")),e&&(this.radio=2,this.reserveTel=e.reserveTel,this.reserveTime=e.reserveTime,this.sendTime=e.sendTime,this.remark=e.remark);JSON.parse(localStorage.getItem("sendType"));this.radio="1",this.$set(this.dataList,"isPickBySelf",!0),this.storeNo=this.$route.query.storeNo;var t=JSON.parse(decodeURIComponent(this.$route.query.foodList||"[]"));Array.isArray(t)&&t.length>0?this.localFoods=t:this.localFoods=JSON.parse(localStorage.getItem("cart".concat(this.storeNo)));var o=[];this.localFoods&&this.localFoods.forEach((function(e,t){var s={};s.foodId=e.foodId,s.number=e.num,e.sizeList&&(s.sizeList=e.sizeList),o.push(s)})),this.dataList.foodItemList=o,this.dataList.storeNo=this.storeNo,this.dataList.eatTime="3",this.dataList.useVoucher=!0,this.$set(this.dataList,"useCoupon",!0);var s=this.$route.query.consignAddrId;s&&s>=0&&(this.$set(this.dataList,"consignAddrId",s),this.info(s),this.radio="2",this.dataList.isPickBySelf=!1,this.isHasAddr=!0),this.checkout()},methods:{getRecentSchedule:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(n["o"])();case 2:o=t.sent,""!==e.reserveTime&&e.reserveTime||(e.reserveTime=o.data.data.schedule[0]),""===e.sendTime&&(e.sendTime=o.data.data.schedule[0]),e.columns[0].values=[o.data.data.compose],e.columns[1].values=Object(a["a"])(o.data.data.schedule),e.loading=!1,setTimeout((function(){e.loadingPage=!1}),1e3);case 9:case"end":return t.stop()}}),t)})))()},chosenCoupon:function(e){this.coupons=e,console.log(this.coupons),e.id?this.$set(this.dataList,"useCoupon",!0):this.$set(this.dataList,"useCoupon",!1),this.$set(this.dataList,"memberCouponId",e.id),1==this.orderList.foodItemList.reduce((function(e,t){return e+t.number}),0)&&this.$delete(this.dataList,"memberVoucherId"),this.checkout()},chosenVoucher:function(e){e.id?this.$set(this.dataList,"useVoucher",!0):this.$set(this.dataList,"useVoucher",!1),1==this.orderList.foodItemList.reduce((function(e,t){return e+t.number}),0)&&this.$delete(this.dataList,"memberCouponId"),this.$set(this.dataList,"memberVoucherId",e.id),this.checkout()},handlePay:function(){this.$set(this.dataList,"remark",this.remark),this.orderSubmit()},onClickLeft:function(){localStorage.removeItem("orderInfo"),this.$router.push("foods1/"+this.storeNo)},checkout:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var o,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(n["R"])(e.dataList);case 3:o=t.sent,e.reserveTel||(e.reserveTel=o.data.data.memberTelephone),e.orderList=o.data.data,e.canUseCouponList=o.data.data.canUseCouponList,e.disabledCouponList=o.data.data.disabledCoupons||[],e.specification=o.data.data.foodItemList.map((function(e){var t="";if(e.sizeList){var o=e.sizeList;return o.forEach((function(e){t=t+e.tagValue.sizeName+" "})),t}return t})),e.orderList.useCoupon&&e.orderList.memberCoupon&&e.$set(e.dataList,"memberCouponId",e.orderList.memberCoupon.id),e.orderList.useVoucher&&e.orderList.memberVoucher&&e.$set(e.dataList,"memberVoucherId",e.orderList.memberVoucher.id),!e.addressInfo.id&&e.orderList.consignAddress&&e.info(e.orderList.consignAddress.id),e.getRecentSchedule(),t.next=21;break;case 15:t.prev=15,t.t0=t["catch"](0),console.log(t.t0),s=e,s.loadingPage=!1,l["a"].alert({message:t.t0&&t.t0.data?t.t0.data.msg:"网络错误"}).then((function(){s.$router.replace("foods1/"+s.storeNo)}));case 21:case"end":return t.stop()}}),t,null,[[0,15]])})))()},orderSubmit:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.isClick){t.next=4;break}return Object(p["a"])("正在提交订单中，请不要多次提交，谢谢!"),setTimeout((function(){e.isClick=!1}),3e3),t.abrupt("return",!1);case 4:o=JSON.parse(localStorage.getItem("orderNo")),setTimeout(Object(i["a"])(regeneratorRuntime.mark((function t(){var s,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!o){t.next=4;break}e.orderNo=o,t.next=42;break;case 4:if(!0!==e.dataList.isPickBySelf||!e.reserveTel){t.next=14;break}if(/^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(e.reserveTel)){t.next=10;break}return l["a"].alert({message:"预留手机号格式不正确!"}).then((function(){})),t.abrupt("return",!1);case 10:e.dataList.reserveTelephone=e.reserveTel,e.dataList.orderTime=e.reserveTime;case 12:t.next=34;break;case 14:if(!1!==e.dataList.isPickBySelf||!e.addressInfo||!e.addressInfo.isInDeliverArea){t.next=20;break}e.isHasAddr=!0,e.$set(e.dataList,"consignAddrId",e.addressInfo.id),e.dataList.orderTime=e.sendTime,t.next=34;break;case 20:if(!1!==e.dataList.isPickBySelf||e.addressInfo){t.next=26;break}return e.isHasAddr=!1,l["a"].alert({message:"请填写收货地址!"}).then((function(){})),t.abrupt("return",!1);case 26:if(!1!==e.dataList.isPickBySelf||!e.addressInfo||e.addressInfo.isInDeliverArea){t.next=32;break}return e.isHasAddr=!1,l["a"].alert({message:"请填写收货地址!"}).then((function(){})),t.abrupt("return",!1);case 32:return l["a"].alert({message:"请填写预留手机号!"}).then((function(){})),t.abrupt("return",!1);case 34:return e.isClick=!0,s=JSON.parse(localStorage.getItem("inviterNo"))||null,s&&(e.dataList.referrerMemberNo=s),t.next=39,Object(n["A"])(e.dataList);case 39:r=t.sent,200===r.status&&(localStorage.removeItem("cart".concat(e.storeNo)),e.orderNo=r.data.data,localStorage.setItem("orderNo",JSON.stringify(e.orderNo)),localStorage.setItem("reserveTel",JSON.stringify(e.reserveTel))),setTimeout((function(){e.isClick=!1}),3e3);case 42:a=window.navigator.userAgent.toLowerCase(),"micromessenger"==a.match(/MicroMessenger/i)?e.wxUnifiedPay():l["a"].alert({message:"订单已提交，请使用手机微信浏览器打开进行支付!"}).then((function(){localStorage.removeItem("orderNo"),e.$router.push("/order")}));case 44:case"end":return t.stop()}}),t)}))),0);case 6:case"end":return t.stop()}}),t)})))()},wxUnifiedPay:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var o,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=e,t.prev=1,t.next=4,Object(u["a"])({orderNo:o.orderNo});case 4:if(s=t.sent,o.config=s.data.data,"undefined"!==typeof WeixinJSBridge){t.next=10;break}document.addEventListener?document.addEventListener("WeixinJSBridgeReady",o.onBridgeReady(),!1):document.attachEvent&&(document.attachEvent("WeixinJSBridgeReady",o.onBridgeReady()),document.attachEvent("onWeixinJSBridgeReady",o.onBridgeReady())),t.next=12;break;case 10:return o.onBridgeReady(),t.abrupt("return",!1);case 12:o.time=setInterval((function(){"undefined"!==typeof WeixinJSBridge&&0===o.ispay&&(o.ispay=1,o.onBridgeReady(),clearInterval(o.time))}),300),t.next=17;break;case 15:t.prev=15,t.t0=t["catch"](1);case 17:case"end":return t.stop()}}),t,null,[[1,15]])})))()},onBridgeReady:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:o=e,setTimeout((function(){WeixinJSBridge.invoke("getBrandWCPayRequest",{appId:o.config.appId,timeStamp:o.config.timeStamp,nonceStr:o.config.nonceStr,package:o.config.packageValue,signType:o.config.signType,paySign:o.config.paySign},(function(e){localStorage.removeItem("orderInfo"),localStorage.removeItem("orderNo"),localStorage.removeItem("sendType"),"get_brand_wcpay_request:ok"===e.err_msg?o.$router.push({path:"/payresult",query:{isOk:1,orderNo:o.orderNo,type:1}}):(o.ispay=0,o.$router.push({path:"/payresult",query:{isOk:0,orderNo:o.orderNo,type:1}}))}))}),100);case 2:case"end":return t.stop()}}),t)})))()}}},v=m,f=(o("afa0"),o("2877")),g=Object(f["a"])(v,s,r,!1,null,"61cd4053",null);t["default"]=g.exports},"83f0":function(e,t,o){},a15b:function(e,t,o){"use strict";var s=o("23e7"),r=o("44ad"),a=o("fc6a"),i=o("a640"),n=[].join,c=r!=Object,d=i("join",",");s({target:"Array",proto:!0,forced:c||!d},{join:function(e){return n.call(a(this),void 0===e?",":e)}})},a640:function(e,t,o){"use strict";var s=o("d039");e.exports=function(e,t){var o=[][e];return!!o&&s((function(){o.call(null,t||function(){throw 1},1)}))}},afa0:function(e,t,o){"use strict";o("548f")},b64b:function(e,t,o){var s=o("23e7"),r=o("7b0b"),a=o("df75"),i=o("d039"),n=i((function(){a(1)}));s({target:"Object",stat:!0,forced:n},{keys:function(e){return a(r(e))}})},d4b0:function(e,t,o){"use strict";o("83f0")},d81d:function(e,t,o){"use strict";var s=o("23e7"),r=o("b727").map,a=o("1dde"),i=a("map");s({target:"Array",proto:!0,forced:!i},{map:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},f99e:function(e,t,o){"use strict";var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"coupon"},[o("van-coupon-cell",{staticClass:"coupon_cell",attrs:{coupons:e.coupons,"chosen-coupon":e.chosenCoupon,currency:" "},on:{click:function(t){e.showList=!0}}}),o("van-popup",{staticStyle:{height:"90%","padding-top":"4px"},attrs:{round:"",position:"bottom"},model:{value:e.showList,callback:function(t){e.showList=t},expression:"showList"}},[o("van-coupon-list",{attrs:{coupons:e.coupons,"chosen-coupon":e.chosenCoupon,"disabled-coupons":e.disabledCoupons,"show-exchange-bar":e.showexchangebar,editable:e.editable,"close-button-text":e.closeButtonText},on:{change:e.onChange}})],1)],1)},r=[],a=(o("b64b"),o("159b"),o("d81d"),o("2b0e")),i=o("ac3c"),n=o("453b");a["a"].use(i["a"]),a["a"].use(n["a"]);var c={props:{disabledCouponList:{type:Array,default:function(){return[]}},canUseCouponList:{type:Array},memberCoupon:{type:Object},couponName:{type:String},closeButtonText:{type:String,default:"不使用优惠券"}},data:function(){return{editable:!1,showexchangebar:!1,showList:!1,chosenCoupon:-1,coupons:[],disabledCoupons:[],couponList:[]}},watch:{memberCoupon:function(e,t){0==Object.keys(e).length?this.chosenCoupon=-1:-1==this.chosenCoupon&&(this.chosenCoupon=0)}},methods:{onChange:function(e){console.log(this.chosenCoupon,e,"this.chosenCoupon"),console.log("this.coupons",this.coupons,this.couponName),this.showList=!1,this.chosenCoupon=e,this.$emit("chosenCoupon",this.coupons[e]?this.coupons[e]:{})}},mounted:function(){var e=this;setTimeout((function(){e.couponList=e.canUseCouponList,e.couponList&&e.couponList.length>0&&e.couponList.forEach((function(t,o){var s={};if(s.id=t.id,s.condition=t.couponName,s.reason="",s.value=100*t.discountPrice,s.name=t.storeName,s.startAt=Date.parse(new Date(t.validStartDate))/1e3,s.endAt=Date.parse(new Date(t.validEndDate))/1e3,s.valueDesc=t.discountPrice,s.unitDesc="元",s.description=t.rule,3==t.discountType&&(s.condition="全场".concat(t.unifiedPrice,"元任选"),s.valueDesc="",s.unitDesc=""),2==t.discountType&&(s.valueDesc=t.discountProportionShow,s.unitDesc="折"),0==t.status&&(e.coupons.push(s),e.memberCoupon&&e.memberCoupon.id===t.id&&(e.chosenCoupon=o,console.log(e.memberCoupon,e.memberCoupon.id,e.chosenCoupon)),e.couponName))for(o=0;o<e.coupons.length;o++)console.log("00"),e.coupons[o].condition==e.couponName&&(console.log("11"),e.chosenCoupon=o,e.$emit("chosenCoupon",e.coupons[o]?e.coupons[o]:{}))})),e.disabledCoupons=e.disabledCouponList.map((function(e){var t={id:e.id,condition:e.couponName,reason:e.reason,value:100*e.discountPrice,name:e.storeName,valueDesc:e.discountPrice,unitDesc:"元",startAt:Date.parse(new Date(e.validStartDate))/1e3,endAt:Date.parse(new Date(e.validEndDate))/1e3};return 3==e.discountType&&(t.condition="全场".concat(e.unifiedPrice,"元任选")),2==e.discountType&&(t.valueDesc=e.discountProportionShow,t.unitDesc="折"),t})),console.log(e.disabledCoupons,321312)}),1e3)}},d=c,u=(o("d4b0"),o("2877")),l=Object(u["a"])(d,s,r,!1,null,"5a1dd9c6",null);t["a"]=l.exports}}]);