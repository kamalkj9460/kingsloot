"use strict";(self.webpackChunkjuno_shopify_template=self.webpackChunkjuno_shopify_template||[]).push([[209],{2017:(e,t,s)=>{s.r(t),s.d(t,{default:()=>n});var i=s(8883);class n{constructor(e){this.element=void 0,this.triggers=void 0,this.element=e,this.triggers=(0,i.go)(".js-accordion-trigger",this.element),this.bindEvents()}bindEvents(){let e,t=this.triggers.find((e=>e.classList.contains("is-open")));t&&(e=t.nextElementSibling),this.triggers.forEach((s=>{const i=s.nextElementSibling;let n;s.classList.contains("is-open")&&(n=i.offsetHeight,i.style.maxHeight=`${n+30}px`),s.addEventListener("click",(s=>{const o=s.currentTarget;t&&t!==o&&(t.classList.remove("is-open"),e.style.maxHeight="0px"),n||(i.style.maxHeight="none",n=i.offsetHeight,i.style.maxHeight="0px"),requestAnimationFrame((()=>{const s=o.classList.toggle("is-open");i.style.maxHeight=`${s?n+30:0}px`,e=i,t=o}))}))}))}}}}]);