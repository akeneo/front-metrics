(this["webpackJsonpfront-metrics"]=this["webpackJsonpfront-metrics"]||[]).push([[0],{837:function(e,t,r){"use strict";r.r(t);var n,c,i,a,o,s,l,p,j,b=r(35),d=r(6),u=r(0),m=r.n(u),O=r(42),h=r.n(O),x=r(3),f=r(15),g=r(130),y=r(26),C=r(77),v=r(263),S=function e(t,r){if(0===r.length)return t;var n=Object(v.a)(r),c=n[0],i=n.slice(1);return"file"===t.type||void 0===c?t:e(t.children[c],i)},T=function(e){return e<.4?["danger",40]:e<.6?["danger",20]:e<.8?["warning",40]:e<.95?["warning",20]:e<1?["primary",20]:["primary",40]},w=Object(x.default)(d.Table.Cell)(n||(n=Object(b.a)(["\n  background-color: ",";\n"])),(function(e){var t=Object(f.a)(e.color,2),r=t[0],n=t[1];return Object(d.getColorForLevel)(r,n)})),I=r(2),D=x.default.div(c||(c=Object(b.a)(["\n  margin: 20px 0;\n  display: flex;\n  justify-content: space-between;\n"]))),L=Object(x.default)(d.IconCard)(i||(i=Object(b.a)(["\n  & > div:nth-child(2) > div:nth-child(1),\n  svg {\n    color: ",";\n  }\n"])),(function(e){var t=Object(f.a)(e.color,2),r=t[0],n=t[1];return Object(d.getColorForLevel)(r,n+40)})),R=function(e){var t,r,n=e.report,c=new Intl.NumberFormat("en-US",{style:"percent",minimumFractionDigits:2});return Object(I.jsxs)(D,{children:[Object(I.jsx)(L,{color:T(n.metrics.typescript/(n.metrics.javascript+n.metrics.typescript)),label:c.format(n.metrics.typescript/(n.metrics.javascript+n.metrics.typescript)),icon:Object(I.jsx)(d.ActivityIcon,{}),content:"Typescript ratio"}),Object(I.jsx)(L,{color:T(n.metrics.typescriptLOC/(n.metrics.javascriptLOC+n.metrics.typescriptLOC)),label:n.metrics.requireInTypescript.toString(),icon:Object(I.jsx)(d.AttributeLinkIcon,{}),content:"Require in typescript"}),Object(I.jsx)(L,{color:[0<n.metrics.requireInTypescript?"danger":"primary",60],label:n.metrics.defineInJavascript.toString(),icon:Object(I.jsx)(d.AssociateIcon,{}),content:"Number of legacy files"}),Object(I.jsx)(L,{color:[0<n.metrics.requireInTypescript?"danger":"primary",60],label:n.metrics.reactClassComponent.toString(),icon:Object(I.jsx)(d.RefreshIcon,{}),content:"React classes"}),Object(I.jsx)(L,{color:[0<n.metrics.bemInTypescript?"danger":"primary",60],label:n.metrics.bemInTypescript.toString(),icon:Object(I.jsx)(d.EntityMultiIcon,{}),content:"BEM in typescript"}),Object(I.jsx)(L,{color:[0<(null!==(t=n.metrics.reactRender)&&void 0!==t?t:0)?"danger":"primary",60],label:(null!==(r=n.metrics.reactRender)&&void 0!==r?r:0).toString(),icon:Object(I.jsx)(d.EntityMultiIcon,{}),content:"React.render"}),Object(I.jsx)(L,{color:[0<n.metrics.reactController?"danger":"primary",60],label:n.metrics.reactController.toString(),icon:Object(I.jsx)(d.FactoryIcon,{}),content:"Legacy bridges"}),Object(I.jsx)(L,{color:[0<n.metrics.backboneController?"danger":"primary",60],label:n.metrics.backboneController.toString(),icon:Object(I.jsx)(d.ComponentIcon,{}),content:"Backbone controllers"})]})},k=function(e){var t=function(e,t){var r=localStorage.getItem(t),n=Object(u.useState)(null!==r?JSON.parse(r):e),c=Object(f.a)(n,2),i=c[0],a=c[1];return Object(u.useEffect)((function(){localStorage.setItem(t,JSON.stringify(i))}),[i,t]),[i,a]}({columnName:null,sortDirection:"none"},"sort_state"),r=Object(f.a)(t,2),n=r[0],c=r[1];return[Object(u.useMemo)((function(){return function(e,t,r){return null===t?e:"name"===t?Object(C.a)(e).sort((function(e,t){return"ascending"===r?e.name.localeCompare(t.name):t.name.localeCompare(e.name)})):Object(C.a)(e).sort((function(e,n){return"ascending"===r?e.metrics[t]-n.metrics[t]:n.metrics[t]-e.metrics[t]}))}(e,n.columnName,n.sortDirection)}),[n,e]),function(e){return e!==n.columnName?"none":n.sortDirection},function(e){return function(t){c({columnName:e,sortDirection:t})}}]},M=r(58),N=r(839),B=r(840),q=r(278),F=r(279),H=r(110),E=r(282),J=r(272),A=x.default.div(a||(a=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),U=function(e){var t=e.reportRoots,r=e.label,n=e.description,c=e.metric,i=Object(u.useMemo)((function(){return function(e,t){return e.map((function(e){return{value:e.metrics[t],time:new Date(e.reportName).getTime()}}))}(t,c)}),[t,c]),a=Object(u.useState)({rangeSelection:{start:null,end:null},left:"dataMin",right:"dataMax",top:"dataMax+1"}),o=Object(f.a)(a,2),s=o[0],l=o[1];return Object(I.jsxs)(A,{children:[Object(I.jsxs)(d.SectionTitle,{children:[Object(I.jsx)(d.SectionTitle.Title,{children:r}),Object(I.jsx)(d.SectionTitle.Spacer,{}),Object(I.jsx)(d.SectionTitle.Information,{children:n}),Object(I.jsx)(d.SectionTitle.Separator,{}),Object(I.jsx)(d.Button,{onClick:function(){l((function(){return{rangeSelection:{start:null,end:null},left:"dataMin",right:"dataMax",top:"dataMax+1"}}))},children:"Reset"})]}),Object(I.jsx)(N.a,{width:"95%",height:400,children:Object(I.jsxs)(B.a,{data:i,onMouseDown:function(e){null!==e&&l((function(t){return Object(M.a)(Object(M.a)({},t),{},{rangeSelection:{start:e.activeLabel,end:null}})}))},onMouseMove:function(e){null!==e&&null!==s.rangeSelection.start&&l((function(t){return Object(M.a)(Object(M.a)({},t),{},{rangeSelection:Object(M.a)(Object(M.a)({},t.rangeSelection),{},{end:e.activeLabel})})}))},onMouseUp:function(){if(null!==s.rangeSelection.start&&null!==s.rangeSelection.end&&s.rangeSelection.start!==s.rangeSelection.end){var e=Math.min(s.rangeSelection.start,s.rangeSelection.end),t=Math.max(s.rangeSelection.start,s.rangeSelection.end),r=i.filter((function(r){return r.time>e&&r.time<t})).map((function(e){return e.value}));l((function(){return{rangeSelection:{start:null,end:null},left:e,right:t,top:Math.max.apply(Math,Object(C.a)(r))+1}}))}else l((function(e){return Object(M.a)(Object(M.a)({},e),{},{rangeSelection:{start:null,end:null}})}))},children:[Object(I.jsx)(q.a,{allowDataOverflow:!0,domain:[s.left,s.right],dataKey:"time",name:"Time",tickFormatter:function(e){return new Date(e).toLocaleDateString("en-US")},type:"number"}),Object(I.jsx)(F.a,{allowDataOverflow:!0,dataKey:"value",name:"Value",domain:[0,s.top]}),Object(I.jsx)(H.a,{isAnimationActive:!1,labelFormatter:function(e){return new Date(e).toLocaleDateString("en-US")}}),Object(I.jsx)(E.a,{type:"monotone",dataKey:"value",stroke:"#8884d8",dot:!1,isAnimationActive:!1}),null!==s.rangeSelection.start&&null!==s.rangeSelection.end?Object(I.jsx)(J.a,{x1:s.rangeSelection.start,x2:s.rangeSelection.end,strokeOpacity:1}):null]})})]})},z=x.default.div(o||(o=Object(b.a)(["\n  margin-top: 20px;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 20px;\n"]))),K=function(e){var t=e.reportRoots,r={typescriptLOC:{label:"TypeScript LOC",description:"(should go up)"},javascriptLOC:{label:"JavaScript LOC",description:"(should go down)"},requireInJavascript:{label:"Require in javascript",description:""},requireInTypescript:{label:"Require in TypeScript",description:"Using require in a typescript file, shows that a new feature is coupled with a legacy module (should go down)"},reactClassComponent:{label:"React classes",description:"This is the old way of doing React components. This is not high priority but those component should disapear eventualy (should go down)"},bemInTypescript:{label:"BEM in typescript",description:"BEM is our legacy design system and should not be used anymore. The DSM should be used instead (should go down)"},reactRender:{label:"React render",description:"This metric show every time we boot a react app (should go down)"},reactController:{description:"It's a way to integrate a React app in a Backbone app (should go down)",label:"Legacy bridges"},backboneController:{description:"Every Backbone Controller represent a page in the PIM using Backbone (should go down)",label:"Backbone controllers"}};return Object(I.jsx)(z,{children:Object.keys(r).map((function(e){return Object(I.jsx)(U,{metric:e,label:r[e].label,description:r[e].description,reportRoots:t},e)}))})},P=x.default.div(s||(s=Object(b.a)(["\n  display: flex;\n"]))),V=Object(x.default)(d.Table.Cell)(l||(l=Object(b.a)(["\n  & > div {\n    display: flex;\n    justify-content: space-between;\n  }\n"]))),G=x.default.div(p||(p=Object(b.a)(["\n  flex: 1;\n"]))),_=function(e){var t=e.report,r=e.reportName,n=e.reports,c=e.onReportChange,i=Object(y.f)().url,a=i.substring(1),o=a?a.split("/"):[],s=S(t,o),l=k("file"===s.type?[]:Object.values(s.children)),p=Object(f.a)(l,3),j=p[0],b=p[1],m=p[2],O=Object(d.useBooleanState)(),h=Object(f.a)(O,3),x=h[0],v=h[1],D=h[2],L=Object(u.useMemo)((function(){return Object(C.a)(n).sort((function(e,t){return t.reportName.localeCompare(e.reportName)}))}),[n]);return"file"===s.type?null:Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)(P,{children:[Object(I.jsxs)(d.Breadcrumb,{children:[Object(I.jsx)(d.Breadcrumb.Step,{href:"#/",children:"Root"}),o.map((function(e){return Object(I.jsx)(d.Breadcrumb.Step,{href:"#".concat(i.substring(0,i.indexOf(e))).concat(e),children:e},e)}))]}),Object(I.jsx)(G,{}),Object(I.jsxs)(d.Dropdown,{children:[Object(I.jsx)(d.SwitcherButton,{label:"Report",onClick:v,children:r}),x&&Object(I.jsxs)(d.Dropdown.Overlay,{verticalPosition:"down",onClose:D,children:[Object(I.jsx)(d.Dropdown.Header,{children:Object(I.jsx)(d.Dropdown.Title,{children:"Reports"})}),Object(I.jsx)(d.Dropdown.ItemCollection,{children:L.map((function(e){return Object(I.jsx)(d.Dropdown.Item,{onClick:function(){c(e.reportName),D()},children:e.reportName},e.reportName)}))})]})]})]}),Object(I.jsx)(R,{report:s}),Object(I.jsxs)(d.Table,{children:[Object(I.jsxs)(d.Table.Header,{sticky:0,children:[Object(I.jsx)(d.Table.HeaderCell,{isSortable:!0,onDirectionChange:m("name"),sortDirection:b("name"),children:"Name"}),Object(I.jsx)(d.Table.HeaderCell,{children:"Typescript ratio (File)"}),Object(I.jsx)(d.Table.HeaderCell,{children:"Typescript ratio (LOC)"}),Object(I.jsx)(d.Table.HeaderCell,{isSortable:!0,onDirectionChange:m("requireInTypescript"),sortDirection:b("requireInTypescript"),children:"Require in typescript"}),Object(I.jsx)(d.Table.HeaderCell,{isSortable:!0,onDirectionChange:m("defineInJavascript"),sortDirection:b("defineInJavascript"),children:"Number of legacy files"}),Object(I.jsx)(d.Table.HeaderCell,{isSortable:!0,onDirectionChange:m("reactClassComponent"),sortDirection:b("reactClassComponent"),children:"React classes"}),Object(I.jsx)(d.Table.HeaderCell,{isSortable:!0,onDirectionChange:m("bemInTypescript"),sortDirection:b("bemInTypescript"),children:"BEM in typescript"}),Object(I.jsx)(d.Table.HeaderCell,{isSortable:!0,onDirectionChange:m("reactRender"),sortDirection:b("reactRender"),children:"React.render"}),Object(I.jsx)(d.Table.HeaderCell,{isSortable:!0,onDirectionChange:m("reactController"),sortDirection:b("reactController"),children:"Legacy bridges"}),Object(I.jsx)(d.Table.HeaderCell,{isSortable:!0,onDirectionChange:m("backboneController"),sortDirection:b("backboneController"),children:"Backbone controllers"})]}),Object(I.jsx)(d.Table.Body,{children:j.map((function(e){var t,r,n="/"===i?"/".concat(e.name):"".concat(i,"/").concat(e.name),c=new Intl.NumberFormat("en-US",{style:"percent",minimumFractionDigits:2});return Object(I.jsxs)(d.Table.Row,{children:[Object(I.jsxs)(V,{children:["file"===e.type?Object(I.jsx)(d.FileIcon,{size:20}):Object(I.jsx)(d.FolderIcon,{size:20}),"\xa0\xa0","file"===e.type?e.name:Object(I.jsx)(g.b,{to:n,children:e.name}),Object(I.jsx)("a",{href:e.path.replace("/enterprise/","https://github.com/akeneo/pim-enterprise-dev/blob/master/").replace("/community/","https://github.com/akeneo/pim-community-dev/blob/master/"),children:Object(I.jsx)(d.IconButton,{size:"small",ghost:"borderless",level:"tertiary",icon:Object(I.jsx)(d.ViewIcon,{}),title:"Open in github"})}),Object(I.jsx)(G,{}),"directory"===e.type&&Object(I.jsxs)(d.Badge,{children:[e.metrics.javascriptLOC+e.metrics.typescriptLOC," |"," ",e.metrics.javascript+e.metrics.typescript]})]}),Object(I.jsxs)(w,{color:T(e.metrics.typescript/(e.metrics.javascript+e.metrics.typescript)),title:"".concat(e.metrics.typescript," / ").concat(e.metrics.javascript+e.metrics.typescript),children:[c.format(e.metrics.typescript/(e.metrics.javascript+e.metrics.typescript))," ","(",e.metrics.javascript," javascript files)"]}),Object(I.jsxs)(w,{color:T(e.metrics.typescriptLOC/(e.metrics.javascriptLOC+e.metrics.typescriptLOC)),title:"".concat(e.metrics.typescriptLOC," / ").concat(e.metrics.javascriptLOC+e.metrics.typescriptLOC),children:[c.format(e.metrics.typescriptLOC/(e.metrics.javascriptLOC+e.metrics.typescriptLOC))," ","(",e.metrics.javascriptLOC," javascript LOC)"]}),Object(I.jsx)(w,{color:[0<e.metrics.requireInTypescript?"danger":"primary",40],children:e.metrics.requireInTypescript}),Object(I.jsx)(d.Table.Cell,{children:e.metrics.defineInJavascript}),Object(I.jsx)(w,{color:[0<e.metrics.reactClassComponent?"danger":"primary",40],children:e.metrics.reactClassComponent}),Object(I.jsx)(w,{color:[0<e.metrics.bemInTypescript?"danger":"primary",40],children:e.metrics.bemInTypescript}),Object(I.jsx)(w,{color:[0<(null!==(t=e.metrics.reactRender)&&void 0!==t?t:0)?"danger":"primary",40],children:null!==(r=e.metrics.reactRender)&&void 0!==r?r:"N/A"}),Object(I.jsx)(d.Table.Cell,{children:e.metrics.reactController}),Object(I.jsx)(d.Table.Cell,{children:e.metrics.backboneController})]},e.name)}))})]}),0===o.length&&Object(I.jsx)(K,{reportRoots:n})]})},Q=r(68),W=r.n(Q),X=r(180),Y=function(){var e=function(){var e=Object(u.useState)(null),t=Object(f.a)(e,2),r=t[0],n=t[1],c=Object(u.useState)(null),i=Object(f.a)(c,2),a=i[0],o=i[1],s=Object(u.useState)([]),l=Object(f.a)(s,2),p=l[0],j=l[1];return Object(u.useEffect)((function(){Object(X.a)(W.a.mark((function e(){var t,r;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("./reports.json");case 2:return t=e.sent,e.next=5,t.json();case 5:r=e.sent,j(r),n(r[r.length-1].reportName);case 8:case"end":return e.stop()}}),e)})))()}),[]),Object(u.useEffect)((function(){r&&Object(X.a)(W.a.mark((function e(){var t;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("./reports/".concat(r,".json"));case 2:return t=e.sent,e.t0=o,e.next=6,t.json();case 6:e.t1=e.sent,(0,e.t0)(e.t1);case 8:case"end":return e.stop()}}),e)})))()}),[r]),[a,r,p,n]}(),t=Object(f.a)(e,4),r=t[0],n=t[1],c=t[2],i=t[3];return null===r?Object(I.jsx)("div",{children:"Loading"}):Object(I.jsx)(g.a,{children:Object(I.jsxs)(y.c,{children:[Object(I.jsx)(y.a,{exact:!0,path:"/:path+/",children:Object(I.jsx)(_,{report:r,reports:c,reportName:n,onReportChange:i})}),Object(I.jsx)(y.a,{exact:!0,path:"/",children:Object(I.jsx)(_,{report:r,reports:c,reportName:n,onReportChange:i})})]})})},Z=Object(x.createGlobalStyle)(j||(j=Object(b.a)(["\n  body {\n    margin: 0;\n    padding: 20px;\n    ",";\n  }\n"])),d.CommonStyle);0!==window.location.hash.indexOf("#/")&&(window.location.href="".concat(window.location.href,"/#/")),h.a.render(Object(I.jsx)(m.a.StrictMode,{children:Object(I.jsxs)(x.ThemeProvider,{theme:d.onboarderTheme,children:[Object(I.jsx)(Z,{}),Object(I.jsx)(Y,{})]})}),document.getElementById("root"))}},[[837,1,2]]]);
//# sourceMappingURL=main.89e8b966.chunk.js.map