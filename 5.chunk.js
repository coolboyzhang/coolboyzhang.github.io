webpackJsonp([5],{"./app/components/TodoList/index.scss":function(t,e,n){var o=n("./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./app/components/TodoList/index.scss");"string"==typeof o&&(o=[[t.i,o,""]]);var r={};r.transform=void 0;n("./node_modules/style-loader/lib/addStyles.js")(o,r);o.locals&&(t.exports=o.locals)},"./app/containers/Todo/index.js":function(t,e,n){"use strict";function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,e=arguments[1];switch(e.type){case L:return t;case E:return t.set("list",Object(C.fromJS)(e.data));default:return t}}function r(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},R,this)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function d(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function f(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function m(t){return{type:E,data:t}}function v(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function y(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function b(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function g(t){return{queryList:function(e){return t(m(e))}}}Object.defineProperty(e,"__esModule",{value:!0});var T=n("./node_modules/react/index.js"),j=n.n(T),_=(n("./node_modules/prop-types/index.js"),n("./node_modules/react-redux/es/index.js")),w=n("./node_modules/react-helmet/lib/Helmet.js"),O=n("./node_modules/reselect/es/index.js"),k=n("./node_modules/redux/es/index.js"),S=n("./app/utils/injectSaga.js"),I=n("./app/utils/injectReducer.js"),x=function(t){return t.get("todo")},A=function(){return Object(O.a)(x,function(t){return t.toJS()})},N=A,P=n("./app/containers/App/selectors.js"),C=n("./node_modules/immutable/dist/immutable.js"),L="app/Todo/DEFAULT_ACTION",E="app/Todo/QUERY_LIST",q=Object(C.fromJS)({list:[]}),B=o,R=regeneratorRuntime.mark(r),D=n("./app/utils/Storage.js"),J=n("./node_modules/antd/lib/index.js"),$=n("./app/utils/stringHelper.js"),M=function(){var t="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(e,n,o,r){var i=e&&e.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var s in i)void 0===n[s]&&(n[s]=i[s]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var u=Array(a),l=0;l<a;l++)u[l]=arguments[l+3];n.children=u}return{$$typeof:t,type:e,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),Y=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),H=M(J.Icon,{type:"down"}),U=M(J.Icon,{type:"right"}),W=function(t){function e(t){i(this,e);var n=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.state={status:t.thing.status},n}return s(e,t),Y(e,[{key:"changeThing",value:function(t,e){var n=this.props,o=n.thing,r=n.updateThing;o[t]=e,r(o)}},{key:"render",value:function(){var t=this,n=this.props,o=n.thing,r=n.list,i=n.updateThing,a=n.noBorder,s=n.updateStatus,u=r.filter(function(t){return t.parent===o.objectId})||[],l=Object($.b)("id");return M("div",{className:"pt_10 todo-list-item "+(a?"no-border":"")},void 0,M("div",{},void 0,M("div",{className:"inline-block title-align vat pointer",onClick:function(){return i(o.objectId,{showChildren:!o.showChildren})}},void 0,u.length>0&&o.showChildren&&H,u.length>0&&!o.showChildren&&U),M("a",{href:"#/kit/todo?id="+o.objectId+"&edit=0",className:l===o.objectId?"fc_orange":"no-selected"},void 0,M("span",{className:"vat status-"+o.status},void 0,""!==o.title?o.title:"名字被吃了")),M(J.Slider,{onChange:function(e){return t.setState({status:e})},onAfterChange:function(){return s(t.state.status,o.objectId)},className:"inline-block vat ml_20",tipFormatter:function(t){return["还没呢","在做了","早好了"][t]},style:{width:"40px",margin:"5px"},min:0,max:2,step:1,value:o.status})),o.showChildren&&u.map(function(t){return M(e,{updateThing:i,updateStatus:s,list:r,thing:t},t.objectId)}))}}]),e}(j.a.Component),F=W,z=n("./node_modules/moment/src/moment.js"),Q=n("./app/utils/timer.js"),G=function(){var t="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(e,n,o,r){var i=e&&e.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var s in i)void 0===n[s]&&(n[s]=i[s]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var u=Array(a),l=0;l<a;l++)u[l]=arguments[l+3];n.children=u}return{$$typeof:t,type:e,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),K=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),V=J.Input.TextArea,X=function(t){function e(t){u(this,e);var n=l(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.state={editInfo:JSON.parse(JSON.stringify(t.thing))},n}return c(e,t),K(e,[{key:"componentWillReceiveProps",value:function(t){this.setState({editInfo:JSON.parse(JSON.stringify(t.thing))})}},{key:"changeEditInfo",value:function(t,e){var n=this.state.editInfo;n[e]=t,"startTime"===e&&t&&n.endTime&&n.endTime<t&&(n.endTime=t),"endTime"===e&&t&&n.startTime&&n.startTime>t&&(n.startTime=t),this.setState({editInfo:n})}},{key:"save",value:function(){var t=this,e=this.state.editInfo;e.time=e.startTime,this.props.updateThing(e.objectId,e,function(){t.props.queryAllList(),Object($.a)({edit:0})})}},{key:"delThing",value:function(){var t=this.props,e=t.thing,n=t.delThing;J.Modal.confirm({content:"确认删除这个任务以及下面的子任务？",cancelText:"别呀",okText:"删掉",onOk:function(){return n(e.objectId)}})}},{key:"render",value:function(){var t=this,e=this.props,n=e.thing,o=e.edit,r=e.createNewTodo,i=this.state.editInfo;return G("div",{className:"todo-detail"},void 0,G("b",{className:"title ft_16 fc_999"},void 0,o?G(J.Input,{style:{width:"300px"},value:i.title,onChange:function(e){return t.changeEditInfo(e.target.value,"title")}}):G("span",{className:"inline-block",style:{maxWidth:"300px",wordBreak:"break-all"}},void 0,n.title||"名字被吃掉了"),o?G("div",{className:"pull-right"},void 0,G(J.Button,{type:"primary",className:"mr_10",onClick:function(){return t.save()}},void 0,"保存"),G(J.Button,{className:"mr_10",onClick:function(){return Object($.a)({edit:0})}},void 0,"取消")):G("div",{className:"pull-right"},void 0,G(J.Button,{type:"primary",onClick:function(){return r(n.objectId)},className:"mr_10"},void 0,"新建子任务"),G(J.Button,{type:"primary",className:"mr_10",onClick:function(){return Object($.a)({edit:1})}},void 0,"编辑"),G(J.Button,{type:"danger",className:"mr_10",onClick:function(){return t.delThing()}},void 0,"删除"))),o?G("div",{className:"mt_10"},void 0,G("span",{},void 0,"开始时间：",G(J.DatePicker,{showToday:!1,disabledDate:function(t){return i.endTime&&t&&i.endTime<t._d.getTime()},value:i.startTime?Object(z.default)(i.startTime):null,onChange:function(e){return t.changeEditInfo(e&&e._d.getTime(),"startTime")}})),G("span",{className:"ml_20"},void 0,"结束时间：",G(J.DatePicker,{showToday:!1,disabledDate:function(t){return i.startTime&&t&&i.startTime>t._d.getTime()},value:i.endTime?Object(z.default)(i.endTime):null,onChange:function(e){return t.changeEditInfo(e&&e._d.getTime(),"endTime")}})),G("span",{className:"ml_20"},void 0,"里程碑：",G(J.Switch,{checked:i.milestone,onChange:function(e){return t.changeEditInfo(e,"milestone")}}))):G("div",{className:"mt_10"},void 0,G("span",{},void 0,"开始时间：",n.startTime?Object(Q.a)(n.startTime).str():"-- --"),G("span",{className:"ml_20"},void 0,"结束时间：",n.endTime?Object(Q.a)(n.endTime).str():"-- --")),o?G("div",{className:"mt_10"},void 0,G(V,{autosize:{minRows:4},value:i.content,onChange:function(e){return t.changeEditInfo(e.target.value,"content")}})):G("div",{className:"markdown-content mt_15",dangerouslySetInnerHTML:{__html:Object($.c)(n.content)}}))}}]),e}(j.a.Component),Z=X,tt=(n("./app/components/TodoList/index.scss"),function(){var t="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(e,n,o,r){var i=e&&e.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var s in i)void 0===n[s]&&(n[s]=i[s]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var u=Array(a),l=0;l<a;l++)u[l]=arguments[l+3];n.children=u}return{$$typeof:t,type:e,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}()),et=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),nt=tt("div",{className:"fc_666 mt_20"},void 0,"没有事咯"),ot=function(t){function e(t){f(this,e);var n=p(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.state={selected:0},n}return h(e,t),et(e,[{key:"getThing",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.props.list,o=n.find(function(e){return e.objectId===t});return e&&o?o[e]:o}},{key:"updateAll",value:function(t,e){var n=this,o=t.length;t.forEach(function(t){n.props.updateThing(t.objectId,e,function(){--o||n.props.queryAllList()})})}},{key:"updateStatus",value:function(t,e){if(1===t){var n=this.findAllParent([],e,function(t){return 1===t.status}).filter(function(t){return 1!==t.status});this.updateAll(n,{status:1})}else this.updateAll(this.findLimitedParent(e,t),{status:1}),this.props.updateThing(e,{status:t}),this.updateAll(this.findAllChildren(e),{status:t})}},{key:"changeStatus",value:function(t,e){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.props.list).map(function(n){return t.indexOf(n.id)>-1&&(n.status=e),n})}},{key:"findLimitedParent",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=this.getThing(t,"parent"),r=this.getThing(o);return r&&1!==r.status&&r.status!==e?(n.push(r),this.findLimitedParent(r.objectId,e,n)):n}},{key:"findAllChildren",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!t)return[];var o=this.getThing(t),r=[];return o&&o.children.length>0&&o.children.forEach(function(t){n?r.push(t):r.push(e.getThing(t)),r=[].concat(d(r),d(e.findAllChildren(t)))}),r}},{key:"findAllParent",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){return!1},o=this.getThing(e);return t.push(o),n(o)?t:""!==o.parent?this.findAllParent(t,o.parent):t}},{key:"delThing",value:function(t){var e=this,n=this.props.updateThing,o=this.getThing(t),r=this.getThing(o.parent),i=this.findAllChildren(t,!0);i.push(t);var a=0;i.forEach(function(o){D.a.delBmob("Thing",o,function(){if(++a===i.length&&(e.props.queryAllList(),r)){var o=r.children.filter(function(e){return e!==t});n(r.objectId,{children:o}),Object($.a)({edit:0})}})})}},{key:"delCalendarThing",value:function(t,e){if(t){var n=D.a.get("p_c_list",!0,"{}"),o=Object(Q.a)(t).str("YYYYMMDD");n[o]&&(n[o]=n[o].filter(function(t){return t.id!==e}),D.a.set("p_c_list",n,!0))}}},{key:"render",value:function(){var t=this,e=this.props,n=e.list,o=e.createNewTodo,r=e.updateThing,i=e.queryAllList,a=n.filter(function(t){return""===t.parent})||[],s=Object($.b)(),u=n.find(function(t){return t.objectId===s.id}),l=Boolean(Number(s.edit));return tt("div",{},void 0,0===a.length&&nt,tt("div",{className:"todo-list"},void 0,a.map(function(e){return tt(F,{noBorder:!0,updateThing:r,list:n,thing:e,updateStatus:function(e,n){return t.updateStatus(e,n)}},e.objectId)})),u&&tt(Z,{updateThing:r,queryAllList:i,thing:u,edit:l,delThing:function(e){return t.delThing(e)},delCalendarThing:function(e,n){return t.delCalendarThing(e,n)},createNewTodo:o,updateStatus:function(e,n){return t.updateStatus(e,n)}}))}}]),e}(j.a.Component),rt=ot,it=n("./app/utils/recentlyUsed.js"),at=n("./app/containers/App/index.js");n.d(e,"Todo",function(){return ft});var st=function(){var t="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(e,n,o,r){var i=e&&e.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var s in i)void 0===n[s]&&(n[s]=i[s]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var u=Array(a),l=0;l<a;l++)u[l]=arguments[l+3];n.children=u}return{$$typeof:t,type:e,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),ut=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},lt=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),ct=st(w.Helmet,{},void 0,st("title",{},void 0,"计划链"),st("meta",{name:"jsososo",content:"计划链"})),dt=st("a",{href:"#/kit/"},void 0,st(J.Icon,{type:"arrow-left",className:"pointer ft_20 mr_20 mt_5 vat"})),ft=function(t){function e(){return v(this,e),y(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return b(e,t),lt(e,[{key:"componentDidMount",value:function(){Object(at.a)("任务链")&&(it.a.set("任务链","kit",this.props.user.username),this.queryAllList())}},{key:"componentWillReceiveProps",value:function(t){t.user.objectId&&t.user.objectId!==this.props.user.objectId&&this.queryAllList(!0,t.user)}},{key:"queryAllList",value:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.props.user;D.a.queryBmob("Thing",function(t){return t.equalTo("isTodo",!0),t.equalTo("user",n.username||"游客"),t.limit(1e3),t},function(n){e&&(n.sort(function(t,e){return 2===t.status&&2!==e.status?1:1===t.status&&1!==e.status?-1:2!==t.status&&2===e.status?-1:1!==t.status&&1===e.status?1:void 0}),t.props.queryList(n))},function(){J.message.error("查询失败了 = =")},"find")}},{key:"createNewTodo",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=this.props.user;D.a.createBmob("Thing",{user:n.username,time:0,startTime:0,endTime:0,isTodo:!0,milestone:!1,notice:!1,title:"",content:"",parent:e,children:[],showChildren:!0,status:0},function(n){Object($.a)({id:n.id,edit:1}),e?t.updateParentStatusTo1(e,n.id):t.queryAllList()})}},{key:"updateParentStatusTo1",value:function(t,e){var n=this;if(!t)return void this.queryAllList();var o=this.props.todo,r=o.list.find(function(e){return e.objectId===t});e||2===r.status?(e&&r.children.push(e),2===r.status&&(r.status=2===r.status?1:r.status),this.updateThing(r.objectId,r,function(){return n.updateParentStatusTo1(r.parent)})):this.updateParentStatusTo1(r.parent)}},{key:"updateThing",value:function(t,e){var n=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){return n.queryAllList()};if(!t)return void this.queryAllList();var r=this.props.todo,i=r.list.find(function(e){return e.objectId===t});D.a.setBmob("Thing",t,ut({},i,e),o,function(){J.message.error("失败了= =")})}},{key:"render",value:function(){var t=this,e=this.props.todo,n=e.list;return st("div",{},void 0,ct,st("div",{},void 0,dt,st(J.Button,{type:"primary",onClick:function(){return t.createNewTodo()}},void 0,"添加一个新计划"),st(rt,{list:n,queryAllList:function(){return t.queryAllList()},createNewTodo:function(e){return t.createNewTodo(e)},updateThing:function(e,n,o){return t.updateThing(e,n,o)}})))}}]),e}(j.a.PureComponent),pt=Object(O.b)({todo:N(),user:Object(P.b)()}),ht=Object(_.b)(pt,g),mt=Object(I.a)({key:"todo",reducer:B}),vt=Object(S.a)({key:"todo",saga:r});e.default=Object(k.c)(mt,vt,ht)(ft)},"./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./app/components/TodoList/index.scss":function(t,e,n){e=t.exports=n("./node_modules/css-loader/lib/css-base.js")(void 0),e.push([t.i,".todo-list{display:inline-block;vertical-align:top;width:45%}.todo-list .todo-list-item{border-left:1px dashed #999;margin-left:7px;padding-left:12px}.todo-list .todo-list-item.no-border{border-left:none}.todo-list .todo-list-item .title-align{min-width:20px}.todo-list .todo-list-item .no-selected .status-1{color:#1890ff}.todo-list .todo-list-item .no-selected .status-2{text-decoration:line-through;color:#999}.todo-detail{display:inline-block;vertical-align:top;padding-left:20px;width:54.5%}.todo-detail .ant-calendar-picker input::-webkit-input-placeholder{color:#333!important}",""])}});