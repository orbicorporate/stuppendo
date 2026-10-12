(function(){
var SEL=".arch,.fl figure,.fm figure,.uc .im,.cat .im,.edu .ph,.duo figure,.dpic,.dual .ar,.pan";
var st=document.createElement("style");st.textContent=".zv{position:fixed;inset:0;z-index:200;background:rgba(40,10,8,.94);display:grid;place-items:center;opacity:0;pointer-events:none;transition:opacity .35s}.zv.on{opacity:1;pointer-events:auto}.zv img{max-width:min(92vw,1400px);max-height:84vh;border-radius:22px;box-shadow:0 40px 90px -30px rgba(0,0,0,.8);transform:scale(.94);transition:transform .45s cubic-bezier(.2,.7,.2,1);object-fit:contain}.zv.on img{transform:none}.zv p{position:absolute;left:0;right:0;bottom:22px;text-align:center;margin:0;color:#fff;font:italic 400 1.3rem/1.2 Georgia,serif}.zv button{position:absolute;width:48px;height:48px;border-radius:50%;border:1px solid rgba(203,173,111,.7);background:rgba(90,20,18,.6);color:#fff;font-size:1.5rem;line-height:1;cursor:pointer;transition:.3s}.zv button:hover{background:#cbad6f;color:#5a1412}.zx{top:20px;right:20px}.zp{left:20px;top:50%;margin-top:-24px}.zn{right:20px;top:50%;margin-top:-24px}"+SEL.split(",").map(function(s){return s}).join(",")+"{cursor:zoom-in}";
document.head.appendChild(st);
var v=document.createElement("div");v.className="zv";v.setAttribute("role","dialog");v.setAttribute("aria-label","Imagem ampliada");
v.innerHTML='<button class="zx" aria-label="Fechar">×</button><button class="zp" aria-label="Anterior">‹</button><img alt=""><button class="zn" aria-label="Próxima">›</button><p></p>';
document.body.appendChild(v);
var im=v.querySelector("img"),cp=v.querySelector("p"),list=[],i=0;
function items(){var out=[],seen={};document.querySelectorAll(SEL).forEach(function(el){var g=el.tagName==="IMG"?el:el.querySelector("img");if(!g||g.classList.contains("fz")||g.classList.contains("cho"))return;var s=g.currentSrc||g.src;if(seen[s])return;seen[s]=1;var c=el.querySelector("figcaption");out.push({el:el,src:s,cap:c?c.textContent.replace(/^Formato/,"").trim():(g.alt||"")})});return out}
function show(n){i=(n+list.length)%list.length;im.src=list[i].src;im.alt=list[i].cap;cp.textContent=list[i].cap;v.classList.add("on")}
function close(){v.classList.remove("on")}
document.addEventListener("click",function(e){if(v.contains(e.target))return;var bt=e.target.closest("a,button");if(bt&&!bt.classList.contains("pan"))return;var el=e.target.closest(SEL);if(!el)return;list=items();var g=el.tagName==="IMG"?el:el.querySelector("img");if(!g)return;var s=g.currentSrc||g.src,k=-1;list.forEach(function(o,x){if(o.src===s)k=x});if(k<0)return;show(k)});
v.querySelector(".zx").onclick=close;v.querySelector(".zp").onclick=function(){show(i-1)};v.querySelector(".zn").onclick=function(){show(i+1)};
v.onclick=function(e){if(e.target===v)close()};
addEventListener("keydown",function(e){if(!v.classList.contains("on"))return;if(e.key==="Escape")close();if(e.key==="ArrowLeft")show(i-1);if(e.key==="ArrowRight")show(i+1)});
})();
