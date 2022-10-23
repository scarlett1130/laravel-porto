(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{176:function(t,e,r){"use strict";function n(t){return t instanceof Date||"[object Date]"===Object.prototype.toString.call(t)}function i(t){return n(t)?new Date(t.getTime()):null==t?new Date(NaN):new Date(t)}function o(t){return n(t)&&!isNaN(t.getTime())}function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(!(e>=0&&e<=6))throw new RangeError("weekStartsOn must be between 0 and 6");var r=i(t),n=r.getDay(),o=(n+7-e)%7;return r.setDate(r.getDate()-o),r.setHours(0,0,0,0),r}function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.firstDayOfWeek,n=void 0===r?0:r,o=e.firstWeekContainsDate,a=void 0===o?1:o;if(!(a>=1&&a<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7");for(var u=i(t),c=u.getFullYear(),d=new Date(0),l=c+1;l>=c-1&&(d.setFullYear(l,0,a),d.setHours(0,0,0,0),d=s(d,n),!(u.getTime()>=d.getTime()));l--);return d}r.d(e,"a",(function(){return v}));var u={months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],weekdaysMin:["Su","Mo","Tu","We","Th","Fr","Sa"],firstDayOfWeek:0,firstWeekContainsDate:1},c=/\[([^\]]+)]|YYYY|YY?|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|m{1,2}|s{1,2}|Z{1,2}|S{1,3}|w{1,2}|x|X|a|A/g;function d(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,r="".concat(Math.abs(t)),n=t<0?"-":"";r.length<e;)r="0".concat(r);return n+r}function l(t){return 15*Math.round(t.getTimezoneOffset()/15)}function f(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=t>0?"-":"+",n=Math.abs(t),i=Math.floor(n/60),o=n%60;return r+d(i,2)+e+d(o,2)}var h=function(t,e,r){var n=t<12?"AM":"PM";return r?n.toLocaleLowerCase():n},_={Y:function(t){var e=t.getFullYear();return e<=9999?"".concat(e):"+".concat(e)},YY:function(t){return d(t.getFullYear(),4).substr(2)},YYYY:function(t){return d(t.getFullYear(),4)},M:function(t){return t.getMonth()+1},MM:function(t){return d(t.getMonth()+1,2)},MMM:function(t,e){return e.monthsShort[t.getMonth()]},MMMM:function(t,e){return e.months[t.getMonth()]},D:function(t){return t.getDate()},DD:function(t){return d(t.getDate(),2)},H:function(t){return t.getHours()},HH:function(t){return d(t.getHours(),2)},h:function(t){var e=t.getHours();return 0===e?12:e>12?e%12:e},hh:function(){var t=_.h.apply(_,arguments);return d(t,2)},m:function(t){return t.getMinutes()},mm:function(t){return d(t.getMinutes(),2)},s:function(t){return t.getSeconds()},ss:function(t){return d(t.getSeconds(),2)},S:function(t){return Math.floor(t.getMilliseconds()/100)},SS:function(t){return d(Math.floor(t.getMilliseconds()/10),2)},SSS:function(t){return d(t.getMilliseconds(),3)},d:function(t){return t.getDay()},dd:function(t,e){return e.weekdaysMin[t.getDay()]},ddd:function(t,e){return e.weekdaysShort[t.getDay()]},dddd:function(t,e){return e.weekdays[t.getDay()]},A:function(t,e){return(e.meridiem||h)(t.getHours(),t.getMinutes(),!1)},a:function(t,e){return(e.meridiem||h)(t.getHours(),t.getMinutes(),!0)},Z:function(t){return f(l(t),":")},ZZ:function(t){return f(l(t))},X:function(t){return Math.floor(t.getTime()/1e3)},x:function(t){return t.getTime()},w:function(t,e){return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.firstDayOfWeek,n=void 0===r?0:r,o=e.firstWeekContainsDate,u=void 0===o?1:o,c=i(t),d=s(c,n),l=a(c,{firstDayOfWeek:n,firstWeekContainsDate:u}),f=d.getTime()-l.getTime();return Math.round(f/6048e5)+1}(t,{firstDayOfWeek:e.firstDayOfWeek,firstWeekContainsDate:e.firstWeekContainsDate})},ww:function(t,e){return d(_.w(t,e),2)}};function v(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=e?String(e):"YYYY-MM-DDTHH:mm:ss.SSSZ",s=i(t);if(!o(s))return"Invalid Date";var a=r.locale||u;return n.replace(c,(function(t,e){return e||("function"==typeof _[t]?"".concat(_[t](s,a)):t)}))}function p(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(!(Symbol.iterator in Object(t))&&"[object Arguments]"!==Object.prototype.toString.call(t))return;var r=[],n=!0,i=!1,o=void 0;try{for(var s,a=t[Symbol.iterator]();!(n=(s=a.next()).done)&&(r.push(s.value),!e||r.length!==e);n=!0);}catch(t){i=!0,o=t}finally{try{n||null==a.return||a.return()}finally{if(i)throw o}}return r}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function m(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var g=/\d/,b=/\d\d/,y=/\d\d?/,w=/[+-]?\d+/,M={},D=function(t,e,r){var n,i=Array.isArray(t)?t:[t];n="string"==typeof r?function(t){var e=parseInt(t,10);return m({},r,e)}:r,i.forEach((function(t){M[t]=[e,n]}))},S=function(t){return t.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&")},O=function(t){return function(e){var r=e[t];if(!Array.isArray(r))throw new Error("Locale[".concat(t,"] need an array"));return new RegExp(r.map(S).join("|"))}},k=function(t,e){return function(r,n){var i=n[t];if(!Array.isArray(i))throw new Error("Locale[".concat(t,"] need an array"));var o=i.indexOf(r);if(o<0)throw new Error("Invalid Word");return m({},e,o)}};D("Y",w,"year"),D("YY",b,(function(t){var e=(new Date).getFullYear(),r=Math.floor(e/100),n=parseInt(t,10);return m({},"year",n=100*(n>68?r-1:r)+n)})),D("YYYY",/\d{4}/,"year"),D("M",y,(function(t){return m({},"month",parseInt(t,10)-1)})),D("MM",b,(function(t){return m({},"month",parseInt(t,10)-1)})),D("MMM",O("monthsShort"),k("monthsShort","month")),D("MMMM",O("months"),k("months","month")),D("D",y,"day"),D("DD",b,"day"),D(["H","h"],y,"hour"),D(["HH","hh"],b,"hour"),D("m",y,"minute"),D("mm",b,"minute"),D("s",y,"second"),D("ss",b,"second"),D("S",g,(function(t){return m({},"millisecond",100*parseInt(t,10))})),D("SS",b,(function(t){return m({},"millisecond",10*parseInt(t,10))})),D("SSS",/\d{3}/,"millisecond"),D(["A","a"],(function(t){return t.meridiemParse||/[ap]\.?m?\.?/i}),(function(t,e){return{isPM:"function"==typeof e.isPM?e.isPM(t):function(t){return"p"==="".concat(t).toLowerCase().charAt(0)}(t)}})),D(["Z","ZZ"],/[+-]\d\d:?\d\d/,(function(t){return{offset:(e=t,r=p(e.match(/([+-]|\d\d)/g)||["-","0","0"],3),n=r[0],i=r[1],o=r[2],s=60*parseInt(i,10)+parseInt(o,10),0===s?0:"+"===n?-s:+s)};var e,r,n,i,o,s})),D("x",w,(function(t){return{date:new Date(parseInt(t,10))}})),D("X",/[+-]?\d+(\.\d{1,3})?/,(function(t){return{date:new Date(1e3*parseFloat(t))}})),D("d",g,"weekday"),D("dd",O("weekdaysMin"),k("weekdaysMin","weekday")),D("ddd",O("weekdaysShort"),k("weekdaysShort","weekday")),D("dddd",O("weekdays"),k("weekdays","weekday")),D("w",y,"week"),D("ww",b,"week")},75:function(t,e,r){"use strict";r.r(e);var n=r(0),i=r.n(n),o=r(176),s=r(3),a=r(20);function u(t,e,r,n,i,o,s){try{var a=t[o](s),u=a.value}catch(t){return void r(t)}a.done?e(u):Promise.resolve(u).then(n,i)}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var f,h,_={data:function(){return{order:null,subOrders:[]}},computed:d(d(d(d({},Object(s.c)("cart",["billingAddress"])),Object(s.c)("user",["isCustomer","getUser"])),Object(s.c)("setting",["formatPrice","getSetting"])),{},{discountPrice:function(){return this.order.coupons.reduce((function(t,e){return t+1*e.coupon_amount}),0)},orderSubtotal:function(){return this.order.items.reduce((function(t,e){return t+1*e.net_revenue+1*e.coupon_amount}),0)},billingAddressHtml:function(){var t=this.order.billing_first_name+" "+this.order.billing_last_name+"<br />";return this.order.billing_company&&(t+=this.order.billing_company+"<br />"),t+=this.order.billing_street_1,this.order.billing_street_2&&(t+=", "+this.order.billing_street_2),t+="<br />",t+=this.order.billing_city+", "+this.order.billing_state+" "+this.order.billing_postcode+"<br />",t+=this.countryFullName(this.order.billing_country)+"<br />",t+="<p>"+this.order.billing_phone+"</p>",t+="<p>"+this.order.billing_email+"</p>"},shippingAddressHtml:function(){var t=this.order.shipping_first_name+" "+this.order.shipping_last_name+"<br />";return this.order.shipping_company&&(t+=this.order.shipping_company+"<br />"),t+=this.order.shipping_street_1,this.order.shipping_street_2&&(t+=", "+this.order.shipping_street_2),t+="<br />",t+=this.order.shipping_city+", "+this.order.shipping_state+" "+this.order.shipping_postcode+"<br />",t+=this.countryFullName(this.order.shipping_country)+"<br />"}}),created:(f=i.a.mark((function t(){var e=this;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.axios.get("/web/order-detail/"+this.$route.params.id,{params:{customer:this.isCustomer?this.getUser.email:this.billingAddress.email}}).then((function(t){e.order=t.data.order,e.subOrders=t.data.subOrders})).catch((function(t){e.$router.push("/pages/404")}));case 2:case"end":return t.stop()}}),t,this)})),h=function(){var t=this,e=arguments;return new Promise((function(r,n){var i=f.apply(t,e);function o(t){u(i,r,n,o,s,"next",t)}function s(t){u(i,r,n,o,s,"throw",t)}o(void 0)}))},function(){return h.apply(this,arguments)}),methods:{fullDate:function(t){return Object(o.a)(t,"MMMM DD, YYYY")},countryFullName:function(t){return a.a.find((function(e){return e.id===t})).text}}},v=r(1),p=Object(v.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"main"},[t.order?r("div",{staticClass:"container order-complete-container mb-5"},[r("ul",{staticClass:"checkout-progress-bar d-flex justify-content-center flex-wrap"},[r("li",{staticClass:"prev"},[r("router-link",{attrs:{to:"/pages/cart","exact-active-class":"active"}},[t._v("Shopping Cart")])],1),t._v(" "),r("li",{staticClass:"prev"},[r("router-link",{attrs:{to:"/pages/checkout","exact-active-class":"active"}},[t._v("Checkout")])],1),t._v(" "),r("li",[r("a",{class:{active:t.$route.path.includes("order")},attrs:{href:"#"}},[t._v("Order Complete")])])]),t._v(" "),r("p",[t._v("Thank you. Your order has been received.")]),t._v(" "),r("ul",{staticClass:"mb-3"},[r("li",[t._v("\n                    Order number: "),r("strong",[t._v(t._s(t.order.id))])]),t._v(" "),r("li",[t._v("\n                    Date: "),r("strong",[t._v(t._s(t.fullDate(t.order.created_at)))])]),t._v(" "),r("li",[t._v("\n                    Email: "),r("strong",[t._v(t._s(t.order.customer_email))])]),t._v(" "),r("li",[t._v("\n                    Total:\n                    "),r("strong",{domProps:{innerHTML:t._s(t.formatPrice(t.order.order_total_price))}})]),t._v(" "),r("li",[t._v("\n                    Payment method: "),r("strong",[t._v(t._s(t.order.payment_method))])])]),t._v(" "),r("div",{staticClass:"order-details mb-3"},[r("h4",{staticClass:"title mb-0"},[t._v("Order Details")]),t._v(" "),r("table",{staticClass:"table table-order-detail"},[t._m(0),t._v(" "),r("tbody",t._l(t.order.items,(function(e,n){return r("tr",{key:"order-item-"+n},[r("td",[r("router-link",{attrs:{to:"/product/default/"+e.product.slug}},[r("h4",{staticClass:"product-title"},[t._v("\n                                        "+t._s(e.name)+" x\n                                    ")])]),t._v(" "),r("strong",{staticClass:"product-count"},[t._v("\n                                    "+t._s(e.qty)+"\n                                ")])],1),t._v(" "),r("td",{staticClass:"product-price",domProps:{innerHTML:t._s(t.formatPrice(1*e.net_revenue+1*e.coupon_amount))}})])})),0),t._v(" "),r("tfoot",[r("tr",[r("th",[t._v("Subtotal:")]),t._v(" "),r("td",{domProps:{innerHTML:t._s(t.formatPrice(t.orderSubtotal))}})]),t._v(" "),t.discountPrice>0?r("tr",[r("th",[t._v("Discount:")]),t._v(" "),r("td",{staticClass:"discount-price",domProps:{innerHTML:t._s(t.formatPrice(-t.discountPrice))}})]):t._e(),t._v(" "),t.order.shipping_method?r("tr",[r("th",[t._v("Shipping:")]),t._v(" "),r("td",{staticClass:"shipping-method"},[r("span",{domProps:{innerHTML:t._s(t.formatPrice(t.order.shipping_cost))}}),t._v(" "),r("sub",[t._v("via")]),t._v(" "+t._s(t.order.shipping_method)+"\n                            ")])]):t._e(),t._v(" "),"1"===t.getSetting("enable_tax")?r("tr",[r("th",[t._v("Tax")]),t._v(" "),r("td",{staticClass:"tax-amount",domProps:{innerHTML:t._s(t.formatPrice(t.order.order_tax))}})]):t._e(),t._v(" "),r("tr",[r("th",[t._v("Payment method:")]),t._v(" "),r("td",{staticClass:"payment-method"},[t._v("\n                                "+t._s(t.order.payment_method)+"\n                            ")])]),t._v(" "),r("tr",[r("th",[t._v("Total:")]),t._v(" "),r("td",{staticClass:"total-price"},[r("span",{domProps:{innerHTML:t._s(t.formatPrice(t.order.order_total_price))}})])])])])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"address col-md-6"},[t._m(1),t._v(" "),r("div",{staticClass:"address-box"},[r("address",{domProps:{innerHTML:t._s(t.billingAddressHtml)}})])]),t._v(" "),r("div",{staticClass:"address col-md-6"},[t._m(2),t._v(" "),r("div",{staticClass:"address-box"},[r("address",{domProps:{innerHTML:t._s(t.shippingAddressHtml)}})])])]),t._v(" "),t.subOrders.length>0?r("div",{staticClass:"order-details mb-3 mt-2"},[r("h4",{staticClass:"title mb-1"},[t._v("Sub Orders")]),t._v(" "),t._m(3),t._v(" "),r("table",{staticClass:"table table-order-detail"},[t._m(4),t._v(" "),r("tbody",t._l(t.subOrders,(function(e,n){return r("tr",{key:"order-item-"+n},[r("td",[t._v("\n                                "+t._s(e.id)+"\n                            ")]),t._v(" "),r("td",[t._v("\n                                "+t._s(e.created_at)+"\n                            ")]),t._v(" "),r("td",[t._v("\n                                "+t._s(e.status)+"\n                            ")]),t._v(" "),r("td",[r("span",{domProps:{innerHTML:t._s(t.formatPrice(e.order_total_price))}}),t._v("\n                                for "+t._s(e.order_total_qty)+" items(s)\n                            ")]),t._v(" "),r("td",[r("router-link",{staticClass:"btn btn-shop",attrs:{to:"/pages/account/orders/"+e.id}},[t._v("View")])],1)])})),0)])]):t._e()]):t._e()])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Product")]),this._v(" "),e("th",[this._v("Total")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"heading d-flex mb-0"},[e("h4",{staticClass:"title mb-0"},[this._v("Billing Address")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"heading d-flex mb-0"},[e("h4",{staticClass:"title mb-0"},[this._v("\n                            Shipping Address\n                        ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Note:")]),this._v(" This order has products from multiple\n                    vendors. Each order will be handled by individual vendor\n                    independently.\n                ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",[t._v("Order")]),t._v(" "),r("th",[t._v("Date")]),t._v(" "),r("th",[t._v("Status")]),t._v(" "),r("th",[t._v("Total")]),t._v(" "),r("th")])])}],!1,null,null,null);e.default=p.exports}}]);