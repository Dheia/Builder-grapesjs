class p{_manager;getKey(){return""}manager(g){this._manager=g}getManager(){return this._manager}register(){}booting(){}booted(){}dispose(){}}class u extends p{getKey(){return"BYTE_LIVEWIRE_GRAPESJS_MODULE"}booting(){if(window.Livewire){let a=this.getManager();window.Livewire.directive("grapesjs",({el:e,directive:_,component:s})=>{if(_.modifiers.length>0||e.livewire____grapesjs)return;let t={};e.hasAttribute("wire:grapesjs.options")&&(t=new Function(`return ${e.getAttribute("wire:grapesjs.options")};`)());const n=t.pluginManager??[];t?.pluginManager&&(t={...t,pluginManager:void 0});const o=()=>{e.livewire____grapesjs||(e.livewire____grapesjs=grapesjs.init({container:e,storageManager:!1,style:a.dataGet(s.$wire,"form.css"),components:a.dataGet(s.$wire,"form.content"),...t,plugins:n.map(function(r){return r.name}),pluginsOpts:n.reduce(function(r,i){return r[i.name]=i.options??{},r},{}),pages:!1}),e.livewire____grapesjs.Commands.add("byte-builder-save-data",{run:async function(r,i){i&&i.set("active",0),a.dataSet(s.$wire,"form.css",e.livewire____grapesjs.getCss()),a.dataSet(s.$wire,"form.conent",e.livewire____grapesjs.getHtml()),a.dataSet(s.$wire,"form.js",e.livewire____grapesjs.getJs()),s.$wire.doSaveBuilder()}}),e.livewire____grapesjs.on("load",function(){}),e.livewire____grapesjs.on("stop:preview",()=>{console.log("byte-builder-preview2"),e.closest(".byte-builder-manager").classList.remove("byte-builder-preview")}),e.livewire____grapesjs.on("run:preview",()=>{console.log("byte-builder-preview1"),e.closest(".byte-builder-manager").classList.add("byte-builder-preview")}))};window.grapesjs?o():(window.ByteLoadStyle("https://cdn.jsdelivr.net/npm/grapesjs@0.21.6/dist/css/grapes.min.css",...n.reduce(function(r,i){return[...r,...i.css??[]]},[])),window.ByteLoadScript(["https://cdn.jsdelivr.net/npm/grapesjs@0.21.6/dist/grapes.min.js",...n.reduce(function(r,i){return[...r,...i.js??[]]},[])]).then(function(){o()}))})}}}window.addEventListener("byte::register",function(){ByteManager.registerPlugin(u)});