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
System.register(['wijmo/wijmo.chart.analytics', '@angular/core', '@angular/common', 'wijmo/wijmo.angular2.directiveBase'], function(exports_1, context_1)
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
wjcChartAnalytics,
core_1,
core_2,
core_3,
common_1,
wijmo_angular2_directiveBase_1,
wjFlexChartTrendLineMeta,
WjFlexChartTrendLine,
wjFlexChartMovingAverageMeta,
WjFlexChartMovingAverage,
wjFlexChartYFunctionSeriesMeta,
WjFlexChartYFunctionSeries,
wjFlexChartParametricFunctionSeriesMeta,
WjFlexChartParametricFunctionSeries,
wjFlexChartWaterfallMeta,
WjFlexChartWaterfall,
wjFlexChartBoxWhiskerMeta,
WjFlexChartBoxWhisker,
wjFlexChartErrorBarMeta,
WjFlexChartErrorBar,
moduleExports,
WjChartAnalyticsModule;
return {
setters: [function(wjcChartAnalytics_1)
{
wjcChartAnalytics = wjcChartAnalytics_1
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
exports_1("wjFlexChartTrendLineMeta", wjFlexChartTrendLineMeta = {
selector: 'wj-flex-chart-trend-line', template: "", inputs: ['wjProperty', 'axisX', 'axisY', 'binding', 'bindingX', 'cssClass', 'name', 'style', 'altStyle', 'symbolMarker', 'symbolSize', 'symbolStyle', 'visibility', 'itemsSource', 'sampleCount', 'order', 'fitType', ], outputs: ['initialized', 'renderingNg: rendering', 'renderedNg: rendered', 'visibilityChangePC: visibilityChange', ], providers: []
});
WjFlexChartTrendLine = function(_super)
{
function WjFlexChartTrendLine(elRef, injector, parentCmp)
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
return __extends(WjFlexChartTrendLine, _super), WjFlexChartTrendLine.prototype.created = function(){}, WjFlexChartTrendLine.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartTrendLine.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartTrendLine.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartTrendLine.meta = {
outputs: wjFlexChartTrendLineMeta.outputs, changeEvents: {'chart.seriesVisibilityChanged': ['visibility']}, siblingId: 'series'
}, WjFlexChartTrendLine.decorators = [{
type: core_1.Component, args: [{
selector: wjFlexChartTrendLineMeta.selector, template: wjFlexChartTrendLineMeta.template, inputs: wjFlexChartTrendLineMeta.inputs, outputs: wjFlexChartTrendLineMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartTrendLine
})
}].concat(wjFlexChartTrendLineMeta.providers)
}, ]
}, ], WjFlexChartTrendLine.ctorParameters = [{
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
}, ], WjFlexChartTrendLine
}(wjcChartAnalytics.TrendLine);
exports_1("WjFlexChartTrendLine", WjFlexChartTrendLine);
exports_1("wjFlexChartMovingAverageMeta", wjFlexChartMovingAverageMeta = {
selector: 'wj-flex-chart-moving-average', template: "", inputs: ['wjProperty', 'axisX', 'axisY', 'binding', 'bindingX', 'cssClass', 'name', 'style', 'altStyle', 'symbolMarker', 'symbolSize', 'symbolStyle', 'visibility', 'itemsSource', 'sampleCount', 'period', 'type', ], outputs: ['initialized', 'renderingNg: rendering', 'renderedNg: rendered', 'visibilityChangePC: visibilityChange', ], providers: []
});
WjFlexChartMovingAverage = function(_super)
{
function WjFlexChartMovingAverage(elRef, injector, parentCmp)
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
return __extends(WjFlexChartMovingAverage, _super), WjFlexChartMovingAverage.prototype.created = function(){}, WjFlexChartMovingAverage.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartMovingAverage.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartMovingAverage.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartMovingAverage.meta = {
outputs: wjFlexChartMovingAverageMeta.outputs, changeEvents: {'chart.seriesVisibilityChanged': ['visibility']}, siblingId: 'series'
}, WjFlexChartMovingAverage.decorators = [{
type: core_1.Component, args: [{
selector: wjFlexChartMovingAverageMeta.selector, template: wjFlexChartMovingAverageMeta.template, inputs: wjFlexChartMovingAverageMeta.inputs, outputs: wjFlexChartMovingAverageMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartMovingAverage
})
}].concat(wjFlexChartMovingAverageMeta.providers)
}, ]
}, ], WjFlexChartMovingAverage.ctorParameters = [{
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
}, ], WjFlexChartMovingAverage
}(wjcChartAnalytics.MovingAverage);
exports_1("WjFlexChartMovingAverage", WjFlexChartMovingAverage);
exports_1("wjFlexChartYFunctionSeriesMeta", wjFlexChartYFunctionSeriesMeta = {
selector: 'wj-flex-chart-y-function-series', template: "", inputs: ['wjProperty', 'axisX', 'axisY', 'binding', 'bindingX', 'cssClass', 'name', 'style', 'altStyle', 'symbolMarker', 'symbolSize', 'symbolStyle', 'visibility', 'itemsSource', 'sampleCount', 'min', 'max', 'func', ], outputs: ['initialized', 'renderingNg: rendering', 'renderedNg: rendered', 'visibilityChangePC: visibilityChange', ], providers: []
});
WjFlexChartYFunctionSeries = function(_super)
{
function WjFlexChartYFunctionSeries(elRef, injector, parentCmp)
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
return __extends(WjFlexChartYFunctionSeries, _super), WjFlexChartYFunctionSeries.prototype.created = function(){}, WjFlexChartYFunctionSeries.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartYFunctionSeries.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartYFunctionSeries.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartYFunctionSeries.meta = {
outputs: wjFlexChartYFunctionSeriesMeta.outputs, changeEvents: {'chart.seriesVisibilityChanged': ['visibility']}, siblingId: 'series'
}, WjFlexChartYFunctionSeries.decorators = [{
type: core_1.Component, args: [{
selector: wjFlexChartYFunctionSeriesMeta.selector, template: wjFlexChartYFunctionSeriesMeta.template, inputs: wjFlexChartYFunctionSeriesMeta.inputs, outputs: wjFlexChartYFunctionSeriesMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartYFunctionSeries
})
}].concat(wjFlexChartYFunctionSeriesMeta.providers)
}, ]
}, ], WjFlexChartYFunctionSeries.ctorParameters = [{
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
}, ], WjFlexChartYFunctionSeries
}(wjcChartAnalytics.YFunctionSeries);
exports_1("WjFlexChartYFunctionSeries", WjFlexChartYFunctionSeries);
exports_1("wjFlexChartParametricFunctionSeriesMeta", wjFlexChartParametricFunctionSeriesMeta = {
selector: 'wj-flex-chart-parametric-function-series', template: "", inputs: ['wjProperty', 'axisX', 'axisY', 'binding', 'bindingX', 'cssClass', 'name', 'style', 'altStyle', 'symbolMarker', 'symbolSize', 'symbolStyle', 'visibility', 'itemsSource', 'sampleCount', 'min', 'max', 'func', 'xFunc', 'yFunc', ], outputs: ['initialized', 'renderingNg: rendering', 'renderedNg: rendered', 'visibilityChangePC: visibilityChange', ], providers: []
});
WjFlexChartParametricFunctionSeries = function(_super)
{
function WjFlexChartParametricFunctionSeries(elRef, injector, parentCmp)
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
return __extends(WjFlexChartParametricFunctionSeries, _super), WjFlexChartParametricFunctionSeries.prototype.created = function(){}, WjFlexChartParametricFunctionSeries.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartParametricFunctionSeries.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartParametricFunctionSeries.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartParametricFunctionSeries.meta = {
outputs: wjFlexChartParametricFunctionSeriesMeta.outputs, changeEvents: {'chart.seriesVisibilityChanged': ['visibility']}, siblingId: 'series'
}, WjFlexChartParametricFunctionSeries.decorators = [{
type: core_1.Component, args: [{
selector: wjFlexChartParametricFunctionSeriesMeta.selector, template: wjFlexChartParametricFunctionSeriesMeta.template, inputs: wjFlexChartParametricFunctionSeriesMeta.inputs, outputs: wjFlexChartParametricFunctionSeriesMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartParametricFunctionSeries
})
}].concat(wjFlexChartParametricFunctionSeriesMeta.providers)
}, ]
}, ], WjFlexChartParametricFunctionSeries.ctorParameters = [{
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
}, ], WjFlexChartParametricFunctionSeries
}(wjcChartAnalytics.ParametricFunctionSeries);
exports_1("WjFlexChartParametricFunctionSeries", WjFlexChartParametricFunctionSeries);
exports_1("wjFlexChartWaterfallMeta", wjFlexChartWaterfallMeta = {
selector: 'wj-flex-chart-waterfall', template: "", inputs: ['wjProperty', 'axisX', 'axisY', 'binding', 'bindingX', 'cssClass', 'name', 'style', 'altStyle', 'symbolMarker', 'symbolSize', 'symbolStyle', 'visibility', 'itemsSource', 'relativeData', 'start', 'startLabel', 'showTotal', 'totalLabel', 'showIntermediateTotal', 'intermediateTotalPositions', 'intermediateTotalLabels', 'connectorLines', 'styles', ], outputs: ['initialized', 'renderingNg: rendering', 'renderedNg: rendered', 'visibilityChangePC: visibilityChange', ], providers: []
});
WjFlexChartWaterfall = function(_super)
{
function WjFlexChartWaterfall(elRef, injector, parentCmp)
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
return __extends(WjFlexChartWaterfall, _super), WjFlexChartWaterfall.prototype.created = function(){}, WjFlexChartWaterfall.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartWaterfall.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartWaterfall.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartWaterfall.meta = {
outputs: wjFlexChartWaterfallMeta.outputs, changeEvents: {'chart.seriesVisibilityChanged': ['visibility']}, siblingId: 'series'
}, WjFlexChartWaterfall.decorators = [{
type: core_1.Component, args: [{
selector: wjFlexChartWaterfallMeta.selector, template: wjFlexChartWaterfallMeta.template, inputs: wjFlexChartWaterfallMeta.inputs, outputs: wjFlexChartWaterfallMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartWaterfall
})
}].concat(wjFlexChartWaterfallMeta.providers)
}, ]
}, ], WjFlexChartWaterfall.ctorParameters = [{
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
}, ], WjFlexChartWaterfall
}(wjcChartAnalytics.Waterfall);
exports_1("WjFlexChartWaterfall", WjFlexChartWaterfall);
exports_1("wjFlexChartBoxWhiskerMeta", wjFlexChartBoxWhiskerMeta = {
selector: 'wj-flex-chart-box-whisker', template: "", inputs: ['wjProperty', 'axisX', 'axisY', 'binding', 'bindingX', 'cssClass', 'name', 'style', 'altStyle', 'symbolMarker', 'symbolSize', 'symbolStyle', 'visibility', 'itemsSource', 'quartileCalculation', 'groupWidth', 'gapWidth', 'showMeanLine', 'meanLineStyle', 'showMeanMarker', 'meanMarkerStyle', 'showInnerPoints', 'showOutliers', ], outputs: ['initialized', 'renderingNg: rendering', 'renderedNg: rendered', 'visibilityChangePC: visibilityChange', ], providers: []
});
WjFlexChartBoxWhisker = function(_super)
{
function WjFlexChartBoxWhisker(elRef, injector, parentCmp)
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
return __extends(WjFlexChartBoxWhisker, _super), WjFlexChartBoxWhisker.prototype.created = function(){}, WjFlexChartBoxWhisker.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartBoxWhisker.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartBoxWhisker.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartBoxWhisker.meta = {
outputs: wjFlexChartBoxWhiskerMeta.outputs, changeEvents: {'chart.seriesVisibilityChanged': ['visibility']}, siblingId: 'series'
}, WjFlexChartBoxWhisker.decorators = [{
type: core_1.Component, args: [{
selector: wjFlexChartBoxWhiskerMeta.selector, template: wjFlexChartBoxWhiskerMeta.template, inputs: wjFlexChartBoxWhiskerMeta.inputs, outputs: wjFlexChartBoxWhiskerMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartBoxWhisker
})
}].concat(wjFlexChartBoxWhiskerMeta.providers)
}, ]
}, ], WjFlexChartBoxWhisker.ctorParameters = [{
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
}, ], WjFlexChartBoxWhisker
}(wjcChartAnalytics.BoxWhisker);
exports_1("WjFlexChartBoxWhisker", WjFlexChartBoxWhisker);
exports_1("wjFlexChartErrorBarMeta", wjFlexChartErrorBarMeta = {
selector: 'wj-flex-chart-error-bar', template: "", inputs: ['wjProperty', 'axisX', 'axisY', 'binding', 'bindingX', 'cssClass', 'name', 'style', 'altStyle', 'symbolMarker', 'symbolSize', 'symbolStyle', 'visibility', 'itemsSource', 'chartType', 'errorBarStyle', 'value', 'errorAmount', 'endStyle', 'direction', ], outputs: ['initialized', 'renderingNg: rendering', 'renderedNg: rendered', 'visibilityChangePC: visibilityChange', ], providers: []
});
WjFlexChartErrorBar = function(_super)
{
function WjFlexChartErrorBar(elRef, injector, parentCmp)
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
return __extends(WjFlexChartErrorBar, _super), WjFlexChartErrorBar.prototype.created = function(){}, WjFlexChartErrorBar.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartErrorBar.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartErrorBar.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartErrorBar.meta = {
outputs: wjFlexChartErrorBarMeta.outputs, changeEvents: {'chart.seriesVisibilityChanged': ['visibility']}, siblingId: 'series'
}, WjFlexChartErrorBar.decorators = [{
type: core_1.Component, args: [{
selector: wjFlexChartErrorBarMeta.selector, template: wjFlexChartErrorBarMeta.template, inputs: wjFlexChartErrorBarMeta.inputs, outputs: wjFlexChartErrorBarMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartErrorBar
})
}].concat(wjFlexChartErrorBarMeta.providers)
}, ]
}, ], WjFlexChartErrorBar.ctorParameters = [{
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
}, ], WjFlexChartErrorBar
}(wjcChartAnalytics.ErrorBar);
exports_1("WjFlexChartErrorBar", WjFlexChartErrorBar);
moduleExports = [WjFlexChartTrendLine, WjFlexChartMovingAverage, WjFlexChartYFunctionSeries, WjFlexChartParametricFunctionSeries, WjFlexChartWaterfall, WjFlexChartBoxWhisker, WjFlexChartErrorBar];
WjChartAnalyticsModule = function()
{
function WjChartAnalyticsModule(){}
return WjChartAnalyticsModule.decorators = [{
type: core_1.NgModule, args: [{
imports: [wijmo_angular2_directiveBase_1.WjDirectiveBaseModule, common_1.CommonModule], declarations: moduleExports.slice(), exports: moduleExports.slice()
}, ]
}, ], WjChartAnalyticsModule.ctorParameters = [], WjChartAnalyticsModule
}();
exports_1("WjChartAnalyticsModule", WjChartAnalyticsModule)
}
}
})