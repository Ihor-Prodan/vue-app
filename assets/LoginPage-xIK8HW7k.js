import{d as _,r as u,u as E,a as V,b as P,o as p,c as f,e as t,w as $,f as c,g as n,i as d,h as U,j}from"./index-BpZu4n_R.js";import{u as k,_ as m}from"./Input.vue_vue_type_script_setup_true_lang-BwNo_mWD.js";const L={class:"flex items-center justify-center"},B={class:"w-full bg-white p-8 rounded-lg shadow-lg"},C=t("h1",{class:"text-2xl font-semibold text-center mb-6"},"Login",-1),N=t("div",{class:"mb-4"},[t("button",{type:"submit",class:"w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200"}," Login ")],-1),R={class:"text-center mt-4"},S=t("p",{class:"text-gray-600"},"Don't have an account?",-1),D=_({__name:"Login",setup(h){const{email:r,password:a,emailError:w,passwordError:g}=k(),v=u(!1),e=u({incorectEmail:"",incorectPassword:""}),x=E(),b=V(),y=async()=>{var s,l;v.value=!0,e.value.incorectEmail="",e.value.incorectPassword="";const o=await x.loginUser(r.value,a.value);o.success?(e.value.incorectEmail="",e.value.incorectPassword="",b.push("/")):((s=o.error)!=null&&s.includes("email")?e.value.incorectEmail=o.error:(l=o.error)!=null&&l.includes("password")&&(e.value.incorectPassword=o.error),setTimeout(()=>{e.value.incorectEmail="",e.value.incorectPassword=""},5e3))};return(o,s)=>{const l=P("router-link");return p(),f("section",L,[t("div",B,[C,t("form",{onSubmit:$(y,["prevent"])},[c(m,{label:"Email",type:"email",modelValue:n(r),"onUpdate:modelValue":s[0]||(s[0]=i=>d(r)?r.value=i:null),error:n(w)||e.value.incorectEmail,placeholder:"Enter your email"},null,8,["modelValue","error"]),c(m,{label:"Password",type:"password",modelValue:n(a),"onUpdate:modelValue":s[1]||(s[1]=i=>d(a)?a.value=i:null),error:n(g)||e.value.incorectPassword,placeholder:"Enter your password"},null,8,["modelValue","error"]),N,t("div",R,[S,c(l,{to:"/register",class:"text-blue-500 hover:underline"},{default:U(()=>[j(" Register here ")]),_:1})])],32)])])}}}),T={class:"min-h-screen flex items-center justify-center bg-gray-100 py-8"},A={class:"w-full max-w-md bg-white p-8 rounded-lg shadow-lg"},F=t("h1",{class:"text-3xl font-bold mb-4 text-center"},"Welcome to App",-1),M=t("p",{class:"text-lg text-gray-600 mb-6 justify-center text-center"},"Please log in to continue",-1),z=_({__name:"LoginPage",setup(h){return(r,a)=>(p(),f("section",T,[t("div",A,[F,M,c(D)])]))}});export{z as default};
