/*
    *
    * Wijmo Library 5.20171.282
    * http://wijmo.com/
    *
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    *
    * Licensed under the Wijmo Commercial License.
    * sales@wijmo.com
    * wijmo.com/products/wijmo-5/license/
    *
    */
System.register(['wijmo/wijmo.grid.filter', '@angular/core', '@angular/common', 'wijmo/wijmo.angular2.directiveBase'], function(exports_1, context_1)
{
"use strict";
var __moduleName=context_1 && context_1.id,
__extends=this && this.__extends || function(d, b)
{
function __()
{
this.constructor = d
}
for (var p in b)
b.hasOwnProperty(p) && (d[p] = b[p]);
d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __)
},
wjcGridFilter,
core_1,
core_2,
core_3,
common_1,
wijmo_angular2_directiveBase_1,
wjFlexGridFilterMeta,
WjFlexGridFilter,
moduleExports,
WjGridFilterModule;
return {
setters: [function(wjcGridFilter_1)
{
wjcGridFilter = wjcGridFilter_1
}, function(core_1_1)
{
core_1 = core_1_1;
core_2 = core_1_1;
core_3 = core_1_1
}, function(common_1_1)
{
common_1 = common_1_1
}, function(wijmo_angular2_directiveBase_1_1)
{
wijmo_angular2_directiveBase_1 = wijmo_angular2_directiveBase_1_1
}], execute: function()
{
exports_1("wjFlexGridFilterMeta", wjFlexGridFilterMeta = {
selector: 'wj-flex-grid-filter', template: "", inputs: ['wjProperty', 'showFilterIcons', 'showSortButtons', 'defaultFilterType', 'filterColumns', ], outputs: ['initialized', 'filterChangingNg: filterChanging', 'filterChangedNg: filterChanged', 'filterAppliedNg: filterApplied', ], providers: []
});
WjFlexGridFilter = function(_super)
{
function WjFlexGridFilter(elRef, injector, parentCmp)
{
_super.call(this, parentCmp);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.filterChangingNg = new core_1.EventEmitter(!1);
this.filterChangedNg = new core_1.EventEmitter(!1);
this.filterAppliedNg = new core_1.EventEmitter(!1);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.created()
}
return __extends(WjFlexGridFilter, _super), WjFlexGridFilter.prototype.created = function(){}, WjFlexGridFilter.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexGridFilter.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexGridFilter.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexGridFilter.meta = {outputs: wjFlexGridFilterMeta.outputs}, WjFlexGridFilter.decorators = [{
type: core_1.Component, args: [{
selector: wjFlexGridFilterMeta.selector, template: wjFlexGridFilterMeta.template, inputs: wjFlexGridFilterMeta.inputs, outputs: wjFlexGridFilterMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexGridFilter
})
}].concat(wjFlexGridFilterMeta.providers)
}, ]
}, ], WjFlexGridFilter.ctorParameters = [{
type: core_2.ElementRef, decorators: [{
type: core_3.Inject, args: [core_2.ElementRef, ]
}, ]
}, {
type: core_2.Injector, decorators: [{
type: core_3.Inject, args: [core_2.Injector, ]
}, ]
}, {
type: undefined, decorators: [{
type: core_3.Inject, args: ['WjComponent', ]
}, {type: core_3.SkipSelf}, {type: core_2.Optional}, ]
}, ], WjFlexGridFilter
}(wjcGridFilter.FlexGridFilter);
exports_1("WjFlexGridFilter", WjFlexGridFilter);
moduleExports = [WjFlexGridFilter];
WjGridFilterModule = function()
{
function WjGridFilterModule(){}
return WjGridFilterModule.decorators = [{
type: core_1.NgModule, args: [{
imports: [wijmo_angular2_directiveBase_1.WjDirectiveBaseModule, common_1.CommonModule], declarations: moduleExports.slice(), exports: moduleExports.slice()
}, ]
}, ], WjGridFilterModule.ctorParameters = [], WjGridFilterModule
}();
exports_1("WjGridFilterModule", WjGridFilterModule)
}
}
})