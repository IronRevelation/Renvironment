(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{322:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(16),o=n.n(a),c=n(19),i=n(33),s=n.n(i),u=n(61),d=n(365),l=n(10),b=n(364),j=n(4),O=Object(l.a)({root:{backgroundColor:"#009fb7",color:"#272727"}})(b.a),f=function(e){return Object(j.jsx)(O,{variant:"contained",startIcon:Object(j.jsx)(d.a,{}),disableElevation:!0,onClick:e.onClick,disabled:e.disabled,children:"Add value"})},p=n(380),h=Object(l.a)({root:{"& label.Mui-focused":{color:"#009FB7"},"& .MuiOutlinedInput-root":{"&:hover fieldset":{borderColor:"#009FB7"},"&.Mui-focused fieldset":{borderColor:"#009FB7"}},color:"#272727"}})(p.a),m=function(e){var t=Object(r.useState)(NaN),n=Object(c.a)(t,2),a=n[0],o=n[1],i=isNaN(a)||a<=0;return Object(j.jsxs)("div",{children:[Object(j.jsx)(h,{variant:"outlined",type:"number",label:"Money to add",placeholder:"e.g. 3.14",inputProps:{min:"0",onKeyDown:function(t){"Enter"!==t.key||i||e.onClick(a)}},InputLabelProps:{shrink:!0},error:i,disabled:e.disabled,onChange:function(e){return o(parseFloat(e.target.value))}}),Object(j.jsx)("div",{style:{paddingTop:"1rem"},children:Object(j.jsx)(f,{disabled:e.disabled||i,onClick:function(){return e.onClick(a)}})})]})},g=n(384),v=n(379);function x(e){return Object(j.jsx)(g.a,{open:e.openCfg.open,autoHideDuration:2500,onClose:e.onClose,children:Object(j.jsx)(v.a,{severity:"error",variant:"filled",children:e.openCfg.message})})}function y(e){return Object(j.jsx)(g.a,{open:e.openCfg.open,autoHideDuration:2500,onClose:e.onClose,children:Object(j.jsx)(v.a,{severity:"success",variant:"filled",children:e.openCfg.message})})}var C=n(372),S=n(373),k=n(368),w=Object(l.a)({root:{backgroundColor:"#009fb7",color:"#272727",marginRight:"0.25rem"}})(b.a),T=function(e){return Object(j.jsx)(w,{variant:"contained",startIcon:Object(j.jsx)(k.a,{}),disableElevation:!0,size:"small",onClick:e.onClick,disabled:e.disabled,children:"Confirm"})},E=n(369),N=Object(l.a)({root:{backgroundColor:"#e26d5a",color:"#272727",marginLeft:".25rem"}})(b.a),M=function(e){return Object(j.jsx)(N,{disableElevation:!0,variant:"contained",onClick:e.onClick,disabled:e.disabled,startIcon:Object(j.jsx)(E.a,{}),size:"small",children:"Cancel"})},A=Object(l.a)({root:{"& label.Mui-focused":{color:"#009FB7"},"& .MuiInput-underline:after":{borderBottomColor:"#009FB7"},"& .Mui-error:after":{borderBottom:"2px solid red"},color:"#272727",backgroundColor:"#ddd",borderTopLeftRadius:".25rem",borderTopRightRadius:".25rem"}})(p.a),F=function(e){var t=Object(r.useState)(NaN),n=Object(c.a)(t,2),a=n[0],o=n[1],i=isNaN(a)||a<=0;return Object(j.jsxs)("div",{children:[Object(j.jsx)(A,{variant:"standard",type:"number",label:"New quantity",placeholder:"e.g. 3.14",inputProps:{min:"0",onKeyDown:function(t){"Enter"!==t.key||i||e.onClick(a)}},InputLabelProps:{shrink:!0},error:i,disabled:e.disabled,onChange:function(e){return o(parseFloat(e.target.value))}}),Object(j.jsxs)("div",{style:{paddingTop:".5rem"},children:[Object(j.jsx)(T,{disabled:e.disabled||i,onClick:function(){return e.onClick(a)}}),Object(j.jsx)(M,{disabled:e.disabled,onClick:function(){return e.onClick("aborted")}})]})]})},R=n(370),Y=Object(l.a)({root:{backgroundColor:"#009FB7",color:"#272727",marginRight:"0.5rem"}})(b.a),D=function(e){return Object(j.jsx)(Y,{disableElevation:!0,variant:"contained",size:"small",onClick:e.onClick,disabled:e.disabled,startIcon:Object(j.jsx)(R.a,{}),children:"Edit"})},P=n(371),B=Object(l.a)({root:{backgroundColor:"#e26d5a",color:"#272727"}})(b.a),I=function(e){return Object(j.jsx)(B,{disableElevation:!0,size:"small",startIcon:Object(j.jsx)(P.a,{}),onClick:function(){return e.onClick()},children:"Delete"})},K=Object(C.a)({moneyObjCard:{backgroundColor:"#EFF1F3",borderColor:"#696773",padding:"1rem",marginBottom:"1.5rem"},date:{fontSize:12},value:{fontSize:20,fontWeight:"bold"}}),U=function(e){var t=K(),n=Object(r.useState)(!1),a=Object(c.a)(n,2),o=a[0],i=a[1];return Object(j.jsxs)(S.a,{id:"registered-money-".concat(e.index),className:t.moneyObjCard,variant:"outlined",children:[Object(j.jsxs)("div",{className:t.date,children:[e.dateObj.getFullYear(),"-",e.dateObj.getMonth()+1,"-",e.dateObj.getDate()]}),o?Object(j.jsx)(F,{disabled:e.disabledEdit,onClick:function(t){i(!1),"aborted"!==t&&e.onEdit(e.index,t)}}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:t.value,children:e.moneyVal+""+e.currency}),Object(j.jsx)(D,{onClick:function(){return i(!0)}}),Object(j.jsx)(I,{onClick:function(){return e.onDelete(e.index)}})]})]})},q=function(e){return Object(j.jsx)("div",{style:{marginTop:"1.5rem",display:"inline-block"},children:e.money.map((function(t,n){var r=new Date(t.date);return Object(j.jsx)(U,{dateObj:r,moneyVal:t.value,index:n,disabledEdit:e.disabledEdit,onEdit:e.editMoney,onDelete:e.deleteMoney,currency:e.currency},n)}))})},z=function(e){return e.toFixed(Math.max(2,(e.toString().split(".")[1]||[]).length))},V=function(){var e=Object(u.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/add_money/".concat(z(t)),{method:"POST"});case 2:if((n=e.sent).ok){e.next=7;break}throw new Error("RESPONSESTATUSNOTOK");case 7:return e.abrupt("return",n.json());case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(u.a)(s.a.mark((function e(t,n){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/modify_money/".concat(t,"/").concat(z(n)),{method:"POST"});case 2:if((r=e.sent).ok){e.next=5;break}throw new Error("RESPONSESTATUSNOTOK");case 5:return e.abrupt("return",r.json());case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),L=function(){var e=Object(u.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/remove_money/".concat(t),{method:"POST"});case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("RESPONSESTATUSNOTOK");case 5:return e.abrupt("return",n.json());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(e){var t=Object(r.useState)(!1),n=Object(c.a)(t,2),a=n[0],o=n[1],i=Object(r.useState)(!1),s=Object(c.a)(i,2),u=s[0],d=s[1],l=Object(r.useState)({open:!1,message:""}),b=Object(c.a)(l,2),O=b[0],f=b[1],p=Object(r.useState)({open:!1,message:""}),h=Object(c.a)(p,2),g=h[0],v=h[1];return Object(j.jsxs)("div",{style:{marginTop:"2rem"},children:[Object(j.jsx)("h3",{children:"Your money:"}),Object(j.jsx)(x,{openCfg:O,onClose:function(){return f({open:!1,message:""})}}),Object(j.jsx)(y,{openCfg:g,onClose:function(){return v({open:!1,message:""})}}),Object(j.jsx)(m,{onClick:function(t){o(!0),V(t).then((function(t){e.updateMoney(t),v({open:!0,message:"YAY! Value added succesfully!"})})).catch((function(e){return f({open:!0,message:"RESPONSESTATUSNOTOK"===e.message?"You sent an invalid value!":"There's a network problem! Try refreshing the page."})})).finally((function(){return o(!1)}))},disabled:a}),Object(j.jsx)(q,{money:e.money,disabledEdit:u,currency:e.currency,editMoney:function(t,n){d(!0),J(t,n).then((function(t){e.updateMoney(t),v({open:!0,message:"YAY! Value modified succesfully!"})})).catch((function(e){return f({open:!0,message:"RESPONSESTATUSNOTOK"===e.message?"You sent an invalid value!":"There's a network problem! Try refreshing the page."})})).finally((function(){return d(!1)}))},deleteMoney:function(t){return L(t).then((function(t){e.updateMoney(t),v({open:!0,message:"YAY! Value deleted succesfully!"})})).catch((function(e){return f({open:!0,message:"RESPONSESTATUSNOTOK"===e.message?"You tried to delete a problematic value!":"There's a network problem! Try refreshing the page."})}))}})]})},Q=Object(l.a)({root:{"& label.Mui-focused":{color:"#009FB7"},"& .MuiOutlinedInput-root":{"&:hover fieldset":{borderColor:"#009FB7"},"&.Mui-focused fieldset":{borderColor:"#009FB7"}},marginTop:"0.5rem",color:"#272727"}})(p.a),W=Object(l.a)({root:{backgroundColor:"#009fb7",color:"#272727",marginRight:"0.5rem"}})(b.a),H=Object(l.a)({root:{backgroundColor:"#e26d5a",color:"#272727"}})(b.a),G=function(e){var t=Object(r.useState)(NaN),n=Object(c.a)(t,2),a=n[0],o=n[1],i=isNaN(a)||a<=0;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"Your goal:"}),Object(j.jsxs)("div",{children:[0===e.quota?"You didn't set the goal.":e.quota,0===e.quota?null:e.currency]}),Object(j.jsx)(Q,{variant:"outlined",type:"number",label:"New goal",placeholder:"e.g. 3.14",inputProps:{min:"0",onKeyDown:function(t){"Enter"!==t.key||i||e.onClick(a)}},InputLabelProps:{shrink:!0},error:i,disabled:e.disabled,onChange:function(e){return o(parseFloat(e.target.value))}}),Object(j.jsxs)("div",{style:{paddingTop:"1rem"},children:[Object(j.jsx)(W,{size:"large",variant:"contained",disableElevation:!0,startIcon:Object(j.jsx)(k.a,{}),disabled:i||e.disabled,onClick:function(){e.onClick(a)},children:"Save"}),Object(j.jsx)(H,{disableElevation:!0,size:"large",startIcon:Object(j.jsx)(E.a,{}),onClick:function(){return e.onClick(0)},children:"Reset"})]})]})},$=n(375),X=n(389),Z=Object(l.a)({root:{"& .MuiInput-underline:after":{borderBottomColor:"#009FB7"},color:"#272727",backgroundColor:"#ddd",padding:"0 .5rem",paddingTop:".5rem",borderTopLeftRadius:".25rem",borderTopRightRadius:".25rem"}})(p.a),ee=function(e){var t=["$","\u20ac","\xa5","\xa3","\u20b9","\u20bd","BTC"],n=Object(r.useState)(t.includes(e.currency)?e.currency:"custom"),a=Object(c.a)(n,2),o=a[0],i=a[1],s=Object(r.useState)(""),u=Object(c.a)(s,2),d=u[0],l=u[1];return Object(j.jsxs)("div",{style:{marginTop:"2rem"},children:[Object(j.jsx)("h3",{children:"Currency:"}),"custom"===o?Object(j.jsx)(Z,{defaultValue:e.currency,onChange:function(e){return l(e.target.value)},onKeyDown:function(t){"Enter"===t.key&&e.updateCurrency(d)}}):null,Object(j.jsxs)("div",{style:{marginTop:"0.25rem"},children:[Object(j.jsxs)($.a,{style:{marginRight:"0.5rem"},onChange:function(e){return i(e.target.value)},defaultValue:o,variant:"outlined",children:[t.map((function(e,t){return Object(j.jsx)(X.a,{value:e,children:e},t)})),Object(j.jsx)(X.a,{value:"custom",children:"Custom..."})]}),Object(j.jsx)(b.a,{style:{backgroundColor:"#009FB7"},size:"large",variant:"contained",disableElevation:!0,startIcon:Object(j.jsx)(k.a,{}),onClick:function(){e.updateCurrency("custom"===o?d:o)},children:"Save"})]})]})},te=function(){var e=Object(u.a)(s.a.mark((function e(t,n){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t!==n){e.next=2;break}throw new Error("SAMECURRENCY");case 2:return e.next=4,fetch("/api/update_currency/".concat(n),{method:"POST"});case 4:if((r=e.sent).ok){e.next=7;break}throw new Error("RESPONSESTATUSNOTOK");case 7:return e.abrupt("return",r.json());case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),ne=function(){var e=Object(u.a)(s.a.mark((function e(t,n){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t!==n){e.next=2;break}throw new Error("SAMEQUOTAASBEFORE");case 2:return e.next=4,fetch("/api/update_quota/".concat((a=n).toFixed(Math.max(2,(a.toString().split(".")[1]||[]).length))),{method:"POST"});case 4:if((r=e.sent).ok){e.next=7;break}throw new Error("RESPONSESTATUSNOTOK");case 7:return e.abrupt("return",r.json());case 8:case"end":return e.stop()}var a}),e)})));return function(t,n){return e.apply(this,arguments)}}(),re=function(e){var t=Object(r.useState)({open:!1,message:""}),n=Object(c.a)(t,2),a=n[0],o=n[1],i=Object(r.useState)({open:!1,message:""}),s=Object(c.a)(i,2),u=s[0],d=s[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)(x,{openCfg:a,onClose:function(){return o({open:!1,message:""})}}),Object(j.jsx)(y,{openCfg:u,onClose:function(){return d({open:!1,message:""})}}),Object(j.jsx)(G,{currency:e.currency,onClick:function(t){return ne(e.quota,t).then((function(t){e.updateQuota(t),d({open:!0,message:"YAY! Goal updated successfully!"})})).catch((function(e){var t="";t="RESPONSESTATUSNOTOK"===e.message?"You sent an invalid value!":"SAMEQUOTAASBEFORE"===e.message?"You didn't change your goal!":"You have a network problem! Try refreshing the page!",o({open:!0,message:t})}))},quota:e.quota}),Object(j.jsx)(ee,{currency:e.currency,updateCurrency:function(t){return te(e.currency,t).then((function(t){e.updateCurrency(t),d({open:!0,message:"YAY! Currency edited with success!"})})).catch((function(e){var t="";t="RESPONSESTATUSNOTOK"===e.message?"You sent an invalid value!":"SAMECURRENCY"===e.message?"You have already set that currency!":"You have a network problem! Try refreshing the page!",o({open:!0,message:t})}))}})]})},ae=function(e){return Object(j.jsx)("div",{style:{display:"flex",flexDirection:"row-reverse",flexWrap:"wrap",justifyContent:"flex-end"},children:e.children})},oe=function(e){return Object(j.jsx)("div",{style:{order:2},children:e.children})},ce=function(e){return Object(j.jsx)("div",{style:{order:1,minWidth:"70%"},children:e.children})},ie=n(378),se=n(383),ue=n(386),de=n(374);function le(e){for(var t=0,n=[],r=0;r<e.length;r++)t+=e[r].value,n[r]={date:NaN,value:NaN},n[r].value=t,n[r].date=new Date(e[r].date).getTime();return n}var be=function(e){return Object(j.jsx)("div",{style:{maxWidth:"40rem"},children:Object(j.jsxs)(ie.a,{theme:se.a.material,children:[Object(j.jsx)(ue.a,{tickFormat:function(e){var t=new Date(e);return"".concat(t.getDate(),"-").concat(t.getMonth()+1,"-").concat(t.getFullYear().toString().slice(-2))}}),Object(j.jsx)(ue.a,{dependentAxis:!0,tickFormat:function(e){return e}}),Object(j.jsx)(de.a,{data:le(e.money).map((function(e){return{date:new Date(e.date).getTime(),value:e.value}})),x:"date",y:"value"})]})})};window.htmlentities={encode:function(e){for(var t=[],n=e.length-1;n>=0;n--)t.unshift(["&#",e.charCodeAt(n),";"].join(""));return t.join("")},decode:function(e){return e.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(t)}))}},"{{money}}"===window.money&&(window.money=JSON.stringify([{date:new Date("1, March 2021").toISOString(),value:1},{date:new Date("2, June 2021").toISOString(),value:2},{date:new Date("27, January 2022").toISOString(),value:3},{date:new Date("25, December 2023").toISOString(),value:4}]),window.quota="123.456",window.currency="\u20ac");var je=JSON.parse(window.htmlentities.decode(window.money).replaceAll("'",'"'));var Oe=function(){var e=Object(r.useState)(je),t=Object(c.a)(e,2),n=t[0],a=t[1],o=Object(r.useState)(window.currency),i=Object(c.a)(o,2),s=i[0],u=i[1],d=Object(r.useState)(parseFloat(window.quota)),l=Object(c.a)(d,2),b=l[0],O=l[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"SaveBase"}),Object(j.jsxs)(ae,{children:[Object(j.jsxs)(oe,{children:[Object(j.jsx)(re,{currency:s,quota:b,updateQuota:function(e){return O(e)},updateCurrency:function(e){return u(e)}}),Object(j.jsx)(_,{currency:s,money:n,updateMoney:function(e){return a(e)}})]}),Object(j.jsx)(ce,{children:Object(j.jsx)(be,{money:n})})]})]})};o.a.render(Object(j.jsx)(Oe,{}),document.getElementById("root"))}},[[322,1,2]]]);
//# sourceMappingURL=main.a7dce608.chunk.js.map