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
System.register(['wijmo/wijmo.gauge', '@angular/core', '@angular/common', '@angular/forms', 'wijmo/wijmo.angular2.directiveBase'], function(exports_1, context_1)
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
wjcGauge,
core_1,
core_2,
core_3,
common_1,
forms_1,
wijmo_angular2_directiveBase_1,
wjLinearGaugeMeta,
WjLinearGauge,
wjBulletGraphMeta,
WjBulletGraph,
wjRadialGaugeMeta,
WjRadialGauge,
wjRangeMeta,
WjRange,
moduleExports,
WjGaugeModule;
return {
setters: [function(wjcGauge_1)
{
wjcGauge = wjcGauge_1
}, function(core_1_1)
{
core_1 = core_1_1;
core_2 = core_1_1;
core_3 = core_1_1
}, function(common_1_1)
{
common_1 = common_1_1
}, function(forms_1_1)
{
forms_1 = forms_1_1
}, function(wijmo_angular2_directiveBase_1_1)
{
wijmo_angular2_directiveBase_1 = wijmo_angular2_directiveBase_1_1
}], execute: function()
{
exports_1("wjLinearGaugeMeta", wjLinearGaugeMeta = {
selector: 'wj-linear-gauge', template: "<div><ng-content></ng-content></div>", inputs: ['wjModelProperty', 'isDisabled', 'value', 'min', 'max', 'origin', 'isReadOnly', 'step', 'format', 'thickness', 'hasShadow', 'isAnimated', 'showText', 'showTicks', 'showRanges', 'thumbSize', 'getText', 'direction', ], outputs: ['initialized', 'gotFocusNg: gotFocus', 'lostFocusNg: lostFocus', 'valueChangedNg: valueChanged', 'valueChangePC: valueChange', ], providers: [{
provide: forms_1.NG_VALUE_ACCESSOR, useFactory: wijmo_angular2_directiveBase_1.WjValueAccessorFactory, multi: !0, deps: ['WjComponent']
}]
});
WjLinearGauge = function(_super)
{
function WjLinearGauge(elRef, injector, parentCmp)
{
_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef));
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjModelProperty = 'value';
this.gotFocusNg = new core_1.EventEmitter(!1);
this.lostFocusNg = new core_1.EventEmitter(!1);
this.valueChangedNg = new core_1.EventEmitter(!1);
this.valueChangePC = new core_1.EventEmitter(!1);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.created()
}
return __extends(WjLinearGauge, _super), WjLinearGauge.prototype.created = function(){}, WjLinearGauge.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjLinearGauge.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjLinearGauge.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjLinearGauge.meta = {
outputs: wjLinearGaugeMeta.outputs, changeEvents: {valueChanged: ['value']}
}, WjLinearGauge.decorators = [{
type: core_1.Component, args: [{
selector: wjLinearGaugeMeta.selector, template: wjLinearGaugeMeta.template, inputs: wjLinearGaugeMeta.inputs, outputs: wjLinearGaugeMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjLinearGauge
})
}].concat(wjLinearGaugeMeta.providers)
}, ]
}, ], WjLinearGauge.ctorParameters = [{
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
}, ], WjLinearGauge
}(wjcGauge.LinearGauge);
exports_1("WjLinearGauge", WjLinearGauge);
exports_1("wjBulletGraphMeta", wjBulletGraphMeta = {
selector: 'wj-bullet-graph', template: "<div><ng-content></ng-content></div>", inputs: ['wjModelProperty', 'isDisabled', 'value', 'min', 'max', 'origin', 'isReadOnly', 'step', 'format', 'thickness', 'hasShadow', 'isAnimated', 'showText', 'showTicks', 'showRanges', 'thumbSize', 'getText', 'direction', 'target', 'good', 'bad', ], outputs: ['initialized', 'gotFocusNg: gotFocus', 'lostFocusNg: lostFocus', 'valueChangedNg: valueChanged', 'valueChangePC: valueChange', ], providers: [{
provide: forms_1.NG_VALUE_ACCESSOR, useFactory: wijmo_angular2_directiveBase_1.WjValueAccessorFactory, multi: !0, deps: ['WjComponent']
}]
});
WjBulletGraph = function(_super)
{
function WjBulletGraph(elRef, injector, parentCmp)
{
_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef));
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjModelProperty = 'value';
this.gotFocusNg = new core_1.EventEmitter(!1);
this.lostFocusNg = new core_1.EventEmitter(!1);
this.valueChangedNg = new core_1.EventEmitter(!1);
this.valueChangePC = new core_1.EventEmitter(!1);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.created()
}
return __extends(WjBulletGraph, _super), WjBulletGraph.prototype.created = function(){}, WjBulletGraph.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjBulletGraph.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjBulletGraph.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjBulletGraph.meta = {
outputs: wjBulletGraphMeta.outputs, changeEvents: {valueChanged: ['value']}
}, WjBulletGraph.decorators = [{
type: core_1.Component, args: [{
selector: wjBulletGraphMeta.selector, template: wjBulletGraphMeta.template, inputs: wjBulletGraphMeta.inputs, outputs: wjBulletGraphMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjBulletGraph
})
}].concat(wjBulletGraphMeta.providers)
}, ]
}, ], WjBulletGraph.ctorParameters = [{
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
}, ], WjBulletGraph
}(wjcGauge.BulletGraph);
exports_1("WjBulletGraph", WjBulletGraph);
exports_1("wjRadialGaugeMeta", wjRadialGaugeMeta = {
selector: 'wj-radial-gauge', template: "<div><ng-content></ng-content></div>", inputs: ['wjModelProperty', 'isDisabled', 'value', 'min', 'max', 'origin', 'isReadOnly', 'step', 'format', 'thickness', 'hasShadow', 'isAnimated', 'showText', 'showTicks', 'showRanges', 'thumbSize', 'getText', 'autoScale', 'startAngle', 'sweepAngle', ], outputs: ['initialized', 'gotFocusNg: gotFocus', 'lostFocusNg: lostFocus', 'valueChangedNg: valueChanged', 'valueChangePC: valueChange', ], providers: [{
provide: forms_1.NG_VALUE_ACCESSOR, useFactory: wijmo_angular2_directiveBase_1.WjValueAccessorFactory, multi: !0, deps: ['WjComponent']
}]
});
WjRadialGauge = function(_super)
{
function WjRadialGauge(elRef, injector, parentCmp)
{
_super.call(this, wijmo_angular2_directiveBase_1.WjDirectiveBehavior.getHostElement(elRef));
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjModelProperty = 'value';
this.gotFocusNg = new core_1.EventEmitter(!1);
this.lostFocusNg = new core_1.EventEmitter(!1);
this.valueChangedNg = new core_1.EventEmitter(!1);
this.valueChangePC = new core_1.EventEmitter(!1);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.created()
}
return __extends(WjRadialGauge, _super), WjRadialGauge.prototype.created = function(){}, WjRadialGauge.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjRadialGauge.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjRadialGauge.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjRadialGauge.meta = {
outputs: wjRadialGaugeMeta.outputs, changeEvents: {valueChanged: ['value']}
}, WjRadialGauge.decorators = [{
type: core_1.Component, args: [{
selector: wjRadialGaugeMeta.selector, template: wjRadialGaugeMeta.template, inputs: wjRadialGaugeMeta.inputs, outputs: wjRadialGaugeMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjRadialGauge
})
}].concat(wjRadialGaugeMeta.providers)
}, ]
}, ], WjRadialGauge.ctorParameters = [{
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
}, ], WjRadialGauge
}(wjcGauge.RadialGauge);
exports_1("WjRadialGauge", WjRadialGauge);
exports_1("wjRangeMeta", wjRangeMeta = {
selector: 'wj-range', template: "", inputs: ['wjProperty', 'color', 'min', 'max', 'name', 'thickness', ], outputs: ['initialized', ], providers: []
});
WjRange = function(_super)
{
function WjRange(elRef, injector, parentCmp)
{
_super.call(this);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjProperty = 'ranges';
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.created()
}
return __extends(WjRange, _super), WjRange.prototype.created = function(){}, WjRange.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjRange.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjRange.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjRange.meta = {outputs: wjRangeMeta.outputs}, WjRange.decorators = [{
type: core_1.Component, args: [{
selector: wjRangeMeta.selector, template: wjRangeMeta.template, inputs: wjRangeMeta.inputs, outputs: wjRangeMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjRange
})
}].concat(wjRangeMeta.providers)
}, ]
}, ], WjRange.ctorParameters = [{
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
}, ], WjRange
}(wjcGauge.Range);
exports_1("WjRange", WjRange);
moduleExports = [WjLinearGauge, WjBulletGraph, WjRadialGauge, WjRange];
WjGaugeModule = function()
{
function WjGaugeModule(){}
return WjGaugeModule.decorators = [{
type: core_1.NgModule, args: [{
imports: [wijmo_angular2_directiveBase_1.WjDirectiveBaseModule, common_1.CommonModule], declarations: moduleExports.slice(), exports: moduleExports.slice()
}, ]
}, ], WjGaugeModule.ctorParameters = [], WjGaugeModule
}();
exports_1("WjGaugeModule", WjGaugeModule)
}
}
})