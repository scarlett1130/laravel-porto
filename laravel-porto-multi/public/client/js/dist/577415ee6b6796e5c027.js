(window.webpackJsonp=window.webpackJsonp||[]).push([[59,86],{53:function(t,e,i){"use strict";i.r(e);var s={props:{errorMsg:Array}},n=i(1),r=Object(n.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.errorMsg.length?i("ul",{staticClass:"error-box"},t._l(t.errorMsg,(function(e,s){return i("li",{key:"error-"+s,domProps:{innerHTML:t._s(e)}})})),0):t._e()}),[],!1,null,null,null);e.default=r.exports},71:function(t,e,i){"use strict";i.r(e);var s=i(0),n=i.n(s),r=i(3),a=i(179),o=i(42),l=i(53),p=i(20),c=i(7);function d(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return u(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,s=new Array(e);i<e;i++)s[i]=t[i];return s}function h(t,e,i,s,n,r,a){try{var o=t[r](a),l=o.value}catch(t){return void i(t)}o.done?e(l):Promise.resolve(l).then(s,n)}function g(t){return function(){var e=this,i=arguments;return new Promise((function(s,n){var r=t.apply(e,i);function a(t){h(r,s,n,a,o,"next",t)}function o(t){h(r,s,n,a,o,"throw",t)}a(void 0)}))}}function m(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function v(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?m(Object(i),!0).forEach((function(e){f(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):m(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function f(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var b,_,y,C,A,x={components:{Select2:a.a,VueSlideToggle:o.a,ErrorBoxesComponent:l.default},data:function(){return{billing:{firstName:"",lastName:"",company:"",country:"",streetAddress1:"",streetAddress2:"",city:"",state:"",zip:"",phone:"",email:""},shipping:{firstName:"",lastName:"",company:"",country:"",streetAddress1:"",streetAddress2:"",city:"",state:"",zip:""},diffShipping:!1,paymentMethod:null,shippingMethod:null,coupon:"",loginEmail:"",loginPassword:"",paymentMethods:[],shippingMethods:[],stripe:null,toggleLoginForm:!1,toggleCouponForm:!1,toggleShippingForm:!1,errorMsg:[],loading:!1,showTax:!1}},computed:v(v(v(v({},Object(r.c)("cart",["appliedCoupons","appliedCartCoupons","appliedCouponCodes","couponAmount","couponTax","cartList","cartlistOnlyIdQty","cartlistIdQtyName","priceTotal","taxTotal","shippingAddress","billingAddress"])),Object(r.c)("setting",["getSetting","formatPrice","getCurrency"])),Object(r.c)("user",["getUser","isCustomer","customerBillingAddress","customerShippingAddress"])),{},{billingCountries:function(){return p.a.filter((function(t){return window.sellableCountries.indexOf(t.id)>-1}))},billingStates:function(){return this.billing.country&&p.c[this.billing.country]?p.c[this.billing.country]:[]},billingInfoAllEntered:function(){return this.billing.city&&this.billing.state&&this.billing.zip&&this.billing.country?this.billing.city+this.billing.state+this.billing.zip+this.billing.country:""},shippingCountries:function(){return p.a.filter((function(t){return window.shippableCountries.indexOf(t.id)>-1}))},shippingStates:function(){return this.shipping.country&&p.c[this.shipping.country]?p.c[this.shipping.country]:[]},shippingInfoAllEntered:function(){return this.shippingInfo.city&&this.shippingInfo.state&&this.shippingInfo.zip&&this.shippingInfo.country?this.shippingInfo.city+this.shippingInfo.state+this.shippingInfo.zip+this.shippingInfo.country:""},shippingInfo:function(){return this.diffShipping?this.shipping:{firstName:this.billing.firstName,lastName:this.billing.lastName,company:this.billing.company,country:this.billing.country,streetAddress1:this.billing.streetAddress1,streetAddress2:this.billing.streetAddress2,city:this.billing.city,state:this.billing.state,zip:this.billing.zip}},addressInfoChanged:function(){return this.billingInfoAllEntered||this.shippingInfoAllEntered?this.billingInfoAllEntered+this.shippingInfoAllEntered:""},taxAmount:function(){var t=this.taxTotal-this.couponTax;return null!=this.shippingMethod&&(t+=1*this.shippingMethods[this.shippingMethod].tax),"0"!==this.getSetting("tax_round_at_subtotal")&&(t=t.toFixed(this.getSetting("number_of_decimal"))),1*t},totalPrice:function(){var t=this.priceTotal-this.couponAmount+this.taxAmount;return null!=this.shippingMethod&&(t+=1*this.shippingMethods[this.shippingMethod].cost),"0"!==this.getSetting("tax_round_at_subtotal")&&(t=t.toFixed(this.getSetting("number_of_decimal"))),1*t}}),watch:{addressInfoChanged:(A=g(n.a.mark((function t(){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getCalculatedItems();case 2:case"end":return t.stop()}}),t,this)}))),function(){return A.apply(this,arguments)}),errorMsg:function(){document.querySelector(".checkout-progress-bar").scrollIntoView({behavior:"smooth",block:"end"})}},created:function(){var t=this;if(this.isCustomer)this.billing=this.customerBillingAddress,this.shipping=this.customerShippingAddress;else if("base"===this.getSetting("default_customer_location")){if(this.getSetting("store_country")){var e=this.getSetting("store_country").split(":");e.length&&(this.billing.country=e[1],"state"===e[0]&&(this.billing.state=e[2]))}this.billing=v(v({},this.billing),{},{streetAddress1:this.getSetting("store_address_line_1"),streetAddress2:this.getSetting("store_address_line_2"),city:this.getSetting("store_city"),zip:this.getSetting("store_postcode")}),this.shipping=v(v({},this.shipping),{},{streetAddress1:this.billing.streetAddress1,streetAddress2:this.billing.streetAddress2,country:this.billing.country,state:this.billing.state,city:this.billing.city,zip:this.billing.zip})}this.billing=v(v({},this.billing),{},{country:this.billingAddress.country?this.billingAddress.country:this.billing.country,streetAddress1:this.billingAddress.streetAddress1?this.billingAddress.streetAddress1:this.billing.streetAddress1,streetAddress2:this.billingAddress.streetAddress2?this.billingAddress.streetAddress2:this.billing.streetAddress2,city:this.billingAddress.city?this.billingAddress.city:this.billing.city,state:this.billingAddress.state?this.billingAddress.state:this.billing.state,zip:this.billingAddress.zip?this.billingAddress.zip:this.billing.zip}),this.shipping=v(v({},this.shipping),{},{country:this.shippingAddress.country?this.shippingAddress.country:this.shipping.country,streetAddress1:this.shippingAddress.streetAddress1?this.shippingAddress.streetAddress1:this.shipping.streetAddress1,streetAddress2:this.shippingAddress.streetAddress2?this.shippingAddress.streetAddress2:this.shipping.streetAddress2,city:this.shippingAddress.city?this.shippingAddress.city:this.shipping.city,state:this.shippingAddress.state?this.shippingAddress.state:this.shipping.state,zip:this.shippingAddress.zip?this.shippingAddress.zip:this.shipping.zip}),this.diffShipping="customer_shipping"===this.getSetting("default_shipping_address"),this.showTax="include"===this.getSetting("tax_display_in_cart_checkout"),window.axios.get("/web/payment-methods").then((function(e){t.paymentMethods=d(e.data);var i=t.paymentMethods.find((function(t){return"Stripe"==t.name}));i&&(t.stripe=Stripe(i.publishable_key))}))},methods:v(v(v(v(v({},Object(r.d)("cart",{updateShippingAddress:"UPDATE_SHIPPING_ADDRESS",updateBillingAddress:"UPDATE_BILLING_ADDRESS",clearCart:"CLEAR_CART"})),Object(r.d)("user",{setUser:c.b})),Object(r.b)("cart",["applyCoupon","addCoupon","removeCoupon","calcCartItems"])),Object(r.b)("user",["login"])),{},{couponAdd:(C=g(n.a.mark((function t(){var e;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,this.addCoupon(this.coupon);case 3:e=t.sent,this.loading=!1,e&&(this.errorMsg=e.errorMsg,0===this.errorMsg.length&&(this.shippingMethods=e.shipping,this.coupon=""));case 6:case"end":return t.stop()}}),t,this)}))),function(){return C.apply(this,arguments)}),couponRemove:(y=g(n.a.mark((function t(e){var i;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,this.removeCoupon(e);case 3:i=t.sent,this.loading=!1,i&&(this.shippingMethods=i.shipping);case 6:case"end":return t.stop()}}),t,this)}))),function(t){return y.apply(this,arguments)}),getCalculatedItems:(_=g(n.a.mark((function t(){var e,i,s=arguments;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=s.length>0&&void 0!==s[0]?s[0]:null,this.updateBillingAddress({billingInfo:this.billing}),this.updateShippingAddress({shippingInfo:this.shippingInfo}),this.loading=!0,t.next=6,this.calcCartItems(e);case 6:i=t.sent,this.loading=!1,this.shippingMethod=null,i&&(this.shippingMethods=i.shipping);case 10:case"end":return t.stop()}}),t,this)}))),function(){return _.apply(this,arguments)}),placeOrder:(b=g(n.a.mark((function t(){var e,i=this;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.errorMsg=[],null!==this.shippingMethods&&null===this.shippingMethod&&this.errorMsg.indexOf("You have to choose shipping method.")<0&&this.errorMsg.push("You have to choose shipping method."),null===this.paymentMethod&&this.errorMsg.indexOf("You have to choose payment method.")<0&&this.errorMsg.push("You have to choose payment method."),!(this.errorMsg.length>0)){t.next=5;break}return t.abrupt("return",!1);case 5:return this.updateBillingAddress({billingInfo:this.billing}),e=this.paymentMethods.find((function(t){return t.id==i.paymentMethod})),this.loading=!0,t.next=10,window.axios.post("/web/place-order",{items:this.cartlistIdQtyName,applied_coupons:this.appliedCouponCodes,billing:this.billing,shipping:this.shippingInfo,customer:this.isCustomer?this.getUser.email:"",shipping_method:null!==this.shippingMethods?this.shippingMethods[this.shippingMethod].id:null,payment_method:e}).then((function(t){i.clearCart(),i.setUser({user:t.data.user}),"3"==i.paymentMethod?i.$router.push("/pages/order/".concat(t.data.order_id)):"1"==i.paymentMethod?i.stripe.redirectToCheckout({sessionId:t.data.session_id}):"2"==i.paymentMethod&&(window.location.href=t.data.paypal_info)})).catch((function(t){t.data&&t.data.message&&(i.errorMsg=t.data.message.split("/Product-Error/"))}));case 10:this.loading=!1;case 11:case"end":return t.stop()}}),t,this)}))),function(){return b.apply(this,arguments)})})},w=i(1),P=Object(w.a)(x,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("main",{staticClass:"main"},[i("div",{staticClass:"container checkout-container"},[i("ul",{staticClass:"checkout-progress-bar d-flex justify-content-center flex-wrap"},[i("li",{staticClass:"prev"},[i("router-link",{attrs:{to:"/pages/cart","exact-active-class":"active"}},[t._v("Shopping Cart")])],1),t._v(" "),i("li",[i("router-link",{attrs:{to:"/pages/checkout","exact-active-class":"active"}},[t._v("Checkout")])],1),t._v(" "),t._m(0)]),t._v(" "),i("error-boxes-component",{attrs:{errorMsg:t.errorMsg}}),t._v(" "),t.isCustomer?t._e():i("div",{staticClass:"login-form-container mb-1"},[i("h4",[t._v("\n                    Returning customer?\n                    "),i("button",{staticClass:"btn btn-link btn-toggle",attrs:{type:"button"},on:{click:function(e){t.toggleLoginForm=!t.toggleLoginForm}}},[t._v("Login")])]),t._v(" "),i("vue-slide-toggle",{staticClass:"login-section feature-box",attrs:{open:t.toggleLoginForm,duration:500}},[i("div",{staticClass:"feature-box-content"},[i("form",{attrs:{action:"#",id:"login-form"},on:{submit:function(e){return e.preventDefault(),t.login(t.loginEmail,t.loginPassword)}}},[i("p",{staticClass:"mb-2"},[t._v("\n                                You already have an account with us. Sign in or\n                                continue as guest.\n                            ")]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-6"},[i("div",{staticClass:"form-group"},[i("label",[t._v("\n                                            Email Address\n                                            "),i("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.loginEmail,expression:"loginEmail"}],staticClass:"form-control",attrs:{type:"email",required:""},domProps:{value:t.loginEmail},on:{input:function(e){e.target.composing||(t.loginEmail=e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"col-md-6"},[i("div",{staticClass:"form-group"},[i("label",[t._v("\n                                            Password\n                                            "),i("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.loginPassword,expression:"loginPassword"}],staticClass:"form-control",attrs:{type:"password",required:""},domProps:{value:t.loginPassword},on:{input:function(e){e.target.composing||(t.loginPassword=e.target.value)}}})])])]),t._v(" "),i("div",{staticClass:"form-footer mb-1"},[i("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v("LOGIN")]),t._v(" "),i("router-link",{staticClass:"forget-pass",attrs:{to:"/pages/forgot-pwd"}},[t._v("Forgot your password?")])],1)])])])],1),t._v(" "),"0"!==t.getSetting("enable_coupon")?i("div",{staticClass:"checkout-discount mb-3"},[i("h4",{staticClass:"mb-3"},[t._v("\n                    Have a coupon?\n                    "),i("button",{staticClass:"btn btn-link btn-toggle",attrs:{type:"button"},on:{click:function(e){t.toggleCouponForm=!t.toggleCouponForm}}},[t._v("Enter your code")])]),t._v(" "),i("vue-slide-toggle",{staticClass:"feature-box",attrs:{open:t.toggleCouponForm,duration:500}},[i("div",{staticClass:"feature-box-content"},[i("form",{attrs:{action:"#"},on:{submit:function(e){return e.preventDefault(),t.couponAdd(t.coupon)}}},[i("div",{staticClass:"input-group"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.coupon,expression:"coupon"}],staticClass:"form-control form-control-sm w-auto mr-2",attrs:{type:"text",placeholder:"Enter discount code",required:""},domProps:{value:t.coupon},on:{input:function(e){e.target.composing||(t.coupon=e.target.value)}}}),t._v(" "),i("div",{staticClass:"input-group-append"},[i("button",{staticClass:"btn btn-sm",attrs:{type:"submit"}},[t._v("Apply Coupon")])])])])])])],1):t._e(),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-7"},[i("ul",{staticClass:"checkout-steps"},[i("li",[i("h2",{staticClass:"step-title"},[t._v("Billing Details")]),t._v(" "),i("form",{attrs:{action:"#",id:"checkout-form"},on:{submit:function(e){return e.preventDefault(),t.placeOrder.apply(null,arguments)}}},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-6"},[i("div",{staticClass:"form-group"},[t._m(1),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.billing.firstName,expression:"billing.firstName"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.billing.firstName},on:{input:function(e){e.target.composing||t.$set(t.billing,"firstName",e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"col-md-6"},[i("div",{staticClass:"form-group"},[t._m(2),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.billing.lastName,expression:"billing.lastName"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.billing.lastName},on:{input:function(e){e.target.composing||t.$set(t.billing,"lastName",e.target.value)}}})])])]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",[t._v("Company")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.billing.company,expression:"billing.company"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.billing.company},on:{input:function(e){e.target.composing||t.$set(t.billing,"company",e.target.value)}}})]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",[t._v("Country")]),t._v(" "),i("Select2",{attrs:{id:"billing-country-select",required:!0,options:t.billingCountries},model:{value:t.billing.country,callback:function(e){t.$set(t.billing,"country",e)},expression:"billing.country"}})],1),t._v(" "),i("div",{staticClass:"form-group"},[t._m(3),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.billing.streetAddress1,expression:"billing.streetAddress1"}],staticClass:"form-control",attrs:{type:"text",placeholder:"House number and street name",required:""},domProps:{value:t.billing.streetAddress1},on:{input:function(e){e.target.composing||t.$set(t.billing,"streetAddress1",e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.billing.streetAddress2,expression:"billing.streetAddress2"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Apartment, suite, unite, etc. (optional)",requireds:""},domProps:{value:t.billing.streetAddress2},on:{input:function(e){e.target.composing||t.$set(t.billing,"streetAddress2",e.target.value)}}})]),t._v(" "),i("div",{staticClass:"form-group"},[t._m(4),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.billing.city,expression:"billing.city",modifiers:{lazy:!0}}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.billing.city},on:{change:function(e){return t.$set(t.billing,"city",e.target.value)}}})]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",[t._v("State/Province")]),t._v(" "),t.billingStates.length?i("Select2",{key:"billing-state-select2",attrs:{id:"billing-state-select",required:!0,options:t.billingStates},model:{value:t.billing.state,callback:function(e){t.$set(t.billing,"state",e)},expression:"billing.state"}}):i("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.billing.state,expression:"billing.state",modifiers:{lazy:!0}}],key:"billing-state-input",staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.billing.state},on:{change:function(e){return t.$set(t.billing,"state",e.target.value)}}})],1),t._v(" "),i("div",{staticClass:"form-group"},[t._m(5),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.billing.zip,expression:"billing.zip",modifiers:{lazy:!0}}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.billing.zip},on:{change:function(e){return t.$set(t.billing,"zip",e.target.value)}}})]),t._v(" "),i("div",{staticClass:"form-group"},[t._m(6),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.billing.phone,expression:"billing.phone"}],staticClass:"form-control",attrs:{type:"tel",required:""},domProps:{value:t.billing.phone},on:{input:function(e){e.target.composing||t.$set(t.billing,"phone",e.target.value)}}})]),t._v(" "),i("div",{staticClass:"form-group"},[t._m(7),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.billing.email,expression:"billing.email"}],staticClass:"form-control",attrs:{type:"email",required:""},domProps:{value:t.billing.email},on:{input:function(e){e.target.composing||t.$set(t.billing,"email",e.target.value)}}})]),t._v(" "),"force_billing"!==t.getSetting("default_shipping_address")?[i("div",{staticClass:"form-group"},[i("div",{staticClass:"custom-control custom-checkbox"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.diffShipping,expression:"diffShipping"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"different-shipping"},domProps:{checked:Array.isArray(t.diffShipping)?t._i(t.diffShipping,null)>-1:t.diffShipping},on:{change:[function(e){var i=t.diffShipping,s=e.target,n=!!s.checked;if(Array.isArray(i)){var r=t._i(i,null);s.checked?r<0&&(t.diffShipping=i.concat([null])):r>-1&&(t.diffShipping=i.slice(0,r).concat(i.slice(r+1)))}else t.diffShipping=n},function(e){t.shippingMethod=null}]}}),t._v(" "),i("label",{staticClass:"custom-control-label",attrs:{for:"different-shipping"}},[t._v("\n                                                Ship to a different\n                                                address?\n                                            ")])])]),t._v(" "),i("transition",{attrs:{name:"fade","enter-active-class":"fadeInDown","leave-active-class":"fadeOutUp"}},[t.diffShipping?i("div",{staticClass:"shipping-info"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-6"},[i("div",{staticClass:"form-group required-field"},[i("label",[t._v("First Name")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.shipping.firstName,expression:"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tshipping.firstName\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.shipping.firstName},on:{input:function(e){e.target.composing||t.$set(t.shipping,"firstName",e.target.value)}}})])]),t._v(" "),i("div",{staticClass:"col-md-6"},[i("div",{staticClass:"form-group required-field"},[i("label",[t._v("Last Name")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.shipping.lastName,expression:"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tshipping.lastName\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.shipping.lastName},on:{input:function(e){e.target.composing||t.$set(t.shipping,"lastName",e.target.value)}}})])])]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",[t._v("Company")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.shipping.company,expression:"shipping.company"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.shipping.company},on:{input:function(e){e.target.composing||t.$set(t.shipping,"company",e.target.value)}}})]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",[t._v("Country")]),t._v(" "),i("Select2",{attrs:{id:"shipping-country-select",required:!0,options:t.shippingCountries},model:{value:t.shipping.country,callback:function(e){t.$set(t.shipping,"country",e)},expression:"shipping.country"}})],1),t._v(" "),i("div",{staticClass:"form-group required-field"},[i("label",[t._v("Street Address")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.shipping.streetAddress1,expression:"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tshipping.streetAddress1\n\t\t\t\t\t\t\t\t\t\t\t\t\t"}],staticClass:"form-control",attrs:{type:"text",placeholder:"House number and street name",required:""},domProps:{value:t.shipping.streetAddress1},on:{input:function(e){e.target.composing||t.$set(t.shipping,"streetAddress1",e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.shipping.streetAddress2,expression:"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tshipping.streetAddress2\n\t\t\t\t\t\t\t\t\t\t\t\t\t"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Apartment, suite, unite, etc. (optional)",requireds:""},domProps:{value:t.shipping.streetAddress2},on:{input:function(e){e.target.composing||t.$set(t.shipping,"streetAddress2",e.target.value)}}})]),t._v(" "),i("div",{staticClass:"form-group required-field"},[i("label",[t._v("City")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.shipping.city,expression:"shipping.city",modifiers:{lazy:!0}}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.shipping.city},on:{change:function(e){return t.$set(t.shipping,"city",e.target.value)}}})]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",[t._v("State/Province")]),t._v(" "),t.shippingStates.length?i("Select2",{key:"shipping-state-select2",attrs:{id:"shipping-state-select",required:!0,options:t.shippingStates},model:{value:t.shipping.state,callback:function(e){t.$set(t.shipping,"state",e)},expression:"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tshipping.state\n\t\t\t\t\t\t\t\t\t\t\t\t\t"}}):i("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.shipping.state,expression:"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tshipping.state\n\t\t\t\t\t\t\t\t\t\t\t\t\t",modifiers:{lazy:!0}}],key:"shipping-state-input",staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.shipping.state},on:{change:function(e){return t.$set(t.shipping,"state",e.target.value)}}})],1),t._v(" "),i("div",{staticClass:"form-group required-field"},[i("label",[t._v("Zip/Postal Code")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.shipping.zip,expression:"shipping.zip",modifiers:{lazy:!0}}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.shipping.zip},on:{change:function(e){return t.$set(t.shipping,"zip",e.target.value)}}})])]):t._e()])]:t._e()],2)])])]),t._v(" "),i("div",{staticClass:"col-lg-5"},[i("div",{staticClass:"order-summary",class:{loading:t.loading}},[i("div",{staticClass:"d-loading-container",class:{"d-none":!t.loading}},[i("div",{staticClass:"d-loading"})]),t._v(" "),i("h3",[t._v("YOUR ORDER")]),t._v(" "),i("table",{staticClass:"table table-mini-cart"},[t._m(8),t._v(" "),i("tbody",t._l(t.cartList,(function(e,s){return i("tr",{key:s},[i("td",{staticClass:"product-col"},[i("h2",{staticClass:"product-title"},[t._v("\n                                            "+t._s(e.name)+" ×\n                                            "),i("span",{staticClass:"product-qty"},[t._v("\n                                                "+t._s(e.qty)+"\n                                            ")])])]),t._v(" "),i("td",{staticClass:"price-col"},[i("span",{domProps:{innerHTML:t._s(t.formatPrice(e.sum+(e.tax_amount&&t.showTax?e.tax_amount:0)))}}),t._v(" "),e.tax_amount&&t.showTax?i("small",[t._v("(incl.VAT)")]):t._e()])])})),0),t._v(" "),i("tfoot",[i("tr",{staticClass:"cart-subtotal"},[t._m(9),t._v(" "),i("td",{staticClass:"price-col"},[i("span",{domProps:{innerHTML:t._s(t.formatPrice(t.priceTotal+(t.showTax?t.taxTotal:0)))}}),t._v(" "),t.showTax&&t.taxTotal?i("small",[t._v("(incl.VAT)")]):t._e()])]),t._v(" "),t.appliedCoupons.length?t._l(t.appliedCoupons,(function(e,s){return i("tr",{key:"coupon"+s,staticClass:"cart-discount"},[i("th",[t._v("Coupon:"+t._s(e.code))]),t._v(" "),i("td",[i("span",{domProps:{innerHTML:t._s(t.formatPrice(-e.amount-(e.tax&&t.showTax?e.tax:0)))}}),t._v(" "),i("a",{attrs:{href:"javascript:;"},on:{click:function(i){return t.couponRemove(e.code)}}},[t._v("[Remove]")])])])})):t._e(),t._v(" "),null!==t.shippingMethods?i("tr",{staticClass:"order-shipping"},[i("td",{staticClass:"text-left",attrs:{colspan:"2"}},[i("h4",[t._v("Shipping")]),t._v(" "),t.shippingMethods.length?i("ul",{key:"available-shipping-methods"},t._l(t.shippingMethods,(function(e,s){return i("li",{key:s},[i("div",{staticClass:"custom-control custom-radio"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.shippingMethod,expression:"shippingMethod"}],staticClass:"custom-control-input",attrs:{type:"radio",name:"shipping-method",id:"shipping-method-"+s},domProps:{value:s,checked:t._q(t.shippingMethod,s)},on:{change:function(e){t.shippingMethod=s}}}),t._v(" "),i("label",{staticClass:"custom-control-label",attrs:{for:"shipping-method-"+s}},[t._v("\n                                                        "+t._s(e.name)+"\n                                                        "),i("div",{staticClass:"price"},[i("span",{domProps:{innerHTML:t._s(t.formatPrice(1*e.cost+(t.showTax&&e.tax?1*e.tax:0)))}}),t._v(" "),t.showTax&&e.tax?i("small",[t._v("(incl.VAT)")]):t._e()])])])])})),0):i("div",{key:"no-shipping-methods",staticClass:"info-box with-icon p-0"},[i("p",[t._v("\n                                                There are no shipping options\n                                                available. Please ensure that\n                                                your address has been entered\n                                                correctly, or contact us if you\n                                                need any help.\n                                            ")])])])]):t._e(),t._v(" "),t.showTax||"1"!==t.getSetting("enable_tax")?t._e():i("tr",{staticClass:"cart-tax"},[t._m(10),t._v(" "),i("td",{staticClass:"price-col",domProps:{innerHTML:t._s(t.formatPrice(t.taxAmount))}})]),t._v(" "),i("tr",{staticClass:"order-total"},[t._m(11),t._v(" "),i("td",[i("b",{staticClass:"total-price"},[i("span",{domProps:{innerHTML:t._s(t.formatPrice(t.totalPrice))}}),t._v(" "),t.showTax&&t.taxAmount>0?i("small",{domProps:{innerHTML:t._s("(incl "+t.formatPrice(t.taxAmount)+" tax)")}}):t._e()])])])],2)]),t._v(" "),i("div",{staticClass:"payment-methods mb-5"},[i("h4",{},[t._v("Payment Methods")]),t._v(" "),t.paymentMethods.length?i("ul",{key:"available-payment-methods"},t._l(t.paymentMethods,(function(e,s){return i("li",{key:s},[i("div",{staticClass:"custom-control custom-radio"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.paymentMethod,expression:"paymentMethod"}],staticClass:"custom-control-input",attrs:{type:"radio",name:"payment-method",id:"payment-method-"+e.id},domProps:{value:e.id,checked:t._q(t.paymentMethod,e.id)},on:{change:function(i){t.paymentMethod=e.id}}}),t._v(" "),i("label",{staticClass:"custom-control-label",attrs:{for:"payment-method-"+e.id}},[t._v(t._s(e.name))])])])})),0):i("div",{key:"no-payment-methods",staticClass:"info-box with-icon p-0"},[i("p",[t._v("\n                                    Sorry, it seems that there are no available\n                                    payment methods for your state. Please\n                                    contact us if you require assistance or wish\n                                    to make alternate arrangements.\n                                ")])])]),t._v(" "),i("button",{staticClass:"btn btn-dark btn-place-order",attrs:{type:"submit",form:"checkout-form"}},[t._v("Place order")])])])])],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("a",{staticClass:"disabled",attrs:{href:"#"}},[this._v("Order Complete")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v("\n                                                First Name\n                                                "),e("span",{staticClass:"required"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v("\n                                                Last Name\n                                                "),e("span",{staticClass:"required"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v("\n                                        Street Address\n                                        "),e("span",{staticClass:"required"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v("\n                                        City\n                                        "),e("span",{staticClass:"required"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v("\n                                        Zip/Postal Code\n                                        "),e("span",{staticClass:"required"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v("\n                                        Phone Number\n                                        "),e("span",{staticClass:"required"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("label",[this._v("\n                                        Email address\n                                        "),e("span",{staticClass:"required"},[this._v("*")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("th",{attrs:{colspan:"2"}},[e("h4",[this._v("Product")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("th",[e("h4",[this._v("Subtotal")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("th",[e("h4",[this._v("Tax")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("th",[e("h4",[this._v("Total")])])}],!1,null,null,null);e.default=P.exports}}]);