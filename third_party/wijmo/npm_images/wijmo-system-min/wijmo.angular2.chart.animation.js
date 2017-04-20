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
System.register(['wijmo/wijmo.chart.animation', '@angular/core', '@angular/common', 'wijmo/wijmo.angular2.directiveBase'], function(exports_1, context_1)
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
wjcChartAnimation,
core_1,
core_2,
core_3,
common_1,
wijmo_angular2_directiveBase_1,
wjFlexChartAnimationMeta,
WjFlexChartAnimation,
moduleExports,
WjChartAnimationModule;
return {
setters: [function(wjcChartAnimation_1)
{
wjcChartAnimation = wjcChartAnimation_1
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
exports_1("wjFlexChartAnimationMeta", wjFlexChartAnimationMeta = {
selector: 'wj-flex-chart-animation', template: "", inputs: ['wjProperty', 'animationMode', 'easing', 'duration', 'axisAnimation', ], outputs: ['initialized', ], providers: []
});
WjFlexChartAnimation = function(_super)
{
function WjFlexChartAnimation(elRef, injector, parentCmp)
{
_super.call(this, parentCmp);
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this.created()
}
return __extends(WjFlexChartAnimation, _super), WjFlexChartAnimation.prototype.created = function(){}, WjFlexChartAnimation.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjFlexChartAnimation.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjFlexChartAnimation.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy()
}, WjFlexChartAnimation.meta = {outputs: wjFlexChartAnimationMeta.outputs}, WjFlexChartAnimation.decorators = [{
type: core_1.Component, args: [{
selector: wjFlexChartAnimationMeta.selector, template: wjFlexChartAnimationMeta.template, inputs: wjFlexChartAnimationMeta.inputs, outputs: wjFlexChartAnimationMeta.outputs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjFlexChartAnimation
})
}].concat(wjFlexChartAnimationMeta.providers)
}, ]
}, ], WjFlexChartAnimation.ctorParameters = [{
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
}, ], WjFlexChartAnimation
}(wjcChartAnimation.ChartAnimation);
exports_1("WjFlexChartAnimation", WjFlexChartAnimation);
moduleExports = [WjFlexChartAnimation];
WjChartAnimationModule = function()
{
function WjChartAnimationModule(){}
return WjChartAnimationModule.decorators = [{
type: core_1.NgModule, args: [{
imports: [wijmo_angular2_directiveBase_1.WjDirectiveBaseModule, common_1.CommonModule], declarations: moduleExports.slice(), exports: moduleExports.slice()
}, ]
}, ], WjChartAnimationModule.ctorParameters = [], WjChartAnimationModule
}();
exports_1("WjChartAnimationModule", WjChartAnimationModule)
}
}
})