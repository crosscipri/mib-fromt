import{a as te,b as Pe,c as Ee,d as Oe}from"./chunk-T6WXBXCR.js";import{a as ee}from"./chunk-JXNFZ6DQ.js";import{a as B}from"./chunk-A7753KZ7.js";import{a as L}from"./chunk-6W6ZYXC2.js";import{a as Re,b as k,c as F,d as T,e as A,f as Fe,g as we,h as j,j as V,k as $,l as De,m as Se,n as Ie,p as z,r as w}from"./chunk-H6VHFWHS.js";import"./chunk-5XHJ4X6E.js";import{$a as ye,C as I,Ca as Y,D as de,Da as c,E as pe,Fa as M,G as _e,Ha as he,L as v,La as C,Ma as O,Na as G,Oa as Ce,Pa as J,Q as x,R as y,Sa as ve,V as P,W as E,Xa as N,Ya as K,Za as b,_ as re,_a as U,a as ie,ab as R,b as ne,ba as m,c as ce,ca as _,d as H,e as ae,f as me,fb as Z,ja as f,jb as xe,k as Q,kb as Me,la as d,lb as be,mb as q,oa as fe,pa as o,q as oe,qa as a,ra as u,sa as ue,ta as ge,ua as X,va as h,wa as g,y as W}from"./chunk-TI73ILXT.js";var Te=e=>({"is-invalid":e});function Xe(e,t){if(e&1&&(o(0,"option",23),c(1),a()),e&2){let l=t.$implicit;d("value",l.id),m(),M("",l.name," ")}}function Ye(e,t){e&1&&(o(0,"div",24),c(1," La tarifa es obligatoria "),a())}function Je(e,t){if(e&1&&(ue(0),o(1,"div",7)(2,"label",19),c(3,"Tarifa"),a(),o(4,"select",20)(5,"option",21),c(6,"Selecciona una tarifa"),a(),f(7,Xe,2,2,"option",22),a(),f(8,Ye,2,0,"div",10),a(),ge()),e&2){let l,s,i=t.ngIf,n=g();m(4),d("ngClass",C(3,Te,(n.assignRateForm==null||(l=n.assignRateForm.get("rateId"))==null?null:l.invalid)&&(n.assignRateForm==null||(l=n.assignRateForm.get("rateId"))==null?null:l.touched))),m(3),d("ngForOf",i.data),m(),d("ngIf",(n.assignRateForm==null||(s=n.assignRateForm.get("trainer"))==null?null:s.invalid)&&(n.assignRateForm==null||(s=n.assignRateForm.get("trainer"))==null?null:s.touched))}}function Ke(e,t){e&1&&(o(0,"div",24),c(1," Fecha de inicio obligatoria "),a())}var Ae=(()=>{let t=class t{constructor(s,i,n,r){this.fb=s,this.ratesService=i,this.clientsService=n,this.activeModal=r,this.rates$=this.ratesService.getRates(),this.assignRateForm=this.fb.group({rateId:[null,F.required],startDate:[null,F.required],paid:[null],paymentDate:[null]})}onSubmit(){if(this.assignRateForm.invalid){this.assignRateForm.markAllAsTouched();return}this.assingRate()}assingRate(){this.clientsService.assignRateToClient(this.clientId,this.assignRateForm.value).pipe(I(),W(()=>(this.activeModal.dismiss(!1),Q))).subscribe(s=>{this.activeModal.dismiss(s)})}};t.\u0275fac=function(i){return new(i||t)(_(z),_(ee),_(L),_(te))},t.\u0275cmp=x({type:t,selectors:[["app-assign-rate-modal"]],decls:27,vars:8,consts:[[1,"modal-container"],[1,"title"],["id","exampleModalLabel",1,"modal-title","fs-5"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close",3,"click"],[1,"content"],[3,"formGroup"],[4,"ngIf"],[1,"col-12","mb-3"],["for","startDate",1,"form-label","asterisk"],["type","date","id","startDate","formControlName","startDate",1,"form-control",3,"ngClass"],["class","text-danger",4,"ngIf"],[1,"col-12","mb-3","form-check"],["type","checkbox","id","paid","formControlName","paid",1,"form-check-input"],["for","paid",1,"form-check-label"],["for","paymentDate",1,"form-label"],["type","date","id","paymentDate","formControlName","paymentDate",1,"form-control"],[1,"modal-footer"],["type","button",1,"btn","btn-secondary",3,"click"],["type","button",1,"btn","btn-primary",3,"click"],["for","rateId",1,"form-label","asterisk"],["id","rateId","formControlName","rateId",1,"form-select",3,"ngClass"],["value","","selected",""],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[1,"text-danger"]],template:function(i,n){if(i&1&&(o(0,"div",0)(1,"div",1)(2,"h1",2),c(3,"Asignar tarifa"),a(),o(4,"button",3),h("click",function(){return n.activeModal.close()}),a()(),o(5,"div",4)(6,"form",5),f(7,Je,9,5,"ng-container",6),O(8,"async"),o(9,"div",7)(10,"label",8),c(11,"Fecha de inicio"),a(),u(12,"input",9),f(13,Ke,2,0,"div",10),a(),o(14,"div",11),u(15,"input",12),o(16,"label",13),c(17,"Pagado"),a()(),o(18,"div",7)(19,"label",14),c(20,"Fecha de pago"),a(),u(21,"input",15),a()(),o(22,"div",16)(23,"button",17),h("click",function(){return n.activeModal.close()}),c(24,"Cerrar"),a(),o(25,"button",18),h("click",function(){return n.onSubmit()}),c(26,"Asignar tarifa"),a()()()()),i&2){let r,p;m(6),d("formGroup",n.assignRateForm),m(),d("ngIf",G(8,4,n.rates$)),m(5),d("ngClass",C(6,Te,(n.assignRateForm==null||(r=n.assignRateForm.get("startDate"))==null?null:r.invalid)&&(n.assignRateForm==null||(r=n.assignRateForm.get("startDate"))==null?null:r.touched))),m(),d("ngIf",(n.assignRateForm==null||(p=n.assignRateForm.get("startDate"))==null?null:p.invalid)&&(n.assignRateForm==null||(p=n.assignRateForm.get("startDate"))==null?null:p.touched))}},dependencies:[N,K,b,j,Se,Ie,k,Re,De,T,A,V,$,U],styles:[".modal-container[_ngcontent-%COMP%]{padding:1rem}.title[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:end;margin-bottom:1rem}.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:1.4;font-size:1.1rem}.content[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%]{color:#184781;font-weight:700}"]});let e=t;return e})();var Ue=e=>({"is-invalid":e});function Ze(e,t){e&1&&(o(0,"div",13),c(1," Fecha de inicio obligatoria "),a())}var je=(()=>{let t=class t{constructor(s,i){this.fb=s,this.activeModal=i,this.payRateForm=this.fb.group({paymentDate:[null,F.required]})}ngOnInit(){this.payRateForm.get("paymentDate")?.valueChanges.subscribe(s=>{this.paymentDate=s})}};t.\u0275fac=function(i){return new(i||t)(_(z),_(te))},t.\u0275cmp=x({type:t,selectors:[["app-pay-rate-modal"]],decls:17,vars:5,consts:[[1,"modal-container"],[1,"title"],["id","exampleModalLabel",1,"modal-title","fs-5"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close",3,"click"],[1,"content"],[3,"formGroup"],[1,"col-12","mb-3"],["for","paymentDate",1,"form-label","asterisk"],["type","date","id","paymentDate","formControlName","paymentDate",1,"form-control",3,"ngClass"],["class","text-danger",4,"ngIf"],[1,"modal-footer"],["type","button",1,"btn","btn-secondary",3,"click"],["type","button",1,"btn","btn-primary",3,"click"],[1,"text-danger"]],template:function(i,n){if(i&1&&(o(0,"div",0)(1,"div",1)(2,"h1",2),c(3,"Pagar tarifa"),a(),o(4,"button",3),h("click",function(){return n.activeModal.close()}),a()(),o(5,"div",4)(6,"form",5)(7,"div",6)(8,"label",7),c(9,"Fecha de pago"),a(),u(10,"input",8),f(11,Ze,2,0,"div",9),a()(),o(12,"div",10)(13,"button",11),h("click",function(){return n.activeModal.close()}),c(14,"Cerrar"),a(),o(15,"button",12),h("click",function(){return n.activeModal.close(n.paymentDate)}),c(16,"Pagar tarifa"),a()()()()),i&2){let r,p;m(6),d("formGroup",n.payRateForm),m(4),d("ngClass",C(3,Ue,(n.payRateForm==null||(r=n.payRateForm.get("paymentDate"))==null?null:r.invalid)&&(n.payRateForm==null||(r=n.payRateForm.get("paymentDate"))==null?null:r.touched))),m(),d("ngIf",(n.payRateForm==null||(p=n.payRateForm.get("paymentDate"))==null?null:p.invalid)&&(n.payRateForm==null||(p=n.payRateForm.get("paymentDate"))==null?null:p.touched))}},dependencies:[N,b,j,k,T,A,V,$],styles:[".modal-container[_ngcontent-%COMP%]{padding:1rem}.title[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:end;margin-bottom:1rem}.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:1.4;font-size:1.1rem}.content[_ngcontent-%COMP%]   .current[_ngcontent-%COMP%]{color:#184781;font-weight:700}"]});let e=t;return e})();var tt=e=>({"pending-payments":e}),it=e=>({"no-rate":e}),nt=e=>["/clients",e],at=e=>["/clients","edit",e],ot=e=>["/clients","historic",e];function rt(e,t){if(e&1&&(o(0,"span",21),u(1,"i",22),c(2),a()),e&2){let l=g(2);m(2),M(" ",l.clientData.client.trainer.alias," ")}}function lt(e,t){if(e&1&&(o(0,"span",23),u(1,"i",24),c(2),O(3,"date"),a()),e&2){let l=g(2);m(2),M(" ",Ce(3,1,l.clientData.endDate,"dd/MM/yyyy")," ")}}function st(e,t){e&1&&(o(0,"span",25),u(1,"i",22),c(2," No asignado"),a())}function ct(e,t){if(e&1&&(o(0,"div",26),c(1),a()),e&2){let l=g(2);fe("alert alert-",l.alertType,""),m(),M(" ",l.alertMessage," ")}}function mt(e,t){if(e&1){let l=X();o(0,"div",2)(1,"div",3)(2,"div",4)(3,"div",5)(4,"span",6),c(5),a()(),o(6,"div",7)(7,"span",8),c(8),a()()(),o(9,"div",9)(10,"span",10),c(11),a(),o(12,"div",11),f(13,rt,3,1,"span",12)(14,lt,4,4,"span",13),a()()(),o(15,"div",14)(16,"div",15),u(17,"i",16),a(),o(18,"ul",17)(19,"li")(20,"a",18),c(21,"Info Cliente"),a()(),o(22,"li")(23,"a",18),c(24,"Editar Cliente"),a()(),o(25,"li")(26,"a",19),h("click",function(){P(l);let i=g();return E(i.openAddingRateModal(i.clientData.client.id))}),c(27,"Asignar tarifa"),a()(),o(28,"li")(29,"a",19),h("click",function(){P(l);let i=g();return E(i.openPaymentRateModal(i.clientData))}),c(30,"Pagar tarifa"),a()(),o(31,"li")(32,"a",18),c(33,"Hist\xF3rico tarifas"),a()(),o(34,"li")(35,"a",19),h("click",function(){P(l);let i=g();return E(i.openDeleteModal(i.clientData.client))}),c(36,"Borrar cliente"),a()()()(),f(37,st,3,0,"ng-template",null,0,J)(39,ct,2,4,"div",20),a()}if(e&2){let l,s=Y(38),i=g();m(5),he("",i.clientData.client.name," ",i.clientData.client.firstLastName," ",i.clientData.client.secondLastName,""),m(2),d("ngClass",C(14,tt,i.clientData.pendingPayments)),m(),M(" ",i.clientData.pendingPayments?"Pagos pend.":""," "),m(2),d("ngClass",C(16,it,!(!(i.clientData==null||i.clientData.rate==null)&&i.clientData.rate.name))),m(),M(" ",(l=i.clientData.rate==null?null:i.clientData.rate.name)!==null&&l!==void 0?l:"Sin tarifa asignada"," "),m(2),d("ngIf",i.clientData.client.trainer)("ngIfElse",s),m(),d("ngIf",i.clientData.endDate),m(6),d("routerLink",C(18,nt,i.clientData.client.id)),m(3),d("routerLink",C(20,at,i.clientData.client.id)),m(9),d("routerLink",C(22,ot,i.clientData.client.id)),m(7),d("ngIf",i.alertMessage)}}var Ve=(()=>{var t;let l=class l{constructor(i,n,r,p,S){H(this,t,void 0);this.ratesService=i,this.clientsService=n,this.fb=r,this.cdr=p,this.modalService=S,this.deleteClient=new re,this.payRate=new re,ae(this,t,null),this.rates$=this.ratesService.getRates(),this.alertMessage=null,this.alertType="success",this.assignRateForm=this.fb.group({rateId:[null,F.required],startDate:[null,F.required],paid:[null],paymentDate:[null]})}set clientData(i){console.log("clientData",i),ae(this,t,i)}get clientData(){return ce(this,t)}onSubmit(i){if(this.assignRateForm.invalid){this.assignRateForm.markAllAsTouched();return}this.clientsService.assignRateToClient(i,this.assignRateForm.getRawValue()).pipe(I(),_e(()=>this.showSuccessMessage()),W(n=>(this.showErrorMessage(n.error.message),Q))).subscribe(n=>{this.clientData=n.data,this.cdr.markForCheck()})}openAddingRateModal(i){if(!i)return;let n=this.modalService.open(Ae);n.componentInstance.clientId=i,n.dismissed.subscribe(r=>{this.clientData=r.data,this.cdr.detectChanges()})}openDeleteModal(i){let n=this.modalService.open(Ee);n.componentInstance.client=i,n.componentInstance.message="al cliente",n.componentInstance.text="cliente",n.closed.subscribe(r=>{console.log(r),r&&this.deleteClient.emit(i.id)})}openPaymentRateModal(i){this.modalService.open(je).closed.subscribe(r=>{if(console.log(r),!r)return;let p={clientId:i.client.id,rateId:i.rate?.id,paymentDate:r};this.payRate.emit(p)})}showSuccessMessage(i="Cliente creado correctamente"){this.alertMessage=i,this.alertType="success",this.hideMessageAfterDelay()}showErrorMessage(i="No se ha podido crear el cliente"){this.alertMessage=i,this.alertType="danger",this.hideMessageAfterDelay()}hideMessageAfterDelay(){setTimeout(()=>this.alertMessage=null,3e3)}};t=new WeakMap,l.\u0275fac=function(n){return new(n||l)(_(ee),_(L),_(z),_(ve),_(Pe))},l.\u0275cmp=x({type:l,selectors:[["app-client-card"]],inputs:{clientData:"clientData"},outputs:{deleteClient:"deleteClient",payRate:"payRate"},decls:1,vars:1,consts:[["emptyTrainer",""],["class","card",4,"ngIf"],[1,"card"],[1,"card__container"],[1,"card__container__client"],[1,"card__container__client__info"],[1,"card__container__client__info__name"],[1,"card__container__client__status"],[3,"ngClass"],[1,"card__container__rate"],[1,"card__container__rate__title",3,"ngClass"],[1,"card__container__rate__data"],["class","card__container__rate__data__coach pt-2",4,"ngIf","ngIfElse"],["class","card__container__rate__data__date pt-2",4,"ngIf"],[1,"card__actions","dropstart"],["data-bs-toggle","dropdown","aria-expanded","false"],[1,"bi","bi-three-dots-vertical"],[1,"dropdown-menu"],[1,"dropdown-item",3,"routerLink"],[1,"dropdown-item",3,"click"],["role","alert","style","width: 90%; position: fixed; top: 30px; left: 50%; transform: translateX(-50%); z-index: 9999;",3,"class",4,"ngIf"],[1,"card__container__rate__data__coach","pt-2"],[1,"bi","bi-person-fill"],[1,"card__container__rate__data__date","pt-2"],[1,"bi","bi-calendar-x"],[1,"card__container__rate__data__coach__empty","pt-2"],["role","alert",2,"width","90%","position","fixed","top","30px","left","50%","transform","translateX(-50%)","z-index","9999"]],template:function(n,r){n&1&&f(0,mt,40,24,"div",1),n&2&&d("ngIf",r.clientData)},dependencies:[N,b,be,ye],styles:[".card[_ngcontent-%COMP%]{display:flex;flex-direction:row;background-color:#f5f5f5;padding:1rem 0 1rem 1rem;border-radius:10px;border:none;margin-bottom:.5rem}.card__container[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%}.card__container__client[_ngcontent-%COMP%]{width:100%;display:flex;align-items:start;justify-content:space-between}.card__container__client__info[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-direction:column}@media (min-width: 768px){.card__container__client__info[_ngcontent-%COMP%]{flex-direction:row}}.card__container__client__info__name[_ngcontent-%COMP%]{font-size:1rem;font-weight:600;margin-right:1rem;color:#0e3983}@media (min-width: 768px){.card__container__client__info__name[_ngcontent-%COMP%]{font-size:1.25rem}}.card__container__client__info__age[_ngcontent-%COMP%]{font-size:1rem;font-weight:400;color:#a0a0a0}@media (min-width: 768px){.card__container__client__info__age[_ngcontent-%COMP%]{font-size:1.25rem}}.card__container__client__status[_ngcontent-%COMP%]{font-size:1rem;font-weight:500}@media (min-width: 768px){.card__container__client__status[_ngcontent-%COMP%]{font-size:1.25rem}}.card__container__rate[_ngcontent-%COMP%]{padding-top:.5rem;width:100%;display:flex;align-items:center;justify-content:space-between;flex-direction:column;align-items:flex-start}.card__container__rate__description[_ngcontent-%COMP%]{width:100%!important;font-size:1rem;font-weight:400;color:#122950;word-wrap:break-word}@media (min-width: 768px){.card__container__rate__description[_ngcontent-%COMP%]{font-size:1.25rem}}.card__container__rate__data[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:row;justify-content:space-between}.card__container__rate__data__coach[_ngcontent-%COMP%]{font-size:1rem;font-weight:400;color:#404040}@media (min-width: 768px){.card__container__rate__data__coach[_ngcontent-%COMP%]{font-size:1.25rem}}.card__container__rate__data__coach__empty[_ngcontent-%COMP%]{color:var(--bs-warning)}.card__container__rate__data__date[_ngcontent-%COMP%]{font-size:1rem;font-weight:400;color:#404040}.card__actions[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:0 4px}@media (min-width: 768px){.card__actions[_ngcontent-%COMP%]{padding:0 8px}}.active[_ngcontent-%COMP%]{color:var(--bs-success)}.pending-payments[_ngcontent-%COMP%]{color:var(--bs-danger)}.no-rate[_ngcontent-%COMP%]{color:var(--bs-warning)}"]});let e=l;return e})();function pt(e,t){if(e&1){let l=X();o(0,"app-client-card",9),h("deleteClient",function(i){P(l);let n=g(3);return E(n.onDeleteClient(i))})("payRate",function(i){P(l);let n=g(3);return E(n.onPayClientRate(i))}),a()}if(e&2){let l=t.$implicit;d("clientData",l)}}function _t(e,t){if(e&1&&(o(0,"div",7),f(1,pt,1,1,"app-client-card",8),O(2,"async"),a()),e&2){let l,s=g(2);m(),d("ngForOf",(l=G(2,1,s.filteredClients$))==null?null:l.data)}}function ft(e,t){if(e&1&&(o(0,"div",2)(1,"h1",3),c(2,"Todos los clientes"),a(),o(3,"form",4),u(4,"input",5),a(),f(5,_t,3,3,"div",6),O(6,"async"),a()),e&2){let l,s=g(),i=Y(3);m(3),d("formGroup",s.searchForm),m(2),d("ngIf",(l=G(6,3,s.filteredClients$))==null||l.data==null?null:l.data.length)("ngIfElse",i)}}function ut(e,t){e&1&&(u(0,"img",10),o(1,"span",11),c(2,"No se encontraron clientes"),a())}var $e=(()=>{var t,ze;let s=class s{constructor(n,r){H(this,t);this.clientsService=n,this.router=r,this.searchQuery="",this.clients$=this.clientsService.getClients(),this.filteredClients$=this.clients$,this.searchForm=new Fe({query:new we("")}),this.filteredClients$=this.searchForm.get("query")?.valueChanges.pipe(de(""),pe(p=>this.clients$.pipe(oe(S=>me(this,t,ze).call(this,p,S)))))}isClientsPage(){return this.router.url==="/clients"}onDeleteClient(n){this.clientsService.deleteClient(n).pipe(I()).subscribe(()=>{this.clients$=this.clientsService.getClients(),this.filteredClients$=this.clients$})}onSearch(n){this.searchQuery=n,this.filteredClients$=this.clients$.pipe(oe(r=>ne(ie({},r),{data:r.data.filter(p=>p.client.name.includes(this.searchQuery))})))}onPayClientRate(n){this.clientsService.payClientRate(n.clientId,n.rateId,n.paymentDate).pipe(I()).subscribe(()=>{console.log("Pago realizado"),this.clients$=this.clientsService.getClients(),this.filteredClients$=this.clients$})}};t=new WeakSet,ze=function(n,r){let p=n.split(" ");return ne(ie({},r),{data:r.data.filter(S=>{let He=`${S.client.name} ${S.client.firstLastName} ${S.client.secondLastName}`.toLowerCase();return p.every(Qe=>He.includes(Qe.toLowerCase()))})})},s.\u0275fac=function(r){return new(r||s)(_(L),_(Me))},s.\u0275cmp=x({type:s,selectors:[["app-clients"]],decls:4,vars:1,consts:[["notFound",""],["class","clients",4,"ngIf"],[1,"clients"],[1,"clients__title"],[1,"form-inline","my-2","col-10","col-md-6",3,"formGroup"],["type","search","placeholder","Buscar clientes...","aria-label","Search","formControlName","query",1,"form-control","mr-sm-2"],["class","clients__cards",4,"ngIf","ngIfElse"],[1,"clients__cards"],[3,"clientData","deleteClient","payRate",4,"ngFor","ngForOf"],[3,"deleteClient","payRate","clientData"],["src","../../../assets/img/not-found.png","alt","Logo",1,"mx-auto","d-block","img-fluid",2,"max-height","500px"],[1,"text-center",2,"font-size","1.25em","color","gray","font-weight","bold"]],template:function(r,p){r&1&&(f(0,ft,7,5,"div",1),u(1,"router-outlet"),f(2,ut,3,0,"ng-template",null,0,J)),r&2&&d("ngIf",p.isClientsPage())},dependencies:[K,b,xe,j,k,T,A,V,$,Ve,U],styles:[".clients[_ngcontent-%COMP%]{overflow:hidden;height:100vh;width:100%;display:flex;justify-content:start;flex-direction:column;align-items:center;padding-top:16px}@media (min-width: 768px){.clients[_ngcontent-%COMP%]{padding-top:32px}}.clients__title[_ngcontent-%COMP%]{font-size:1.5rem;width:90%;margin-bottom:1rem}@media (min-width: 768px){.clients__title[_ngcontent-%COMP%]{font-size:2rem;width:60%}}.clients__cards[_ngcontent-%COMP%]{width:90%;min-height:400px;overflow:scroll;padding-bottom:60px}@media (min-width: 768px){.clients__cards[_ngcontent-%COMP%]{width:60%}}.clients__cards[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}"]});let e=s;return e})();var gt=[{path:"",component:$e,children:[{path:"create",loadChildren:()=>import("./chunk-UPVSWHYV.js").then(e=>e.CreateClientsModule),canActivate:[B]},{path:":id",loadChildren:()=>import("./chunk-JAVJOE5U.js").then(e=>e.ClientInfolModule),canActivate:[B]},{path:"edit/:id",loadChildren:()=>import("./chunk-IGJZZLON.js").then(e=>e.EditClientModule),canActivate:[B]},{path:"historic/:id",loadChildren:()=>import("./chunk-UPGUWKHO.js").then(e=>e.HistoricalRatesModule),canActivate:[B]}]}],Le=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=y({type:t}),t.\u0275inj=v({imports:[q.forChild(gt),q]});let e=t;return e})();var Ge=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=y({type:t}),t.\u0275inj=v({imports:[R,w]});let e=t;return e})();var qe=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=y({type:t}),t.\u0275inj=v({imports:[R,w]});let e=t;return e})();var Be=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=y({type:t}),t.\u0275inj=v({imports:[R,q,Z,w,Ge,Oe,qe]});let e=t;return e})();var _i=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=y({type:t}),t.\u0275inj=v({imports:[R,Le,w,Z,Be]});let e=t;return e})();export{_i as ClientsModule};
