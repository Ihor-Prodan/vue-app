import{x as D,r as b,d as x,a as N,u as C,y as f,o as c,c as d,e,t as u,g as m,p as S,z as I,A as $,f as g,h as B,T as j,F,B as V,C as A,D as K,_ as L}from"./index-BpZu4n_R.js";const q=D("tasks",()=>{const o=b([]);return{tasks:o,addNewTask:a=>{o.value.push(a)},removeTask:a=>{o.value=o.value.filter(n=>n.id!==a)}}}),k=o=>(A("data-v-e613b3fa"),o=o(),K(),o),z={class:"min-h-screen bg-gray-100 py-8"},E={class:"container mx-auto px-4"},G={class:"bg-white p-4 rounded-lg shadow-lg mb-6 flex justify-between items-center"},M={class:"text-2xl font-bold"},O={class:"text-gray-600"},P={class:"text-5xl font-bold mb-6 text-center"},R={class:"flex flex-wrap -mx-4 justify-center"},W={class:"w-full md:w-2/3 px-4"},Y={class:"bg-white p-6 rounded-lg shadow-lg mb-6"},H=k(()=>e("h2",{class:"text-xl font-semibold mb-2"},"Your Tasks",-1)),J={class:"mb-4"},Q={key:0},X=["onClick"],Z={key:1},ee=k(()=>e("p",{class:"text-gray-500"},"No tasks available.",-1)),se=[ee],te=x({__name:"Dashboard",setup(o){const i=N(),s=C(),a=q(),n=b(""),p=f(()=>s.currentUser?`${s.currentUser.firstName} ${s.currentUser.lastName}`:""),h=f(()=>a.tasks.filter(t=>{var r;return t.userId===((r=s.currentUser)==null?void 0:r.id)})),w=()=>{var t;if((t=s.currentUser)!=null&&t.id){const r={title:n.value,userId:s.currentUser.id,id:Date.now()};a.addNewTask(r),n.value=""}},y=()=>{var t;s.currentUser&&(s.logOutUser((t=s.currentUser)==null?void 0:t.id),i.replace("/login"))},T=t=>{a.removeTask(t)},U=t=>{t!==void 0&&(s.removeUser(t),i.replace("/register"))};return(t,r)=>{var v;return c(),d("section",z,[e("div",E,[e("header",G,[e("div",null,[e("h1",M,u(p.value),1),e("p",O,u((v=m(s).currentUser)==null?void 0:v.email),1)]),e("button",{onClick:r[0]||(r[0]=l=>{var _;return U((_=m(s).currentUser)==null?void 0:_.id)}),class:"bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors duration-200"}," Delete account "),e("button",{onClick:y,class:"bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200"}," Logout ")]),e("h1",P,"Welcome "+u(p.value),1),e("div",R,[e("div",W,[e("div",Y,[H,e("div",J,[S(e("input",{"onUpdate:modelValue":r[1]||(r[1]=l=>n.value=l),onKeyup:$(w,["enter"]),type:"text",placeholder:"Add a new task",class:"w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"},null,544),[[I,n.value]])]),h.value.length?(c(),d("div",Q,[g(j,{class:"list-disc pl-5",name:"list",tag:"ul"},{default:B(()=>[(c(!0),d(F,null,V(h.value,l=>(c(),d("li",{key:l.id,class:"flex justify-between text-gray-700 mb-2"},[e("span",null,u(l.title),1),e("button",{onClick:_=>T(l.id),class:"ml-4 bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 transition-colors duration-200"}," Delete ",8,X)]))),128))]),_:1})])):(c(),d("div",Z,se))])])])])])}}}),oe=L(te,[["__scopeId","data-v-e613b3fa"]]),ae=x({__name:"DashboardPage",setup(o){return(i,s)=>(c(),d("div",null,[g(oe)]))}});export{ae as default};
