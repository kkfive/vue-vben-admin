var k=(h,m,e)=>new Promise((t,l)=>{var f=r=>{try{i(e.next(r))}catch(a){l(a)}},_=r=>{try{i(e.throw(r))}catch(a){l(a)}},i=r=>r.done?t(r.value):Promise.resolve(r.value).then(f,_);i((e=e.apply(h,m)).next())});import{d as x,f as w,w as D,y as T,a7 as A,Z as u,_ as g,F as R,aa as V,m as I,A as S,k as s,u as o,a9 as n,G as y,a0 as b,a8 as $,ab as B}from"./vue-BjERyvPm.js";import{_ as M}from"./DetailModal.vue_vue_type_script_setup_true_lang-BXbQpjk8.js";import{_ as N}from"./BasicTable.vue_vue_type_script_setup_true_lang-jwRietvD.js";import"./TableImg.vue_vue_type_style_index_0_lang-CLOyFFuc.js";import{_ as j}from"./index-Dkr6VmKA.js";import{u as F}from"./useTable-DZYBWrF0.js";import{b as G}from"./index-wJ08BCMi.js";import{b as H,h as Z,aT as q}from"./entry/index-DShbtsWl.js";import{getColumns as z}from"./data-BEdOnZOl.js";import{f as J}from"./antd-BmrhB3rb.js";import"./index-B9qqlQz7.js";import"./useDescription-CII0aoU7.js";import"./BasicForm.vue_vue_type_script_setup_true_lang-pWatLDmD.js";import"./FormItem.vue_vue_type_script_lang-BlYZUeGm.js";import"./componentMap-D7_wXCrD.js";import"./useFormItem-B4KjxddK.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-DHk6Ws1t.js";import"./index-M4UvXH9o.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-D6Hk7opE.js";import"./copyTextToClipboard-DUmgQPO1.js";import"./index-BO8b0fR2.js";import"./index-Dy3692QU.js";import"./base64Conver-bBv-IO2K.js";import"./helper-3Z_qR1GZ.js";import"./BasicForm.vue_vue_type_style_index_0_lang-CcmMJY8X.js";import"./useForm-DDSjB-3j.js";import"./uuid-D0SLUWHI.js";import"./sortable.esm-CoO8jRpa.js";import"./onMountedOrActivated-DcvTUt7V.js";import"./useWindowSizeFn-Cuml40XT.js";import"./useSortable-JDCtAH92.js";import"./download-D1UiuoyS.js";const K=()=>H.get({url:"/error"}),O={class:"p-4"},P=["src"],Ar=x({__name:"index",setup(h){const m=w(),e=w([]),{t}=Z(),l=q(),[f,{setTableData:_}]=F({title:t("sys.errorLog.tableTitle"),columns:z(),actionColumn:{width:80,title:"Action",dataIndex:"action"}}),[i,{openModal:r}]=G();D(()=>l.getErrorLogInfoList,p=>{T(()=>{_(J(p))})},{immediate:!0});function a(p){m.value=p,r(!0)}function C(){throw new Error("fire vue error!")}function E(){e.value.push(`${new Date().getTime()}.png`)}function L(){return k(this,null,function*(){yield K()})}return(p,Q)=>{const d=A("a-button");return u(),g("div",O,[(u(!0),g(R,null,V(e.value,c=>I((u(),g("img",{key:c,src:c,alt:""},null,8,P)),[[S,!1]])),128)),s(M,{info:m.value,onRegister:o(i)},null,8,["info","onRegister"]),s(o(N),{onRegister:o(f),class:"error-handle-table"},{toolbar:n(()=>[s(d,{onClick:C,type:"primary"},{default:n(()=>[y(b(o(t)("sys.errorLog.fireVueError")),1)]),_:1}),s(d,{onClick:E,type:"primary"},{default:n(()=>[y(b(o(t)("sys.errorLog.fireResourceError")),1)]),_:1}),s(d,{onClick:L,type:"primary"},{default:n(()=>[y(b(o(t)("sys.errorLog.fireAjaxError")),1)]),_:1})]),bodyCell:n(({column:c,record:v})=>[c.key==="action"?(u(),$(o(j),{key:0,actions:[{label:o(t)("sys.errorLog.tableActionDesc"),onClick:a.bind(null,v)}]},null,8,["actions"])):B("",!0)]),_:1},8,["onRegister"])])}}});export{Ar as default};