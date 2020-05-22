(this["webpackJsonpcartridge-manager"]=this["webpackJsonpcartridge-manager"]||[]).push([[0],{377:function(e,t,a){e.exports=a(493)},382:function(e,t,a){},493:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(16),c=a.n(o),i=(a(382),a(93)),l=a(94),s=a(130),u=a(129),p=a(249),d=a(30),f=a(246),m=a(526),h=a(359),b=a(117),g=a(524),w=a(531),v=a(124),y=a(125),k=a(118),E=a(516),O=a(132),j=a(314),S=a(315),A=a(316),C=a(317),x=a(318),R=a(245),T=a(17),D=Object(R.a)((function(e){return{root:{borderTop:e.tables.borderSize,borderTopColor:e.palette.primary.light,borderTopStyle:"solid"},header:{backgroundColor:e.palette.primary.dark,color:e.palette.common.white}}}));var U=function(e){var t=D(),a=e.cartridges;return r.a.createElement(E.a,{className:t.root,component:O.a,elevation:Object(T.a)().tables.elevation},r.a.createElement(j.a,{"aria-label":"cartridges table"},r.a.createElement(S.a,null,r.a.createElement(A.a,null,r.a.createElement(C.a,null,"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c"),r.a.createElement(C.a,{align:"right"},"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435"),r.a.createElement(C.a,{align:"right"},"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"))),r.a.createElement(x.a,null,a.map((function(e){return r.a.createElement(A.a,{key:e.name},r.a.createElement(C.a,{component:"th",scope:"row"},e.manufacturer),r.a.createElement(C.a,{align:"right"},e.name),r.a.createElement(C.a,{align:"right"},e.count))})))))},N=a(4);Object(N.a)((function(e){return{head:{backgroundColor:e.palette.primary.dark,color:e.palette.common.white}}}))(C.a),Object(R.a)((function(e){return{outRow:{backgroundColor:e.palette.error.light,color:e.palette.common.white},inRow:{backgroundColor:e.palette.success.light}}}));var z=a(197),M=a.n(z),P={pagination:{labelDisplayedRows:"{from}-{to} \u0438\u0437 {count}",labelRowsSelect:"\u0441\u0442\u0440\u043e\u043a"},toolbar:{nRowsSelected:"{0} \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u0435(\u0438\u0439) \u0432\u044b\u0431\u0440\u0430\u043d\u043e",searchTooltip:"\u041f\u043e\u0438\u0441\u043a",searchPlaceholder:"\u041f\u043e\u0438\u0441\u043a",exportTitle:"\u042d\u043a\u0441\u043f\u043e\u0440\u0442",exportAriaLabel:"\u042d\u043a\u0441\u043f\u043e\u0440\u0442",exportName:"\u042d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432 CSV"},header:{actions:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044f"},body:{emptyDataSourceMessage:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430",addTooltip:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",deleteTooltip:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",editTooltip:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",filterRow:{filterTooltip:"\u0424\u0438\u043b\u044c\u0442\u0440"},editRow:{deleteText:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u0435?",cancelTooltip:"\u041e\u0442\u043c\u0435\u043d\u0430",saveTooltip:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c"}}},V=a(527),W=a(324);var q=function(){return r.a.createElement(W.a,{title:"\u0417\u0430\u0432\u0435\u0440\u0448\u0451\u043d","aria-label":"\u0417\u0430\u0432\u0435\u0440\u0448\u0451\u043d"},r.a.createElement(V.a,{color:"secondary"}))},B=a(528);var I=function(){return r.a.createElement(W.a,{title:"\u0412 \u0440\u0430\u0431\u043e\u0442\u0435","aria-label":"\u0412 \u0440\u0430\u0431\u043e\u0442\u0435"},r.a.createElement(B.a,null))},J=Object(R.a)((function(e){return{root:{borderTop:e.tables.borderSize,borderTopColor:e.palette.primary.light,borderTopStyle:"solid"}}}));var L=function(e){var t=e.data,a=e.cartridges,n=e.handleCreate,o=e.handleUpdate,c=e.handleDelete,i=J(),l={};return a.forEach((function(e){return l[e.name]="".concat(e.manufacturer," ").concat(e.name)})),r.a.createElement(M.a,{isLoading:!(t.length>0),title:"\u0417\u0430\u043a\u0430\u0437\u044b",localization:P,columns:[{title:"\u0421\u0442\u0430\u0442\u0443\u0441",field:"finished",initialEditValue:"false",lookup:{true:"\u0417\u0430\u0432\u0435\u0440\u0448\u0451\u043d",false:"\u0412 \u0440\u0430\u0431\u043e\u0442\u0435"},render:function(e){return e.finished?r.a.createElement(q,null):r.a.createElement(I,null)}},{title:"\u0414\u0430\u0442\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f",field:"date",type:"datetime",editable:"never"},{title:"\u0414\u0430\u0442\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f",field:"date_finished",type:"datetime",editable:"never",emptyValue:"\u2014"},{title:"\u041d\u043e\u043c\u0435\u0440",field:"number",type:"numeric",emptyValue:"\u041d\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d"},{title:"\u041a\u0430\u0440\u0442\u0440\u0438\u0434\u0436",field:"cartridge",lookup:l},{title:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e",field:"count",type:"numeric"}],data:t,components:{Container:function(e){return r.a.createElement(O.a,Object.assign({},e,{elevation:Object(T.a)().tables.elevation,className:i.root}))}},options:{exportButton:!0,actionsColumnIndex:-1},actions:[function(e){return{icon:"check",tooltip:e.finished?void 0:"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437",disabled:e.finished,onClick:function(e,t){console.log(e,t),t.finished?alert("\u0417\u0430\u043a\u0430\u0437 ".concat(t.number," \u0443\u0436\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u043c")):alert("\u0417\u0430\u043a\u0430\u0437 ".concat(t.number," \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d"))}}}],editable:{onRowAdd:function(e){return new Promise((function(t){n(e),t()}))},onRowUpdate:function(e){return new Promise((function(t){o(e),t()}))},onRowDelete:function(e){return new Promise((function(t){c(e),t()}))}}})},G=a(254),$=a.n(G),_=Object(R.a)((function(e){return{root:{borderTop:e.tables.borderSize,borderTopColor:e.palette.primary.light,borderTopStyle:"solid"}}})),F=function(e){return e.out="true"===e.out||!0===e.out,e};var H=function(e){var t=e.data,a=e.cartridges,n=e.handleSupplyDelete,o=e.handleSupplyUpdate,c=e.handleSupplyCreate,i=_(),l=Object(T.a)(),s={outRow:{backgroundColor:$()(l.palette.error.light).lighten(20)},inRow:{backgroundColor:$()(l.palette.success.light).lighten(24)}},u={};return a.forEach((function(e){return u[e.name]="".concat(e.manufacturer," ").concat(e.name)})),r.a.createElement(M.a,{isLoading:!(t.length>0),components:{Container:function(e){return r.a.createElement(O.a,Object.assign({},e,{elevation:l.tables.elevation,className:i.root}))}},localization:P,title:"\u041f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u041a\u0430\u0440\u0442\u0440\u0438\u0434\u0436\u0435\u0439",columns:[{title:"\u0414\u0430\u0442\u0430",field:"date",type:"datetime",editable:"never"},{title:"\u0421\u043e\u0431\u044b\u0442\u0438\u0435",field:"out",initialEditValue:"true",lookup:{true:"\u0412\u044b\u0434\u0430\u0447\u0430",false:"\u041f\u043e\u0441\u0442\u0443\u043f\u043b\u0435\u043d\u0438\u0435"}},{title:"\u041a\u0430\u0440\u0442\u0440\u0438\u0434\u0436",field:"cartridge",lookup:u},{title:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e",field:"count",type:"numeric"},{title:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",field:"comment"}],data:t,options:{exportButton:!0,actionsColumnIndex:-1,rowStyle:function(e){return e.out?s.outRow:s.inRow}},editable:{onRowAdd:function(e){return new Promise((function(t){c(F(e)),t()}))},onRowUpdate:function(e){return new Promise((function(t){o(F(e)),t()}))},onRowDelete:function(e){return new Promise((function(t){n(e),t()}))}}})},K=a(525),Q=a(323),X=a(96),Y=a(529),Z=a(530),ee=Object(R.a)((function(e){return{root:{flexGrow:1},title:{flexGrow:1}}}));var te=function(e){var t=e.title,a=ee(),n=Object(d.f)();return r.a.createElement("div",null,r.a.createElement(K.a,{position:"static"},r.a.createElement(Q.a,{variant:"regular"},r.a.createElement(X.a,{className:a.title,variant:"h6",color:"inherit"},t),r.a.createElement(W.a,{title:"REST API",arrow:!0},r.a.createElement(f.a,{onClick:function(){n.push("/api"),window.location.reload()},color:"inherit","aria-label":"REST"},r.a.createElement(Y.a,{fontSize:"large"}))),r.a.createElement(W.a,{title:"\u0410\u0434\u043c\u0438\u043d\u043a\u0430",arrow:!0},r.a.createElement(f.a,{onClick:function(){n.push("/admin"),window.location.reload()},color:"inherit","aria-label":"Admin"},r.a.createElement(Z.a,{fontSize:"large"}))))))},ae=a(28),ne=a.n(ae),re=a(54),oe=a(257),ce=(a(475),a(338)),ie=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).key=e.props,e.state={user:null,ws:null,connectState:null},e.handleNewUserMessage=function(t){e.state.ws.send(JSON.stringify({user:e.state.user,message:t}))},e.connect=function(){var t=new WebSocket("ws://"+window.location.host.split(":")[0]+"/ws/");t.onmessage=function(t){var a=JSON.parse(t.data),n=a.message,r=a.user;e.state.user!==r&&Object(oe.addResponseMessage)(n)},t.onopen=function(){console.log("connected websocket main component"),e.props.closeSnackbar(),e.setState({ws:t,user:Math.random()})},t.onclose=function(t){e.props.enqueueSnackbar("\u041d\u0435\u0442 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043a \u0447\u0430\u0442\u0443",{variant:"error",persist:!0,preventDuplicate:!0,action:function(t){return r.a.createElement(ce.a,{onClick:function(){return e.connect()}},"\u041f\u0435\u0440\u0435\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u0441\u044f")},anchorOrigin:{vertical:"bottom",horizontal:"right"}}),e.setState({ws:null,user:"\u043d\u0435 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d"})},t.onerror=function(e){console.error("Socket encountered error: ",e.message,"Closing socket"),t.close()}},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(re.a)(ne.a.mark((function e(){return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.connect();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return null!==this.state.ws?r.a.createElement(oe.Widget,{handleNewUserMessage:this.handleNewUserMessage,title:"\u0427\u0430\u0442",subtitle:"User id "+this.state.user}):null}}]),a}(n.Component),le=Object(k.b)(ie);var se=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Test page"))},ue=a(522),pe=a(320),de=a(369),fe=a.n(de).a.create({baseURL:"http://"+window.location.host+"/api/",responseType:"json"}),me=function(){function e(t,a,n){var r=this;Object(i.a)(this,e),this.create=function(){var e=Object(re.a)(ne.a.mark((function e(t){return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fe.post(r.path,t).catch((function(e){r.callbacks.error(r.messages.create.error+" \n "+e),console.log("CommonApi.create.catch",e.body)})).then((function(){r.callbacks.refreshAll(),r.callbacks.success(r.messages.create.success)}),(function(e){return console.log("CommonApi.create.then.onrejected:",e)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.update=function(){var e=Object(re.a)(ne.a.mark((function e(t){return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fe.put("".concat(r.path).concat(t.id,"/"),t).catch((function(e){r.callbacks.error(r.messages.update.error+" \n "+e)})).then((function(){r.callbacks.refreshAll(),r.callbacks.success(r.messages.update.success)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.delete=function(){var e=Object(re.a)(ne.a.mark((function e(t){return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fe.delete("".concat(r.path).concat(t.id,"/")).catch((function(e){r.callbacks.error(r.messages.delete.error+" \n "+e)})).then((function(){r.callbacks.refreshAll(),r.callbacks.success(r.messages.delete.success)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.messages=a,this.path=t,this.callbacks=n}return Object(l.a)(e,[{key:"refresh",value:function(){var e=this;return fe.get(this.path).catch((function(t){return e.callbacks.error(t)})).then((function(t){return e.callbacks.setState(t.data)}))}}]),e}();function he(){return be.apply(this,arguments)}function be(){return(be=Object(re.a)(ne.a.mark((function e(){return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fe.get("all"));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ge=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={cartridgesData:[],suppliesData:[],ordersData:[]},e.displayActions={success:function(){var t=Object(re.a)(ne.a.mark((function t(a){return ne.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.props.enqueueSnackbar(a,{variant:"success"});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),error:function(){var t=Object(re.a)(ne.a.mark((function t(a){return ne.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.props.enqueueSnackbar("".concat(a),{variant:"error"}),console.log("dispError:",a);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),msg:function(){var t=Object(re.a)(ne.a.mark((function t(a){return ne.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.props.enqueueSnackbar(a);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},e.handleRefresh=Object(re.a)(ne.a.mark((function t(){return ne.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:he().catch((function(t){console.log(t.body),e.displayActions.error(t)})).then((function(t){if(t){var a=t.data,n=a.cartridges,r=a.supplies,o=a.orders;e.setState({cartridgesData:n,suppliesData:r,ordersData:o})}}));case 1:case"end":return t.stop()}}),t)}))),e.supplyApi=new me("supplies/",{create:{success:"\u041f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u0441\u043e\u0437\u0434\u0430\u043d\u043e \u0443\u0441\u043f\u0435\u0448\u043d\u043e!",error:"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u0435!"},update:{success:"\u041f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u043e \u0443\u0441\u043f\u0435\u0448\u043d\u043e!",error:"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u0435!"},delete:{success:"\u041f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u0443\u0434\u0430\u043b\u0435\u043d\u043e \u0443\u0441\u043f\u0435\u0448\u043d\u043e!",error:"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u0435!"}},{refreshAll:e.handleRefresh,setState:function(t){return e.setState({suppliesData:t})},success:e.displayActions.success,error:e.displayActions.error,msg:e.displayActions.msg}),e.orderApi=new me("orders/",{create:{success:"\u0417\u0430\u043a\u0430\u0437 \u0441\u043e\u0437\u0434\u0430\u043d \u0443\u0441\u043f\u0435\u0448\u043d\u043e!",error:"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437!"},update:{success:"\u0417\u0430\u043a\u0430\u0437 \u043e\u0431\u043d\u043e\u0432\u043b\u0451\u043d \u0443\u0441\u043f\u0435\u0448\u043d\u043e!",error:"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437!"},delete:{success:"\u0417\u0430\u043a\u0430\u0437 \u0443\u0434\u0430\u043b\u0451\u043d \u0443\u0441\u043f\u0435\u0448\u043d\u043e!",error:"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437!"}},{refreshAll:e.handleRefresh,setState:function(t){return e.setState({ordersData:t})},success:e.displayActions.success,error:e.displayActions.error,msg:e.displayActions.msg}),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(re.a)(ne.a.mark((function e(){return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.handleRefresh();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.cartridgesData,a=e.suppliesData,n=e.ordersData;return r.a.createElement(ue.a,{container:!0,spacing:3},r.a.createElement(ue.a,{key:"progress",xs:12,item:!0},r.a.createElement(pe.a,null),r.a.createElement(pe.a,{disableShrink:!0})),r.a.createElement(ue.a,{key:"cartridges",xs:12,lg:4,item:!0},r.a.createElement(U,{cartridges:t})),r.a.createElement(ue.a,{key:"supplies",xs:12,lg:8,item:!0},r.a.createElement(H,{data:a,cartridges:t,handleSupplyDelete:this.supplyApi.delete,handleSupplyCreate:this.supplyApi.create,handleSupplyUpdate:this.supplyApi.update})),r.a.createElement(ue.a,{key:"orders",xs:12,lg:12,item:!0},r.a.createElement(L,{data:n,cartridges:t,handleCreate:this.orderApi.create,handleUpdate:this.orderApi.update,handleDelete:this.orderApi.delete})),r.a.createElement(ue.a,null,r.a.createElement(le,null)))}}]),a}(n.Component),we=Object(k.b)(ge),ve=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={navbarTitle:"\u0420\u0426 \u0412\u0430\u043b\u0438\u0449\u0435\u0432\u043e \u2022 \u041a\u0430\u0440\u0442\u0440\u0438\u0434\u0436\u0438",theme:Object(h.a)(Object(b.a)({palette:{primary:v.a,secondary:y.a},tables:{borderSize:"0.5rem",elevation:5}}))},e.notistackRef=r.a.createRef(),e.onClickDismiss=function(t){return function(){e.notistackRef.current.closeSnackbar(t)}},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.navbarTitle,n=t.theme;return r.a.createElement(p.a,null,r.a.createElement(g.a,{theme:n},r.a.createElement(k.a,{ref:this.notistackRef,action:function(t){return r.a.createElement(f.a,{onClick:e.onClickDismiss(t),color:"inherit"},r.a.createElement(w.a,null))}},r.a.createElement(te,{title:a}),r.a.createElement(m.a,{style:{paddingTop:"5%"},maxWidth:"lg"},r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/",exact:!0,component:we}),r.a.createElement(d.a,{path:"/test",exact:!0,component:se}))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(ve,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[377,1,2]]]);
//# sourceMappingURL=main.e7c7a4ec.chunk.js.map