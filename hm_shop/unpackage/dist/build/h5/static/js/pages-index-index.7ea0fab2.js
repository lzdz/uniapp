(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"15dd":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var i={goodsList:n("8456").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"home"},[n("v-uni-swiper",{attrs:{"indicator-dots":!0,circular:!0}},e._l(e.swipers,(function(e){return n("v-uni-swiper-item",{key:e.id},[n("v-uni-image",{attrs:{src:e.img}})],1)})),1),n("v-uni-view",{staticClass:"nav"},e._l(e.navs,(function(t,i){return n("v-uni-view",{key:i,staticClass:"nav_item",on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.navItemClick(t.path)}}},[n("v-uni-view",{class:t.icon}),n("v-uni-text",[e._v(e._s(t.title))])],1)})),1),n("v-uni-view",{staticClass:"hot_goods"},[n("v-uni-view",{staticClass:"tit"},[e._v("推荐商品")]),n("goods-list",{attrs:{goods:e.goods},on:{goodsItemClick:function(t){arguments[0]=t=e.$handleEvent(t),e.goGoodsDetail.apply(void 0,arguments)}}})],1)],1)},o=[]},1997:function(e,t,n){"use strict";n.r(t);var i=n("15dd"),a=n("621c");for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("546d");var r,s=n("f0c5"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"099eb9de",null,!1,i["a"],r);t["default"]=u.exports},"412f":function(e,t,n){"use strict";var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("96cf");var a=i(n("1da1")),o=i(n("8456")),r={data:function(){return{swipers:[],goods:[],navs:[{icon:"iconfont icon-ziyuan",title:"黑马超市",path:"/pages/goods/goods"},{icon:"iconfont icon-guanyuwomen",title:"联系我们",path:"/pages/contact/contact"},{icon:"iconfont icon-tupian",title:"社区图片",path:"/pages/pics/pics"},{icon:"iconfont icon-shipin",title:"学习视频",path:"/pages/videos/videos"}]}},onLoad:function(){this.getSwipers(),this.getHotGoods()},components:{"goods-list":o.default},methods:{getSwipers:function(){var e=this;return(0,a.default)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$myRuquest({url:"/api/getlunbo"});case 2:n=t.sent,e.swipers=n.data.message;case 4:case"end":return t.stop()}}),t)})))()},getHotGoods:function(){var e=this;return(0,a.default)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$myRuquest({url:"/api/getgoods?pageindex=1"});case 2:n=t.sent,e.goods=n.data.message;case 4:case"end":return t.stop()}}),t)})))()},navItemClick:function(e){uni.navigateTo({url:e})},goGoodsDetail:function(e){uni.navigateTo({url:"/pages/goods-detail/goods-detail?id="+e})}}};t.default=r},"546d":function(e,t,n){"use strict";var i=n("a540"),a=n.n(i);a.a},"621c":function(e,t,n){"use strict";n.r(t);var i=n("412f"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},9122:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.home uni-swiper[data-v-099eb9de]{width:%?750?%;height:%?380?%}.home uni-swiper uni-image[data-v-099eb9de]{height:100%;width:100%}.home .nav[data-v-099eb9de]{display:flex}.home .nav .nav_item[data-v-099eb9de]{width:25%;text-align:center}.home .nav .nav_item uni-view[data-v-099eb9de]{width:%?120?%;height:%?120?%;background:#b50e03;border-radius:%?60?%;margin:10px auto;line-height:%?120?%;color:#fff;font-size:%?50?%}.home .nav .nav_item .icon-tupian[data-v-099eb9de]{font-size:%?45?%}.home .nav .nav_item uni-text[data-v-099eb9de]{font-size:%?30?%}.home .hot_goods[data-v-099eb9de]{background:#eee;overflow:hidden;margin-top:10px}.home .hot_goods .tit[data-v-099eb9de]{height:50px;line-height:50px;color:#b50e03;text-align:center;letter-spacing:20px;background:#fff;margin:%?7?% 0}',""]),e.exports=t},a540:function(e,t,n){var i=n("9122");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("0ebfa32e",i,!0,{sourceMap:!1,shadowMode:!1})}}]);