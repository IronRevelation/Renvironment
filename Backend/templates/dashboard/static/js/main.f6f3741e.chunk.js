(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);n(1);var o=n(4),c=n.n(o),i=n(14),d=n(15),r=n(0),l=function(e){var t=new Date(e.date),n={border:"1px solid black",borderCollapse:"collapse"};return Object(r.jsx)("div",{children:Object(r.jsxs)("table",{style:n,children:[Object(r.jsxs)("tr",{style:n,children:[Object(r.jsx)("th",{style:n,children:"Date"}),Object(r.jsx)("th",{style:n,children:"Value"}),Object(r.jsx)("th",{style:n,children:"Modify"}),Object(r.jsx)("th",{style:n,children:"Delete"})]}),Object(r.jsxs)("tr",{style:n,children:[Object(r.jsx)("td",{style:n,children:"".concat(t.getFullYear(),"-").concat(t.getMonth()+1,"-").concat(t.getDate())}),Object(r.jsx)("td",{style:n,children:e.value}),Object(r.jsx)("td",{children:Object(r.jsxs)("button",{onClick:function(){var t,n=parseFloat(null!==(t=prompt("Insert the new quantity:"))&&void 0!==t?t:"");e.updateSingleElem(e.index,n.toFixed(Math.max(2,(n.toString().split(".")[1]||[]).length)))},children:[Object(r.jsx)(i.a,{})," Edit value"]})}),Object(r.jsx)("td",{children:Object(r.jsxs)("button",{onClick:function(){return e.deleteElem(e.index)},children:[Object(r.jsx)(d.a,{})," Delete value"]})})]})]})})},a=n(16),s=function(e){return Object(r.jsxs)("button",{onClick:function(){return e.addFn()},children:[Object(r.jsx)(a.a,{})," Add value"]})},h=function(e){var t=JSON.parse(e.money);return Object(r.jsxs)("div",{children:[Object(r.jsx)(s,{addFn:function(){fetch("/api/add_money/".concat(function(){var e,t=parseFloat(null!==(e=prompt("Insert the new quantity:"))&&void 0!==e?e:"");return t.toFixed(Math.max(2,(t.toString().split(".")[1]||[]).length))}()),{method:"POST"}).then((function(){window.location.href="/dashboard"}))}}),t.map((function(e,t){return Object(r.jsx)(l,{updateSingleElem:function(e,t){fetch("/api/modify_money/".concat(e,"/").concat(t),{method:"POST"}).then((function(){return window.location.href="/dashboard"}))},deleteElem:function(e){fetch("/api/remove_money/".concat(e),{method:"POST"}).then((function(){return window.location.href="/dashboard"}))},index:t,date:e.date,value:e.value},t)}))]})};window.htmlentities={encode:function(e){for(var t=[],n=e.length-1;n>=0;n--)t.unshift(["&#",e.charCodeAt(n),";"].join(""));return t.join("")},decode:function(e){return e.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(t)}))}},"{{id}}"===window.id&&"{{money}}"===window.money&&(window.id="12345678",window.money=JSON.stringify([{date:(new Date).toISOString(),value:3.14}]));var u=function(){return Object(r.jsxs)("div",{children:[Object(r.jsxs)("h1",{children:["IL TUO ID E':",window.id||"Nessun ID"]}),Object(r.jsx)("h1",{children:"MONEY"}),Object(r.jsx)(h,{money:window.htmlentities.decode(window.money).replaceAll("'",'"')})]})};c.a.render(Object(r.jsx)(u,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.f6f3741e.chunk.js.map