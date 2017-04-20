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
System.register(['wijmo/wijmo', '@angular/core', '@angular/common', 'wijmo/wijmo.angular2.directiveBase'], function(exports_1, context_1)
{
"use strict";
var __moduleName=context_1 && context_1.id,
wjcCore,
core_1,
core_2,
core_3,
ngCore,
common_1,
wijmo_angular2_directiveBase_1,
wjTooltipMeta,
WjTooltip,
WjComponentLoader,
moduleExports,
WjCoreModule;
return {
setters: [function(wjcCore_1)
{
wjcCore = wjcCore_1
}, function(core_1_1)
{
core_1 = core_1_1;
core_2 = core_1_1;
core_3 = core_1_1;
ngCore = core_1_1
}, function(common_1_1)
{
common_1 = common_1_1
}, function(wijmo_angular2_directiveBase_1_1)
{
wijmo_angular2_directiveBase_1 = wijmo_angular2_directiveBase_1_1
}], execute: function()
{
exports_1("wjTooltipMeta", wjTooltipMeta = {
selector: '[wjTooltip]', inputs: [], outputs: ['initialized', ], exportAs: 'wjTooltip', providers: []
});
WjTooltip = function()
{
function WjTooltip(elRef, injector, parentCmp)
{
this.isInitialized = !1;
this.initialized = new core_1.EventEmitter(!0);
var behavior=this._wjBehaviour = wijmo_angular2_directiveBase_1.WjDirectiveBehavior.attach(this, elRef, injector, parentCmp);
this._elRef = elRef;
WjTooltip._toolTip || (WjTooltip._toolTip = new wjcCore.Tooltip);
this.created()
}
return WjTooltip.prototype.created = function(){}, WjTooltip.prototype.ngOnInit = function()
{
this._wjBehaviour.ngOnInit()
}, WjTooltip.prototype.ngAfterViewInit = function()
{
this._wjBehaviour.ngAfterViewInit()
}, WjTooltip.prototype.ngOnDestroy = function()
{
this._wjBehaviour.ngOnDestroy();
this.wjTooltip = null
}, Object.defineProperty(WjTooltip.prototype, "wjTooltip", {
get: function()
{
return this._toolTipText
}, set: function(value)
{
this._toolTipText != value && (this._toolTipText != value, WjTooltip._toolTip.setTooltip(this._elRef.nativeElement, value))
}, enumerable: !0, configurable: !0
}), WjTooltip.meta = {outputs: wjTooltipMeta.outputs}, WjTooltip.decorators = [{
type: core_2.Directive, args: [{
selector: wjTooltipMeta.selector, inputs: wjTooltipMeta.inputs, outputs: wjTooltipMeta.outputs, exportAs: wjTooltipMeta.exportAs, providers: [{
provide: 'WjComponent', useExisting: core_2.forwardRef(function()
{
return WjTooltip
})
}].concat(wjTooltipMeta.providers)
}, ]
}, ], WjTooltip.ctorParameters = [{
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
}, ], WjTooltip.propDecorators = {wjTooltip: [{type: core_3.Input}, ]}, WjTooltip
}();
exports_1("WjTooltip", WjTooltip);
WjComponentLoader = function()
{
function WjComponentLoader(_cmpResolver, _elementRef)
{
this._cmpResolver = _cmpResolver;
this._elementRef = _elementRef;
this._isViewInit = !1;
this.propertiesChange = new ngCore.EventEmitter
}
return Object.defineProperty(WjComponentLoader.prototype, "component", {
get: function()
{
return this._component
}, set: function(value)
{
this._component !== value && (this._component = value, this._createComponent())
}, enumerable: !0, configurable: !0
}), Object.defineProperty(WjComponentLoader.prototype, "properties", {
get: function()
{
return this._properties
}, set: function(value)
{
this._properties = value;
this._updateProperties()
}, enumerable: !0, configurable: !0
}), WjComponentLoader.prototype.ngAfterViewInit = function()
{
this._isViewInit = !0;
this._createComponent()
}, WjComponentLoader.prototype._createComponent = function()
{
if (this._isViewInit)
{
this._cmpRef && (this._cmpRef.destroy(), this._cmpRef = null);
var value=this._component;
value && this._anchor && (this._cmpRef = this._anchor.createComponent(this._cmpResolver.resolveComponentFactory(value)), this._updateProperties())
}
}, WjComponentLoader.prototype._updateProperties = function()
{
var cmp=this._cmpRef && this._cmpRef.instance,
properties=this.properties,
propNames,
_i,
propNames_1,
pName,
propChange;
if (cmp && properties)
for (propNames = Object.getOwnPropertyNames(properties), _i = 0, propNames_1 = propNames; _i < propNames_1.length; _i++)
pName = propNames_1[_i],
cmp[pName] = properties[pName],
propChange = cmp[pName + 'Change'],
propChange instanceof core_1.EventEmitter && this._addPropListener(cmp, pName, propChange)
}, WjComponentLoader.prototype._addPropListener = function(component, propName, propChange)
{
var _this=this;
propChange.subscribe(function()
{
_this.properties[propName] = _this.properties[propName] = component[propName];
_this.propertiesChange.next(_this.properties)
})
}, WjComponentLoader.decorators = [{
type: core_1.Component, args: [{
selector: 'wj-component-loader', template: "<div #anchor></div>", inputs: ['component', 'properties'], outputs: ['propertiesChange']
}, ]
}, ], WjComponentLoader.ctorParameters = [{
type: core_1.ComponentFactoryResolver, decorators: [{
type: core_3.Inject, args: [core_1.ComponentFactoryResolver, ]
}, ]
}, {
type: core_2.ElementRef, decorators: [{
type: core_3.Inject, args: [core_2.ElementRef, ]
}, ]
}, ], WjComponentLoader.propDecorators = {_anchor: [{
type: core_1.ViewChild, args: ['anchor', {read: core_2.ViewContainerRef}, ]
}, ]}, WjComponentLoader
}();
exports_1("WjComponentLoader", WjComponentLoader);
moduleExports = [WjTooltip, WjComponentLoader];
WjCoreModule = function()
{
function WjCoreModule(){}
return WjCoreModule.decorators = [{
type: core_1.NgModule, args: [{
imports: [wijmo_angular2_directiveBase_1.WjDirectiveBaseModule, common_1.CommonModule], declarations: moduleExports.slice(), exports: moduleExports.slice()
}, ]
}, ], WjCoreModule.ctorParameters = [], WjCoreModule
}();
exports_1("WjCoreModule", WjCoreModule)
}
}
})