(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(4),r=a.n(s),o=(a(9),a(2)),l=(a(10),a(0));function i(e){return Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(l.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})})}),Object(l.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(l.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(l.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable dark mode"})]})]})]})})}function b(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],s=a[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(l.jsx)("h1",{children:e.heading}),Object(l.jsx)("div",{className:"mb-3",children:Object(l.jsx)("textarea",{className:"form-control",value:c,onChange:function(e){s(e.target.value)},style:{backgroundColor:"dark"===e.mode?"grey":"light",color:"dark"===e.mode?"white":"#042743"},id:"myBox",rows:"8"})}),Object(l.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var t=c.toUpperCase();s(t),e.showAlert("Converted to uppercase","sucess")},children:"Convert to Uppercase"}),Object(l.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var t=c.toLowerCase();s(t),e.showAlert("Converted to lowercase","sucess")},children:"Convert to Lowercase"}),Object(l.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){s(""),e.showAlert("Text Cleared","sucess")},children:"Clear Text "}),Object(l.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var t=document.getElementById("myBox");t.select(),t.setSelectionRange(0,9999),navigator.clipboard.writeText(t.value),e.showAlert("Copied to Cliboard","sucess"),e.showAlert("Coppied to Clipboard!","sucess")},children:"Copy Text"}),Object(l.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var t=c.split(/[ ]+/);s(t.join(" ")),e.showAlert("Extra Spaces Removed","sucess")},children:"Remove Extra Spaces"})]}),Object(l.jsxs)("div",{className:"container my-2",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(l.jsx)("h2",{children:"Your text summary"}),Object(l.jsxs)("p",{children:[c.split(" ").length," words and ",c.length," characters"]}),Object(l.jsxs)("p",{children:[.008*c.split(" ").length,"Minutes read"]}),Object(l.jsx)("h2",{children:"Preview"}),Object(l.jsx)("p",{children:c.length>0?c:"Enter something in the textbox above to preview it here"})]})]})}var d=function(e){return e.alert&&Object(l.jsxs)("div",{className:"alert alert-".concat(e.alert.type,"alert-dismissible fade show"),role:"alert",children:[Object(l.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),": ",e.alert.msg]})};var h=function(){var e=Object(n.useState)("light"),t=Object(o.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(null),r=Object(o.a)(s,2),h=r[0],j=r[1],m=function(e,t){j({msg:e,type:t}),setTimeout((function(){j(null)}),1500)};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(i,{title:"TexUtiles",mode:a,toggleMode:function(){"light"===a?(c("dark"),document.body.style.backgroundColor="#042743",m("Dark mode has been enabled","success")):(c("light"),document.body.style.backgroundColor="white",m("Light mode has been enabled","success"))},aboutText:"About"}),Object(l.jsx)(d,{alert:h}),Object(l.jsx)("div",{className:"container my-3",children:Object(l.jsx)(b,{showAlert:m,heading:"Enter the text to analyse below",mode:a})})]})},j=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root")),j()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.48a8be86.chunk.js.map