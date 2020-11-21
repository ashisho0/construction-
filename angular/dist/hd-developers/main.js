(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ave70011/freelance/abhinna-website/angular/src/main.ts */"zUnb");


/***/ }),

/***/ "6/Vx":
/*!*****************************************************************************!*\
  !*** ./src/app/projects/hex-grid-container/hex-grid-container.component.ts ***!
  \*****************************************************************************/
/*! exports provided: HexGridContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HexGridContainerComponent", function() { return HexGridContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _hex_grid_item_hex_grid_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hex-grid-item/hex-grid-item.component */ "6IXM");




function HexGridContainerComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hex-grid-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r1);
} }
class HexGridContainerComponent {
    constructor() {
        this.items = [...Array(15).keys()].map(x => (x + 1).toString());
    }
    ngOnInit() {
    }
}
HexGridContainerComponent.ɵfac = function HexGridContainerComponent_Factory(t) { return new (t || HexGridContainerComponent)(); };
HexGridContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HexGridContainerComponent, selectors: [["hex-grid-container"]], decls: 2, vars: 1, consts: [[1, "hex-grid__list"], ["class", "hex-grid__item", 4, "ngFor", "ngForOf"], [1, "hex-grid__item"], [3, "item"]], template: function HexGridContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HexGridContainerComponent_li_1_Template, 2, 1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _hex_grid_item_hex_grid_item_component__WEBPACK_IMPORTED_MODULE_2__["HexGridItemComponent"]], styles: [".hex-grid[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.hex-grid__list[_ngcontent-%COMP%] {\n  --hexes: 5;\n  position: relative;\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  display: grid;\n  grid-template-columns: repeat(var(--hexes), 1fr 2fr) 1fr;\n  grid-gap: 2.5rem 5rem;\n  margin-top: 3rem;\n}\n.hex-grid__item[_ngcontent-%COMP%] {\n  position: relative;\n  grid-column: 1/span 3;\n  grid-row: calc(var(--counter) + var(--counter))/span 2;\n  filter: drop-shadow(0 0 10px rgba(68, 68, 68, 0.08));\n  height: 0;\n  padding-bottom: 90%;\n}\n@media screen and (min-width: 1440px) {\n  .hex-grid__list[_ngcontent-%COMP%] {\n    --hexes: 5;\n    --counter: 1;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(5n + 1) {\n    grid-column: 1/span 3;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(5n + 2) {\n    grid-column: 3/span 3;\n    grid-row: calc(var(--counter) + var(--counter) - 1)/span 2;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(5n + 3) {\n    grid-column: 5/span 3;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(5n + 4) {\n    grid-column: 7/span 3;\n    grid-row: calc(var(--counter) + var(--counter) - 1)/span 2;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(5n + 5) {\n    grid-column: 9/span 3;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 6) {\n    --counter: 2;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 11) {\n    --counter: 3;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 16) {\n    --counter: 4;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 21) {\n    --counter: 5;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 26) {\n    --counter: 6;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 31) {\n    --counter: 7;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 36) {\n    --counter: 8;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 41) {\n    --counter: 9;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 46) {\n    --counter: 10;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 51) {\n    --counter: 11;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 56) {\n    --counter: 12;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 61) {\n    --counter: 13;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 66) {\n    --counter: 14;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 71) {\n    --counter: 15;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 76) {\n    --counter: 16;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 81) {\n    --counter: 17;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 86) {\n    --counter: 18;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 91) {\n    --counter: 19;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 96) {\n    --counter: 20;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 101) {\n    --counter: 21;\n  }\n}\n@media screen and (min-width: 1120px) and (max-width: 1439px) {\n  .hex-grid__list[_ngcontent-%COMP%] {\n    --hexes: 4;\n    --counter: 1;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(4n + 1) {\n    grid-column: 1/span 3;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(4n + 2) {\n    grid-column: 3/span 3;\n    grid-row: calc(var(--counter) + var(--counter) - 1)/span 2;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(4n + 3) {\n    grid-column: 5/span 3;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(4n + 4) {\n    grid-column: 7/span 3;\n    grid-row: calc(var(--counter) + var(--counter) - 1)/span 2;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 5) {\n    --counter: 2;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 9) {\n    --counter: 3;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 13) {\n    --counter: 4;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 17) {\n    --counter: 5;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 21) {\n    --counter: 6;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 25) {\n    --counter: 7;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 29) {\n    --counter: 8;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 33) {\n    --counter: 9;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 37) {\n    --counter: 10;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 41) {\n    --counter: 11;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 45) {\n    --counter: 12;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 49) {\n    --counter: 13;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 53) {\n    --counter: 14;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 57) {\n    --counter: 15;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 61) {\n    --counter: 16;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 65) {\n    --counter: 17;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 69) {\n    --counter: 18;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 73) {\n    --counter: 19;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 77) {\n    --counter: 20;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 81) {\n    --counter: 21;\n  }\n}\n@media screen and (min-width: 840px) and (max-width: 1119px) {\n  .hex-grid__list[_ngcontent-%COMP%] {\n    --hexes: 3;\n    --counter: 1;\n    grid-gap: 1.5rem 3rem;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(3n + 1) {\n    grid-column: 1/span 3;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(3n + 2) {\n    grid-column: 3/span 3;\n    grid-row: calc(var(--counter) + var(--counter) - 1)/span 2;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(3n + 3) {\n    grid-column: 5/span 3;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 4) {\n    --counter: 2;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 7) {\n    --counter: 3;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 10) {\n    --counter: 4;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 13) {\n    --counter: 5;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 16) {\n    --counter: 6;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 19) {\n    --counter: 7;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 22) {\n    --counter: 8;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 25) {\n    --counter: 9;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 28) {\n    --counter: 10;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 31) {\n    --counter: 11;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 34) {\n    --counter: 12;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 37) {\n    --counter: 13;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 40) {\n    --counter: 14;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 43) {\n    --counter: 15;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 46) {\n    --counter: 16;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 49) {\n    --counter: 17;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 52) {\n    --counter: 18;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 55) {\n    --counter: 19;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 58) {\n    --counter: 20;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 61) {\n    --counter: 21;\n  }\n}\n@media screen and (min-width: 480px) and (max-width: 839px) {\n  .hex-grid__list[_ngcontent-%COMP%] {\n    --hexes: 2;\n    --counter: 1;\n    grid-gap: 1.5rem 3rem;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(2n + 1) {\n    grid-column: 1/span 3;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(2n + 2) {\n    grid-column: 3/span 3;\n    grid-row: calc(var(--counter) + var(--counter) - 1)/span 2;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 3) {\n    --counter: 2;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 5) {\n    --counter: 3;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 7) {\n    --counter: 4;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 9) {\n    --counter: 5;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 11) {\n    --counter: 6;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 13) {\n    --counter: 7;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 15) {\n    --counter: 8;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 17) {\n    --counter: 9;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 19) {\n    --counter: 10;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 21) {\n    --counter: 11;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 23) {\n    --counter: 12;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 25) {\n    --counter: 13;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 27) {\n    --counter: 14;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 29) {\n    --counter: 15;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 31) {\n    --counter: 16;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 33) {\n    --counter: 17;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 35) {\n    --counter: 18;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 37) {\n    --counter: 19;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 39) {\n    --counter: 20;\n  }\n  .hex-grid__item[_ngcontent-%COMP%]:nth-of-type(n + 41) {\n    --counter: 21;\n  }\n}\n@media screen and (max-width: 479px) {\n  .hex-grid__list[_ngcontent-%COMP%] {\n    --hexes: 1;\n    grid-gap: 1.5rem 3rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvaGV4LWdyaWQtY29udGFpbmVyL2hleC1ncmlkLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFsQkY7QUFtQkU7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLHdEQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQWpCSjtBQW1CRTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxzREFBQTtFQUNBLG9EQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBakJKO0FBdUJBO0VBRUk7SUFDRSxVQUFBO0lBQ0EsWUFBQTtFQXRCSjtFQXZCRTtJQUNFLHFCQUFBO0VBeUJKO0VBMUJFO0lBQ0UscUJBQUE7SUFFRSwwREFBQTtFQTJCTjtFQTlCRTtJQUNFLHFCQUFBO0VBZ0NKO0VBakNFO0lBQ0UscUJBQUE7SUFFRSwwREFBQTtFQWtDTjtFQXJDRTtJQUNFLHFCQUFBO0VBdUNKO0VBL0JFO0lBQ0UsWUFBQTtFQWlDSjtFQWxDRTtJQUNFLFlBQUE7RUFvQ0o7RUFyQ0U7SUFDRSxZQUFBO0VBdUNKO0VBeENFO0lBQ0UsWUFBQTtFQTBDSjtFQTNDRTtJQUNFLFlBQUE7RUE2Q0o7RUE5Q0U7SUFDRSxZQUFBO0VBZ0RKO0VBakRFO0lBQ0UsWUFBQTtFQW1ESjtFQXBERTtJQUNFLFlBQUE7RUFzREo7RUF2REU7SUFDRSxhQUFBO0VBeURKO0VBMURFO0lBQ0UsYUFBQTtFQTRESjtFQTdERTtJQUNFLGFBQUE7RUErREo7RUFoRUU7SUFDRSxhQUFBO0VBa0VKO0VBbkVFO0lBQ0UsYUFBQTtFQXFFSjtFQXRFRTtJQUNFLGFBQUE7RUF3RUo7RUF6RUU7SUFDRSxhQUFBO0VBMkVKO0VBNUVFO0lBQ0UsYUFBQTtFQThFSjtFQS9FRTtJQUNFLGFBQUE7RUFpRko7RUFsRkU7SUFDRSxhQUFB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LHFCQUFBO0VBa1BKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0cy9oZXgtZ3JpZC1jb250YWluZXIvaGV4LWdyaWQtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJsb2NrOiAnLmhleC1ncmlkJztcblxuQG1peGluIGdyaWQtaXRlbSgkaGV4ZXMpIHtcbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkaGV4ZXMge1xuICAgICY6bnRoLW9mLXR5cGUoI3skaGV4ZXN9biArICN7JGl9KSB7XG4gICAgICBncmlkLWNvbHVtbjogI3skaSArICRpIC0gMX0gLyBzcGFuIDM7XG4gICAgICBAaWYgJGkgJSAyID09IDAge1xuICAgICAgICBncmlkLXJvdzogY2FsYyh2YXIoLS1jb3VudGVyKSArIHZhcigtLWNvdW50ZXIpIC0gMSkgLyBzcGFuIDI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAyMCB7XG4gICAgJjpudGgtb2YtdHlwZShuICsgI3skaSAqICRoZXhlcyArIDF9KSB7XG4gICAgICAtLWNvdW50ZXI6ICN7JGkgKyAxfTtcbiAgICB9XG4gIH1cbn1cblxuI3skYmxvY2t9IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICZfX2xpc3Qge1xuICAgIC0taGV4ZXM6IDU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KHZhcigtLWhleGVzKSwgMWZyIDJmcikgMWZyO1xuICAgIGdyaWQtZ2FwOiAyLjVyZW0gNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICB9XG4gICZfX2l0ZW0ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMztcbiAgICBncmlkLXJvdzogY2FsYyh2YXIoLS1jb3VudGVyKSArIHZhcigtLWNvdW50ZXIpKSAvIHNwYW4gMjtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAxMHB4IHJnYmEoIzQ0NCwgLjA4KSk7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiA5MCU7XG4gIH1cbiAgJl9fY29udGVudCB7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XG4gICN7JGJsb2NrfSB7XG4gICAgJl9fbGlzdCB7XG4gICAgICAtLWhleGVzOiA1O1xuICAgICAgLS1jb3VudGVyOiAxO1xuICAgIH1cbiAgICAmX19pdGVtIHtcbiAgICAgIEBpbmNsdWRlIGdyaWQtaXRlbSg1KTtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTEyMHB4KSBhbmQgKG1heC13aWR0aDogMTQzOXB4KSB7XG4gICN7JGJsb2NrfSB7XG4gICAgJl9fbGlzdCB7XG4gICAgICAtLWhleGVzOiA0O1xuICAgICAgLS1jb3VudGVyOiAxO1xuICAgIH1cbiAgICAmX19pdGVtIHtcbiAgICAgIEBpbmNsdWRlIGdyaWQtaXRlbSg0KTtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODQwcHgpIGFuZCAobWF4LXdpZHRoOiAxMTE5cHgpIHtcbiAgI3skYmxvY2t9IHtcbiAgICAmX19saXN0IHtcbiAgICAgIC0taGV4ZXM6IDM7XG4gICAgICAtLWNvdW50ZXI6IDE7XG4gICAgICBncmlkLWdhcDogMS41cmVtIDNyZW07XG4gICAgfVxuICAgICZfX2l0ZW0ge1xuICAgICAgQGluY2x1ZGUgZ3JpZC1pdGVtKDMpO1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODBweCkgYW5kIChtYXgtd2lkdGg6IDgzOXB4KSB7XG4gICN7JGJsb2NrfSB7XG4gICAgJl9fbGlzdCB7XG4gICAgICAtLWhleGVzOiAyO1xuICAgICAgLS1jb3VudGVyOiAxO1xuICAgICAgZ3JpZC1nYXA6IDEuNXJlbSAzcmVtO1xuICAgIH1cbiAgICAmX19pdGVtIHtcbiAgICAgIEBpbmNsdWRlIGdyaWQtaXRlbSgyKTtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDc5cHgpIHtcbiAgI3skYmxvY2t9IHtcbiAgICAmX19saXN0IHtcbiAgICAgIC0taGV4ZXM6IDE7XG4gICAgICBncmlkLWdhcDogMS41cmVtIDNyZW07XG4gICAgfVxuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HexGridContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'hex-grid-container',
                templateUrl: './hex-grid-container.component.html',
                styleUrls: ['./hex-grid-container.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "6IXM":
/*!*******************************************************************!*\
  !*** ./src/app/projects/hex-grid-item/hex-grid-item.component.ts ***!
  \*******************************************************************/
/*! exports provided: HexGridItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HexGridItemComponent", function() { return HexGridItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HexGridItemComponent {
    constructor() { }
    ngOnInit() {
    }
}
HexGridItemComponent.ɵfac = function HexGridItemComponent_Factory(t) { return new (t || HexGridItemComponent)(); };
HexGridItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HexGridItemComponent, selectors: [["hex-grid-item"]], inputs: { item: "item" }, decls: 2, vars: 1, consts: [[1, "hex-grid__content"]], template: function HexGridItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item);
    } }, styles: [".hex-grid__content[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  font-size: 1.125rem;\n  color: #111111;\n  background-color: white;\n  -webkit-clip-path: polygon(75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%, 25% 0);\n  clip-path: polygon(75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%, 25% 0);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 2rem 25%;\n  text-decoration: none;\n  text-align: center;\n  transition: transform 0.24s ease-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvaGV4LWdyaWQtaXRlbS9oZXgtZ3JpZC1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsNkVBQUE7RUFDUSxxRUFBQTtFQUNSLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdHMvaGV4LWdyaWQtaXRlbS9oZXgtZ3JpZC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhleC1ncmlkX19jb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xuICBjb2xvcjogIzExMTExMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIC13ZWJraXQtY2xpcC1wYXRoOiBwb2x5Z29uKDc1JSAwLCAxMDAlIDUwJSwgNzUlIDEwMCUsIDI1JSAxMDAlLCAwIDUwJSwgMjUlIDApO1xuICAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbig3NSUgMCwgMTAwJSA1MCUsIDc1JSAxMDAlLCAyNSUgMTAwJSwgMCA1MCUsIDI1JSAwKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJyZW0gMjUlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4yNHMgZWFzZS1vdXQ7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HexGridItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'hex-grid-item',
                templateUrl: './hex-grid-item.component.html',
                styleUrls: ['./hex-grid-item.component.scss']
            }]
    }], function () { return []; }, { item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "EtQq":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function NavbarComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", menu_r1, "");
} }
class NavbarComponent {
    constructor() {
        this.menus = ['Home', 'About Us', 'Contact Us'];
        this.logo = 'LOGO';
    }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 11, vars: 2, consts: [["id", "navbar", 1, "lg:px-16", "px-6", "bg-white", "flex", "flex-wrap", "items-center", "lg:py-0", "py-2"], [1, "flex-1", "flex", ".justify-center"], [1, "text-black", "cursor-pointer"], ["for", "menu-toggle", 1, "cursor-pointer", "lg:hidden", "block"], ["aria-hidden", "true", "id", "menu-icon", 1, "fa", "fa-bars", "text-black"], ["type", "checkbox", "id", "menu-toggle", 1, "hidden"], ["id", "menu", 1, "hidden", "lg:flex", "lg:items-center", "lg:w-auto", "w-full"], [1, "lg:flex", "items-center", "justify-between", "text-base", "text-black", "pt-4", "lg:pt-0"], ["class", "font-mono", 4, "ngFor", "ngForOf"], [1, "font-mono"], ["href", "#", 1, "lg:p-3", "py-3", "px-0", "block", "border-b-2", "border-transparent", ".font-mono", "hover:border-indigo-400"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NavbarComponent_li_10_Template, 3, 1, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.logo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menus);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["#menu-toggle[_ngcontent-%COMP%]:checked    + #menu[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtZW51LXRvZ2dsZTpjaGVja2VkICsgI21lbnUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar/navbar.component */ "EtQq");




class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "EtQq");
/* harmony import */ var _projects_hex_grid_container_hex_grid_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects/hex-grid-container/hex-grid-container.component */ "6/Vx");




class AppComponent {
    constructor() {
        this.title = 'hd-developers';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hex-grid-container");
    } }, directives: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _projects_hex_grid_container_hex_grid_container_component__WEBPACK_IMPORTED_MODULE_2__["HexGridContainerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _projects_hex_grid_container_hex_grid_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects/hex-grid-container/hex-grid-container.component */ "6/Vx");
/* harmony import */ var _projects_hex_grid_item_hex_grid_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects/hex-grid-item/hex-grid-item.component */ "6IXM");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _projects_hex_grid_container_hex_grid_container_component__WEBPACK_IMPORTED_MODULE_5__["HexGridContainerComponent"],
        _projects_hex_grid_item_hex_grid_item_component__WEBPACK_IMPORTED_MODULE_6__["HexGridItemComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _projects_hex_grid_container_hex_grid_container_component__WEBPACK_IMPORTED_MODULE_5__["HexGridContainerComponent"],
                    _projects_hex_grid_item_hex_grid_item_component__WEBPACK_IMPORTED_MODULE_6__["HexGridItemComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [
// {
//   path: '',
//   redirectTo: '/home',
//   pathMatch: 'full'
// }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map