(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[155],{3440:function(e,r,t){"use strict";t.d(r,{Z:function(){return N}});var o=t(2809),n=t(9669),a=t.n(n),s=t(1163),l=t(2283),i=t(8279),u=t(219),c=t(2866),d=t(5152),m=t(5893),p=["id","label","placeholderText","register","validators","errors","type","useErrorMessage"];function b(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function f(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?b(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var h=(0,d.default)((function(){return t.e(682).then(t.bind(t,8682))}),{ssr:!1,loadableGenerated:{webpack:function(){return[8682]},modules:["..\\components\\creator\\Fields.tsx -> react-select"]}}),g={control:function(e){return f(f({},e),{},{backgroundColor:"transparent",borderWidth:"1px",borderBottomWidth:"1px",boxShadow:"none",margin:0,minHeight:0,borderRadius:"0.25rem",paddingLeft:"0.75rem"})},menuList:function(e){return f(f({},e),{},{paddingTop:0,paddingBottom:0})},placeholder:function(e,r){return f(f({},e),{},{color:r.hasValue?"#773b6b":"hsl(0, 0%, 50%)"})},valueContainer:function(e){return f(f({},e),{},{padding:0,paddingTop:"0.5rem",paddingBottom:"0.5rem"})}},x=function(e){var r=e.message;return(0,m.jsx)("span",{className:"pt-2 text-red-600",children:r})},v=function(e){var r=e.id,t=e.label,o=e.placeholderText,n=e.register,a=e.validators,s=e.errors,l=e.type,i=void 0===l?"text":l,d=e.useErrorMessage,b=void 0===d||d,h=(0,u.Z)(e,p);return(0,m.jsxs)("div",{className:"mb-4 md:mr-2 md:mb-0",children:[(0,m.jsx)("label",{className:"block text-gray-700 font-bold mb-2",htmlFor:r,children:t}),(0,m.jsx)("input",f(f({},n(r,a)),{},{className:"appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none hover:shadow focus:border-blue-600",id:r,type:i,placeholder:o,autoComplete:"on"},h)),b&&(0,m.jsx)(c.B,{name:r,errors:s,render:x})]})},j=function(e){var r=e.id,t=e.label,o=e.placeholderText,n=e.control,a=e.validators,s=e.options,i=e.errors,u=e.useErrorMessage,d=void 0===u||u;return(0,m.jsxs)("div",{className:"mb-4 md:mr-2 md:mb-0",children:[(0,m.jsx)("label",{className:"block text-gray-700 font-bold mb-2",htmlFor:r,children:t}),(0,m.jsx)(l.Qr,{name:r,control:n,render:function(e){var t=e.field,n=t.onChange,a=t.value,l=t.name,i=t.ref;return(0,m.jsx)(h,{inputRef:i,value:s.find((function(e){return e.value===a})),name:l,id:r,instanceId:r,options:s,placeholder:o,isSearchable:!1,onChange:function(e){return n(null===e||void 0===e?void 0:e.value)},styles:g,className:"text-base"})},rules:a}),d&&(0,m.jsx)(c.B,{name:r,errors:i,render:x})]})},y=function(e){var r=e.children;return(0,m.jsx)("div",{className:"grid md:grid-cols-2 gap-x-2 md:gap-y-1 items-center md:gap-x-4 lg:gap-x-24 lg:gap-y-4",children:r})};function O(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function w(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?O(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var k=[{label:"DDP",value:"ddp"},{label:"Matematika Diskrit",value:"matdis"},{label:"Kalkulus",value:"kalkulus"},{label:"PSD",value:"psd"},{label:"ManBis",value:"manbis"},{label:"Kombistek",value:"kombistek"},{label:"Other",value:"other"}],N=function(e){var r=e.course,t=void 0===r?null:r,o=e.mutator,n=void 0===o?null:o;t&&k.forEach((function(e){e.label==t.matkul&&(t.matkul=e.value)}));var u=(0,l.cI)({defaultValues:t}),c=u.control,d=u.register,p=u.formState.errors,b=u.handleSubmit,f=(0,s.useRouter)();return(0,m.jsxs)("form",{onSubmit:b((function(e){var r;""===e.students_limit&&(e.students_limit=null),r=t?"".concat("https://ta-api.rorre.xyz","/course/").concat(t.id,"/update"):"".concat("https://ta-api.rorre.xyz","/course/create"),i.ZP.promise(a().post(r,e,{withCredentials:!0}),{loading:"Submitting course...",success:"Submitted!",error:function(e){return e.response?e.response.data.detail:"An error has occured."}}).then((function(){f.push("/course"),n&&n()})).catch((function(){}))})),className:"md:flex flex-col space-y-3",children:[(0,m.jsxs)(y,{children:[(0,m.jsx)(v,{id:"name",label:"Course Name",placeholderText:"",register:d,validators:{required:{value:!0,message:"You need to provide a name."},maxLength:{value:100,message:"Course name exceeds 100 characters."}},errors:p,useErrorMessage:!0}),(0,m.jsx)(j,{id:"matkul",label:"Subject",placeholderText:"",options:k,control:c,errors:p,validators:{required:{value:!0,message:"You need to fill in the subject."}},useErrorMessage:!0})]}),(0,m.jsxs)(y,{children:[(0,m.jsx)(v,{id:"datetime",label:"Date and Time",placeholderText:"When will the course starts?",register:d,validators:{required:{value:!0,message:"You need to provide the date and time."}},type:"datetime-local",errors:p,useErrorMessage:!0}),(0,m.jsx)(v,{id:"students_limit",label:"Student Limit",placeholderText:"You may set to 0 for no limit.",register:d,type:"number",validators:{min:0},errors:p,useErrorMessage:!0,min:0})]}),(0,m.jsx)(v,{id:"link",label:"Meet/Zoom URL",placeholderText:"",register:d,errors:p,useErrorMessage:!1}),(0,m.jsxs)("div",{className:"mb-4 md:mr-2 md:mb-0",children:[(0,m.jsx)("label",{className:"block text-gray-700 font-bold mb-2",htmlFor:"notes",children:"Notes"}),(0,m.jsx)("textarea",w(w({},d("notes")),{},{className:"appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none hover:shadow focus:border-blue-600",id:"notes",placeholder:"Notes to be posted on site. Markdown supported."}))]}),(0,m.jsx)("button",{type:"submit",className:"w-full rounded-xl bg-blue-600 p-2 text-white",children:"Submit"})]})}},1820:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return l}});var o=t(2962),n=t(1163),a=t(3440),s=t(5893);function l(){(0,n.useRouter)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.PB,{title:"Create Course"}),(0,s.jsx)("h2",{className:"font-bold text-2xl pb-2",children:"Create Course"}),(0,s.jsx)("hr",{className:"pb-2"}),(0,s.jsx)(a.Z,{})]})}},9548:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/course/create",function(){return t(1820)}])}},function(e){e.O(0,[774,483,888,179],(function(){return r=9548,e(e.s=r);var r}));var r=e.O();_N_E=r}]);