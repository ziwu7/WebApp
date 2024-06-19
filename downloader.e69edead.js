function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire951b,r=t.register;r("2dZiX",function(r,n){e(r.exports,"FileHandle",function(){return u});var a=t("i2xD3");let{WritableStream:i,TransformStream:o,DOMException:s,Blob:l}=t("7fsxx").default,{GONE:d}=a.errors,c=/constructor/i.test(window.HTMLElement);class u{constructor(e="unkown"){this.name=e,this.kind="file"}async getFile(){throw new s(...d)}async isSameEntry(e){return this===e}async createWritable(e={}){let t=await navigator.serviceWorker?.getRegistration(),r=document.createElement("a"),n=new o,a=n.writable;if(r.download=this.name,c||!t){let e=[];n.readable.pipeTo(new i({write(t){e.push(new l([t]))},close(){let t=new l(e,{type:"application/octet-stream; charset=utf-8"});e=[],r.href=URL.createObjectURL(t),r.click(),setTimeout(()=>URL.revokeObjectURL(r.href),1e4)}}))}else{let{writable:r,readablePort:a}=new h(i),s=encodeURIComponent(this.name).replace(/['()]/g,escape).replace(/\*/g,"%2A"),l={"content-disposition":"attachment; filename*=UTF-8''"+s,"content-type":"application/octet-stream; charset=utf-8",...e.size?{"content-length":e.size}:{}},d=setTimeout(()=>t.active.postMessage(0),1e4);n.readable.pipeThrough(new o({transform(e,t){if(e instanceof Uint8Array)return t.enqueue(e);let r=new Response(e).body.getReader(),n=e=>r.read().then(e=>e.done?0:n(t.enqueue(e.value)));return n()}})).pipeTo(r).finally(()=>{clearInterval(d)}),t.active.postMessage({url:t.scope+s,headers:l,readablePort:a},[a]);let c=document.createElement("iframe");c.hidden=!0,c.src=t.scope+s,document.body.appendChild(c)}return a.getWriter()}}class p{constructor(e){e.onmessage=e=>this._onMessage(e.data),this._port=e,this._resetReady()}start(e){return this._controller=e,this._readyPromise}write(e){return this._port.postMessage({type:0,chunk:e},[e.buffer]),this._resetReady(),this._readyPromise}close(){this._port.postMessage({type:2}),this._port.close()}abort(e){this._port.postMessage({type:1,reason:e}),this._port.close()}_onMessage(e){0===e.type&&this._resolveReady(),1===e.type&&this._onError(e.reason)}_onError(e){this._controller.error(e),this._rejectReady(e),this._port.close()}_resetReady(){this._readyPromise=new Promise((e,t)=>{this._readyResolve=e,this._readyReject=t}),this._readyPending=!0}_resolveReady(){this._readyResolve(),this._readyPending=!1}_rejectReady(e){this._readyPending||this._resetReady(),this._readyPromise.catch(()=>{}),this._readyReject(e),this._readyPending=!1}}class h{constructor(e){let t=new MessageChannel;this.readablePort=t.port1,this.writable=new e(new p(t.port2))}}}),r("i2xD3",function(r,n){e(r.exports,"errors",function(){return a}),e(r.exports,"config",function(){return i}),e(r.exports,"fromDataTransfer",function(){return o}),e(r.exports,"getDirHandlesFromInput",function(){return s}),e(r.exports,"getFileHandlesFromInput",function(){return l});let a={INVALID:["seeking position failed.","InvalidStateError"],GONE:["A requested file or directory could not be found at the time an operation was processed.","NotFoundError"],MISMATCH:["The path supplied exists, but was not an entry of requested type.","TypeMismatchError"],MOD_ERR:["The object can not be modified in this way.","InvalidModificationError"],SYNTAX:e=>[`Failed to execute 'write' on 'UnderlyingSinkBase': Invalid params passed. ${e}`,"SyntaxError"],SECURITY:["It was determined that certain files are unsafe for access within a Web application, or that too many calls are being made on file resources.","SecurityError"],DISALLOWED:["The request is not allowed by the user agent or the platform in the current context.","NotAllowedError"]},i={writable:globalThis.WritableStream};async function o(e){console.warn("deprecated fromDataTransfer - use `dt.items[0].getAsFileSystemHandle()` instead");let[r,n,a]=await Promise.all([t("5kIpF"),t("83aam"),t("9FMAP")]),i=new r.FolderHandle("",!1);return i._entries=e.map(e=>e.isFile?new n.FileHandle(e,!1):new n.FolderHandle(e,!1)),new a.FileSystemDirectoryHandle(i)}async function s(e){let{FolderHandle:r,FileHandle:n}=await t("5kIpF"),{FileSystemDirectoryHandle:a}=await t("9FMAP"),i=Array.from(e.files),o=new r(i[0].webkitRelativePath.split("/",1)[0],!1);return i.forEach(e=>{let t=e.webkitRelativePath.split("/");t.shift();let a=t.pop();t.reduce((e,t)=>(e._entries[t]||(e._entries[t]=new r(t,!1)),e._entries[t]),o)._entries[a]=new n(e.name,e,!1)}),new a(o)}async function l(e){let{FileHandle:r}=await t("5kIpF"),{FileSystemFileHandle:n}=await t("5dHz8");return Array.from(e.files).map(e=>new n(new r(e.name,e,!1)))}}),r("5kIpF",function(e,r){var n=t("az5d3");e.exports=n("5tuHl").then(()=>t("dtpmZ"))}),r("az5d3",function(e,r){e.exports=function(e){return import(t("itrNZ").resolve(e))}}),r("itrNZ",function(t,r){e(t.exports,"register",function(){return n},function(e){return n=e}),e(t.exports,"resolve",function(){return a},function(e){return a=e});var n,a,i=new Map;n=function(e,t){for(var r=0;r<t.length-1;r+=2)i.set(t[r],{baseUrl:e,path:t[r+1]})},a=function(e){var t=i.get(e);if(null==t)throw Error("Could not resolve bundle with id "+e);return new URL(t.path,t.baseUrl).toString()}}),r("83aam",function(e,r){var n=t("az5d3");e.exports=n("d0xkQ").then(()=>t("d1xSi"))}),r("9FMAP",function(e,r){var n=t("az5d3");e.exports=n("e8ZAS").then(()=>t("9eWHj"))}),r("5dHz8",function(e,r){var n=t("az5d3");e.exports=n("8dN6x").then(()=>t("kcPVa"))}),r("7fsxx",function(t,r){e(t.exports,"default",function(){return n});var n={ReadableStream:globalThis.ReadableStream,WritableStream:globalThis.WritableStream,TransformStream:globalThis.TransformStream,DOMException:globalThis.DOMException,Blob:globalThis.Blob,File:globalThis.File}});