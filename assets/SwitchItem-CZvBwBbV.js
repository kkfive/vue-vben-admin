import{f as c,h as d,c as l}from"./entry/index-DShbtsWl.js";import{b as m}from"./index-BvK7ALZL.js";import{d as p,c as h,Z as u,_ as f,$ as C,a0 as g,k as b,ac as k,u as t,a1 as y}from"./vue-BjERyvPm.js";import{at as _}from"./antd-BmrhB3rb.js";import"./index-Co6cdACf.js";import"./useContentViewHeight-w3jL8fd7.js";import"./useWindowSizeFn-Cuml40XT.js";import"./useSortable-JDCtAH92.js";import"./index-CNcCxeLf.js";import"./lock-6-KhBIMV.js";const v=p({name:"SwitchItem",__name:"SwitchItem",props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:Boolean}},setup(a){const e=a,{prefixCls:o}=c("setting-switch-item"),{t:n}=d(),i=h(()=>e.def?{checked:e.def}:{}),r=s=>{e.event&&m(e.event,s)};return(s,B)=>(u(),f("div",{class:y(t(o))},[C("span",null,g(a.title),1),b(t(_),k(i.value,{onChange:r,disabled:a.disabled,checkedChildren:t(n)("layout.setting.on"),unCheckedChildren:t(n)("layout.setting.off")}),null,16,["disabled","checkedChildren","unCheckedChildren"])],2))}}),P=l(v,[["__scopeId","data-v-b47b0939"]]);export{P as default};