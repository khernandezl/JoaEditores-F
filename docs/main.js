(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_portafolio_portafolio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/portafolio/portafolio.component */ "./src/app/pages/portafolio/portafolio.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_item_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/item/item.component */ "./src/app/pages/item/item.component.ts");
/* harmony import */ var _pages_search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/search/search.component */ "./src/app/pages/search/search.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _pages_lanzamientos_lanzamientos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/lanzamientos/lanzamientos.component */ "./src/app/pages/lanzamientos/lanzamientos.component.ts");
/* harmony import */ var _pages_producto1_producto1_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/producto1/producto1.component */ "./src/app/pages/producto1/producto1.component.ts");
/* harmony import */ var _pages_producto2_producto2_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/producto2/producto2.component */ "./src/app/pages/producto2/producto2.component.ts");
/* harmony import */ var _pages_producto3_producto3_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/producto3/producto3.component */ "./src/app/pages/producto3/producto3.component.ts");
/* harmony import */ var _pages_producto4_producto4_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/producto4/producto4.component */ "./src/app/pages/producto4/producto4.component.ts");
/* harmony import */ var _pages_producto5_producto5_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/producto5/producto5.component */ "./src/app/pages/producto5/producto5.component.ts");
/* harmony import */ var _pages_producto6_producto6_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/producto6/producto6.component */ "./src/app/pages/producto6/producto6.component.ts");
/* harmony import */ var _pages_producto7_producto7_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/producto7/producto7.component */ "./src/app/pages/producto7/producto7.component.ts");
/* harmony import */ var _pages_producto8_producto8_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/producto8/producto8.component */ "./src/app/pages/producto8/producto8.component.ts");
/* harmony import */ var _pages_producto9_producto9_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/producto9/producto9.component */ "./src/app/pages/producto9/producto9.component.ts");
/* harmony import */ var _pages_producto10_producto10_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/producto10/producto10.component */ "./src/app/pages/producto10/producto10.component.ts");
/* harmony import */ var _pages_producto11_producto11_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/producto11/producto11.component */ "./src/app/pages/producto11/producto11.component.ts");
/* harmony import */ var _pages_flogo_flogo_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/flogo/flogo.component */ "./src/app/pages/flogo/flogo.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var app_routes = [
    { path: 'home', component: _pages_portafolio_portafolio_component__WEBPACK_IMPORTED_MODULE_2__["PortafolioComponent"] },
    { path: 'about', component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] },
    { path: 'item/:id', component: _pages_item_item_component__WEBPACK_IMPORTED_MODULE_4__["ItemComponent"] },
    { path: 'search/:termino', component: _pages_search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"] },
    { path: 'contact', component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"] },
    { path: 'lanzamientos', component: _pages_lanzamientos_lanzamientos_component__WEBPACK_IMPORTED_MODULE_7__["LanzamientosComponent"] },
    { path: 'producto1', component: _pages_producto1_producto1_component__WEBPACK_IMPORTED_MODULE_8__["Producto1Component"] },
    { path: 'producto2', component: _pages_producto2_producto2_component__WEBPACK_IMPORTED_MODULE_9__["Producto2Component"] },
    { path: 'producto3', component: _pages_producto3_producto3_component__WEBPACK_IMPORTED_MODULE_10__["Producto3Component"] },
    { path: 'producto4', component: _pages_producto4_producto4_component__WEBPACK_IMPORTED_MODULE_11__["Producto4Component"] },
    { path: 'producto5', component: _pages_producto5_producto5_component__WEBPACK_IMPORTED_MODULE_12__["Producto5Component"] },
    { path: 'producto6', component: _pages_producto6_producto6_component__WEBPACK_IMPORTED_MODULE_13__["Producto6Component"] },
    { path: 'producto7', component: _pages_producto7_producto7_component__WEBPACK_IMPORTED_MODULE_14__["Producto7Component"] },
    { path: 'producto8', component: _pages_producto8_producto8_component__WEBPACK_IMPORTED_MODULE_15__["Producto8Component"] },
    { path: 'producto9', component: _pages_producto9_producto9_component__WEBPACK_IMPORTED_MODULE_16__["Producto9Component"] },
    { path: 'producto10', component: _pages_producto10_producto10_component__WEBPACK_IMPORTED_MODULE_17__["Producto10Component"] },
    { path: 'producto11', component: _pages_producto11_producto11_component__WEBPACK_IMPORTED_MODULE_18__["Producto11Component"] },
    { path: 'flogo', component: _pages_flogo_flogo_component__WEBPACK_IMPORTED_MODULE_19__["FlogoComponent"] },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(app_routes, { useHash: true })
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-header></app-header>\r\n\r\n<section class=\"ae-container-fluid rk-main\">\r\n    <!-- <app-portafolio></app-portafolio> -->\r\n    <!-- <app-about></app-about> -->\r\n    <!-- <app-item></app-item> -->\r\n    <router-outlet></router-outlet>\r\n\r\n</section>\r\n\r\n\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_info_pagina_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/info-pagina.service */ "./src/app/services/info-pagina.service.ts");
/* harmony import */ var _services_productos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/productos.service */ "./src/app/services/productos.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(infoPaginaService, productosService) {
        this.infoPaginaService = infoPaginaService;
        this.productosService = productosService;
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_info_pagina_service__WEBPACK_IMPORTED_MODULE_1__["InfoPaginaService"],
            _services_productos_service__WEBPACK_IMPORTED_MODULE_2__["ProductosService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _pages_portafolio_portafolio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/portafolio/portafolio.component */ "./src/app/pages/portafolio/portafolio.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_item_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/item/item.component */ "./src/app/pages/item/item.component.ts");
/* harmony import */ var _pages_search_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/search/search.component */ "./src/app/pages/search/search.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _pages_lanzamientos_lanzamientos_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/lanzamientos/lanzamientos.component */ "./src/app/pages/lanzamientos/lanzamientos.component.ts");
/* harmony import */ var _pages_producto1_producto1_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/producto1/producto1.component */ "./src/app/pages/producto1/producto1.component.ts");
/* harmony import */ var _pages_producto2_producto2_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/producto2/producto2.component */ "./src/app/pages/producto2/producto2.component.ts");
/* harmony import */ var _pages_producto3_producto3_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/producto3/producto3.component */ "./src/app/pages/producto3/producto3.component.ts");
/* harmony import */ var _pages_producto4_producto4_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/producto4/producto4.component */ "./src/app/pages/producto4/producto4.component.ts");
/* harmony import */ var _pages_producto5_producto5_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/producto5/producto5.component */ "./src/app/pages/producto5/producto5.component.ts");
/* harmony import */ var _pages_producto6_producto6_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/producto6/producto6.component */ "./src/app/pages/producto6/producto6.component.ts");
/* harmony import */ var _pages_producto7_producto7_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/producto7/producto7.component */ "./src/app/pages/producto7/producto7.component.ts");
/* harmony import */ var _pages_producto8_producto8_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/producto8/producto8.component */ "./src/app/pages/producto8/producto8.component.ts");
/* harmony import */ var _pages_producto9_producto9_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/producto9/producto9.component */ "./src/app/pages/producto9/producto9.component.ts");
/* harmony import */ var _pages_producto10_producto10_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/producto10/producto10.component */ "./src/app/pages/producto10/producto10.component.ts");
/* harmony import */ var _pages_producto11_producto11_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/producto11/producto11.component */ "./src/app/pages/producto11/producto11.component.ts");
/* harmony import */ var _pages_flogo_flogo_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/flogo/flogo.component */ "./src/app/pages/flogo/flogo.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// Rutas






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _shared_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _pages_portafolio_portafolio_component__WEBPACK_IMPORTED_MODULE_7__["PortafolioComponent"],
                _pages_about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
                _pages_item_item_component__WEBPACK_IMPORTED_MODULE_9__["ItemComponent"],
                _pages_search_search_component__WEBPACK_IMPORTED_MODULE_10__["SearchComponent"],
                _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"],
                _pages_lanzamientos_lanzamientos_component__WEBPACK_IMPORTED_MODULE_12__["LanzamientosComponent"],
                _pages_producto1_producto1_component__WEBPACK_IMPORTED_MODULE_13__["Producto1Component"],
                _pages_producto2_producto2_component__WEBPACK_IMPORTED_MODULE_14__["Producto2Component"],
                _pages_producto3_producto3_component__WEBPACK_IMPORTED_MODULE_15__["Producto3Component"],
                _pages_producto4_producto4_component__WEBPACK_IMPORTED_MODULE_16__["Producto4Component"],
                _pages_producto5_producto5_component__WEBPACK_IMPORTED_MODULE_17__["Producto5Component"],
                _pages_producto6_producto6_component__WEBPACK_IMPORTED_MODULE_18__["Producto6Component"],
                _pages_producto7_producto7_component__WEBPACK_IMPORTED_MODULE_19__["Producto7Component"],
                _pages_producto8_producto8_component__WEBPACK_IMPORTED_MODULE_20__["Producto8Component"],
                _pages_producto9_producto9_component__WEBPACK_IMPORTED_MODULE_21__["Producto9Component"],
                _pages_producto10_producto10_component__WEBPACK_IMPORTED_MODULE_22__["Producto10Component"],
                _pages_producto11_producto11_component__WEBPACK_IMPORTED_MODULE_23__["Producto11Component"],
                _pages_flogo_flogo_component__WEBPACK_IMPORTED_MODULE_24__["FlogoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pages/about/about.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/about/about.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/about/about.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/about/about.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"ae-grid au-xs-ta-center au-mb-4\">\r\n    \r\n    <!-- <div *ngFor=\"let persona of infoService.equipo\"  class=\"animated fadeIn ae-grid__item item-lg-4 ae-kappa au-mb-3\">\r\n      <img [src]=\"persona.url\" alt=\"\" class=\"au-mb-3\">\r\n      <h5 class=\"ae-u-bolder au-mt-2\">{{ persona.nombre }}</h5>\r\n      <p class=\"ae-u-bolder au-mb-3\">{{ persona.subtitulo }}</p>\r\n      <p class=\"au-lg-ta-left au-mb-3 au-pl-4 au-pr-4\">{{ persona.frase }}</p>\r\n      <a target=\"_blank\" href=\"https://twitter.com/{{ persona.twitter }}\" class=\"ae-u-bolder au-underline\">{{ persona.twitter }}</a>\r\n    </div> -->\r\n\r\n  </div>\r\n  <div class=\"ae-grid au-pt-2\">\r\n    <div class=\"ae-grid__item item-lg-8 item-lg--offset-2\">\r\n      <h4 class=\"ae-u-bolder\">Nuestros Libros</h4>\r\n      <p>Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"ae-grid ae-grid--alt au-xs-ptp-1\">\r\n    <div class=\"ae-grid__item--alt item-lg-4\">\r\n      <h6 class=\"ae-u-boldest\">Sobre Nosotros</h6>\r\n      <p class=\"au-lh-3\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>\r\n    </div>\r\n    <div class=\"ae-grid__item--alt item-lg-4\">\r\n      <h6 class=\"ae-u-boldest\">Nuestra mision</h6>\r\n      <p class=\"au-lh-3\">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\r\n    </div>\r\n    <div class=\"ae-grid__item--alt item-lg-4\">\r\n      <h6 class=\"ae-u-boldest\">Nuestros clientes</h6>\r\n      <p class=\"au-lh-3\">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>\r\n      <!-- <p class=\"au-lh-3\">Nemo enim ipsam voluptatem quia voluptas</p> -->\r\n    </div>\r\n  </div>\r\n  <p class=\"au-flex au-pt-4 group-buttons\"><a href=\"index.html\" class=\"au-mt-4 arrow-button arrow-button--right arrow-button--out\">View Our Portfolio<span class=\"arrow-cont\">\r\n        <svg>\r\n          <use xlink:href=\"assets/img/symbols.svg#arrow\"></use>\r\n        </svg></span></a></p>\r\n"

/***/ }),

