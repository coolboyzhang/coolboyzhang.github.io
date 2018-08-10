webpackJsonp([10],{"./app/containers/Notebook/index.js":function(e,t,n){"use strict";function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments[1];switch(t.type){case x:return e;case P:return e.set("list",Object(E.fromJS)(t.data));case J:return e.set("tagsBmob",Object(E.fromJS)(t.data||{})).set("tags",Object(E.fromJS)(t.data?t.data.notebook:[]));case A:var n=C.a.get("user").split("-")[0];return C.a.set("p_n_select_tags_"+n,t.data||[],!0),e.set("sTags",Object(E.fromJS)(t.data||[]));default:return e}}function r(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},q,this)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function f(e){return{type:P,data:e}}function p(e){return{type:A,data:e}}function d(e){return{type:J,data:e}}function m(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function h(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function g(e){return{updateNotebook:function(t){return e(f(t))},selectTags:function(t){return e(p(t))},changeTags:function(t){return e(d(t))}}}Object.defineProperty(t,"__esModule",{value:!0});var y=n("./node_modules/react/index.js"),k=n.n(y),_=(n("./node_modules/prop-types/index.js"),n("./node_modules/react-redux/es/index.js")),j=n("./node_modules/react-helmet/lib/Helmet.js"),O=n("./node_modules/reselect/es/index.js"),N=n("./node_modules/redux/es/index.js"),T=n("./app/utils/injectSaga.js"),w=n("./app/utils/injectReducer.js"),S=function(e){return e.get("notebook")},I=function(){return Object(O.a)(S,function(e){return e.toJS()})},B=I,E=n("./node_modules/immutable/dist/immutable.js"),C=n("./app/utils/Storage.js"),x="app/Notebook/DEFAULT_ACTION",P="app/Notebook/UPDATE_NOTEBOOK",A="app/Notebook/SELECT_TAGS",J="app/Notebook/CHANGE_TAGS",R=Object(E.fromJS)({list:[],tags:[],sTags:[],tagsBmob:{}}),H=o,q=regeneratorRuntime.mark(r),U=n("./node_modules/antd/lib/index.js"),D=n("./app/utils/timer.js"),M=n("./app/utils/stringHelper.js"),Y=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var s in i)void 0===n[s]&&(n[s]=i[s]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+3];n.children=c}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),$=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),L=function(e){function t(){return i(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),$(t,[{key:"render",value:function(){var e=this,t=this.props.info;return Y("div",{className:"inline-block vat",style:{width:"20%",margin:"10px 2.5%"}},void 0,Y(U.Card,{onClick:function(){window.location="#/kit/notebook/detail/?id="+e.props.info.objectId},title:t.title||"无题",hoverable:!0},void 0,Y("div",{style:{minHeight:"100px",wordBreak:"break-all"}},void 0,t.content?Object(M.d)(t.content,57):"啥都没有。。。"),Y("div",{className:"pull-right ft_12 fc_999"},void 0,"上次编辑时间：",Object(D.a)(t.lastEdit).str("YY-M-D HH:mm:ss"))))}}]),t}(k.a.PureComponent),z=L,W=n("./app/utils/arrayHelper.js"),G=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var s in i)void 0===n[s]&&(n[s]=i[s]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+3];n.children=c}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),F=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),K=U.Input.TextArea,Q=U.Select.Option,V=G("a",{href:"#/kit/notebook/"},void 0,G(U.Icon,{type:"arrow-left",className:"pointer ft_20 mr_10 mt_5 vat"})),X=function(e){function t(e){c(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={tags:e.tags,edit:e.edit,editInfo:JSON.parse(JSON.stringify(e.info))},n}return l(t,e),F(t,[{key:"componentWillReceiveProps",value:function(e){e.tags.length===this.state.tags?this.setState({edit:e.edit,editInfo:JSON.parse(JSON.stringify(e.info))}):this.setState({tags:e.tags})}},{key:"changeInfo",value:function(e,t){var n=this.props.tags,o=this.state.editInfo;if(o[t]=e,"tags"===t){var r=W.a.delDuplicate(n,e);r.length>n.length&&this.props.updateTags(r)}this.setState({editInfo:o})}},{key:"changeEdit",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(t){var n=this,o=function(){U.message.success("保存成功~"),n.changeEdit(e,!1)};this.props.saveChange(this.state.editInfo,o)}Object(M.a)({edit:!e}),this.setState({edit:!e,editInfo:t?this.state.editInfo:JSON.parse(JSON.stringify(this.props.info))})}},{key:"delNote",value:function(){var e=this;U.Modal.confirm({title:"删除",content:"确定要删除"+this.props.info.title+"？",okText:"确认",cancelText:"取消",onOk:function(){e.props.delNote(e.props.info.objectId)}})}},{key:"render",value:function(){var e=this,t=this.props.info,n=this.state,o=n.edit,r=n.editInfo,i=n.tags;return G("div",{},void 0,G("div",{className:"title mb_15"},void 0,G("span",{className:"ft_18"},void 0,o?G("div",{},void 0,G(U.Input,{style:{width:"300px",fontSize:"18px"},className:"inline-block",size:"large",onChange:function(t){return e.changeInfo(t.target.value,"title")},value:r.title}),G(U.Tooltip,{placement:"top",title:"要不要标为重要"},void 0,G(U.Icon,{type:r.star?"star":"star-o",className:"ml_20 pointer",style:{color:r.star?"#ffcc00":"#999",fontSize:"40"},onClick:function(){return e.changeInfo(!r.star,"star")}}))):G("span",{},void 0,V,t.title||"无题")),G("span",{className:"pull-right"},void 0,G(U.Button,{type:"primary",onClick:function(){return e.changeEdit(o,o)},className:"mr_10"},void 0,o?"保存":"编辑"),o?G("div",{className:"inline-block"},void 0,G(U.Button,{type:"primary",className:"mr_10",onClick:function(){return e.changeEdit(!1,!0)}},void 0,"暂存"),G(U.Button,{onClick:function(){return e.changeEdit(o,!1)}},void 0,"取消")):G(U.Button,{type:"danger",onClick:function(){return e.delNote()}},void 0,"删除"))),o?G("div",{},void 0,"标签：",G(U.Select,{className:"mr_20",style:{minWidth:"200px"},value:r.tags,mode:"tags",placeholder:"Select tags",onChange:function(t){return e.changeInfo(t,"tags")}},void 0,i.map(function(e){return G(Q,{value:e},"tag-o-"+e,e)})),"(tips: 也可以直接在输入框中新增一个标签)"):0!==t.tags.length&&G("div",{className:"mt_20 ft_12"},void 0,"标签：",t.tags.join(", ")),G("div",{className:"info-content mt_20 pt_20",style:{borderTop:"1px solid #ccc"}},void 0,o?G(K,{placeholder:"markdown语法～",autosize:{minRows:6},value:r.content,onChange:function(t){return e.changeInfo(t.target.value,"content")}}):G("div",{id:"notebook-pre"},void 0,G("div",{className:"markdown-content",dangerouslySetInnerHTML:{__html:Object(M.c)(r.content)}})||"啥也没有。。。")),G("div",{className:"pull-right ft_12 fc_999 text-right mt_20"},void 0,G("div",{},void 0,"创建时间：",Object(D.a)(t.createTime).str("YY-M-D HH:mm:ss")),G("div",{},void 0,"上次编辑时间：",Object(D.a)(t.lastEditTime).str("YY-M-D HH:mm:ss"))))}}]),t}(k.a.Component),Z=X,ee=n("./app/utils/recentlyUsed.js"),te=n("./app/containers/App/selectors.js"),ne=n("./app/containers/App/index.js");n.d(t,"Notebook",function(){return ue});var oe=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var s in i)void 0===n[s]&&(n[s]=i[s]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+3];n.children=c}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),re=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},ie=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),ae=U.Select.Option,se=oe(j.Helmet,{},void 0,oe("title",{},void 0,"记事本"),oe("meta",{name:"记事本",content:"记事本"})),ce=oe(U.Icon,{type:"arrow-left",className:"pointer ft_20 mr_20 mt_5 vat"}),ue=function(e){function t(){return v(this,t),b(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return h(t,e),ie(t,[{key:"componentWillMount",value:function(){Object(ne.a)("记事本")?(this.queryNoteBooks(),this.queryAllTags(),ee.a.set("记事本","kit",this.props.user.username)):this.props.updateNotebook([])}},{key:"componentDidMount",value:function(){var e=this.props.user,t=C.a.get("p_n_select_tags_"+e.username,!0,"[]");this.props.selectTags(t)}},{key:"queryNoteBooks",value:function(e){var t=this,n=this.props.user;C.a.queryBmob("Notebook",function(e){return e.equalTo("author",n.username),e.limit(1e3),e},function(n){var o=n||[];o.sort(function(e,t){return Boolean(t.star)!==Boolean(e.star)?Boolean(t.star)-Boolean(e.star):t.lastEdit-e.lastEdit}),t.props.updateNotebook(o.map(function(e){return re({},e,{title:decodeURI(decodeURI(e.title)),content:decodeURI(decodeURI(e.content))})})),e&&e()},function(){U.message.error("找着找着就出问题了 = =||")},"find")}},{key:"createNote",value:function(){var e=this,t=this.props.user;C.a.createBmob("Notebook",{author:t.username,created:Object(D.a)().time,lastEdit:Object(D.a)().time,title:"",content:"",tags:[]},function(t){e.queryNoteBooks(function(){window.location="#/kit/notebook/detail/?id="+t.id+"&edit=true"})},function(){U.message.error("创建失败 = =||")})}},{key:"queryAllTags",value:function(){var e=this,t=this.props.user;C.a.queryBmob("Tags",function(e){return e.equalTo("username",t.username),e},function(t){e.props.changeTags(t)})}},{key:"updateTags",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){return U.message.success("新增成功~")},o=this.props,r=o.user,i=o.notebook,a=i.tagsBmob,s={username:r.username,notebook:e},c=function(){t.queryAllTags(),n()};a.objectId?C.a.setBmob("Tags",a.objectId,s,c):C.a.createBmob("Tags",s,c)}},{key:"saveChange",value:function(e,t){var n=this,o=re({},JSON.parse(JSON.stringify(e)),{lastEdit:Object(D.a)().time,title:encodeURI(encodeURI(e.title)),content:encodeURI(encodeURI(e.content))});C.a.setBmob("Notebook",e.objectId,o,function(){return n.queryNoteBooks(t)},function(){return U.message.error("保存出问题了呀")})}},{key:"delNote",value:function(e){var t=this;C.a.delBmob("Notebook",e,function(){return t.queryNoteBooks(function(){return window.location="#/kit/notebook"})},function(){return U.message.error("删除出错啦")})}},{key:"clearTags",value:function(){var e=this,t=this.props.user,n=[];this.props.notebook.list.forEach(function(e){return n=[].concat(m(n),m(e.tags))}),n=W.a.delDuplicate(n),this.updateTags(n,function(){U.message.success("已清空空标签~"),e.props.selectTags(W.a.getDuplicate(n,C.a.get("p_n_select_tags_"+t.username,!0,"[]")))})}},{key:"render",value:function(){var e=this,t=this.props,n=t.location,o=t.notebook,r=t.selectTags,i="/kit/notebook/detail/"!==n.pathname,a={},s=!1;if(!i){var c=Object(M.b)();a=o.list.find(function(e){return e.objectId===c.id}),a?s=!!c.edit&&JSON.parse(c.edit):i=!0}var u=o.sTags.length>0?o.list.filter(function(e){return W.a.hasDuplicate(e.tags,o.sTags)}):o.list;return oe("div",{},void 0,se,oe("div",{},void 0,i&&oe("div",{},void 0,oe("a",{href:"#/kit/",style:{marginLeft:"2.5%"}},void 0,ce),oe(U.Button,{type:"primary",onClick:function(){return e.createNote()}},void 0,"新建"),oe("div",{className:"inline-block"},void 0,oe(U.Select,{value:o.sTags,className:"ml_20",style:{minWidth:"200px"},mode:"tags",placeholder:"Select tags",onChange:r},void 0,o.tags.map(function(e){return oe(ae,{value:e},"tag-o-"+e,e)})),oe(U.Button,{className:"ml_5",onClick:function(){return e.clearTags()},type:"danger"},void 0,"清空空标签")),0===u.length&&oe("div",{className:"mt_20",style:{marginLeft:"2.5%"}},void 0,"啥也没有，还不快去记笔记"),oe("div",{className:"mt_15"},void 0,u.map(function(e){return oe(z,{info:e},"nb-"+e.objectId)}))),!i&&oe(Z,{edit:s,tags:o.tags||[],updateTags:function(t){return e.updateTags(t)},delNote:function(t){return e.delNote(t)},saveChange:function(t){return e.saveChange(t)},info:a})))}}]),t}(k.a.PureComponent),le=Object(O.b)({notebook:B(),user:Object(te.b)()}),fe=Object(_.b)(le,g),pe=Object(w.a)({key:"notebook",reducer:H}),de=Object(T.a)({key:"notebook",saga:r});t.default=Object(N.c)(pe,de,fe)(ue)}});