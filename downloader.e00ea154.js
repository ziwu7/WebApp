!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire951b,n=t.register;n("1cmJE",function(n,r){e(n.exports,"FileHandle",function(){return _});var o=t("7eVHo"),i=t("I2P72"),a=t("gmdU1"),s=t("iEu77"),u=t("fLCrg"),c=t("8qmKo"),l=t("fkswq"),f=t("gKVDL"),d=t("jr756"),p=d.default.WritableStream,h=d.default.TransformStream,m=d.default.DOMException,y=d.default.Blob,v=f.errors.GONE,g=/constructor/i.test(window.HTMLElement),_=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"unkown";(0,i._)(this,e),this.name=t,this.kind="file"}return(0,s._)(e,[{key:"getFile",value:function(){return(0,o._)(function(){return(0,l.__generator)(this,function(e){throw(0,a._)(m,(0,c._)(v))})})()}},{key:"isSameEntry",value:function(e){var t=this;return(0,o._)(function(){return(0,l.__generator)(this,function(n){return[2,t===e]})})()}},{key:"createWritable",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this;return(0,o._)(function(){var n,r,o,i,a,s,c,f,d,m,v,_,w;return(0,l.__generator)(this,function(l){switch(l.label){case 0:return[4,null===(n=navigator.serviceWorker)||void 0===n?void 0:n.getRegistration()];case 1:return r=l.sent(),o=document.createElement("a"),a=(i=new h).writable,o.download=t.name,g||!r?(s=[],i.readable.pipeTo(new p({write:function(e){s.push(new y([e]))},close:function(){var e=new y(s,{type:"application/octet-stream; charset=utf-8"});s=[],o.href=URL.createObjectURL(e),o.click(),setTimeout(function(){return URL.revokeObjectURL(o.href)},1e4)}}))):(f=(c=new b(p)).writable,d=c.readablePort,m=encodeURIComponent(t.name).replace(/['()]/g,escape).replace(/\*/g,"%2A"),v=(0,u._)({"content-disposition":"attachment; filename*=UTF-8''"+m,"content-type":"application/octet-stream; charset=utf-8"},e.size?{"content-length":e.size}:{}),_=setTimeout(function(){return r.active.postMessage(0)},1e4),i.readable.pipeThrough(new h({transform:function(e,t){if(e instanceof Uint8Array)return t.enqueue(e);var n=new Response(e).body.getReader(),r=function(e){return n.read().then(function(e){return e.done?0:r(t.enqueue(e.value))})};return r()}})).pipeTo(f).finally(function(){clearInterval(_)}),r.active.postMessage({url:r.scope+m,headers:v,readablePort:d},[d]),(w=document.createElement("iframe")).hidden=!0,w.src=r.scope+m,document.body.appendChild(w)),[2,a.getWriter()]}})})()}}]),e}(),w=function(){function e(t){var n=this;(0,i._)(this,e),t.onmessage=function(e){return n._onMessage(e.data)},this._port=t,this._resetReady()}return(0,s._)(e,[{key:"start",value:function(e){return this._controller=e,this._readyPromise}},{key:"write",value:function(e){return this._port.postMessage({type:0,chunk:e},[e.buffer]),this._resetReady(),this._readyPromise}},{key:"close",value:function(){this._port.postMessage({type:2}),this._port.close()}},{key:"abort",value:function(e){this._port.postMessage({type:1,reason:e}),this._port.close()}},{key:"_onMessage",value:function(e){0===e.type&&this._resolveReady(),1===e.type&&this._onError(e.reason)}},{key:"_onError",value:function(e){this._controller.error(e),this._rejectReady(e),this._port.close()}},{key:"_resetReady",value:function(){var e=this;this._readyPromise=new Promise(function(t,n){e._readyResolve=t,e._readyReject=n}),this._readyPending=!0}},{key:"_resolveReady",value:function(){this._readyResolve(),this._readyPending=!1}},{key:"_rejectReady",value:function(e){this._readyPending||this._resetReady(),this._readyPromise.catch(function(){}),this._readyReject(e),this._readyPending=!1}}]),e}(),b=function e(t){(0,i._)(this,e);var n=new MessageChannel;this.readablePort=n.port1,this.writable=new t(new w(n.port2))}}),n("gKVDL",function(n,r){e(n.exports,"errors",function(){return s}),e(n.exports,"config",function(){return u}),e(n.exports,"fromDataTransfer",function(){return c}),e(n.exports,"getDirHandlesFromInput",function(){return f}),e(n.exports,"getFileHandlesFromInput",function(){return p});var o=t("7eVHo"),i=t("72bWt"),a=t("fkswq"),s={INVALID:["seeking position failed.","InvalidStateError"],GONE:["A requested file or directory could not be found at the time an operation was processed.","NotFoundError"],MISMATCH:["The path supplied exists, but was not an entry of requested type.","TypeMismatchError"],MOD_ERR:["The object can not be modified in this way.","InvalidModificationError"],SYNTAX:function(e){return["Failed to execute 'write' on 'UnderlyingSinkBase': Invalid params passed. ".concat(e),"SyntaxError"]},SECURITY:["It was determined that certain files are unsafe for access within a Web application, or that too many calls are being made on file resources.","SecurityError"],DISALLOWED:["The request is not allowed by the user agent or the platform in the current context.","NotAllowedError"]},u={writable:globalThis.WritableStream};function c(e){return l.apply(this,arguments)}function l(){return(l=(0,o._)(function(e){var n,r,o,s,u;return(0,a.__generator)(this,function(a){switch(a.label){case 0:return console.warn("deprecated fromDataTransfer - use `dt.items[0].getAsFileSystemHandle()` instead"),[4,Promise.all([t("lWSaf"),t("9mM6W"),t("7sfzw")])];case 1:return r=(n=(0,i._).apply(void 0,[a.sent(),3]))[0],o=n[1],s=n[2],(u=new r.FolderHandle("",!1))._entries=e.map(function(e){return e.isFile?new o.FileHandle(e,!1):new o.FolderHandle(e,!1)}),[2,new s.FileSystemDirectoryHandle(u)]}})})).apply(this,arguments)}function f(e){return d.apply(this,arguments)}function d(){return(d=(0,o._)(function(e){var n,r,o,i,s,u,c;return(0,a.__generator)(this,function(a){switch(a.label){case 0:return[4,t("lWSaf")];case 1:return r=(n=a.sent()).FolderHandle,o=n.FileHandle,[4,t("7sfzw")];case 2:return i=a.sent().FileSystemDirectoryHandle,u=(s=Array.from(e.files))[0].webkitRelativePath.split("/",1)[0],c=new r(u,!1),s.forEach(function(e){var t=e.webkitRelativePath.split("/");t.shift();var n=t.pop();t.reduce(function(e,t){return e._entries[t]||(e._entries[t]=new r(t,!1)),e._entries[t]},c)._entries[n]=new o(e.name,e,!1)}),[2,new i(c)]}})})).apply(this,arguments)}function p(e){return h.apply(this,arguments)}function h(){return(h=(0,o._)(function(e){var n,r;return(0,a.__generator)(this,function(o){switch(o.label){case 0:return[4,t("lWSaf")];case 1:return n=o.sent().FileHandle,[4,t("7ifET")];case 2:return r=o.sent().FileSystemFileHandle,[2,Array.from(e.files).map(function(e){return new r(new n(e.name,e,!1))})]}})})).apply(this,arguments)}}),n("lWSaf",function(e,n){e.exports=t("c3Nfi")(t("kC3Tq").resolve("ecOdP")).then(function(){return t("7MvC9")})}),n("c3Nfi",function(e,n){var r=t("9EbbF");e.exports=r(function(e){return new Promise(function(t,n){if([].concat(document.getElementsByTagName("script")).some(function(t){return t.src===e})){t();return}var r=document.createElement("link");r.href=e,r.rel="preload",r.as="script",document.head.appendChild(r);var o=document.createElement("script");o.async=!0,o.type="text/javascript",o.src=e,o.onerror=function(t){var r=TypeError("Failed to fetch dynamically imported module: ".concat(e,". Error: ").concat(t.message));o.onerror=o.onload=null,o.remove(),n(r)},o.onload=function(){o.onerror=o.onload=null,t()},document.getElementsByTagName("head")[0].appendChild(o)})})}),n("9EbbF",function(e,t){var n={},r={},o={};e.exports=function(e,t){return function(i){var a=function(e){switch(e){case"preload":return r;case"prefetch":return o;default:return n}}(t);return a[i]?a[i]:a[i]=e.apply(null,arguments).catch(function(e){throw delete a[i],e})}}}),n("kC3Tq",function(t,n){e(t.exports,"register",function(){return r},function(e){return r=e}),e(t.exports,"resolve",function(){return o},function(e){return o=e});var r,o,i=new Map;r=function(e,t){for(var n=0;n<t.length-1;n+=2)i.set(t[n],{baseUrl:e,path:t[n+1]})},o=function(e){var t=i.get(e);if(null==t)throw Error("Could not resolve bundle with id "+e);return new URL(t.path,t.baseUrl).toString()}}),n("9mM6W",function(e,n){e.exports=t("c3Nfi")(t("kC3Tq").resolve("3KEM7")).then(function(){return t("2wF3H")})}),n("7sfzw",function(e,n){e.exports=t("c3Nfi")(t("kC3Tq").resolve("9FPx2")).then(function(){return t("5yJoG")})}),n("7ifET",function(e,n){e.exports=t("c3Nfi")(t("kC3Tq").resolve("7hTL1")).then(function(){return t("42yKc")})}),n("jr756",function(t,n){e(t.exports,"default",function(){return r});var r={ReadableStream:globalThis.ReadableStream,WritableStream:globalThis.WritableStream,TransformStream:globalThis.TransformStream,DOMException:globalThis.DOMException,Blob:globalThis.Blob,File:globalThis.File}})}();