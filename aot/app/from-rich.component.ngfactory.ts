/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../app/from-rich.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/change_detection';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/core/src/linker/view_container';
import * as import9 from 'ag-grid-ng2/lib/agGridNg2';
import * as import10 from '../node_modules/ag-grid-ng2/lib/agGridNg2.ngfactory';
import * as import11 from '@angular/core/src/linker/query_list';
import * as import12 from '@angular/core/src/linker/element_ref';
import * as import13 from 'ag-grid-ng2/lib/ng2FrameworkFactory';
export class Wrapper_FromRichComponent {
  /*private*/ _eventHandler:Function;
  context:import0.FromRichComponent;
  /*private*/ _changed:boolean;
  constructor() {
    this._changed = false;
    this.context = new import0.FromRichComponent();
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_FromRichComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_FromRichComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.FromRichComponent>;
  _FromRichComponent_0_3:Wrapper_FromRichComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_FromRichComponent_Host0,renderType_FromRichComponent_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'ag-from-rich-component',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_FromRichComponent0(this.viewUtils,this,0,this._el_0);
    this._FromRichComponent_0_3 = new Wrapper_FromRichComponent();
    this.compView_0.create(this._FromRichComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._FromRichComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.FromRichComponent) && (0 === requestNodeIndex))) { return this._FromRichComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._FromRichComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const FromRichComponentNgFactory:import7.ComponentFactory<import0.FromRichComponent> = new import7.ComponentFactory<import0.FromRichComponent>('ag-from-rich-component',View_FromRichComponent_Host0,import0.FromRichComponent);
const styles_FromRichComponent:any[] = ([] as any[]);
var renderType_FromRichComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,styles_FromRichComponent,{});
export class View_FromRichComponent0 extends import1.AppView<import0.FromRichComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  _el_5:any;
  /*private*/ _vc_5:import8.ViewContainer;
  compView_5:import1.AppView<import9.AgGridNg2>;
  _AgGridNg2_5_5:import10.Wrapper_AgGridNg2;
  _query_AgGridColumn_5_0:import11.QueryList<any>;
  _text_6:any;
  _text_7:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_FromRichComponent0,renderType_FromRichComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'style','width: 850px;'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'h1',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'Using Dynamic Components - Richer Example',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_0,'ag-grid-ng2',new import3.InlineArray4(4,'class','ag-fresh','style','width: 100%; height: 200px;'),(null as any));
    this._vc_5 = new import8.ViewContainer(5,0,this,this._el_5);
    this.compView_5 = new import10.View_AgGridNg20(this.viewUtils,this,5,this._el_5);
    this._AgGridNg2_5_5 = new import10.Wrapper_AgGridNg2(new import12.ElementRef(this._el_5),this._vc_5.vcRef,this.parentView.injectorGet(import13.Ng2FrameworkFactory,this.parentIndex));
    this._query_AgGridColumn_5_0 = new import11.QueryList<any>();
    this._text_6 = this.renderer.createText((null as any),'\n    ',(null as any));
    this.compView_5.create(this._AgGridNg2_5_5.context);
    this._text_7 = this.renderer.createText(this._el_0,'\n',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import9.AgGridNg2) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 6)))) { return this._AgGridNg2_5_5.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_5_0_0:any = this.context.gridOptions;
    this._AgGridNg2_5_5.check_gridOptions(currVal_5_0_0,throwOnChange,false);
    this._AgGridNg2_5_5.ngDoCheck(this,this._el_5,throwOnChange);
    this._vc_5.detectChangesInNestedViews(throwOnChange);
    if (!throwOnChange) { if (this._query_AgGridColumn_5_0.dirty) {
      this._query_AgGridColumn_5_0.reset(([] as any[]));
      this._AgGridNg2_5_5.context.columns = this._query_AgGridColumn_5_0;
      this._query_AgGridColumn_5_0.notifyOnChanges();
    } }
    this.compView_5.detectChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._AgGridNg2_5_5.context.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this._vc_5.destroyNestedViews();
    this.compView_5.destroy();
    this._AgGridNg2_5_5.ngOnDestroy();
  }
}