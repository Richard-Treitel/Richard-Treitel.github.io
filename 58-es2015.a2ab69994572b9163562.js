(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{"0grb":function(t,n,e){"use strict";e.d(n,"a",function(){return r});var a,i=e("mrSG"),s=e("8Y7J"),o=e("IheW");let r=a=class{constructor(t){this.http=t}static assembleErrorMessage(t,n){let e;return t.error?t.error.message?e=t.error.message:t.error.errors&&(e=t.error.errors.map(t=>t.errorMessage).join(". ")):e=t.message,e=`${e}.`,console.log(`${n||"ApiService"} got response: ${e}`),e}get(t,n=null,e=null){const a=this.buildHeaders(e);return this.http.get(this.buildUrlPath(t),{params:n,headers:a})}post(t,n=null){const e=this.buildHeaders();return this.http.post(this.buildUrlPath(t),n,{headers:e})}put(t,n=null){const e=this.buildHeaders();return this.http.put(this.buildUrlPath(t),n,{headers:e})}patch(t,n=null){const e=this.buildHeaders();return this.http.patch(this.buildUrlPath(t),n,{headers:e})}delete(t){const n=this.buildHeaders();return this.http.delete(this.buildUrlPath(t),{headers:n})}buildUrlPath(t){return a.SERVER_URI+t}buildHeaders(t=null){const n=Object.assign({},t);return new o.f(n)}};r.SERVER_URI="/api/1.0.0",r.ctorParameters=()=>[{type:o.b}],r=a=i.a([Object(s.C)({providedIn:"root"})],r)},"4TB1":function(t,n,e){"use strict";var a;function i(t){return t===a.SEQUENCING_IN_PROGRESS||t===a.UPLOAD_STARTED||t===a.DEMULTIPLEXING||t===a.ANALYZING}e.d(n,"a",function(){return a}),e.d(n,"b",function(){return i}),function(t){t.SEQUENCING_IN_PROGRESS="SEQUENCING_IN_PROGRESS",t.SEQUENCING_TIMED_OUT="SEQUENCING_TIMED_OUT",t.UPLOAD_STARTED="UPLOAD_STARTED",t.UPLOAD_FAILED="UPLOAD_FAILED",t.DEMULTIPLEXING="DEMULTIPLEXING",t.DEMULTIPLEXING_FAILED="DEMULTIPLEXING_FAILED",t.ANALYZING="ANALYZING",t.ANALYZING_FAILED="ANALYZING_FAILED",t.COMPLETED="COMPLETED",t.CANCELED="CANCELED"}(a||(a={}))},B6KG:function(t,n){t.exports="mat-icon {\n  cursor: pointer;\n}\n\n.card-body .sas-dialog-content {\n  color: #4d4d4d;\n}\n\n.header-page-title {\n  line-height: 1.33em;\n}\n\n.mat-dialog-actions {\n  margin: 0.5em -0.7em -1.1em 0;\n}\n\n.dialog-buttons-container-1 {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n\n.dialog-buttons-container-2 {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.mat-dialog-title {\n  font-size: 18px;\n  font-weight: bold;\n  line-height: 1.5em;\n  margin-bottom: 1em;\n}\n\n.mat-dialog-actions button {\n  margin: 1em 0 0.5em 1em;\n}"},R6Eq:function(t,n,e){"use strict";e.d(n,"a",function(){return c});var a,i=e("mrSG"),s=e("8Y7J"),o=e("s6ns"),r=e("cUpR");let c=a=class{constructor(t,n,e){this.dialogRef=t,this.captions=n,this.sanitizer=e}static setSizeOfDialog(t,n){t.autoFocus=!1,t.position={top:"20vh"},t.minWidth="30em",t.maxWidth="80%",t.minHeight="12em",t.maxHeight="80%",n&&Object.assign(t,n)}static confirm(t,n,e,i){const s={};return s.data=n,s.id=t,a.setSizeOfDialog(s,e),i.open(a,s)}ngOnInit(){}onNegativeResult(){this.dialogRef.close(!1)}onPositiveResult(){this.dialogRef.close(!0)}get cleanContents(){return(this.captions.contents||[]).map(t=>this.sanitizer.sanitize(s.cb.HTML,t))}};c.ctorParameters=()=>[{type:o.d},{type:void 0,decorators:[{type:s.B,args:[o.a]}]},{type:r.b}],c=a=i.a([Object(s.n)({selector:"sas-confirm",template:e("fawa"),styles:[e("B6KG")]}),i.b(1,Object(s.B)(o.a))],c)},RKzk:function(t,n,e){"use strict";e.r(n),e.d(n,"analysisServiceStub",function(){return u});var a=e("UJcr"),i=e("5dmV"),s=e("1eQY"),o=e("r49G"),r=e("wuA3"),c=e("LRne"),l=e("R6Eq"),d=e("4TB1");const u={cancelAnalysis:t=>Object(c.a)(null)},b='<sand-bar title="sgp-client-cancel-analysis"></sand-bar>\n                  <sgp-client-cancel-analysis [analysis]="analysis" (onCancel)="canceled=true"></sgp-client-cancel-analysis>\n                  <span *ngIf="canceled">Analysis canceled</span>';n.default=Object(a.b)(o.a,{imports:[i.a],declarations:[s.SandBarComponent,l.a],entryComponents:[l.a],providers:[{provide:r.a,useValue:u}]}).add("with analysis UPLOAD_STARTED",{template:b,context:{analysis:{id:"someAnalysis",status:d.a.UPLOAD_STARTED},canceled:!1}}).add("with analysis DEMULTIPLEXING",{template:b,context:{analysis:{id:"someAnalysis",status:d.a.DEMULTIPLEXING},canceled:!1}}).add("with analysis CANCELLED",{template:b,context:{analysis:{id:"someAnalysis",status:d.a.CANCELED},canceled:!1}}).add("with analysis COMPLETED",{template:b,context:{analysis:{id:"someAnalysis",status:d.a.COMPLETED},canceled:!1}})},fawa:function(t,n){t.exports='<div fxFlex id="confirm-component">\n  <div mat-dialog-title class="header-page-title" fxLayout="row" fxLayoutAlign="space-between center">\n    <div>{{captions.title}}</div>\n    <mat-icon class="md-18" (click)="onNegativeResult()" fontIcon="md-clear"></mat-icon>\n  </div>\n\n  <div mat-dialog-content class="card-body">\n    <p class="sas-dialog-content" *ngFor="let content of cleanContents" [innerHTML]="content"></p>\n  </div>\n\n  \x3c!-- When there is one button, it should be at the right. `row-reverse` does this. --\x3e\n  <div mat-dialog-actions fxLayout="row-reverse" fxLayoutAlign="right center"\n       [ngClass]="captions.cancelLabel ? \'dialog-buttons-container-2\' : \'dialog-buttons-container-1\'">\n    \x3c!-- User can tab to this button, but it is not selected by default. --\x3e\n    <button mat-button [tabIndex]="1" id="button-proceed"\n            *ngIf="captions.proceedLabel" (click)="onPositiveResult()">\n      {{captions.proceedLabel}}\n    </button>\n\n    <button mat-button mat-flat-button [tabIndex]="2" id="button-cancel"\n            *ngIf="captions.cancelLabel" (click)="onNegativeResult()">\n      {{captions.cancelLabel}}\n    </button>\n  </div>\n</div>\n'}}]);