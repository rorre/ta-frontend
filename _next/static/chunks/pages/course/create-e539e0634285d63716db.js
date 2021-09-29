(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[155],{3440:function(e,r,t){"use strict";t.d(r,{Z:function(){return w}});var n=t(2809),o=t(9669),a=t.n(o),s=t(1163),l=t(2283),i=t(8279),u=t(2866),c=t(5152),d=t(5893);function m(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?m(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var b=(0,c.default)((function(){return t.e(682).then(t.bind(t,8682))}),{ssr:!1,loadableGenerated:{webpack:function(){return[8682]},modules:["..\\components\\creator\\Fields.tsx -> react-select"]}}),f={control:function(e){return p(p({},e),{},{backgroundColor:"transparent",borderWidth:"1px",borderBottomWidth:"1px",boxShadow:"none",margin:0,minHeight:0,borderRadius:"0.25rem",paddingLeft:"0.75rem"})},menuList:function(e){return p(p({},e),{},{paddingTop:0,paddingBottom:0})},placeholder:function(e,r){return p(p({},e),{},{color:r.hasValue?"#773b6b":"hsl(0, 0%, 50%)"})},valueContainer:function(e){return p(p({},e),{},{padding:0,paddingTop:"0.5rem",paddingBottom:"0.5rem"})}},h=function(e){var r=e.message;return(0,d.jsx)("span",{className:"pt-2 text-red-600",children:r})},g=function(e){var r=e.id,t=e.label,n=e.placeholderText,o=e.register,a=e.validators,s=e.errors,l=e.type,i=void 0===l?"text":l,c=e.useErrorMessage,m=void 0===c||c;return(0,d.jsxs)("div",{className:"mb-4 md:mr-2 md:mb-0",children:[(0,d.jsx)("label",{className:"block text-gray-700 font-bold mb-2",htmlFor:r,children:t}),(0,d.jsx)("input",p(p({},o(r,a)),{},{className:"appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none hover:shadow focus:border-blue-600",id:r,type:i,placeholder:n,autoComplete:"on"})),m&&(0,d.jsx)(u.B,{name:r,errors:s,render:h})]})},x=function(e){var r=e.id,t=e.label,n=e.placeholderText,o=e.control,a=e.validators,s=e.options,i=e.errors,c=e.useErrorMessage,m=void 0===c||c;return(0,d.jsxs)("div",{className:"mb-4 md:mr-2 md:mb-0",children:[(0,d.jsx)("label",{className:"block text-gray-700 font-bold mb-2",htmlFor:r,children:t}),(0,d.jsx)(l.Qr,{name:r,control:o,render:function(e){var t=e.field,o=t.onChange,a=t.value,l=t.name,i=t.ref;return(0,d.jsx)(b,{inputRef:i,value:s.find((function(e){return e.value===a})),name:l,id:r,instanceId:r,options:s,placeholder:n,isSearchable:!1,onChange:function(e){return o(null===e||void 0===e?void 0:e.value)},styles:f,className:"text-base"})},rules:a}),m&&(0,d.jsx)(u.B,{name:r,errors:i,render:h})]})},v=function(e){var r=e.children;return(0,d.jsx)("div",{className:"grid md:grid-cols-2 gap-x-2 md:gap-y-1 items-center md:gap-x-4 lg:gap-x-24 lg:gap-y-4",children:r})};function j(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function y(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?j(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var O=[{label:"DDP",value:"ddp"},{label:"Matematika Diskrit",value:"matdis"},{label:"Kalkulus",value:"kalkulus"},{label:"PSD",value:"psd"},{label:"ManBis",value:"manbis"},{label:"Kombistek",value:"kombistek"},{label:"Other",value:"other"}],w=function(e){var r=e.course,t=void 0===r?null:r,n=e.mutator,o=void 0===n?null:n;t&&O.forEach((function(e){e.label==t.matkul&&(t.matkul=e.value)}));var u=(0,l.cI)({defaultValues:t}),c=u.control,m=u.register,p=u.formState.errors,b=u.handleSubmit,f=(0,s.useRouter)();return(0,d.jsxs)("form",{onSubmit:b((function(e){var r;""===e.students_limit&&(e.students_limit=null),r=t?"".concat("http://localhost:8000","/course/").concat(t.id,"/update"):"".concat("http://localhost:8000","/course/create"),i.ZP.promise(a().post(r,e,{withCredentials:!0}),{loading:"Submitting course...",success:"Submitted!",error:function(e){return e.response?e.response.data.detail:"An error has occured."}}).then((function(){f.push("/course"),o&&o()})).catch((function(){}))})),className:"md:flex flex-col space-y-3",children:[(0,d.jsxs)(v,{children:[(0,d.jsx)(g,{id:"name",label:"Course Name",placeholderText:"",register:m,validators:{required:{value:!0,message:"You need to provide a name."},maxLength:{value:100,message:"Course name exceeds 100 characters."}},errors:p,useErrorMessage:!0}),(0,d.jsx)(x,{id:"matkul",label:"Subject",placeholderText:"",options:O,control:c,errors:p,validators:{required:{value:!0,message:"You need to fill in the subject."}},useErrorMessage:!0})]}),(0,d.jsxs)(v,{children:[(0,d.jsx)(g,{id:"datetime",label:"Date and Time",placeholderText:"When will the course starts?",register:m,validators:{required:{value:!0,message:"You need to provide the date and time."}},type:"datetime-local",errors:p,useErrorMessage:!0}),(0,d.jsx)(g,{id:"students_limit",label:"Student Limit",placeholderText:"",register:m,type:"number",errors:p,useErrorMessage:!1})]}),(0,d.jsx)(g,{id:"link",label:"Meet/Zoom URL",placeholderText:"",register:m,errors:p,useErrorMessage:!1}),(0,d.jsxs)("div",{className:"mb-4 md:mr-2 md:mb-0",children:[(0,d.jsx)("label",{className:"block text-gray-700 font-bold mb-2",htmlFor:"notes",children:"Notes"}),(0,d.jsx)("textarea",y(y({},m("notes")),{},{className:"appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none hover:shadow focus:border-blue-600",id:"notes",placeholder:"Notes to be posted on site. Markdown supported."}))]}),(0,d.jsx)("button",{type:"submit",className:"w-full rounded-xl bg-blue-600 p-2 text-white",children:"Submit"})]})}},1820:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return l}});var n=t(2962),o=t(1163),a=t(3440),s=t(5893);function l(){(0,o.useRouter)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.PB,{title:"Create Course"}),(0,s.jsx)("h2",{className:"font-bold text-2xl pb-2",children:"Create Course"}),(0,s.jsx)("hr",{className:"pb-2"}),(0,s.jsx)(a.Z,{})]})}},9548:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/course/create",function(){return t(1820)}])}},function(e){e.O(0,[774,483,888,179],(function(){return r=9548,e(e.s=r);var r}));var r=e.O();_N_E=r}]);