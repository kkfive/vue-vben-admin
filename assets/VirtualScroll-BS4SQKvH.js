import{d as W,f as T,r as K,c as v,u as e,w as P,o as U,y as q,k as c,a7 as z,Z as A,a8 as G,a9 as d,G as _,$ as p,al as Z,a0 as I}from"./vue-BjERyvPm.js";import{P as j}from"./index-BB9V0GyI.js";import{F as J,s as O,c as $,w as Q}from"./entry/index-DShbtsWl.js";import{a4 as R,ar as X}from"./antd-BmrhB3rb.js";import"./useContentViewHeight-w3jL8fd7.js";import"./useWindowSizeFn-Cuml40XT.js";import"./onMountedOrActivated-DcvTUt7V.js";const Y={height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String],bench:{type:[Number,String],default:0},itemHeight:{type:[Number,String],required:!0},items:{type:Array,default:()=>[]}},w="virtual-scroll";function h(n,u="px"){if(!(n==null||n===""))return isNaN(+n)?String(n):`${Number(n)}${u}`}const tt=W({name:"VirtualScroll",props:Y,setup(n,{slots:u,expose:g}){const o=T(null),s=K({first:0,last:0,scrollTop:0}),i=v(()=>parseInt(n.bench,10)),m=v(()=>parseInt(n.itemHeight,10)),a=v(()=>Math.max(0,s.first-e(i))),l=v(()=>Math.min((n.items||[]).length,s.last+e(i))),k=v(()=>({height:h((n.items||[]).length*e(m))})),E=v(()=>{const t={},r=h(n.height),f=h(n.minHeight),b=h(n.minWidth),y=h(n.maxHeight),H=h(n.maxWidth),N=h(n.width);return r&&(t.height=r),f&&(t.minHeight=f),b&&(t.minWidth=b),y&&(t.maxHeight=y),H&&(t.maxWidth=H),N&&(t.width=N),t});P([()=>n.itemHeight,()=>n.height],()=>{S()});function x(t){const r=e(o);if(!r)return 0;const f=parseInt(n.height||0,10)||r.clientHeight;return t+Math.ceil(f/e(m))}function V(){return Math.floor(s.scrollTop/e(m))}function S(){const t=e(o);t&&(s.scrollTop=t.scrollTop,s.first=V(),s.last=x(s.first))}function B(){const t=e(o);t&&(t.scrollTop=0)}function M(){const t=e(o);t&&(t.scrollTop=t.scrollHeight)}function F(t){const r=e(o);if(!r)return;const f=t-1>0?t-1:0;r.scrollTop=f*e(m)}function L(){const{items:t=[]}=n;return t.slice(e(a),e(l)).map(D)}function D(t,r){r+=e(a);const f=h(r*e(m));return c("div",{class:`${w}__item`,style:{top:f},key:r},[O(u,"default",{index:r,item:t})])}return g({wrapElRef:o,scrollToTop:B,scrollToItem:F,scrollToBottom:M}),U(()=>{s.last=x(0),q(()=>{const t=e(o);t&&J({el:t,name:"scroll",listener:S,wait:0})})}),()=>c("div",{class:w,style:e(E),ref:o},[c("div",{class:`${w}__container`,style:e(k)},[L()])])}}),et=$(tt,[["__scopeId","data-v-b9753475"]]),C=Q(et),nt={class:"text-center mb-4"},it={class:"virtual-scroll-demo-wrap"},lt={class:"virtual-scroll-demo__item"},rt={class:"virtual-scroll-demo-wrap"},ot={class:"virtual-scroll-demo__item"},st=W({__name:"VirtualScroll",setup(n){const u=T(),g=T(1e3),o=(()=>{const s=[];for(let i=1;i<2e4;i++)s.push({title:"列表项"+i});return s})();return(s,i)=>{const m=z("a-button");return A(),G(e(j),{class:"virtual-scroll-demo"},{default:d(()=>[c(e(R),null,{default:d(()=>[_("基础滚动示例")]),_:1}),p("div",nt,[c(m,{onClick:i[0]||(i[0]=a=>{var l;return(l=u.value)==null?void 0:l.scrollToTop()})},{default:d(()=>[_("滚动到顶部")]),_:1}),c(m,{onClick:i[1]||(i[1]=a=>{var l;return(l=u.value)==null?void 0:l.scrollToBottom()}),class:"mx-2"},{default:d(()=>[_("滚动到底部")]),_:1}),c(m,{onClick:i[4]||(i[4]=a=>{var l;return(l=u.value)==null?void 0:l.scrollToItem(g.value)})},{default:d(()=>[_("滚动到第 "),c(e(X),{value:g.value,"onUpdate:value":i[2]||(i[2]=a=>g.value=a),class:"!w-60px mx-1",min:1,max:e(o).length,precision:0,size:"small",controls:!1,onKeydown:i[3]||(i[3]=Z(a=>{var l;return(l=u.value)==null?void 0:l.scrollToItem(g.value)},["enter"]))},null,8,["value","max"]),_(" 条 ")]),_:1})]),p("div",it,[c(e(C),{itemHeight:41,items:e(o),height:300,width:300,ref_key:"vScrollRef",ref:u},{default:d(({item:a})=>[p("div",lt,I(a.title),1)]),_:1},8,["items"])]),c(e(R),null,{default:d(()=>[_("即使不可见，也预先加载50条数据，防止空白")]),_:1}),p("div",rt,[c(e(C),{itemHeight:41,items:e(o),height:300,width:300,bench:50},{default:d(({item:a})=>[p("div",ot,I(a.title),1)]),_:1},8,["items"])])]),_:1})}}}),gt=$(st,[["__scopeId","data-v-836095db"]]);export{gt as default};