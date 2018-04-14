webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_pages_login_login_component__ = __webpack_require__("./src/app/components/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_pages_admin_admin_component__ = __webpack_require__("./src/app/components/pages/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_pages_shift_shift_component__ = __webpack_require__("./src/app/components/pages/shift/shift.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_pages_tig_tig_component__ = __webpack_require__("./src/app/components/pages/tig/tig.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__guards_login_guard__ = __webpack_require__("./src/app/guards/login.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__guards_session_guard__ = __webpack_require__("./src/app/guards/session.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__components_pages_login_login_component__["a" /* LoginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_session_guard__["a" /* SessionGuard */], __WEBPACK_IMPORTED_MODULE_7__guards_login_guard__["a" /* LoginGuard */]] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__components_pages_admin_admin_component__["a" /* AdminComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_session_guard__["a" /* SessionGuard */], __WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]],
        children: [
            { path: 'shifts', component: __WEBPACK_IMPORTED_MODULE_4__components_pages_shift_shift_component__["a" /* ShiftComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_session_guard__["a" /* SessionGuard */], __WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]] },
            { path: 'tig', component: __WEBPACK_IMPORTED_MODULE_5__components_pages_tig_tig_component__["a" /* TigComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_session_guard__["a" /* SessionGuard */], __WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]] }
        ] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_3__components_pages_admin_admin_component__["a" /* AdminComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_session_guard__["a" /* SessionGuard */], __WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]] }
];


