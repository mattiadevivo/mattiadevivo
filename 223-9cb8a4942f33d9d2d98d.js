"use strict";(self.webpackChunkmattiadevivo_dev=self.webpackChunkmattiadevivo_dev||[]).push([[223],{8223:function(e,t,n){n.r(t),n.d(t,{renderImageToString:function(){return b},swapPlaceholderImage:function(){return g}});var o=n(3723),a=n(7294),i=n(7762);n(2369);let r;const c=new WeakMap,l=navigator.connection||navigator.mozConnection||navigator.webkitConnection,s=["image","loading","isLoading","isLoaded","imgClassName","imgStyle","objectPosition","backgroundColor","objectFit"];function d(e,t){e.style.opacity="1",t&&(t.style.opacity="0")}function u(e,t,n,o,a,i){const r=e.querySelector("[data-main-image]"),c=e.querySelector("[data-placeholder-image]"),l=n.has(t);function s(e){this.removeEventListener("load",s);const t=e.currentTarget,n=new Image;n.src=t.currentSrc,n.decode?n.decode().then((()=>{d(this,c),null==a||a({wasCached:l})})).catch((e=>{d(this,c),null==i||i(e)})):(d(this,c),null==a||a({wasCached:l}))}return r.addEventListener("load",s),null==o||o({wasCached:l}),Array.from(r.parentElement.children).forEach((e=>{const t=e.getAttribute("data-src"),n=e.getAttribute("data-srcset");t&&(e.removeAttribute("data-src"),e.setAttribute("src",t)),n&&(e.removeAttribute("data-srcset"),e.setAttribute("srcset",n))})),n.add(t),r.complete&&s.call(r,{currentTarget:r}),()=>{r&&r.removeEventListener("load",s)}}function g(e,t,a,i,s,d,g){if(!(0,o.h)()){let o;const v=(h=()=>{o=u(e,t,a,s,d,g)},"IntersectionObserver"in window?(r||(r=new IntersectionObserver((e=>{e.forEach((e=>{var t;e.isIntersecting&&(null==(t=c.get(e.target))||t(),c.delete(e.target))}))}),{rootMargin:"4g"!==(null==l?void 0:l.effectiveType)||null!=l&&l.saveData?"2500px":"1250px"})),function(e){return c.set(e,h),r.observe(e),function(){r&&e&&(c.delete(e),r.unobserve(e))}}):function(){return h(),function(){}}),f=v(e);var b,m;return"objectFit"in document.documentElement.style||(e.dataset.objectFit=null!=(b=i.objectFit)?b:"cover",e.dataset.objectPosition=""+(null!=(m=i.objectPosition)?m:"50% 50%"),async function(e){"objectFitPolyfill"in window||await n.e(843).then(n.t.bind(n,4843,23)),window.objectFitPolyfill(e)}(e)),()=>{o&&o(),f()}}var h;return u(e,t,a,s,d,g)}function b(e){let{image:t,loading:n="lazy",isLoading:r,isLoaded:c,imgClassName:l,imgStyle:d={},objectPosition:u,backgroundColor:g,objectFit:b="cover"}=e,m=(0,o._)(e,s);const{width:h,height:v,layout:f,images:w,placeholder:y,backgroundColor:p}=t;return d=(0,o.a)({objectFit:b,objectPosition:u,backgroundColor:g},d),(0,i.uS)(a.createElement(o.L,{layout:f,width:h,height:v},a.createElement(o.P,(0,o.a)({},(0,o.g)(y,c,f,h,v,p,b,u))),a.createElement(o.M,(0,o.a)({},m,{width:h,height:v,className:l},(0,o.b)(r,c,w,n,d)))))}}}]);
//# sourceMappingURL=223-9cb8a4942f33d9d2d98d.js.map