/***/ "./src/app/pages/about/about.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_info_pagina_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/info-pagina.service */ "./src/app/services/info-pagina.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = /** @class */ (function () {
    function AboutComponent(infoService) {
        this.infoService = infoService;
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/pages/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/pages/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [_services_info_pagina_service__WEBPACK_IMPORTED_MODULE_1__["InfoPaginaService"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/pages/contact/contact.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/contact/contact.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/contact/contact.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \r\n \r\n <div class=\"ae-container-fluid ae-container-fluid--inner rk-main\">\r\n      <div class=\"ae-grid\">\r\n        <div class=\"ae-grid__item item-lg-6 item-lg--offset-7\">\r\n          <h4 class=\"ae-u-bolder au-mb-3 conatct__title\">Contactanos</h4>\r\n          <p class=\"au-mb-4 contact__desc\">Hola <a href=\"#contact-form\">a traves del formulario</a>que se encuentra abajo! <br>Para que podamos ayudarte.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"ae-grid\">\r\n        <div class=\"ae-grid__item item-lg-6\">\r\n          <div id=\"map-container\">\r\n            <div id=\"map\"></div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ae-grid__item item-lg-6\">\r\n          <div class=\"ae-grid ae-grid--collapse\">\r\n            <div class=\"ae-grid__item item-lg-2 au-v-hidden au-lg-v-visible\">\r\n              <button id=\"map-arrow\" class=\"arrow-button arrow-button--nospace arrow-button--center arrow-button--flip\">\r\n                <svg>\r\n                  <use xlink:href=\"assets/img/symbols.svg#arrow\"></use>\r\n                </svg>\r\n              </button>\r\n            </div>\r\n            <div class=\"ae-grid__item item-lg-10 au-xs-ta-center au-lg-ta-left\">\r\n              <p class=\"au-mb-4 contact__addr\">Bogotá  <br> Dirección<br>-.....-</p>\r\n              <p> <span class=\"contact__phone\"> <span class=\"rk-light-color\">Telefono  </span> (301) 123-4567</span><br><span class=\"contact__email au-block au-truncate\"> <span class=\"rk-light-color\">Correo &nbsp;&nbsp; </span><a href=\"#0\">joa.airphotos@gmail.com</a></span></p>\r\n            </div>\r\n            <!-- <div class=\"contact_spacer au-none au-lg-block\"></div> -->\r\n          </div>\r\n          <div class=\"ae-grid ae-grid--collapse\">\r\n            <div class=\"ae-grid__item item-lg-12\">\r\n              <form id=\"contact-form\" action=\"#0\" class=\"ae-form--full\">\r\n                <input type=\"text\" placeholder=\"* Name\" required>\r\n                <input type=\"email\" placeholder=\"* Email\" required>\r\n                <textarea placeholder=\"Message ...\" cols=\"30\" rows=\"4\"></textarea>\r\n                <p class=\"au-xs-ta-right au-pt-4 group-buttons\"><a href=\"#0\" class=\"arrow-button arrow-button--right arrow-button--out\">Enviar<span class=\"arrow-cont\">\r\n                      <svg>\r\n                        <use xlink:href=\"assets/img/symbols.svg#arrow\"></use>\r\n                      </svg></span></a></p>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <script src=\"https://maps.googleapis.com/maps/api/js\"></script>\r\n    <script>\r\n      var pxLat = 40.767812,\r\n          pxLng = -73.962014;\r\n      \r\n      // When the window has finished loading create our google map below\r\n      var map = google.maps.event.addDomListener(window, 'load', init);\r\n      \r\n      function init() {\r\n          // Basic options for a simple Google Map\r\n          // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions\r\n          var mapOptions = {\r\n              // How zoomed in you want the map to start at (always required)\r\n              zoom: 15,\r\n      \r\n              disableDefaultUI: true,\r\n              disableDoubleClickZoom: true,\r\n              scrollwheel: false,\r\n              // The latitude and longitude to center the map (always required)\r\n              center: new google.maps.LatLng(pxLat, pxLng), // New York\r\n      \r\n              // How you would like to style the map. \r\n              // This is where you would paste any style found on Snazzy Maps.\r\n              styles: [{\"featureType\":\"all\",\"elementType\":\"labels.text.fill\",\"stylers\":[{\"saturation\":36},{\"color\":\"#000000\"},{\"lightness\":40}]},{\"featureType\":\"all\",\"elementType\":\"labels.text.stroke\",\"stylers\":[{\"visibility\":\"on\"},{\"color\":\"#000000\"},{\"lightness\":16}]},{\"featureType\":\"all\",\"elementType\":\"labels.icon\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"administrative\",\"elementType\":\"geometry.fill\",\"stylers\":[{\"color\":\"#000000\"},{\"lightness\":20}]},{\"featureType\":\"administrative\",\"elementType\":\"geometry.stroke\",\"stylers\":[{\"color\":\"#000000\"},{\"lightness\":17},{\"weight\":1.2}]},{\"featureType\":\"landscape\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#000000\"},{\"lightness\":20}]},{\"featureType\":\"poi\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#000000\"},{\"lightness\":21}]},{\"featureType\":\"road.highway\",\"elementType\":\"geometry.fill\",\"stylers\":[{\"color\":\"#000000\"},{\"lightness\":17}]},{\"featureType\":\"road.highway\",\"elementType\":\"geometry.stroke\",\"stylers\":[{\"color\":\"#000000\"},{\"lightness\":29},{\"weight\":0.2}]},{\"featureType\":\"road.arterial\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#000000\"},{\"lightness\":18}]},{\"featureType\":\"road.local\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#000000\"},{\"lightness\":16}]},{\"featureType\":\"transit\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#000000\"},{\"lightness\":19}]},{\"featureType\":\"water\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#000000\"},{\"lightness\":17}]}]\r\n          };\r\n      \r\n          // Get the HTML DOM element that will contain your map \r\n          // We are using a div with id=\"map\" seen below in the <body>\r\n          var mapElement = document.getElementById('map');\r\n      \r\n          // Create the Google Map using our element and options defined above\r\n          map = new google.maps.Map(mapElement, mapOptions);\r\n      \r\n          // Let's also add a marker while we're at it\r\n          var marker = new google.maps.Marker({\r\n              icon: {\r\n                fillColor: \"#f52654\",\r\n                fillOpacity: 1,\r\n                strokeWeight: 0,\r\n                path: \"M15,0C6.7,0,0,6.7,0,15c0,0,0,0.1,0,0.1c0,0.5,0,1.1,0.1,1.8c0.6,5.4,3.7,9.7,6.6,13.8c3.5,4.8,6.8,9.4,6.8,15.9c0,0.8,0.7,1.5,1.5,1.5c0.8,0,1.5-0.7,1.5-1.5c0-6.5,3.3-11,6.8-15.9c3-4.1,6-8.4,6.6-13.8C30,16.2,30,15.6,30,15C30,6.7,23.3,0,15,0z\",\r\n                scale: 1\r\n              },\r\n              position: new google.maps.LatLng(pxLat, pxLng),\r\n              map: map,\r\n              title: 'Pixeden!'\r\n          });\r\n      \r\n          - map.addListener('center_changed', function() {\r\n          -     window.setTimeout(function() {\r\n          -       map.panTo(marker.getPosition());\r\n          -     }, 500);\r\n          - });\r\n      }\r\n      \r\n      function newLocation(level) {\r\n      \r\n         if(map.getZoom() > 15) { map.setZoom(15) } else { map.setZoom(level) }\r\n      }\r\n      \r\n      document.querySelector('#map-arrow').addEventListener('click', function() {\r\n        newLocation(Math.round(Math.random()*10) + 13);\r\n      }, false);\r\n    </script>"

/***/ }),

/***/ "./src/app/pages/contact/contact.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.ts ***!
  \****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/pages/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/pages/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/pages/flogo/flogo.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/flogo/flogo.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/flogo/flogo.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/flogo/flogo.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<br>\n<br />\n<div class=\"ae-grid__item item-lg-8 item-sm--center au-xs-ta-center au-lg-ta-left\">\n  <h2 class=\"rk-portfolio-inner-title \">Filosofia de vida</h2>\n</div>\n\n<br>\n<br />\n \n\n\n<p class=\"ae-eta\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et finibus urna. Aliquam elementum felis venenatis risus iaculis tempor. Phasellus at tempus dolor, a dictum velit. Sed id blandit nisl, tempor dictum nisi. Phasellus ligula ante, pharetra sit amet ex tempor, condimentum feugiat est. Integer euismod ornare turpis. Quisque eu bibendum diam. Aenean iaculis, magna et dignissim lobortis, leo sem efficitur nunc, vel fermentum leo urna et metus. Duis at laoreet sapien. Nunc finibus odio in neque vulputate, aliquet fermentum sem posuere. Duis dapibus urna arcu.\n\n  Ut molestie, metus in blandit cursus, justo nibh laoreet leo, quis faucibus magna erat id libero. Sed ligula metus, iaculis et nibh nec, semper blandit ante. Mauris placerat, purus a tincidunt convallis, nunc ex gravida tortor, non fermentum leo eros in nisi. Cras volutpat viverra eleifend. Maecenas pulvinar non diam at viverra. Etiam luctus suscipit est, at facilisis nisi tempus feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;\n  \n  Integer ac lacus sit amet ex rhoncus vehicula. Nulla a gravida velit. Phasellus sagittis tortor justo. Pellentesque at est felis. Nam finibus iaculis urna, sit amet ullamcorper magna fringilla nec. In sed tincidunt neque, in lacinia dui. Mauris varius consequat enim sit amet maximus. Donec in magna est. Pellentesque vitae iaculis eros. Nulla tincidunt volutpat nulla ut convallis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>"

/***/ }),

/***/ "./src/app/pages/flogo/flogo.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/flogo/flogo.component.ts ***!
  \************************************************/
/*! exports provided: FlogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlogoComponent", function() { return FlogoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FlogoComponent = /** @class */ (function () {
    function FlogoComponent() {
    }
    FlogoComponent.prototype.ngOnInit = function () {
    };
    FlogoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-flogo',
            template: __webpack_require__(/*! ./flogo.component.html */ "./src/app/pages/flogo/flogo.component.html"),
            styles: [__webpack_require__(/*! ./flogo.component.css */ "./src/app/pages/flogo/flogo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FlogoComponent);
    return FlogoComponent;
}());



/***/ }),

/***/ "./src/app/pages/item/item.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/item/item.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/item/item.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/item/item.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"producto\">\r\n  <!-- <header [ngStyle]=\"{ 'background-image': 'url(assets/productos/'+ id +'/main.jpg)' }\" \r\n        class=\"rk-portfolio-cover item-inside-1\">\r\n    <div class=\"item-inside__meta\">\r\n      <h1 class=\"ae-u-bolder rk-portfolio-title \">{{ producto.producto }}</h1>\r\n      <p class=\"ae-theta rk-portfolio-category \">{{ producto.categoria }}</p>\r\n    </div>\r\n  </header> -->\r\n  <div class=\"ae-container-fluid\">\r\n    <div class=\"ae-grid ae-grid--collapse rk-portfolio-info \">\r\n      <div class=\"ae-grid__item item-lg-8 item-sm--center au-xs-ta-center au-lg-ta-left\">\r\n        <h2 class=\"rk-portfolio-inner-title \">{{ producto.subtitulo1 }}</h2>\r\n      </div>\r\n      <div class=\"ae-grid__item item-lg-4 au-xs-ta-center au-lg-ta-right rk-portfolio-details\">\r\n        \r\n        <p class=\"au-xs-ta-right au-pt-4 group-buttons\">\r\n          <a onclick=\"openForm()\" class=\"arrow-button arrow-button--right arrow-button--out\">\r\n            Comprar\r\n          </a>          \r\n        </p>        \r\n        </div>\r\n      </div>\r\n    </div>  \r\n\r\n<div class=\"modalDialog\" id=\"myForm\">  \r\n  <form id=\"contact-form\" action=\"#0\" class=\"ae-form--full\">\r\n    \r\n    <input type=\"text\" placeholder=\"* Name\" required>\r\n    <input type=\"email\" placeholder=\"* Email\" required>\r\n    <textarea placeholder=\"Message ...\" cols=\"30\" rows=\"4\"></textarea>\r\n    <p class=\"au-xs-ta-right au-pt-4 group-buttons\"><a href=\"#0\" class=\"arrow-button arrow-button--right arrow-button--out\">Enviar<span class=\"arrow-cont\">\r\n          <svg>\r\n            <use xlink:href=\"assets/img/symbols.svg#arrow\"></use>\r\n          </svg></span></a></p>\r\n    <!--Cerrar Modal-->\r\n    <a href=\"#close\" title=\"Close\" class=\"close\">X</a>\r\n    <p class=\"au-xs-ta-right au-pt-4 group-buttons\"></p>\r\n  </form>\r\n</div>\r\n\r\n\r\n\r\n    <div class=\"ae-container-fluid ae-container-fluid--inner rk-portfolio--inner\">\r\n      <div class=\"ae-grid ae-grid--collapse au-xs-ptp-1\">\r\n        <div class=\"ae-grid__item item-lg-5 au-lg-ptp-1\">\r\n          <h4 class=\"ae-u-bolder\">{{ producto.subtitulo1 }}</h4>\r\n          <p class=\"ae-eta\">{{ producto.desc1 }}</p>        \r\n        </div>\r\n        <div class=\"ae-grid__item item-lg-6 item-lg--offset-1\">\r\n          <img src=\"assets/productos/{{ id }}/pic-1.jpg\" alt=\"Urku Portfolio\">\r\n        </div>\r\n      </div>\r\n    \r\n </div>\r\n\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/pages/item/item.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/item/item.component.ts ***!
  \**********************************************/
/*! exports provided: ItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemComponent", function() { return ItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_productos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/productos.service */ "./src/app/services/productos.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemComponent = /** @class */ (function () {
    function ItemComponent(route, productoService) {
        this.route = route;
        this.productoService = productoService;
    }
    ItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (parametros) {
            // console.log(parametros['id']);
            _this.productoService.getProducto(parametros['id'])
                .subscribe(function (producto) {
                _this.id = parametros['id'];
                _this.producto = producto;
            });
        });
    };
    ItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-item',
            template: __webpack_require__(/*! ./item.component.html */ "./src/app/pages/item/item.component.html"),
            styles: [__webpack_require__(/*! ./item.component.css */ "./src/app/pages/item/item.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_productos_service__WEBPACK_IMPORTED_MODULE_2__["ProductosService"]])
    ], ItemComponent);
    return ItemComponent;
}());



