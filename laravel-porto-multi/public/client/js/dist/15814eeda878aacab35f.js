(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{66:function(t,e,r){"use strict";r.r(e);var n=r(20),s={props:{user:Object},methods:{getLocation:function(t,e){var r=n.a.find((function(e){return e.id==t})),s={text:"Unknown"};return r?(s=n.c[t].find((function(t){return t.id==e})))||(s={text:"Unknown"}):r={text:"Unknown"},s.text+", "+r.text}}},a=r(1),i=Object(a.a)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.user.vendor?r("div",{staticClass:"store-header store-with-banner"},[r("figure",[t.user.vendor.banner?r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.$root.getUrl(t.user.vendor.banner.copy_link,!0),expression:"\n\t\t\t\t\t$root.getUrl(\n\t\t\t\t\t\tuser.vendor.banner.copy_link, true\n\t\t\t\t\t)\n\t\t\t\t"}],attrs:{alt:"vendor",width:t.user.vendor.banner.width,height:t.user.vendor.banner.height}}):r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.$root.getUrl("client/images/vendors/banner-3.png"),expression:"\n\t\t\t\t\t$root.getUrl(\n\t\t\t\t\t\t'client/images/vendors/banner-3.png'\n\t\t\t\t\t)\n\t\t\t\t"}],attrs:{alt:"vendor",width:"768",height:"462"}})]),t._v(" "),r("div",{staticClass:"store-details"},[r("div",{staticClass:"seller-avatar"},[t.user.vendor.profile?r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.$root.getUrl(t.user.vendor.profile.copy_link,!0,100),expression:"\n\t\t\t\t\t\t$root.getUrl(\n\t\t\t\t\t\t\tuser.vendor.profile.copy_link, true, 100\n\t\t\t\t\t\t)\n\t\t\t\t\t"}],attrs:{alt:"vendor",width:"100",height:"100"}}):r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.$root.getUrl("server/images/placeholder-img-100x100.png"),expression:"\n\t\t\t\t\t\t$root.getUrl(\n\t\t\t\t\t\t\t'server/images/placeholder-img-100x100.png'\n\t\t\t\t\t\t)\n\t\t\t\t\t"}],attrs:{alt:"vendor",width:"100",height:"100"}})]),t._v(" "),r("div",{staticClass:"store-data"},[r("h1",{staticClass:"store-title"},[t._v(t._s(t.user.vendor.store_name))]),t._v(" "),r("ul",{staticClass:"store-info-list"},[r("li",[r("span",{staticClass:"store-address"},[t._v(t._s(t.getLocation(t.user.vendor.country,t.user.vendor.state)))])]),t._v(" "),r("li",[t._v(t._s(t.user.rating)+" rating from "+t._s(t.user.approved_reviews_count)+" review")])])])])]):t._e()}),[],!1,null,null,null);e.default=i.exports}}]);