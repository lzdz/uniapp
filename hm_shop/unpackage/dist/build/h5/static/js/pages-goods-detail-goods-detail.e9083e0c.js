(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goods-detail-goods-detail"],{1282:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return r}));var r={uniGoodsNav:e("ab23").default},i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"goods_detail"},[e("v-uni-swiper",{attrs:{"indicator-dots":!0}},t._l(t.swipers,(function(t,n){return e("v-uni-swiper-item",{key:n},[e("v-uni-image",{attrs:{src:t.src}})],1)})),1),e("v-uni-view",{staticClass:"box1"},[e("v-uni-view",{staticClass:"price"},[e("v-uni-text",[t._v("￥"+t._s(t.info.sell_price))]),e("v-uni-text",[t._v("￥"+t._s(t.info.market_price))])],1),e("v-uni-view",{staticClass:"goods_name"},[t._v(t._s(t.info.title))])],1),e("v-uni-view",{staticClass:"line"}),e("v-uni-view",{staticClass:"box2"},[e("v-uni-view",[t._v("货号："+t._s(t.info.goods_no))]),e("v-uni-view",[t._v("库存："+t._s(t.info.stock_quantity))])],1),e("v-uni-view",{staticClass:"line"}),e("v-uni-view",{staticClass:"box3"},[e("v-uni-view",{staticClass:"tit"},[t._v("详情介绍")]),e("v-uni-view",{staticClass:"content"},[e("v-uni-rich-text",{attrs:{nodes:t.content}})],1)],1),e("v-uni-view",{staticClass:"goods_nav"},[e("uni-goods-nav",{attrs:{fill:!0,options:t.options,"button-group":t.buttonGroup},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onClick.apply(void 0,arguments)},buttonClick:function(n){arguments[0]=n=t.$handleEvent(n),t.buttonClick.apply(void 0,arguments)}}})],1)],1)},o=[]},1885:function(t,n,e){"use strict";var r=e("ad31"),i=e.n(r);i.a},"1da1":function(t,n,e){"use strict";function r(t,n,e,r,i,o,a){try{var u=t[o](a),c=u.value}catch(s){return void e(s)}u.done?n(c):Promise.resolve(c).then(r,i)}function i(t){return function(){var n=this,e=arguments;return new Promise((function(i,o){var a=t.apply(n,e);function u(t){r(a,i,o,u,c,"next",t)}function c(t){r(a,i,o,u,c,"throw",t)}u(void 0)}))}}e("d3b7"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=i},3487:function(t,n,e){"use strict";var r=e("7808"),i=e.n(r);i.a},3745:function(t,n,e){var r=e("24fb");n=r(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.flex[data-v-7458a3a4]{display:flex;flex-direction:row}.uni-goods-nav[data-v-7458a3a4]{display:flex;flex:1;flex-direction:row}.uni-tab__cart-box[data-v-7458a3a4]{flex:1;height:%?100?%;background-color:#fff;z-index:900}.uni-tab__cart-sub-box[data-v-7458a3a4]{flex:1}.uni-tab__right[data-v-7458a3a4]{margin:5px 0;margin-right:10px;border-radius:100px;overflow:hidden}.uni-tab__cart-button-left[data-v-7458a3a4]{display:flex;flex:1;position:relative;justify-content:center;align-items:center;flex-direction:column}.uni-tab__icon[data-v-7458a3a4]{width:20px;height:20px}.image[data-v-7458a3a4]{width:20px;height:20px}.uni-tab__text[data-v-7458a3a4]{margin-top:3px;font-size:%?24?%;color:#666}.uni-tab__cart-button-right[data-v-7458a3a4]{display:flex;flex-direction:column;flex:1;justify-content:center;align-items:center}.uni-tab__cart-button-right-text[data-v-7458a3a4]{font-size:%?28?%;color:#fff}.uni-tab__cart-button-right[data-v-7458a3a4]:active{opacity:.7}.uni-tab__dot-box[data-v-7458a3a4]{display:flex;flex-direction:column;position:absolute;right:12px;top:4px;justify-content:center;align-items:center}.uni-tab__dot[data-v-7458a3a4]{padding:0 4px;line-height:15px;color:#fff;text-align:center;font-size:12px;background-color:red;border-radius:15px}.uni-tab__dots[data-v-7458a3a4]{padding:0 4px;border-radius:15px}.uni-tab__color-y[data-v-7458a3a4]{background-color:#ffa200}.uni-tab__color-r[data-v-7458a3a4]{background-color:red}',""]),t.exports=n},"55f4":function(t,n,e){"use strict";e.r(n);var r=e("c767"),i=e.n(r);for(var o in r)"default"!==o&&function(t){e.d(n,t,(function(){return r[t]}))}(o);n["default"]=i.a},"68a3":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r={name:"UniGoodsNav",props:{options:{type:Array,default:function(){return[{icon:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/dianpu.png",text:"店铺"},{icon:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/carts.png",text:"购物车"}]}},buttonGroup:{type:Array,default:function(){return[{text:"加入购物车",backgroundColor:"#ff0000",color:"#fff"},{text:"立即购买",backgroundColor:"#ffa200",color:"#fff"}]}},fill:{type:Boolean,default:!1}},methods:{onClick:function(t,n){this.$emit("click",{index:t,content:n})},buttonClick:function(t,n){uni.report&&uni.report(n.text,n.text),this.$emit("buttonClick",{index:t,content:n})}}};n.default=r},7808:function(t,n,e){var r=e("e2d3");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=e("4f06").default;i("ad1ec0e6",r,!0,{sourceMap:!1,shadowMode:!1})},"7b7d":function(t,n,e){"use strict";e.r(n);var r=e("68a3"),i=e.n(r);for(var o in r)"default"!==o&&function(t){e.d(n,t,(function(){return r[t]}))}(o);n["default"]=i.a},"882b":function(t,n,e){"use strict";var r;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return r}));var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"uni-goods-nav"},[e("v-uni-view",{staticClass:"uni-tab__seat"}),e("v-uni-view",{staticClass:"uni-tab__cart-box flex"},[e("v-uni-view",{staticClass:"flex uni-tab__cart-sub-box"},t._l(t.options,(function(n,r){return e("v-uni-view",{key:r,staticClass:"flex uni-tab__cart-button-left uni-tab__shop-cart",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick(r,n)}}},[e("v-uni-view",{staticClass:"uni-tab__icon"},[e("v-uni-image",{staticClass:"image",attrs:{src:n.icon,mode:"widthFix"}})],1),e("v-uni-text",{staticClass:"uni-tab__text"},[t._v(t._s(n.text))]),e("v-uni-view",{staticClass:"flex uni-tab__dot-box"},[n.info?e("v-uni-text",{staticClass:"uni-tab__dot ",class:{"uni-tab__dots":n.info>9}},[t._v(t._s(n.info))]):t._e()],1)],1)})),1),e("v-uni-view",{staticClass:"flex uni-tab__cart-sub-box ",class:{"uni-tab__right":t.fill}},t._l(t.buttonGroup,(function(n,r){return e("v-uni-view",{key:r,staticClass:"flex uni-tab__cart-button-right",style:{backgroundColor:n.backgroundColor,color:n.color},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.buttonClick(r,n)}}},[e("v-uni-text",{staticClass:"uni-tab__cart-button-right-text"},[t._v(t._s(n.text))])],1)})),1)],1)],1)},o=[]},"96cf":function(t,n){!function(n){"use strict";var e,r=Object.prototype,i=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag",s="object"===typeof t,f=n.regeneratorRuntime;if(f)s&&(t.exports=f);else{f=n.regeneratorRuntime=s?t.exports:{},f.wrap=y;var l="suspendedStart",d="suspendedYield",p="executing",h="completed",v={},g={};g[a]=function(){return this};var b=Object.getPrototypeOf,x=b&&b(b(N([])));x&&x!==r&&i.call(x,a)&&(g=x);var _=C.prototype=w.prototype=Object.create(g);k.prototype=_.constructor=C,C.constructor=k,C[c]=k.displayName="GeneratorFunction",f.isGeneratorFunction=function(t){var n="function"===typeof t&&t.constructor;return!!n&&(n===k||"GeneratorFunction"===(n.displayName||n.name))},f.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,C):(t.__proto__=C,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(_),t},f.awrap=function(t){return{__await:t}},L(E.prototype),E.prototype[u]=function(){return this},f.AsyncIterator=E,f.async=function(t,n,e,r){var i=new E(y(t,n,e,r));return f.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(_),_[c]="Generator",_[a]=function(){return this},_.toString=function(){return"[object Generator]"},f.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){while(n.length){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},f.values=N,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(R),!t)for(var n in this)"t"===n.charAt(0)&&i.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],n=t.completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(r,i){return u.type="throw",u.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],u=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=i.call(a,"catchLoc"),s=i.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=n,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),v},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),R(e),v}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var i=r.arg;R(e)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:N(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}}}function y(t,n,e,r){var i=n&&n.prototype instanceof w?n:w,o=Object.create(i.prototype),a=new P(r||[]);return o._invoke=j(t,e,a),o}function m(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(r){return{type:"throw",arg:r}}}function w(){}function k(){}function C(){}function L(t){["next","throw","return"].forEach((function(n){t[n]=function(t){return this._invoke(n,t)}}))}function E(t){function n(e,r,o,a){var u=m(t[e],t,r);if("throw"!==u.type){var c=u.arg,s=c.value;return s&&"object"===typeof s&&i.call(s,"__await")?Promise.resolve(s.__await).then((function(t){n("next",t,o,a)}),(function(t){n("throw",t,o,a)})):Promise.resolve(s).then((function(t){c.value=t,o(c)}),(function(t){return n("throw",t,o,a)}))}a(u.arg)}var e;function r(t,r){function i(){return new Promise((function(e,i){n(t,r,e,i)}))}return e=e?e.then(i,i):i()}this._invoke=r}function j(t,n,e){var r=l;return function(i,o){if(r===p)throw new Error("Generator is already running");if(r===h){if("throw"===i)throw o;return $()}e.method=i,e.arg=o;while(1){var a=e.delegate;if(a){var u=O(a,e);if(u){if(u===v)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(r===l)throw r=h,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r=p;var c=m(t,n,e);if("normal"===c.type){if(r=e.done?h:d,c.arg===v)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(r=h,e.method="throw",e.arg=c.arg)}}}function O(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,O(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=m(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function G(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function R(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(G,this),this.reset(!0)}function N(t){if(t){var n=t[a];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function n(){while(++r<t.length)if(i.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=e,n.done=!0,n};return o.next=o}}return{next:$}}function $(){return{value:e,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},ab23:function(t,n,e){"use strict";e.r(n);var r=e("882b"),i=e("7b7d");for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);e("1885");var a,u=e("f0c5"),c=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,"7458a3a4",null,!1,r["a"],a);n["default"]=c.exports},ad31:function(t,n,e){var r=e("3745");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=e("4f06").default;i("1afa297d",r,!0,{sourceMap:!1,shadowMode:!1})},ba08:function(t,n,e){"use strict";e.r(n);var r=e("1282"),i=e("55f4");for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);e("3487");var a,u=e("f0c5"),c=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,"34f0afb8",null,!1,r["a"],a);n["default"]=c.exports},c767:function(t,n,e){"use strict";var r=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("96cf");var i=r(e("1da1")),o=r(e("ab23")),a={data:function(){return{id:0,swipers:[],info:{},content:"",options:[{icon:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/kefu.png",text:"客服"},{icon:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/dianpu.png",text:"店铺"},{icon:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/carts.png",text:"购物车",info:12}],buttonGroup:[{text:"加入购物车",backgroundColor:"#ff0000",color:"#fff"},{text:"立即购买",backgroundColor:"#ffa200",color:"#fff"}]}},methods:{getSwipers:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$myRuquest({url:"/api/getthumimages/"+t.id});case 2:e=n.sent,t.swipers=e.data.message;case 4:case"end":return n.stop()}}),n)})))()},getDetailInfo:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$myRuquest({url:"/api/goods/getinfo/"+t.id});case 2:e=n.sent,t.info=e.data.message[0];case 4:case"end":return n.stop()}}),n)})))()},getDetailContent:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$myRuquest({url:"/api/goods/getdesc/"+t.id});case 2:e=n.sent,t.content=e.data.message[0].content;case 4:case"end":return n.stop()}}),n)})))()},onClick:function(t){console.log(t)},buttonClick:function(t){console.log(t)}},onLoad:function(t){this.id=t.id,this.getSwipers(),this.getDetailInfo(),this.getDetailContent()},components:{uniGoodsNav:o.default}};n.default=a},e2d3:function(t,n,e){var r=e("24fb");n=r(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.goods_detail uni-swiper[data-v-34f0afb8]{height:%?700?%}.goods_detail uni-swiper uni-image[data-v-34f0afb8]{width:100%;height:100%}.goods_detail .box1[data-v-34f0afb8]{padding:10px}.goods_detail .box1 .price[data-v-34f0afb8]{font-size:%?35?%;color:#b50e03;line-height:%?80?%}.goods_detail .box1 .price uni-text[data-v-34f0afb8]:nth-child(2){color:#ccc;font-size:%?28?%;text-decoration:line-through;margin-left:%?20?%}.goods_detail .box1 .goods_name[data-v-34f0afb8]{font-size:%?32?%;line-height:%?60?%}.goods_detail .box2[data-v-34f0afb8]{padding:0 10px;font-size:%?32?%;line-height:%?70?%}.goods_detail .box3[data-v-34f0afb8]{padding-bottom:50px}.goods_detail .box3 .tit[data-v-34f0afb8]{font-size:%?32?%;padding-left:10px;border-bottom:1px solid #eee;line-height:%?70?%}.goods_detail .box3 .content[data-v-34f0afb8]{padding:10px;font-size:%?28?%;color:#333;line-height:%?50?%}.goods_nav[data-v-34f0afb8]{position:fixed;bottom:0;width:100%}.line[data-v-34f0afb8]{height:%?10?%;width:%?750?%;background:#eee}',""]),t.exports=n}}]);