/***/ }),

/***/ "./src/app/pages/lanzamientos/lanzamientos.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/lanzamientos/lanzamientos.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/lanzamientos/lanzamientos.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/lanzamientos/lanzamientos.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  lanzamientos works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/pages/lanzamientos/lanzamientos.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/lanzamientos/lanzamientos.component.ts ***!
  \**************************************************************/
/*! exports provided: LanzamientosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanzamientosComponent", function() { return LanzamientosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LanzamientosComponent = /** @class */ (function () {
    function LanzamientosComponent() {
    }
    LanzamientosComponent.prototype.ngOnInit = function () {
    };
    LanzamientosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lanzamientos',
            template: __webpack_require__(/*! ./lanzamientos.component.html */ "./src/app/pages/lanzamientos/lanzamientos.component.html"),
            styles: [__webpack_require__(/*! ./lanzamientos.component.css */ "./src/app/pages/lanzamientos/lanzamientos.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LanzamientosComponent);
    return LanzamientosComponent;
}());



/***/ }),

/***/ "./src/app/pages/portafolio/portafolio.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/portafolio/portafolio.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/portafolio/portafolio.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/portafolio/portafolio.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<section class=\"ae-container-fluid ae-container-fluid--inner rk-portfolio\">\r\n  \r\n  <!-- 1 -->\r\n  <div align=\"center\" *ngIf=\"productosService.cargando\">\r\n    <h2>Cargando</h2>\r\n\r\n    <div class=\"loader loader--style1\" title=\"0\">\r\n        <svg version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n        width=\"40px\" height=\"40px\" viewBox=\"0 0 40 40\" enable-background=\"new 0 0 40 40\" xml:space=\"preserve\">\r\n        <path opacity=\"0.2\" fill=\"#000\" d=\"M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946\r\n          s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634\r\n          c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z\"/>\r\n        <path fill=\"#000\" d=\"M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0\r\n          C22.32,8.481,24.301,9.057,26.013,10.047z\">\r\n          <animateTransform attributeType=\"xml\"\r\n            attributeName=\"transform\"\r\n            type=\"rotate\"\r\n            from=\"0 20 20\"\r\n            to=\"360 20 20\"\r\n            dur=\"0.5s\"\r\n            repeatCount=\"indefinite\"/>\r\n          </path>\r\n        </svg>\r\n    </div>\r\n    \r\n    <p>\r\n      Espere por favor\r\n    </p>\r\n\r\n  </div>\r\n\r\n  \r\n  <!-- <div *ngIf=\"!productosService.cargando\" \r\n      class=\"ae-masonry ae-masonry-md-2 ae-masonry-xl-4\">\r\n    \r\n    <a *ngFor=\"let producto of productosService.productos\" \r\n        [routerLink]=\"['/item', producto.cod ]\" class=\"animated fadeIn rk-item ae-masonry__item\">\r\n      <img src=\"assets/productos/{{ producto.url }}.jpg\" alt=\"\">\r\n      <div [routerLink]=\"['/item', producto.cod ]\" class=\"item-meta\">\r\n        <h2>{{ producto.titulo }}</h2>\r\n        <p>{{ producto.categoria }}</p>\r\n      </div>\r\n    </a>\r\n      \r\n  </div> -->\r\n\r\n\r\n  \r\n\r\n\r\n\r\n<!-- <div  class=\"ae-masonry ae-masonry-md-2 ae-masonry-xl-4\">\r\n  \r\n  <a routerLink=\"/producto2\"  class=\"animated fadeIn rk-item ae-masonry__item\">\r\n    <img src=\"assets/productos/project-2.jpg\" alt=\"\">\r\n    <div  class=\"item-meta\">\r\n      <h2>SEAFLOWER, Colombia Mágica\r\n      </h2>\r\n      <p>formato apaisado, 21 x 12 cm. 96 pág. a color. (300 g.)\r\n      </p>\r\n    </div>\r\n  </a>\r\n    \r\n</div>   -->\r\n\r\n<!-- <div  class=\"ae-masonry ae-masonry-md-2 ae-masonry-xl-4\">\r\n  \r\n  <a  \r\n  routerLink=\"/producto3\"  class=\"animated fadeIn rk-item ae-masonry__item\">\r\n    <img src=\"assets/productos/project-3.jpg\" alt=\"\">\r\n    <div  class=\"item-meta\">\r\n      <h2>CARTAGENA DE INDIAS , centro histórico- Getsemaní, Colombia mágica\r\n      </h2>\r\n      <p>Formato apaisado, 21 x 12 cm. 112 pág. a color. (330 g.)\r\n      </p>\r\n    </div>\r\n  </a>\r\n    \r\n</div>   -->\r\n\r\n\r\n\r\n<!-- CATEGORIA N°2 -->\r\n\r\n\r\n<!-- <div class=\"ae-grid__item item-lg-5 au-lg-ptp-1\">\r\n      \r\n  <h4 class=\"ae-u-bolder\">Aéreas</h4>\r\n            \r\n</div>  -->\r\n\r\n<hr>\r\n\r\n<div  class=\"ae-masonry ae-masonry-md-2 ae-masonry-xl-4\">\r\n <div>\r\n  <a  \r\n  routerLink=\"/producto5\"  class=\"animated fadeIn rk-item ae-masonry__item\">\r\n    <img src=\"assets/productos/project-5.jpg\" alt=\"\">\r\n    <div  class=\"item-meta\">\r\n      <h2>MEDELLÍN DESDE EL CIELO\r\n      </h2>\r\n      <p>Formato apaisado, 30 x 26 cm. 216 pág. a color. (1,8 kg.)\r\n      </p>\r\n    </div>\r\n  </a>\r\n </div> \r\n  \r\n <div>\r\n  <a  \r\n  routerLink=\"/producto6\" class=\"animated fadeIn rk-item ae-masonry__item\">\r\n    <img src=\"assets/productos/project-6.jpg\" alt=\"\">\r\n    <div  class=\"item-meta\">\r\n      <h2>AÉROPLANES CAUDRON FRÈRES 1,2,3,4\r\n      </h2>\r\n      <p>Formato vertical, 16,5 x 24 cm, 32 pág. cada uno con mas de 34 fotos de época.\r\n      </p>\r\n    </div>\r\n  </a>\r\n </div>\r\n\r\n <div>\r\n  <a  \r\n  routerLink=\"/producto7\"  class=\"animated fadeIn rk-item ae-masonry__item\">\r\n    <img src=\"assets/productos/project-7.jpg\" alt=\"\">\r\n    <div  class=\"item-meta\">\r\n      <h2>COLOMBIA DE ULTRAMAR DESDE EL CIELO\r\n        San Andrés, Providencia y Santa Catalina</h2>\r\n      <p>Formato apaisado, 27 x 25 cm. 190 pág. a color. (1,5 kg.)\r\n      </p>\r\n    </div>\r\n  </a>\r\n </div>\r\n\r\n <div>\r\n  <a  \r\n  routerLink=\"/producto8\"  class=\"animated fadeIn rk-item ae-masonry__item\">\r\n    <img src=\"assets/productos/project-8.jpg\" alt=\"\">\r\n    <div  class=\"item-meta\">\r\n      <h2>BOGOTA A VUELO DE CONDOR\r\n      </h2>\r\n      <p>Formato apaisado, 34 x 28 cm. 134 pág. a color. (1,5 kg.)\r\n      </p>\r\n    </div>\r\n  </a>\r\n </div>\r\n    \r\n</div>  \r\n\r\n<!-- <div  class=\"ae-masonry ae-masonry-md-2 ae-masonry-xl-4\">\r\n  \r\n  <a  \r\n  routerLink=\"/producto6\" class=\"animated fadeIn rk-item ae-masonry__item\">\r\n    <img src=\"assets/productos/project-6.jpg\" alt=\"\">\r\n    <div  class=\"item-meta\">\r\n      <h2>AÉROPLANES CAUDRON FRÈRES 1,2,3,4\r\n      </h2>\r\n      <p>Formato vertical, 16,5 x 24 cm, 32 pág. cada uno con mas de 34 fotos de época.\r\n      </p>\r\n    </div>\r\n  </a>\r\n    \r\n</div>   -->\r\n\r\n<!-- <div  class=\"ae-masonry ae-masonry-md-2 ae-masonry-xl-4\">\r\n  \r\n  <a  \r\n  routerLink=\"/producto7\"  class=\"animated fadeIn rk-item ae-masonry__item\">\r\n    <img src=\"assets/productos/project-7.jpg\" alt=\"\">\r\n    <div  class=\"item-meta\">\r\n      <h2>COLOMBIA DE ULTRAMAR DESDE EL CIELO\r\n        San Andrés, Providencia y Santa Catalina</h2>\r\n      <p>Formato apaisado, 27 x 25 cm. 190 pág. a color. (1,5 kg.)\r\n      </p>\r\n    </div>\r\n  </a>\r\n    \r\n</div>   -->\r\n\r\n<!-- <div  class=\"ae-masonry ae-masonry-md-2 ae-masonry-xl-4\">\r\n  \r\n  <a  \r\n  routerLink=\"/producto8\"  class=\"animated fadeIn rk-item ae-masonry__item\">\r\n    <img src=\"assets/productos/project-8.jpg\" alt=\"\">\r\n    <div  class=\"item-meta\">\r\n      <h2>BOGOTA A VUELO DE CONDOR\r\n      </h2>\r\n      <p>Formato apaisado, 34 x 28 cm. 134 pág. a color. (1,5 kg.)\r\n      </p>\r\n    </div>\r\n  </a>\r\n    \r\n</div>   -->\r\n\r\n<!-- CATEGORIA N°3 -->\r\n\r\n<!-- <div class=\"ae-grid__item item-lg-5 au-lg-ptp-1\">\r\n      \r\n  <h4 class=\"ae-u-bolder\">Otras categorias</h4>\r\n            \r\n</div>  -->\r\n\r\n<hr>\r\n\r\n<br>\r\n\r\n<hr>\r\n\r\n<div  class=\"ae-masonry ae-masonry-md-2 ae-masonry-xl-4\">\r\n  \r\n  <a  \r\n  routerLink=\"/producto9\"  class=\"animated fadeIn rk-item ae-masonry__item\">\r\n    <img src=\"assets/productos/project-9.jpg\" alt=\"\">\r\n    <div  class=\"item-meta\">\r\n      <h2>SABORES Y COLORES, recetas prácticas para toda ocasión\r\n      </h2>\r\n      <p>Formato cuadrado, 22,5 x 22,5 cm. 112 pág. a color. (700 g.)\r\n      </p>\r\n    </div>\r\n  </a>\r\n\r\n  <div>\r\n    <a  \r\n    routerLink=\"/producto10\"  class=\"animated fadeIn rk-item ae-masonry__item\">\r\n      <img src=\"assets/productos/project-10.jpg\" alt=\"\">\r\n      <div  class=\"item-meta\">\r\n        <h2>LEONIDAS LARA E HIJOS, Raíces que dejaron huella\r\n        </h2>\r\n        <p>Formato vertical 22 x 28 cm, 84 pág. A color. (640g.)\r\n        </p>\r\n      </div>\r\n    </a>\r\n  </div>\r\n    \r\n  <div>\r\n    <a  \r\n    routerLink=\"/producto11\"  class=\"animated fadeIn rk-item ae-masonry__item\">\r\n      <img src=\"assets/productos/project-11.jpg\" alt=\"\">\r\n      <div  class=\"item-meta\">\r\n        <h2>HOY COCINO YO, recetas prácticas para toda ocasión\r\n        </h2>\r\n        <p>formato cuadrado, 22,5 x 22,5 cm. 112 pág. a color. (700 g.)\r\n        </p>\r\n      </div>\r\n    </a>\r\n  </div>\r\n\r\n  <div>\r\n    <a  \r\n    routerLink=\"/producto4\"  class=\"animated fadeIn rk-item ae-masonry__item\">\r\n      <img src=\"assets/productos/project-4.jpg\" alt=\"\">\r\n      <div  class=\"item-meta\">\r\n        <h2>EL TRICOLOR DE LA LIBERTAD\r\n        </h2>\r\n        <p>Formato apaisado, 26x19 cm, 96 pág. a color. (600 g.)\r\n        </p>\r\n      </div>\r\n    </a>\r\n  </div>\r\n</div>  \r\n\r\n<!-- <div  class=\"ae-masonry ae-masonry-md-2 ae-masonry-xl-4\">\r\n  \r\n  <a  \r\n  routerLink=\"/producto10\"  class=\"animated fadeIn rk-item ae-masonry__item\">\r\n    <img src=\"assets/productos/project-10.jpg\" alt=\"\">\r\n    <div  class=\"item-meta\">\r\n      <h2>LEONIDAS LARA E HIJOS, Raíces que dejaron huella\r\n      </h2>\r\n      <p>Formato vertical 22 x 28 cm, 84 pág. A color. (640g.)\r\n      </p>\r\n    </div>\r\n  </a>\r\n    \r\n</div>   -->\r\n\r\n<!-- <div  class=\"ae-masonry ae-masonry-md-2 ae-masonry-xl-4\">\r\n  \r\n  <a  \r\n  routerLink=\"/producto11\"  class=\"animated fadeIn rk-item ae-masonry__item\">\r\n    <img src=\"assets/productos/project-11.jpg\" alt=\"\">\r\n    <div  class=\"item-meta\">\r\n      <h2>HOY COCINO YO, recetas prácticas para toda ocasión\r\n      </h2>\r\n      <p>formato cuadrado, 22,5 x 22,5 cm. 112 pág. a color. (700 g.)\r\n      </p>\r\n    </div>\r\n  </a>\r\n    \r\n</div>   -->\r\n\r\n\r\n<!-- <div  class=\"ae-masonry ae-masonry-md-2 ae-masonry-xl-4\">\r\n  \r\n  <a  \r\n  routerLink=\"/producto4\"  class=\"animated fadeIn rk-item ae-masonry__item\">\r\n    <img src=\"assets/productos/project-4.jpg\" alt=\"\">\r\n    <div  class=\"item-meta\">\r\n      <h2>EL TRICOLOR DE LA LIBERTAD\r\n      </h2>\r\n      <p>Formato apaisado, 26x19 cm, 96 pág. a color. (600 g.)\r\n      </p>\r\n    </div>\r\n  </a>\r\n    \r\n</div>   -->\r\n\r\n<!-- CATEGORIA N°1 -->\r\n\r\n<!-- <div class=\"ae-grid__item item-lg-5 au-lg-ptp-1\">\r\n        \r\n  <h4 class=\"ae-u-bolder\">Colombia Mágica</h4>\r\n            \r\n</div>  -->\r\n\r\n<hr>\r\n<br>\r\n\r\n<hr>\r\n\r\n<div class=\"ae-masonry ae-masonry-md-2 ae-masonry-xl-4\">\r\n  <div>\r\n    <a routerLink=\"/producto1\" class=\"animated fadeIn rk-item ae-masonry__item\">\r\n      <img src=\"assets/productos/project-1.jpg\" alt=\"\">\r\n      <div class=\"item-meta\">\r\n        <h2>VILLA DE LEYVA, Eccehomo, La Candelaria, Colombia Mágica</h2>\r\n        <p>Formato apaisado, 21 x 12 cm. 96 pág. a color. (300 g.)</p>\r\n      </div>\r\n    </a>\r\n  </div>\r\n  \r\n  <div>\r\n    \r\n  \r\n      <a routerLink=\"/producto2\"  class=\"animated fadeIn rk-item ae-masonry__item\">\r\n        <img src=\"assets/productos/project-2.jpg\" alt=\"\">\r\n        <div  class=\"item-meta\">\r\n          <h2>SEAFLOWER, Colombia Mágica\r\n          </h2>\r\n          <p>formato apaisado, 21 x 12 cm. 96 pág. a color. (300 g.)\r\n          </p>\r\n        </div>\r\n      </a>\r\n        \r\n     \r\n  </div>\r\n  <div>\r\n    \r\n  \r\n      <a  \r\n      routerLink=\"/producto3\"  class=\"animated fadeIn rk-item ae-masonry__item\">\r\n        <img src=\"assets/productos/project-3.jpg\" alt=\"\">\r\n        <div  class=\"item-meta\">\r\n          <h2>CARTAGENA DE INDIAS , centro histórico- Getsemaní, Colombia mágica\r\n          </h2>\r\n          <p>Formato apaisado, 21 x 12 cm. 112 pág. a color. (330 g.)\r\n          </p>\r\n        </div>\r\n      </a>\r\n        \r\n    \r\n  </div>\r\n  \r\n</div>  \r\n\r\n<hr>\r\n\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/pages/portafolio/portafolio.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/portafolio/portafolio.component.ts ***!
  \**********************************************************/
