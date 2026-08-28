import{t as e}from"./rolldown-runtime.Dh6celcD.mjs";import{D as t,F as n,H as r,L as i,M as a,W as o,l as s,s as c,u as l,y as u,z as d}from"./react.LucpZiGF.mjs";import{K as f,N as p,c as m,ht as h}from"./framer.sOYJIji1.mjs";function g(e,t,n){return((e*7+t*13+e*t*5)*2654435761>>>0)%n}function _(e,t,n,r){let i=r*r;if(e===`dance-spark`)return-Math.round(g(t,n,i)*1200/i);if(e===`double-slow`)return-((n%2*190+t*120+n*55)*1.6%1920);let a=((t-n)*187.5%750+750)%750;return a===0?0:a-750}function v(e){return e===`dance-spark`?`danceSpark`:e===`double-slow`?`doubleSlow`:`ghostFlow`}function y(e){return e===`dance-spark`?1200:e===`double-slow`?1920:750}function b(e){let{variant:t=`ghost-flow`,grid:r=`4x4`,dotColor:c=`#0099ff`,gap:f=(16-x)/3,size:m=20,pauseOffscreen:h=!0,pauseOnCanvas:g=!0,duration:b=0,onComplete:C,style:w}=e,T=a(null),[E,D]=d(!0),[O,k]=d(!1),A=a(!1);i(()=>{if(!h){D(!0);return}let e=new IntersectionObserver(e=>{let t=e[0];t&&u(()=>D(t.isIntersecting))},{threshold:0});return T.current&&e.observe(T.current),()=>{e.disconnect()}},[h]);let j=g&&p.current()===p.canvas,M=!j&&(!h||E);i(()=>{A.current=!1,u(()=>k(!1))},[t,r,c,f,m,h,g,b]),i(()=>{if(b<=0||O||!M||o===void 0)return;let e=o.setTimeout(()=>{A.current||(A.current=!0,u(()=>k(!0)),C&&C())},b*1e3);return()=>o.clearTimeout(e)},[b,M,O,C]);let N=n(()=>{let e=r===`3x3`?3:4,n=e>1?f:0,i=v(t),a=y(t),o=[];for(let r=0;r<e;r++)for(let l=0;l<e;l++){let u=_(t,r,l,e);o.push(s(`span`,{"aria-hidden":!0,style:{position:`absolute`,top:r*n,left:l*n,width:x,height:x,borderRadius:`50%`,backgroundColor:c,opacity:.3,animationName:i,animationDuration:`${a}ms`,animationTimingFunction:`linear`,animationIterationCount:`infinite`,animationDelay:`${u}ms`,animationPlayState:O||j?`paused`:E?`running`:`paused`}},`${r}-${l}`))}return o},[t,r,c,f,E,j,O]),P=x+Math.max(0,(r===`3x3`?3:4)-1)*f,F=P>0?P:S;return l(`div`,{ref:T,role:`img`,"aria-label":`Animated dot grid`,style:{position:`relative`,overflow:`hidden`,padding:2,width:m,height:m,opacity:1,transition:`none`,...w},children:[s(`style`,{children:`
@keyframes ghostFlow {
  0%, 18% { opacity: 1; }
  35% { opacity: 0.6; }
  50%, 100% { opacity: 0.3; }
}
@keyframes doubleSlow {
  0%, 100% { opacity: 0.3; }
  8% { opacity: 0.72; }
  16%, 24% { opacity: 1; }
  34%, 50% { opacity: 0.3; }
  58% { opacity: 0.58; }
  66%, 74% { opacity: 0.96; }
  84% { opacity: 0.48; }
}
@keyframes danceSpark {
  0%, 6% { opacity: 1; }
  18% { opacity: 0.45; }
  24%, 100% { opacity: 0.3; }
}
            `}),s(`div`,{style:{position:`relative`,width:F,height:F,transform:`scale(${(m-4)/F})`,transformOrigin:`top left`},children:N})]})}var x,S,C=e((()=>{r(),c(),t(),h(),x=2,S=16,f(b,{grid:{type:m.Enum,title:`Grid`,options:[`4x4`,`3x3`],optionTitles:[`4×4`,`3×3`],defaultValue:`4x4`},variant:{type:m.Enum,title:`Variant`,options:[`ghost-flow`,`double-slow`,`dance-spark`],optionTitles:[`Ghost Flow`,`Double Slow`,`Dance Spark`],defaultValue:`ghost-flow`},dotColor:{type:m.Color,title:`Dot Color`,defaultValue:`#0099ff`},gap:{type:m.Number,title:`Gap`,defaultValue:(16-x)/3,min:0,max:20,step:.1,unit:`px`},size:{type:m.Number,title:`Size`,defaultValue:20,min:8,max:200,step:1,unit:`px`},pauseOffscreen:{type:m.Boolean,title:`Pause off-screen`,defaultValue:!0},pauseOnCanvas:{type:m.Boolean,title:`Pause on Canvas`,defaultValue:!0},duration:{type:m.Number,title:`Duration`,description:`0 = loops forever`,defaultValue:0,min:0,max:60,step:.1,unit:`s`},onComplete:{type:m.EventHandler,title:`On Complete`}})}));export{C as n,b as t};
//# sourceMappingURL=AgentDotAnimation.DTc9De2b.mjs.map