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
System.register(['wijmo/wijmo.chart.annotation', '@angular/core', '@angular/common', 'wijmo/wijmo.angular2.directiveBase'], function(exports_1, context_1)
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
wjcChartAnnotation,
core_1,
core_2,
core_3,
common_1,
wijmo_angular2_directiveBase_1,
wjFlexChartAnnotationLayerMeta,
WjFlexChartAnnotationLayer,
wjFlexChartAnnotationTextMeta,
WjFlexChartAnnotationText,
wjFlexChartAnnotationEllipseMeta,
WjFlexChartAnnotationEllipse,
wjFlexChartAnnotationRectangleMeta,
WjFlexChartAnnotationRectangle,
wjFlexChartAnnotationLineMeta,
WjFlexChartAnnotationLine,
wjFlexChartAnnotationPolygonMeta,
WjFlexChartAnnotationPolygon,
wjFlexChartAnnotationCircleMeta,
WjFlexChartAnnotationCircle,
wjFlexChartAnnotationSquareMeta,
WjFlexChartAnnotationSquare,
wjFlexChartAnnotationImageMeta,
WjFlexChartAnnotationImage,
moduleExports,
WjChartAnnotationModule;
return {
setters: [function(wjcChartAnnotation_1)
{
wjcChartAnnotation = wjcChartAnnotation_1
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
exports_1("wjFlexChartAnnotationLayerMeta", wjFlexChartAnnotationLayerMeta = {
selector: 'wj-flex-chart-annotation-layer', template: "<div><ng-content></ng-content></div>", inputs: ['wjProperty', ], outputs: ['initialized', ], providers: []
});
WjFlexChartAnnotationLayer = function(_super)
{
function WjFlexChartAnnotationLayer(elRef, injector, parentCmp)
{
_super.call(this, parentCmp);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.created()
}
return __extends(WjFlexChartAnnotationLayer, _super), WjFlexChartAnnotationLayer.prototype.created = function(){}, WjFlexChartAnnotationLayer.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartAnnotationLayer.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartAnnotationLayer.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartAnnotationLayer.meta = {outputs: wjFlexChartAnnotationLayerMeta.outputs}, WjFlexChartAnnotationLayer.decorators = [{
type: core_1.Component, args: [{
selector: wjFlexChartAnnotationLayerMeta.selector, template: wjFlexChartAnnotationLayerMeta.template, inputs: wjFlexChartAnnotationLayerMeta.inputs, outputs: wjFlexChartAnnotationLayerMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartAnnotationLayer
})
}].concat(wjFlexChartAnnotationLayerMeta.providers)
}, ]
}, ], WjFlexChartAnnotationLayer.ctorParameters = [{
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
}, ], WjFlexChartAnnotationLayer
}(wjcChartAnnotation.AnnotationLayer);
exports_1("WjFlexChartAnnotationLayer", WjFlexChartAnnotationLayer);
exports_1("wjFlexChartAnnotationTextMeta", wjFlexChartAnnotationTextMeta = {
selector: 'wj-flex-chart-annotation-text', template: "<div><ng-content></ng-content></div>", inputs: ['wjProperty', 'type', 'attachment', 'position', 'point', 'seriesIndex', 'pointIndex', 'offset', 'style', 'isVisible', 'tooltip', 'text', 'content', 'name', 'width', 'height', 'start', 'end', 'radius', 'length', 'href', ], outputs: ['initialized', ], providers: []
});
WjFlexChartAnnotationText = function(_super)
{
function WjFlexChartAnnotationText(elRef, injector, parentCmp)
{
_super.call(this);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjProperty = 'items';
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.created()
}
return __extends(WjFlexChartAnnotationText, _super), WjFlexChartAnnotationText.prototype.created = function(){}, WjFlexChartAnnotationText.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartAnnotationText.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartAnnotationText.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartAnnotationText.meta = {outputs: wjFlexChartAnnotationTextMeta.outputs}, WjFlexChartAnnotationText.decorators = [{
type: core_1.Component, args: [{
selector: wjFlexChartAnnotationTextMeta.selector, template: wjFlexChartAnnotationTextMeta.template, inputs: wjFlexChartAnnotationTextMeta.inputs, outputs: wjFlexChartAnnotationTextMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartAnnotationText
})
}].concat(wjFlexChartAnnotationTextMeta.providers)
}, ]
}, ], WjFlexChartAnnotationText.ctorParameters = [{
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
}, ], WjFlexChartAnnotationText
}(wjcChartAnnotation.Text);
exports_1("WjFlexChartAnnotationText", WjFlexChartAnnotationText);
exports_1("wjFlexChartAnnotationEllipseMeta", wjFlexChartAnnotationEllipseMeta = {
selector: 'wj-flex-chart-annotation-ellipse', template: "<div><ng-content></ng-content></div>", inputs: ['wjProperty', 'type', 'attachment', 'position', 'point', 'seriesIndex', 'pointIndex', 'offset', 'style', 'isVisible', 'tooltip', 'text', 'content', 'name', 'width', 'height', 'start', 'end', 'radius', 'length', 'href', ], outputs: ['initialized', ], providers: []
});
WjFlexChartAnnotationEllipse = function(_super)
{
function WjFlexChartAnnotationEllipse(elRef, injector, parentCmp)
{
_super.call(this);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjProperty = 'items';
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.created()
}
return __extends(WjFlexChartAnnotationEllipse, _super), WjFlexChartAnnotationEllipse.prototype.created = function(){}, WjFlexChartAnnotationEllipse.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartAnnotationEllipse.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartAnnotationEllipse.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartAnnotationEllipse.meta = {outputs: wjFlexChartAnnotationEllipseMeta.outputs}, WjFlexChartAnnotationEllipse.decorators = [{
type: core_1.Component, args: [{
selector: wjFlexChartAnnotationEllipseMeta.selector, template: wjFlexChartAnnotationEllipseMeta.template, inputs: wjFlexChartAnnotationEllipseMeta.inputs, outputs: wjFlexChartAnnotationEllipseMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartAnnotationEllipse
})
}].concat(wjFlexChartAnnotationEllipseMeta.providers)
}, ]
}, ], WjFlexChartAnnotationEllipse.ctorParameters = [{
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
}, ], WjFlexChartAnnotationEllipse
}(wjcChartAnnotation.Ellipse);
exports_1("WjFlexChartAnnotationEllipse", WjFlexChartAnnotationEllipse);
exports_1("wjFlexChartAnnotationRectangleMeta", wjFlexChartAnnotationRectangleMeta = {
selector: 'wj-flex-chart-annotation-rectangle', template: "<div><ng-content></ng-content></div>", inputs: ['wjProperty', 'type', 'attachment', 'position', 'point', 'seriesIndex', 'pointIndex', 'offset', 'style', 'isVisible', 'tooltip', 'text', 'content', 'name', 'width', 'height', 'start', 'end', 'radius', 'length', 'href', ], outputs: ['initialized', ], providers: []
});
WjFlexChartAnnotationRectangle = function(_super)
{
function WjFlexChartAnnotationRectangle(elRef, injector, parentCmp)
{
_super.call(this);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjProperty = 'items';
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.created()
}
return __extends(WjFlexChartAnnotationRectangle, _super), WjFlexChartAnnotationRectangle.prototype.created = function(){}, WjFlexChartAnnotationRectangle.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartAnnotationRectangle.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartAnnotationRectangle.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartAnnotationRectangle.meta = {outputs: wjFlexChartAnnotationRectangleMeta.outputs}, WjFlexChartAnnotationRectangle.decorators = [{
type: core_1.Component, args: [{
selector: wjFlexChartAnnotationRectangleMeta.selector, template: wjFlexChartAnnotationRectangleMeta.template, inputs: wjFlexChartAnnotationRectangleMeta.inputs, outputs: wjFlexChartAnnotationRectangleMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartAnnotationRectangle
})
}].concat(wjFlexChartAnnotationRectangleMeta.providers)
}, ]
}, ], WjFlexChartAnnotationRectangle.ctorParameters = [{
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
}, ], WjFlexChartAnnotationRectangle
}(wjcChartAnnotation.Rectangle);
exports_1("WjFlexChartAnnotationRectangle", WjFlexChartAnnotationRectangle);
exports_1("wjFlexChartAnnotationLineMeta", wjFlexChartAnnotationLineMeta = {
selector: 'wj-flex-chart-annotation-line', template: "<div><ng-content></ng-content></div>", inputs: ['wjProperty', 'type', 'attachment', 'position', 'point', 'seriesIndex', 'pointIndex', 'offset', 'style', 'isVisible', 'tooltip', 'text', 'content', 'name', 'width', 'height', 'start', 'end', 'radius', 'length', 'href', ], outputs: ['initialized', ], providers: []
});
WjFlexChartAnnotationLine = function(_super)
{
function WjFlexChartAnnotationLine(elRef, injector, parentCmp)
{
_super.call(this);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjProperty = 'items';
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.created()
}
return __extends(WjFlexChartAnnotationLine, _super), WjFlexChartAnnotationLine.prototype.created = function(){}, WjFlexChartAnnotationLine.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartAnnotationLine.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartAnnotationLine.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartAnnotationLine.meta = {outputs: wjFlexChartAnnotationLineMeta.outputs}, WjFlexChartAnnotationLine.decorators = [{
type: core_1.Component, args: [{
selector: wjFlexChartAnnotationLineMeta.selector, template: wjFlexChartAnnotationLineMeta.template, inputs: wjFlexChartAnnotationLineMeta.inputs, outputs: wjFlexChartAnnotationLineMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartAnnotationLine
})
}].concat(wjFlexChartAnnotationLineMeta.providers)
}, ]
}, ], WjFlexChartAnnotationLine.ctorParameters = [{
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
}, ], WjFlexChartAnnotationLine
}(wjcChartAnnotation.Line);
exports_1("WjFlexChartAnnotationLine", WjFlexChartAnnotationLine);
exports_1("wjFlexChartAnnotationPolygonMeta", wjFlexChartAnnotationPolygonMeta = {
selector: 'wj-flex-chart-annotation-polygon', template: "<div><ng-content></ng-content></div>", inputs: ['wjProperty', 'type', 'attachment', 'position', 'point', 'seriesIndex', 'pointIndex', 'offset', 'style', 'isVisible', 'tooltip', 'text', 'content', 'name', 'width', 'height', 'start', 'end', 'radius', 'length', 'href', ], outputs: ['initialized', ], providers: []
});
WjFlexChartAnnotationPolygon = function(_super)
{
function WjFlexChartAnnotationPolygon(elRef, injector, parentCmp)
{
_super.call(this);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjProperty = 'items';
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.created()
}
return __extends(WjFlexChartAnnotationPolygon, _super), WjFlexChartAnnotationPolygon.prototype.created = function(){}, WjFlexChartAnnotationPolygon.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartAnnotationPolygon.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartAnnotationPolygon.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartAnnotationPolygon.meta = {outputs: wjFlexChartAnnotationPolygonMeta.outputs}, WjFlexChartAnnotationPolygon.decorators = [{
type: core_1.Component, args: [{
selector: wjFlexChartAnnotationPolygonMeta.selector, template: wjFlexChartAnnotationPolygonMeta.template, inputs: wjFlexChartAnnotationPolygonMeta.inputs, outputs: wjFlexChartAnnotationPolygonMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartAnnotationPolygon
})
}].concat(wjFlexChartAnnotationPolygonMeta.providers)
}, ]
}, ], WjFlexChartAnnotationPolygon.ctorParameters = [{
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
}, ], WjFlexChartAnnotationPolygon
}(wjcChartAnnotation.Polygon);
exports_1("WjFlexChartAnnotationPolygon", WjFlexChartAnnotationPolygon);
exports_1("wjFlexChartAnnotationCircleMeta", wjFlexChartAnnotationCircleMeta = {
selector: 'wj-flex-chart-annotation-circle', template: "<div><ng-content></ng-content></div>", inputs: ['wjProperty', 'type', 'attachment', 'position', 'point', 'seriesIndex', 'pointIndex', 'offset', 'style', 'isVisible', 'tooltip', 'text', 'content', 'name', 'width', 'height', 'start', 'end', 'radius', 'length', 'href', ], outputs: ['initialized', ], providers: []
});
WjFlexChartAnnotationCircle = function(_super)
{
function WjFlexChartAnnotationCircle(elRef, injector, parentCmp)
{
_super.call(this);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjProperty = 'items';
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.created()
}
return __extends(WjFlexChartAnnotationCircle, _super), WjFlexChartAnnotationCircle.prototype.created = function(){}, WjFlexChartAnnotationCircle.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartAnnotationCircle.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartAnnotationCircle.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartAnnotationCircle.meta = {outputs: wjFlexChartAnnotationCircleMeta.outputs}, WjFlexChartAnnotationCircle.decorators = [{
type: core_1.Component, args: [{
selector: wjFlexChartAnnotationCircleMeta.selector, template: wjFlexChartAnnotationCircleMeta.template, inputs: wjFlexChartAnnotationCircleMeta.inputs, outputs: wjFlexChartAnnotationCircleMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartAnnotationCircle
})
}].concat(wjFlexChartAnnotationCircleMeta.providers)
}, ]
}, ], WjFlexChartAnnotationCircle.ctorParameters = [{
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
}, ], WjFlexChartAnnotationCircle
}(wjcChartAnnotation.Circle);
exports_1("WjFlexChartAnnotationCircle", WjFlexChartAnnotationCircle);
exports_1("wjFlexChartAnnotationSquareMeta", wjFlexChartAnnotationSquareMeta = {
selector: 'wj-flex-chart-annotation-square', template: "<div><ng-content></ng-content></div>", inputs: ['wjProperty', 'type', 'attachment', 'position', 'point', 'seriesIndex', 'pointIndex', 'offset', 'style', 'isVisible', 'tooltip', 'text', 'content', 'name', 'width', 'height', 'start', 'end', 'radius', 'length', 'href', ], outputs: ['initialized', ], providers: []
});
WjFlexChartAnnotationSquare = function(_super)
{
function WjFlexChartAnnotationSquare(elRef, injector, parentCmp)
{
_super.call(this);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjProperty = 'items';
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.created()
}
return __extends(WjFlexChartAnnotationSquare, _super), WjFlexChartAnnotationSquare.prototype.created = function(){}, WjFlexChartAnnotationSquare.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartAnnotationSquare.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartAnnotationSquare.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartAnnotationSquare.meta = {outputs: wjFlexChartAnnotationSquareMeta.outputs}, WjFlexChartAnnotationSquare.decorators = [{
type: core_1.Component, args: [{
selector: wjFlexChartAnnotationSquareMeta.selector, template: wjFlexChartAnnotationSquareMeta.template, inputs: wjFlexChartAnnotationSquareMeta.inputs, outputs: wjFlexChartAnnotationSquareMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartAnnotationSquare
})
}].concat(wjFlexChartAnnotationSquareMeta.providers)
}, ]
}, ], WjFlexChartAnnotationSquare.ctorParameters = [{
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
}, ], WjFlexChartAnnotationSquare
}(wjcChartAnnotation.Square);
exports_1("WjFlexChartAnnotationSquare", WjFlexChartAnnotationSquare);
exports_1("wjFlexChartAnnotationImageMeta", wjFlexChartAnnotationImageMeta = {
selector: 'wj-flex-chart-annotation-image', template: "<div><ng-content></ng-content></div>", inputs: ['wjProperty', 'type', 'attachment', 'position', 'point', 'seriesIndex', 'pointIndex', 'offset', 'style', 'isVisible', 'tooltip', 'text', 'content', 'name', 'width', 'height', 'start', 'end', 'radius', 'length', 'href', ], outputs: ['initialized', ], providers: []
});
WjFlexChartAnnotationImage = function(_super)
{
function WjFlexChartAnnotationImage(elRef, injector, parentCmp)
{
_super.call(this);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
this.wjProperty = 'items';
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.created()
}
return __extends(WjFlexChartAnnotationImage, _super), WjFlexChartAnnotationImage.prototype.created = function(){}, WjFlexChartAnnotationImage.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartAnnotationImage.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartAnnotationImage.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartAnnotationImage.meta = {outputs: wjFlexChartAnnotationImageMeta.outputs}, WjFlexChartAnnotationImage.decorators = [{
type: core_1.Component, args: [{
selector: wjFlexChartAnnotationImageMeta.selector, template: wjFlexChartAnnotationImageMeta.template, inputs: wjFlexChartAnnotationImageMeta.inputs, outputs: wjFlexChartAnnotationImageMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartAnnotationImage
})
}].concat(wjFlexChartAnnotationImageMeta.providers)
}, ]
}, ], WjFlexChartAnnotationImage.ctorParameters = [{
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
}, ], WjFlexChartAnnotationImage
}(wjcChartAnnotation.Image);
exports_1("WjFlexChartAnnotationImage", WjFlexChartAnnotationImage);
moduleExports = [WjFlexChartAnnotationLayer, WjFlexChartAnnotationText, WjFlexChartAnnotationEllipse, WjFlexChartAnnotationRectangle, WjFlexChartAnnotationLine, WjFlexChartAnnotationPolygon, WjFlexChartAnnotationCircle, WjFlexChartAnnotationSquare, WjFlexChartAnnotationImage];
WjChartAnnotationModule = function()
{
function WjChartAnnotationModule(){}
return WjChartAnnotationModule.decorators = [{
type: core_1.NgModule, args: [{
imports: [wijmo_angular2_directiveBase_1.WjDirectiveBaseModule, common_1.CommonModule], declarations: moduleExports.slice(), exports: moduleExports.slice()
}, ]
}, ], WjChartAnnotationModule.ctorParameters = [], WjChartAnnotationModule
}();
exports_1("WjChartAnnotationModule", WjChartAnnotationModule)
}
}
})