/*! exports provided: PortafolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortafolioComponent", function() { return PortafolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_productos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/productos.service */ "./src/app/services/productos.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PortafolioComponent = /** @class */ (function () {
    function PortafolioComponent(productosService) {
        this.productosService = productosService;
    }
    PortafolioComponent.prototype.ngOnInit = function () {
    };
    PortafolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portafolio',
            template: __webpack_require__(/*! ./portafolio.component.html */ "./src/app/pages/portafolio/portafolio.component.html"),
            styles: [__webpack_require__(/*! ./portafolio.component.css */ "./src/app/pages/portafolio/portafolio.component.css")]
        }),
        __metadata("design:paramtypes", [_services_productos_service__WEBPACK_IMPORTED_MODULE_1__["ProductosService"]])
    ], PortafolioComponent);
    return PortafolioComponent;
}());



/***/ }),

/***/ "./src/app/pages/producto1/producto1.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/producto1/producto1.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/producto1/producto1.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/producto1/producto1.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ae-container-fluid\">\n  <div class=\"ae-grid ae-grid--collapse rk-portfolio-info \">\n    <div class=\"ae-grid__item item-lg-8 item-sm--center au-xs-ta-center au-lg-ta-left\">\n      <h2 class=\"rk-portfolio-inner-title \"></h2>\n    </div>\n    <div class=\"ae-grid__item item-lg-4 au-xs-ta-center au-lg-ta-right rk-portfolio-details\">\n        \n      <p class=\"au-xs-ta-right au-pt-4 group-buttons\">\n        <a onclick=\"openForm()\" class=\"arrow-button arrow-button--right arrow-button--out\">\n          Comprar\n        </a>          \n      </p>        \n      </div>\n    </div>\n  </div>  \n\n<div class=\"modalDialog\" id=\"myForm\">  \n<form id=\"contact-form\" action=\"#0\" class=\"ae-form--full\">\n  \n  <input type=\"text\" placeholder=\"* Name\" required>\n  <input type=\"email\" placeholder=\"* Email\" required>\n  <textarea placeholder=\"Message ...\" cols=\"30\" rows=\"4\"></textarea>\n  <p class=\"au-xs-ta-right au-pt-4 group-buttons\"><a href=\"#0\" class=\"arrow-button arrow-button--right arrow-button--out\">Enviar<span class=\"arrow-cont\">\n        <svg>\n          <use xlink:href=\"assets/img/symbols.svg#arrow\"></use>\n        </svg></span></a></p>\n  <!--Cerrar Modal-->\n  <a href=\"#close\" title=\"Close\" class=\"close\">X</a>\n  <p class=\"au-xs-ta-right au-pt-4 group-buttons\"></p>\n</form>\n</div>\n  \n  \n  \n  <div class=\"ae-grid__item item-lg-8 item-sm--center au-xs-ta-center au-lg-ta-left\">\n    <h2 class=\"rk-portfolio-inner-title \">VILLA DE LEYVA, Eccehomo, La Candelaria, Colombia Mágica</h2>\n  </div>\n\n  <div class=\"ae-container-fluid ae-container-fluid--inner rk-portfolio--inner\">\n    <div class=\"ae-grid ae-grid--collapse au-xs-ptp-1\">\n      <div class=\"ae-grid__item item-lg-5 au-lg-ptp-1\">\n        <h4 class=\"ae-u-bolder\">VILLA DE LEYVA, Eccehomo, La Candelaria, Colombia Mágica\n        </h4>\n        <p class=\"ae-eta\">Recorrido casual por las calles de esta hermosa e histórica villa colonial y sus alrededores, que engalanan la pintoresca región de Boyacá.\n        </p>\n        \n<br>\n<br>\n<br>\n\n\n<li>\n  <p> Precio....</p>\n  <a>\n\n<input type=\"button\" value=\"$49.000.oo\">\n\n  </a>\n</li>\n\n      \n      </div>\n      <div class=\"ae-grid__item item-lg-6 item-lg--offset-1\">\n        <img src=\"assets/productos/prod-1/pic-1.jpg\" alt=\"Urku Portfolio\">\n      </div>\n    </div>"

/***/ }),

/***/ "./src/app/pages/producto1/producto1.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/producto1/producto1.component.ts ***!
  \********************************************************/
