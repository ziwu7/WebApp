!function(){function e(e,r,t,n){Object.defineProperty(e,r,{get:t,set:n,enumerable:!0,configurable:!0})}var r=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire951b,t=r.register;t("hOP1s",function(t,n){Object.defineProperty(t.exports,"__esModule",{value:!0,configurable:!0}),e(t.exports,"default",function(){return O});var a,o,i,l,c,s,u,f,d,p=r("gV4k2"),m=r("I2P72"),b=r("gdLkz"),h=r("7tQZq"),g=r("dMn7r"),y=r("iDlJk"),v=r("ksXWa"),w=r("9RkJG"),x=r("9t6ns"),j=r("dvULH"),T=r("912gW"),S=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)0>r.indexOf(n[a])&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t},E={in:"寄入",out:"寄出",both:"寄入寄出"},O=(i=[(0,v.component)({tagName:"logistics-page"}),v.observer],l=[],s=o=function(e){(0,b._)(t,e);var r=(0,g._)(t);function t(){var e;return(0,m._)(this,t),e=r.call.apply(r,[this].concat(Array.prototype.slice.call(arguments))),Object.defineProperty((0,p._)(e),"scope",{enumerable:!0,configurable:!0,writable:!0,value:"logistics"}),Object.defineProperty((0,p._)(e),"model",{enumerable:!0,configurable:!0,writable:!0,value:T.logistics}),Object.defineProperty((0,p._)(e),"name",{enumerable:!0,configurable:!0,writable:!0,value:"物流公司"}),Object.defineProperty((0,p._)(e),"renderItem",{enumerable:!0,configurable:!0,writable:!0,value:function(r){var t=r.url,n=r.name,a=r.serviceArea,o=r.contacts,i=r.remark,l=S(r,["url","name","serviceArea","contacts","remark"]);return(0,y.jsxs)(w.Card,{children:[(0,y.jsxs)(w.CardBody,{children:[(0,y.jsx)(w.CardTitle,{children:t?(0,y.jsx)("a",{className:"text-decoration-none",target:"_blank",href:t,children:n}):n}),a.map(e.renderServiceArea),null==o?void 0:o.map(e.renderContact),(0,y.jsx)("p",{className:"text-muted",children:i})]}),(0,y.jsx)(w.CardFooter,{children:(0,y.jsx)(x.AuditBar,Object.assign({scope:"logistics",model:T.logistics},l))})]},n)}}),Object.defineProperty((0,p._)(e),"renderServiceArea",{enumerable:!0,configurable:!0,writable:!0,value:function(e){var r=e.city,t=e.direction,n=e.personal;return(0,y.jsxs)("dl",{children:[(0,y.jsx)("dt",{children:"地区："}),(0,y.jsx)("dd",{children:r}),(0,y.jsx)("dt",{children:"方向："}),(0,y.jsx)("dd",{children:E[t]}),!n&&(0,y.jsx)("dd",{children:(0,y.jsx)(w.Badge,{bg:"danger",children:"不接受个人捐赠"})})]},r)}}),Object.defineProperty((0,p._)(e),"renderContact",{enumerable:!0,configurable:!0,writable:!0,value:function(e){var r=e.name,t=e.phone;return(0,y.jsx)("p",{className:"mb-1",children:(0,y.jsxs)("a",{className:"text-center text-decoration-none",href:"tel:"+t,children:[(0,y.jsx)(w.BGIcon,{name:"phone"})," ",r," ",t]})},r)}}),e}return t}(c=j.CardsPage),u="LogisticsPage","symbol"===(0,h._)(u)&&(u=u.description?"[".concat(u.description,"]"):""),Object.defineProperty(s,"name",{configurable:!0,value:u}),d="function"==typeof Symbol&&Symbol.metadata?Object.create(null!==(f=c[Symbol.metadata])&&void 0!==f?f:null):void 0,function(e,r,t,n,a,o){function i(e){if(void 0!==e&&"function"!=typeof e)throw TypeError("Function expected");return e}for(var l,c=n.kind,s="getter"===c?"get":"setter"===c?"set":"value",u=r||{},f=!1,d=t.length-1;d>=0;d--){var p={};for(var m in n)p[m]="access"===m?{}:n[m];for(var m in n.access)p.access[m]=n.access[m];p.addInitializer=function(e){if(f)throw TypeError("Cannot add initializers after decoration has completed");o.push(i(e||null))};var b=(0,t[d])("accessor"===c?{get:u.get,set:u.set}:u[s],p);if("accessor"===c){if(void 0===b)continue;if(null===b||"object"!=typeof b)throw TypeError("Object expected");(l=i(b.get))&&(u.get=l),(l=i(b.set))&&(u.set=l),(l=i(b.init))&&null.unshift(l)}else(l=i(b))&&("field"===c?null.unshift(l):u[s]=l)}f=!0}(0,a={value:o},i,{kind:"class",name:o.name,metadata:d},null,l),o=a.value,d&&Object.defineProperty(o,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:d}),function(e,r,t){for(var n=arguments.length>2,a=0;a<r.length;a++)t=n?r[a].call(e,t):r[a].call(e)}(o,l),o)}),t("gKVDL",function(t,n){e(t.exports,"errors",function(){return l}),e(t.exports,"config",function(){return c}),e(t.exports,"fromDataTransfer",function(){return s}),e(t.exports,"getDirHandlesFromInput",function(){return f}),e(t.exports,"getFileHandlesFromInput",function(){return p});var a=r("7eVHo"),o=r("72bWt"),i=r("fkswq"),l={INVALID:["seeking position failed.","InvalidStateError"],GONE:["A requested file or directory could not be found at the time an operation was processed.","NotFoundError"],MISMATCH:["The path supplied exists, but was not an entry of requested type.","TypeMismatchError"],MOD_ERR:["The object can not be modified in this way.","InvalidModificationError"],SYNTAX:function(e){return["Failed to execute 'write' on 'UnderlyingSinkBase': Invalid params passed. ".concat(e),"SyntaxError"]},SECURITY:["It was determined that certain files are unsafe for access within a Web application, or that too many calls are being made on file resources.","SecurityError"],DISALLOWED:["The request is not allowed by the user agent or the platform in the current context.","NotAllowedError"]},c={writable:globalThis.WritableStream};function s(e){return u.apply(this,arguments)}function u(){return(u=(0,a._)(function(e){var t,n,a,l,c;return(0,i.__generator)(this,function(i){switch(i.label){case 0:return console.warn("deprecated fromDataTransfer - use `dt.items[0].getAsFileSystemHandle()` instead"),[4,Promise.all([r("lWSaf"),r("9mM6W"),r("7sfzw")])];case 1:return n=(t=(0,o._).apply(void 0,[i.sent(),3]))[0],a=t[1],l=t[2],(c=new n.FolderHandle("",!1))._entries=e.map(function(e){return e.isFile?new a.FileHandle(e,!1):new a.FolderHandle(e,!1)}),[2,new l.FileSystemDirectoryHandle(c)]}})})).apply(this,arguments)}function f(e){return d.apply(this,arguments)}function d(){return(d=(0,a._)(function(e){var t,n,a,o,l,c,s;return(0,i.__generator)(this,function(i){switch(i.label){case 0:return[4,r("lWSaf")];case 1:return n=(t=i.sent()).FolderHandle,a=t.FileHandle,[4,r("7sfzw")];case 2:return o=i.sent().FileSystemDirectoryHandle,c=(l=Array.from(e.files))[0].webkitRelativePath.split("/",1)[0],s=new n(c,!1),l.forEach(function(e){var r=e.webkitRelativePath.split("/");r.shift();var t=r.pop();r.reduce(function(e,r){return e._entries[r]||(e._entries[r]=new n(r,!1)),e._entries[r]},s)._entries[t]=new a(e.name,e,!1)}),[2,new o(s)]}})})).apply(this,arguments)}function p(e){return m.apply(this,arguments)}function m(){return(m=(0,a._)(function(e){var t,n;return(0,i.__generator)(this,function(a){switch(a.label){case 0:return[4,r("lWSaf")];case 1:return t=a.sent().FileHandle,[4,r("7ifET")];case 2:return n=a.sent().FileSystemFileHandle,[2,Array.from(e.files).map(function(e){return new n(new t(e.name,e,!1))})]}})})).apply(this,arguments)}}),t("lWSaf",function(e,t){e.exports=r("c3Nfi")(r("kC3Tq").resolve("ecOdP")).then(function(){return r("7MvC9")})}),t("c3Nfi",function(e,t){var n=r("9EbbF");e.exports=n(function(e){return new Promise(function(r,t){if([].concat(document.getElementsByTagName("script")).some(function(r){return r.src===e})){r();return}var n=document.createElement("link");n.href=e,n.rel="preload",n.as="script",document.head.appendChild(n);var a=document.createElement("script");a.async=!0,a.type="text/javascript",a.src=e,a.onerror=function(r){var n=TypeError("Failed to fetch dynamically imported module: ".concat(e,". Error: ").concat(r.message));a.onerror=a.onload=null,a.remove(),t(n)},a.onload=function(){a.onerror=a.onload=null,r()},document.getElementsByTagName("head")[0].appendChild(a)})})}),t("9EbbF",function(e,r){var t={},n={},a={};e.exports=function(e,r){return function(o){var i=function(e){switch(e){case"preload":return n;case"prefetch":return a;default:return t}}(r);return i[o]?i[o]:i[o]=e.apply(null,arguments).catch(function(e){throw delete i[o],e})}}}),t("kC3Tq",function(r,t){e(r.exports,"register",function(){return n},function(e){return n=e}),e(r.exports,"resolve",function(){return a},function(e){return a=e});var n,a,o=new Map;n=function(e,r){for(var t=0;t<r.length-1;t+=2)o.set(r[t],{baseUrl:e,path:r[t+1]})},a=function(e){var r=o.get(e);if(null==r)throw Error("Could not resolve bundle with id "+e);return new URL(r.path,r.baseUrl).toString()}}),t("9mM6W",function(e,t){e.exports=r("c3Nfi")(r("kC3Tq").resolve("3KEM7")).then(function(){return r("2wF3H")})}),t("7sfzw",function(e,t){e.exports=r("c3Nfi")(r("kC3Tq").resolve("9FPx2")).then(function(){return r("5yJoG")})}),t("7ifET",function(e,t){e.exports=r("c3Nfi")(r("kC3Tq").resolve("7hTL1")).then(function(){return r("42yKc")})}),t("jr756",function(r,t){e(r.exports,"default",function(){return n});var n={ReadableStream:globalThis.ReadableStream,WritableStream:globalThis.WritableStream,TransformStream:globalThis.TransformStream,DOMException:globalThis.DOMException,Blob:globalThis.Blob,File:globalThis.File}})}();