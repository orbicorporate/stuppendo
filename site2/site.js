(function(){
var $=function(s,c){return(c||document).querySelector(s)},$$=function(s,c){return[].slice.call((c||document).querySelectorAll(s))};
var hd=$("#hd");function sc(){hd&&hd.classList.toggle("s",scrollY>30)}sc();addEventListener("scroll",sc,{passive:true});
var bg=$("#bg"),nv=$("#nv");if(bg)bg.onclick=function(){nv.classList.toggle("o")};
$$("nav a").forEach(function(a){a.onclick=function(){nv.classList.remove("o")}});
var red=matchMedia("(prefers-reduced-motion:reduce)").matches;
/* reveal */
var rv=$$("[data-r]");
if("IntersectionObserver"in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.12,rootMargin:"0px 0px -6% 0px"});rv.forEach(function(e){io.observe(e)})}else rv.forEach(function(e){e.classList.add("in")});
/* contadores */
var cs=$$("[data-count]");
function run(e){var to=+e.dataset.count,suf=e.dataset.suf||"",t0=performance.now(),D=1600;(function f(t){var p=Math.min(1,(t-t0)/D),v=Math.round(to*(1-Math.pow(1-p,3)));e.textContent=v+suf;if(p<1)requestAnimationFrame(f)})(t0)}
if("IntersectionObserver"in window&&!red){var ic=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){run(e.target);ic.unobserve(e.target)}})},{threshold:.4});cs.forEach(function(e){e.textContent="0"+(e.dataset.suf||"");ic.observe(e)})}
/* paralaxe */
var px=$$("[data-px]"),tk=0;
function par(){tk=0;var h=innerHeight;px.forEach(function(e){var r=e.parentNode.getBoundingClientRect();if(r.bottom<-300||r.top>h+300)return;var p=(r.top+r.height/2-h/2),s=+e.dataset.px;var m=Math.max(0,(e.offsetHeight-e.parentNode.clientHeight)/2-2),v=Math.max(-m,Math.min(m,p*s));e.style.transform="translate3d(0,"+v.toFixed(1)+"px,0)"+(e.dataset.rot?" rotate("+(+e.dataset.rot+p*s*.05).toFixed(1)+"deg)":"")})}
if(!red){addEventListener("scroll",function(){if(!tk){tk=1;requestAnimationFrame(par)}},{passive:true});addEventListener("resize",par);par()}
/* filtros */
$$(".chips").forEach(function(c){var bs=$$("button",c),cards=$$(".uc");bs.forEach(function(b){b.onclick=function(){bs.forEach(function(x){x.setAttribute("aria-pressed",x===b)});var f=b.dataset.f;cards.forEach(function(k){k.hidden=!(f==="*"||k.dataset.st===f);if(!k.hidden)k.classList.add("in")})}})});
})();
(function(){var fl=document.querySelector(".fl");if(!fl)return;var bs=document.querySelectorAll(".vs button");
bs.forEach(function(b){b.onclick=function(){bs.forEach(function(x){x.setAttribute("aria-pressed",x===b)});fl.dataset.v=b.dataset.v;fl.querySelectorAll("figure").forEach(function(f){f.classList.remove("on")})}});
fl.querySelectorAll("figure").forEach(function(f){f.addEventListener("click",function(){if(fl.dataset.v!=="2")return;var r=f.parentNode;r.querySelectorAll("figure.on").forEach(function(x){x.classList.remove("on")});f.classList.add("on")})})})();