/*! exports provided: Producto1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Producto1Component", function() { return Producto1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Producto1Component = /** @class */ (function () {
    function Producto1Component() {
    }
    Producto1Component.prototype.ngOnInit = function () {
    };
    Producto1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-producto1',
            template: __webpack_require__(/*! ./producto1.component.html */ "./src/app/pages/producto1/producto1.component.html"),
            styles: [__webpack_require__(/*! ./producto1.component.css */ "./src/app/pages/producto1/producto1.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Producto1Component);
    return Producto1Component;
}());



/***/ }),

/***/ "./src/app/pages/producto10/producto10.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/producto10/producto10.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/producto10/producto10.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/producto10/producto10.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ae-container-fluid\">\n  <div class=\"ae-grid ae-grid--collapse rk-portfolio-info \">\n    <div class=\"ae-grid__item item-lg-8 item-sm--center au-xs-ta-center au-lg-ta-left\">\n      <h2 class=\"rk-portfolio-inner-title \"></h2>\n    </div>\n    <div class=\"ae-grid__item item-lg-4 au-xs-ta-center au-lg-ta-right rk-portfolio-details\">\n        \n      <p class=\"au-xs-ta-right au-pt-4 group-buttons\">\n        <a onclick=\"openForm()\" class=\"arrow-button arrow-button--right arrow-button--out\">\n          Comprar\n        </a>          \n      </p>        \n      </div>\n    </div>\n  </div>  \n\n<div class=\"modalDialog\" id=\"myForm\">  \n<form id=\"contact-form\" action=\"#0\" class=\"ae-form--full\">\n  \n  <input type=\"text\" placeholder=\"* Name\" required>\n  <input type=\"email\" placeholder=\"* Email\" required>\n  <textarea placeholder=\"Message ...\" cols=\"30\" rows=\"4\"></textarea>\n  <p class=\"au-xs-ta-right au-pt-4 group-buttons\"><a href=\"#0\" class=\"arrow-button arrow-button--right arrow-button--out\">Enviar<span class=\"arrow-cont\">\n        <svg>\n          <use xlink:href=\"assets/img/symbols.svg#arrow\"></use>\n        </svg></span></a></p>\n  <!--Cerrar Modal-->\n  <a href=\"#close\" title=\"Close\" class=\"close\">X</a>\n  <p class=\"au-xs-ta-right au-pt-4 group-buttons\"></p>\n</form>\n</div>\n\n\n  <div class=\"ae-grid__item item-lg-8 item-sm--center au-xs-ta-center au-lg-ta-left\">\n    <h2 class=\"rk-portfolio-inner-title \">LEONIDAS LARA E HIJOS, Raíces que dejaron huella</h2>\n  </div>\n  \n  <div class=\"ae-container-fluid ae-container-fluid--inner rk-portfolio--inner\">\n    <div class=\"ae-grid ae-grid--collapse au-xs-ptp-1\">\n      <div class=\"ae-grid__item item-lg-5 au-lg-ptp-1\">\n        <h4 class=\"ae-u-bolder\">LEONIDAS LARA E HIJOS, Raíces que dejaron huella\n        </h4>\n        <p class=\"ae-eta\">Recuento histórico de la vida y obra de un hombre que hizo patria en una Colombia llena de esperanza.\n        </p>   \n        \n        <br>\n        <br>\n\n        <li>\n          <p> Precio....</p>\n          <a>\n        \n        <input type=\"button\" value=\"No disponible temporalmente\">\n        \n          </a>\n        </li>\n\n      </div>\n      <div class=\"ae-grid__item item-lg-6 item-lg--offset-1\">\n        <img src=\"assets/productos/prod-10/pic-1.jpg\" alt=\"Urku Portfolio\">\n      </div>\n    </div>\n\n"

/***/ }),

/***/ "./src/app/pages/producto10/producto10.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/producto10/producto10.component.ts ***!
  \**********************************************************/
/*! exports provided: Producto10Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Producto10Component", function() { return Producto10Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Producto10Component = /** @class */ (function () {
    function Producto10Component() {
    }
    Producto10Component.prototype.ngOnInit = function () {
    };
    Producto10Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-producto10',
            template: __webpack_require__(/*! ./producto10.component.html */ "./src/app/pages/producto10/producto10.component.html"),
            styles: [__webpack_require__(/*! ./producto10.component.css */ "./src/app/pages/producto10/producto10.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Producto10Component);
    return Producto10Component;
}());



/***/ }),

/***/ "./src/app/pages/producto11/producto11.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/producto11/producto11.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/producto11/producto11.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/producto11/producto11.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ae-container-fluid\">\n  <div class=\"ae-grid ae-grid--collapse rk-portfolio-info \">\n    <div class=\"ae-grid__item item-lg-8 item-sm--center au-xs-ta-center au-lg-ta-left\">\n      <h2 class=\"rk-portfolio-inner-title \"></h2>\n    </div>\n    \n    <div class=\"ae-grid__item item-lg-4 au-xs-ta-center au-lg-ta-right rk-portfolio-details\">\n        \n      <p class=\"au-xs-ta-right au-pt-4 group-buttons\">\n        <a onclick=\"openForm()\" class=\"arrow-button arrow-button--right arrow-button--out\">\n          Comprar\n        </a>          \n      </p>        \n      </div>\n    </div>\n  </div>  \n\n<div class=\"modalDialog\" id=\"myForm\">  \n<form id=\"contact-form\" action=\"#0\" class=\"ae-form--full\">\n  \n  <input type=\"text\" placeholder=\"* Name\" required>\n  <input type=\"email\" placeholder=\"* Email\" required>\n  <textarea placeholder=\"Message ...\" cols=\"30\" rows=\"4\"></textarea>\n  <p class=\"au-xs-ta-right au-pt-4 group-buttons\"><a href=\"#0\" class=\"arrow-button arrow-button--right arrow-button--out\">Enviar<span class=\"arrow-cont\">\n        <svg>\n          <use xlink:href=\"assets/img/symbols.svg#arrow\"></use>\n        </svg></span></a></p>\n  <!--Cerrar Modal-->\n  <a href=\"#close\" title=\"Close\" class=\"close\">X</a>\n  <p class=\"au-xs-ta-right au-pt-4 group-buttons\"></p>\n</form>\n</div>\n\n\n  <div class=\"ae-grid__item item-lg-8 item-sm--center au-xs-ta-center au-lg-ta-left\">\n    <h2 class=\"rk-portfolio-inner-title \">HOY COCINO YO, recetas prácticas para toda ocasión</h2>\n  </div>\n\n  <div class=\"ae-container-fluid ae-container-fluid--inner rk-portfolio--inner\">\n    <div class=\"ae-grid ae-grid--collapse au-xs-ptp-1\">\n      <div class=\"ae-grid__item item-lg-5 au-lg-ptp-1\">\n        <h4 class=\"ae-u-bolder\">HOY COCINO YO, recetas prácticas para toda ocasión\n        </h4>\n        <p class=\"ae-eta\">La cocina es amor! 75 recetas prácticas, fáciles y deliciosas.\n        </p>   \n        \n        <br>\n        <br>\n\n        <li>\n          <p> Precio....</p>\n          <a>\n        \n        <input type=\"button\" value=\"$50.000.oo\">\n        \n          </a>\n        </li>\n\n\n      </div>\n      <div class=\"ae-grid__item item-lg-6 item-lg--offset-1\">\n        <img src=\"assets/productos/prod-11/pic-1.jpg\" alt=\"Urku Portfolio\">\n      </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/pages/producto11/producto11.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/producto11/producto11.component.ts ***!
  \**********************************************************/
/*! exports provided: Producto11Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Producto11Component", function() { return Producto11Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Producto11Component = /** @class */ (function () {
    function Producto11Component() {
    }
    Producto11Component.prototype.ngOnInit = function () {
    };
    Producto11Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-producto11',
            template: __webpack_require__(/*! ./producto11.component.html */ "./src/app/pages/producto11/producto11.component.html"),
            styles: [__webpack_require__(/*! ./producto11.component.css */ "./src/app/pages/producto11/producto11.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Producto11Component);
    return Producto11Component;
}());



/***/ }),

/***/ "./src/app/pages/producto2/producto2.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/producto2/producto2.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/producto2/producto2.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/producto2/producto2.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ae-container-fluid\">\n  <div class=\"ae-grid ae-grid--collapse rk-portfolio-info \">\n    <div class=\"ae-grid__item item-lg-8 item-sm--center au-xs-ta-center au-lg-ta-left\">\n      <h2 class=\"rk-portfolio-inner-title \"></h2>\n    </div>\n    <div class=\"ae-grid__item item-lg-4 au-xs-ta-center au-lg-ta-right rk-portfolio-details\">\n        \n      <p class=\"au-xs-ta-right au-pt-4 group-buttons\">\n        <a onclick=\"openForm()\" class=\"arrow-button arrow-button--right arrow-button--out\">\n          Comprar\n        </a>          \n      </p>        \n      </div>\n    </div>\n  </div>  \n\n<div class=\"modalDialog\" id=\"myForm\">  \n<form id=\"contact-form\" action=\"#0\" class=\"ae-form--full\">\n  \n  <input type=\"text\" placeholder=\"* Name\" required>\n  <input type=\"email\" placeholder=\"* Email\" required>\n  <textarea placeholder=\"Message ...\" cols=\"30\" rows=\"4\"></textarea>\n  <p class=\"au-xs-ta-right au-pt-4 group-buttons\"><a href=\"#0\" class=\"arrow-button arrow-button--right arrow-button--out\">Enviar<span class=\"arrow-cont\">\n        <svg>\n          <use xlink:href=\"assets/img/symbols.svg#arrow\"></use>\n        </svg></span></a></p>\n  <!--Cerrar Modal-->\n  <a href=\"#close\" title=\"Close\" class=\"close\">X</a>\n  <p class=\"au-xs-ta-right au-pt-4 group-buttons\"></p>\n</form>\n</div>\n  \n\n  <div class=\"ae-grid__item item-lg-8 item-sm--center au-xs-ta-center au-lg-ta-left\">\n    <h2 class=\"rk-portfolio-inner-title \">SEAFLOWER, Colombia Mágica</h2>\n  </div>\n\n\n  <div class=\"ae-container-fluid ae-container-fluid--inner rk-portfolio--inner\">\n    <div class=\"ae-grid ae-grid--collapse au-xs-ptp-1\">\n      <div class=\"ae-grid__item item-lg-5 au-lg-ptp-1\">\n        <h4 class=\"ae-u-bolder\">SEAFLOWER, Colombia Mágica</h4>\n        <p class=\"ae-eta\">Seaflower es la reserva de biosfera declarada Patrimonio de la Humanidad por la UNESCO, ubicada en el Archipiélago de San Andrés, Providencia y Santa Catalina,  departamento colombiano de la región caribe.\n\n        </p>\n        \n        <br>\n\n        <br>\n\n        <li>\n          <p> Precio....</p>\n          <a>\n        \n        <input type=\"button\" value=\"$49.000.oo\">\n        \n          </a>\n        </li>\n        \n      </div>\n      <div class=\"ae-grid__item item-lg-6 item-lg--offset-1\">\n        <img src=\"assets/productos/prod-2/pic-1.jpg\" alt=\"Urku Portfolio\">\n      </div>\n    </div>\n\n    "

/***/ }),

/***/ "./src/app/pages/producto2/producto2.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/producto2/producto2.component.ts ***!
  \********************************************************/
/*! exports provided: Producto2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Producto2Component", function() { return Producto2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Producto2Component = /** @class */ (function () {
    function Producto2Component() {
    }
    Producto2Component.prototype.ngOnInit = function () {
    };
    Producto2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-producto2',
            template: __webpack_require__(/*! ./producto2.component.html */ "./src/app/pages/producto2/producto2.component.html"),
            styles: [__webpack_require__(/*! ./producto2.component.css */ "./src/app/pages/producto2/producto2.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Producto2Component);
    return Producto2Component;
}());



/***/ }),

