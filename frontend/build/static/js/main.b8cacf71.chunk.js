(this["webpackJsonpcartridge-manager"]=this["webpackJsonpcartridge-manager"]||[]).push([[0],{373:function(e,t,a){e.exports=a(489)},378:function(e,t,a){},379:function(e,t,a){},489:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(16),c=a.n(o),l=(a(378),a(180)),i=a(181),u=a(203),s=a(201),p=a(244),d=a(29),f=a(518),m=a(355),h=a(114),b=a(516),g=a(121),v=a(122),w=(a(379),a(508)),y=a(138),E=a(309),x=a(310),k=a(311),j=a(312),O=a(313),S=a(308),R=a(17),T=Object(S.a)((function(e){return{root:{borderTop:e.tables.borderSize,borderTopColor:e.palette.primary.light,borderTopStyle:"solid"},header:{backgroundColor:e.palette.primary.dark,color:e.palette.common.white}}}));var C=function(e){var t=T(),a=e.cartridges;return r.a.createElement(w.a,{className:t.root,component:y.a,elevation:Object(R.a)().tables.elevation},r.a.createElement(E.a,{"aria-label":"cartridges table"},r.a.createElement(x.a,null,r.a.createElement(k.a,null,r.a.createElement(j.a,null,"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c"),r.a.createElement(j.a,{align:"right"},"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435"),r.a.createElement(j.a,{align:"right"},"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"))),r.a.createElement(O.a,null,a.map((function(e){return r.a.createElement(k.a,{key:e.name},r.a.createElement(j.a,{component:"th",scope:"row"},e.manufacturer),r.a.createElement(j.a,{align:"right"},e.name),r.a.createElement(j.a,{align:"right"},e.count))})))))},D=a(4);Object(D.a)((function(e){return{head:{backgroundColor:e.palette.primary.dark,color:e.palette.common.white}}}))(j.a),Object(S.a)((function(e){return{outRow:{backgroundColor:e.palette.error.light,color:e.palette.common.white},inRow:{backgroundColor:e.palette.success.light}}}));var A=a(190),z=a.n(A),P={pagination:{labelDisplayedRows:"{from}-{to} \u0438\u0437 {count}",labelRowsSelect:"\u0441\u0442\u0440\u043e\u043a"},toolbar:{nRowsSelected:"{0} \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u0435(\u0438\u0439) \u0432\u044b\u0431\u0440\u0430\u043d\u043e",searchTooltip:"\u041f\u043e\u0438\u0441\u043a",searchPlaceholder:"\u041f\u043e\u0438\u0441\u043a",exportTitle:"\u042d\u043a\u0441\u043f\u043e\u0440\u0442",exportAriaLabel:"\u042d\u043a\u0441\u043f\u043e\u0440\u0442",exportName:"\u042d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432 CSV"},header:{actions:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044f"},body:{emptyDataSourceMessage:"\u041f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u044f \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442",addTooltip:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",deleteTooltip:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",editTooltip:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",filterRow:{filterTooltip:"\u0424\u0438\u043b\u044c\u0442\u0440"},editRow:{deleteText:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u0435?",cancelTooltip:"\u041e\u0442\u043c\u0435\u043d\u0430",saveTooltip:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c"}}},U=a(519),N=a(319);var V=function(){return r.a.createElement(N.a,{title:"\u0417\u0430\u0432\u0435\u0440\u0448\u0451\u043d","aria-label":"\u0417\u0430\u0432\u0435\u0440\u0448\u0451\u043d"},r.a.createElement(U.a,{color:"secondary"}))},B=a(520);var I=function(){return r.a.createElement(N.a,{title:"\u0412 \u0440\u0430\u0431\u043e\u0442\u0435","aria-label":"\u0412 \u0440\u0430\u0431\u043e\u0442\u0435"},r.a.createElement(B.a,null))},W=Object(S.a)((function(e){return{root:{borderTop:e.tables.borderSize,borderTopColor:e.palette.primary.light,borderTopStyle:"solid"}}}));var G=function(e){var t=e.data,a=e.cartridges,n=W(),o={};return a.forEach((function(e){return o[e.name]="".concat(e.manufacturer," ").concat(e.name)})),r.a.createElement(z.a,{title:"\u0417\u0430\u043a\u0430\u0437\u044b",localization:P,columns:[{title:"\u0421\u0442\u0430\u0442\u0443\u0441",field:"finished",initialEditValue:"false",lookup:{true:"\u0417\u0430\u0432\u0435\u0440\u0448\u0451\u043d",false:"\u0412 \u0440\u0430\u0431\u043e\u0442\u0435"},render:function(e){return e.finished?r.a.createElement(V,null):r.a.createElement(I,null)}},{title:"\u0414\u0430\u0442\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f",field:"date",type:"datetime",editable:"never"},{title:"\u0414\u0430\u0442\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f",field:"date_finished",type:"datetime",editable:"never",emptyValue:"\u2014"},{title:"\u041d\u043e\u043c\u0435\u0440",field:"number",type:"numeric",emptyValue:"\u041d\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d"},{title:"\u041a\u0430\u0440\u0442\u0440\u0438\u0434\u0436",field:"cartridge",lookup:o},{title:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e",field:"count",type:"numeric"}],data:t,components:{Container:function(e){return r.a.createElement(y.a,Object.assign({},e,{elevation:Object(R.a)().tables.elevation,className:n.root}))}},options:{exportButton:!0,actionsColumnIndex:-1},actions:[function(e){return{icon:"check",tooltip:e.finished?"\u0417\u0430\u043a\u0430\u0437 \u0443\u0436\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043d":"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437",disabled:e.finished,onClick:function(e,t){console.log(e,t),t.finished?alert("\u0417\u0430\u043a\u0430\u0437 ".concat(t.number," \u0443\u0436\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u043c")):alert("\u0417\u0430\u043a\u0430\u0437 ".concat(t.number," \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d"))}}}],editable:{onRowAdd:function(e){return new Promise((function(t){console.log(e),t()}))},onRowUpdate:function(e){return new Promise((function(t){console.log(e),t()}))},onRowDelete:function(e){return new Promise((function(t){console.log(e),t()}))}}})},J=a(249),L=a.n(J),M=Object(S.a)((function(e){return{root:{borderTop:e.tables.borderSize,borderTopColor:e.palette.primary.light,borderTopStyle:"solid"}}})),$=function(e){return e.out="true"===e.out||!0===e.out,e};var _=function(e){var t=e.cartridges,a=e.handleSupplyDelete,n=e.handleSupplyUpdate,o=e.handleSupplyCreate,c=M(),l=Object(R.a)(),i={outRow:{backgroundColor:L()(l.palette.error.light).lighten(20)},inRow:{backgroundColor:L()(l.palette.success.light).lighten(24)}},u={};t.forEach((function(e){return u[e.name]="".concat(e.manufacturer," ").concat(e.name)}));var s=[{title:"\u0414\u0430\u0442\u0430",field:"date",type:"datetime",editable:"never"},{title:"\u0421\u043e\u0431\u044b\u0442\u0438\u0435",field:"out",initialEditValue:"true",lookup:{true:"\u0412\u044b\u0434\u0430\u0447\u0430",false:"\u041f\u043e\u0441\u0442\u0443\u043f\u043b\u0435\u043d\u0438\u0435"}},{title:"\u041a\u0430\u0440\u0442\u0440\u0438\u0434\u0436",field:"cartridge",lookup:u},{title:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e",field:"count",type:"numeric"},{title:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",field:"comment"}];return r.a.createElement(z.a,{components:{Container:function(e){return r.a.createElement(y.a,Object.assign({},e,{elevation:l.tables.elevation,className:c.root}))}},localization:P,title:"\u041f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u041a\u0430\u0440\u0442\u0440\u0438\u0434\u0436\u0435\u0439",columns:s,data:e.data,options:{exportButton:!0,actionsColumnIndex:-1,rowStyle:function(e){return e.out?i.outRow:i.inRow}},editable:{onRowAdd:function(e){return new Promise((function(t){o($(e)),t()}))},onRowUpdate:function(e){return new Promise((function(t){n($(e)),t()}))},onRowDelete:function(e){return new Promise((function(t){a(e.id),t()}))}}})},q=a(517),F=a(318),H=a(94),K=a(241),Q=a(521),X=a(522),Y=Object(S.a)((function(e){return{root:{flexGrow:1},title:{flexGrow:1}}}));var Z=function(e){var t=e.title,a=Y(),n=Object(d.f)();return r.a.createElement("div",null,r.a.createElement(q.a,{position:"static"},r.a.createElement(F.a,{variant:"regular"},r.a.createElement(H.a,{className:a.title,variant:"h6",color:"inherit"},t),r.a.createElement(N.a,{title:"REST API",arrow:!0},r.a.createElement(K.a,{onClick:function(){return n.push("/api")},color:"inherit","aria-label":"REST"},r.a.createElement(Q.a,{fontSize:"large"}))),r.a.createElement(N.a,{title:"\u0410\u0434\u043c\u0438\u043d\u043a\u0430",arrow:!0},r.a.createElement(K.a,{onClick:function(){return n.push("/admin")},color:"inherit","aria-label":"Admin"},r.a.createElement(X.a,{fontSize:"large"}))))))},ee=a(20),te=a.n(ee),ae=a(37),ne=a(514),re=a(365),oe=a.n(re).a.create({baseURL:"http://ps-bykrc.dellin.local/api/",responseType:"json"}),ce={getAll:function(){var e=Object(ae.a)(te.a.mark((function e(){var t;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,oe.get("orders/");case 2:return t=e.sent,console.log("supplyDao.getAll:",t),e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(ae.a)(te.a.mark((function e(t){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:oe.post("orders/",t).catch((function(e){console.log("ordersDao: ",e.response.data)})),console.log("ordersDao.create:",t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(ae.a)(te.a.mark((function e(t){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:oe.put("orders/".concat(t.id,"/"),t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),delete:function(){var e=Object(ae.a)(te.a.mark((function e(t){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:oe.delete("orders/".concat(t,"/"));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},le={getAll:function(){var e=Object(ae.a)(te.a.mark((function e(){var t;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,oe.get("supplies/");case 2:return t=e.sent,console.log("fetchSupplies:",t),e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(ae.a)(te.a.mark((function e(t){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:oe.post("supplies/",t).catch((function(e){console.log("response: ",e.response.data)})),console.log("createSupply:",t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(ae.a)(te.a.mark((function e(t){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:oe.put("supplies/".concat(t.id,"/"),t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),delete:function(){var e=Object(ae.a)(te.a.mark((function e(t){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:oe.delete("supplies/".concat(t,"/"));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ie={getAll:function(){var e=Object(ae.a)(te.a.mark((function e(){var t;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,oe.get("cartridges/");case 2:return t=e.sent,console.log("ordersDao.getAll:",t),e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},ue=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={cartridgesData:[],suppliesData:[],ordersData:[]},e.handleRefresh=Object(ae.a)(te.a.mark((function t(){var a,n,r;return te.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ie.getAll();case 2:return a=t.sent,t.next=5,le.getAll();case 5:return n=t.sent,t.next=8,ce.getAll();case 8:r=t.sent,e.setState({cartridgesData:a,suppliesData:n,ordersData:r});case 10:case"end":return t.stop()}}),t)}))),e.handleSupplyDelete=function(){var t=Object(ae.a)(te.a.mark((function t(a){return te.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,le.delete(a);case 2:return t.next=4,e.handleRefresh();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleSupplyCreate=function(){var t=Object(ae.a)(te.a.mark((function t(a){return te.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,le.create(a);case 2:return t.next=4,e.handleRefresh();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleSupplyUpdate=function(){var t=Object(ae.a)(te.a.mark((function t(a){return te.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,le.update(a);case 2:return t.next=4,e.handleRefresh();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(ae.a)(te.a.mark((function e(){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.handleRefresh();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.cartridgesData,a=e.suppliesData,n=e.ordersData;return r.a.createElement(ne.a,{container:!0,spacing:3},r.a.createElement(ne.a,{key:"cartridges",xs:12,lg:4,item:!0},r.a.createElement(C,{cartridges:t})),r.a.createElement(ne.a,{key:"supplies",xs:12,lg:8,item:!0},r.a.createElement(_,{data:a,cartridges:t,handleSupplyDelete:this.handleSupplyDelete,handleSupplyCreate:this.handleSupplyCreate,handleSupplyUpdate:this.handleSupplyUpdate})),r.a.createElement(ne.a,{key:"orders",xs:12,lg:12,item:!0},r.a.createElement(G,{data:n,cartridges:t})))}}]),a}(n.Component);var se=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Test page"))},pe=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={navbarTitle:"\u0420\u0426 \u0412\u0430\u043b\u0438\u0449\u0435\u0432\u043e \u2022 \u041a\u0430\u0440\u0442\u0440\u0438\u0434\u0436\u0438",theme:Object(m.a)(Object(h.a)({palette:{primary:g.a,secondary:v.a},tables:{borderSize:"0.5rem",elevation:5}}))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.navbarTitle,a=e.theme;return r.a.createElement(p.a,null,r.a.createElement(b.a,{theme:a},r.a.createElement(Z,{title:t}),r.a.createElement(f.a,{style:{paddingTop:"5%"},maxWidth:"lg"},r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/",exact:!0,component:ue}),r.a.createElement(d.a,{path:"/test",exact:!0,component:se}),r.a.createElement(d.a,{path:"/admin",render:function(){window.location.reload()}})))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(pe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[373,1,2]]]);
//# sourceMappingURL=main.b8cacf71.chunk.js.map