/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = "* {\n  font-family: 'Ubuntu', sans-serif; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_pages_login_login_component__ = __webpack_require__("./src/app/components/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_svg_icon__ = __webpack_require__("./node_modules/angular-svg-icon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_loader_loader_component__ = __webpack_require__("./src/app/components/loader/loader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_dynamic_background_dynamic_background_component__ = __webpack_require__("./src/app/components/dynamic-background/dynamic-background.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng_inline_svg__ = __webpack_require__("./node_modules/ng-inline-svg/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng_inline_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_ng_inline_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_pages_admin_admin_component__ = __webpack_require__("./src/app/components/pages/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_menus_quick_access_bar_quick_access_bar_component__ = __webpack_require__("./src/app/components/menus/quick-access-bar/quick-access-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_menus_navigation_navigation_component__ = __webpack_require__("./src/app/components/menus/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_pages_tig_tig_component__ = __webpack_require__("./src/app/components/pages/tig/tig.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_pages_shift_shift_component__ = __webpack_require__("./src/app/components/pages/shift/shift.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_api_service__ = __webpack_require__("./src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__guards_login_guard__ = __webpack_require__("./src/app/guards/login.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__guards_session_guard__ = __webpack_require__("./src/app/guards/session.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_loader_loader_component__["a" /* LoaderComponent */],
                __WEBPACK_IMPORTED_MODULE_3__components_pages_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_dynamic_background_dynamic_background_component__["a" /* DynamicBackgroundComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_menus_quick_access_bar_quick_access_bar_component__["a" /* QuickAccessBarComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_menus_navigation_navigation_component__["a" /* NavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_pages_admin_admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_pages_tig_tig_component__["a" /* TigComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_pages_shift_shift_component__["a" /* ShiftComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_23__angular_platform_browser_animations__["b" /* NoopAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_23__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["HttpClientModule"],
                __WEBPACK_IMPORTED_MODULE_7_angular_svg_icon__["a" /* AngularSvgIconModule */],
                __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_19__app_routing_module__["b" /* routes */]),
                __WEBPACK_IMPORTED_MODULE_12_ng_inline_svg__["InlineSVGModule"].forRoot({ baseUrl: './assets/' }),
                __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["HttpClientModule"],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_23__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_18__services_api_service__["a" /* ApiService */],
                __WEBPACK_IMPORTED_MODULE_21__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_20__guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_22__guards_login_guard__["a" /* LoginGuard */],
                __WEBPACK_IMPORTED_MODULE_24__guards_session_guard__["a" /* SessionGuard */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/dynamic-background/dynamic-background.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"background\" [ngStyle]=\"{'height': height, 'width': width}\">\n  <svg *ngFor=\"let logo of logoList\" attr.width=\"{{logo.ratio * zoomRatio}}\" attr.height=\"{{logo.ratio * zoomRatio}}\" class=\"background-logo\" viewBox=\"0 0 500 500\" x=\"0px\" y=\"0px\"\n  [ngStyle]=\"{'top': logo.y, 'left': logo.x,'transition': 'all ' + (logo.ratio * 2 + 10) + 's linear'}\">\n    <defs>\n      <clipPath id=\"cut-off-left\">\n        <rect x=\"52%\" y=\"0\" width=\"50%\" height=\"100%\" />\n      </clipPath>\n    </defs>\n    <g id=\"Half_bubble\" >\n      <path display=\"inline\" fill=\"#ffffff\" d=\"M240,190.5V100c-78.2,5.1-140,70.2-140,149.7c0,44.6,19.4,84.6,50.3,112 c3.1,17.8,0.6,52.9-50.3,88c0,0,81.8-11.7,120.4-52.9c6.4,1.3,13,2.2,19.6,2.6v-90.5c-28.4-4.8-50-29.4-50-59.2 S211.6,195.3,240,190.5z\"/>\n    </g>\n    <g id=\"Gear\" clip-path=\"url(#cut-off-left)\">\n      <g>\n        <animateTransform attributeType=\"xml\" attributeName=\"transform\" type=\"rotate\" from=\"0 250 250\" to=\"360 250 250\" attr.dur=\"{{logo.ratio * 2 + 10}}s\" repeatCount=\"indefinite\"/>\n        <path fill=\"#ffffff\" d=\"M377,211.9c-2.6-8.6-6-16.9-10.1-24.6l8.1-24.6l-37.1-37.4l-24.4,8.2c-7.7-4.2-15.9-7.6-24.4-10.2 L277.5,100H260h-20h-17.5L211,123.2c-8.5,2.6-16.7,6-24.4,10.2l-24.4-8.2L125,162.7l8.1,24.6c-4.2,7.8-7.6,16-10.1,24.6l-23,11.6 v52.9l23,11.6c2.6,8.6,6,16.9,10.1,24.6l-8.1,24.6l37.1,37.4l24.4-8.2c7.7,4.2,15.9,7.6,24.4,10.2l11.5,23.2H240h20h17.5l11.5-23.2 c8.5-2.6,16.7-6,24.4-10.2l24.4,8.2l37.1-37.4l-8.1-24.6c4.2-7.8,7.6-16,10.1-24.6l23-11.6v-52.9L377,211.9z M250,310 c-33.1,0-60-26.9-60-60s26.9-60,60-60s60,26.9,60,60S283.1,310,250,310z\"/>\n      </g>\n    </g>\n  </svg>\n</div>\n"

/***/ }),

/***/ "./src/app/components/dynamic-background/dynamic-background.component.scss":
/***/ (function(module, exports) {

module.exports = ":root {\n  --primary-color: #00ADB5;\n  --secondary-color: #282828;\n  --tertiary-color: #F4EED7; }\n\n.background {\n  position: absolute;\n  width: 100%;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n  z-index: -1;\n  background-color: var(--secondary-color); }\n\n.background > svg {\n    opacity: 0.03;\n    position: absolute;\n    -webkit-transition: all 10s;\n    transition: all 10s; }\n"

/***/ }),

/***/ "./src/app/components/dynamic-background/dynamic-background.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicBackgroundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DynamicBackgroundComponent = (function () {
    function DynamicBackgroundComponent() {
        this.zoomRatio = 50;
        this.createLogoProperties = function (ratio) {
            var logo = { x: '0', y: '0', ratio: ratio, p: 0 };
            var x = Math.trunc((Math.random() * (this.innerWidth + ratio * this.zoomRatio)) - ratio * this.zoomRatio);
            var y = Math.trunc((Math.random() * (this.innerHeight + ratio * this.zoomRatio)) - ratio * this.zoomRatio);
            logo.x = x + 'px';
            logo.y = y + 'px';
            return logo;
        };
        this.createCoords = function (logo, innerWidth, innerHeight, zoomRatio) {
            var expandedWidth = innerWidth + logo.ratio * zoomRatio;
            var expandedHeight = innerHeight + logo.ratio * zoomRatio;
            var coord = { x: 0, y: 0 };
            var p = 0;
            var pval = logo.p;
            while (logo.p === pval) {
                p = Math.random() * (expandedWidth + expandedHeight) * 2;
                if (logo.p !== 1 && p < expandedWidth) {
                    coord.x = p;
                    coord.y = 0;
                    pval = 1;
                }
                else if (logo.p !== 2 && p < expandedWidth + expandedHeight) {
                    coord.x = expandedWidth;
                    coord.y = p - expandedWidth;
                    pval = 2;
                }
                else if (logo.p !== 3 && p - (expandedWidth + expandedHeight) < expandedWidth) {
                    p = p - (expandedWidth + expandedHeight);
                    coord.x = expandedWidth - p;
                    coord.y = expandedHeight;
                    pval = 3;
                }
                else if (logo.p !== 4) {
                    p = p - (expandedWidth + expandedHeight);
                    coord.x = 0;
                    coord.y = expandedHeight - (p - expandedWidth);
                    pval = 4;
                }
            }
            logo.p = pval;
            coord.x = Math.trunc(coord.x - logo.ratio * zoomRatio);
            coord.y = Math.trunc(coord.y - logo.ratio * zoomRatio);
            return coord;
        };
        this.newLogoProperties = function (logo, innerWidth, innerHeight, zoomRatio, createCoords) {
            var coord = createCoords(logo, innerWidth, innerHeight, zoomRatio);
            logo.x = coord.x + 'px';
            logo.y = coord.y + 'px';
        };
        this.moveLogo = function (elem) {
            setTimeout(this.newLogoProperties, 0, elem, this.innerWidth, this.innerHeight, this.zoomRatio, this.createCoords);
            setInterval(this.newLogoProperties, elem.ratio * 2000 + 10000, elem, this.innerWidth, this.innerHeight, this.zoomRatio, this.createCoords);
        };
        /*Get Screen properties*/
        this.width = (this.height ? this.height : '100%');
        this.height = (this.width ? this.width : '100vh');
        this.innerHeight = window.screen.height;
        this.innerWidth = window.screen.width;
        /*Calculate ZoomRatio according to screen size*/
        this.zoomRatio = ((this.innerWidth < this.innerHeight) ? this.innerWidth : this.innerHeight) / 10;
    }
    DynamicBackgroundComponent.prototype.ngOnInit = function () {
        /*Generate logos in background (Size interval between 0 and 10)*/
        this.logoList = new Array(this.createLogoProperties(6), this.createLogoProperties(2), this.createLogoProperties(3), this.createLogoProperties(7), this.createLogoProperties(5), this.createLogoProperties(9));
    };
    DynamicBackgroundComponent.prototype.ngAfterViewInit = function () {
        for (var i = 0; i < this.logoList.length; i++) {
            this.moveLogo(this.logoList[i]);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], DynamicBackgroundComponent.prototype, "height", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], DynamicBackgroundComponent.prototype, "width", void 0);
    DynamicBackgroundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dynamic-background',
            template: __webpack_require__("./src/app/components/dynamic-background/dynamic-background.component.html"),
            styles: [__webpack_require__("./src/app/components/dynamic-background/dynamic-background.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DynamicBackgroundComponent);
    return DynamicBackgroundComponent;
}());



/***/ }),

/***/ "./src/app/components/loader/loader.component.html":
/***/ (function(module, exports) {

module.exports = "<svg class=\"loader\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 500 500\">\n  <defs>\n    <clipPath id=\"cut-off-left\">\n      <rect x=\"52%\" y=\"0\" width=\"50%\" height=\"100%\" />\n    </clipPath>\n  </defs>\n  <g id=\"Half_bubble\" >\n    <path display=\"inline\" fill=\"#F4EED8\" d=\"M240,190.5V100c-78.2,5.1-140,70.2-140,149.7c0,44.6,19.4,84.6,50.3,112 c3.1,17.8,0.6,52.9-50.3,88c0,0,81.8-11.7,120.4-52.9c6.4,1.3,13,2.2,19.6,2.6v-90.5c-28.4-4.8-50-29.4-50-59.2 S211.6,195.3,240,190.5z\"/>\n  </g>\n  <g id=\"Gear\" clip-path=\"url(#cut-off-left)\">\n    <g>\n      <animateTransform attributeType=\"xml\" attributeName=\"transform\" type=\"rotate\" from=\"0 250 250\" to=\"360 250 250\" dur=\"4s\" repeatCount=\"indefinite\"/>\n      <path fill=\"#03ADB5\" d=\"M377,211.9c-2.6-8.6-6-16.9-10.1-24.6l8.1-24.6l-37.1-37.4l-24.4,8.2c-7.7-4.2-15.9-7.6-24.4-10.2 L277.5,100H260h-20h-17.5L211,123.2c-8.5,2.6-16.7,6-24.4,10.2l-24.4-8.2L125,162.7l8.1,24.6c-4.2,7.8-7.6,16-10.1,24.6l-23,11.6 v52.9l23,11.6c2.6,8.6,6,16.9,10.1,24.6l-8.1,24.6l37.1,37.4l24.4-8.2c7.7,4.2,15.9,7.6,24.4,10.2l11.5,23.2H240h20h17.5l11.5-23.2 c8.5-2.6,16.7-6,24.4-10.2l24.4,8.2l37.1-37.4l-8.1-24.6c4.2-7.8,7.6-16,10.1-24.6l23-11.6v-52.9L377,211.9z M250,310 c-33.1,0-60-26.9-60-60s26.9-60,60-60s60,26.9,60,60S283.1,310,250,310z\"/>\n    </g>\n  </g>\n</svg>\n"

/***/ }),

/***/ "./src/app/components/loader/loader.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/loader/loader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoaderComponent = (function () {
    function LoaderComponent() {
        this.number = '40s';
    }
    LoaderComponent.prototype.ngOnInit = function () {
    };
    LoaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-loader',
            template: __webpack_require__("./src/app/components/loader/loader.component.html"),
            styles: [__webpack_require__("./src/app/components/loader/loader.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/components/menus/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navigation-container\" [style.width]=\"navBarWidth\">\n  <ul class=\"navigation-wrapper\">\n    <li *ngFor=\"let tab of nav\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{ exact: true }\">\n      <a [routerLink]=\"tab.link\">\n        <div [inlineSVG]=\"tab.svglink\"></div>\n        <p>{{tab.name}}</p>\n      </a>\n    </li>\n  </ul>\n  <div [ngClass]=\"navBarWidth === navBarSizes.open ? 'open' : 'close'\" class='width-change'><button (click)=\"changeWidth()\" [inlineSVG]='\"icons/nav-retract.svg\"'></button></div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/menus/navigation/navigation.component.scss":
/***/ (function(module, exports) {

module.exports = ":root {\n  --primary-color: #00ADB5;\n  --secondary-color: #282828;\n  --tertiary-color: #F4EED7; }\n\n.navigation-container {\n  position: fixed;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  top: 60px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 250px;\n  overflow: hidden;\n  background-color: #eeeeee;\n  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.16), 0 1px 4px rgba(0, 0, 0, 0.16);\n          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.16), 0 1px 4px rgba(0, 0, 0, 0.16);\n  -webkit-transition: width 0.5s;\n  transition: width 0.5s; }\n\n.navigation-container ul {\n    padding: 0; }\n\n.navigation-container li {\n    list-style-type: none;\n    margin: 0; }\n\n.navigation-container li a {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: start;\n          -ms-flex-pack: start;\n              justify-content: flex-start;\n      height: 50px;\n      width: 250px;\n      color: #000; }\n\n.navigation-container li a:hover {\n        background-color: #e0e0e0;\n        text-decoration: none; }\n\n.navigation-container li a > * {\n        margin: auto 0; }\n\n.navigation-container li a svg {\n        margin-left: 20px;\n        margin-right: 20px;\n        vertical-align: middle;\n        width: 25px; }\n\n.navigation-container li.active a {\n      background-color: var(--primary-color);\n      text-decoration: none;\n      color: var(--tertiary-color); }\n\n.navigation-container li.active a svg {\n        fill: var(--tertiary-color); }\n\n.navigation-container li.active a:hover {\n        background-color: var(--primary-color); }\n\n.navigation-container .width-change {\n    text-align: right;\n    margin-right: 4px;\n    margin-left: 0;\n    width: 100%;\n    -webkit-transition: all .5s;\n    transition: all .5s; }\n\n.navigation-container .width-change button {\n      border: 0;\n      background: 0;\n      padding: 0;\n      opacity: 0.3;\n      margin-right: 4px;\n      -webkit-transition: opacity 0.2s;\n      transition: opacity 0.2s;\n      cursor: pointer; }\n\n.navigation-container .width-change button svg {\n        width: 25px;\n        height: 25px;\n        fill: var(--secondary-color);\n        -webkit-transition: all 0.5s;\n        transition: all 0.5s; }\n\n.navigation-container .width-change button:hover {\n      opacity: 0.5;\n      -webkit-transition: opacity 0.2s;\n      transition: opacity 0.2s; }\n\n.navigation-container .close {\n    width: 0;\n    padding-bottom: 5px;\n    margin-left: 20px;\n    -webkit-transition: all .5s;\n    transition: all .5s; }\n\n.navigation-container .close svg {\n      -webkit-transform: rotate(-180deg);\n              transform: rotate(-180deg);\n      -webkit-transition: -webkit-transform 0.7s;\n      transition: -webkit-transform 0.7s;\n      transition: transform 0.7s;\n      transition: transform 0.7s, -webkit-transform 0.7s; }\n\n.navigation-container button:focus {\n    outline: 0; }\n"

/***/ }),

/***/ "./src/app/components/menus/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = (function () {
    function NavigationComponent() {
        this.nav = new Array();
        this.navBarSizes = { open: '250px', close: '65px' };
        this.navBarWidth = this.navBarSizes.open;
        this.onSizeChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.changeWidth = function () {
            this.navBarWidth = this.navBarWidth === this.navBarSizes.close ? this.navBarSizes.open : this.navBarSizes.close;
            this.onSizeChange.emit(this.navBarWidth);
        };
        this.nav = [this.newTab("DashBoard", 'icons/nav-dashboard.svg', '/'),
            this.newTab("TIG", 'icons/nav-tig.svg', '/tig'),
            this.newTab("Shifts", 'icons/nav-shifts.svg', '/shifts'),
            this.newTab("Students", 'icons/nav-students.svg', '/students'),
            this.newTab("Marks", 'icons/nav-marks.svg', '/marks')];
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent.prototype.newTab = function (name, svg, link) {
        return { name: name, svglink: svg, link: link };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], NavigationComponent.prototype, "onSizeChange", void 0);
    NavigationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navigation',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            template: __webpack_require__("./src/app/components/menus/navigation/navigation.component.html"),
            styles: [__webpack_require__("./src/app/components/menus/navigation/navigation.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/components/menus/quick-access-bar/quick-access-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"quick-access-bar wrapper\">\n  <app-dynamic-background height=\"60px\"></app-dynamic-background>\n  <div class=\"pedago-title\" [inlineSVG]=\"'/pedago.svg'\"></div>\n  <div class=\"quick-access-wrappers\">\n    <div class=\"notification\" [inlineSVG]=\"'/icons/notification.svg'\"></div>\n    <div class=\"profile\">\n    <img class=\"image\" src=\"/assets/avatar.jpg\" alt=\"profil-image\">\n      <p>Welcome !<br/><span class=\"first-name\">Pierre Jean</span><span class=\"second-name\"> Martin</span></p>\n    </div>\n    <div class=\"options\" [inlineSVG]=\"'/icons/gear.svg'\"></div>\n    <input type=\"button\" (click)=\"onLogout()\">\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/menus/quick-access-bar/quick-access-bar.component.scss":
/***/ (function(module, exports) {

module.exports = ":root {\n  --primary-color: #00ADB5;\n  --secondary-color: #282828;\n  --tertiary-color: #F4EED7; }\n\n.quick-access-bar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 60px;\n  width: 100%;\n  z-index: 10000;\n  background-color: var(--secondary-color);\n  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.16), 0 1px 4px rgba(0, 0, 0, 0.23);\n          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.16), 0 1px 4px rgba(0, 0, 0, 0.23); }\n\n.quick-access-bar .pedago-title {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    height: inherit;\n    vertical-align: middle; }\n\n.quick-access-bar .pedago-title svg {\n      width: 250px;\n      padding-left: 25px;\n      padding-right: 25px; }\n\n.quick-access-bar .quick-access-wrappers {\n    display: inline-table;\n    height: inherit;\n    float: right;\n    vertical-align: middle; }\n\n.quick-access-bar .quick-access-wrappers > * {\n      display: table-cell;\n      height: inherit;\n      padding-left: 20px;\n      padding-right: 20px;\n      vertical-align: middle; }\n\n.quick-access-bar .quick-access-wrappers svg {\n      height: 60%;\n      vertical-align: middle;\n      fill: #fff; }\n\n.quick-access-bar .quick-access-wrappers svg.gear {\n        opacity: 0.3; }\n\n.quick-access-bar .quick-access-wrappers .options {\n      opacity: 0.3; }\n\n.quick-access-bar .quick-access-wrappers .profile {\n      height: inherit; }\n\n.quick-access-bar .quick-access-wrappers .profile > * {\n        display: inline-block; }\n\n.quick-access-bar .quick-access-wrappers .profile img {\n        height: 80%;\n        border-left: var(--primary-color) solid 4px;\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box; }\n\n.quick-access-bar .quick-access-wrappers .profile p {\n        margin: 0 auto;\n        vertical-align: middle;\n        color: #fff;\n        opacity: 0.7;\n        line-height: 130%; }\n"

/***/ }),

/***/ "./src/app/components/menus/quick-access-bar/quick-access-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuickAccessBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__("./src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuickAccessBarComponent = (function () {
    function QuickAccessBarComponent(apiService, router) {
        this.apiService = apiService;
        this.router = router;
    }
    QuickAccessBarComponent.prototype.ngOnInit = function () {
    };
    QuickAccessBarComponent.prototype.onLogout = function () {
        var _this = this;
        this.apiService.apiDelete('/security/access', '')
            .then(function (result) {
            window.localStorage.removeItem('session');
            _this.router.navigateByUrl('/login');
        })
            .catch(function (error) {
            console.log("Error on logout", error);
        });
    };
    QuickAccessBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-quick-access-bar',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            template: __webpack_require__("./src/app/components/menus/quick-access-bar/quick-access-bar.component.html"),
            styles: [__webpack_require__("./src/app/components/menus/quick-access-bar/quick-access-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], QuickAccessBarComponent);
    return QuickAccessBarComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<app-quick-access-bar></app-quick-access-bar>\n<app-navigation (onSizeChange)=\"onNavSizeChange($event)\"></app-navigation>\n<div class=\"admin-page\" [style.marginLeft]=\"navBarWidth\" [style.marginTop]=\"'65px'\">\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/components/pages/admin/admin.component.scss":
/***/ (function(module, exports) {

module.exports = "body {\n  background-color: #F4F8F9; }\n\n.admin-page {\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n  padding: 10px; }\n"

/***/ }),

/***/ "./src/app/components/pages/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminComponent = (function () {
    function AdminComponent() {
        this.navBarWidth = '250px';
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent.prototype.onNavSizeChange = function (size) {
        this.navBarWidth = size;
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__("./src/app/components/pages/admin/admin.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            styles: [__webpack_require__("./src/app/components/pages/admin/admin.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/login/login.animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slideInOutAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
// import the required animation functions from the angular animations module

var slideInOutAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('slideInOutAnimation', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 10001,
        opacity: 1
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])(':leave', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('1s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
            top: 'calc(-100vh + 61px)',
        })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({
            opacity: 0
        }))
    ])
]);


/***/ }),

/***/ "./src/app/components/pages/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-form-container\">\n  <div class=\"container-fluid\">\n    <app-dynamic-background height=\"100vh\"></app-dynamic-background>\n    <div class=\"row align-items-center\">\n      <div class=\"col\"></div>\n      <div class=\"col-12 col-sm-10 col-md-6 col-lg-4 align-self-center\"  [inlineSVG]=\"'/pedago.svg'\">\n      </div>\n      <div class=\"col\"></div>\n    </div>\n    <div class=\"row align-items-center\">\n\n      <div class=\"col\"></div>\n\n      <div class=\"col-12 col-sm-10 col-md-6 col-lg-4 align-self-center\">\n\n        <form class=\"form\">\n          <label for=\"login\">Login</label>\n          <input type=\"text\" name=\"login\" id=\"login\" required [(ngModel)]=\"login\">\n          <label for=\"pass\">Password</label>\n          <input type=\"password\" name=\"pass\" id=\"pass\" required [(ngModel)]=\"pass\">\n          <ngb-alert *ngIf=\"badCredentials\">Mauvais identifiants</ngb-alert>\n          <div class=\"submit-wrapper\">\n            <label class=\"checkbox-container\">Remember me\n              <input type=\"checkbox\" name=\"remember\" id=\"remember\" checked=\"checked\" [(ngModel)]=\"remember\">\n              <span class=\"checkmark\"></span>\n            </label>\n            <button type=\"submit\" class=\"submit-button\" href=\"\" (click)=\"onSubmit()\">Connect</button>\n          </div>\n\n        </form>\n      </div>\n\n      <div class=\"col\"></div>\n\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/pages/login/login.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/* Base for label styling */\n[type=\"checkbox\"]:not(:checked),\n[type=\"checkbox\"]:checked {\n  position: absolute;\n  left: -9999px;\n}\n[type=\"checkbox\"]:not(:checked) + label,\n[type=\"checkbox\"]:checked + label {\n  position: relative;\n  padding-left: 2em;\n  cursor: pointer;\n}\n/* checkbox aspect */\n[type=\"checkbox\"]:not(:checked) + label:before,\n[type=\"checkbox\"]:checked + label:before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 1.25em;\n  height: 1.25em;\n  border: 2px solid #fff;\n  background: #fff;\n}\n/* checked mark aspect */\n[type=\"checkbox\"]:not(:checked) + label:after,\n[type=\"checkbox\"]:checked + label:after {\n  content: '✔';\n  font-family: 'FontAwesome';\n  position: absolute;\n  top: .15em;\n  left: 0.18em;\n  font-size: 1.3em;\n  line-height: 0.8;\n  color: #00ADB5;\n  -webkit-transition: all .2s;\n  transition: all .2s;\n}\n/* checked mark aspect changes */\n[type=\"checkbox\"]:not(:checked) + label:after {\n  opacity: 0;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n}\n[type=\"checkbox\"]:checked + label:after {\n  opacity: 1;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n/* disabled checkbox */\n[type=\"checkbox\"]:disabled:not(:checked) + label:before,\n[type=\"checkbox\"]:disabled:checked + label:before {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  border-color: #ddd;\n  background-color: #ddd;\n}\n[type=\"checkbox\"]:disabled:checked + label:after {\n  color: #999;\n}\n[type=\"checkbox\"]:disabled + label {\n  color: #aaa;\n}\n/* hover style just for information */\nlabel:hover:before {\n  border: 2px solid #00ADB5 !important;\n}\n/* Checkbox modifications for tig one*/\n.checkmark-tig [type=\"checkbox\"]:not(:checked) + label:after,\n.checkmark-tig [type=\"checkbox\"]:checked + label:after {\n  content: '\\2714';\n  font-family: 'FontAwesome';\n  position: absolute;\n  top: -0.8em;\n  left: 0.85em;\n  font-size: 1.3em;\n  line-height: 2em;\n  color: #00ADB5;\n  -webkit-transition: all .2s;\n  transition: all .2s;\n}\n.checkmark-tig [type=\"checkbox\"]:not(:checked) + label:before,\n.checkmark-tig [type=\"checkbox\"]:checked + label:before {\n  content: '';\n  position: absolute;\n  left: 1em;\n  top: -0.5em;\n  width: 1.3em;\n  height: 1.3em;\n  border: 1px solid #00ADB5;\n  background-color: #fff;\n  border-radius: 0.4em;\n  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.15);\n          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.15);\n}\n:root {\n    --primary-color: #00ADB5;\n    --secondary-color: #282828;\n    --tertiary-color: #F4EED7;\n}\n.login-form-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 100vh;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n.login-form-container .form label {\n    color: #95989A;\n    font-size: 20px;\n    margin: 0; }\n.login-form-container .form > label {\n    margin: 0;\n    height: 35px;\n    display: table-cell;\n    vertical-align: bottom; }\n.login-form-container .form > input {\n    border: none;\n    width: 100%;\n    font-size: larger;\n    padding-left: 5px;\n    height: 40px; }\n.login-form-container .form input:focus, .login-form-container .form input:active {\n    outline: none; }\n.login-form-container .form .submit-wrapper {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    margin-top: 35px; }\n.login-form-container .form .submit-wrapper .submit-button {\n      height: 40px;\n      -webkit-box-flex: 1;\n          -ms-flex-positive: 1;\n              flex-grow: 1;\n      margin-left: 20px;\n      border: none;\n      background-color: #00ADB5;\n      color: white;\n      font-size: 20px;\n      cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/components/pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_animation__ = __webpack_require__("./src/app/components/pages/login/login.animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    function LoginComponent(http, authService, router) {
        this.http = http;
        this.authService = authService;
        this.router = router;
        this.badCredentials = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        var credentials = this.login + ":" + this.pass;
        var remember = "?stay_connected=" + ((!this.remember) ? 1 : 0);
        this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + '/security/access' + remember, {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["HttpHeaders"]().set('Authorization', "Basic " + btoa(credentials)), withCredentials: true
        }).toPromise()
            .then(function (result) {
            window.localStorage.setItem('session', JSON.stringify(result.data));
            _this.router.navigateByUrl('');
        })
            .catch(function (error) {
            _this.badCredentials = true;
            setTimeout(function () { _this.badCredentials = false; }, 3000);
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/pages/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/pages/login/login.component.scss")],
            animations: [__WEBPACK_IMPORTED_MODULE_1__login_animation__["a" /* slideInOutAnimation */]],
            host: { '[@slideInOutAnimation]': '' }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["HttpClient"], __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/shift/shift.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  shift works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/pages/shift/shift.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/pages/shift/shift.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShiftComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShiftComponent = (function () {
    function ShiftComponent() {
    }
    ShiftComponent.prototype.ngOnInit = function () {
    };
    ShiftComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-shift',
            template: __webpack_require__("./src/app/components/pages/shift/shift.component.html"),
            styles: [__webpack_require__("./src/app/components/pages/shift/shift.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ShiftComponent);
    return ShiftComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/tig/tig.component.html":
/***/ (function(module, exports) {

module.exports = "<table id=\"tig-table\">\n  <thead>\n  <tr>\n    <td class=\"shrink\">\n      <label class=\"checkbox-container\">\n        <input type=\"checkbox\">\n        <span class=\"checkmark\"></span>\n      </label>\n    </td>\n    <td class=\"shrink\">Student</td>\n    <td class=\"shrink\">Grant date</td>\n    <td class=\"expand\">Reason</td>\n    <td class=\"shrink\">Assigned by</td>\n    <td class=\"shrink\">Status</td>\n    <td class=\"expand work\">Work</td>\n    <td class=\"shrink end-date\">On</td>\n    <td class=\"shrink\"></td>\n  </tr>\n  </thead>\n  <tbody id=\"tiglist\">\n  <tr *ngFor=\"let tig of fakeArray; let i = index\">\n    <td class=\"shrink checkmark-tig\">\n      <div class=\"checkmark\">\n        <input id=\"checkbox-{{i}}\" type=\"checkbox\">\n        <label for=\"checkbox-{{i}}\"></label>\n      </div>\n    </td>\n    <td class=\"shrink profile assigned\">\n      <div class=\"profile-wrapper\">\n        <div class=\"cropcircle\" [style.backgroundImage]=\"'url('+tig.assigned.avatar+')'\"></div>\n        <div class=\"infos\">\n          <p class=\"name\">{{tig.assigned.firstName}} {{tig.assigned.lastName}}</p>\n          <p class=\"mail\">{{tig.assigned.mail}}</p>\n        </div>\n      </div>\n    </td>\n    <td class=\"shrink date\"><p>{{tig.grantDate}}</p></td>\n    <td class=\"expand reason\" >\n      <a role=\"button\" class=\"collapse\" data-toggle=\"collapse\" data-parent=\"#tiglist\" href=\".collapseTig-{{i}}\" aria-expanded=\"false\" attr.aria-controls=\"collapseTig-{{i}}\" (click)=\"toggleCollapse()\">\n        <p class=\"collapseTig-{{i}} collapsed\">{{tig.reason}}</p>\n      </a>  </td>\n    <td class=\"shrink profile allocator\">\n      <div class=\"profile-wrapper\">\n        <div class=\"cropcircle\" [style.backgroundImage]=\"'url('+tig.allocator.avatar+')'\"></div>\n        <div class=\"infos\">\n          <p class=\"name\">{{tig.allocator.firstName}} {{tig.allocator.lastName}}</p>\n          <p class=\"mail\">{{tig.allocator.mail}}</p>\n        </div>\n      </div>\n    </td>\n    <td class=\"shrink status\"><span class=\"label\" [style.backgroundColor]=\"statusColors[tig.status]\">{{tig.status}}</span></td>\n    <td class=\"expand work\">\n      <a role=\"button\" class=\"collapse\" data-toggle=\"collapse\" data-parent=\"#tiglist\" href=\".collapseTig-{{i}}\" aria-expanded=\"false\" attr.aria-controls=\"collapseTig-{{i}}\" (click)=\"toggleCollapse()\">\n        <p class=\"collapseTig-{{i}} collapsed\">{{tig.work}}</p>\n      </a>\n    </td>\n    <td class=\"shrink end-date\"><p [innerHTML]=\"tig.endDate.start + ((tig.endDate.end === null) ? '' : '<br>' + tig.endDate.end)\"></p></td>\n    <td class=\"shrink more\"><div [inlineSVG]=\"'/icons/more.svg'\"></div></td>\n  </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/components/pages/tig/tig.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/* Base for label styling */\n[type=\"checkbox\"]:not(:checked),\n[type=\"checkbox\"]:checked {\n  position: absolute;\n  left: -9999px;\n}\n[type=\"checkbox\"]:not(:checked) + label,\n[type=\"checkbox\"]:checked + label {\n  position: relative;\n  padding-left: 2em;\n  cursor: pointer;\n}\n/* checkbox aspect */\n[type=\"checkbox\"]:not(:checked) + label:before,\n[type=\"checkbox\"]:checked + label:before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 1.25em;\n  height: 1.25em;\n  border: 2px solid #fff;\n  background: #fff;\n}\n/* checked mark aspect */\n[type=\"checkbox\"]:not(:checked) + label:after,\n[type=\"checkbox\"]:checked + label:after {\n  content: '✔';\n  font-family: 'FontAwesome';\n  position: absolute;\n  top: .15em;\n  left: 0.18em;\n  font-size: 1.3em;\n  line-height: 0.8;\n  color: #00ADB5;\n  -webkit-transition: all .2s;\n  transition: all .2s;\n}\n/* checked mark aspect changes */\n[type=\"checkbox\"]:not(:checked) + label:after {\n  opacity: 0;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n}\n[type=\"checkbox\"]:checked + label:after {\n  opacity: 1;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n/* disabled checkbox */\n[type=\"checkbox\"]:disabled:not(:checked) + label:before,\n[type=\"checkbox\"]:disabled:checked + label:before {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  border-color: #ddd;\n  background-color: #ddd;\n}\n[type=\"checkbox\"]:disabled:checked + label:after {\n  color: #999;\n}\n[type=\"checkbox\"]:disabled + label {\n  color: #aaa;\n}\n/* hover style just for information */\nlabel:hover:before {\n  border: 2px solid #00ADB5 !important;\n}\n/* Checkbox modifications for tig one*/\n.checkmark-tig [type=\"checkbox\"]:not(:checked) + label:after,\n.checkmark-tig [type=\"checkbox\"]:checked + label:after {\n  content: '\\2714';\n  font-family: 'FontAwesome';\n  position: absolute;\n  top: -0.8em;\n  left: 0.85em;\n  font-size: 1.3em;\n  line-height: 2em;\n  color: #00ADB5;\n  -webkit-transition: all .2s;\n  transition: all .2s;\n}\n.checkmark-tig [type=\"checkbox\"]:not(:checked) + label:before,\n.checkmark-tig [type=\"checkbox\"]:checked + label:before {\n  content: '';\n  position: absolute;\n  left: 1em;\n  top: -0.5em;\n  width: 1.3em;\n  height: 1.3em;\n  border: 1px solid #00ADB5;\n  background-color: #fff;\n  border-radius: 0.4em;\n  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.15);\n          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.15);\n}\ntable#tig-table {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0 20px; }\ntable#tig-table td {\n    padding-left: 15px;\n    padding-right: 15px;\n    white-space: nowrap; }\ntable#tig-table td.expand {\n      width: 50%; }\ntable#tig-table thead {\n    color: #959595;\n    font-size: 18px; }\ntable#tig-table tbody p {\n    margin: 0;\n    white-space: normal; }\ntable#tig-table tbody tr {\n    font-size: 16px;\n    background-color: #fff;\n    -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.05);\n            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.05);\n    height: 70px; }\ntable#tig-table tbody tr td {\n      vertical-align: top;\n      -webkit-transform: translateY(35px);\n              transform: translateY(35px); }\ntable#tig-table tbody tr td a {\n        display: block; }\ntable#tig-table tbody tr td > * {\n        -webkit-transform: translateY(-50%);\n                transform: translateY(-50%);\n        -webkit-transition: all 0.5s ease;\n        transition: all 0.5s ease; }\ntable#tig-table tbody tr td:first-child {\n        border-radius: 5px 0 0 5px; }\ntable#tig-table tbody tr td:last-child {\n        border-radius: 0 5px 5px 0; }\ntable#tig-table tbody tr td.profile .profile-wrapper {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex; }\ntable#tig-table tbody tr td.profile .profile-wrapper .cropcircle {\n          width: 50px;\n          height: 50px;\n          border-radius: 100%;\n          background: #eee no-repeat center;\n          background-size: cover;\n          margin-right: 5px; }\ntable#tig-table tbody tr td.profile .profile-wrapper .infos {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: column;\n                  flex-direction: column;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          vertical-align: middle; }\ntable#tig-table tbody tr td.profile .profile-wrapper .infos p.mail {\n            font-size: 10px;\n            color: #959595; }\ntable#tig-table tbody tr td.status span {\n        display: inline-block;\n        padding: 2px 2px;\n        color: #fff;\n        font-size: 15px;\n        vertical-align: baseline;\n        background-color: #999;\n        border-radius: 5px;\n        min-width: 80px;\n        text-align: center; }\ntable#tig-table tbody tr td.expand p {\n        display: block;\n        text-overflow: ellipsis;\n        overflow: hidden; }\ntable#tig-table tbody tr td.expand p:not(.show) {\n        height: 22px; }\ntable#tig-table tbody tr td.expand a {\n        -webkit-transform: translateY(-12px);\n                transform: translateY(-12px);\n        text-decoration: none;\n        color: #000;\n        padding-bottom: 35px; }\ntable#tig-table tbody tr td.more {\n        cursor: pointer; }\ntable#tig-table tbody tr td.more svg {\n          height: 25px;\n          width: 25px; }\n@media screen and (max-width: 1500px) {\n  table#tig-table tbody tr td.profile .profile-wrapper .cropcircle, table#tig-table tbody tr td.profile .profile-wrapper .infos p.mail {\n    display: none; } }\n@media screen and (max-width: 1280px) {\n  table#tig-table tbody tr td.work, table#tig-table tbody tr td.end-date,\n  table#tig-table thead tr td.work,\n  table#tig-table thead tr td.end-date {\n    display: none; } }\n"

/***/ }),

/***/ "./src/app/components/pages/tig/tig.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TigComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TigComponent = (function () {
    function TigComponent(http) {
        var _this = this;
        this.http = http;
        this.fakeArray = '';
        /* En attendant l'api */
        this.statusList = ['Assigned', 'In progress', 'Done', 'Not done'];
        this.statusColors = {};
        this.statusColors['Assigned'] = '#00ADB5';
        this.statusColors['In progress'] = '#FFDD00';
        this.statusColors['Not done'] = '#B50000';
        this.statusColors['Done'] = '#14C400';
        this.getJSON().subscribe(function (data) { return _this.fakeArray = data; }, function (error) { return console.log(error); });
    }
    TigComponent.prototype.getJSON = function () {
        console.log('loading');
        return this.http.get('/assets/tig.json')
            .map(function (res) { return res.json(); });
    };
    TigComponent.prototype.ngOnInit = function () {
    };
    TigComponent.prototype.toggleCollapse = function () {
        $('.collapse.show').collapse('hide');
    };
    TigComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tig',
            template: __webpack_require__("./src/app/components/pages/tig/tig.component.html"),
            styles: [__webpack_require__("./src/app/components/pages/tig/tig.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], TigComponent);
    return TigComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (state) {
        return (this.checkLogin(state.url));
    };
    AuthGuard.prototype.checkLogin = function (url) {
        if (window.localStorage.getItem('session'))
            return true;
        this.authService.redirectUrl = url;
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/login.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginGuard = (function () {
    function LoginGuard(router) {
        this.router = router;
    }
    LoginGuard.prototype.canActivate = function (route, state) {
        if (!window.localStorage.getItem('session'))
            return true;
        this.router.navigate(['']);
        return false;
    };
    LoginGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], LoginGuard);
    return LoginGuard;
}());



/***/ }),

/***/ "./src/app/guards/session.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SessionGuard = (function () {
    function SessionGuard() {
    }
    SessionGuard.prototype.canActivate = function () {
        var session = window.localStorage.getItem('session');
        if (session && new Date() > new Date(JSON.parse(session).expirationDate * 1000))
            window.localStorage.removeItem('session');
        return true;
    };
    SessionGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], SessionGuard);
    return SessionGuard;
}());



/***/ }),

/***/ "./src/app/services/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_crypto_js__ = __webpack_require__("./node_modules/crypto-js/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_crypto_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__ = __webpack_require__("./src/environments/environment.prod.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApiService = (function () {
    function ApiService(http, router) {
        this.http = http;
        this.router = router;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__["a" /* environment */].apiUrl;
    }
    ApiService_1 = ApiService;
    ApiService.getHeaders = function (method, path, data) {
        var algo = 'sha512';
        if (data)
            data = __WEBPACK_IMPORTED_MODULE_2_crypto_js__["MD5"](JSON.stringify(data));
        var hash = __WEBPACK_IMPORTED_MODULE_2_crypto_js__["HmacSHA512"]("" + method.toUpperCase() + path + data + Math.floor(Date.now() / 1000), JSON.parse(window.localStorage.getItem('session')).signatureToken);
        return new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpHeaders"]().set('Authorization', "HMAC algo=" + algo + ",time=" + Math.floor(Date.now() / 1000) + ",hash=" + hash);
    };
    ApiService.prototype.apiGet = function (path) {
        var headers = ApiService_1.getHeaders('GET', path, "");
        this.http.get("" + this.apiUrl + path, { headers: headers, withCredentials: true }).toPromise();
    };
    ApiService.prototype.apiDelete = function (path, body) {
        var headers = ApiService_1.getHeaders('DELETE', path, body);
        return this.http.delete("" + this.apiUrl + path, { headers: headers, withCredentials: true }).toPromise();
    };
    ApiService = ApiService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpClient"], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], ApiService);
    return ApiService;
    var ApiService_1;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthService = (function () {
    function AuthService() {
    }
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    apiUrl: 'https://api.bienveillance.ninja'
};


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiUrl: 'https://api.bienveillance.ninja'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map