(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{82:function(t,e,a){"use strict";a.r(e);var r=a(0),s=a.n(r),c=a(3);function i(t,e,a,r,s,c,i){try{var n=t[c](i),o=n.value}catch(t){return void a(t)}n.done?e(o):Promise.resolve(o).then(r,s)}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var u,v,d={methods:o(o({},Object(c.b)("user",["logout"])),{},{logOut:(u=s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.logout();case 2:t.sent&&this.$nextTick((function(){window.location.reload()}));case 4:case"end":return t.stop()}}),t,this)})),v=function(){var t=this,e=arguments;return new Promise((function(a,r){var s=u.apply(t,e);function c(t){i(s,a,r,c,n,"next",t)}function n(t){i(s,a,r,c,n,"throw",t)}c(void 0)}))},function(){return v.apply(this,arguments)})})},p=a(1),b=Object(p.a)(d,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"main"},[a("div",{staticClass:"page-header"},[a("div",{staticClass:"container d-flex flex-column align-items-center"},[a("nav",{staticClass:"breadcrumb-nav",attrs:{"aria-label":"breadcrumb"}},[a("div",{staticClass:"container"},[a("ol",{staticClass:"breadcrumb"},[a("li",{staticClass:"breadcrumb-item"},[a("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),a("li",{staticClass:"breadcrumb-item"},[a("router-link",{attrs:{to:"/"}},[t._v("Shop")])],1),t._v(" "),a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("\n\t\t\t\t\t\t\tMy Account\n\t\t\t\t\t\t")])])])]),t._v(" "),a("h1",[t._v("My Account")])])]),t._v(" "),a("div",{staticClass:"container account-container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-9 order-lg-last"},[a("router-view")],1),t._v(" "),a("aside",{staticClass:"sidebar col-lg-3"},[a("div",{staticClass:"widget widget-dashboard"},[a("h2",{staticClass:"text-uppercase"},[t._v("My Account")]),t._v(" "),a("ul",{staticClass:"list mb-0"},[a("li",[a("router-link",{attrs:{to:"/pages/account","exact-active-class":"active"}},[t._v("Dashboard")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/pages/account/orders","active-class":"active"}},[t._v("Orders")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/pages/account/downloads","exact-active-class":"active"}},[t._v("Downloads")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/pages/account/addresses","active-class":"active"}},[t._v("Addresses")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/pages/account/details","exact-active-class":"active"}},[t._v("Account details")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/pages/wishlist","exact-active-class":"active"}},[t._v("Wishlist")])],1),t._v(" "),a("li",[a("a",{attrs:{href:"javascript:;"},on:{click:t.logOut}},[t._v("Logout")])])])])])])])])}),[],!1,null,null,null);e.default=b.exports}}]);