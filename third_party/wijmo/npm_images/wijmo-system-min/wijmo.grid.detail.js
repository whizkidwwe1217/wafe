﻿/*
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
System.register(['wijmo/wijmo.grid','wijmo/wijmo','wijmo/wijmo.grid.detail'],function(n,t){"use strict";var c=t&&t.id,o=this&&this.__extends||function(n,t){function r(){this.constructor=n}for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);n.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)},u,r,s,f,h,e,i;return{setters:[function(n){u=n},function(n){r=n},function(n){s=n}],execute:function(){window.wijmo=window.wijmo||{};window.wijmo.grid=window.wijmo.grid||{};window.wijmo.grid.detail=s,function(n){n[n.Code=0]="Code";n[n.Selection=1]="Selection";n[n.ExpandSingle=2]="ExpandSingle";n[n.ExpandMulti=3]="ExpandMulti"}(f||(f={}));n("DetailVisibilityMode",f);h=function(){function n(n,t){var u=this;this._mode=f.ExpandSingle;this._animated=!1;this._g=n;n.mergeManager=new e(n);n.rowHeaders.hostElement.addEventListener('click',this._hdrClick.bind(this));n.formatItem.addHandler(this._formatItem,this);n.selectionChanged.addHandler(this._selectionChanged,this);n.resizedRow.addHandler(this._resizedRow,this);n.loadingRows.addHandler(function(){u.hideDetail()});n.draggingRow.addHandler(function(n,t){t.row<n.rows.length-1&&n.rows[t.row+1]instanceof i&&(t.cancel=!0,u.hideDetail(t.row))});n.formatItem.addHandler(function(n,t){if(t.panel==n.cells){var r=n.rows[t.row];r instanceof i&&(t.cell.style.left='0')}});t&&r.copy(this,t)}return Object.defineProperty(n.prototype,"grid",{get:function(){return this._g},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"detailVisibilityMode",{get:function(){return this._mode},set:function(n){n!=this._mode&&(this._mode=r.asEnum(n,f),this.hideDetail(),this._g.invalidate())},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"maxHeight",{get:function(){return this._maxHeight},set:function(n){this._maxHeight=r.asNumber(n,!0)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"isAnimated",{get:function(){return this._animated},set:function(n){n!=this._animated&&(this._animated=r.asBoolean(n))},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"createDetailCell",{get:function(){return this._createDetailCellFn},set:function(n){this._createDetailCellFn=r.asFunction(n,!0)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"disposeDetailCell",{get:function(){return this._disposeDetailCellFn},set:function(n){this._disposeDetailCellFn=r.asFunction(n,!0)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"rowHasDetail",{get:function(){return this._rowHasDetailFn},set:function(n){this._rowHasDetailFn=r.asFunction(n,!0)},enumerable:!0,configurable:!0}),n.prototype.isDetailVisible=function(n){var t=this._g.rows;return(n=this._toIndex(n),t[n]instanceof i)?!0:n<t.length-1&&t[n+1]instanceof i?!0:!1},n.prototype.isDetailAvailable=function(n){var t=this._g.rows;return n=this._toIndex(n),this._hasDetail(n)},n.prototype.hideDetail=function(n){var t=this._g.rows,u,f;if(n==null){for(u=0;u<t.length;u++)t[u]instanceof i&&this.hideDetail(u);return}n=this._toIndex(n);!(t[n]instanceof i)&&n<t.length-1&&t[n+1]instanceof i&&n++;f=t[n];f instanceof i&&(this.disposeDetailCell&&this.disposeDetailCell(f),r.Control.disposeAll(f.detail),t.removeAt(n))},n.prototype.showDetail=function(n,t){var s,u,e,o,h,c,f;if(t===void 0&&(t=!1),s=this._g,u=s.rows,n=this._toIndex(n),!this.isDetailVisible(n)&&this._hasDetail(n)&&(e=new i(u[n]),e.detail=this._createDetailCell(u[n]),e.detail&&(this._animated?(o=e.detail.style,o.transform='translateY(-100%)',o.opacity='0',u.insert(n+1,e),r.animate(function(t){t<1?(o.transform='translateY('+(-(1-t)*100).toFixed(0)+'%)',o.opacity=(t*t).toString()):(o.transform='',o.opacity='',r.Control.invalidateAll(e.detail),s.scrollIntoView(n,-1))})):(u.insert(n+1,e),s.scrollIntoView(n,-1)))),t){for(h=s.selection,c=!1,n>0&&u[n]instanceof i&&n--,f=0;f<u.length-1;f++)f!=n&&u[f+1]instanceof i&&(this.hideDetail(f),f<n&&n--,f<h.row&&(h.row--,h.row2--,c=!0));c&&s.select(h,!1)}},n.prototype._toIndex=function(n){return n instanceof u.Row&&(n=n.index),r.asNumber(n,!1,!0)},n.prototype._hdrClick=function(n){var i,t,r;if(!n.defaultPrevented)switch(this._mode){case f.ExpandMulti:case f.ExpandSingle:i=this._g;t=i.hitTest(n);t.row>-1&&(r=i.rows[t.row],this.isDetailVisible(t.row)?this.hideDetail(t.row):(i.select(new u.CellRange(t.row,0,t.row,i.columns.length-1)),this.showDetail(t.row,this._mode==f.ExpandSingle)),n.preventDefault())}},n.prototype._selectionChanged=function(n){var t=this;this._mode==f.Selection&&(this._toSel&&clearTimeout(this._toSel),this._toSel=setTimeout(function(){n.selection.row>-1?t.showDetail(n.selection.row,!0):t.hideDetail()},300))},n.prototype._formatItem=function(n,t){var e=this._g,u=t.panel.rows[t.row],h,o,s,c;t.panel==e.cells&&u instanceof i&&u.detail!=null&&(r.addClass(t.cell,'wj-detail'),t.cell.textContent='',t.cell.style.textAlign='',t.cell.appendChild(u.detail),u.height==null?(r.Control.refreshAll(t.cell),h=getComputedStyle(t.cell),o=u.detail.scrollHeight+parseInt(h.paddingTop)+parseInt(h.paddingBottom),this._maxHeight>0&&o>this._maxHeight&&(o=this._maxHeight),u.height=o,u.detail.style.height||(u.detail.style.height='100%'),s=u.detail.querySelector('.wj-flexgrid'),s&&!s.style.height&&(s.style.height='100%')):setTimeout(function(){r.Control.refreshAll(u.detail)}));(this._mode==f.ExpandMulti||this._mode==f.ExpandSingle)&&t.panel==e.rowHeaders&&t.col==0&&this._hasDetail(t.row)&&(c=t.row<e.rows.length-1&&e.rows[t.row+1]instanceof i,t.cell.innerHTML=c?'<span class="wj-glyph-minus"></span>':'<span class="wj-glyph-plus"></span>')},n.prototype._resizedRow=function(n,t){var u=t.panel.rows[t.row];u instanceof i&&u.detail&&r.Control.refreshAll(u.detail)},n.prototype._hasVisibleDetail=function(n){return n instanceof i||n instanceof u.GroupRow||n instanceof u._NewRowTemplate?!1:!0},n.prototype._hasDetail=function(n){return r.isFunction(this._rowHasDetailFn)?this._rowHasDetailFn(this._g.rows[n]):!0},n.prototype._createDetailCell=function(n,t){return this.createDetailCell?this.createDetailCell(n,t):null},n}();n("FlexGridDetailProvider",h);e=function(n){function t(t){n.call(this,t)}return o(t,n),t.prototype.getMergedRange=function(t,r,f,e){e===void 0&&(e=!0);switch(t.cellType){case u.CellType.Cell:if(t.rows[r]instanceof i)return new u.CellRange(r,0,r,t.columns.length-1);break;case u.CellType.RowHeader:if(t.rows[r]instanceof i)return new u.CellRange(r-1,f,r,f);if(r<t.rows.length-1&&t.rows[r+1]instanceof i)return new u.CellRange(r,f,r+1,f)}return n.prototype.getMergedRange.call(this,t,r,f,e)},t}(u.MergeManager);n("DetailMergeManager",e);i=function(n){function t(){n.call(this);this.isReadOnly=!0}return o(t,n),Object.defineProperty(t.prototype,"detail",{get:function(){return this._detail},set:function(n){this._detail=n},enumerable:!0,configurable:!0}),t}(u.Row);n("DetailRow",i)}}})