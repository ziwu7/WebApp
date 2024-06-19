function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire951b,r=t.register;r("9eWHj",function(r,n){Object.defineProperty(r.exports,"__esModule",{value:!0,configurable:!0}),e(r.exports,"FileSystemDirectoryHandle",function(){return s}),e(r.exports,"default",function(){return u});var a=t("aK2br");let{GONE:i,MOD_ERR:o}=t("i2xD3").errors,l=Symbol("adapter");class s extends a.default{[l];constructor(e){super(e),this[l]=e}async getDirectoryHandle(e,t={}){if(""===e)throw TypeError("Name can't be an empty string.");if("."===e||".."===e||e.includes("/"))throw TypeError("Name contains invalid characters.");return t.create=!!t.create,new s(await this[l].getDirectoryHandle(e,t))}async *entries(){let{FileSystemFileHandle:e}=await t("5dHz8");for await(let[t,r]of this[l].entries())yield[r.name,"file"===r.kind?new e(r):new s(r)]}async *getEntries(){let{FileSystemFileHandle:e}=await t("5dHz8");for await(let t of(console.warn("deprecated, use .entries() instead"),this[l].entries()))yield"file"===t.kind?new e(t):new s(t)}async getFileHandle(e,r={}){let{FileSystemFileHandle:n}=await t("5dHz8");if(""===e)throw TypeError("Name can't be an empty string.");if("."===e||".."===e||e.includes("/"))throw TypeError("Name contains invalid characters.");return r.create=!!r.create,new n(await this[l].getFileHandle(e,r))}async removeEntry(e,t={}){if(""===e)throw TypeError("Name can't be an empty string.");if("."===e||".."===e||e.includes("/"))throw TypeError("Name contains invalid characters.");return t.recursive=!!t.recursive,this[l].removeEntry(e,t)}async resolve(e){if(await e.isSameEntry(this))return[];let t=[{handle:this,path:[]}];for(;t.length;){let{handle:r,path:n}=t.pop();for await(let a of r.values()){if(await a.isSameEntry(e))return[...n,a.name];"directory"===a.kind&&t.push({handle:a,path:[...n,a.name]})}}return null}async *keys(){for await(let[e]of this[l].entries())yield e}async *values(){for await(let[e,t]of this)yield t}[Symbol.asyncIterator](){return this.entries()}}if(Object.defineProperty(s.prototype,Symbol.toStringTag,{value:"FileSystemDirectoryHandle",writable:!1,enumerable:!1,configurable:!0}),Object.defineProperties(s.prototype,{getDirectoryHandle:{enumerable:!0},entries:{enumerable:!0},getFileHandle:{enumerable:!0},removeEntry:{enumerable:!0}}),globalThis.FileSystemDirectoryHandle){let e=globalThis.FileSystemDirectoryHandle.prototype;async function c(e){let t=await navigator.storage.getDirectory();if(null===await t.resolve(e))throw new DOMException(...i)}e.resolve=async function(e){if(await e.isSameEntry(this))return[];let t=[{handle:this,path:[]}];for(;t.length;){let{handle:r,path:n}=t.pop();for await(let a of r.values()){if(await a.isSameEntry(e))return[...n,a.name];"directory"===a.kind&&t.push({handle:a,path:[...n,a.name]})}}return null};let t=e.entries;e.entries=async function*(){await c(this),yield*t.call(this)},e[Symbol.asyncIterator]=async function*(){yield*this.entries()};let r=e.removeEntry;e.removeEntry=async function(e,n={}){return r.call(this,e,n).catch(async e=>{if(e instanceof DOMException&&"UnknownError"===e.name&&!n.recursive&&!(await t.call(this).next()).done)throw new DOMException(...o);throw e})}}var u=s}),r("5dHz8",function(e,r){var n=t("az5d3");e.exports=n("8dN6x").then(()=>t("kcPVa"))}),r("az5d3",function(e,r){e.exports=function(e){return import(t("itrNZ").resolve(e))}}),r("itrNZ",function(t,r){e(t.exports,"register",function(){return n},function(e){return n=e}),e(t.exports,"resolve",function(){return a},function(e){return a=e});var n,a,i=new Map;n=function(e,t){for(var r=0;r<t.length-1;r+=2)i.set(t[r],{baseUrl:e,path:t[r+1]})},a=function(e){var t=i.get(e);if(null==t)throw Error("Could not resolve bundle with id "+e);return new URL(t.path,t.baseUrl).toString()}});