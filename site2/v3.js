(function(){
var d=document;function $(s,r){return(r||d).querySelector(s)}function $$(s,r){return[].slice.call((r||d).querySelectorAll(s))}
function mk(t,c,h){var e=d.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e}
function z(n){return n<10?"0"+n:""+n}
var red=matchMedia("(prefers-reduced-motion: reduce)").matches,fine=matchMedia("(hover:hover) and (pointer:fine)").matches,LB=window.LB||[];
function loadIm(el){var s=el.getAttribute("data-src");if(!s)return;var i=new Image();i.onload=function(){el.style.backgroundImage='url("'+s+'")';el.style.backgroundPosition=el.getAttribute("data-pos")||"center";requestAnimationFrame(function(){el.classList.add("ld")})};i.src=s}
function fig(i,r,cap,cls){var p=LB[i],f=mk("figure","fg rv"+(cls?" "+cls:""));f.innerHTML='<a class="ph" data-i="'+i+'" style="aspect-ratio:'+r+'" tabindex="0" role="button" aria-label="Ampliar: '+p[1]+'"><div class="pi"><div class="im" data-src="'+p[0]+'" data-pos="'+(p[3]||"center")+'"></div></div></a>'+(cap?"<figcaption><h3>"+p[1]+'</h3><p class="mono">'+p[2]+"</p></figcaption>":"");return f}
$$("[data-fig]").forEach(function(t){var f=fig(+t.getAttribute("data-fig"),t.getAttribute("data-r")||".75",t.getAttribute("data-cap")!=="0",t.className);if(t.getAttribute("style"))f.setAttribute("style",t.getAttribute("style"));if(t.hasAttribute("data-p"))f.setAttribute("data-p",t.getAttribute("data-p"));t.parentNode.replaceChild(f,t)});
$$(".seal").forEach(function(t){var e=t.getAttribute("data-t");t.innerHTML='<svg viewBox="0 0 200 200" aria-hidden="true"><defs><path id="sp'+(t.id||"")+'" d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0"/></defs><text><textPath href="#sp'+(t.id||"")+'" startOffset="0" textLength="500">'+e+'</textPath></text></svg><b>S</b>'});
var crs=[];
$$(".crw").forEach(function(w){var ids=w.getAttribute("data-cr").split(","),r=mk("div","cr");ids.forEach(function(i){var c=mk("div","cd");c.appendChild(fig(+i,".78",true,"c"));r.appendChild(c)});w.appendChild(r);
var P=mk("button","cb p",'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M15 5l-7 7 7 7"/></svg>'),N=mk("button","cb n",'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M9 5l7 7-7 7"/></svg>');
function go(k){var c=$(".cd",r);r.scrollBy({left:k*(c.offsetWidth+20),behavior:"smooth"})}
P.setAttribute("aria-label","Anterior");N.setAttribute("aria-label","Próxima");w.appendChild(P);w.appendChild(N);P.onclick=function(){go(-1)};N.onclick=function(){go(1)};
if(fine){var dn=false,sx=0,sl=0,mv=0;r.addEventListener("pointerdown",function(e){if(e.pointerType==="mouse"){dn=true;mv=0;sx=e.clientX;sl=r.scrollLeft}});addEventListener("pointermove",function(e){if(dn){var x=e.clientX-sx;mv=Math.max(mv,Math.abs(x));if(mv>5)r.classList.add("g");r.scrollLeft=sl-x}});addEventListener("pointerup",function(){if(dn){dn=false;r.classList.remove("g")}});r.addEventListener("click",function(e){if(mv>5){e.stopPropagation();e.preventDefault();mv=0}},true)}
crs.push(r);setTimeout(function(){var c=$$(".cd",r)[Math.floor(ids.length/2)];if(c)r.scrollLeft=c.offsetLeft-(r.clientWidth-c.offsetWidth)/2},60)});
$$(".im").forEach(loadIm);
var hd=$(".hd"),pp=$$("[data-p]"),tk=false;
function upd(){tk=false;var y=scrollY,vh=innerHeight;if(hd)hd.classList.toggle("s",y>40);
if(!red){pp.forEach(function(e){var b=e.getBoundingClientRect();if(b.bottom<-200||b.top>vh+200)return;e.style.setProperty("--py",(((b.top+b.height/2-vh/2)/vh)*-e.getAttribute("data-p")).toFixed(1))});
$$(".hero .hb").forEach(function(h){if(y<1.2*vh)h.style.transform="translate3d(0,"+(.16*y)+"px,0)"})}
$$(".crw").forEach(function(w){var b=w.getBoundingClientRect();if(b.bottom<0||b.top>vh)return;var r=$(".cr",w),rb=r.getBoundingClientRect(),cx=rb.left+rb.width/2;$$(".cd",r).forEach(function(c){var cb=c.getBoundingClientRect(),n=(cb.left+cb.width/2-cx)/cb.width;c.style.setProperty("--d",n.toFixed(3));c.style.setProperty("--ad",Math.min(2,Math.abs(n)).toFixed(3))})})}
function req(){if(!tk){tk=true;requestAnimationFrame(upd)}}
addEventListener("scroll",req,{passive:true});addEventListener("resize",req);crs.forEach(function(r){r.addEventListener("scroll",req,{passive:true})});setTimeout(req,120);req();
var rv=$$(".rv");if("IntersectionObserver"in window&&!red){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("on");io.unobserve(e.target)}})},{threshold:.14,rootMargin:"0px 0px -4% 0px"});rv.forEach(function(e){var dl=e.getAttribute("data-d");if(dl)e.style.transitionDelay=dl+"s";io.observe(e)})}else rv.forEach(function(e){e.classList.add("on")});
if(fine&&!red){var cu=mk("div","cur","ver");d.body.appendChild(cu);var mx=-100,my=-100,cx=-100,cy=-100,run=false;function an(){cx+=.18*(mx-cx);cy+=.18*(my-cy);cu.style.transform="translate3d("+cx+"px,"+cy+"px,0)";if(Math.abs(mx-cx)+Math.abs(my-cy)>.3)requestAnimationFrame(an);else run=false}
addEventListener("pointermove",function(e){mx=e.clientX;my=e.clientY;cu.classList.toggle("on",!!(e.target.closest&&e.target.closest(".ph"))&&!$("#lb").classList.contains("o"));if(!run){run=true;requestAnimationFrame(an)}},{passive:true})}
var lb=$("#lb"),li=$("#li"),k=0,tx=null;
function show(n){k=(n+LB.length)%LB.length;var p=LB[k];$("#ln").textContent=z(k+1)+" / "+z(LB.length);$("#lt").textContent=p[1];$("#ls").textContent=p[2];li.alt=p[1];li.className="";li.onload=function(){li.className="ld"};li.src=p[0];if(li.complete&&li.naturalWidth)li.className="ld"}
function open(n){lb.classList.add("o");requestAnimationFrame(function(){lb.classList.add("v")});d.body.style.overflow="hidden";show(n);$("#lx").focus()}
function close(){lb.classList.remove("v");d.body.style.overflow="";setTimeout(function(){lb.classList.remove("o")},500)}
d.addEventListener("click",function(e){var p=e.target.closest&&e.target.closest(".ph");if(p)open(+p.getAttribute("data-i"))});
d.addEventListener("keydown",function(e){var p=e.target.closest&&e.target.closest(".ph");if(p&&e.key==="Enter")open(+p.getAttribute("data-i"));if(lb.classList.contains("o")){if(e.key==="Escape")close();if(e.key==="ArrowLeft")show(k-1);if(e.key==="ArrowRight")show(k+1)}});
$("#lx").onclick=close;$("#lp").onclick=function(){show(k-1)};$("#lq").onclick=function(){show(k+1)};lb.addEventListener("click",function(e){if(e.target===lb)close()});
lb.addEventListener("touchstart",function(e){tx=e.touches[0].clientX},{passive:true});lb.addEventListener("touchend",function(e){if(tx!==null){var x=e.changedTouches[0].clientX-tx;if(Math.abs(x)>50)show(k+(x<0?1:-1));tx=null}});
})();
