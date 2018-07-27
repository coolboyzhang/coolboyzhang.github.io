webpackJsonp([7],{"./app/containers/Info/index.js":function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function a(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}function l(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function i(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function f(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}function s(e){return{dispatch:e}}Object.defineProperty(n,"__esModule",{value:!0});var c=t("./node_modules/react/index.js"),u=t.n(c),d=(t("./node_modules/prop-types/index.js"),t("./node_modules/react-redux/es/index.js")),b=t("./node_modules/react-helmet/lib/Helmet.js"),p=t("./node_modules/redux/es/index.js"),g=t("./node_modules/antd/lib/index.js"),h=[{reg:/\*\*\s(.+)\s\*\*/g,del:["** "," **"],before:"<b>",after:"</b>"},{reg:/\*\s(.+)\s\*/g,del:["* "," *"],before:"<i>",after:"</i>"},{reg:/`([^`]+)`/g,del:["` "," `"],before:'<code style="background: rgb(255, 241, 232);">',after:"</code>"},{reg:/##b\s(.+)\sb##/g,del:["##b "," b##"],before:"<b>",after:"</b>"},{reg:/##red\s(.+)\sred##/g,del:["##red "," red##"],before:'<span class="fc_red">',after:"</span>"},{reg:/##blue\s(.+)\sblue##/g,del:["##blue "," blue##"],before:'<span class="fc_blue">',after:"</span>"},{reg:/##orange\s(.+)\sorange##/g,del:["##orange "," orange##"],before:'<span class="fc_orange">',after:"</span>"},{reg:/##green\s(.+)\sgreen##/g,del:["##green "," green##"],before:'<span class="fc_green">',after:"</span>"},{reg:/~~\s(.+)(\s~~)/g,del:["~~ "," ~~"],before:'<span style="text-decoration: line-through">',after:"</span>"},{reg:/__\s(.+)\s__/g,del:["__ "," __"],before:'<span style="text-decoration: underline">',after:"</span>"},{reg:/##a\s(.+)\sa##/g,del:["##a "," a##"],before:'<a class="fc_blue" href="RESULT" target="_blank">',after:"</a>"},{reg:/######\s(.+)(\n|$)/g,del:["###### "],before:"<h6>",after:"</h6>"},{reg:/#####\s(.+)(\n|$)/g,del:["##### "],before:"<h5>",after:"</h5>"},{reg:/####\s(.+)(\n|$)/g,del:["#### "],before:"<h4>",after:"</h4>"},{reg:/###\s(.+)(\n|$)/g,del:["### "],before:"<h3>",after:"</h3>"},{reg:/##\s(.+)(\n|$)/g,del:["## "],before:"<h2>",after:"</h2>"},{reg:/#\s(.+)(\n|$)/g,del:["# "],before:"<h1>",after:"</h1>"}],y=h,v=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,t,r,o){var a=n&&n.defaultProps,l=arguments.length-3;if(t||0===l||(t={}),t&&a)for(var i in a)void 0===t[i]&&(t[i]=a[i]);else t||(t=a||{});if(1===l)t.children=o;else if(l>1){for(var f=Array(l),s=0;s<l;s++)f[s]=arguments[s+3];t.children=f}return{$$typeof:e,type:n,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}}(),_=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),m=g.Input.TextArea,w="记事本语法的写法上与markdown有一定的相似之处，因为本身就是在模仿着markdown的语法做的，不过像序列、分割线、代码区块等功能尚未实现TAT，具体已实现的方法可以参考下面：\n\n删除：~~ abc ~~\n下划线； __ abc __\n链接： ##a //jsososo.github.io/person-web/#/ a##\n代码：   `code`\n加粗：   ** 加粗 **\n加粗：   ##b 加粗 b##\n斜体：   * 倾斜 *\n标题h1： # abcdefg\n标题h2： ## abcdefg\n标题h3： ### abcdefg\n标题h4： #### abcdefg\n标题h5： ##### abcdefg\n标题h6： ###### abcdefg\n红色：   ##red 红色 red##\n蓝色：   ##blue 蓝色 blue##\n橙色：   ##orange 橙色 orange## \n\n\n注意：\n\n1、目前所有的效果均为单行有效，回车后无效，自动分行依旧游侠哦，如下：\n  ~~ 很长的一段文字很长的一段文字很长的一段文字很长的一段文字很长的一段文字很长的一段文字很长的一段文字 ~~\n  ~~ 很长的一段文字很长的一段文字很长的一段文字很长的一段文字\n  很长的一段文字很长的一段文字很长的一段文字很长的一段文字 ~~\n  \n2、部分语法一定需要空格，不能漏\n ",j=v("h2",{className:"fc_666 mb_10"},void 0,"记事本语法说明"),x=v("div",{className:"mb_20"},void 0,"可以在下方的输入框内自由编辑体验效果"),k=function(e){function n(e){r(this,n);var t=o(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={txtValue:w},t}return a(n,e),_(n,[{key:"componentDidMount",value:function(){this.replaceTxt()}},{key:"componentDidUpdate",value:function(){this.replaceTxt()}},{key:"replaceTxt",value:function(){if(!this.state.edit){var e=document.getElementById("info-notebook-pre"),n=e.innerText;y.forEach(function(e){var t=n.match(e.reg);t&&t.length&&t.forEach(function(t){var r=t;e.del.forEach(function(e){r=r.replace(e,"")}),n=n.replace(t,""+e.before.replace("RESULT",r)+r+e.after)})}),e.innerHTML=n}}},{key:"render",value:function(){var e=this,n=this.state.txtValue;return v("div",{},void 0,j,x,v("div",{style:{width:"100%"}},void 0,v("div",{className:"inline-block",style:{width:"50%"}},void 0,v(m,{autosize:{minRows:6},value:n,onChange:function(n){return e.setState({txtValue:n.target.value})}})),v("pre",{id:"info-notebook-pre",className:"inline-block vat pl_20 pt_5",style:{width:"50%"}},void 0,n)))}}]),n}(u.a.Component),O=k;t.d(n,"Info",function(){return $});var T=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,t,r,o){var a=n&&n.defaultProps,l=arguments.length-3;if(t||0===l||(t={}),t&&a)for(var i in a)void 0===t[i]&&(t[i]=a[i]);else t||(t=a||{});if(1===l)t.children=o;else if(l>1){for(var f=Array(l),s=0;s<l;s++)f[s]=arguments[s+3];t.children=f}return{$$typeof:e,type:n,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}}(),E=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),P=T(b.Helmet,{},void 0,T("title",{},void 0,"一些说明"),T("meta",{name:"jsososo",content:"一些说明情况"})),S=T(O,{}),$=function(e){function n(){return l(this,n),i(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return f(n,e),E(n,[{key:"render",value:function(){var e=this.props.location;return T("div",{},void 0,P,"/info/notebook"===e.pathname&&S)}}]),n}(u.a.PureComponent),C=Object(d.b)(null,s);n.default=Object(p.c)(C)($)}});