import{A as ce,Aa as be,Ba as ve,Da as y,E as de,F as c,Fa as I,G as he,H as j,Ia as ye,K as S,Ka as Z,L as U,M as ue,O as l,Q as R,R as K,Ra as De,T as z,Ua as B,Wa as L,Y as k,Z as Q,Za as Se,_ as W,a as H,ab as we,b as se,ba as b,ca as J,da as pe,g as oe,h as u,ha as A,ja as Y,k as ae,ka as _e,la as F,ma as q,na as N,o as V,pa as p,q as $,qa as m,s as g,t as re,v as M,va as E,w as le,wa as x,x as P,xa as fe,ya as ge,z as C,za as me}from"./chunk-TI73ILXT.js";var Ie=["*"];var Pe=["dialog"];var Oe={animation:!0,transitionTimerDelayMs:5},ke=(()=>{let t=class t{constructor(){this.animation=Oe.animation}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"});let s=t;return s})();function Ae(s){let{transitionDelay:t,transitionDuration:o}=window.getComputedStyle(s),e=parseFloat(t),n=parseFloat(o);return(e+n)*1e3}function Me(s){return typeof s=="string"}function X(s){return s!=null}function Fe(s){return s&&s.then}function Ce(s){return(s||document.body).getBoundingClientRect()}function Ne(s){return t=>new oe(o=>{let e=a=>s.run(()=>o.next(a)),n=a=>s.run(()=>o.error(a)),i=()=>s.run(()=>o.complete());return t.subscribe({next:e,error:n,complete:i})})}var xe=()=>{},{transitionTimerDelayMs:Be}=Oe,G=new Map,D=(s,t,o,e)=>{let n=e.context||{},i=G.get(t);if(i)switch(e.runningTransition){case"continue":return ae;case"stop":s.run(()=>i.transition$.complete()),n=Object.assign(i.context,n),G.delete(t)}let a=o(t,e.animation,n)||xe;if(!e.animation||window.getComputedStyle(t).transitionProperty==="none")return s.run(()=>a()),V(void 0).pipe(Ne(s));let r=new u,d=new u,h=r.pipe(ce(!0));G.set(t,{transition$:r,complete:()=>{d.next(),d.complete()},context:n});let _=Ae(t);return s.runOutsideAngular(()=>{let O=g(t,"transitionend").pipe(c(h),M(({target:v})=>v===t)),f=re(_+Be).pipe(c(h));le(f,O,d).pipe(c(h)).subscribe(()=>{G.delete(t),s.run(()=>{a(),r.next(),r.complete()})})}),r.asObservable()};var ie=function(s){return s[s.Tab=9]="Tab",s[s.Enter=13]="Enter",s[s.Escape=27]="Escape",s[s.Space=32]="Space",s[s.PageUp=33]="PageUp",s[s.PageDown=34]="PageDown",s[s.End=35]="End",s[s.Home=36]="Home",s[s.ArrowLeft=37]="ArrowLeft",s[s.ArrowUp=38]="ArrowUp",s[s.ArrowRight=39]="ArrowRight",s[s.ArrowDown=40]="ArrowDown",s}(ie||{});var vi=(()=>{let s=()=>/iPad|iPhone|iPod/.test(navigator.userAgent)||/Macintosh/.test(navigator.userAgent)&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2,t=()=>/Android/.test(navigator.userAgent);return typeof navigator<"u"?!!navigator.userAgent&&(s()||t()):!1})();var Le=["a[href]","button:not([disabled])",'input:not([disabled]):not([type="hidden"])',"select:not([disabled])","textarea:not([disabled])","[contenteditable]",'[tabindex]:not([tabindex="-1"])'].join(", ");function Re(s){let t=Array.from(s.querySelectorAll(Le)).filter(o=>o.tabIndex!==-1);return[t[0],t[t.length-1]]}var Ge=(s,t,o,e=!1)=>{s.runOutsideAngular(()=>{let n=g(t,"focusin").pipe(c(o),$(i=>i.target));g(t,"keydown").pipe(c(o),M(i=>i.which===ie.Tab),j(n)).subscribe(([i,a])=>{let[r,d]=Re(t);(a===r||a===t)&&i.shiftKey&&(d.focus(),i.preventDefault()),a===d&&!i.shiftKey&&(r.focus(),i.preventDefault())}),e&&g(t,"click").pipe(c(o),j(n),$(i=>i[1])).subscribe(i=>i.focus())})};var yi=new Date(1882,10,12),Di=new Date(2174,10,25);var Si=1e3*60*60*24;var ne=1080,He=24*ne,Ve=12*ne+793,wi=29*He+Ve,Ti=11*ne+204;var $e=(()=>{let t=class t{constructor(){this._ngbConfig=l(ke),this.backdrop=!0,this.fullscreen=!1,this.keyboard=!0}get animation(){return this._animation??this._ngbConfig.animation}set animation(e){this._animation=e}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"});let s=t;return s})(),w=class{constructor(t,o,e){this.nodes=t,this.viewRef=o,this.componentRef=e}};var je=(()=>{let t=class t{constructor(){this._document=l(L)}hide(){let e=Math.abs(window.innerWidth-this._document.documentElement.clientWidth),n=this._document.body,i=n.style,{overflow:a,paddingRight:r}=i;if(e>0){let d=parseFloat(window.getComputedStyle(n).paddingRight);i.paddingRight=`${d+e}px`}return i.overflow="hidden",()=>{e>0&&(i.paddingRight=r),i.overflow=a}}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"});let s=t;return s})(),Ue=(()=>{let t=class t{constructor(){this._nativeElement=l(Q).nativeElement,this._zone=l(A)}ngOnInit(){this._zone.onStable.asObservable().pipe(C(1)).subscribe(()=>{D(this._zone,this._nativeElement,(e,n)=>{n&&Ce(e),e.classList.add("show")},{animation:this.animation,runningTransition:"continue"})})}hide(){return D(this._zone,this._nativeElement,({classList:e})=>e.remove("show"),{animation:this.animation,runningTransition:"stop"})}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=R({type:t,selectors:[["ngb-modal-backdrop"]],hostAttrs:[2,"z-index","1055"],hostVars:6,hostBindings:function(n,i){n&2&&(N("modal-backdrop"+(i.backdropClass?" "+i.backdropClass:"")),q("show",!i.animation)("fade",i.animation))},inputs:{animation:"animation",backdropClass:"backdropClass"},standalone:!0,features:[Z],decls:0,vars:0,template:function(n,i){},encapsulation:2});let s=t;return s})(),T=class{update(t){}close(t){}dismiss(t){}},Ke=["animation","ariaLabelledBy","ariaDescribedBy","backdrop","centered","fullscreen","keyboard","scrollable","size","windowClass","modalDialogClass"],ze=["animation","backdropClass"],ee=class{_applyWindowOptions(t,o){Ke.forEach(e=>{X(o[e])&&(t[e]=o[e])})}_applyBackdropOptions(t,o){ze.forEach(e=>{X(o[e])&&(t[e]=o[e])})}update(t){this._applyWindowOptions(this._windowCmptRef.instance,t),this._backdropCmptRef&&this._backdropCmptRef.instance&&this._applyBackdropOptions(this._backdropCmptRef.instance,t)}get componentInstance(){if(this._contentRef&&this._contentRef.componentRef)return this._contentRef.componentRef.instance}get closed(){return this._closed.asObservable().pipe(c(this._hidden))}get dismissed(){return this._dismissed.asObservable().pipe(c(this._hidden))}get hidden(){return this._hidden.asObservable()}get shown(){return this._windowCmptRef.instance.shown.asObservable()}constructor(t,o,e,n){this._windowCmptRef=t,this._contentRef=o,this._backdropCmptRef=e,this._beforeDismiss=n,this._closed=new u,this._dismissed=new u,this._hidden=new u,t.instance.dismissEvent.subscribe(i=>{this.dismiss(i)}),this.result=new Promise((i,a)=>{this._resolve=i,this._reject=a}),this.result.then(null,()=>{})}close(t){this._windowCmptRef&&(this._closed.next(t),this._resolve(t),this._removeModalElements())}_dismiss(t){this._dismissed.next(t),this._reject(t),this._removeModalElements()}dismiss(t){if(this._windowCmptRef)if(!this._beforeDismiss)this._dismiss(t);else{let o=this._beforeDismiss();Fe(o)?o.then(e=>{e!==!1&&this._dismiss(t)},()=>{}):o!==!1&&this._dismiss(t)}}_removeModalElements(){let t=this._windowCmptRef.instance.hide(),o=this._backdropCmptRef?this._backdropCmptRef.instance.hide():V(void 0);t.subscribe(()=>{let{nativeElement:e}=this._windowCmptRef.location;e.parentNode.removeChild(e),this._windowCmptRef.destroy(),this._contentRef&&this._contentRef.viewRef&&this._contentRef.viewRef.destroy(),this._windowCmptRef=null,this._contentRef=null}),o.subscribe(()=>{if(this._backdropCmptRef){let{nativeElement:e}=this._backdropCmptRef.location;e.parentNode.removeChild(e),this._backdropCmptRef.destroy(),this._backdropCmptRef=null}}),P(t,o).subscribe(()=>{this._hidden.next(),this._hidden.complete()})}},te=function(s){return s[s.BACKDROP_CLICK=0]="BACKDROP_CLICK",s[s.ESC=1]="ESC",s}(te||{}),Qe=(()=>{let t=class t{constructor(){this._document=l(L),this._elRef=l(Q),this._zone=l(A),this._closed$=new u,this._elWithFocus=null,this.backdrop=!0,this.keyboard=!0,this.dismissEvent=new W,this.shown=new u,this.hidden=new u}get fullscreenClass(){return this.fullscreen===!0?" modal-fullscreen":Me(this.fullscreen)?` modal-fullscreen-${this.fullscreen}-down`:""}dismiss(e){this.dismissEvent.emit(e)}ngOnInit(){this._elWithFocus=this._document.activeElement,this._zone.onStable.asObservable().pipe(C(1)).subscribe(()=>{this._show()})}ngOnDestroy(){this._disableEventHandling()}hide(){let{nativeElement:e}=this._elRef,n={animation:this.animation,runningTransition:"stop"},i=D(this._zone,e,()=>e.classList.remove("show"),n),a=D(this._zone,this._dialogEl.nativeElement,()=>{},n),r=P(i,a);return r.subscribe(()=>{this.hidden.next(),this.hidden.complete()}),this._disableEventHandling(),this._restoreFocus(),r}_show(){let e={animation:this.animation,runningTransition:"continue"},n=D(this._zone,this._elRef.nativeElement,(a,r)=>{r&&Ce(a),a.classList.add("show")},e),i=D(this._zone,this._dialogEl.nativeElement,()=>{},e);P(n,i).subscribe(()=>{this.shown.next(),this.shown.complete()}),this._enableEventHandling(),this._setFocus()}_enableEventHandling(){let{nativeElement:e}=this._elRef;this._zone.runOutsideAngular(()=>{g(e,"keydown").pipe(c(this._closed$),M(i=>i.which===ie.Escape)).subscribe(i=>{this.keyboard?requestAnimationFrame(()=>{i.defaultPrevented||this._zone.run(()=>this.dismiss(te.ESC))}):this.backdrop==="static"&&this._bumpBackdrop()});let n=!1;g(this._dialogEl.nativeElement,"mousedown").pipe(c(this._closed$),he(()=>n=!1),de(()=>g(e,"mouseup").pipe(c(this._closed$),C(1))),M(({target:i})=>e===i)).subscribe(()=>{n=!0}),g(e,"click").pipe(c(this._closed$)).subscribe(({target:i})=>{e===i&&(this.backdrop==="static"?this._bumpBackdrop():this.backdrop===!0&&!n&&this._zone.run(()=>this.dismiss(te.BACKDROP_CLICK))),n=!1})})}_disableEventHandling(){this._closed$.next()}_setFocus(){let{nativeElement:e}=this._elRef;if(!e.contains(document.activeElement)){let n=e.querySelector("[ngbAutofocus]"),i=Re(e)[0];(n||i||e).focus()}}_restoreFocus(){let e=this._document.body,n=this._elWithFocus,i;n&&n.focus&&e.contains(n)?i=n:i=e,this._zone.runOutsideAngular(()=>{setTimeout(()=>i.focus()),this._elWithFocus=null})}_bumpBackdrop(){this.backdrop==="static"&&D(this._zone,this._elRef.nativeElement,({classList:e})=>(e.add("modal-static"),()=>e.remove("modal-static")),{animation:this.animation,runningTransition:"continue"})}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=R({type:t,selectors:[["ngb-modal-window"]],viewQuery:function(n,i){if(n&1&&me(Pe,7),n&2){let a;be(a=ve())&&(i._dialogEl=a.first)}},hostAttrs:["role","dialog","tabindex","-1"],hostVars:7,hostBindings:function(n,i){n&2&&(_e("aria-modal",!0)("aria-labelledby",i.ariaLabelledBy)("aria-describedby",i.ariaDescribedBy),N("modal d-block"+(i.windowClass?" "+i.windowClass:"")),q("fade",i.animation))},inputs:{animation:"animation",ariaLabelledBy:"ariaLabelledBy",ariaDescribedBy:"ariaDescribedBy",backdrop:"backdrop",centered:"centered",fullscreen:"fullscreen",keyboard:"keyboard",scrollable:"scrollable",size:"size",windowClass:"windowClass",modalDialogClass:"modalDialogClass"},outputs:{dismissEvent:"dismiss"},standalone:!0,features:[Z],ngContentSelectors:Ie,decls:4,vars:2,consts:[["dialog",""],["role","document"],[1,"modal-content"]],template:function(n,i){n&1&&(fe(),p(0,"div",1,0)(2,"div",2),ge(3),m()()),n&2&&N("modal-dialog"+(i.size?" modal-"+i.size:"")+(i.centered?" modal-dialog-centered":"")+i.fullscreenClass+(i.scrollable?" modal-dialog-scrollable":"")+(i.modalDialogClass?" "+i.modalDialogClass:""))},styles:[`ngb-modal-window .component-host-scrollable{display:flex;flex-direction:column;overflow:hidden}
`],encapsulation:2});let s=t;return s})(),We=(()=>{let t=class t{constructor(){this._applicationRef=l(De),this._injector=l(k),this._environmentInjector=l(z),this._document=l(L),this._scrollBar=l(je),this._activeWindowCmptHasChanged=new u,this._ariaHiddenValues=new Map,this._scrollBarRestoreFn=null,this._modalRefs=[],this._windowCmpts=[],this._activeInstances=new W;let e=l(A);this._activeWindowCmptHasChanged.subscribe(()=>{if(this._windowCmpts.length){let n=this._windowCmpts[this._windowCmpts.length-1];Ge(e,n.location.nativeElement,this._activeWindowCmptHasChanged),this._revertAriaHidden(),this._setAriaHidden(n.location.nativeElement)}})}_restoreScrollBar(){let e=this._scrollBarRestoreFn;e&&(this._scrollBarRestoreFn=null,e())}_hideScrollBar(){this._scrollBarRestoreFn||(this._scrollBarRestoreFn=this._scrollBar.hide())}open(e,n,i){let a=i.container instanceof HTMLElement?i.container:X(i.container)?this._document.querySelector(i.container):this._document.body;if(!a)throw new Error(`The specified modal container "${i.container||"body"}" was not found in the DOM.`);this._hideScrollBar();let r=new T;e=i.injector||e;let d=e.get(z,null)||this._environmentInjector,h=this._getContentRef(e,d,n,r,i),_=i.backdrop!==!1?this._attachBackdrop(a):void 0,O=this._attachWindowComponent(a,h.nodes),f=new ee(O,h,_,i.beforeDismiss);return this._registerModalRef(f),this._registerWindowCmpt(O),f.hidden.pipe(C(1)).subscribe(()=>Promise.resolve(!0).then(()=>{this._modalRefs.length||(this._document.body.classList.remove("modal-open"),this._restoreScrollBar(),this._revertAriaHidden())})),r.close=v=>{f.close(v)},r.dismiss=v=>{f.dismiss(v)},r.update=v=>{f.update(v)},f.update(i),this._modalRefs.length===1&&this._document.body.classList.add("modal-open"),_&&_.instance&&_.changeDetectorRef.detectChanges(),O.changeDetectorRef.detectChanges(),f}get activeInstances(){return this._activeInstances}dismissAll(e){this._modalRefs.forEach(n=>n.dismiss(e))}hasOpenModals(){return this._modalRefs.length>0}_attachBackdrop(e){let n=B(Ue,{environmentInjector:this._applicationRef.injector,elementInjector:this._injector});return this._applicationRef.attachView(n.hostView),e.appendChild(n.location.nativeElement),n}_attachWindowComponent(e,n){let i=B(Qe,{environmentInjector:this._applicationRef.injector,elementInjector:this._injector,projectableNodes:n});return this._applicationRef.attachView(i.hostView),e.appendChild(i.location.nativeElement),i}_getContentRef(e,n,i,a,r){return i?i instanceof pe?this._createFromTemplateRef(i,a):Me(i)?this._createFromString(i):this._createFromComponent(e,n,i,a,r):new w([])}_createFromTemplateRef(e,n){let i={$implicit:n,close(r){n.close(r)},dismiss(r){n.dismiss(r)}},a=e.createEmbeddedView(i);return this._applicationRef.attachView(a),new w([a.rootNodes],a)}_createFromString(e){let n=this._document.createTextNode(`${e}`);return new w([[n]])}_createFromComponent(e,n,i,a,r){let d=k.create({providers:[{provide:T,useValue:a}],parent:e}),h=B(i,{environmentInjector:n,elementInjector:d}),_=h.location.nativeElement;return r.scrollable&&_.classList.add("component-host-scrollable"),this._applicationRef.attachView(h.hostView),new w([[_]],h.hostView,h)}_setAriaHidden(e){let n=e.parentElement;n&&e!==this._document.body&&(Array.from(n.children).forEach(i=>{i!==e&&i.nodeName!=="SCRIPT"&&(this._ariaHiddenValues.set(i,i.getAttribute("aria-hidden")),i.setAttribute("aria-hidden","true"))}),this._setAriaHidden(n))}_revertAriaHidden(){this._ariaHiddenValues.forEach((e,n)=>{e?n.setAttribute("aria-hidden",e):n.removeAttribute("aria-hidden")}),this._ariaHiddenValues.clear()}_registerModalRef(e){let n=()=>{let i=this._modalRefs.indexOf(e);i>-1&&(this._modalRefs.splice(i,1),this._activeInstances.emit(this._modalRefs))};this._modalRefs.push(e),this._activeInstances.emit(this._modalRefs),e.result.then(n,n)}_registerWindowCmpt(e){this._windowCmpts.push(e),this._activeWindowCmptHasChanged.next(),e.onDestroy(()=>{let n=this._windowCmpts.indexOf(e);n>-1&&(this._windowCmpts.splice(n,1),this._activeWindowCmptHasChanged.next())})}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"});let s=t;return s})(),Oi=(()=>{let t=class t{constructor(){this._injector=l(k),this._modalStack=l(We),this._config=l($e)}open(e,n={}){let i=H(se(H({},this._config),{animation:this._config.animation}),n);return this._modalStack.open(this._injector,e,i)}get activeInstances(){return this._modalStack.activeInstances}dismissAll(e){this._modalStack.dismissAll(e)}hasOpenModals(){return this._modalStack.hasOpenModals()}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=S({token:t,factory:t.\u0275fac,providedIn:"root"});let s=t;return s})();var Mi=new ue("live announcer delay",{providedIn:"root",factory:()=>100});function Ye(s,t){if(s&1&&(p(0,"div",9),y(1),m()),s&2){let o=x();b(),ye(" \xBFEst\xE1s seguro de que quieres borrar ",o.message," ",o.client==null?null:o.client.name," ",o.client==null?null:o.client.firstLastName," ",o.client==null?null:o.client.secondLastName,"? ")}}function qe(s,t){if(s&1&&(p(0,"div",9),y(1),m()),s&2){let o=x();b(),I(" \xBFEst\xE1s seguro de que quieres borrar ",o.message,"? ")}}var Ei=(()=>{let t=class t{constructor(e){this.activeModal=e,this.message="",this.text=""}};t.\u0275fac=function(n){return new(n||t)(J(T))},t.\u0275cmp=R({type:t,selectors:[["app-delete-modal"]],decls:13,vars:4,consts:[[1,"modal-container"],[1,"modal-header"],["id","exampleModalLabel",1,"modal-title","fs-5"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close",3,"click"],[1,"content"],["class","modal-body",4,"ngIf"],[1,"modal-footer"],["type","button",1,"btn","btn-secondary",3,"click"],["type","button",1,"btn","btn-danger",3,"click"],[1,"modal-body"]],template:function(n,i){n&1&&(p(0,"div",0)(1,"div",1)(2,"h1",2),y(3),m(),p(4,"button",3),E("click",function(){return i.activeModal.close()}),m()(),p(5,"div",4),Y(6,Ye,2,4,"div",5)(7,qe,2,1,"div",5),p(8,"div",6)(9,"button",7),E("click",function(){return i.activeModal.close()}),y(10,"Cerrar"),m(),p(11,"button",8),E("click",function(){return i.activeModal.close(!0)}),y(12),m()()()()),n&2&&(b(3),I("Borrar ",i.text,""),b(3),F("ngIf",i.client),b(),F("ngIf",!i.client),b(5),I("Eliminar ",i.text,""))},dependencies:[Se]});let s=t;return s})();var Fi=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=K({type:t}),t.\u0275inj=U({imports:[we]});let s=t;return s})();export{T as a,Oi as b,Ei as c,Fi as d};
