(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{167:function(e,t){var n='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>';e.exports=n,t.default=n},172:function(e,t){var n='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#6B7280"><path d="M8 4a2 2 0 100 4 2 2 0 100-4zm8 0a2 2 0 100 4 2 2 0 100-4zm-8 6a2 2 0 100 4 2 2 0 100-4zm8 0a2 2 0 100 4 2 2 0 100-4zm-8 6a2 2 0 100 4 2 2 0 100-4zm8 0a2 2 0 100 4 2 2 0 100-4z"/></svg>';e.exports=n,t.default=n},174:function(e,t){var n='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff"><path d="M4 5h13v7h2V5c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h8v-2H4V5z"/><path d="M8 11l-3 4h11l-4-6-3 4z"/><path d="M19 14h-2v3h-3v2h3v3h2v-3h3v-2h-3z"/></svg>';e.exports=n,t.default=n},179:function(e,t){var n='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff"><path d="M21.406 6.086l-9-4a1.001 1.001 0 00-.813 0l-9 4c-.02.009-.034.024-.054.035-.028.014-.058.023-.084.04-.022.015-.039.034-.06.05a.87.87 0 00-.19.194c-.02.028-.041.053-.059.081a1.119 1.119 0 00-.076.165c-.009.027-.023.052-.031.079A1.013 1.013 0 002 7v10c0 .396.232.753.594.914l9 4c.13.058.268.086.406.086a.997.997 0 00.402-.096l.004.01 9-4A.999.999 0 0022 17V7a.999.999 0 00-.594-.914zM12 4.095L18.538 7 12 9.905l-1.308-.581L5.463 7 12 4.095zM4 16.351V8.539l7 3.111v7.811l-7-3.11zm9 3.11V11.65l7-3.111v7.812l-7 3.11z"/></svg>';e.exports=n,t.default=n},180:function(e,t){var n='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-code"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>';e.exports=n,t.default=n},181:function(e,t){var n='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff"><path d="M19.94 8.68l-.04-.1a1 1 0 00-.2-.29l-6-6a1 1 0 00-.29-.2l-.09-.03a1 1 0 00-.26-.05L13 2H6a2 2 0 00-2 2v16c0 1.1.9 2 2 2h12a2 2 0 002-2V9l-.01-.06a1 1 0 00-.05-.26zM16.59 8H14V5.41L16.59 8zM6 20V4h6v5a1 1 0 001 1h5v10H6z"/></svg>';e.exports=n,t.default=n},182:function(e,t){var n='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff"><path d="M5 8h2V6h3.252L7.68 18H5v2h8v-2h-2.252L13.32 6H17v2h2V4H5z"/></svg>';e.exports=n,t.default=n},184:function(e,t,n){"use strict";n.r(t);n(166),n(108),n(26),n(77);var r={props:["i","index","item","featured","showAlert","resizeImage"],data:function(){return{dragOver:!1}},methods:{removeImage:function(i){this.featured[this.index].content[i].image=null},removeItem:function(i){this.featured[this.index].content.splice(i,1)},loadFile:function(){this.$refs.import.click()},getFileName:function(e){return e.name.replace(/(?:\.([^.]+))?$/,"")},fileLoaded:function(e,i,t){if(t&&e.dataTransfer.files.length||!t&&e.target.files.length){var n=t?e.dataTransfer.files[0]:e.target.files[0],r=n.type;this.dragOver=!1,n&&r.match(/image\/jpeg|image\/png/gi)?this.imageLoaded(n,i,r):this.showAlert("Unsupported file format.\nOnly jpeg and png files can be attached.")}else this.dragOver=!1},imageLoaded:function(e,i,t){var n=this,title=this.getFileName(e),r=new FileReader;r.onload=function(r){var o=r.target.result,l=o.split(",")[0].split(":")[1].split("/")[1].match(/^\w+/g)[0];n.featured[n.index].content[i].image={dataURI:o,file:e,type:"image",ext:l,mime:t,title:title},n.resizeImage("product",t,n.index,n.featured[n.index].content.length-1)},r.readAsDataURL(e)}},mounted:function(){!this.$refs.input.value&&this.$refs.input.focus()}},o=n(45),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex items-center mt-2"},[r("button",{staticClass:"p-1 flex-shrink-0 focus:outline-none drag cursor-move",attrs:{tabindex:"-1"}},[r("div",{staticClass:"w-6 h-6",domProps:{innerHTML:e._s(n(172))}})]),e._v(" "),r("div",{staticClass:"flex flex-col items-center bg-gray-700 rounded p-2"},[r("div",{staticClass:"flex items-center w-full"},[r("div",{staticClass:"mr-2 flex-shrink-0",attrs:{id:"imageContainer"}},[e.item.image&&e.item.image.dataURI?r("img",{staticClass:"w-12 h-12 object-contain flex-shrink-0 border-2 rounded p-1 border-gray-700 transition-colors duration-200 hover:border-red-600 cursor-pointer",attrs:{src:e.item.image.dataURI,alt:e.item.image.title,title:"Click to remove product image",tabindex:"0"},on:{click:function(t){return e.removeImage(e.i)},keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"space",32,t.key,[" ","Spacebar"])&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),e.removeImage(e.i))}}}):r("button",{staticClass:"p-3 h-12 w-12 box-border rounded cursor-pointer border border-dashed border-black hover:border-gray-400 focus:border-gray-400 transition-colors duration-200 focus:outline-none",class:e.dragOver?"outline-white":"",attrs:{"aria-label":"Attach product image",title:"Attach product image"},on:{click:function(t){return e.loadFile(e.i)},drop:function(t){return t.preventDefault(),e.fileLoaded(t,e.i,!0)},dragleave:function(t){if(t.preventDefault(),t.target!==t.currentTarget)return null;e.dragOver=!1},dragover:function(t){if(t.preventDefault(),t.target!==t.currentTarget)return null;e.dragOver=!0}}},[r("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"import",attrs:{type:"file",accept:"image/jpeg, image/png"},on:{change:function(t){return e.fileLoaded(t,e.i,!1)},click:function(e){e.target.files=null}}}),e._v(" "),r("div",{staticClass:"w-6 h-6 pointer-events-none",domProps:{innerHTML:e._s(n(174))}})])]),e._v(" "),r("div",{staticClass:"w-full"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.item.title,expression:"item.title"}],ref:"input",staticClass:"px-4 w-full h-12 bg-black placeholder-gray-600 rounded border border-transparent transition-colors duration-200 focus:outline-none focus:border-gray-500 hover:border-gray-500",attrs:{type:"text","aria-label":"Product title",title:"Product title",placeholder:"Product title"},domProps:{value:e.item.title},on:{input:function(t){t.target.composing||e.$set(e.item,"title",t.target.value)}}})])]),e._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.item.description,expression:"item.description"}],staticClass:"pDescription block mt-2 px-4 py-3 w-full bg-black placeholder-gray-600 rounded border border-transparent transition-colors duration-200 focus:outline-none focus:border-gray-500 resize-none hover:border-gray-500",attrs:{name:"description",placeholder:"Product description",rows:"2"},domProps:{value:e.item.description},on:{input:function(t){t.target.composing||e.$set(e.item,"description",t.target.value)}}}),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.item.price,expression:"item.price"}],staticClass:"pPrice px-4 h-12 mt-2 w-full bg-black placeholder-gray-600 rounded border border-transparent transition-colors duration-200 focus:outline-none focus:border-gray-500 hover:border-gray-500",attrs:{type:"text",name:"price",placeholder:"Price"},domProps:{value:e.item.price},on:{input:function(t){t.target.composing||e.$set(e.item,"price",t.target.value)}}}),e._v(" "),r("div",{staticClass:"grid grid-cols-2 gap-x-2"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.item.link,expression:"item.link"}],staticClass:"pLink px-4 h-12 mt-2 w-full bg-black placeholder-gray-600 rounded border border-transparent transition-colors duration-200 focus:outline-none focus:border-gray-500 hover:border-gray-500",attrs:{type:"text",name:"link",placeholder:"Button link"},domProps:{value:e.item.link},on:{input:function(t){t.target.composing||e.$set(e.item,"link",t.target.value)}}}),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.item.label,expression:"item.label"}],staticClass:"pLabel px-4 h-12 mt-2 w-full bg-black placeholder-gray-600 rounded border border-transparent transition-colors duration-200 focus:outline-none focus:border-gray-500 hover:border-gray-500",attrs:{type:"text",name:"label",placeholder:"Button label"},domProps:{value:e.item.label},on:{input:function(t){t.target.composing||e.$set(e.item,"label",t.target.value)}}})])]),e._v(" "),r("button",{staticClass:"p-1 m-2 flex-shrink-0 focus:outline-none rounded hover:bg-gray-600 focus:bg-gray-600 transition-colors duration-200",attrs:{"aria-label":"Remove product",title:"Remove product"},on:{click:function(t){return e.removeItem(e.i)}}},[r("div",{staticClass:"w-6 h-6",domProps:{innerHTML:e._s(n(167))}})])])}),[],!1,null,null,null);t.default=component.exports},294:function(e,t){},320:function(e,t){},321:function(e,t){},322:function(e,t){},323:function(e,t){},324:function(e,t){},335:function(e,t,n){"use strict";n.r(t);n(309),n(10),n(30);var r=n(4),o=(n(166),n(108),n(26),n(77),n(313),n(314)),l=n(315),d=n(295),c=n.n(d),f=n(184),m=n(318),v=n(325);m.GlobalWorkerOptions.workerSrc=v,m.disableWorker=!0,m.workerSrc=!1;var h={props:["featured","mimetypes","label","index","resizeImage","showAlert"],data:function(){return{dragOver:!1}},components:{ProductCard:f.default,draggable:c.a},computed:{hasContent:function(){return this.featured[this.index].content.length}},methods:{mediaType:function(e){switch(!0){case"image/jpeg"==e||"image/png"==e:return"image";case"audio/mpeg"==e:return"music";case"video/mp4"==e||"video/webm"==e:return"video";case"application/pdf"==e:return"document"}},attachMedia:function(){this.$refs.import.click()},addLink:function(){var e=this;this.featured[this.index].content.push("");var t=this.featured[this.index].content.filter((function(e){return!e.contentType}));setTimeout((function(){return e.$refs.link[t.length-1].focus()}),50)},addProduct:function(){this.featured[this.index].content.push({image:null,title:null,description:null,price:null,label:null,link:null,contentType:"product"})},addText:function(){var e=this;this.featured[this.index].content.push({contentType:"text",value:null});var t=this.featured[this.index].content.filter((function(e){return"text"==e.contentType}));setTimeout((function(){return e.$refs.text[t.length-1].focus()}),50)},fileLoaded:function(e,t){if(t&&e.dataTransfer.files.length||!t&&e.target.files.length){var n=t?e.dataTransfer.files[0]:e.target.files[0];this.dragOver=!1;var r=n.type,o=this.mediaType(r);if(n)switch(o){case"image":this.imageLoaded(n,o,r);break;case"music":this.musicLoaded(n,o);break;case"video":this.videoLoaded(n,o);break;case"document":this.documentLoaded(n,o);break;default:this.showAlert("Unsupported file format.\n\nOnly jpeg, png, mp3, mp4, webm and pdf files can be attached.")}}else this.dragOver=!1},getFileName:function(e){return e.name.replace(/(?:\.([^.]+))?$/,"")},removeItem:function(i){this.featured[this.index].content.splice(i,1)},imageLoaded:function(e,t,n){var r=this,title=this.getFileName(e),o=new FileReader;o.onload=function(o){var l=o.target.result,d=l.split(",")[0].split(":")[1].split("/")[1].match(/^\w+/g)[0];r.featured[r.index].content.push({name:e.name,title:title,dataURI:l,file:e,type:t,contentType:"media",ext:d,mime:n}),r.resizeImage(t,n,r.index,r.featured[r.index].content.length-1)},o.readAsDataURL(e)},musicLoaded:function(e,t){var n=this;this.extractTags(e,t).then((function(e){n.resizeImage(t,"image/jpeg",n.index,n.featured[n.index].content.length-1)})).catch((function(e){}))},extractTags:function(e,t){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",new Promise((function(r,d){Object(o.convertFileToBuffer)(e).then(l.parse).then((function(o){if(o)if(o.image){var l=new Blob([new Uint8Array(o.image.data)]),c=URL.createObjectURL(l);n.featured[n.index].content.push({name:e.name,cover:l,coverDataURI:c,coverExt:"jpeg",title:o.title,artist:o.artist,album:o.album,dataURI:URL.createObjectURL(e),type:t,contentType:"media",file:e,ext:"mp3"});var f=setInterval((function(){n.featured[n.index].content[n.featured[n.index].content.length-1].file&&(clearInterval(f),r(!0))}),500)}else n.featured[n.index].content.push({name:e.name,title:o.title,artist:o.artist,album:o.album,dataURI:URL.createObjectURL(e),type:t,contentType:"media",file:e,ext:"mp3",info:"No Thumb"}),d();else n.featured[n.index].content.push({name:e.name,title:n.getFileName(e),dataURI:URL.createObjectURL(e),type:t,contentType:"media",file:e,ext:"mp3",info:"No ID3 Tag"}),d()}))})));case 1:case"end":return r.stop()}}),r)})))()},videoLoaded:function(e,t){var n,r,o,title=this.getFileName(e),canvas=document.createElement("canvas"),l=canvas.getContext("2d"),video=document.createElement("video");o=80;var d=new FileReader,c=navigator.userAgent.match(/firefox|android/gi),f=this;function m(){var n=video.videoWidth,d=video.videoHeight;n>o&&(d*=o/n,n=o),d>80&&(n*=80/d,d=80),canvas.width=n,canvas.height=d,l.drawImage(video,0,0,canvas.width,canvas.height);var c=canvas.toDataURL("image/jpeg",.8);f.featured[f.index].content.push({name:e.name,coverDataURI:c,coverExt:"jpeg",dataURI:r,file:e,title:title,type:t,contentType:"media",ext:"mp4"})}c&&2==c.length?video.addEventListener("loadstart",m):video.addEventListener("seeked",m),d.onload=function(e){n=new Blob([e.target.result],{type:"video/mp4"}),r=URL.createObjectURL(n),video.src=r+"#t=0.2"},d.readAsArrayBuffer(e)},dataURIToBinary:function(e){var t=";base64,",n=e.indexOf(t)+t.length,r=e.substring(n),o=window.atob(r),l=o.length,d=new Uint8Array(new ArrayBuffer(l));for(i=0;i<l;i++)d[i]=o.charCodeAt(i);return d},formatBytes:function(a){var b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===a)return"0 Bytes";var e=0>b?0:b,t=Math.floor(Math.log(a)/Math.log(1024));return parseFloat((a/Math.pow(1024,t)).toFixed(e))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][t]},documentLoaded:function(e,t){var data,n,r,o=this,l=this.formatBytes(e.size),title=this.getFileName(e),d=new FileReader;n=r=1296,d.onload=function(d){data=o.dataURIToBinary(d.target.result),m.getDocument(data).promise.then((function(d){d.getPage(1).then((function(d){var canvas=document.createElement("canvas"),c=canvas.getContext("2d"),f=d.getViewport({scale:1}),m=f.width,v=f.height;m>n&&(v*=n/m,m=n),v>r&&(m*=r/v,v=r),canvas.width=m,canvas.height=v;var h={canvasContext:c,viewport:f};d.render(h).promise.then((function(n){var r=canvas.toDataURL("image/jpeg",.8),d=new Blob([o.dataURIToBinary(r)],{type:"image/jpeg"});o.featured[o.index].content.push({name:e.name,cover:d,coverDataURI:r,coverExt:"jpeg",file:e,filesize:l,title:title,type:t,contentType:"media",ext:"pdf"})}))}))}))},d.readAsDataURL(e)}}},x=n(45),component=Object(x.a)(h,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex flex-col w-full mt-6 bg-gray-800 rounded"},[r("div",{staticClass:"flex justify-between"},[r("div",{staticClass:"flex items-center w-full"},[r("div",{staticClass:"p-1 flex-shrink-0 focus:outline-none drag cursor-move",attrs:{tabindex:"-1"}},[r("div",{staticClass:"w-6 h-6",domProps:{innerHTML:e._s(n(172))}})])]),e._v(" "),r("button",{staticClass:"\n        p-1\n        m-2\n        flex-shrink-0\n        focus:outline-none\n        rounded\n        hover:bg-gray-700\n        focus:bg-gray-700\n        transition-colors\n        duration-200\n      ",attrs:{"aria-label":"Remove section",title:"Remove section"},on:{click:function(t){return e.featured.splice(e.index,1)}}},[r("div",{staticClass:"w-6 h-6",domProps:{innerHTML:e._s(n(167))}})])]),e._v(" "),r("draggable",{staticClass:"mt-4",attrs:{group:"featured",list:e.featured[e.index].content,handle:".drag",animation:"1",ghostClass:"ghost"}},[r("transition-group",{attrs:{name:"list"}},e._l(e.featured[e.index].content,(function(t,i){return r("div",{key:"item"+i},["media"==t.contentType?r("div",{staticClass:"flex items-center mt-2"},[r("button",{staticClass:"p-1 flex-shrink-0 focus:outline-none drag cursor-move",attrs:{tabindex:"-1"}},[r("div",{staticClass:"w-6 h-6",domProps:{innerHTML:e._s(n(172))}})]),e._v(" "),("image"==t.type?t.dataURI:t.coverDataURI&&t.coverDataURI)?r("img",{staticClass:"w-12 h-12 rounded mr-3 object-contain flex-shrink-0",attrs:{src:"image"==t.type?t.dataURI:t.coverDataURI,alt:t.title}}):r("a",{staticClass:"\n              w-12\n              h-12\n              mr-3\n              bg-gray-900\n              flex\n              items-center\n              justify-center\n              text-center text-xs\n              rounded\n              flex-shrink-0\n              leading-none\n              select-none\n              cursor-pointer\n            ",attrs:{target:"_blank",href:"https://duckduckgo.com/?q=Add+ID3+tags+to+mp3+file"}},[e._v("\n            "+e._s(t.info)+"\n          ")]),e._v(" "),r("p",{staticClass:"w-full leading-none whitespace-pre overflow-x-hidden"},[e._v(e._s(t.name))]),e._v(" "),r("button",{staticClass:"\n              p-1\n              m-2\n              self-end\n              flex-shrink-0\n              focus:outline-none\n              rounded\n              hover:bg-gray-700\n              focus:bg-gray-700\n              transition-colors\n              duration-200\n            ",attrs:{"aria-label":"Remove media",title:"Remove media"},on:{click:function(t){return e.removeItem(i)}}},[r("div",{staticClass:"w-6 h-6",domProps:{innerHTML:e._s(n(167))}})])]):"product"==t.contentType?r("ProductCard",{attrs:{featured:e.featured,item:t,index:e.index,i:i,resizeImage:e.resizeImage,showAlert:e.showAlert}}):"text"==t.contentType?r("div",{staticClass:"flex items-center mt-2"},[r("button",{staticClass:"p-1 flex-shrink-0 focus:outline-none drag cursor-move",attrs:{tabindex:"-1"}},[r("div",{staticClass:"w-6 h-6",domProps:{innerHTML:e._s(n(172))}})]),e._v(" "),r("div",{staticClass:"w-full"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.featured[e.index].content[i].value,expression:"featured[index].content[i].value"}],ref:"text",refInFor:!0,staticClass:"\n                block\n                px-4\n                py-3\n                w-full\n                bg-black\n                rounded\n                border border-transparent\n                placeholder-gray-600\n                transition-colors\n                duration-200\n                focus:outline-none\n                focus:border-gray-500\n                resize-none\n                hover:border-gray-500\n              ",attrs:{"aria-label":"Type text content here",title:"Type text content here",placeholder:"Type text content here",rows:"5"},domProps:{value:e.featured[e.index].content[i].value},on:{input:function(t){t.target.composing||e.$set(e.featured[e.index].content[i],"value",t.target.value)}}})]),e._v(" "),r("button",{staticClass:"\n              p-1\n              m-2\n              flex-shrink-0\n              focus:outline-none\n              rounded\n              hover:bg-gray-700\n              focus:bg-gray-700\n              transition-colors\n              duration-200\n            ",attrs:{"aria-label":"Remove text",title:"Remove text"},on:{click:function(t){return e.removeItem(i)}}},[r("div",{staticClass:"w-6 h-6",domProps:{innerHTML:e._s(n(167))}})])]):r("div",{staticClass:"flex items-center mt-2"},[r("button",{staticClass:"p-1 flex-shrink-0 focus:outline-none drag cursor-move",attrs:{tabindex:"-1"}},[r("div",{staticClass:"w-6 h-6",domProps:{innerHTML:e._s(n(172))}})]),e._v(" "),r("div",{staticClass:"w-full"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.featured[e.index].content[i],expression:"featured[index].content[i]"}],ref:"link",refInFor:!0,staticClass:"\n                px-4\n                w-full\n                h-12\n                bg-black\n                placeholder-gray-600\n                rounded\n                border border-transparent\n                transition-colors\n                duration-200\n                focus:outline-none\n                focus:border-gray-500\n                hover:border-gray-500\n              ",attrs:{type:"text","aria-label":"Paste HTML embed code here",title:"Paste HTML embed code here",placeholder:"Paste HTML embed code here"},domProps:{value:e.featured[e.index].content[i]},on:{input:function(t){t.target.composing||e.$set(e.featured[e.index].content,i,t.target.value)}}})]),e._v(" "),r("button",{staticClass:"\n              p-1\n              m-2\n              flex-shrink-0\n              focus:outline-none\n              rounded\n              hover:bg-gray-700\n              focus:bg-gray-700\n              transition-colors\n              duration-200\n            ",attrs:{"aria-label":"Remove field",title:"Remove field"},on:{click:function(t){return e.removeItem(i)}}},[r("div",{staticClass:"w-6 h-6",domProps:{innerHTML:e._s(n(167))}})])])],1)})),0)],1),e._v(" "),r("div",{staticClass:"grid grid-flow-row sm:grid-cols-2 gap-2 w-full p-2",class:{"mt-4":e.hasContent}},[r("button",{staticClass:"\n        flex\n        sm:flex-col\n        items-center\n        p-3\n        rounded\n        cursor-pointer\n        bg-gray-700\n        hover:bg-gray-600\n        focus:bg-gray-600\n        transition-colors\n        duration-200\n        focus:outline-none\n      ",class:e.dragOver?"bg-gray-900 outline-white":"bg-gray-700 border-none",attrs:{"aria-label":"Attach media"},on:{click:function(t){return e.attachMedia()},drop:function(t){return t.preventDefault(),e.fileLoaded(t,!0)},dragleave:function(t){if(t.preventDefault(),t.target!==t.currentTarget)return null;e.dragOver=!1},dragover:function(t){if(t.preventDefault(),t.target!==t.currentTarget)return null;e.dragOver=!0}}},[r("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"import",attrs:{type:"file",accept:e.mimetypes},on:{change:function(t){return e.fileLoaded(t,!1)},click:function(e){e.target.files=null}}}),e._v(" "),r("div",{staticClass:"w-6 h-6 mr-2 sm:mr-0 pointer-events-none",domProps:{innerHTML:e._s(n(181))}}),e._v(" "),r("p",{staticClass:"sm:mt-2 leading-none pointer-events-none"},[e._v("Attach media")])]),e._v(" "),r("button",{staticClass:"\n        flex\n        sm:flex-col\n        items-center\n        p-3\n        rounded\n        cursor-pointer\n        bg-gray-700\n        hover:bg-gray-600\n        focus:bg-gray-600\n        transition-colors\n        duration-200\n        focus:outline-none\n      ",attrs:{"aria-label":"Add text"},on:{click:function(t){return e.addText()}}},[r("div",{staticClass:"w-6 h-6 mr-2 sm:mr-0",domProps:{innerHTML:e._s(n(182))}}),e._v(" "),r("p",{staticClass:"sm:mt-2 leading-none"},[e._v("Add text")])]),e._v(" "),r("button",{staticClass:"\n        flex\n        sm:flex-col\n        items-center\n        p-3\n        rounded\n        cursor-pointer\n        bg-gray-700\n        hover:bg-gray-600\n        focus:bg-gray-600\n        transition-colors\n        duration-200\n        focus:outline-none\n      ",attrs:{"aria-label":"Embed Code"},on:{click:function(t){return e.addLink()}}},[r("div",{staticClass:"w-6 h-6 mr-2 sm:mr-0",domProps:{innerHTML:e._s(n(180))}}),e._v(" "),r("p",{staticClass:"sm:mt-2 leading-none"},[e._v("Embed Code")])]),e._v(" "),r("button",{staticClass:"\n        flex\n        sm:flex-col\n        items-center\n        p-3\n        rounded\n        cursor-pointer\n        bg-gray-700\n        hover:bg-gray-600\n        focus:bg-gray-600\n        transition-colors\n        duration-200\n        focus:outline-none\n      ",attrs:{"aria-label":"Add product"},on:{click:function(t){return e.addProduct()}}},[r("div",{staticClass:"w-6 h-6 mr-2 sm:mr-0",domProps:{innerHTML:e._s(n(179))}}),e._v(" "),r("p",{staticClass:"sm:mt-2 leading-none"},[e._v("Add product")])])])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ProductCard:n(184).default})}}]);