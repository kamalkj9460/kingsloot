"use strict";(self.webpackChunkjuno_shopify_template=self.webpackChunkjuno_shopify_template||[]).push([[774],{3639:(e,t,i)=>{i.d(t,{Z:()=>d});var s=i(8883);const n=new Map,a=new Map,o=new Map;let r=0;function h(e,t,i={}){const{root:s,rootMargin:h,threshold:d=0}=i;if(!e)return;const c=function(e){return e?o.has(e)?o.get(e):(r+=1,o.set(e,r.toString()),`${o.get(e)}_`):""}(s)+(h?`${d.toString()}_${h}`:d.toString());let u=a.get(c);u||(u=new IntersectionObserver(l,i),c&&a.set(c,u));const p={callback:t,element:e,inView:!1,observerId:c,observer:u,thresholds:u.thresholds||(Array.isArray(d)?d:[d])};return n.set(e,p),u.observe(e),p}function l(e){e.forEach((e=>{const{isIntersecting:t,intersectionRatio:i,target:s}=e,a=n.get(s);if(a&&i>=0){let s=a.thresholds.some((e=>a.inView?i>e:i>=e));void 0!==t&&(s=s&&t),a.inView=s,a.callback(s,e)}}))}const d=class{constructor(e){this.element=void 0,this.container=void 0,this.id=void 0,this.settings=void 0,this.canAutoplay=void 0,this.canHaveSound=void 0,this.isMuted=void 0,this.isPlaying=void 0,this.isReady=void 0,this.playTrigger=void 0,this.queue=void 0,this.player=void 0,this.playPromise=void 0,this.element=e,this.settings=this.element.getAttribute("data-settings"),this.canAutoplay=this.settings.includes("autoplay"),this.canHaveSound=!((/iPad|iPhone|iPod/.test(navigator.userAgent)||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1)&&!window.MSStream),this.container=(0,s.U2)(".js-video-container",e),this.id=e.getAttribute("data-id")||"",this.isMuted=this.settings.includes("muted"),this.isPlaying=!1,this.isReady=!1,this.playTrigger=e.querySelector(".js-video-trigger"),this.queue=new Set,this.createPlayer(),this._bindTrigger(),this._observeElement(),e.dispatchEvent(new CustomEvent("videoloaded"))}play(){if(!this.isPlaying)return this.isReady?void(this.playPromise=Promise.resolve(this.playVideo())):(this.createPlayer(),void this._queueTask("play"))}async pause(){this.isPlaying&&(this.isReady&&void 0!==this.playPromise?(await this.playPromise,this.pauseVideo(),this.onStop()):this._queueTask("pause"))}onEnded(){this.onStop()}onPlay(){this.element.setAttribute("data-status","loaded playing"),this.isPlaying=!0}onStop(){this.element.setAttribute("data-status","loaded paused"),this.isPlaying=!1}watchResize(e,t){const i=t/e,s=()=>{const e=this.element.clientWidth;this.container.style.width=`${e}px`,this.container.style.height=e*i+"px"};s(),this.element.dispatchEvent(new CustomEvent("videosize")),window.dispatchEvent(new CustomEvent("resize")),window.addEventListener("resize",(()=>s())),this.player.element.setAttribute("tabindex","-1")}flushQueue(){this.queue.forEach((e=>this[e]())),this.queue.clear()}_queueTask(e){this.queue.add(e)}_bindTrigger(){this.playTrigger&&this.playTrigger.addEventListener("click",(()=>{this.isPlaying?this.pause():this.play()}))}_observeElement(){h(this.container,(e=>{e&&this.canAutoplay?this.play():this.isReady&&this.pause()}),{threshold:.25,rootMargin:"-50px"})}}},4200:(e,t,i)=>{i.r(t),i.d(t,{default:()=>o});var s=i(3742),n=i(3639);class a extends n.Z{constructor(...e){super(...e),this.player=void 0,this.stateChange={0:()=>this.onEnded(),1:()=>this.onPlay(),2:()=>this.pause()}}createPlayer(){if(this.player)return;a._warmConnections();const{Player:e}=window.YT||{};e?(this.container.innerHTML="<div></div>",this.player=new e(this.container.firstElementChild,{videoId:this.id,playerVars:{autoplay:0,controls:0,loop:1,modestbranding:1,playlist:this.id,playsinline:1,rel:0,color:"white"},events:{onReady:()=>this._onReady(),onStateChange:({data:e})=>{this.stateChange[e]&&this.stateChange[e]()}}}),this.player.element=this.player.getIframe()):this._loadYT()}playVideo(){this.player.playVideo()}pauseVideo(){this.player.pauseVideo()}_onReady(){this.isReady=!0,!this.isMuted&&this.canHaveSound||this.player.mute();const{width:e,height:t}=this.player.element;this.watchResize(+e,+t),"requestIdleCallback"in window?requestIdleCallback((()=>this.flushQueue())):this.flushQueue()}_loadYT(){const e=document.createElement("script");e.src="https://www.youtube.com/player_api",e.async=!0,window.onYouTubeIframeAPIReady=()=>this.createPlayer(),document.body.appendChild(e)}static _warmConnections(){a.preconnected||((0,s.k)("preconnect","https://www.youtube-nocookie.com"),(0,s.k)("preconnect","https://www.google.com"),(0,s.k)("preconnect","https://googleads.g.doubleclick.net"),(0,s.k)("preconnect","https://static.doubleclick.net"),a.preconnected=!0)}}a.preconnected=void 0;const o=a},3742:(e,t,i)=>{function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])}return e},s.apply(this,arguments)}i.d(t,{k:()=>a});var n=i(8883);function a(e,t,i){(0,n.lw)({type:"link",props:s({rel:e,href:t},i&&{as:i},{crossOrigin:"anonymous"})},document.head)}}}]);