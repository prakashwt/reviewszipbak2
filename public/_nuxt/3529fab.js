(window.webpackJsonp=window.webpackJsonp||[]).push([[13,20],{166:function(e,t,n){"use strict";var o=n(76),r=n(5),l=n(73),c=n(74),d=n(19),f=n(57),v=n(75),h=n(12),m=Math.min,w=[].push,y=4294967295,x=!h((function(){RegExp(y,"y")}));n(58)("split",2,(function(e,t,n,h){var k;return k="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,t){var r=String(this);if(void 0===e&&0===t)return[];if(!o(e))return n.call(r,e,t);for(var l,c,d,output=[],f=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),h=0,m=void 0===t?y:t>>>0,x=new RegExp(e.source,f+"g");(l=v.call(x,r))&&!((c=x.lastIndex)>h&&(output.push(r.slice(h,l.index)),l.length>1&&l.index<r.length&&w.apply(output,l.slice(1)),d=l[0].length,h=c,output.length>=m));)x.lastIndex===l.index&&x.lastIndex++;return h===r.length?!d&&x.test("")||output.push(""):output.push(r.slice(h)),output.length>m?output.slice(0,m):output}:"0".split(void 0,0).length?function(e,t){return void 0===e&&0===t?[]:n.call(this,e,t)}:n,[function(n,o){var r=e(this),l=null==n?void 0:n[t];return void 0!==l?l.call(n,r,o):k.call(String(r),n,o)},function(e,t){var o=h(k,e,this,t,k!==n);if(o.done)return o.value;var v=r(e),w=String(this),R=l(v,RegExp),E=v.unicode,L=(v.ignoreCase?"i":"")+(v.multiline?"m":"")+(v.unicode?"u":"")+(x?"y":"g"),j=new R(x?v:"^(?:"+v.source+")",L),_=void 0===t?y:t>>>0;if(0===_)return[];if(0===w.length)return null===f(j,w)?[w]:[];for(var p=0,q=0,M=[];q<w.length;){j.lastIndex=x?q:0;var C,T=f(j,x?w:w.slice(q));if(null===T||(C=m(d(j.lastIndex+(x?0:q)),w.length))===p)q=c(w,q,E);else{if(M.push(w.slice(p,q)),M.length===_)return M;for(var i=1;i<=T.length-1;i++)if(M.push(T[i]),M.length===_)return M;q=p=C}}return M.push(w.slice(p)),M}]}))},173:function(e,t){var n='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4m4-5l5 5 5-5m-5 5V3"/></svg>';e.exports=n,t.default=n},183:function(e,t,n){(function(n){var o,r,l;r=[],void 0===(l="function"==typeof(o=function(){"use strict";function b(a,b){return void 0===b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\ufeff",a],{type:a.type}):a}function t(a,b,e){var t=new XMLHttpRequest;t.open("GET",a),t.responseType="blob",t.onload=function(){g(t.response,b,e)},t.onerror=function(){console.error("could not download file")},t.send()}function o(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function r(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(e){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var l="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n&&n.global===n?n:void 0,a=l.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=l.saveAs||("object"!=typeof window||window!==l?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(b,g,e){var i=l.URL||l.webkitURL,n=document.createElement("a");g=g||b.name||"download",n.download=g,n.rel="noopener","string"==typeof b?(n.href=b,n.origin===location.origin?r(n):o(n.href)?t(b,g,e):r(n,n.target="_blank")):(n.href=i.createObjectURL(b),setTimeout((function(){i.revokeObjectURL(n.href)}),4e4),setTimeout((function(){r(n)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,g,n){if(g=g||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(b(e,n),g);else if(o(e))t(e,g,n);else{var i=document.createElement("a");i.href=e,i.target="_blank",setTimeout((function(){r(i)}))}}:function(b,e,n,g){if((g=g||open("","_blank"))&&(g.document.title=g.document.body.innerText="downloading..."),"string"==typeof b)return t(b,e,n);var o="application/octet-stream"===b.type,i=/constructor/i.test(l.HTMLElement)||l.safari,r=/CriOS\/[\d]+/.test(navigator.userAgent);if((r||o&&i||a)&&"undefined"!=typeof FileReader){var c=new FileReader;c.onloadend=function(){var a=c.result;a=r?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=a:location=a,g=null},c.readAsDataURL(b)}else{var d=l.URL||l.webkitURL,f=d.createObjectURL(b);g?g.location=f:location.href=f,g=null,setTimeout((function(){d.revokeObjectURL(f)}),4e4)}});l.saveAs=g.saveAs=g,e.exports=g})?o.apply(t,r):o)||(e.exports=l)}).call(this,n(27))},186:function(e,t,n){"use strict";n.r(t);n(166);var o=n(183),r={props:["media","type","colors","PreviewMode"],methods:{getTitle:function(e){return e.toLowerCase().split(" ").join("_")},downloadDocument:function(){Object(o.saveAs)(window.URL.createObjectURL(this.media.file),"".concat(this.media.title,".pdf"))}}},l=n(45),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"mediaC"},[o("div",[o("img",{attrs:{src:e.PreviewMode?e.media.coverDataURI:"./media/"+e.getTitle(e.media.title)+"."+e.media.coverExt,alt:e.media.title}})]),e._v(" "),o("div",{staticClass:"controls"},[o("p",{staticClass:"title card"},[e._v("\n      "+e._s(e.media.title)+"\n    ")]),e._v(" "),o("p",{staticClass:"mediaInfo card"},[e._v("PDF - "+e._s(e.media.filesize))]),e._v(" "),o("div",{staticClass:"docDl"},[o("a",{staticClass:"dlBtn",style:{backgroundColor:""+e.colors.buttonBg.color},attrs:{href:e.PreviewMode?"":"./media/"+e.getTitle(e.media.title)+"."+e.media.ext,download:"",target:"_blank"},on:{click:function(t){return t.preventDefault(),e.downloadDocument()}}},[o("div",{staticClass:"icon action",domProps:{innerHTML:e._s(n(173))}})])])])])}),[],!1,null,null,null);t.default=component.exports}}]);