function e(e,t,n,a){Object.defineProperty(e,t,{get:n,set:a,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire951b,n=t.register;n("g5U7E",function(n,a){let r,i,o,s,l,c,u,d,f,h,m;Object.defineProperty(n.exports,"__esModule",{value:!0,configurable:!0}),e(n.exports,"default",function(){return A});var p,b,g,y,v=t("4hKGQ"),w=t("UM4Ri"),x=t("N2Qqw"),j=t("kelqU"),F=t("8myCc"),O=t("40kHK"),k=t("9TAIy"),S=t("kSJPV"),T=function(e,t,n,a,r,i){function o(e){if(void 0!==e&&"function"!=typeof e)throw TypeError("Function expected");return e}for(var s,l=a.kind,c="getter"===l?"get":"setter"===l?"set":"value",u=!t&&e?a.static?e:e.prototype:null,d=t||(u?Object.getOwnPropertyDescriptor(u,a.name):{}),f=!1,h=n.length-1;h>=0;h--){var m={};for(var p in a)m[p]="access"===p?{}:a[p];for(var p in a.access)m.access[p]=a.access[p];m.addInitializer=function(e){if(f)throw TypeError("Cannot add initializers after decoration has completed");i.push(o(e||null))};var b=(0,n[h])("accessor"===l?{get:d.get,set:d.set}:d[c],m);if("accessor"===l){if(void 0===b)continue;if(null===b||"object"!=typeof b)throw TypeError("Object expected");(s=o(b.get))&&(d.get=s),(s=o(b.set))&&(d.set=s),(s=o(b.init))&&r.unshift(s)}else(s=o(b))&&("field"===l?r.unshift(s):d[c]=s)}u&&Object.defineProperty(u,a.name,d),f=!0},I=function(e,t,n){for(var a=arguments.length>2,r=0;r<t.length;r++)n=a?t[r].call(e,n):t[r].call(e);return a?n:void 0},E=function(e,t,n,a){return new(n||(n=Promise))(function(r,i){function o(e){try{l(a.next(e))}catch(e){i(e)}}function s(e){try{l(a.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?r(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(o,s)}l((a=a.apply(e,t||[])).next())})},P=function(e,t,n,a){if("a"===n&&!a)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!a:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?a:"a"===n?a.call(e):a?a.value:t.get(e)},C=function(e,t,n,a,r){if("m"===a)throw TypeError("Private method is not writable");if("a"===a&&!r)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===a?r.call(e,n):r?r.value=n:t.set(e,n),n},H=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n},A=(l=[(0,w.component)({tagName:"donation-edit"}),w.observer],c=[],u=HTMLElement,d=[],f=[],h=[],m=[],i=class extends u{constructor(){super(...arguments),p.set(this,I(this,d,"")),b.set(this,(I(this,f),I(this,h,{name:"",contacts:[{}],accounts:[{}],url:"",remark:""}))),Object.defineProperty(this,"changeText",{enumerable:!0,configurable:!0,writable:!0,value:(I(this,m),({target:e})=>{let{name:t,value:n}=e;this.state=Object.assign(Object.assign({},this.state),{[t]:n})})}),Object.defineProperty(this,"addAccount",{enumerable:!0,configurable:!0,writable:!0,value:()=>this.state=Object.assign(Object.assign({},this.state),{accounts:[...this.state.accounts,{}]})}),Object.defineProperty(this,"handleSubmit",{enumerable:!0,configurable:!0,writable:!0,value:e=>E(this,void 0,void 0,function*(){e.preventDefault();let t=this.state,{accounts:n,contacts:a}=t,r=H(t,["accounts","contacts"]);yield(0,O.donationRecipient).updateOne(Object.assign(Object.assign({},r),{accounts:n.filter(({name:e,number:t,bank:n})=>(null==e?void 0:e.trim())&&(null==t?void 0:t.trim())&&(null==n?void 0:n.trim())),contacts:a.filter(({name:e,phone:t})=>(null==e?void 0:e.trim())&&(null==t?void 0:t.trim()))}),this.dataId),self.alert("提交成功，工作人员审核后即可查看"),location.hash=F.RouteRoot.Donation})})}get dataId(){return P(this,p,"f")}set dataId(e){C(this,p,e,"f")}get state(){return P(this,b,"f")}set state(e){C(this,b,e,"f")}mountedCallback(){return E(this,void 0,void 0,function*(){if(!this.dataId)return;let{name:e,url:t,accounts:n,contacts:a,remark:r}=yield(0,O.donationRecipient).getOne(this.dataId);this.state={name:e,url:t,accounts:n,contacts:a,remark:r}})}changeAccount(e,t){t.stopPropagation();let{name:n,value:a}=t.target,{accounts:r}=this.state;this.state.accounts=[...r.slice(0,e),Object.assign(Object.assign({},r[e]),{[n]:a}),...r.slice(e+1)]}deleteAccount(e){let{accounts:t}=this.state;this.state.accounts=[...t.slice(0,e),...t.slice(e+1)]}render(){let{name:e,url:t,accounts:n,contacts:a,remark:r}=this.state;return(0,v.jsxs)(k.SessionBox,{children:[(0,v.jsx)("h2",{children:"捐赠信息发布"}),(0,v.jsxs)("form",{onChange:this.changeText,onSubmit:this.handleSubmit,children:[(0,v.jsx)(j.FormField,{name:"name",required:!0,defaultValue:e,label:"机构名称"}),(0,v.jsx)(j.FormField,{name:"url",required:!0,defaultValue:t,label:"官方网址",placeholder:"信息发布源链接"}),(0,v.jsxs)(j.FormGroup,{children:[(0,v.jsx)(j.FormLabel,{children:"银行账户信息"}),n.map(({name:e,number:t,bank:a},r)=>(0,v.jsxs)(j.InputGroup,{className:"my-1",onChange:e=>this.changeAccount(r,e),children:[(0,v.jsx)(j.FormControl,{name:"name",required:!0,defaultValue:e,placeholder:"户名"}),(0,v.jsx)(j.FormControl,{name:"number",required:!0,defaultValue:t,placeholder:"账号"}),(0,v.jsx)(j.FormControl,{name:"bank",required:!0,defaultValue:a,placeholder:"开户行"}),(0,v.jsx)(j.Button,{variant:"primary",onClick:this.addAccount,children:"+"}),(0,v.jsx)(j.Button,{variant:"danger",disabled:!n[1],onClick:()=>this.deleteAccount(r),children:"-"})]}))]}),(0,v.jsx)(S.ContactField,{list:a,onChange:({detail:e})=>this.state.contacts=e}),(0,v.jsx)(j.FormField,{as:"textarea",name:"remark",label:"备注",defaultValue:r}),(0,v.jsxs)(j.FormGroup,{className:"mt-3 d-flex flex-column",children:[(0,v.jsx)(j.Button,{type:"submit",variant:"primary",disabled:O.donationRecipient.uploading>0,children:"提交"}),(0,v.jsx)(j.Button,{type:"reset",variant:"danger",onClick:()=>location.hash=F.RouteRoot.Donation,children:"取消"})]})]})]})}},p=new WeakMap,b=new WeakMap,g=i,"symbol"==typeof(y="DonationEdit")&&(y=y.description?"[".concat(y.description,"]"):""),Object.defineProperty(g,"name",{configurable:!0,value:y}),(()=>{var e;let t="function"==typeof Symbol&&Symbol.metadata?Object.create(null!==(e=u[Symbol.metadata])&&void 0!==e?e:null):void 0;o=[w.attribute,x.observable],s=[x.observable],T(i,null,o,{kind:"accessor",name:"dataId",static:!1,private:!1,access:{has:e=>"dataId"in e,get:e=>e.dataId,set:(e,t)=>{e.dataId=t}},metadata:t},d,f),T(i,null,s,{kind:"accessor",name:"state",static:!1,private:!1,access:{has:e=>"state"in e,get:e=>e.state,set:(e,t)=>{e.state=t}},metadata:t},h,m),T(null,r={value:i},l,{kind:"class",name:i.name,metadata:t},null,c),i=r.value,t&&Object.defineProperty(i,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:t}),I(i,c)})(),i)}),n("8myCc",function(t,n){e(t.exports,"RouteRoot",function(){return r}),e(t.exports,"default",function(){return i}),(a=r||(r={})).Hospital="hospital",a.Logistics="logistics",a.Hotel="hotel",a.Factory="factory",a.Donation="donation",a.Clinic="clinic",a.Maps="maps",a.Admin="admin",a.Community="community";var a,r,i=[{title:"首页",href:""},{title:"医院",href:r.Hospital,icon:"hospital"},{title:"物流",href:r.Logistics,icon:"truck"},{title:"酒店",href:r.Hotel,icon:"building-check"},{title:"生产",href:r.Factory,icon:"buildings"},{title:"捐赠",href:r.Donation,icon:"heart"},{title:"义诊",href:r.Clinic,icon:"house-heart"},{title:"疫情地图",href:r.Maps,icon:"map"},{title:"红会监工",href:"https://weileizeng.github.io/red-cross/",icon:"plus-square"},{title:"开放社区",href:r.Community}]}),n("i2xD3",function(n,a){e(n.exports,"errors",function(){return r}),e(n.exports,"config",function(){return i}),e(n.exports,"fromDataTransfer",function(){return o}),e(n.exports,"getDirHandlesFromInput",function(){return s}),e(n.exports,"getFileHandlesFromInput",function(){return l});let r={INVALID:["seeking position failed.","InvalidStateError"],GONE:["A requested file or directory could not be found at the time an operation was processed.","NotFoundError"],MISMATCH:["The path supplied exists, but was not an entry of requested type.","TypeMismatchError"],MOD_ERR:["The object can not be modified in this way.","InvalidModificationError"],SYNTAX:e=>[`Failed to execute 'write' on 'UnderlyingSinkBase': Invalid params passed. ${e}`,"SyntaxError"],SECURITY:["It was determined that certain files are unsafe for access within a Web application, or that too many calls are being made on file resources.","SecurityError"],DISALLOWED:["The request is not allowed by the user agent or the platform in the current context.","NotAllowedError"]},i={writable:globalThis.WritableStream};async function o(e){console.warn("deprecated fromDataTransfer - use `dt.items[0].getAsFileSystemHandle()` instead");let[n,a,r]=await Promise.all([t("5kIpF"),t("83aam"),t("9FMAP")]),i=new n.FolderHandle("",!1);return i._entries=e.map(e=>e.isFile?new a.FileHandle(e,!1):new a.FolderHandle(e,!1)),new r.FileSystemDirectoryHandle(i)}async function s(e){let{FolderHandle:n,FileHandle:a}=await t("5kIpF"),{FileSystemDirectoryHandle:r}=await t("9FMAP"),i=Array.from(e.files),o=new n(i[0].webkitRelativePath.split("/",1)[0],!1);return i.forEach(e=>{let t=e.webkitRelativePath.split("/");t.shift();let r=t.pop();t.reduce((e,t)=>(e._entries[t]||(e._entries[t]=new n(t,!1)),e._entries[t]),o)._entries[r]=new a(e.name,e,!1)}),new r(o)}async function l(e){let{FileHandle:n}=await t("5kIpF"),{FileSystemFileHandle:a}=await t("5dHz8");return Array.from(e.files).map(e=>new a(new n(e.name,e,!1)))}}),n("5kIpF",function(e,n){var a=t("az5d3");e.exports=a("5tuHl").then(()=>t("dtpmZ"))}),n("az5d3",function(e,n){e.exports=function(e){return import(t("itrNZ").resolve(e))}}),n("itrNZ",function(t,n){e(t.exports,"register",function(){return a},function(e){return a=e}),e(t.exports,"resolve",function(){return r},function(e){return r=e});var a,r,i=new Map;a=function(e,t){for(var n=0;n<t.length-1;n+=2)i.set(t[n],{baseUrl:e,path:t[n+1]})},r=function(e){var t=i.get(e);if(null==t)throw Error("Could not resolve bundle with id "+e);return new URL(t.path,t.baseUrl).toString()}}),n("83aam",function(e,n){var a=t("az5d3");e.exports=a("d0xkQ").then(()=>t("d1xSi"))}),n("9FMAP",function(e,n){var a=t("az5d3");e.exports=a("e8ZAS").then(()=>t("9eWHj"))}),n("5dHz8",function(e,n){var a=t("az5d3");e.exports=a("8dN6x").then(()=>t("kcPVa"))}),n("7fsxx",function(t,n){e(t.exports,"default",function(){return a});var a={ReadableStream:globalThis.ReadableStream,WritableStream:globalThis.WritableStream,TransformStream:globalThis.TransformStream,DOMException:globalThis.DOMException,Blob:globalThis.Blob,File:globalThis.File}});