/***/ "./src/app/pages/producto3/producto3.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/producto3/producto3.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/producto3/producto3.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/producto3/producto3.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ae-container-fluid\">\n  <div class=\"ae-grid ae-grid--collapse rk-portfolio-info \">\n    <div class=\"ae-grid__item item-lg-8 item-sm--center au-xs-ta-center au-lg-ta-left\">\n      <h2 class=\"rk-portfolio-inner-title \"></h2>\n    </div>\n    <div class=\"ae-grid__item item-lg-4 au-xs-ta-center au-lg-ta-right rk-portfolio-details\">\n        \n      <p class=\"au-xs-ta-right au-pt-4 group-buttons\">\n        <a onclick=\"openForm()\" class=\"arrow-button arrow-button--right arrow-button--out\">\n          Comprar\n        </a>          \n      </p>        \n      </div>\n    </div>\n  </div>  \n\n<div class=\"modalDialog\" id=\"myForm\">  \n<form id=\"contact-form\" action=\"#0\" class=\"ae-form--full\">\n  \n  <input type=\"text\" placeholder=\"* Name\" required>\n  <input type=\"email\" placeholder=\"* Email\" required>\n  <textarea placeholder=\"Message ...\" cols=\"30\" rows=\"4\"></textarea>\n  <p class=\"au-xs-ta-right au-pt-4 group-buttons\"><a href=\"#0\" class=\"arrow-button arrow-button--right arrow-button--out\">Enviar<span class=\"arrow-cont\">\n        <svg>\n          <use xlink:href=\"assets/img/symbols.svg#arrow\"></use>\n        </svg></span></a></p>\n  <!--Cerrar Modal-->\n  <a href=\"#close\" title=\"Close\" class=\"close\">X</a>\n  <p class=\"au-xs-ta-right au-pt-4 group-buttons\"></p>\n</form>\n</div>\n  \n  <div class=\"ae-grid__item item-lg-8 item-sm--center au-xs-ta-center au-lg-ta-left\">\n    <h2 class=\"rk-portfolio-inner-title \">CARTAGENA DE INDIAS , centro histórico- Getsemaní, Colombia mágica</h2>\n  </div>\n\n  <div class=\"ae-container-fluid ae-container-fluid--inner rk-portfolio--inner\">\n    <div class=\"ae-grid ae-grid--collapse au-xs-ptp-1\">\n      <div class=\"ae-grid__item item-lg-5 au-lg-ptp-1\">\n        <h4 class=\"ae-u-bolder\">CARTAGENA DE INDIAS , centro histórico- Getsemaní, Colombia mágica\n        </h4>\n        <p class=\"ae-eta\">Recorrido casual por las calles de este hermoso e histórico sector colonial amurallado, de esta ciudad vibrante del caribe colombiano.\n        </p> \n        \n        <br>\n\n        <br>\n\n        <li>\n          <p> Precio....</p>\n          <a>\n        \n        <input type=\"button\" value=\"$49.000.oo\">\n        \n          </a>\n        </li>\n\n      </div>\n      <div class=\"ae-grid__item item-lg-6 item-lg--offset-1\">\n        <img src=\"assets/productos/prod-3/pic-1.jpg\" alt=\"Urku Portfolio\">\n      </div>\n    </div>\n\n\n"

/***/ }),

/***/ "./src/app/pages/producto3/producto3.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/producto3/producto3.component.ts ***!
  \********************************************************/
/*! exports provided: Producto3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Producto3Component", function() { return Producto3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Producto3Component = /** @class */ (function () {
    function Producto3Component() {
    }
    Producto3Component.prototype.ngOnInit = function () {
    };
    Producto3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-producto3',
            template: __webpack_require__(/*! ./producto3.component.html */ "./src/app/pages/producto3/producto3.component.html"),
            styles: [__webpack_require__(/*! ./producto3.component.css */ "./src/app/pages/producto3/producto3.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Producto3Component);
    return Producto3Component;
}());



/***/ }),

/***/ "./src/app/pages/producto4/producto4.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/producto4/producto4.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/producto4/producto4.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/producto4/producto4.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ae-container-fluid\">\n  <div class=\"ae-grid ae-grid--collapse rk-portfolio-info \">\n    <div class=\"ae-grid__item item-lg-8 item-sm--center au-xs-ta-center au-lg-ta-left\">\n      <h2 class=\"rk-portfolio-inner-title \"></h2>\n    </div>\n    \n    <div class=\"ae-grid__item item-lg-4 au-xs-ta-center au-lg-ta-right rk-portfolio-details\">\n        \n      <p class=\"au-xs-ta-right au-pt-4 group-buttons\">\n        <a onclick=\"openForm()\" class=\"arrow-button arrow-button--right arrow-button--out\">\n          Comprar\n        </a>          \n      </p>        \n      </div>\n    </div>\n  </div>  \n\n<div class=\"modalDialog\" id=\"myForm\">  \n<form id=\"contact-form\" action=\"#0\" class=\"ae-form--full\">\n  \n  <input type=\"text\" placeholder=\"* Name\" required>\n  <input type=\"email\" placeholder=\"* Email\" required>\n  <textarea placeholder=\"Message ...\" cols=\"30\" rows=\"4\"></textarea>\n  <p class=\"au-xs-ta-right au-pt-4 group-buttons\"><a href=\"#0\" class=\"arrow-button arrow-button--right arrow-button--out\">Enviar<span class=\"arrow-cont\">\n        <svg>\n          <use xlink:href=\"assets/img/symbols.svg#arrow\"></use>\n        </svg></span></a></p>\n  <!--Cerrar Modal-->\n  <a href=\"#close\" title=\"Close\" class=\"close\">X</a>\n  <p class=\"au-xs-ta-right au-pt-4 group-buttons\"></p>\n</form>\n</div>\n\n  <div class=\"ae-grid__item item-lg-8 item-sm--center au-xs-ta-center au-lg-ta-left\">\n    <h2 class=\"rk-portfolio-inner-title \">EL TRICOLOR DE LA LIBERTAD</h2>\n  </div>\n  \n  <div class=\"ae-container-fluid ae-container-fluid--inner rk-portfolio--inner\">\n    <div class=\"ae-grid ae-grid--collapse au-xs-ptp-1\">\n      <div class=\"ae-grid__item item-lg-5 au-lg-ptp-1\">\n        <h4 class=\"ae-u-bolder\">EL TRICOLOR DE LA LIBERTAD\n        </h4>\n        <p class=\"ae-eta\">La historia del origen de la bandera colombiana, narrada en ilustraciones artísticas, destacando los factores geopolíticos que llevaron a su creación . \n        </p>    \n        \n        <br>\n\n        <br>\n\n        <li>\n          <p> Precio....</p>\n          <a>\n        \n        <input type=\"button\" value=\"$60.000.oo\">\n        \n          </a>\n        </li>\n\n\n      </div>\n      <div class=\"ae-grid__item item-lg-6 item-lg--offset-1\">\n        <img src=\"assets/productos/prod-4/pic-1.jpg\" alt=\"Urku Portfolio\">\n      </div>\n    </div>\n\n   "

/***/ }),

/***/ "./src/app/pages/producto4/producto4.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/producto4/producto4.component.ts ***!
  \********************************************************/
/*! exports provided: Producto4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Producto4Component", function() { return Producto4Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Producto4Component = /** @class */ (function () {
    function Producto4Component() {
    }
    Producto4Component.prototype.ngOnInit = function () {
    };
    Producto4Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-producto4',
            template: __webpack_require__(/*! ./producto4.component.html */ "./src/app/pages/producto4/producto4.component.html"),
            styles: [__webpack_require__(/*! ./producto4.component.css */ "./src/app/pages/producto4/producto4.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Producto4Component);
    return Producto4Component;
}());



/***/ }),

/***/ "./src/app/pages/producto5/producto5.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/producto5/producto5.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/producto5/producto5.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/producto5/producto5.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ae-container-fluid\">\n  <div class=\"ae-grid ae-grid--collapse rk-portfolio-info \">\n    <div class=\"ae-grid__item item-lg-8 item-sm--center au-xs-ta-center au-lg-ta-left\">\n      <h2 class=\"rk-portfolio-inner-title \"></h2>\n    </div>\n    \n    <div class=\"ae-grid__item item-lg-4 au-xs-ta-center au-lg-ta-right rk-portfolio-details\">\n        \n      <p class=\"au-xs-ta-right au-pt-4 group-buttons\">\n        <a onclick=\"openForm()\" class=\"arrow-button arrow-button--right arrow-button--out\">\n          Comprar\n        </a>          \n      </p>        \n      </div>\n    </div>\n  </div>  \n\n<div class=\"modalDialog\" id=\"myForm\">  \n<form id=\"contact-form\" action=\"#0\" class=\"ae-form--full\">\n  \n  <input type=\"text\" placeholder=\"* Name\" required>\n  <input type=\"email\" placeholder=\"* Email\" required>\n  <textarea placeholder=\"Message ...\" cols=\"30\" rows=\"4\"></textarea>\n  <p class=\"au-xs-ta-right au-pt-4 group-buttons\"><a href=\"#0\" class=\"arrow-button arrow-button--right arrow-button--out\">Enviar<span class=\"arrow-cont\">\n        <svg>\n          <use xlink:href=\"assets/img/symbols.svg#arrow\"></use>\n        </svg></span></a></p>\n  <!--Cerrar Modal-->\n  <a href=\"#close\" title=\"Close\" class=\"close\">X</a>\n  <p class=\"au-xs-ta-right au-pt-4 group-buttons\"></p>\n</form>\n</div>\n  \n  <div class=\"ae-grid__item item-lg-8 item-sm--center au-xs-ta-center au-lg-ta-left\">\n    <h2 class=\"rk-portfolio-inner-title \">MEDELLÍN DESDE EL CIELO</h2>\n  </div>\n\n  <div class=\"ae-container-fluid ae-container-fluid--inner rk-portfolio--inner\">\n    <div class=\"ae-grid ae-grid--collapse au-xs-ptp-1\">\n      <div class=\"ae-grid__item item-lg-5 au-lg-ptp-1\">\n        <h4 class=\"ae-u-bolder\">MEDELLÍN DESDE EL CIELO\n        </h4>\n        <p class=\"ae-eta\">Descripción detallada en imágenes aéreas de esta hermosa ciudad colombiana.\n        </p>\n        \n        <br>\n\n        <br>\n\n        <li>\n          <p> Precio....</p>\n          <a>\n        \n        <input type=\"button\" value=\"$138.000.oo\">\n        \n          </a>\n        </li>\n\n      </div>\n      <div class=\"ae-grid__item item-lg-6 item-lg--offset-1\">\n        <img src=\"assets/productos/prod-5/pic-1.jpg\" alt=\"Urku Portfolio\">\n      </div>\n    </div>\n\n    "

/***/ }),

/***/ "./src/app/pages/producto5/producto5.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/producto5/producto5.component.ts ***!
  \********************************************************/
/*! exports provided: Producto5Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Producto5Component", function() { return Producto5Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Producto5Component = /** @class */ (function () {
    function Producto5Component() {
    }
    Producto5Component.prototype.ngOnInit = function () {
    };
    Producto5Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-producto5',
            template: __webpack_require__(/*! ./producto5.component.html */ "./src/app/pages/producto5/producto5.component.html"),
            styles: [__webpack_require__(/*! ./producto5.component.css */ "./src/app/pages/producto5/producto5.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Producto5Component);
    return Producto5Component;
}());



/***/ }),

