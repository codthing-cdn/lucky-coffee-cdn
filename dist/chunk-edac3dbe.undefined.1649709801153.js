(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-edac3dbe"],{"07a6":function(t,e,a){t.exports=a.p+"static/img/login.8f69c310.png"},"159b":function(t,e,a){var o=a("da84"),s=a("fdbc"),n=a("785a"),r=a("17c2"),i=a("9112"),c=function(t){if(t&&t.forEach!==r)try{i(t,"forEach",r)}catch(e){t.forEach=r}};for(var d in s)s[d]&&c(o[d]&&o[d].prototype);c(n)},"17c2":function(t,e,a){"use strict";var o=a("b727").forEach,s=a("a640"),n=s("forEach");t.exports=n?[].forEach:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}},"3e0f":function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var o=a("b775"),s=o["b"];function n(t){return s({url:"/api/wx/order/wxUnifiedPay",method:"POST",data:t})}},"83f0":function(t,e,a){},a640:function(t,e,a){"use strict";var o=a("d039");t.exports=function(t,e){var a=[][t];return!!a&&o((function(){a.call(null,e||function(){throw 1},1)}))}},b2e7:function(t,e,a){"use strict";a("b775c")},b64b:function(t,e,a){var o=a("23e7"),s=a("7b0b"),n=a("df75"),r=a("d039"),i=r((function(){n(1)}));o({target:"Object",stat:!0,forced:i},{keys:function(t){return n(s(t))}})},b775c:function(t,e,a){},d21b:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"account"},[a("van-nav-bar",{staticClass:"title",attrs:{"left-text":"返回","left-arrow":"",title:"团餐结算",fixed:""},on:{"click-left":t.onClickLeft}}),t.loading?a("Loading",{attrs:{loading:t.loadingPage}}):a("div",{staticClass:"order_form"},[a("div",{staticClass:"address"},[a("div",{staticClass:"shop_address"},[a("div",{staticClass:"tip"},[t._v("点位详细地址")]),a("span",{staticClass:"con"},[t._v(t._s(t.orderList.supplyDetailAddress))])]),a("div",{staticClass:"food_self_mention"},[a("div",{staticClass:"left"},[a("span",{staticClass:"tip"},[t._v("点位名称")]),a("span",{staticClass:"con"},[t._v(" "+t._s(t.orderList.supplyAddressName)+" ")])]),a("div",{staticClass:"right"},[a("span",{staticClass:"tip"},[t._v("点餐时段")]),a("span",{staticClass:"con"},[t._v(t._s("1"==t.orderList.eatTime?"午餐":"晚餐")+"（"+t._s(t.orderList.takeMealTimeRemark)+"）")])])]),a("div",{staticClass:"food_time"},[a("span",{staticClass:"tip"},[t._v("送达时间")]),a("span",{staticClass:"con"},[t._v(" 预计 "+t._s(t.orderList.appointmentDateTime)+" 送达 ")])]),a("div",{staticClass:"food_time"},[a("span",{staticClass:"tip"},[t._v("支付方式")]),a("span",{staticClass:"con"},[a("van-radio-group",{attrs:{direction:"horizontal"},on:{change:t.handlepayWay},model:{value:t.payWayType,callback:function(e){t.payWayType=e},expression:"payWayType"}},[a("van-radio",{attrs:{name:"1"}},[t._v("个人")]),a("van-radio",{attrs:{name:"2",disabled:!t.orderList.ableCompanyCreditPay}},[t._v("公司记账")]),a("van-radio",{attrs:{name:"3",disabled:!t.orderList.ableCompanyBalancePay}},[t._v("公司余额")])],1)],1)])]),a("div",{staticClass:"content"},[a("div",{staticClass:"order"},[a("div",{staticClass:"order_shop"},[a("img",{attrs:{src:t.orderList.storeLogo?""+t.$imgUrl+t.orderList.storeLogo:t.logo}}),a("span",[t._v(t._s(t.orderList.storeName))])]),t._l(t.orderList.foodItemList,(function(e,o){return a("div",{key:o,staticClass:"order_list"},[a("div",{staticClass:"img"},[a("img",{attrs:{src:""+t.$imgUrl+e.foodImg,alt:"",srcset:""}})]),a("span",{class:t.specification[o]?"left_name":"left_name1"},[t._v(t._s(e.foodName))]),a("span",{staticClass:"center",staticStyle:{color:"#000","font-weight":"600","font-size":"15px"}},[t._v(t._s(e.outFoodNum))]),a("span",{staticClass:"center"},[t._v(t._s(e.number)+"份")]),a("span",{staticClass:"right"},[t._v("¥ "+t._s(e.totalFoodPrice))]),t.specification[o]?a("div",{staticClass:"bottom"},[t._v(" "+t._s(t.specification[o])+" ")]):t._e()])})),a("div",{staticClass:"order_pack"},[a("span",{staticClass:"left"},[t._v("包装费")]),a("span",{staticClass:"right"},[t._v("¥ "+t._s(t.orderList.packageFee))])]),a("div",{staticClass:"order_send"},[a("span",{staticClass:"left"},[t._v("配送费")]),a("span",{staticClass:"right"},[t._v("¥ "+t._s(t.orderList.deliveryFee))])]),a("div",{staticClass:"coupon_content"},[a("Coupon",{attrs:{canUseCouponList:t.orderList.canUseCouponList,memberCoupon:t.orderList.memberCoupon},on:{chosenCoupon:t.chosenCoupon}}),t.orderList.memberCoupon?a("div",{staticClass:"memberCoupon"},[t._v(" "+t._s(t.orderList.memberCoupon.couponName)+" ")]):t._e()],1),a("div",{staticClass:"order_company_discount"},[a("span",{staticClass:"left"},[t._v("公司折扣")]),a("span",{staticClass:"right"},[t._v("¥  –"+t._s(t.orderList.companyDiscountPrice))])]),a("div",{staticClass:"order_total"},[a("div",{staticClass:"pay"},[a("span",{staticClass:"info"},[t._v("已优惠")]),a("span",{staticClass:"price1"},[t._v("¥ "+t._s(t.orderList.discountedPrice))]),a("span",{staticClass:"info"},[t._v("实付：")]),a("span",{staticClass:"price"},[t._v("¥ "+t._s(t.orderList.actualPrice))])])])],2)]),a("div",{staticClass:"order_remark"},[a("div",{staticClass:"tip"},[t._v("备注")]),a("span",{staticClass:"con"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.remark,expression:"remark"}],staticClass:"textarea",staticStyle:{resize:"none","font-size":"18px"},attrs:{name:"remark",id:"remark",placeholder:"可填写您的附加要求，我们尽量满足..."},domProps:{value:t.remark},on:{blur:t.handleBlur,input:function(e){e.target.composing||(t.remark=e.target.value)}}})])]),a("div",{staticClass:"footer"},[a("div",{staticClass:"left"},[a("span",[t._v("待支付：¥ "+t._s(t.orderList.actualPrice))])]),a("div",{staticClass:"right",on:{click:t.handlePay}},[a("span",[t._v("立即支付")])])])])],1)},s=[],n=a("1da1"),r=(a("d81d"),a("159b"),a("ac1f"),a("466d"),a("96cf"),a("4ec3")),i=a("3e0f"),c=a("543e"),d=a("e41f"),u=a("f253"),p=a("d399"),l=a("9f14"),m=a("e27c"),f=a("2241"),h=a("f99e"),v=a("07a6"),g=a.n(v),y=a("2b0e");y["a"].use(c["a"]),y["a"].use(d["a"]),y["a"].use(u["a"]),y["a"].use(p["a"]),y["a"].use(l["a"]),y["a"].use(m["a"]);var C={data:function(){return{loading:!0,logo:g.a,cartList:[],storeNo:0,localFoods:[],dataList:{},orderList:{},remark:"",config:"",orderNo:0,time:!1,ispay:0,memberCouponId:-1,coupons:{},specification:[],isClick:!1,columns:[{values:[],defaultIndex:1},{values:[],defaultIndex:1}],loadingPage:!0,payWay:"1",payWayType:"1"}},components:{Coupon:h["a"]},methods:{handlepayWay:function(t){"1"===this.payWayType?this.payWay="1":"2"===this.payWayType?this.payWay="2":this.payWay="3"},onChange:function(t,e){},handleBlur:function(){setTimeout((function(){var t=document.documentElement.scrollTop||document.body.scrollTop||0;window.scrollTo(0,Math.max(t-1,0))}),10)},chosenCoupon:function(t){this.coupons=t,t.id?this.$set(this.dataList,"useCoupon",!0):this.$set(this.dataList,"useCoupon",!1),this.$set(this.dataList,"memberCouponId",t.id),this.settlementOrder()},wxUnifiedPay:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t,e.prev=1,e.next=4,Object(i["a"])({orderNo:a.orderNo});case 4:if(o=e.sent,a.config=o.data.data,"undefined"!==typeof WeixinJSBridge){e.next=10;break}document.addEventListener?document.addEventListener("WeixinJSBridgeReady",a.onBridgeReady(),!1):document.attachEvent&&(document.attachEvent("WeixinJSBridgeReady",a.onBridgeReady()),document.attachEvent("onWeixinJSBridgeReady",a.onBridgeReady())),e.next=12;break;case 10:return a.onBridgeReady(),e.abrupt("return",!1);case 12:a.time=setInterval((function(){"undefined"!==typeof WeixinJSBridge&&0===a.ispay&&(a.ispay=1,a.onBridgeReady(),clearInterval(a.time))}),500),e.next=17;break;case 15:e.prev=15,e.t0=e["catch"](1);case 17:case"end":return e.stop()}}),e,null,[[1,15]])})))()},onBridgeReady:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=t,WeixinJSBridge.invoke("getBrandWCPayRequest",{appId:a.config.appId,timeStamp:a.config.timeStamp,nonceStr:a.config.nonceStr,package:a.config.packageValue,signType:a.config.signType,paySign:a.config.paySign},(function(t){localStorage.removeItem("orderNo"),"get_brand_wcpay_request:ok"===t.err_msg?a.$router.push({path:"/payresult",query:{isOk:1,orderNo:a.orderNo,type:2}}):(a.ispay=0,a.$router.push({path:"/payresult",query:{isOk:0,orderNo:a.orderNo,type:2}}))}));case 2:case"end":return e.stop()}}),e)})))()},onClickLeft:function(){this.$router.push("/groupmeal/groupmealfoods/"+this.storeNo)},handlePay:function(){this.$set(this.dataList,"remark",this.remark),this.orderSubmit()},settlementOrder:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.dataList.addressId=JSON.parse(localStorage.getItem("distributePoints")).addressId,e.next=4,Object(r["R"])(t.dataList);case 4:a=e.sent,t.orderList=a.data.data,"2"===a.data.data.payWay?(t.payWayType="2",t.payWay=a.data.data.payWay):"3"===a.data.data.payWay&&(t.payWayType="3",t.payWay=a.data.data.payWay),t.specification=a.data.data.foodItemList.map((function(t){var e="";if(t.sizeList){var a=t.sizeList;return a.forEach((function(t){e=e+t.tagValue.sizeName+" "})),e}return e})),t.orderList.useCoupon&&t.orderList.memberCoupon&&t.$set(t.dataList,"memberCouponId",t.orderList.memberCoupon.id),t.loading=!1,t.loadingPage=!1,e.next=19;break;case 13:e.prev=13,e.t0=e["catch"](0),console.log(e.t0.data.msg),o=t,o.loadingPage=!1,f["a"].alert({message:e.t0.data.msg}).then((function(){localStorage.removeItem("cart"),o.$router.back()}));case 19:case"end":return e.stop()}}),e,null,[[0,13]])})))()},orderSubmit:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.isClick){e.next=3;break}return Object(p["a"])("正在提交订单中，请不要多次提交，谢谢!"),e.abrupt("return",!1);case 3:if("2"!==t.payWay){e.next=8;break}return f["a"].confirm({title:"温馨提示",message:"您当前支付方式为公司记账支付，是否继续支付？",confirmButtonText:"继续支付",cancelButtonText:"再考虑下"}).then(Object(n["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return p["a"].loading({duration:0,forbidClick:!0,message:"正在支付...",loadingType:"spinner"}),t.dataList.payWay=t.payWay,e.next=4,Object(r["A"])(t.dataList);case 4:a=e.sent,200===a.status?(t.orderNo=a.data.data,localStorage.removeItem("cart"),p["a"].clear(),t.$router.push({path:"/payresult",query:{isOk:1,orderNo:t.orderNo,type:2}})):(p["a"].clear(),f["a"].alert({message:"支付失败！"}).then((function(){})));case 6:case"end":return e.stop()}}),e)})))).catch((function(){})),e.abrupt("return",!1);case 8:if("3"!==t.payWay){e.next=11;break}return f["a"].confirm({title:"温馨提示",message:"您当前支付方式为公司余额支付，是否继续支付？",confirmButtonText:"继续支付",cancelButtonText:"再考虑下"}).then(Object(n["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return p["a"].loading({duration:0,forbidClick:!0,message:"正在支付...",loadingType:"spinner"}),t.dataList.payWay=t.payWay,e.next=4,Object(r["A"])(t.dataList);case 4:a=e.sent,200===a.status?(t.orderNo=a.data.data,localStorage.removeItem("cart"),p["a"].clear(),t.$router.push({path:"/payresult",query:{isOk:1,orderNo:t.orderNo,type:2}})):(p["a"].clear(),f["a"].alert({message:"支付失败！"}).then((function(){})));case 6:case"end":return e.stop()}}),e)})))).catch((function(){})),e.abrupt("return",!1);case 11:a=JSON.parse(localStorage.getItem("orderNo")),setTimeout(Object(n["a"])(regeneratorRuntime.mark((function e(){var o,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!a){e.next=4;break}t.orderNo=a,e.next=11;break;case 4:return t.isClick=!0,t.dataList.payWay="1",e.next=8,Object(r["A"])(t.dataList);case 8:o=e.sent,200===o.status&&(localStorage.removeItem("cart"),t.orderNo=o.data.data,localStorage.setItem("orderNo",JSON.stringify(t.orderNo))),setTimeout((function(){t.isClick=!1}),3e3);case 11:s=window.navigator.userAgent.toLowerCase(),"micromessenger"==s.match(/MicroMessenger/i)?t.wxUnifiedPay():f["a"].alert({message:"订单已提交，请使用手机微信浏览器打开进行支付!"}).then((function(){localStorage.removeItem("orderNo"),t.$router.push("/order")}));case 13:case"end":return e.stop()}}),e)}))),0);case 13:case"end":return e.stop()}}),e)})))()}},created:function(){var t=JSON.parse(localStorage.getItem("orderInfo"));t&&(this.remark=t.remark),localStorage.removeItem("orderInfo"),this.storeNo=this.$route.query.storeNo,this.localFoods=JSON.parse(localStorage.getItem("cart"));var e=JSON.parse(localStorage.getItem("eatTime")),a=JSON.parse(localStorage.getItem("eatDate")),o=[];this.localFoods&&this.localFoods.forEach((function(t,e){var a={};a.foodId=t.foodId,a.number=t.num,t.sizeList&&(a.sizeList=t.sizeList),o.push(a)})),this.dataList.foodItemList=o,this.dataList.storeNo=this.storeNo,this.dataList.eatTime=e,this.dataList.eatDate=a,this.dataList.payWay=this.payWay,this.$set(this.dataList,"useCoupon",!0);var s=this.$route.query.consignAddrId;s&&s>=0&&(this.$set(this.dataList,"consignAddrId",s),this.info(s)),this.settlementOrder(),this.$route.query.code&&this.orderSubmit()}},b=C,L=(a("b2e7"),a("2877")),_=Object(L["a"])(b,o,s,!1,null,"792c0fa8",null);e["default"]=_.exports},d4b0:function(t,e,a){"use strict";a("83f0")},d81d:function(t,e,a){"use strict";var o=a("23e7"),s=a("b727").map,n=a("1dde"),r=n("map");o({target:"Array",proto:!0,forced:!r},{map:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},f99e:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"coupon"},[a("van-coupon-cell",{staticClass:"coupon_cell",attrs:{coupons:t.coupons,"chosen-coupon":t.chosenCoupon,currency:" "},on:{click:function(e){t.showList=!0}}}),a("van-popup",{staticStyle:{height:"90%","padding-top":"4px"},attrs:{round:"",position:"bottom"},model:{value:t.showList,callback:function(e){t.showList=e},expression:"showList"}},[a("van-coupon-list",{attrs:{coupons:t.coupons,"chosen-coupon":t.chosenCoupon,"disabled-coupons":t.disabledCoupons,"show-exchange-bar":t.showexchangebar,editable:t.editable,"close-button-text":t.closeButtonText},on:{change:t.onChange}})],1)],1)},s=[],n=(a("b64b"),a("159b"),a("d81d"),a("2b0e")),r=a("ac3c"),i=a("453b");n["a"].use(r["a"]),n["a"].use(i["a"]);var c={props:{disabledCouponList:{type:Array,default:function(){return[]}},canUseCouponList:{type:Array},memberCoupon:{type:Object},couponName:{type:String},closeButtonText:{type:String,default:"不使用优惠券"}},data:function(){return{editable:!1,showexchangebar:!1,showList:!1,chosenCoupon:-1,coupons:[],disabledCoupons:[],couponList:[]}},watch:{memberCoupon:function(t,e){0==Object.keys(t).length?this.chosenCoupon=-1:-1==this.chosenCoupon&&(this.chosenCoupon=0)}},methods:{onChange:function(t){console.log(this.chosenCoupon,t,"this.chosenCoupon"),console.log("this.coupons",this.coupons,this.couponName),this.showList=!1,this.chosenCoupon=t,this.$emit("chosenCoupon",this.coupons[t]?this.coupons[t]:{})}},mounted:function(){var t=this;setTimeout((function(){t.couponList=t.canUseCouponList,t.couponList&&t.couponList.length>0&&t.couponList.forEach((function(e,a){var o={};if(o.id=e.id,o.condition=e.couponName,o.reason="",o.value=100*e.discountPrice,o.name=e.storeName,o.startAt=Date.parse(new Date(e.validStartDate))/1e3,o.endAt=Date.parse(new Date(e.validEndDate))/1e3,o.valueDesc=e.discountPrice,o.unitDesc="元",o.description=e.rule,3==e.discountType&&(o.condition="全场".concat(e.unifiedPrice,"元任选"),o.valueDesc="",o.unitDesc=""),2==e.discountType&&(o.valueDesc=e.discountProportionShow,o.unitDesc="折"),0==e.status&&(t.coupons.push(o),t.memberCoupon&&t.memberCoupon.id===e.id&&(t.chosenCoupon=a,console.log(t.memberCoupon,t.memberCoupon.id,t.chosenCoupon)),t.couponName))for(a=0;a<t.coupons.length;a++)console.log("00"),t.coupons[a].condition==t.couponName&&(console.log("11"),t.chosenCoupon=a,t.$emit("chosenCoupon",t.coupons[a]?t.coupons[a]:{}))})),t.disabledCoupons=t.disabledCouponList.map((function(t){var e={id:t.id,condition:t.couponName,reason:t.reason,value:100*t.discountPrice,name:t.storeName,valueDesc:t.discountPrice,unitDesc:"元",startAt:Date.parse(new Date(t.validStartDate))/1e3,endAt:Date.parse(new Date(t.validEndDate))/1e3};return 3==t.discountType&&(e.condition="全场".concat(t.unifiedPrice,"元任选")),2==t.discountType&&(e.valueDesc=t.discountProportionShow,e.unitDesc="折"),e})),console.log(t.disabledCoupons,321312)}),1e3)}},d=c,u=(a("d4b0"),a("2877")),p=Object(u["a"])(d,o,s,!1,null,"5a1dd9c6",null);e["a"]=p.exports}}]);