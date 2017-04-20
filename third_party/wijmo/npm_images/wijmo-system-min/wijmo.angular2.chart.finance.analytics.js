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
System.register(['wijmo/wijmo.chart.finance.analytics', '@angular/core', '@angular/common', 'wijmo/wijmo.angular2.directiveBase'], function(exports_1, context_1)
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
wjcChartFinanceAnalytics,
core_1,
core_2,
core_3,
common_1,
wijmo_angular2_directiveBase_1,
wjFlexChartFibonacciMeta,
WjFlexChartFibonacci,
wjFlexChartFibonacciArcsMeta,
WjFlexChartFibonacciArcs,
wjFlexChartFibonacciFansMeta,
WjFlexChartFibonacciFans,
wjFlexChartFibonacciTimeZonesMeta,
WjFlexChartFibonacciTimeZones,
wjFlexChartAtrMeta,
WjFlexChartAtr,
wjFlexChartCciMeta,
WjFlexChartCci,
wjFlexChartRsiMeta,
WjFlexChartRsi,
wjFlexChartWilliamsRMeta,
WjFlexChartWilliamsR,
wjFlexChartMacdMeta,
WjFlexChartMacd,
wjFlexChartMacdHistogramMeta,
WjFlexChartMacdHistogram,
wjFlexChartStochasticMeta,
WjFlexChartStochastic,
wjFlexChartBollingerBandsMeta,
WjFlexChartBollingerBands,
wjFlexChartEnvelopesMeta,
WjFlexChartEnvelopes,
moduleExports,
WjChartFinanceAnalyticsModule;
return {
setters: [function(wjcChartFinanceAnalytics_1)
{
wjcChartFinanceAnalytics = wjcChartFinanceAnalytics_1
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
exports_1("wjFlexChartFibonacciMeta", wjFlexChartFibonacciMeta = {
selector: 'wj-flex-chart-fibonacci', template: "", inputs: ['wjProperty', 'axisX', 'axisY', 'binding', 'bindingX', 'cssClass', 'name', 'style', 'altStyle', 'symbolMarker', 'symbolSize', 'symbolStyle', 'visibility', 'itemsSource', 'high', 'low', 'labelPosition', 'levels', 'minX', 'maxX', 'uptrend', ], outputs: ['initialized', 'renderingNg: rendering', 'renderedNg: rendered', 'visibilityChangePC: visibilityChange', ], providers: []
});
WjFlexChartFibonacci = function(_super)
{
function WjFlexChartFibonacci(elRef, injector, parentCmp)
{
_super.call(this);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjProperty = 'series';
this.renderingNg = new core_1.EventEmitter(!1);
this.renderedNg = new core_1.EventEmitter(!1);
this.visibilityChangePC = new core_1.EventEmitter(!1);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.created()
}
return __extends(WjFlexChartFibonacci, _super), WjFlexChartFibonacci.prototype.created = function(){}, WjFlexChartFibonacci.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartFibonacci.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartFibonacci.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartFibonacci.meta = {
outputs: wjFlexChartFibonacciMeta.outputs, changeEvents: {'chart.seriesVisibilityChanged': ['visibility']}, siblingId: 'series'
}, WjFlexChartFibonacci.decorators = [{
type: core_1.Component, args: [{
selector: wjFlexChartFibonacciMeta.selector, template: wjFlexChartFibonacciMeta.template, inputs: wjFlexChartFibonacciMeta.inputs, outputs: wjFlexChartFibonacciMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartFibonacci
})
}].concat(wjFlexChartFibonacciMeta.providers)
}, ]
}, ], WjFlexChartFibonacci.ctorParameters = [{
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
}, ], WjFlexChartFibonacci
}(wjcChartFinanceAnalytics.Fibonacci);
exports_1("WjFlexChartFibonacci", WjFlexChartFibonacci);
exports_1("wjFlexChartFibonacciArcsMeta", wjFlexChartFibonacciArcsMeta = {
selector: 'wj-flex-chart-fibonacci-arcs', template: "", inputs: ['wjProperty', 'axisX', 'axisY', 'binding', 'bindingX', 'cssClass', 'name', 'style', 'altStyle', 'symbolMarker', 'symbolSize', 'symbolStyle', 'visibility', 'itemsSource', 'start', 'end', 'labelPosition', 'levels', ], outputs: ['initialized', 'renderingNg: rendering', 'renderedNg: rendered', 'visibilityChangePC: visibilityChange', ], providers: []
});
WjFlexChartFibonacciArcs = function(_super)
{
function WjFlexChartFibonacciArcs(elRef, injector, parentCmp)
{
_super.call(this);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjProperty = 'series';
this.renderingNg = new core_1.EventEmitter(!1);
this.renderedNg = new core_1.EventEmitter(!1);
this.visibilityChangePC = new core_1.EventEmitter(!1);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.created()
}
return __extends(WjFlexChartFibonacciArcs, _super), WjFlexChartFibonacciArcs.prototype.created = function(){}, WjFlexChartFibonacciArcs.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartFibonacciArcs.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartFibonacciArcs.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartFibonacciArcs.meta = {
outputs: wjFlexChartFibonacciArcsMeta.outputs, changeEvents: {'chart.seriesVisibilityChanged': ['visibility']}, siblingId: 'series'
}, WjFlexChartFibonacciArcs.decorators = [{
type: core_1.Component, args: [{
selector: wjFlexChartFibonacciArcsMeta.selector, template: wjFlexChartFibonacciArcsMeta.template, inputs: wjFlexChartFibonacciArcsMeta.inputs, outputs: wjFlexChartFibonacciArcsMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartFibonacciArcs
})
}].concat(wjFlexChartFibonacciArcsMeta.providers)
}, ]
}, ], WjFlexChartFibonacciArcs.ctorParameters = [{
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
}, ], WjFlexChartFibonacciArcs
}(wjcChartFinanceAnalytics.FibonacciArcs);
exports_1("WjFlexChartFibonacciArcs", WjFlexChartFibonacciArcs);
exports_1("wjFlexChartFibonacciFansMeta", wjFlexChartFibonacciFansMeta = {
selector: 'wj-flex-chart-fibonacci-fans', template: "", inputs: ['wjProperty', 'axisX', 'axisY', 'binding', 'bindingX', 'cssClass', 'name', 'style', 'altStyle', 'symbolMarker', 'symbolSize', 'symbolStyle', 'visibility', 'itemsSource', 'start', 'end', 'labelPosition', 'levels', ], outputs: ['initialized', 'renderingNg: rendering', 'renderedNg: rendered', 'visibilityChangePC: visibilityChange', ], providers: []
});
WjFlexChartFibonacciFans = function(_super)
{
function WjFlexChartFibonacciFans(elRef, injector, parentCmp)
{
_super.call(this);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjProperty = 'series';
this.renderingNg = new core_1.EventEmitter(!1);
this.renderedNg = new core_1.EventEmitter(!1);
this.visibilityChangePC = new core_1.EventEmitter(!1);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.created()
}
return __extends(WjFlexChartFibonacciFans, _super), WjFlexChartFibonacciFans.prototype.created = function(){}, WjFlexChartFibonacciFans.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartFibonacciFans.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartFibonacciFans.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartFibonacciFans.meta = {
outputs: wjFlexChartFibonacciFansMeta.outputs, changeEvents: {'chart.seriesVisibilityChanged': ['visibility']}, siblingId: 'series'
}, WjFlexChartFibonacciFans.decorators = [{
type: core_1.Component, args: [{
selector: wjFlexChartFibonacciFansMeta.selector, template: wjFlexChartFibonacciFansMeta.template, inputs: wjFlexChartFibonacciFansMeta.inputs, outputs: wjFlexChartFibonacciFansMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartFibonacciFans
})
}].concat(wjFlexChartFibonacciFansMeta.providers)
}, ]
}, ], WjFlexChartFibonacciFans.ctorParameters = [{
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
}, ], WjFlexChartFibonacciFans
}(wjcChartFinanceAnalytics.FibonacciFans);
exports_1("WjFlexChartFibonacciFans", WjFlexChartFibonacciFans);
exports_1("wjFlexChartFibonacciTimeZonesMeta", wjFlexChartFibonacciTimeZonesMeta = {
selector: 'wj-flex-chart-fibonacci-time-zones', template: "", inputs: ['wjProperty', 'axisX', 'axisY', 'binding', 'bindingX', 'cssClass', 'name', 'style', 'altStyle', 'symbolMarker', 'symbolSize', 'symbolStyle', 'visibility', 'itemsSource', 'startX', 'endX', 'labelPosition', 'levels', ], outputs: ['initialized', 'renderingNg: rendering', 'renderedNg: rendered', 'visibilityChangePC: visibilityChange', ], providers: []
});
WjFlexChartFibonacciTimeZones = function(_super)
{
function WjFlexChartFibonacciTimeZones(elRef, injector, parentCmp)
{
_super.call(this);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjProperty = 'series';
this.renderingNg = new core_1.EventEmitter(!1);
this.renderedNg = new core_1.EventEmitter(!1);
this.visibilityChangePC = new core_1.EventEmitter(!1);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.created()
}
return __extends(WjFlexChartFibonacciTimeZones, _super), WjFlexChartFibonacciTimeZones.prototype.created = function(){}, WjFlexChartFibonacciTimeZones.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartFibonacciTimeZones.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartFibonacciTimeZones.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartFibonacciTimeZones.meta = {
outputs: wjFlexChartFibonacciTimeZonesMeta.outputs, changeEvents: {'chart.seriesVisibilityChanged': ['visibility']}, siblingId: 'series'
}, WjFlexChartFibonacciTimeZones.decorators = [{
type: core_1.Component, args: [{
selector: wjFlexChartFibonacciTimeZonesMeta.selector, template: wjFlexChartFibonacciTimeZonesMeta.template, inputs: wjFlexChartFibonacciTimeZonesMeta.inputs, outputs: wjFlexChartFibonacciTimeZonesMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartFibonacciTimeZones
})
}].concat(wjFlexChartFibonacciTimeZonesMeta.providers)
}, ]
}, ], WjFlexChartFibonacciTimeZones.ctorParameters = [{
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
}, ], WjFlexChartFibonacciTimeZones
}(wjcChartFinanceAnalytics.FibonacciTimeZones);
exports_1("WjFlexChartFibonacciTimeZones", WjFlexChartFibonacciTimeZones);
exports_1("wjFlexChartAtrMeta", wjFlexChartAtrMeta = {
selector: 'wj-flex-chart-atr', template: "", inputs: ['wjProperty', 'axisX', 'axisY', 'binding', 'bindingX', 'cssClass', 'name', 'style', 'altStyle', 'symbolMarker', 'symbolSize', 'symbolStyle', 'visibility', 'itemsSource', 'period', ], outputs: ['initialized', 'renderingNg: rendering', 'renderedNg: rendered', 'visibilityChangePC: visibilityChange', ], providers: []
});
WjFlexChartAtr = function(_super)
{
function WjFlexChartAtr(elRef, injector, parentCmp)
{
_super.call(this);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjProperty = 'series';
this.renderingNg = new core_1.EventEmitter(!1);
this.renderedNg = new core_1.EventEmitter(!1);
this.visibilityChangePC = new core_1.EventEmitter(!1);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.created()
}
return __extends(WjFlexChartAtr, _super), WjFlexChartAtr.prototype.created = function(){}, WjFlexChartAtr.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartAtr.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartAtr.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartAtr.meta = {
outputs: wjFlexChartAtrMeta.outputs, changeEvents: {'chart.seriesVisibilityChanged': ['visibility']}, siblingId: 'series'
}, WjFlexChartAtr.decorators = [{
type: core_1.Component, args: [{
selector: wjFlexChartAtrMeta.selector, template: wjFlexChartAtrMeta.template, inputs: wjFlexChartAtrMeta.inputs, outputs: wjFlexChartAtrMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartAtr
})
}].concat(wjFlexChartAtrMeta.providers)
}, ]
}, ], WjFlexChartAtr.ctorParameters = [{
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
}, ], WjFlexChartAtr
}(wjcChartFinanceAnalytics.ATR);
exports_1("WjFlexChartAtr", WjFlexChartAtr);
exports_1("wjFlexChartCciMeta", wjFlexChartCciMeta = {
selector: 'wj-flex-chart-cci', template: "", inputs: ['wjProperty', 'axisX', 'axisY', 'binding', 'bindingX', 'cssClass', 'name', 'style', 'altStyle', 'symbolMarker', 'symbolSize', 'symbolStyle', 'visibility', 'itemsSource', 'period', 'constant', ], outputs: ['initialized', 'renderingNg: rendering', 'renderedNg: rendered', 'visibilityChangePC: visibilityChange', ], providers: []
});
WjFlexChartCci = function(_super)
{
function WjFlexChartCci(elRef, injector, parentCmp)
{
_super.call(this);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjProperty = 'series';
this.renderingNg = new core_1.EventEmitter(!1);
this.renderedNg = new core_1.EventEmitter(!1);
this.visibilityChangePC = new core_1.EventEmitter(!1);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.created()
}
return __extends(WjFlexChartCci, _super), WjFlexChartCci.prototype.created = function(){}, WjFlexChartCci.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartCci.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartCci.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartCci.meta = {
outputs: wjFlexChartCciMeta.outputs, changeEvents: {'chart.seriesVisibilityChanged': ['visibility']}, siblingId: 'series'
}, WjFlexChartCci.decorators = [{
type: core_1.Component, args: [{
selector: wjFlexChartCciMeta.selector, template: wjFlexChartCciMeta.template, inputs: wjFlexChartCciMeta.inputs, outputs: wjFlexChartCciMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartCci
})
}].concat(wjFlexChartCciMeta.providers)
}, ]
}, ], WjFlexChartCci.ctorParameters = [{
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
}, ], WjFlexChartCci
}(wjcChartFinanceAnalytics.CCI);
exports_1("WjFlexChartCci", WjFlexChartCci);
exports_1("wjFlexChartRsiMeta", wjFlexChartRsiMeta = {
selector: 'wj-flex-chart-rsi', template: "", inputs: ['wjProperty', 'axisX', 'axisY', 'binding', 'bindingX', 'cssClass', 'name', 'style', 'altStyle', 'symbolMarker', 'symbolSize', 'symbolStyle', 'visibility', 'itemsSource', 'period', ], outputs: ['initialized', 'renderingNg: rendering', 'renderedNg: rendered', 'visibilityChangePC: visibilityChange', ], providers: []
});
WjFlexChartRsi = function(_super)
{
function WjFlexChartRsi(elRef, injector, parentCmp)
{
_super.call(this);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjProperty = 'series';
this.renderingNg = new core_1.EventEmitter(!1);
this.renderedNg = new core_1.EventEmitter(!1);
this.visibilityChangePC = new core_1.EventEmitter(!1);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.created()
}
return __extends(WjFlexChartRsi, _super), WjFlexChartRsi.prototype.created = function(){}, WjFlexChartRsi.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartRsi.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartRsi.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartRsi.meta = {
outputs: wjFlexChartRsiMeta.outputs, changeEvents: {'chart.seriesVisibilityChanged': ['visibility']}, siblingId: 'series'
}, WjFlexChartRsi.decorators = [{
type: core_1.Component, args: [{
selector: wjFlexChartRsiMeta.selector, template: wjFlexChartRsiMeta.template, inputs: wjFlexChartRsiMeta.inputs, outputs: wjFlexChartRsiMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartRsi
})
}].concat(wjFlexChartRsiMeta.providers)
}, ]
}, ], WjFlexChartRsi.ctorParameters = [{
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
}, ], WjFlexChartRsi
}(wjcChartFinanceAnalytics.RSI);
exports_1("WjFlexChartRsi", WjFlexChartRsi);
exports_1("wjFlexChartWilliamsRMeta", wjFlexChartWilliamsRMeta = {
selector: 'wj-flex-chart-williams-r', template: "", inputs: ['wjProperty', 'axisX', 'axisY', 'binding', 'bindingX', 'cssClass', 'name', 'style', 'altStyle', 'symbolMarker', 'symbolSize', 'symbolStyle', 'visibility', 'itemsSource', 'period', ], outputs: ['initialized', 'renderingNg: rendering', 'renderedNg: rendered', 'visibilityChangePC: visibilityChange', ], providers: []
});
WjFlexChartWilliamsR = function(_super)
{
function WjFlexChartWilliamsR(elRef, injector, parentCmp)
{
_super.call(this);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjProperty = 'series';
this.renderingNg = new core_1.EventEmitter(!1);
this.renderedNg = new core_1.EventEmitter(!1);
this.visibilityChangePC = new core_1.EventEmitter(!1);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.created()
}
return __extends(WjFlexChartWilliamsR, _super), WjFlexChartWilliamsR.prototype.created = function(){}, WjFlexChartWilliamsR.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartWilliamsR.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartWilliamsR.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartWilliamsR.meta = {
outputs: wjFlexChartWilliamsRMeta.outputs, changeEvents: {'chart.seriesVisibilityChanged': ['visibility']}, siblingId: 'series'
}, WjFlexChartWilliamsR.decorators = [{
type: core_1.Component, args: [{
selector: wjFlexChartWilliamsRMeta.selector, template: wjFlexChartWilliamsRMeta.template, inputs: wjFlexChartWilliamsRMeta.inputs, outputs: wjFlexChartWilliamsRMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartWilliamsR
})
}].concat(wjFlexChartWilliamsRMeta.providers)
}, ]
}, ], WjFlexChartWilliamsR.ctorParameters = [{
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
}, ], WjFlexChartWilliamsR
}(wjcChartFinanceAnalytics.WilliamsR);
exports_1("WjFlexChartWilliamsR", WjFlexChartWilliamsR);
exports_1("wjFlexChartMacdMeta", wjFlexChartMacdMeta = {
selector: 'wj-flex-chart-macd', template: "", inputs: ['wjProperty', 'axisX', 'axisY', 'binding', 'bindingX', 'cssClass', 'name', 'style', 'altStyle', 'symbolMarker', 'symbolSize', 'symbolStyle', 'visibility', 'itemsSource', 'fastPeriod', 'slowPeriod', 'smoothingPeriod', 'styles', ], outputs: ['initialized', 'renderingNg: rendering', 'renderedNg: rendered', 'visibilityChangePC: visibilityChange', ], providers: []
});
WjFlexChartMacd = function(_super)
{
function WjFlexChartMacd(elRef, injector, parentCmp)
{
_super.call(this);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjProperty = 'series';
this.renderingNg = new core_1.EventEmitter(!1);
this.renderedNg = new core_1.EventEmitter(!1);
this.visibilityChangePC = new core_1.EventEmitter(!1);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.created()
}
return __extends(WjFlexChartMacd, _super), WjFlexChartMacd.prototype.created = function(){}, WjFlexChartMacd.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartMacd.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartMacd.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartMacd.meta = {
outputs: wjFlexChartMacdMeta.outputs, changeEvents: {'chart.seriesVisibilityChanged': ['visibility']}, siblingId: 'series'
}, WjFlexChartMacd.decorators = [{
type: core_1.Component, args: [{
selector: wjFlexChartMacdMeta.selector, template: wjFlexChartMacdMeta.template, inputs: wjFlexChartMacdMeta.inputs, outputs: wjFlexChartMacdMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartMacd
})
}].concat(wjFlexChartMacdMeta.providers)
}, ]
}, ], WjFlexChartMacd.ctorParameters = [{
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
}, ], WjFlexChartMacd
}(wjcChartFinanceAnalytics.Macd);
exports_1("WjFlexChartMacd", WjFlexChartMacd);
exports_1("wjFlexChartMacdHistogramMeta", wjFlexChartMacdHistogramMeta = {
selector: 'wj-flex-chart-macd-histogram', template: "", inputs: ['wjProperty', 'axisX', 'axisY', 'binding', 'bindingX', 'cssClass', 'name', 'style', 'altStyle', 'symbolMarker', 'symbolSize', 'symbolStyle', 'visibility', 'itemsSource', 'fastPeriod', 'slowPeriod', 'smoothingPeriod', ], outputs: ['initialized', 'renderingNg: rendering', 'renderedNg: rendered', 'visibilityChangePC: visibilityChange', ], providers: []
});
WjFlexChartMacdHistogram = function(_super)
{
function WjFlexChartMacdHistogram(elRef, injector, parentCmp)
{
_super.call(this);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjProperty = 'series';
this.renderingNg = new core_1.EventEmitter(!1);
this.renderedNg = new core_1.EventEmitter(!1);
this.visibilityChangePC = new core_1.EventEmitter(!1);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.created()
}
return __extends(WjFlexChartMacdHistogram, _super), WjFlexChartMacdHistogram.prototype.created = function(){}, WjFlexChartMacdHistogram.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartMacdHistogram.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartMacdHistogram.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartMacdHistogram.meta = {
outputs: wjFlexChartMacdHistogramMeta.outputs, changeEvents: {'chart.seriesVisibilityChanged': ['visibility']}, siblingId: 'series'
}, WjFlexChartMacdHistogram.decorators = [{
type: core_1.Component, args: [{
selector: wjFlexChartMacdHistogramMeta.selector, template: wjFlexChartMacdHistogramMeta.template, inputs: wjFlexChartMacdHistogramMeta.inputs, outputs: wjFlexChartMacdHistogramMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartMacdHistogram
})
}].concat(wjFlexChartMacdHistogramMeta.providers)
}, ]
}, ], WjFlexChartMacdHistogram.ctorParameters = [{
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
}, ], WjFlexChartMacdHistogram
}(wjcChartFinanceAnalytics.MacdHistogram);
exports_1("WjFlexChartMacdHistogram", WjFlexChartMacdHistogram);
exports_1("wjFlexChartStochasticMeta", wjFlexChartStochasticMeta = {
selector: 'wj-flex-chart-stochastic', template: "", inputs: ['wjProperty', 'axisX', 'axisY', 'binding', 'bindingX', 'cssClass', 'name', 'style', 'altStyle', 'symbolMarker', 'symbolSize', 'symbolStyle', 'visibility', 'itemsSource', 'dPeriod', 'kPeriod', 'smoothingPeriod', 'styles', ], outputs: ['initialized', 'renderingNg: rendering', 'renderedNg: rendered', 'visibilityChangePC: visibilityChange', ], providers: []
});
WjFlexChartStochastic = function(_super)
{
function WjFlexChartStochastic(elRef, injector, parentCmp)
{
_super.call(this);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjProperty = 'series';
this.renderingNg = new core_1.EventEmitter(!1);
this.renderedNg = new core_1.EventEmitter(!1);
this.visibilityChangePC = new core_1.EventEmitter(!1);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.created()
}
return __extends(WjFlexChartStochastic, _super), WjFlexChartStochastic.prototype.created = function(){}, WjFlexChartStochastic.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartStochastic.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartStochastic.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartStochastic.meta = {
outputs: wjFlexChartStochasticMeta.outputs, changeEvents: {'chart.seriesVisibilityChanged': ['visibility']}, siblingId: 'series'
}, WjFlexChartStochastic.decorators = [{
type: core_1.Component, args: [{
selector: wjFlexChartStochasticMeta.selector, template: wjFlexChartStochasticMeta.template, inputs: wjFlexChartStochasticMeta.inputs, outputs: wjFlexChartStochasticMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartStochastic
})
}].concat(wjFlexChartStochasticMeta.providers)
}, ]
}, ], WjFlexChartStochastic.ctorParameters = [{
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
}, ], WjFlexChartStochastic
}(wjcChartFinanceAnalytics.Stochastic);
exports_1("WjFlexChartStochastic", WjFlexChartStochastic);
exports_1("wjFlexChartBollingerBandsMeta", wjFlexChartBollingerBandsMeta = {
selector: 'wj-flex-chart-bollinger-bands', template: "", inputs: ['wjProperty', 'axisX', 'axisY', 'binding', 'bindingX', 'cssClass', 'name', 'style', 'altStyle', 'symbolMarker', 'symbolSize', 'symbolStyle', 'visibility', 'itemsSource', 'period', 'multiplier', ], outputs: ['initialized', 'renderingNg: rendering', 'renderedNg: rendered', 'visibilityChangePC: visibilityChange', ], providers: []
});
WjFlexChartBollingerBands = function(_super)
{
function WjFlexChartBollingerBands(elRef, injector, parentCmp)
{
_super.call(this);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjProperty = 'series';
this.renderingNg = new core_1.EventEmitter(!1);
this.renderedNg = new core_1.EventEmitter(!1);
this.visibilityChangePC = new core_1.EventEmitter(!1);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.created()
}
return __extends(WjFlexChartBollingerBands, _super), WjFlexChartBollingerBands.prototype.created = function(){}, WjFlexChartBollingerBands.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartBollingerBands.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartBollingerBands.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartBollingerBands.meta = {
outputs: wjFlexChartBollingerBandsMeta.outputs, changeEvents: {'chart.seriesVisibilityChanged': ['visibility']}, siblingId: 'series'
}, WjFlexChartBollingerBands.decorators = [{
type: core_1.Component, args: [{
selector: wjFlexChartBollingerBandsMeta.selector, template: wjFlexChartBollingerBandsMeta.template, inputs: wjFlexChartBollingerBandsMeta.inputs, outputs: wjFlexChartBollingerBandsMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartBollingerBands
})
}].concat(wjFlexChartBollingerBandsMeta.providers)
}, ]
}, ], WjFlexChartBollingerBands.ctorParameters = [{
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
}, ], WjFlexChartBollingerBands
}(wjcChartFinanceAnalytics.BollingerBands);
exports_1("WjFlexChartBollingerBands", WjFlexChartBollingerBands);
exports_1("wjFlexChartEnvelopesMeta", wjFlexChartEnvelopesMeta = {
selector: 'wj-flex-chart-envelopes', template: "", inputs: ['wjProperty', 'axisX', 'axisY', 'binding', 'bindingX', 'cssClass', 'name', 'style', 'altStyle', 'symbolMarker', 'symbolSize', 'symbolStyle', 'visibility', 'itemsSource', 'period', 'size', 'type', ], outputs: ['initialized', 'renderingNg: rendering', 'renderedNg: rendered', 'visibilityChangePC: visibilityChange', ], providers: []
});
WjFlexChartEnvelopes = function(_super)
{
function WjFlexChartEnvelopes(elRef, injector, parentCmp)
{
_super.call(this);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjProperty = 'series';
this.renderingNg = new core_1.EventEmitter(!1);
this.renderedNg = new core_1.EventEmitter(!1);
this.visibilityChangePC = new core_1.EventEmitter(!1);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.created()
}
return __extends(WjFlexChartEnvelopes, _super), WjFlexChartEnvelopes.prototype.created = function(){}, WjFlexChartEnvelopes.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartEnvelopes.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartEnvelopes.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartEnvelopes.meta = {
outputs: wjFlexChartEnvelopesMeta.outputs, changeEvents: {'chart.seriesVisibilityChanged': ['visibility']}, siblingId: 'series'
}, WjFlexChartEnvelopes.decorators = [{
type: core_1.Component, args: [{
selector: wjFlexChartEnvelopesMeta.selector, template: wjFlexChartEnvelopesMeta.template, inputs: wjFlexChartEnvelopesMeta.inputs, outputs: wjFlexChartEnvelopesMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartEnvelopes
})
}].concat(wjFlexChartEnvelopesMeta.providers)
}, ]
}, ], WjFlexChartEnvelopes.ctorParameters = [{
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
}, ], WjFlexChartEnvelopes
}(wjcChartFinanceAnalytics.Envelopes);
exports_1("WjFlexChartEnvelopes", WjFlexChartEnvelopes);
moduleExports = [WjFlexChartFibonacci, WjFlexChartFibonacciArcs, WjFlexChartFibonacciFans, WjFlexChartFibonacciTimeZones, WjFlexChartAtr, WjFlexChartCci, WjFlexChartRsi, WjFlexChartWilliamsR, WjFlexChartMacd, WjFlexChartMacdHistogram, WjFlexChartStochastic, WjFlexChartBollingerBands, WjFlexChartEnvelopes];
WjChartFinanceAnalyticsModule = function()
{
function WjChartFinanceAnalyticsModule(){}
return WjChartFinanceAnalyticsModule.decorators = [{
type: core_1.NgModule, args: [{
imports: [wijmo_angular2_directiveBase_1.WjDirectiveBaseModule, common_1.CommonModule], declarations: moduleExports.slice(), exports: moduleExports.slice()
}, ]
}, ], WjChartFinanceAnalyticsModule.ctorParameters = [], WjChartFinanceAnalyticsModule
}();
exports_1("WjChartFinanceAnalyticsModule", WjChartFinanceAnalyticsModule)
}
}
})