/***/ "./src/app/pages/producto6/producto6.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/producto6/producto6.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/producto6/producto6.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/producto6/producto6.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ae-container-fluid\">\n  <div class=\"ae-grid ae-grid--collapse rk-portfolio-info \">\n    <div class=\"ae-grid__item item-lg-8 item-sm--center au-xs-ta-center au-lg-ta-left\">\n      <h2 class=\"rk-portfolio-inner-title \"></h2>\n    </div>\n    <div class=\"ae-grid__item item-lg-4 au-xs-ta-center au-lg-ta-right rk-portfolio-details\">\n        \n      <p class=\"au-xs-ta-right au-pt-4 group-buttons\">\n        <a onclick=\"openForm()\" class=\"arrow-button arrow-button--right arrow-button--out\">\n          Comprar\n        </a>          \n      </p>        \n      </div>\n    </div>\n  </div>  \n\n<div class=\"modalDialog\" id=\"myForm\">  \n<form id=\"contact-form\" action=\"#0\" class=\"ae-form--full\">\n  \n  <input type=\"text\" placeholder=\"* Name\" required>\n  <input type=\"email\" placeholder=\"* Email\" required>\n  <textarea placeholder=\"Message ...\" cols=\"30\" rows=\"4\"></textarea>\n  <p class=\"au-xs-ta-right au-pt-4 group-buttons\"><a href=\"#0\" class=\"arrow-button arrow-button--right arrow-button--out\">Enviar<span class=\"arrow-cont\">\n        <svg>\n          <use xlink:href=\"assets/img/symbols.svg#arrow\"></use>\n        </svg></span></a></p>\n  <!--Cerrar Modal-->\n  <a href=\"#close\" title=\"Close\" class=\"close\">X</a>\n  <p class=\"au-xs-ta-right au-pt-4 group-buttons\"></p>\n</form>\n</div>\n  \n  <div class=\"ae-grid__item item-lg-8 item-sm--center au-xs-ta-center au-lg-ta-left\">\n    <h2 class=\"rk-portfolio-inner-title \">AÉROPLANES CAUDRON FRÈRES 1,2,3,4</h2>\n  </div>\n\n  <div class=\"ae-container-fluid ae-container-fluid--inner rk-portfolio--inner\">\n    <div class=\"ae-grid ae-grid--collapse au-xs-ptp-1\">\n      <div class=\"ae-grid__item item-lg-5 au-lg-ptp-1\">\n        <h4 class=\"ae-u-bolder\">AÉROPLANES CAUDRON FRÈRES 1,2,3,4\n        </h4>\n        <p class=\"ae-eta\">cuadernillos sobre la historia de los hermanos Caudron, franceses constructores de aviones, quienes diseñaron más de 200 aviones que volaron alrededor del mundo.\n        </p>    \n        \n        <br>\n        <br>\n        <li>\n          <p> Precio....</p>\n          <a>\n        \n        <input type=\"button\" value=\"No disponible temporalmente\">\n        \n          </a>\n        </li>\n\n\n      </div>\n      <div class=\"ae-grid__item item-lg-6 item-lg--offset-1\">\n        <img src=\"assets/productos/prod-6/pic-1.jpg\" alt=\"Urku Portfolio\">\n      </div>\n    </div>\n\n\n   "

/***/ }),

/***/ "./src/app/pages/producto6/producto6.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/producto6/producto6.component.ts ***!
  \********************************************************/
/*! exports provided: Producto6Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Producto6Component", function() { return Producto6Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Producto6Component = /** @class */ (function () {
    function Producto6Component() {
    }
    Producto6Component.prototype.ngOnInit = function () {
    };
    Producto6Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-producto6',
            template: __webpack_require__(/*! ./producto6.component.html */ "./src/app/pages/producto6/producto6.component.html"),
            styles: [__webpack_require__(/*! ./producto6.component.css */ "./src/app/pages/producto6/producto6.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Producto6Component);
    return Producto6Component;
}());



/***/ }),

/***/ "./src/app/pages/producto7/producto7.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/producto7/producto7.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/producto7/producto7.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/producto7/producto7.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ae-container-fluid\">\n  <div class=\"ae-grid ae-grid--collapse rk-portfolio-info \">\n    <div class=\"ae-grid__item item-lg-8 item-sm--center au-xs-ta-center au-lg-ta-left\">\n      <h2 class=\"rk-portfolio-inner-title \"></h2>\n    </div>\n    \n    <div class=\"ae-grid__item item-lg-4 au-xs-ta-center au-lg-ta-right rk-portfolio-details\">\n        \n      <p class=\"au-xs-ta-right au-pt-4 group-buttons\">\n        <a onclick=\"openForm()\" class=\"arrow-button arrow-button--right arrow-button--out\">\n          Comprar\n        </a>          \n      </p>        \n      </div>\n    </div>\n  </div>  \n\n<div class=\"modalDialog\" id=\"myForm\">  \n<form id=\"contact-form\" action=\"#0\" class=\"ae-form--full\">\n  \n  <input type=\"text\" placeholder=\"* Name\" required>\n  <input type=\"email\" placeholder=\"* Email\" required>\n  <textarea placeholder=\"Message ...\" cols=\"30\" rows=\"4\"></textarea>\n  <p class=\"au-xs-ta-right au-pt-4 group-buttons\"><a href=\"#0\" class=\"arrow-button arrow-button--right arrow-button--out\">Enviar<span class=\"arrow-cont\">\n        <svg>\n          <use xlink:href=\"assets/img/symbols.svg#arrow\"></use>\n        </svg></span></a></p>\n  <!--Cerrar Modal-->\n  <a href=\"#close\" title=\"Close\" class=\"close\">X</a>\n  <p class=\"au-xs-ta-right au-pt-4 group-buttons\"></p>\n</form>\n</div>\n  \n  <div class=\"ae-grid__item item-lg-8 item-sm--center au-xs-ta-center au-lg-ta-left\">\n    <h2 class=\"rk-portfolio-inner-title \">COLOMBIA DE ULTRAMAR DESDE EL CIELO\n      San Andrés, Providencia y Santa Catalina</h2>\n  </div>\n\n  <div class=\"ae-container-fluid ae-container-fluid--inner rk-portfolio--inner\">\n    <div class=\"ae-grid ae-grid--collapse au-xs-ptp-1\">\n      <div class=\"ae-grid__item item-lg-5 au-lg-ptp-1\">\n        <h4 class=\"ae-u-bolder\">COLOMBIA DE ULTRAMAR DESDE EL CIELO\n          San Andrés, Providencia y Santa Catalina\n          </h4>\n        <p class=\"ae-eta\">Un «tour aéreo» al rededor de estas hermosas islas colombianas.\n        </p>\n        \n        <br>\n        <br>\n\n        <li>\n          <p> Precio....</p>\n          <a>\n        \n        <input type=\"button\" value=\"$120.000.oo \">\n        \n          </a>\n        </li>\n\n      </div>\n      <div class=\"ae-grid__item item-lg-6 item-lg--offset-1\">\n        <img src=\"assets/productos/prod-7/pic-1.jpg\" alt=\"Urku Portfolio\">\n      </div>\n    </div>\n\n\n    "

/***/ }),

/***/ "./src/app/pages/producto7/producto7.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/producto7/producto7.component.ts ***!
  \********************************************************/
/*! exports provided: Producto7Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Producto7Component", function() { return Producto7Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Producto7Component = /** @class */ (function () {
    function Producto7Component() {
    }
    Producto7Component.prototype.ngOnInit = function () {
    };
    Producto7Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-producto7',
            template: __webpack_require__(/*! ./producto7.component.html */ "./src/app/pages/producto7/producto7.component.html"),
            styles: [__webpack_require__(/*! ./producto7.component.css */ "./src/app/pages/producto7/producto7.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Producto7Component);
    return Producto7Component;
}());



/***/ }),

/***/ "./src/app/pages/producto8/producto8.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/producto8/producto8.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/producto8/producto8.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/producto8/producto8.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ae-container-fluid\">\n  <div class=\"ae-grid ae-grid--collapse rk-portfolio-info \">\n    <div class=\"ae-grid__item item-lg-8 item-sm--center au-xs-ta-center au-lg-ta-left\">\n      <h2 class=\"rk-portfolio-inner-title \"></h2>\n    </div>\n    <div class=\"ae-grid__item item-lg-4 au-xs-ta-center au-lg-ta-right rk-portfolio-details\">\n        \n      <p class=\"au-xs-ta-right au-pt-4 group-buttons\">\n        <a onclick=\"openForm()\" class=\"arrow-button arrow-button--right arrow-button--out\">\n          Comprar\n        </a>          \n      </p>        \n      </div>\n    </div>\n  </div>  \n\n<div class=\"modalDialog\" id=\"myForm\">  \n<form id=\"contact-form\" action=\"#0\" class=\"ae-form--full\">\n  \n  <input type=\"text\" placeholder=\"* Name\" required>\n  <input type=\"email\" placeholder=\"* Email\" required>\n  <textarea placeholder=\"Message ...\" cols=\"30\" rows=\"4\"></textarea>\n  <p class=\"au-xs-ta-right au-pt-4 group-buttons\"><a href=\"#0\" class=\"arrow-button arrow-button--right arrow-button--out\">Enviar<span class=\"arrow-cont\">\n        <svg>\n          <use xlink:href=\"assets/img/symbols.svg#arrow\"></use>\n        </svg></span></a></p>\n  <!--Cerrar Modal-->\n  <a href=\"#close\" title=\"Close\" class=\"close\">X</a>\n  <p class=\"au-xs-ta-right au-pt-4 group-buttons\"></p>\n</form>\n</div>\n  <div class=\"ae-grid__item item-lg-8 item-sm--center au-xs-ta-center au-lg-ta-left\">\n    <h2 class=\"rk-portfolio-inner-title \">BOGOTA A VUELO DE CONDOR</h2>\n  </div>\n\n  <div class=\"ae-container-fluid ae-container-fluid--inner rk-portfolio--inner\">\n    <div class=\"ae-grid ae-grid--collapse au-xs-ptp-1\">\n      <div class=\"ae-grid__item item-lg-5 au-lg-ptp-1\">\n        <h4 class=\"ae-u-bolder\">BOGOTA A VUELO DE CONDOR\n        </h4>\n        <p class=\"ae-eta\">Recuento de Bogotá en imágenes aéreas que describen en detalle calles y barrios de la capital Colombiana.\t\n        </p>  \n        \n        <br>\n        <br>\n\n        <li>\n          <p> Precio....</p>\n          <a>\n        \n        <input type=\"button\" value=\"No disponible temporalmente\">\n        \n          </a>\n        </li>\n\n      </div>\n      <div class=\"ae-grid__item item-lg-6 item-lg--offset-1\">\n        <img src=\"assets/productos/prod-8/pic-1.jpg\" alt=\"Urku Portfolio\">\n      </div>\n    </div>"

/***/ }),

/***/ "./src/app/pages/producto8/producto8.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/producto8/producto8.component.ts ***!
  \********************************************************/
/*! exports provided: Producto8Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Producto8Component", function() { return Producto8Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Producto8Component = /** @class */ (function () {
    function Producto8Component() {
    }
    Producto8Component.prototype.ngOnInit = function () {
    };
    Producto8Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-producto8',
            template: __webpack_require__(/*! ./producto8.component.html */ "./src/app/pages/producto8/producto8.component.html"),
            styles: [__webpack_require__(/*! ./producto8.component.css */ "./src/app/pages/producto8/producto8.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Producto8Component);
    return Producto8Component;
}());



/***/ }),

