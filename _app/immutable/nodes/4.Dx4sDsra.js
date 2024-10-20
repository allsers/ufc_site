import{s as $,n as f,o as C,e as b}from"../chunks/scheduler.B1soYl2W.js";import{S as T,i as D,e as v,c as _,z as A,o as u,g as y,d as m,s as x,u as I,y as L,f as E,a as M,v as O,h as g,w as q,n as w,l as N,x as S,A as V}from"../chunks/index.Mel9JJoE.js";import{f as z}from"../chunks/index.Dkxe9Wte.js";import"../chunks/paths.Die9T9YX.js";const H="https://raw.githubusercontent.com/Greco1899/scrape_ufc_stats/main/ufc_event_details.csv",k=async({fetch:d})=>{try{return{events:(await(await d(H)).text()).split(`
`).slice(1).map(n=>{const[c,i,r]=n.split(",");return{EVENT:c,LOCATION:i,DATE:r}}).slice(0,15).map(n=>{const[c,i]=n.EVENT.split(": ");return{event:c,fighters:i,location:n.LOCATION,date:n.DATE}})}}catch(t){return console.error("Error fetching or processing CSV:",t),{error:"Failed to fetch or process data"}}},R=Object.freeze(Object.defineProperty({__proto__:null,load:k},Symbol.toStringTag,{value:"Module"}));function F(d){let t,o='<ol id="eventsHTML" class="svelte-12gzot0"></ol>';return{c(){t=v("div"),t.innerHTML=o,this.h()},l(e){t=_(e,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),A(t)!=="svelte-15k4i5v"&&(t.innerHTML=o),this.h()},h(){u(t,"id","cardsContainer"),u(t,"class","svelte-12gzot0")},m(e,s){y(e,t,s)},p:f,i:f,o:f,d(e){e&&m(t)}}}function U(d){return C(async()=>{const t=document.getElementById("section1");t&&(t.style.height="300vh");let o=[];o=data.events||[];const e=document.getElementById("eventsHTML");e&&(e.style.opacity="0"),o.forEach(s=>{const n=document.createElement("li");n.id="card",[{id:"event",text:s.event},{id:"fighters",text:s.fighters},{id:"date",text:s.date},{id:"location",text:s.location}].forEach(({id:i,text:r})=>{const l=document.createElement("p");l.id=i,l.innerText=r,n.appendChild(l)}),e==null||e.appendChild(n)}),e&&setTimeout(()=>{e.style.transition="opacity 0.35s",e.style.opacity="1",t&&(t.style.height="auto")},25)}),[]}class j extends T{constructor(t){super(),D(this,t,U,F,$,{})}}function B(d){let t,o,e,s,n="UFC Events",c,i,r,l;return r=new j({}),{c(){t=v("meta"),o=x(),e=v("div"),s=v("h1"),s.textContent=n,i=x(),I(r.$$.fragment),this.h()},l(a){const p=L("svelte-17938xx",document.head);t=_(p,"META",{name:!0,content:!0}),p.forEach(m),o=E(a),e=_(a,"DIV",{id:!0,class:!0});var h=M(e);s=_(h,"H1",{class:!0,"data-svelte-h":!0}),A(s)!=="svelte-qqiki"&&(s.textContent=n),i=E(h),O(r.$$.fragment,h),h.forEach(m),this.h()},h(){document.title="UFC",u(t,"name","description"),u(t,"content","About this app"),u(s,"class","svelte-111q57o"),u(e,"id","section1"),u(e,"class","svelte-111q57o")},m(a,p){g(document.head,t),y(a,o,p),y(a,e,p),g(e,s),g(e,i),q(r,e,null),l=!0},p:f,i(a){l||(a&&(c||b(()=>{c=V(s,z,{y:-50,duration:500}),c.start()})),w(r.$$.fragment,a),l=!0)},o(a){N(r.$$.fragment,a),l=!1},d(a){a&&(m(o),m(e)),m(t),S(r)}}}function P(d){return C(async()=>{}),[]}class W extends T{constructor(t){super(),D(this,t,P,B,$,{})}}export{W as component,R as universal};