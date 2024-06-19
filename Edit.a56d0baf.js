function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire951b,n=t.register;n("9TAIy",function(n,r){let i,a,o,s,l,c,d,u;e(n.exports,"SessionBox",function(){return S});var h,m,f,p=t("4hKGQ"),b=t("UM4Ri"),g=t("N2Qqw"),v=t("kelqU"),y=t("40kHK"),w=function(e,t,n,r,i,a){function o(e){if(void 0!==e&&"function"!=typeof e)throw TypeError("Function expected");return e}for(var s,l=r.kind,c="getter"===l?"get":"setter"===l?"set":"value",d=!t&&e?r.static?e:e.prototype:null,u=t||(d?Object.getOwnPropertyDescriptor(d,r.name):{}),h=!1,m=n.length-1;m>=0;m--){var f={};for(var p in r)f[p]="access"===p?{}:r[p];for(var p in r.access)f.access[p]=r.access[p];f.addInitializer=function(e){if(h)throw TypeError("Cannot add initializers after decoration has completed");a.push(o(e||null))};var b=(0,n[m])("accessor"===l?{get:u.get,set:u.set}:u[c],f);if("accessor"===l){if(void 0===b)continue;if(null===b||"object"!=typeof b)throw TypeError("Object expected");(s=o(b.get))&&(u.get=s),(s=o(b.set))&&(u.set=s),(s=o(b.init))&&i.unshift(s)}else(s=o(b))&&("field"===l?i.unshift(s):u[c]=s)}d&&Object.defineProperty(d,r.name,u),h=!0},j=function(e,t,n){for(var r=arguments.length>2,i=0;i<t.length;i++)n=r?t[i].call(e,n):t[i].call(e);return r?n:void 0},x=function(e,t,n,r){if("a"===n&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)},C=function(e,t,n,r,i){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!i)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!i:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?i.call(e,n):i?i.value=n:t.set(e,n),n};let S=(s=[(0,b.component)({tagName:"session-box",mode:"open"}),b.observer],l=[],c=HTMLElement,d=[],u=[],a=class extends c{constructor(){super(...arguments),h.set(this,j(this,d,0)),Object.defineProperty(this,"emitSignIn",{enumerable:!0,configurable:!0,writable:!0,value:(j(this,u),e=>this.emit("signin",e,{}))}),Object.defineProperty(this,"handleSMSCode",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.countDown=60;let e=setInterval(()=>--this.countDown||clearInterval(e),1e3),{elements:t}=this.firstElementChild;return(0,y.session).sendSMSCode(t.namedItem("phone").value)}}),Object.defineProperty(this,"handleSignIn",{enumerable:!0,configurable:!0,writable:!0,value:e=>{e.preventDefault();let t=new FormData(e.target);(0,y.session).signIn(t.get("phone"),t.get("code")).then(this.emitSignIn)}})}get countDown(){return x(this,h,"f")}set countDown(e){C(this,h,e,"f")}mountedCallback(){y.session.user?this.emitSignIn(y.session.user):(0,y.session).getProfile().then(this.emitSignIn)}updatedCallback(){let e=["d-flex","flex-column","justify-content-center"];y.session.user?this.classList.remove(...e):this.classList.add(...e)}renderForm(){let{countDown:e}=this;return(0,p.jsxs)("form",{className:"mx-auto my-3 p-3 border rounded",style:{maxWidth:"20rem"},onSubmit:this.handleSignIn,children:[(0,p.jsx)("h2",{className:"text-center mb-3",children:"登录"}),(0,p.jsx)(v.InputGroup,{size:"lg",className:"mb-3",children:(0,p.jsx)(v.FormControl,{type:"tel",name:"phone",maxLength:11,required:!0,placeholder:"手机号"})}),(0,p.jsxs)(v.InputGroup,{size:"lg",className:"mb-3",children:[(0,p.jsx)(v.FormControl,{name:"code",required:!0,placeholder:"短信验证码",autocomplete:"off"}),(0,p.jsx)(v.Button,{variant:"outline-secondary",onClick:this.handleSMSCode,disabled:!!e,children:e?e+"s":"获取"})]}),(0,p.jsx)(v.Button,{type:"submit",className:"d-block w-100",variant:"primary",size:"lg",children:"登录"})]})}render(){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("link",{rel:"stylesheet",href:"https://unpkg.com/bootstrap@5.3.3/dist/css/bootstrap.min.css"}),y.session.user?(0,p.jsx)("slot",{}):this.renderForm()]})}},h=new WeakMap,m=a,"symbol"==typeof(f="SessionBox")&&(f=f.description?"[".concat(f.description,"]"):""),Object.defineProperty(m,"name",{configurable:!0,value:f}),(()=>{var e;let t="function"==typeof Symbol&&Symbol.metadata?Object.create(null!==(e=c[Symbol.metadata])&&void 0!==e?e:null):void 0;o=[b.attribute,g.observable],w(a,null,o,{kind:"accessor",name:"countDown",static:!1,private:!1,access:{has:e=>"countDown"in e,get:e=>e.countDown,set:(e,t)=>{e.countDown=t}},metadata:t},d,u),w(null,i={value:a},s,{kind:"class",name:a.name,metadata:t},null,l),a=i.value,t&&Object.defineProperty(a,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:t}),j(a,l)})(),a)}),n("kSJPV",function(n,r){let i,a,o,s,l,c,d,u,h,m;e(n.exports,"ContactField",function(){return I});var f,p,b,g=t("4hKGQ"),v=t("UM4Ri"),y=t("N2Qqw"),w=t("kelqU"),j=function(e,t,n){for(var r=arguments.length>2,i=0;i<t.length;i++)n=r?t[i].call(e,n):t[i].call(e);return r?n:void 0},x=function(e,t,n,r,i,a){function o(e){if(void 0!==e&&"function"!=typeof e)throw TypeError("Function expected");return e}for(var s,l=r.kind,c="getter"===l?"get":"setter"===l?"set":"value",d=!t&&e?r.static?e:e.prototype:null,u=t||(d?Object.getOwnPropertyDescriptor(d,r.name):{}),h=!1,m=n.length-1;m>=0;m--){var f={};for(var p in r)f[p]="access"===p?{}:r[p];for(var p in r.access)f.access[p]=r.access[p];f.addInitializer=function(e){if(h)throw TypeError("Cannot add initializers after decoration has completed");a.push(o(e||null))};var b=(0,n[m])("accessor"===l?{get:u.get,set:u.set}:u[c],f);if("accessor"===l){if(void 0===b)continue;if(null===b||"object"!=typeof b)throw TypeError("Object expected");(s=o(b.get))&&(u.get=s),(s=o(b.set))&&(u.set=s),(s=o(b.init))&&i.unshift(s)}else(s=o(b))&&("field"===l?i.unshift(s):u[c]=s)}d&&Object.defineProperty(d,r.name,u),h=!0},C=function(e,t,n,r){if("a"===n&&!r)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)},S=function(e,t,n,r,i){if("m"===r)throw TypeError("Private method is not writable");if("a"===r&&!i)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!i:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?i.call(e,n):i?i.value=n:t.set(e,n),n};let I=(l=[(0,v.component)({tagName:"contact-field"}),v.observer],c=[],d=HTMLElement,u=[],h=[],m=[],a=class extends d{constructor(){super(...arguments),f.set(this,(j(this,u),j(this,h,[]))),Object.defineProperty(this,"addItem",{enumerable:!0,configurable:!0,writable:!0,value:(j(this,m),()=>this.list=[...this.list,{}])})}get list(){return C(this,f,"f")}set list(e){S(this,f,e,"f")}emitChange(){this.emit("change",this.list)}changeItem(e,t){t.stopPropagation();let{list:n}=this,r=n[e],{name:i,value:a}=t.target;this.list=[...n.slice(0,e),Object.assign(Object.assign({},r),{[i]:a}),...n.slice(e+1)]}deleteItem(e){let{list:t}=this;this.list=[...t.slice(0,e),...t.slice(e+1)]}render(){let{list:e}=this;return(0,g.jsxs)(w.FormGroup,{children:[(0,g.jsx)(w.FormLabel,{children:"联系方式"}),e.map(({name:t,phone:n},r)=>(0,g.jsxs)(w.InputGroup,{className:"my-1",onChange:e=>this.changeItem(r,e),children:[(0,g.jsx)(w.FormControl,{name:"name",value:t,placeholder:"姓名"}),(0,g.jsx)(w.FormControl,{type:"tel",name:"phone",value:n,placeholder:"电话号码（含国家码、区号）"}),(0,g.jsx)(w.Button,{variant:"primary",onClick:this.addItem,children:"+"}),(0,g.jsx)(w.Button,{variant:"danger",disabled:!e[1],onClick:()=>this.deleteItem(r),children:"-"})]}))]})}},f=new WeakMap,p=a,"symbol"==typeof(b="ContactField")&&(b=b.description?"[".concat(b.description,"]"):""),Object.defineProperty(p,"name",{configurable:!0,value:b}),(()=>{var e;let t="function"==typeof Symbol&&Symbol.metadata?Object.create(null!==(e=d[Symbol.metadata])&&void 0!==e?e:null):void 0;o=[y.observable],s=[(0,v.reaction)(({list:e})=>e)],x(a,null,o,{kind:"accessor",name:"list",static:!1,private:!1,access:{has:e=>"list"in e,get:e=>e.list,set:(e,t)=>{e.list=t}},metadata:t},h,m),x(a,null,s,{kind:"method",name:"emitChange",static:!1,private:!1,access:{has:e=>"emitChange"in e,get:e=>e.emitChange},metadata:t},null,u),x(null,i={value:a},l,{kind:"class",name:a.name,metadata:t},null,c),a=i.value,t&&Object.defineProperty(a,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:t}),j(a,c)})(),a)});