/***/ "./src/app/pages/producto9/producto9.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/producto9/producto9.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/producto9/producto9.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/producto9/producto9.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ae-container-fluid\">\n  <div class=\"ae-grid ae-grid--collapse rk-portfolio-info \">\n    <div class=\"ae-grid__item item-lg-8 item-sm--center au-xs-ta-center au-lg-ta-left\">\n      <h2 class=\"rk-portfolio-inner-title \"></h2>\n    </div>\n    <div class=\"ae-grid__item item-lg-4 au-xs-ta-center au-lg-ta-right rk-portfolio-details\">\n        \n      <p class=\"au-xs-ta-right au-pt-4 group-buttons\">\n        <a onclick=\"openForm()\" class=\"arrow-button arrow-button--right arrow-button--out\">\n          Comprar\n        </a>          \n      </p>        \n      </div>\n    </div>\n  </div>  \n\n<div class=\"modalDialog\" id=\"myForm\">  \n<form id=\"contact-form\" action=\"#0\" class=\"ae-form--full\">\n  \n  <input type=\"text\" placeholder=\"* Name\" required>\n  <input type=\"email\" placeholder=\"* Email\" required>\n  <textarea placeholder=\"Message ...\" cols=\"30\" rows=\"4\"></textarea>\n  <p class=\"au-xs-ta-right au-pt-4 group-buttons\"><a href=\"#0\" class=\"arrow-button arrow-button--right arrow-button--out\">Enviar<span class=\"arrow-cont\">\n        <svg>\n          <use xlink:href=\"assets/img/symbols.svg#arrow\"></use>\n        </svg></span></a></p>\n  <!--Cerrar Modal-->\n  <a href=\"#close\" title=\"Close\" class=\"close\">X</a>\n  <p class=\"au-xs-ta-right au-pt-4 group-buttons\"></p>\n</form>\n</div>\n\n  <div class=\"ae-grid__item item-lg-8 item-sm--center au-xs-ta-center au-lg-ta-left\">\n    <h2 class=\"rk-portfolio-inner-title \">SABORES Y COLORES, recetas prácticas para toda ocasión</h2>\n  </div>\n  \n  <div class=\"ae-container-fluid ae-container-fluid--inner rk-portfolio--inner\">\n    <div class=\"ae-grid ae-grid--collapse au-xs-ptp-1\">\n      <div class=\"ae-grid__item item-lg-5 au-lg-ptp-1\">\n        <h4 class=\"ae-u-bolder\">SABORES Y COLORES, recetas prácticas para toda ocasión\n        </h4>\n        <p class=\"ae-eta\">70 recetas para sacarle el mejor provecho a las especias de El Rey,\n          de tradición en los hogares colombianos.\n          </p>       \n          \n          <br>\n          <br>\n  \n          <li>\n            <p> Precio....</p>\n            <a>\n          \n          <input type=\"button\" value=\"$50.000.oo\">\n          \n            </a>\n          </li>\n\n      </div>\n      <div class=\"ae-grid__item item-lg-6 item-lg--offset-1\">\n        <img src=\"assets/productos/prod-9/pic-1.jpg\" alt=\"Urku Portfolio\">\n      </div>\n    </div>"

/***/ }),

/***/ "./src/app/pages/producto9/producto9.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/producto9/producto9.component.ts ***!
  \********************************************************/
/*! exports provided: Producto9Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Producto9Component", function() { return Producto9Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Producto9Component = /** @class */ (function () {
    function Producto9Component() {
    }
    Producto9Component.prototype.ngOnInit = function () {
    };
    Producto9Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-producto9',
            template: __webpack_require__(/*! ./producto9.component.html */ "./src/app/pages/producto9/producto9.component.html"),
            styles: [__webpack_require__(/*! ./producto9.component.css */ "./src/app/pages/producto9/producto9.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Producto9Component);
    return Producto9Component;
}());



/***/ }),

/***/ "./src/app/pages/search/search.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/search/search.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/search/search.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/search/search.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ae-masonry ae-masonry-md-2 ae-masonry-xl-4\">\r\n    \r\n    <a *ngFor=\"let producto of productoService.productosFiltrado\" \r\n        [routerLink]=\"['/item', producto.cod ]\" class=\"animated fadeIn rk-item ae-masonry__item\">\r\n      <img src=\"assets/productos/{{ producto.url }}.jpg\" alt=\"\">\r\n      <div [routerLink]=\"['/item', producto.cod ]\" class=\"item-meta\">\r\n        <h2>{{ producto.titulo }}</h2>\r\n        <p>{{ producto.categoria }}</p>\r\n      </div>\r\n    </a>\r\n      \r\n  </div>"

/***/ }),

/***/ "./src/app/pages/search/search.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/search/search.component.ts ***!
  \**************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_productos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/productos.service */ "./src/app/services/productos.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = /** @class */ (function () {
    function SearchComponent(route, productoService) {
        this.route = route;
        this.productoService = productoService;
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            console.log(params['termino']);
            _this.productoService.buscarProducto(params['termino']);
        });
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/pages/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/pages/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_productos_service__WEBPACK_IMPORTED_MODULE_2__["ProductosService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/services/info-pagina.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/info-pagina.service.ts ***!
  \*************************************************/
/*! exports provided: InfoPaginaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPaginaService", function() { return InfoPaginaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InfoPaginaService = /** @class */ (function () {
    function InfoPaginaService(http) {
        this.http = http;
        this.info = {};
        this.cargada = false;
        this.equipo = [];
        this.cargarInfo();
        this.cargarEquipo();
    }
    InfoPaginaService.prototype.cargarInfo = function () {
        var _this = this;
        // Leer el archivo JSON
        this.http.get('assets/data/data-pagina.json')
            .subscribe(function (resp) {
            _this.cargada = true;
            _this.info = resp;
        });
    };
    InfoPaginaService.prototype.cargarEquipo = function () {
        var _this = this;
        // Leer el archivo JSON
        this.http.get('https://angular-html-25cf9.firebaseio.com/equipo.json')
            .subscribe(function (resp) {
            _this.equipo = resp;
            // console.log(resp);
        });
        // this.equipo = resp
    };
    InfoPaginaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], InfoPaginaService);
    return InfoPaginaService;
}());



/***/ }),

/***/ "./src/app/services/productos.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/productos.service.ts ***!
  \***********************************************/
/*! exports provided: ProductosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosService", function() { return ProductosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductosService = /** @class */ (function () {
    function ProductosService(http) {
        this.http = http;
        this.cargando = true;
        this.productos = [];
        this.productosFiltrado = [];
        this.cargarProductos();
    }
    ProductosService.prototype.cargarProductos = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('https://joa-editores.firebaseio.com/productos_idx.json')
                .subscribe(function (resp) {
                _this.productos = resp;
                _this.cargando = false;
                resolve();
            });
            _this.cargando = false;
        });
    };
    ProductosService.prototype.getProducto = function (id) {
        return this.http.get("https://joa-editores.firebaseio.com/productos/" + id + ".json");
    };
    ProductosService.prototype.buscarProducto = function (termino) {
        var _this = this;
        if (this.productos.length === 0) {
            // cargar productos
            this.cargarProductos().then(function () {
                // ejecutar después de tener los productos
                // Aplicar filtro
                _this.filtrarProductos(termino);
            });
        }
        else {
            // aplicar el filtro
            this.filtrarProductos(termino);
        }
    };
    ProductosService.prototype.filtrarProductos = function (termino) {
        var _this = this;
        // console.log(this.productos);
        this.productosFiltrado = [];
        termino = termino.toLocaleLowerCase();
        this.productos.forEach(function (prod) {
            var tituloLower = prod.titulo.toLocaleLowerCase();
            if (prod.categoria.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0) {
                _this.productosFiltrado.push(prod);
            }
        });
    };
    ProductosService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProductosService);
    return ProductosService;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"ae-container-fluid rk-footer \">\r\n    <div class=\"ae-grid ae-grid--collapse\">\r\n      <div class=\"ae-grid__item item-lg-4 au-xs-ta-center au-lg-ta-left\">        \r\n        <p class=\"rk-footer__text rk-footer__copy \"> <span class=\"ae-u-bold\">© </span><span class=\"ae-u-bolder\"> {{ anio }}  PAR Soluciones Web</span>All Right Reserved.</p>\r\n      </div>\r\n      <div class=\"ae-grid__item item-lg-4 au-xs-ta-center\">\r\n        <a target=\"_blank\" href=\"#\" class=\"rk-social-btn\"  >\r\n          <svg>\r\n            <use xlink:href=\"assets/img/symbols.svg#icon-facebook\"></use>\r\n          </svg>\r\n        </a>\r\n\r\n        <a target=\"_blank\" href=\"#\" class=\"rk-social-btn\">\r\n          <svg>\r\n            <use xlink:href=\"assets/img/symbols.svg#icon-pinterest\"></use>\r\n          </svg>\r\n        </a>      \r\n        \r\n        </div>\r\n      <div class=\"ae-grid__item item-lg-4 au-xs-ta-center au-lg-ta-right\">\r\n        <p class=\"rk-footer__text rk-footer__contact \">\r\n          <!-- <span class=\"ae-u-bold\">Email: </span>\r\n          <span class=\"ae-u-bolder\"> \r\n            <a href=\"mailTo:{{ _servicio.info.email }}\" class=\"rk-dark-color \"> {{ _servicio.info.email }}</a>\r\n          </span> -->\r\n        </p>\r\n       \r\n      </div>\r\n    </div>\r\n  </footer>"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_info_pagina_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/info-pagina.service */ "./src/app/services/info-pagina.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = /** @class */ (function () {
    function FooterComponent(_servicio) {
        this._servicio = _servicio;
        this.anio = new Date().getFullYear();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/shared/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [_services_info_pagina_service__WEBPACK_IMPORTED_MODULE_1__["InfoPaginaService"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"ae-container-fluid ae-container-fluid--full rk-header \">\r\n    <input type=\"checkbox\" id=\"mobile-menu\" class=\"rk-mobile-menu\">\r\n    <label for=\"mobile-menu\">\r\n      <svg>\r\n        <use xlink:href=\"assets/img/symbols.svg#bar\"></use>\r\n      </svg>\r\n      <svg>\r\n        <use xlink:href=\"assets/img/symbols.svg#bar\"></use>\r\n      </svg>\r\n      <svg>\r\n        <use xlink:href=\"assets/img/symbols.svg#bar\"></use>\r\n      </svg>\r\n    </label>\r\n    <div class=\"ae-container-fluid rk-topbar\">\r\n      \r\n      <div routerLinkActive=\"active\"  aling=\"middle\">\r\n        <a routerLink=\"flogo\" class=\"rk-menu__link\"><img width=\"110px\"  src=\"assets/img/logoPrueba.jpg\"></a>\r\n      </div>\r\n\r\n     \r\n      <!-- <h1 aling=\"middle\" class=\"rk-logo\">\r\n        <a routerLink=\"home\">{{ _servicio.info.titulo }}</a>\r\n      </h1> -->\r\n      <nav class=\"rk-navigation\">\r\n        <ul class=\"rk-menu\">\r\n          <li routerLinkActive=\"active\"  class=\"rk-menu__item\">\r\n            <a routerLink=\"home\" class=\"rk-menu__link\">Inicio</a>\r\n          </li>\r\n\r\n          <li routerLinkActive=\"active\" class=\"rk-menu__item\">\r\n            <a routerLink=\"about\" class=\"rk-menu__link\">Sobre Nosotros</a>\r\n          </li>\r\n\r\n          <li routerLinkActive=\"active\"  class=\"rk-menu__item\">\r\n            <a routerLink=\"lanzamientos\" class=\"rk-menu__link\">Proximos Lanzamientos</a>\r\n          </li>\r\n          <li routerLinkActive=\"active\"  class=\"rk-menu__item\">\r\n            <a routerLink=\"contact\" class=\"rk-menu__link\">Contacto</a>\r\n          </li>\r\n\r\n          \r\n\r\n        </ul>\r\n\r\n        <div class=\"rk-search\">\r\n          <input type=\"text\"\r\n                 (keyup.enter)=\"buscarProducto( txtBuscar.value )\"\r\n                 placeholder=\"Buscar...\"\r\n                 id=\"urku-search\"\r\n                 class=\"rk-search-field\"\r\n                 #txtBuscar>\r\n\r\n          <label for=\"urku-search\">\r\n            <svg>\r\n              <use xlink:href=\"assets/img/symbols.svg#icon-search\"></use>\r\n            </svg>\r\n          </label>\r\n        </div>\r\n\r\n        \r\n      </nav>\r\n    </div>\r\n  </header>"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_info_pagina_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/info-pagina.service */ "./src/app/services/info-pagina.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(_servicio, router) {
        this._servicio = _servicio;
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.buscarProducto = function (termino) {
        if (termino.length < 1) {
            return;
        }
        this.router.navigate(['/search', termino]);
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/shared/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_services_info_pagina_service__WEBPACK_IMPORTED_MODULE_1__["InfoPaginaService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Admin\Documents\JoaEditores-F\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map