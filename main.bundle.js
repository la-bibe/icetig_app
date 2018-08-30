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

/***/ "./src/app/Game.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Game; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EasyGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return HardGame; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Game = (function () {
    function Game(type, goal, promotion) {
        this.type = type;
        this.goal = goal;
        this.remain = goal;
        this.score = 0;
        this.promotion = promotion;
    }
    Game.prototype.getType = function () {
        return this.type;
    };
    Game.prototype.getGoal = function () {
        return this.goal;
    };
    Game.prototype.getRemain = function () {
        return this.remain;
    };
    Game.prototype.getScore = function () {
        return this.score;
    };
    Game.prototype.getPromotion = function () {
        return this.promotion;
    };
    Game.prototype.isFinished = function () {
        return this.remain <= 0;
    };
    Game.prototype.scoreUp = function (right) {
        this.remain -= 1;
        if (right) {
            this.score += 1;
        }
    };
    return Game;
}());

var EasyGame = (function (_super) {
    __extends(EasyGame, _super);
    function EasyGame(goal, promotion) {
        return _super.call(this, 1, goal, promotion) || this;
    }
    return EasyGame;
}(Game));

var HardGame = (function (_super) {
    __extends(HardGame, _super);
    function HardGame(goal, promotion) {
        return _super.call(this, 2, goal, promotion) || this;
    }
    return HardGame;
}(Game));



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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_trombinoscope_trombinoscope_component__ = __webpack_require__("./src/app/components/trombinoscope/trombinoscope.component.ts");
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
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_3__components_pages_admin_admin_component__["a" /* AdminComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_session_guard__["a" /* SessionGuard */], __WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]],
        children: [
            { path: 'shifts', component: __WEBPACK_IMPORTED_MODULE_4__components_pages_shift_shift_component__["a" /* ShiftComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_session_guard__["a" /* SessionGuard */], __WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]] },
            { path: 'tig', component: __WEBPACK_IMPORTED_MODULE_5__components_pages_tig_tig_component__["a" /* TigComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_session_guard__["a" /* SessionGuard */], __WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]] },
            { path: 'trombinoscope', component: __WEBPACK_IMPORTED_MODULE_9__components_trombinoscope_trombinoscope_component__["a" /* TrombinoscopeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_session_guard__["a" /* SessionGuard */], __WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]] },
        ]
    },
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_svg_icon__ = __webpack_require__("./node_modules/angular-svg-icon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_inline_svg__ = __webpack_require__("./node_modules/ng-inline-svg/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_inline_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng_inline_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_pages_admin_admin_component__ = __webpack_require__("./src/app/components/pages/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_dynamic_background_dynamic_background_component__ = __webpack_require__("./src/app/components/dynamic-background/dynamic-background.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_loader_loader_component__ = __webpack_require__("./src/app/components/loader/loader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_pages_login_login_component__ = __webpack_require__("./src/app/components/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_menus_navigation_navigation_component__ = __webpack_require__("./src/app/components/menus/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_menus_quick_access_bar_quick_access_bar_component__ = __webpack_require__("./src/app/components/menus/quick-access-bar/quick-access-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_pages_shift_shift_component__ = __webpack_require__("./src/app/components/pages/shift/shift.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_pages_tig_tig_component__ = __webpack_require__("./src/app/components/pages/tig/tig.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_api_service__ = __webpack_require__("./src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_permissions_service__ = __webpack_require__("./src/app/services/permissions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_session_service__ = __webpack_require__("./src/app/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__guards_login_guard__ = __webpack_require__("./src/app/guards/login.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__guards_session_guard__ = __webpack_require__("./src/app/guards/session.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_trombinoscope_trombinoscope_component__ = __webpack_require__("./src/app/components/trombinoscope/trombinoscope.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_trombinoscope_easyshit_easyshit_component__ = __webpack_require__("./src/app/components/trombinoscope/easyshit/easyshit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_students_service__ = __webpack_require__("./src/app/services/students.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_trombinoscope_hardwork_hardwork_component__ = __webpack_require__("./src/app/components/trombinoscope/hardwork/hardwork.component.ts");
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
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_loader_loader_component__["a" /* LoaderComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_pages_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_dynamic_background_dynamic_background_component__["a" /* DynamicBackgroundComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_menus_quick_access_bar_quick_access_bar_component__["a" /* QuickAccessBarComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_menus_navigation_navigation_component__["a" /* NavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_pages_admin_admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_pages_tig_tig_component__["a" /* TigComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_pages_shift_shift_component__["a" /* ShiftComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_trombinoscope_trombinoscope_component__["a" /* TrombinoscopeComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_trombinoscope_easyshit_easyshit_component__["a" /* EasyshitComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_trombinoscope_hardwork_hardwork_component__["a" /* HardworkComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["b" /* NoopAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["HttpClientModule"],
                __WEBPACK_IMPORTED_MODULE_4_angular_svg_icon__["a" /* AngularSvgIconModule */],
                __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_routing_module__["b" /* routes */]),
                __WEBPACK_IMPORTED_MODULE_6_ng_inline_svg__["InlineSVGModule"].forRoot({ baseUrl: './assets/' }),
                __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["HttpClientModule"],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_19__services_api_service__["a" /* ApiService */],
                __WEBPACK_IMPORTED_MODULE_20__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_21__services_permissions_service__["a" /* PermissionsService */],
                __WEBPACK_IMPORTED_MODULE_22__services_session_service__["a" /* SessionService */],
                __WEBPACK_IMPORTED_MODULE_28__services_students_service__["a" /* StudentsService */],
                __WEBPACK_IMPORTED_MODULE_23__guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_24__guards_login_guard__["a" /* LoginGuard */],
                __WEBPACK_IMPORTED_MODULE_25__guards_session_guard__["a" /* SessionGuard */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
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

module.exports = ":root {\n  --primary-color: #00ADB5;\n  --secondary-color: #282828;\n  --tertiary-color: #F4EED7; }\n\n.navigation-container {\n  position: fixed;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  top: 60px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 250px;\n  overflow: hidden;\n  background-color: #eeeeee;\n  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.16), 0 1px 4px rgba(0, 0, 0, 0.16);\n          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.16), 0 1px 4px rgba(0, 0, 0, 0.16);\n  -webkit-transition: width 0.5s;\n  transition: width 0.5s; }\n\n.navigation-container ul {\n    padding: 0; }\n\n.navigation-container li {\n    list-style-type: none;\n    margin: 0; }\n\n.navigation-container li a {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: start;\n          -ms-flex-pack: start;\n              justify-content: flex-start;\n      height: 50px;\n      width: 250px;\n      color: #000; }\n\n.navigation-container li a:hover {\n        background-color: #e0e0e0;\n        text-decoration: none; }\n\n.navigation-container li a > * {\n        margin: auto 0; }\n\n.navigation-container li a svg {\n        margin-left: 20px;\n        margin-right: 20px;\n        vertical-align: middle;\n        width: 25px; }\n\n.navigation-container li.active a {\n      background-color: var(--primary-color);\n      text-decoration: none;\n      color: var(--tertiary-color); }\n\n.navigation-container li.active a svg {\n        fill: var(--tertiary-color); }\n\n.navigation-container li.active a:hover {\n        background-color: var(--primary-color); }\n\n.navigation-container .width-change {\n    text-align: right;\n    margin-right: 4px;\n    margin-left: 0;\n    width: 100%;\n    -webkit-transition: all .5s;\n    transition: all .5s; }\n\n.navigation-container .width-change button {\n      border: 0;\n      background: 0;\n      padding: 0;\n      opacity: 0.3;\n      margin-right: 4px;\n      -webkit-transition: opacity 0.2s;\n      transition: opacity 0.2s;\n      cursor: pointer; }\n\n.navigation-container .width-change button svg {\n        width: 25px;\n        height: 25px;\n        fill: var(--secondary-color);\n        -webkit-transition: all 0.5s;\n        transition: all 0.5s; }\n\n.navigation-container .width-change button:hover {\n      opacity: 0.5;\n      -webkit-transition: opacity 0.2s;\n      transition: opacity 0.2s; }\n\n.navigation-container .close {\n    width: 0;\n    padding-bottom: 5px;\n    margin-left: 20px;\n    -webkit-transition: all .5s;\n    transition: all .5s; }\n\n.navigation-container .close svg {\n      -webkit-transform: rotate(-180deg);\n              transform: rotate(-180deg);\n      -webkit-transition: -webkit-transform 0.7s;\n      transition: -webkit-transform 0.7s;\n      transition: transform 0.7s;\n      transition: transform 0.7s, -webkit-transform 0.7s; }\n\n.navigation-container button:focus {\n    outline: 0; }\n\n@media screen and (max-width: 767px) {\n  .navigation-container {\n    width: 100vw !important;\n    height: calc(100vh - 60px);\n    background-color: transparent;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    position: relative;\n    top: 0; }\n    .navigation-container ul {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center; }\n      .navigation-container ul li {\n        margin-top: 10px;\n        margin-bottom: 10px; }\n        .navigation-container ul li a {\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: column;\n                  flex-direction: column;\n          height: auto;\n          width: 150px;\n          color: var(--tertiary-color); }\n          .navigation-container ul li a div {\n            border-radius: 50%;\n            border-color: var(--tertiary-color);\n            border-style: solid;\n            -webkit-transition: all 0.5s ease;\n            transition: all 0.5s ease; }\n            .navigation-container ul li a div svg {\n              margin: 20px;\n              fill: var(--tertiary-color); }\n          .navigation-container ul li a p {\n            margin-top: 10px;\n            display: block;\n            text-transform: uppercase; }\n          .navigation-container ul li a:hover {\n            background-color: transparent; }\n        .navigation-container ul li.active a {\n          background-color: transparent; }\n          .navigation-container ul li.active a div {\n            border-color: var(--primary-color);\n            -webkit-transition: all 0.5s ease;\n            transition: all 0.5s ease; }\n          .navigation-container ul li.active a:hover {\n            background-color: transparent; } }\n"

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
            this.newTab("Trombi", 'icons/nav-students.svg', '/trombinoscope'),
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

module.exports = "<div class=\"quick-access-bar wrapper\" [ngClass]=\"{'is-active' : isActive}\">\n  <app-dynamic-background [height]=\"isActive ? '100vh' : '60px'\"></app-dynamic-background>\n  <div class=\"quick-access-bar-infos\">\n      <button class=\"hamburger hamburger--collapse\" [ngClass]=\"{'is-active' : isActive}\" (click)=\"toggleMenu($event)\" type=\"button\">\n      <span class=\"hamburger-box\">\n        <span class=\"hamburger-inner\"></span>\n      </span>\n      </button>\n    <div class=\"pedago-title\" [inlineSVG]=\"'/pedago.svg'\"></div>\n   <div class=\"quick-access-wrappers\">\n      <div class=\"notification\" [inlineSVG]=\"'/icons/notification.svg'\"></div>\n      <div class=\"profile\">\n          <div class=\"profile-picture\" [style.backgroundImage]=\"'url('+getUrl()+')'\"></div>\n        <p>Welcome !<br/><span class=\"second-name\">{{user.firstName}}</span> <span class=\"first-name\">{{user.lastName}}</span></p>\n      </div>\n      <div class=\"logout\" [inlineSVG]=\"'/icons/logout.svg'\" (click)=\"onLogout()\"></div>\n    </div>\n  </div>\n    <app-navigation class=\"mobile-navigation\"></app-navigation>\n</div>"

/***/ }),

/***/ "./src/app/components/menus/quick-access-bar/quick-access-bar.component.scss":
/***/ (function(module, exports) {

module.exports = ":root {\n  --primary-color: #00ADB5;\n  --secondary-color: #282828;\n  --tertiary-color: #F4EED7; }\n\n/*!\n * Hamburgers\n * @description Tasty CSS-animated hamburgers\n * @author Jonathan Suh @jonsuh\n * @site https://jonsuh.com/hamburgers\n * @link https://github.com/jonsuh/hamburgers\n */\n\n.hamburger {\n  padding: 10px 23px;\n  display: inline-block;\n  cursor: pointer;\n  -webkit-transition-property: opacity, -webkit-filter;\n  transition-property: opacity, -webkit-filter;\n  transition-property: opacity, filter;\n  transition-property: opacity, filter, -webkit-filter;\n  -webkit-transition-duration: 0.15s;\n          transition-duration: 0.15s;\n  -webkit-transition-timing-function: collapse;\n          transition-timing-function: collapse;\n  font: inherit;\n  color: inherit;\n  text-transform: none;\n  background-color: transparent;\n  border: 0;\n  margin: 0;\n  overflow: visible; }\n\n.hamburger:hover {\n    opacity: 0.7; }\n\n.hamburger-box {\n  width: 30px;\n  height: 21px;\n  display: inline-block;\n  position: relative; }\n\n.hamburger-inner {\n  display: block;\n  top: 50%;\n  margin-top: -1.5px; }\n\n.hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {\n    width: 30px;\n    height: 3px;\n    background-color: #fff;\n    border-radius: 4px;\n    position: absolute;\n    -webkit-transition-property: -webkit-transform;\n    transition-property: -webkit-transform;\n    transition-property: transform;\n    transition-property: transform, -webkit-transform;\n    -webkit-transition-duration: 0.15s;\n            transition-duration: 0.15s;\n    -webkit-transition-timing-function: ease;\n            transition-timing-function: ease; }\n\n.hamburger-inner::before, .hamburger-inner::after {\n    content: \"\";\n    display: block; }\n\n.hamburger-inner::before {\n    top: -9px; }\n\n.hamburger-inner::after {\n    bottom: -9px; }\n\n/*\n   * 3DX\n   */\n\n.hamburger--3dx .hamburger-box {\n  -webkit-perspective: 60px;\n          perspective: 60px; }\n\n.hamburger--3dx .hamburger-inner {\n  -webkit-transition: background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1); }\n\n.hamburger--3dx .hamburger-inner::before, .hamburger--3dx .hamburger-inner::after {\n    -webkit-transition: -webkit-transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n    transition: -webkit-transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }\n\n.hamburger--3dx.is-active .hamburger-inner {\n  background-color: transparent;\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg); }\n\n.hamburger--3dx.is-active .hamburger-inner::before {\n    -webkit-transform: translate3d(0, 9px, 0) rotate(45deg);\n            transform: translate3d(0, 9px, 0) rotate(45deg); }\n\n.hamburger--3dx.is-active .hamburger-inner::after {\n    -webkit-transform: translate3d(0, -9px, 0) rotate(-45deg);\n            transform: translate3d(0, -9px, 0) rotate(-45deg); }\n\n/*\n   * 3DX Reverse\n   */\n\n.hamburger--3dx-r .hamburger-box {\n  -webkit-perspective: 60px;\n          perspective: 60px; }\n\n.hamburger--3dx-r .hamburger-inner {\n  -webkit-transition: background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1); }\n\n.hamburger--3dx-r .hamburger-inner::before, .hamburger--3dx-r .hamburger-inner::after {\n    -webkit-transition: -webkit-transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n    transition: -webkit-transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }\n\n.hamburger--3dx-r.is-active .hamburger-inner {\n  background-color: transparent;\n  -webkit-transform: rotateY(-180deg);\n          transform: rotateY(-180deg); }\n\n.hamburger--3dx-r.is-active .hamburger-inner::before {\n    -webkit-transform: translate3d(0, 9px, 0) rotate(45deg);\n            transform: translate3d(0, 9px, 0) rotate(45deg); }\n\n.hamburger--3dx-r.is-active .hamburger-inner::after {\n    -webkit-transform: translate3d(0, -9px, 0) rotate(-45deg);\n            transform: translate3d(0, -9px, 0) rotate(-45deg); }\n\n/*\n   * 3DY\n   */\n\n.hamburger--3dy .hamburger-box {\n  -webkit-perspective: 60px;\n          perspective: 60px; }\n\n.hamburger--3dy .hamburger-inner {\n  -webkit-transition: background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1); }\n\n.hamburger--3dy .hamburger-inner::before, .hamburger--3dy .hamburger-inner::after {\n    -webkit-transition: -webkit-transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n    transition: -webkit-transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }\n\n.hamburger--3dy.is-active .hamburger-inner {\n  background-color: transparent;\n  -webkit-transform: rotateX(-180deg);\n          transform: rotateX(-180deg); }\n\n.hamburger--3dy.is-active .hamburger-inner::before {\n    -webkit-transform: translate3d(0, 9px, 0) rotate(45deg);\n            transform: translate3d(0, 9px, 0) rotate(45deg); }\n\n.hamburger--3dy.is-active .hamburger-inner::after {\n    -webkit-transform: translate3d(0, -9px, 0) rotate(-45deg);\n            transform: translate3d(0, -9px, 0) rotate(-45deg); }\n\n/*\n   * 3DY Reverse\n   */\n\n.hamburger--3dy-r .hamburger-box {\n  -webkit-perspective: 60px;\n          perspective: 60px; }\n\n.hamburger--3dy-r .hamburger-inner {\n  -webkit-transition: background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1); }\n\n.hamburger--3dy-r .hamburger-inner::before, .hamburger--3dy-r .hamburger-inner::after {\n    -webkit-transition: -webkit-transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n    transition: -webkit-transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }\n\n.hamburger--3dy-r.is-active .hamburger-inner {\n  background-color: transparent;\n  -webkit-transform: rotateX(180deg);\n          transform: rotateX(180deg); }\n\n.hamburger--3dy-r.is-active .hamburger-inner::before {\n    -webkit-transform: translate3d(0, 9px, 0) rotate(45deg);\n            transform: translate3d(0, 9px, 0) rotate(45deg); }\n\n.hamburger--3dy-r.is-active .hamburger-inner::after {\n    -webkit-transform: translate3d(0, -9px, 0) rotate(-45deg);\n            transform: translate3d(0, -9px, 0) rotate(-45deg); }\n\n/*\n   * 3DXY\n   */\n\n.hamburger--3dxy .hamburger-box {\n  -webkit-perspective: 60px;\n          perspective: 60px; }\n\n.hamburger--3dxy .hamburger-inner {\n  -webkit-transition: background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1); }\n\n.hamburger--3dxy .hamburger-inner::before, .hamburger--3dxy .hamburger-inner::after {\n    -webkit-transition: -webkit-transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n    transition: -webkit-transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }\n\n.hamburger--3dxy.is-active .hamburger-inner {\n  background-color: transparent;\n  -webkit-transform: rotateX(180deg) rotateY(180deg);\n          transform: rotateX(180deg) rotateY(180deg); }\n\n.hamburger--3dxy.is-active .hamburger-inner::before {\n    -webkit-transform: translate3d(0, 9px, 0) rotate(45deg);\n            transform: translate3d(0, 9px, 0) rotate(45deg); }\n\n.hamburger--3dxy.is-active .hamburger-inner::after {\n    -webkit-transform: translate3d(0, -9px, 0) rotate(-45deg);\n            transform: translate3d(0, -9px, 0) rotate(-45deg); }\n\n/*\n   * 3DXY Reverse\n   */\n\n.hamburger--3dxy-r .hamburger-box {\n  -webkit-perspective: 60px;\n          perspective: 60px; }\n\n.hamburger--3dxy-r .hamburger-inner {\n  -webkit-transition: background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1); }\n\n.hamburger--3dxy-r .hamburger-inner::before, .hamburger--3dxy-r .hamburger-inner::after {\n    -webkit-transition: -webkit-transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n    transition: -webkit-transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);\n    transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1); }\n\n.hamburger--3dxy-r.is-active .hamburger-inner {\n  background-color: transparent;\n  -webkit-transform: rotateX(180deg) rotateY(180deg) rotateZ(-180deg);\n          transform: rotateX(180deg) rotateY(180deg) rotateZ(-180deg); }\n\n.hamburger--3dxy-r.is-active .hamburger-inner::before {\n    -webkit-transform: translate3d(0, 9px, 0) rotate(45deg);\n            transform: translate3d(0, 9px, 0) rotate(45deg); }\n\n.hamburger--3dxy-r.is-active .hamburger-inner::after {\n    -webkit-transform: translate3d(0, -9px, 0) rotate(-45deg);\n            transform: translate3d(0, -9px, 0) rotate(-45deg); }\n\n/*\n   * Arrow\n   */\n\n.hamburger--arrow.is-active .hamburger-inner::before {\n  -webkit-transform: translate3d(-6px, 0, 0) rotate(-45deg) scale(0.7, 1);\n          transform: translate3d(-6px, 0, 0) rotate(-45deg) scale(0.7, 1); }\n\n.hamburger--arrow.is-active .hamburger-inner::after {\n  -webkit-transform: translate3d(-6px, 0, 0) rotate(45deg) scale(0.7, 1);\n          transform: translate3d(-6px, 0, 0) rotate(45deg) scale(0.7, 1); }\n\n/*\n   * Arrow Right\n   */\n\n.hamburger--arrow-r.is-active .hamburger-inner::before {\n  -webkit-transform: translate3d(6px, 0, 0) rotate(45deg) scale(0.7, 1);\n          transform: translate3d(6px, 0, 0) rotate(45deg) scale(0.7, 1); }\n\n.hamburger--arrow-r.is-active .hamburger-inner::after {\n  -webkit-transform: translate3d(6px, 0, 0) rotate(-45deg) scale(0.7, 1);\n          transform: translate3d(6px, 0, 0) rotate(-45deg) scale(0.7, 1); }\n\n/*\n   * Arrow Alt\n   */\n\n.hamburger--arrowalt .hamburger-inner::before {\n  -webkit-transition: top 0.1s 0.1s ease, -webkit-transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);\n  transition: top 0.1s 0.1s ease, -webkit-transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);\n  transition: top 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);\n  transition: top 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1), -webkit-transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1); }\n\n.hamburger--arrowalt .hamburger-inner::after {\n  -webkit-transition: bottom 0.1s 0.1s ease, -webkit-transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);\n  transition: bottom 0.1s 0.1s ease, -webkit-transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);\n  transition: bottom 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);\n  transition: bottom 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1), -webkit-transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1); }\n\n.hamburger--arrowalt.is-active .hamburger-inner::before {\n  top: 0;\n  -webkit-transform: translate3d(-6px, -7.5px, 0) rotate(-45deg) scale(0.7, 1);\n          transform: translate3d(-6px, -7.5px, 0) rotate(-45deg) scale(0.7, 1);\n  -webkit-transition: top 0.1s ease, -webkit-transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);\n  transition: top 0.1s ease, -webkit-transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);\n  transition: top 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);\n  transition: top 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22), -webkit-transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22); }\n\n.hamburger--arrowalt.is-active .hamburger-inner::after {\n  bottom: 0;\n  -webkit-transform: translate3d(-6px, 7.5px, 0) rotate(45deg) scale(0.7, 1);\n          transform: translate3d(-6px, 7.5px, 0) rotate(45deg) scale(0.7, 1);\n  -webkit-transition: bottom 0.1s ease, -webkit-transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);\n  transition: bottom 0.1s ease, -webkit-transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);\n  transition: bottom 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);\n  transition: bottom 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22), -webkit-transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22); }\n\n/*\n   * Arrow Alt Right\n   */\n\n.hamburger--arrowalt-r .hamburger-inner::before {\n  -webkit-transition: top 0.1s 0.1s ease, -webkit-transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);\n  transition: top 0.1s 0.1s ease, -webkit-transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);\n  transition: top 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);\n  transition: top 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1), -webkit-transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1); }\n\n.hamburger--arrowalt-r .hamburger-inner::after {\n  -webkit-transition: bottom 0.1s 0.1s ease, -webkit-transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);\n  transition: bottom 0.1s 0.1s ease, -webkit-transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);\n  transition: bottom 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);\n  transition: bottom 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1), -webkit-transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1); }\n\n.hamburger--arrowalt-r.is-active .hamburger-inner::before {\n  top: 0;\n  -webkit-transform: translate3d(6px, -7.5px, 0) rotate(45deg) scale(0.7, 1);\n          transform: translate3d(6px, -7.5px, 0) rotate(45deg) scale(0.7, 1);\n  -webkit-transition: top 0.1s ease, -webkit-transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);\n  transition: top 0.1s ease, -webkit-transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);\n  transition: top 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);\n  transition: top 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22), -webkit-transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22); }\n\n.hamburger--arrowalt-r.is-active .hamburger-inner::after {\n  bottom: 0;\n  -webkit-transform: translate3d(6px, 7.5px, 0) rotate(-45deg) scale(0.7, 1);\n          transform: translate3d(6px, 7.5px, 0) rotate(-45deg) scale(0.7, 1);\n  -webkit-transition: bottom 0.1s ease, -webkit-transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);\n  transition: bottom 0.1s ease, -webkit-transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);\n  transition: bottom 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);\n  transition: bottom 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22), -webkit-transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22); }\n\n/*\n   * Arrow Turn\n   */\n\n.hamburger--arrowturn.is-active .hamburger-inner {\n  -webkit-transform: rotate(-180deg);\n          transform: rotate(-180deg); }\n\n.hamburger--arrowturn.is-active .hamburger-inner::before {\n    -webkit-transform: translate3d(8px, 0, 0) rotate(45deg) scale(0.7, 1);\n            transform: translate3d(8px, 0, 0) rotate(45deg) scale(0.7, 1); }\n\n.hamburger--arrowturn.is-active .hamburger-inner::after {\n    -webkit-transform: translate3d(8px, 0, 0) rotate(-45deg) scale(0.7, 1);\n            transform: translate3d(8px, 0, 0) rotate(-45deg) scale(0.7, 1); }\n\n/*\n   * Arrow Turn Right\n   */\n\n.hamburger--arrowturn-r.is-active .hamburger-inner {\n  -webkit-transform: rotate(-180deg);\n          transform: rotate(-180deg); }\n\n.hamburger--arrowturn-r.is-active .hamburger-inner::before {\n    -webkit-transform: translate3d(-8px, 0, 0) rotate(-45deg) scale(0.7, 1);\n            transform: translate3d(-8px, 0, 0) rotate(-45deg) scale(0.7, 1); }\n\n.hamburger--arrowturn-r.is-active .hamburger-inner::after {\n    -webkit-transform: translate3d(-8px, 0, 0) rotate(45deg) scale(0.7, 1);\n            transform: translate3d(-8px, 0, 0) rotate(45deg) scale(0.7, 1); }\n\n/*\n   * Boring\n   */\n\n.hamburger--boring .hamburger-inner, .hamburger--boring .hamburger-inner::before, .hamburger--boring .hamburger-inner::after {\n  -webkit-transition-property: none;\n  transition-property: none; }\n\n.hamburger--boring.is-active .hamburger-inner {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg); }\n\n.hamburger--boring.is-active .hamburger-inner::before {\n    top: 0;\n    opacity: 0; }\n\n.hamburger--boring.is-active .hamburger-inner::after {\n    bottom: 0;\n    -webkit-transform: rotate(-90deg);\n            transform: rotate(-90deg); }\n\n/*\n   * Collapse\n   */\n\n.hamburger--collapse .hamburger-inner {\n  top: auto;\n  bottom: 0;\n  -webkit-transition-duration: 0.13s;\n          transition-duration: 0.13s;\n  -webkit-transition-delay: 0.13s;\n          transition-delay: 0.13s;\n  -webkit-transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n          transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--collapse .hamburger-inner::after {\n    top: -18px;\n    -webkit-transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0.1s linear;\n    transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0.1s linear; }\n\n.hamburger--collapse .hamburger-inner::before {\n    -webkit-transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), -webkit-transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), -webkit-transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19), -webkit-transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--collapse.is-active .hamburger-inner {\n  -webkit-transform: translate3d(0, -9px, 0) rotate(-45deg);\n          transform: translate3d(0, -9px, 0) rotate(-45deg);\n  -webkit-transition-delay: 0.22s;\n          transition-delay: 0.22s;\n  -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n          transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n.hamburger--collapse.is-active .hamburger-inner::after {\n    top: 0;\n    opacity: 0;\n    -webkit-transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0.1s 0.22s linear;\n    transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0.1s 0.22s linear; }\n\n.hamburger--collapse.is-active .hamburger-inner::before {\n    top: 0;\n    -webkit-transform: rotate(-90deg);\n            transform: rotate(-90deg);\n    -webkit-transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333), -webkit-transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333), -webkit-transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1), -webkit-transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n/*\n   * Collapse Reverse\n   */\n\n.hamburger--collapse-r .hamburger-inner {\n  top: auto;\n  bottom: 0;\n  -webkit-transition-duration: 0.13s;\n          transition-duration: 0.13s;\n  -webkit-transition-delay: 0.13s;\n          transition-delay: 0.13s;\n  -webkit-transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n          transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--collapse-r .hamburger-inner::after {\n    top: -18px;\n    -webkit-transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0.1s linear;\n    transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0.1s linear; }\n\n.hamburger--collapse-r .hamburger-inner::before {\n    -webkit-transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), -webkit-transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), -webkit-transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19), -webkit-transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--collapse-r.is-active .hamburger-inner {\n  -webkit-transform: translate3d(0, -9px, 0) rotate(45deg);\n          transform: translate3d(0, -9px, 0) rotate(45deg);\n  -webkit-transition-delay: 0.22s;\n          transition-delay: 0.22s;\n  -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n          transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n.hamburger--collapse-r.is-active .hamburger-inner::after {\n    top: 0;\n    opacity: 0;\n    -webkit-transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0.1s 0.22s linear;\n    transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0.1s 0.22s linear; }\n\n.hamburger--collapse-r.is-active .hamburger-inner::before {\n    top: 0;\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg);\n    -webkit-transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333), -webkit-transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333), -webkit-transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1), -webkit-transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n/*\n   * Elastic\n   */\n\n.hamburger--elastic .hamburger-inner {\n  top: 1.5px;\n  -webkit-transition-duration: 0.275s;\n          transition-duration: 0.275s;\n  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);\n          transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55); }\n\n.hamburger--elastic .hamburger-inner::before {\n    top: 9px;\n    -webkit-transition: opacity 0.125s 0.275s ease;\n    transition: opacity 0.125s 0.275s ease; }\n\n.hamburger--elastic .hamburger-inner::after {\n    top: 18px;\n    -webkit-transition: -webkit-transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n    transition: -webkit-transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n    transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n    transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55), -webkit-transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55); }\n\n.hamburger--elastic.is-active .hamburger-inner {\n  -webkit-transform: translate3d(0, 9px, 0) rotate(135deg);\n          transform: translate3d(0, 9px, 0) rotate(135deg);\n  -webkit-transition-delay: 0.075s;\n          transition-delay: 0.075s; }\n\n.hamburger--elastic.is-active .hamburger-inner::before {\n    -webkit-transition-delay: 0s;\n            transition-delay: 0s;\n    opacity: 0; }\n\n.hamburger--elastic.is-active .hamburger-inner::after {\n    -webkit-transform: translate3d(0, -18px, 0) rotate(-270deg);\n            transform: translate3d(0, -18px, 0) rotate(-270deg);\n    -webkit-transition-delay: 0.075s;\n            transition-delay: 0.075s; }\n\n/*\n   * Elastic Reverse\n   */\n\n.hamburger--elastic-r .hamburger-inner {\n  top: 1.5px;\n  -webkit-transition-duration: 0.275s;\n          transition-duration: 0.275s;\n  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);\n          transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55); }\n\n.hamburger--elastic-r .hamburger-inner::before {\n    top: 9px;\n    -webkit-transition: opacity 0.125s 0.275s ease;\n    transition: opacity 0.125s 0.275s ease; }\n\n.hamburger--elastic-r .hamburger-inner::after {\n    top: 18px;\n    -webkit-transition: -webkit-transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n    transition: -webkit-transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n    transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n    transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55), -webkit-transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55); }\n\n.hamburger--elastic-r.is-active .hamburger-inner {\n  -webkit-transform: translate3d(0, 9px, 0) rotate(-135deg);\n          transform: translate3d(0, 9px, 0) rotate(-135deg);\n  -webkit-transition-delay: 0.075s;\n          transition-delay: 0.075s; }\n\n.hamburger--elastic-r.is-active .hamburger-inner::before {\n    -webkit-transition-delay: 0s;\n            transition-delay: 0s;\n    opacity: 0; }\n\n.hamburger--elastic-r.is-active .hamburger-inner::after {\n    -webkit-transform: translate3d(0, -18px, 0) rotate(270deg);\n            transform: translate3d(0, -18px, 0) rotate(270deg);\n    -webkit-transition-delay: 0.075s;\n            transition-delay: 0.075s; }\n\n/*\n   * Emphatic\n   */\n\n.hamburger--emphatic {\n  overflow: hidden; }\n\n.hamburger--emphatic .hamburger-inner {\n    -webkit-transition: background-color 0.125s 0.175s ease-in;\n    transition: background-color 0.125s 0.175s ease-in; }\n\n.hamburger--emphatic .hamburger-inner::before {\n      left: 0;\n      -webkit-transition: top 0.05s 0.125s linear, left 0.125s 0.175s ease-in, -webkit-transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335);\n      transition: top 0.05s 0.125s linear, left 0.125s 0.175s ease-in, -webkit-transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335);\n      transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, left 0.125s 0.175s ease-in;\n      transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, left 0.125s 0.175s ease-in, -webkit-transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335); }\n\n.hamburger--emphatic .hamburger-inner::after {\n      top: 9px;\n      right: 0;\n      -webkit-transition: top 0.05s 0.125s linear, right 0.125s 0.175s ease-in, -webkit-transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335);\n      transition: top 0.05s 0.125s linear, right 0.125s 0.175s ease-in, -webkit-transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335);\n      transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, right 0.125s 0.175s ease-in;\n      transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, right 0.125s 0.175s ease-in, -webkit-transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335); }\n\n.hamburger--emphatic.is-active .hamburger-inner {\n    -webkit-transition-delay: 0s;\n            transition-delay: 0s;\n    -webkit-transition-timing-function: ease-out;\n            transition-timing-function: ease-out;\n    background-color: transparent; }\n\n.hamburger--emphatic.is-active .hamburger-inner::before {\n      left: -60px;\n      top: -60px;\n      -webkit-transform: translate3d(60px, 60px, 0) rotate(45deg);\n              transform: translate3d(60px, 60px, 0) rotate(45deg);\n      -webkit-transition: left 0.125s ease-out, top 0.05s 0.125s linear, -webkit-transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);\n      transition: left 0.125s ease-out, top 0.05s 0.125s linear, -webkit-transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);\n      transition: left 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);\n      transition: left 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1), -webkit-transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1); }\n\n.hamburger--emphatic.is-active .hamburger-inner::after {\n      right: -60px;\n      top: -60px;\n      -webkit-transform: translate3d(-60px, 60px, 0) rotate(-45deg);\n              transform: translate3d(-60px, 60px, 0) rotate(-45deg);\n      -webkit-transition: right 0.125s ease-out, top 0.05s 0.125s linear, -webkit-transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);\n      transition: right 0.125s ease-out, top 0.05s 0.125s linear, -webkit-transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);\n      transition: right 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);\n      transition: right 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1), -webkit-transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1); }\n\n/*\n   * Emphatic Reverse\n   */\n\n.hamburger--emphatic-r {\n  overflow: hidden; }\n\n.hamburger--emphatic-r .hamburger-inner {\n    -webkit-transition: background-color 0.125s 0.175s ease-in;\n    transition: background-color 0.125s 0.175s ease-in; }\n\n.hamburger--emphatic-r .hamburger-inner::before {\n      left: 0;\n      -webkit-transition: top 0.05s 0.125s linear, left 0.125s 0.175s ease-in, -webkit-transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335);\n      transition: top 0.05s 0.125s linear, left 0.125s 0.175s ease-in, -webkit-transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335);\n      transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, left 0.125s 0.175s ease-in;\n      transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, left 0.125s 0.175s ease-in, -webkit-transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335); }\n\n.hamburger--emphatic-r .hamburger-inner::after {\n      top: 9px;\n      right: 0;\n      -webkit-transition: top 0.05s 0.125s linear, right 0.125s 0.175s ease-in, -webkit-transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335);\n      transition: top 0.05s 0.125s linear, right 0.125s 0.175s ease-in, -webkit-transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335);\n      transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, right 0.125s 0.175s ease-in;\n      transition: transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, right 0.125s 0.175s ease-in, -webkit-transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335); }\n\n.hamburger--emphatic-r.is-active .hamburger-inner {\n    -webkit-transition-delay: 0s;\n            transition-delay: 0s;\n    -webkit-transition-timing-function: ease-out;\n            transition-timing-function: ease-out;\n    background-color: transparent; }\n\n.hamburger--emphatic-r.is-active .hamburger-inner::before {\n      left: -60px;\n      top: 60px;\n      -webkit-transform: translate3d(60px, -60px, 0) rotate(-45deg);\n              transform: translate3d(60px, -60px, 0) rotate(-45deg);\n      -webkit-transition: left 0.125s ease-out, top 0.05s 0.125s linear, -webkit-transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);\n      transition: left 0.125s ease-out, top 0.05s 0.125s linear, -webkit-transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);\n      transition: left 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);\n      transition: left 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1), -webkit-transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1); }\n\n.hamburger--emphatic-r.is-active .hamburger-inner::after {\n      right: -60px;\n      top: 60px;\n      -webkit-transform: translate3d(-60px, -60px, 0) rotate(45deg);\n              transform: translate3d(-60px, -60px, 0) rotate(45deg);\n      -webkit-transition: right 0.125s ease-out, top 0.05s 0.125s linear, -webkit-transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);\n      transition: right 0.125s ease-out, top 0.05s 0.125s linear, -webkit-transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);\n      transition: right 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1);\n      transition: right 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1), -webkit-transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1); }\n\n/*\n   * Minus\n   */\n\n.hamburger--minus .hamburger-inner::before, .hamburger--minus .hamburger-inner::after {\n  -webkit-transition: bottom 0.08s 0s ease-out, top 0.08s 0s ease-out, opacity 0s linear;\n  transition: bottom 0.08s 0s ease-out, top 0.08s 0s ease-out, opacity 0s linear; }\n\n.hamburger--minus.is-active .hamburger-inner::before, .hamburger--minus.is-active .hamburger-inner::after {\n  opacity: 0;\n  -webkit-transition: bottom 0.08s ease-out, top 0.08s ease-out, opacity 0s 0.08s linear;\n  transition: bottom 0.08s ease-out, top 0.08s ease-out, opacity 0s 0.08s linear; }\n\n.hamburger--minus.is-active .hamburger-inner::before {\n  top: 0; }\n\n.hamburger--minus.is-active .hamburger-inner::after {\n  bottom: 0; }\n\n/*\n   * Slider\n   */\n\n.hamburger--slider .hamburger-inner {\n  top: 1.5px; }\n\n.hamburger--slider .hamburger-inner::before {\n    top: 9px;\n    -webkit-transition-property: opacity, -webkit-transform;\n    transition-property: opacity, -webkit-transform;\n    transition-property: transform, opacity;\n    transition-property: transform, opacity, -webkit-transform;\n    -webkit-transition-timing-function: ease;\n            transition-timing-function: ease;\n    -webkit-transition-duration: 0.15s;\n            transition-duration: 0.15s; }\n\n.hamburger--slider .hamburger-inner::after {\n    top: 18px; }\n\n.hamburger--slider.is-active .hamburger-inner {\n  -webkit-transform: translate3d(0, 9px, 0) rotate(45deg);\n          transform: translate3d(0, 9px, 0) rotate(45deg); }\n\n.hamburger--slider.is-active .hamburger-inner::before {\n    -webkit-transform: rotate(-45deg) translate3d(-4.28571429px, -6px, 0);\n            transform: rotate(-45deg) translate3d(-4.28571429px, -6px, 0);\n    opacity: 0; }\n\n.hamburger--slider.is-active .hamburger-inner::after {\n    -webkit-transform: translate3d(0, -18px, 0) rotate(-90deg);\n            transform: translate3d(0, -18px, 0) rotate(-90deg); }\n\n/*\n   * Slider Reverse\n   */\n\n.hamburger--slider-r .hamburger-inner {\n  top: 1.5px; }\n\n.hamburger--slider-r .hamburger-inner::before {\n    top: 9px;\n    -webkit-transition-property: opacity, -webkit-transform;\n    transition-property: opacity, -webkit-transform;\n    transition-property: transform, opacity;\n    transition-property: transform, opacity, -webkit-transform;\n    -webkit-transition-timing-function: ease;\n            transition-timing-function: ease;\n    -webkit-transition-duration: 0.15s;\n            transition-duration: 0.15s; }\n\n.hamburger--slider-r .hamburger-inner::after {\n    top: 18px; }\n\n.hamburger--slider-r.is-active .hamburger-inner {\n  -webkit-transform: translate3d(0, 9px, 0) rotate(-45deg);\n          transform: translate3d(0, 9px, 0) rotate(-45deg); }\n\n.hamburger--slider-r.is-active .hamburger-inner::before {\n    -webkit-transform: rotate(45deg) translate3d(4.28571429px, -6px, 0);\n            transform: rotate(45deg) translate3d(4.28571429px, -6px, 0);\n    opacity: 0; }\n\n.hamburger--slider-r.is-active .hamburger-inner::after {\n    -webkit-transform: translate3d(0, -18px, 0) rotate(90deg);\n            transform: translate3d(0, -18px, 0) rotate(90deg); }\n\n/*\n   * Spin\n   */\n\n.hamburger--spin .hamburger-inner {\n  -webkit-transition-duration: 0.22s;\n          transition-duration: 0.22s;\n  -webkit-transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n          transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--spin .hamburger-inner::before {\n    -webkit-transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;\n    transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in; }\n\n.hamburger--spin .hamburger-inner::after {\n    -webkit-transition: bottom 0.1s 0.25s ease-in, -webkit-transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    transition: bottom 0.1s 0.25s ease-in, -webkit-transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    transition: bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    transition: bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19), -webkit-transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--spin.is-active .hamburger-inner {\n  -webkit-transform: rotate(225deg);\n          transform: rotate(225deg);\n  -webkit-transition-delay: 0.12s;\n          transition-delay: 0.12s;\n  -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n          transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n.hamburger--spin.is-active .hamburger-inner::before {\n    top: 0;\n    opacity: 0;\n    -webkit-transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;\n    transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out; }\n\n.hamburger--spin.is-active .hamburger-inner::after {\n    bottom: 0;\n    -webkit-transform: rotate(-90deg);\n            transform: rotate(-90deg);\n    -webkit-transition: bottom 0.1s ease-out, -webkit-transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: bottom 0.1s ease-out, -webkit-transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1), -webkit-transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n/*\n   * Spin Reverse\n   */\n\n.hamburger--spin-r .hamburger-inner {\n  -webkit-transition-duration: 0.22s;\n          transition-duration: 0.22s;\n  -webkit-transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n          transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--spin-r .hamburger-inner::before {\n    -webkit-transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;\n    transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in; }\n\n.hamburger--spin-r .hamburger-inner::after {\n    -webkit-transition: bottom 0.1s 0.25s ease-in, -webkit-transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    transition: bottom 0.1s 0.25s ease-in, -webkit-transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    transition: bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    transition: bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19), -webkit-transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--spin-r.is-active .hamburger-inner {\n  -webkit-transform: rotate(-225deg);\n          transform: rotate(-225deg);\n  -webkit-transition-delay: 0.12s;\n          transition-delay: 0.12s;\n  -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n          transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n.hamburger--spin-r.is-active .hamburger-inner::before {\n    top: 0;\n    opacity: 0;\n    -webkit-transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;\n    transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out; }\n\n.hamburger--spin-r.is-active .hamburger-inner::after {\n    bottom: 0;\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg);\n    -webkit-transition: bottom 0.1s ease-out, -webkit-transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: bottom 0.1s ease-out, -webkit-transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1), -webkit-transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n/*\n   * Spring\n   */\n\n.hamburger--spring .hamburger-inner {\n  top: 1.5px;\n  -webkit-transition: background-color 0s 0.13s linear;\n  transition: background-color 0s 0.13s linear; }\n\n.hamburger--spring .hamburger-inner::before {\n    top: 9px;\n    -webkit-transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), -webkit-transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), -webkit-transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19), -webkit-transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--spring .hamburger-inner::after {\n    top: 18px;\n    -webkit-transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), -webkit-transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), -webkit-transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19), -webkit-transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--spring.is-active .hamburger-inner {\n  -webkit-transition-delay: 0.22s;\n          transition-delay: 0.22s;\n  background-color: transparent; }\n\n.hamburger--spring.is-active .hamburger-inner::before {\n    top: 0;\n    -webkit-transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333), -webkit-transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333), -webkit-transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1), -webkit-transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);\n    -webkit-transform: translate3d(0, 9px, 0) rotate(45deg);\n            transform: translate3d(0, 9px, 0) rotate(45deg); }\n\n.hamburger--spring.is-active .hamburger-inner::after {\n    top: 0;\n    -webkit-transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), -webkit-transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), -webkit-transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1), -webkit-transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);\n    -webkit-transform: translate3d(0, 9px, 0) rotate(-45deg);\n            transform: translate3d(0, 9px, 0) rotate(-45deg); }\n\n/*\n   * Spring Reverse\n   */\n\n.hamburger--spring-r .hamburger-inner {\n  top: auto;\n  bottom: 0;\n  -webkit-transition-duration: 0.13s;\n          transition-duration: 0.13s;\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n  -webkit-transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n          transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--spring-r .hamburger-inner::after {\n    top: -18px;\n    -webkit-transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0s linear;\n    transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0s linear; }\n\n.hamburger--spring-r .hamburger-inner::before {\n    -webkit-transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), -webkit-transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), -webkit-transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19), -webkit-transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--spring-r.is-active .hamburger-inner {\n  -webkit-transform: translate3d(0, -9px, 0) rotate(-45deg);\n          transform: translate3d(0, -9px, 0) rotate(-45deg);\n  -webkit-transition-delay: 0.22s;\n          transition-delay: 0.22s;\n  -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n          transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n.hamburger--spring-r.is-active .hamburger-inner::after {\n    top: 0;\n    opacity: 0;\n    -webkit-transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0s 0.22s linear;\n    transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0s 0.22s linear; }\n\n.hamburger--spring-r.is-active .hamburger-inner::before {\n    top: 0;\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg);\n    -webkit-transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333), -webkit-transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333), -webkit-transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1), -webkit-transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n/*\n   * Stand\n   */\n\n.hamburger--stand .hamburger-inner {\n  -webkit-transition: background-color 0s 0.075s linear, -webkit-transform 0.075s 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  transition: background-color 0s 0.075s linear, -webkit-transform 0.075s 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  transition: transform 0.075s 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19), background-color 0s 0.075s linear;\n  transition: transform 0.075s 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19), background-color 0s 0.075s linear, -webkit-transform 0.075s 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--stand .hamburger-inner::before {\n    -webkit-transition: top 0.075s 0.075s ease-in, -webkit-transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    transition: top 0.075s 0.075s ease-in, -webkit-transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    transition: top 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    transition: top 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19), -webkit-transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--stand .hamburger-inner::after {\n    -webkit-transition: bottom 0.075s 0.075s ease-in, -webkit-transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    transition: bottom 0.075s 0.075s ease-in, -webkit-transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    transition: bottom 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    transition: bottom 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19), -webkit-transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--stand.is-active .hamburger-inner {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n  background-color: transparent;\n  -webkit-transition: background-color 0s 0.15s linear, -webkit-transform 0.075s 0s cubic-bezier(0.215, 0.61, 0.355, 1);\n  transition: background-color 0s 0.15s linear, -webkit-transform 0.075s 0s cubic-bezier(0.215, 0.61, 0.355, 1);\n  transition: transform 0.075s 0s cubic-bezier(0.215, 0.61, 0.355, 1), background-color 0s 0.15s linear;\n  transition: transform 0.075s 0s cubic-bezier(0.215, 0.61, 0.355, 1), background-color 0s 0.15s linear, -webkit-transform 0.075s 0s cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n.hamburger--stand.is-active .hamburger-inner::before {\n    top: 0;\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n    -webkit-transition: top 0.075s 0.1s ease-out, -webkit-transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: top 0.075s 0.1s ease-out, -webkit-transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: top 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: top 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1), -webkit-transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n.hamburger--stand.is-active .hamburger-inner::after {\n    bottom: 0;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n    -webkit-transition: bottom 0.075s 0.1s ease-out, -webkit-transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: bottom 0.075s 0.1s ease-out, -webkit-transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: bottom 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: bottom 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1), -webkit-transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n/*\n   * Stand Reverse\n   */\n\n.hamburger--stand-r .hamburger-inner {\n  -webkit-transition: background-color 0s 0.075s linear, -webkit-transform 0.075s 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  transition: background-color 0s 0.075s linear, -webkit-transform 0.075s 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n  transition: transform 0.075s 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19), background-color 0s 0.075s linear;\n  transition: transform 0.075s 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19), background-color 0s 0.075s linear, -webkit-transform 0.075s 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--stand-r .hamburger-inner::before {\n    -webkit-transition: top 0.075s 0.075s ease-in, -webkit-transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    transition: top 0.075s 0.075s ease-in, -webkit-transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    transition: top 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    transition: top 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19), -webkit-transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--stand-r .hamburger-inner::after {\n    -webkit-transition: bottom 0.075s 0.075s ease-in, -webkit-transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    transition: bottom 0.075s 0.075s ease-in, -webkit-transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    transition: bottom 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    transition: bottom 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19), -webkit-transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--stand-r.is-active .hamburger-inner {\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg);\n  background-color: transparent;\n  -webkit-transition: background-color 0s 0.15s linear, -webkit-transform 0.075s 0s cubic-bezier(0.215, 0.61, 0.355, 1);\n  transition: background-color 0s 0.15s linear, -webkit-transform 0.075s 0s cubic-bezier(0.215, 0.61, 0.355, 1);\n  transition: transform 0.075s 0s cubic-bezier(0.215, 0.61, 0.355, 1), background-color 0s 0.15s linear;\n  transition: transform 0.075s 0s cubic-bezier(0.215, 0.61, 0.355, 1), background-color 0s 0.15s linear, -webkit-transform 0.075s 0s cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n.hamburger--stand-r.is-active .hamburger-inner::before {\n    top: 0;\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n    -webkit-transition: top 0.075s 0.1s ease-out, -webkit-transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: top 0.075s 0.1s ease-out, -webkit-transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: top 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: top 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1), -webkit-transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n.hamburger--stand-r.is-active .hamburger-inner::after {\n    bottom: 0;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n    -webkit-transition: bottom 0.075s 0.1s ease-out, -webkit-transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: bottom 0.075s 0.1s ease-out, -webkit-transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: bottom 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: bottom 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1), -webkit-transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n/*\n   * Squeeze\n   */\n\n.hamburger--squeeze .hamburger-inner {\n  -webkit-transition-duration: 0.075s;\n          transition-duration: 0.075s;\n  -webkit-transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\n          transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--squeeze .hamburger-inner::before {\n    -webkit-transition: top 0.075s 0.12s ease, opacity 0.075s ease;\n    transition: top 0.075s 0.12s ease, opacity 0.075s ease; }\n\n.hamburger--squeeze .hamburger-inner::after {\n    -webkit-transition: bottom 0.075s 0.12s ease, -webkit-transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    transition: bottom 0.075s 0.12s ease, -webkit-transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    transition: bottom 0.075s 0.12s ease, transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    transition: bottom 0.075s 0.12s ease, transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19), -webkit-transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19); }\n\n.hamburger--squeeze.is-active .hamburger-inner {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  -webkit-transition-delay: 0.12s;\n          transition-delay: 0.12s;\n  -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n          transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n.hamburger--squeeze.is-active .hamburger-inner::before {\n    top: 0;\n    opacity: 0;\n    -webkit-transition: top 0.075s ease, opacity 0.075s 0.12s ease;\n    transition: top 0.075s ease, opacity 0.075s 0.12s ease; }\n\n.hamburger--squeeze.is-active .hamburger-inner::after {\n    bottom: 0;\n    -webkit-transform: rotate(-90deg);\n            transform: rotate(-90deg);\n    -webkit-transition: bottom 0.075s ease, -webkit-transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: bottom 0.075s ease, -webkit-transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: bottom 0.075s ease, transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: bottom 0.075s ease, transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1), -webkit-transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1); }\n\n/*\n   * Vortex\n   */\n\n.hamburger--vortex .hamburger-inner {\n  -webkit-transition-duration: 0.2s;\n          transition-duration: 0.2s;\n  -webkit-transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);\n          transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1); }\n\n.hamburger--vortex .hamburger-inner::before, .hamburger--vortex .hamburger-inner::after {\n    -webkit-transition-duration: 0s;\n            transition-duration: 0s;\n    -webkit-transition-delay: 0.1s;\n            transition-delay: 0.1s;\n    -webkit-transition-timing-function: linear;\n            transition-timing-function: linear; }\n\n.hamburger--vortex .hamburger-inner::before {\n    -webkit-transition-property: top, opacity;\n    transition-property: top, opacity; }\n\n.hamburger--vortex .hamburger-inner::after {\n    -webkit-transition-property: bottom, -webkit-transform;\n    transition-property: bottom, -webkit-transform;\n    transition-property: bottom, transform;\n    transition-property: bottom, transform, -webkit-transform; }\n\n.hamburger--vortex.is-active .hamburger-inner {\n  -webkit-transform: rotate(765deg);\n          transform: rotate(765deg);\n  -webkit-transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);\n          transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1); }\n\n.hamburger--vortex.is-active .hamburger-inner::before, .hamburger--vortex.is-active .hamburger-inner::after {\n    -webkit-transition-delay: 0s;\n            transition-delay: 0s; }\n\n.hamburger--vortex.is-active .hamburger-inner::before {\n    top: 0;\n    opacity: 0; }\n\n.hamburger--vortex.is-active .hamburger-inner::after {\n    bottom: 0;\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg); }\n\n/*\n   * Vortex Reverse\n   */\n\n.hamburger--vortex-r .hamburger-inner {\n  -webkit-transition-duration: 0.2s;\n          transition-duration: 0.2s;\n  -webkit-transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);\n          transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1); }\n\n.hamburger--vortex-r .hamburger-inner::before, .hamburger--vortex-r .hamburger-inner::after {\n    -webkit-transition-duration: 0s;\n            transition-duration: 0s;\n    -webkit-transition-delay: 0.1s;\n            transition-delay: 0.1s;\n    -webkit-transition-timing-function: linear;\n            transition-timing-function: linear; }\n\n.hamburger--vortex-r .hamburger-inner::before {\n    -webkit-transition-property: top, opacity;\n    transition-property: top, opacity; }\n\n.hamburger--vortex-r .hamburger-inner::after {\n    -webkit-transition-property: bottom, -webkit-transform;\n    transition-property: bottom, -webkit-transform;\n    transition-property: bottom, transform;\n    transition-property: bottom, transform, -webkit-transform; }\n\n.hamburger--vortex-r.is-active .hamburger-inner {\n  -webkit-transform: rotate(-765deg);\n          transform: rotate(-765deg);\n  -webkit-transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);\n          transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1); }\n\n.hamburger--vortex-r.is-active .hamburger-inner::before, .hamburger--vortex-r.is-active .hamburger-inner::after {\n    -webkit-transition-delay: 0s;\n            transition-delay: 0s; }\n\n.hamburger--vortex-r.is-active .hamburger-inner::before {\n    top: 0;\n    opacity: 0; }\n\n.hamburger--vortex-r.is-active .hamburger-inner::after {\n    bottom: 0;\n    -webkit-transform: rotate(-90deg);\n            transform: rotate(-90deg); }\n\nbutton:active, button:focus {\n  outline: 0;\n  border: none;\n  -moz-outline-style: none; }\n\n.quick-access-bar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 60px;\n  width: 100%;\n  z-index: 10000;\n  background-color: var(--secondary-color);\n  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.16), 0 1px 4px rgba(0, 0, 0, 0.23);\n          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.16), 0 1px 4px rgba(0, 0, 0, 0.23); }\n\n.quick-access-bar .quick-access-bar-infos {\n    height: 60px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n\n.quick-access-bar .quick-access-bar-infos .hamburger-box {\n      margin-top: 6px; }\n\n.quick-access-bar .quick-access-bar-infos .pedago-title {\n      display: -webkit-inline-box;\n      display: -ms-inline-flexbox;\n      display: inline-flex;\n      height: inherit;\n      vertical-align: middle; }\n\n.quick-access-bar .quick-access-bar-infos .pedago-title svg {\n        width: 250px;\n        padding-left: 25px;\n        padding-right: 25px; }\n\n.quick-access-bar .quick-access-bar-infos .quick-access-wrappers {\n      display: inline-table;\n      height: inherit;\n      vertical-align: middle; }\n\n.quick-access-bar .quick-access-bar-infos .quick-access-wrappers > * {\n        display: table-cell;\n        height: inherit;\n        padding-left: 20px;\n        padding-right: 20px;\n        vertical-align: middle; }\n\n.quick-access-bar .quick-access-bar-infos .quick-access-wrappers svg {\n        height: 60%;\n        vertical-align: middle;\n        fill: #fff; }\n\n.quick-access-bar .quick-access-bar-infos .quick-access-wrappers svg.gear {\n          opacity: 0.3; }\n\n.quick-access-bar .quick-access-bar-infos .quick-access-wrappers .options {\n        opacity: 0.3; }\n\n.quick-access-bar .quick-access-bar-infos .quick-access-wrappers svg:hover {\n        cursor: pointer; }\n\n.quick-access-bar .quick-access-bar-infos .quick-access-wrappers .profile {\n        height: inherit; }\n\n.quick-access-bar .quick-access-bar-infos .quick-access-wrappers .profile > * {\n          display: inline-block;\n          vertical-align: middle; }\n\n.quick-access-bar .quick-access-bar-infos .quick-access-wrappers .profile .profile-picture {\n          height: 50px;\n          width: 50px;\n          border-left: var(--primary-color) solid 4px;\n          -webkit-box-sizing: border-box;\n                  box-sizing: border-box;\n          background-repeat: no-repeat;\n          background-position: center center;\n          background-size: cover; }\n\n.quick-access-bar .quick-access-bar-infos .quick-access-wrappers .profile p {\n          margin: 0 auto;\n          vertical-align: middle;\n          color: #fff;\n          opacity: 0.7;\n          line-height: 130%; }\n\n@media screen and (min-width: 768px) {\n  .quick-access-bar .mobile-navigation {\n    display: none; }\n  .quick-access-bar .quick-access-bar-infos .hamburger {\n    display: none; } }\n\n@media screen and (max-width: 767px) {\n  .quick-access-bar {\n    overflow: hidden;\n    -webkit-transition: height 0.5s ease;\n    transition: height 0.5s ease; }\n    .quick-access-bar .quick-access-bar-infos .quick-access-wrappers > *:not(.logout) {\n      display: none; }\n  .quick-access-bar.is-active {\n    height: 100vh;\n    -webkit-transition: height 0.5s ease;\n    transition: height 0.5s ease; }\n  .quick-access-bar.is-active + body {\n    overflow: hidden; } }\n"

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
        this.isActive = false;
        this.user = JSON.parse(window.localStorage.getItem('session')).user;
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
            console.log('Error on logout', error);
        });
    };
    QuickAccessBarComponent.prototype.toggleMenu = function (event) {
        this.isActive = !this.isActive;
    };
    QuickAccessBarComponent.prototype.getUrl = function () {
        return 'https://cdn.local.epitech.eu/userprofil/trombiview/'
            + this.user.firstName.toLowerCase() + '.'
            + this.user.lastName.toLowerCase() + '.jpg';
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

module.exports = "<app-quick-access-bar></app-quick-access-bar>\n<app-navigation class=\"navigation\" (onSizeChange)=\"onNavSizeChange($event)\"></app-navigation>\n<div class=\"admin-page\" [style.marginLeft]=\"navBarWidth\" [style.marginTop]=\"'65px'\">\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/components/pages/admin/admin.component.scss":
/***/ (function(module, exports) {

module.exports = "body {\n  background-color: #F4F8F9; }\n\n.admin-page {\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n  padding: 10px; }\n\n@media screen and (max-width: 767px) {\n  .navigation {\n    display: none; }\n  .admin-page {\n    margin-left: 0 !important; } }\n"

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

module.exports = "<div class=\"tig-container\">\n<table id=\"tig-table\">\n  <thead>\n  <tr>\n    <td class=\"shrink\">\n      <label class=\"checkbox-container\">\n        <input type=\"checkbox\">\n        <span class=\"checkmark\"></span>\n      </label>\n    </td>\n    <td class=\"shrink\">Student</td>\n    <td class=\"shrink\">Grant date</td>\n    <td class=\"expand\">Reason</td>\n    <td class=\"shrink\">Assigned by</td>\n    <td class=\"shrink\">Status</td>\n    <td class=\"expand work\">Work</td>\n    <td class=\"shrink end-date\">On</td>\n    <td class=\"shrink\"></td>\n  </tr>\n  </thead>\n  <tbody id=\"tiglist\">\n  <tr *ngFor=\"let tig of tigs; let i = index\">\n    <td class=\"shrink checkmark-tig\">\n      <div class=\"checkmark\">\n        <input id=\"checkbox-{{i}}\" type=\"checkbox\">\n        <label for=\"checkbox-{{i}}\"></label>\n      </div>\n    </td>\n    <td class=\"shrink profile assigned\">\n      <div class=\"profile-wrapper\">\n        <div class=\"cropcircle\" [style.backgroundImage]=\"'url('+tig.id+')'\"></div>\n        <div class=\"infos\">\n          <p class=\"name\">{{tig.id}}</p>\n          <p class=\"mail\">{{tig.id}}</p>\n        </div>\n      </div>\n    </td>\n    <td class=\"shrink date\"><p>{{getFormatedDate(tig.date)}}</p></td>\n    <td class=\"expand reason\" >\n      <a role=\"button\" class=\"collapse\" data-toggle=\"collapse\" data-parent=\"#tiglist\" href=\".collapseTig-{{i}}\" aria-expanded=\"false\" attr.aria-controls=\"collapseTig-{{i}}\" (click)=\"toggleCollapse()\">\n        <p class=\"collapseTig-{{i}} collapsed\">{{tig.reason}}</p>\n      </a>  </td>\n    <td class=\"shrink profile allocator\">\n      <div class=\"profile-wrapper\">\n        <div class=\"cropcircle\" [style.backgroundImage]=\"'url('+tig.issuer+')'\"></div>\n        <div class=\"infos\">\n          <p class=\"name\">{{tig.issuer}} {{tig.issuer}}</p>\n          <p class=\"mail\">{{tig.issuer}}</p>\n        </div>\n      </div>\n    </td>\n    <td class=\"shrink status\"><span class=\"label\" [style.backgroundColor]=\"statusColors[tig.state]\">{{stateList[tig.state]}}</span></td>\n    <td class=\"expand work\">\n      <a role=\"button\" class=\"collapse\" data-toggle=\"collapse\" data-parent=\"#tiglist\" href=\".collapseTig-{{i}}\" aria-expanded=\"false\" attr.aria-controls=\"collapseTig-{{i}}\" (click)=\"toggleCollapse()\">\n        <p class=\"collapseTig-{{i}} collapsed\">{{tig.subject}}</p>\n      </a>\n    </td>\n    <td class=\"shrink end-date\"><p [innerHTML]=\"((tig.startDate === null) ? ' ' : getFormatedDate(tig.startDate)) + ((tig.endDate === null) ? '' : '<br>' + getFormatedDate(tig.endDate))\"></p></td>\n    <td class=\"shrink more\"><div [inlineSVG]=\"'/icons/more.svg'\"></div></td>\n  </tr>\n  </tbody>\n</table>\n</div>"

/***/ }),

/***/ "./src/app/components/pages/tig/tig.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/* Base for label styling */\n[type=\"checkbox\"]:not(:checked),\n[type=\"checkbox\"]:checked {\n  position: absolute;\n  left: -9999px;\n}\n[type=\"checkbox\"]:not(:checked) + label,\n[type=\"checkbox\"]:checked + label {\n  position: relative;\n  padding-left: 2em;\n  cursor: pointer;\n}\n/* checkbox aspect */\n[type=\"checkbox\"]:not(:checked) + label:before,\n[type=\"checkbox\"]:checked + label:before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 1.25em;\n  height: 1.25em;\n  border: 2px solid #fff;\n  background: #fff;\n}\n/* checked mark aspect */\n[type=\"checkbox\"]:not(:checked) + label:after,\n[type=\"checkbox\"]:checked + label:after {\n  content: '✔';\n  font-family: 'FontAwesome';\n  position: absolute;\n  top: .15em;\n  left: 0.18em;\n  font-size: 1.3em;\n  line-height: 0.8;\n  color: #00ADB5;\n  -webkit-transition: all .2s;\n  transition: all .2s;\n}\n/* checked mark aspect changes */\n[type=\"checkbox\"]:not(:checked) + label:after {\n  opacity: 0;\n  -webkit-transform: scale(0);\n          transform: scale(0);\n}\n[type=\"checkbox\"]:checked + label:after {\n  opacity: 1;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n}\n/* disabled checkbox */\n[type=\"checkbox\"]:disabled:not(:checked) + label:before,\n[type=\"checkbox\"]:disabled:checked + label:before {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  border-color: #ddd;\n  background-color: #ddd;\n}\n[type=\"checkbox\"]:disabled:checked + label:after {\n  color: #999;\n}\n[type=\"checkbox\"]:disabled + label {\n  color: #aaa;\n}\n/* hover style just for information */\nlabel:hover:before {\n  border: 2px solid #00ADB5 !important;\n}\n/* Checkbox modifications for tig one*/\n.checkmark-tig [type=\"checkbox\"]:not(:checked) + label:after,\n.checkmark-tig [type=\"checkbox\"]:checked + label:after {\n  content: '\\2714';\n  font-family: 'FontAwesome';\n  position: absolute;\n  top: -0.8em;\n  left: 0.85em;\n  font-size: 1.3em;\n  line-height: 2em;\n  color: #00ADB5;\n  -webkit-transition: all .2s;\n  transition: all .2s;\n}\n.checkmark-tig [type=\"checkbox\"]:not(:checked) + label:before,\n.checkmark-tig [type=\"checkbox\"]:checked + label:before {\n  content: '';\n  position: absolute;\n  left: 1em;\n  top: -0.5em;\n  width: 1.3em;\n  height: 1.3em;\n  border: 1px solid #00ADB5;\n  background-color: #fff;\n  border-radius: 0.4em;\n  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.15);\n          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.15);\n}\ntable#tig-table {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0 20px; }\ntable#tig-table td {\n    padding-left: 15px;\n    padding-right: 15px;\n    white-space: nowrap; }\ntable#tig-table td.expand {\n      width: 50%; }\ntable#tig-table thead {\n    color: #959595;\n    font-size: 18px; }\ntable#tig-table tbody p {\n    margin: 0;\n    white-space: normal; }\ntable#tig-table tbody tr {\n    font-size: 16px;\n    background-color: #fff;\n    -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.05);\n            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.05);\n    height: 70px; }\ntable#tig-table tbody tr td {\n      vertical-align: top;\n      -webkit-transform: translateY(35px);\n              transform: translateY(35px); }\ntable#tig-table tbody tr td a {\n        display: block; }\ntable#tig-table tbody tr td > * {\n        -webkit-transform: translateY(-50%);\n                transform: translateY(-50%);\n        -webkit-transition: all 0.5s ease;\n        transition: all 0.5s ease; }\ntable#tig-table tbody tr td:first-child {\n        border-radius: 5px 0 0 5px; }\ntable#tig-table tbody tr td:last-child {\n        border-radius: 0 5px 5px 0; }\ntable#tig-table tbody tr td.profile .profile-wrapper {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex; }\ntable#tig-table tbody tr td.profile .profile-wrapper .cropcircle {\n          width: 50px;\n          height: 50px;\n          border-radius: 100%;\n          background: #eee no-repeat center;\n          background-size: cover;\n          margin-right: 5px; }\ntable#tig-table tbody tr td.profile .profile-wrapper .infos {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: column;\n                  flex-direction: column;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          vertical-align: middle; }\ntable#tig-table tbody tr td.profile .profile-wrapper .infos p.mail {\n            font-size: 10px;\n            color: #959595; }\ntable#tig-table tbody tr td.status span {\n        display: inline-block;\n        padding: 2px 2px;\n        color: #fff;\n        font-size: 15px;\n        vertical-align: baseline;\n        background-color: #999;\n        border-radius: 5px;\n        min-width: 80px;\n        text-align: center; }\ntable#tig-table tbody tr td.expand p {\n        display: block;\n        text-overflow: ellipsis;\n        overflow: hidden; }\ntable#tig-table tbody tr td.expand p:not(.show) {\n        height: 22px; }\ntable#tig-table tbody tr td.expand a {\n        -webkit-transform: translateY(-12px);\n                transform: translateY(-12px);\n        text-decoration: none;\n        color: #000;\n        padding-bottom: 35px; }\ntable#tig-table tbody tr td.more {\n        cursor: pointer; }\ntable#tig-table tbody tr td.more svg {\n          height: 25px;\n          width: 25px; }\n@media screen and (max-width: 1500px) {\n  .tig-container {\n    position: relative;\n    width: 100%;\n    overflow-x: scroll;\n    overflow-y: hidden; }\n    .tig-container table#tig-table {\n      width: 1200px; }\n  table#tig-table tbody tr td.profile .profile-wrapper .cropcircle, table#tig-table tbody tr td.profile .profile-wrapper .infos p.mail {\n    display: none; } }\n"

/***/ }),

/***/ "./src/app/components/pages/tig/tig.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TigComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__("./src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_session_service__ = __webpack_require__("./src/app/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_permissions_service__ = __webpack_require__("./src/app/services/permissions.service.ts");
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
    function TigComponent(apiService, sessionService, permissionService, http) {
        var _this = this;
        this.apiService = apiService;
        this.sessionService = sessionService;
        this.permissionService = permissionService;
        this.http = http;
        this.stateList = ['Assigned', 'In progress', 'Done', 'Not done'];
        this.statusColors = {};
        this.id = JSON.parse(localStorage.getItem('session'));
        this.statusColors[0] = '#00ADB5';
        this.statusColors[1] = '#FFDD00';
        this.statusColors[2] = '#B50000';
        this.statusColors[3] = '#14C400';
        if (this.permissionService.hasPermission("read_group_user_sanctions", -1))
            this.apiService.getSanctions()
                .then(function (data) { return _this.tigs = data['data']; }, function (error) { return console.log(error); });
        else
            this.apiService.getSanctions(this.sessionService.getID())
                .then(function (data) { return _this.tigs = data['data']; }, function (error) { return console.log(error); });
    }
    TigComponent.prototype.getJSON = function () {
        console.log('loading');
        return this.apiService.apiGet('/user/4/sanctions');
    };
    TigComponent.prototype.ngOnInit = function () {
    };
    TigComponent.prototype.toggleCollapse = function () {
        $('.collapse.show').collapse('hide');
    };
    TigComponent.prototype.getFormatedDate = function (d) {
        var date = new Date(d.date);
        return date.toLocaleDateString() + "\n" + date.toLocaleTimeString();
    };
    TigComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tig',
            template: __webpack_require__("./src/app/components/pages/tig/tig.component.html"),
            styles: [__webpack_require__("./src/app/components/pages/tig/tig.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_3__services_session_service__["a" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_4__services_permissions_service__["a" /* PermissionsService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], TigComponent);
    return TigComponent;
}());

// interface ITig {
// 	date: IDate;
// 	endDate: IDate;
// 	id: number;
// 	issuer: number;
// 	reason: string;
// 	startDate: IDate;
// 	state: number;
// 	subject: number;
// 	task: string;
// }
//
// class Tig {
// 	date: string = null;
// 	endDate: string = null;
// 	id: number;
// 	issuer: number;
// 	reason: string;
// 	startDate: string;
// 	state: number;
// 	subject: number;
// 	task: string;
//
// 	constructor(tig : ITig) {
// 		const date = new Date((tig.date) ? tig.date.date : "");
// 		const endDate = new Date((tig.date) ? tig.date.date : "");
// 		const startDate = new Date((tig.date) ? tig.date.date : "");
//
// 		this.date = `${date.toLocaleDateString()}\n${date.toLocaleTimeString()}`;
// 		this.endDate = `${endDate.toLocaleDateString()}\n${endDate.toLocaleTimeString()}`;
// 		this.id = tig.id;
// 		this.issuer = tig.issuer;
// 		this.reason = tig.reason;
// 		this.startDate = `${startDate.toLocaleDateString()}\n${startDate.toLocaleTimeString()}`;
// 		this.state = tig.state;
// 		this.subject = tig.subject;
// 		this.task = tig.task;
// 	}
// } 


/***/ }),

/***/ "./src/app/components/trombinoscope/easyshit/easyshit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm d-flex justify-content-center\">\n    <div class=\"card d-flex align-items-center justify-content-center\" style=\"width: 18rem;\">\n\n        <h3 class=\"card-title\" *ngIf=\"!onGame()\"><br>\n            Easy Mode\n        </h3>\n\n        <img class=\"card-img-top\" src={{randomStudentPhotoUrl}} alt=\"photo\">\n\n        <div class=\"card-body\">\n            <div class=\"card-text\">\n\n                <div class=\"btn-group-vertical\">\n\n                    <button type=\"button\" class=\"btn btn-outline-info btn-lg btn-block \"\n                            *ngFor=\"let student of randomStudents\"\n                            (click)=\"onSubmit($event)\">\n\n                        {{student[0]}}\n                    </button>\n\n                </div>\n\n                <br>\n\n                <!--<div class=\"btn-group\" role=\"group\" aria-label=\"randomStudents\">-->\n                <!--<button type=\"button\" class=\"btn btn-info\"-->\n                <!--*ngFor=\"let promotion of promotions\">-->\n\n                <!--{{promotion}}-->\n                <!--</button>-->\n                <!--</div>-->\n\n                <blockquote class=\"blockquote text-center\"\n                            *ngIf=\"onGame()\">\n\n                    <br>\n                    <p class=\"mb-0\">{{currentGame.getScore()}} / {{currentGame.getGoal()}}</p>\n                    <footer class=\"blockquote-footer\">Remain: {{currentGame.getRemain()}}</footer>\n                </blockquote>\n\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/trombinoscope/easyshit/easyshit.component.scss":
/***/ (function(module, exports) {

module.exports = ".example-radio-group {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.example-radio-button {\n  margin: 5px; }\n\n.example-selected-value {\n  margin: 15px 0; }\n\n.example-card {\n  max-width: 400px; }\n\n.example-header-image {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover; }\n\n.card-img-top {\n  size: 700px; }\n"

/***/ }),

/***/ "./src/app/components/trombinoscope/easyshit/easyshit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EasyshitComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_students_service__ = __webpack_require__("./src/app/services/students.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Game__ = __webpack_require__("./src/app/Game.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EasyshitComponent = (function () {
    function EasyshitComponent(studentsService) {
        this.studentsService = studentsService;
        this.finishedGame = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.photoBaseUrl = "https://cdn.local.epitech.eu/userprofil/profilview/";
        this.chosenStudent = null;
        this.promotions = [];
    }
    EasyshitComponent.prototype.ngOnInit = function () {
        this.currentGame = null;
        this.promotions = this.studentsService.getPromotions();
        this.reRoll();
    };
    EasyshitComponent.prototype.ngOnChanges = function (changes) {
        this.reRoll();
        this.currentGame = changes.currentGame.currentValue;
    };
    EasyshitComponent.prototype.onSubmit = function (event) {
        for (var _i = 0, _a = this.randomStudents; _i < _a.length; _i++) {
            var student = _a[_i];
            if (event.target.innerText == student[0]) {
                this.chosenStudent = student;
            }
        }
        if (this.chosenStudent[0] == this.randomStudent[0]) {
            if (this.onGame()) {
                this.currentGame.scoreUp(true);
                if (!this.currentGame.isFinished()) {
                    this.reRoll();
                }
            }
            else {
                this.reRoll();
            }
        }
        else if (this.onGame()) {
            this.currentGame.scoreUp(false);
            if (!this.currentGame.isFinished()) {
                this.reRoll();
            }
        }
        if (this.onGame() && this.currentGame.isFinished()) {
            this.finishedGame.emit();
        }
    };
    EasyshitComponent.prototype.onGame = function () {
        return this.currentGame != null;
    };
    EasyshitComponent.prototype.reRoll = function () {
        this.randomStudents = this.studentsService.getRandomStudents(4, (this.onGame())
            ? this.currentGame.getPromotion()
            : null);
        this.randomStudent = this.randomStudents[this.studentsService.getRandomInt(0, 3)];
        this.randomStudentPhotoUrl = "" + this.photoBaseUrl + this.randomStudent[0] + ".jpg";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], EasyshitComponent.prototype, "finishedGame", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__Game__["b" /* Game */])
    ], EasyshitComponent.prototype, "currentGame", void 0);
    EasyshitComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-easyshit',
            template: __webpack_require__("./src/app/components/trombinoscope/easyshit/easyshit.component.html"),
            styles: [__webpack_require__("./src/app/components/trombinoscope/easyshit/easyshit.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_students_service__["a" /* StudentsService */]])
    ], EasyshitComponent);
    return EasyshitComponent;
}());



/***/ }),

/***/ "./src/app/components/trombinoscope/hardwork/hardwork.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm d-flex justify-content-center\">\n    <div class=\"card d-flex align-items-center justify-content-center\" style=\"width: 18rem;\">\n\n        <h3 class=\"card-title\" *ngIf=\"!onGame()\"><br>\n            Work Mode\n        </h3>\n\n        <img class=\"card-img-top\" src={{randomStudentPhotoUrl}} alt=\"photo\">\n\n        <div class=\"card-body\">\n            <div class=\"card-text\">\n\n                <form>\n                    <div class=\"form-group\">\n                        <input #firstName type=\"text\" name=\"first\" class=\"form-control\" [(ngModel)]=\"chosenFirstname\" >\n                        <input type=\"text\" name=\"last\" class=\"form-control\" [(ngModel)]=\"chosenLastname\">\n                    </div>\n                    <button type=\"submit\" class=\"btn btn-info btn-lg btn-block\" (click)=\"onSubmit($event)\">Submit</button>\n                </form>\n\n                <blockquote class=\"blockquote text-center\"\n                            *ngIf=\"onGame()\">\n\n                    <br>\n                    <p class=\"mb-0\">{{currentGame.getScore()}} / {{currentGame.getGoal()}}</p>\n                    <footer class=\"blockquote-footer\">Remain: {{currentGame.getRemain()}}</footer>\n                </blockquote>\n\n            </div>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/trombinoscope/hardwork/hardwork.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/trombinoscope/hardwork/hardwork.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HardworkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_students_service__ = __webpack_require__("./src/app/services/students.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Game__ = __webpack_require__("./src/app/Game.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HardworkComponent = (function () {
    function HardworkComponent(studentsService) {
        this.studentsService = studentsService;
        this.finishedGame = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.photoBaseUrl = "https://cdn.local.epitech.eu/userprofil/profilview/";
        this.promotions = [];
    }
    HardworkComponent.prototype.ngOnInit = function () {
        this.currentGame = null;
        this.promotions = this.studentsService.getPromotions();
        this.reRoll();
    };
    HardworkComponent.prototype.ngOnChanges = function (changes) {
        this.reRoll();
        this.currentGame = changes.currentGame.currentValue;
    };
    HardworkComponent.prototype.onSubmit = function (event) {
        this.chosenStudent = this.chosenFirstname + "." + this.chosenLastname;
        if (this.randomStudent[0] == this.chosenStudent) {
            if (this.onGame()) {
                this.currentGame.scoreUp(true);
                if (!this.currentGame.isFinished()) {
                    this.reRoll();
                }
            }
            else {
                this.reRoll();
            }
        }
        else if (this.onGame()) {
            this.currentGame.scoreUp(false);
            if (!this.currentGame.isFinished()) {
                this.reRoll();
            }
        }
        if (this.onGame() && this.currentGame.isFinished()) {
            this.finishedGame.emit();
        }
    };
    HardworkComponent.prototype.onGame = function () {
        return this.currentGame != null;
    };
    HardworkComponent.prototype.reRoll = function () {
        this.randomStudent = this.studentsService.getRandomStudent((this.onGame())
            ? this.currentGame.getPromotion()
            : null);
        this.randomStudentPhotoUrl = "" + this.photoBaseUrl + this.randomStudent[0] + ".jpg";
        this.chosenFirstname = "";
        this.chosenLastname = "";
        this.firstNameInput.nativeElement.focus();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('firstName'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], HardworkComponent.prototype, "firstNameInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], HardworkComponent.prototype, "finishedGame", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__Game__["b" /* Game */])
    ], HardworkComponent.prototype, "currentGame", void 0);
    HardworkComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-hardwork',
            template: __webpack_require__("./src/app/components/trombinoscope/hardwork/hardwork.component.html"),
            styles: [__webpack_require__("./src/app/components/trombinoscope/hardwork/hardwork.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_students_service__["a" /* StudentsService */]])
    ], HardworkComponent);
    return HardworkComponent;
}());



/***/ }),

/***/ "./src/app/components/trombinoscope/trombinoscope.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n\n        <app-easyshit\n                *ngIf=\"!onGame() || (onGame() && currentGame.getType() == 1)\"\n                [currentGame]=\"currentGame\"\n                (finishedGame)=\"endGame($event)\">\n        </app-easyshit>\n\n        <div class=\"col-sm\">\n\n            <br>\n            <h1>Trombinoscope.</h1>\n\n            <div\n                    *ngIf=\"!onGame()\">\n\n                <p class=\"lead\">\n                    Choose bewtween the easy mode or the hard mode, then let's play\n                </p>\n\n                <button type=\"button\" class=\"btn btn-lg btn-block btn-info\" (click)=\"startEasyGame()\">Start easy game\n                </button>\n                <button type=\"button\" class=\"btn btn-lg btn-block btn-info\" (click)=\"startHardGame()\">Start hard game\n                </button>\n\n                <br>\n\n                <div class=\"btn-group d-flex align-items-center justify-content-center\" role=\"group\"\n                     aria-label=\"Button group with nested dropdown\">\n\n                    <div class=\"btn-group\" role=\"group\">\n                        <button id=\"chosenNumber\" type=\"button\" class=\"btn btn-lg btn-block btn-outline-info\"\n                                data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                            {{chosenGoal}}\n                        </button>\n                        <div class=\"dropdown-menu\" aria-labelledby=\"chosenNumber\">\n                            <button type=\"button\" class=\"dropdown-item\" (click)=\"chooseGoal(10)\">10</button>\n                            <button type=\"button\" class=\"dropdown-item\" (click)=\"chooseGoal(50)\">50</button>\n                            <button type=\"button\" class=\"dropdown-item\" (click)=\"chooseGoal(100)\">100</button>\n                            <button type=\"button\" class=\"dropdown-item\" (click)=\"chooseGoal(500)\">500</button>\n                        </div>\n                    </div>\n\n                    <div class=\"btn-group\" role=\"group\">\n                        <button id=\"chosenPromotion\" type=\"button\" class=\"btn btn-lg btn-block btn-outline-info\"\n                                data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                            {{(chosenPromotion) ? chosenPromotion : \"All\"}}\n                        </button>\n                        <div class=\"dropdown-menu\" aria-labelledby=\"chosenPromotion\">\n                            <button type=\"button\" class=\"dropdown-item\" (click)=\"choosePromotion(null)\">All</button>\n                            <button type=\"button\" class=\"dropdown-item\" (click)=\"choosePromotion(2020)\">2020</button>\n                            <button type=\"button\" class=\"dropdown-item\" (click)=\"choosePromotion(2021)\">2021</button>\n                            <button type=\"button\" class=\"dropdown-item\" (click)=\"choosePromotion(2022)\">2022</button>\n                        </div>\n                    </div>\n                </div>\n\n\n            </div>\n\n            <div *ngIf=\"onGame()\">\n\n                <p class=\"lead\">\n                    Let's play !\n                </p>\n\n                <button type=\"button\" class=\"btn btn-lg btn-block btn-danger\" (click)=\"stopGame()\">Leave</button>\n                <button type=\"button\" class=\"btn btn-lg btn-block btn-success\" disabled>Save</button>\n\n            </div>\n\n        </div>\n\n\n        <app-hardwork\n                *ngIf=\"!onGame() || (onGame() && currentGame.getType() == 2)\"\n                [currentGame]=\"currentGame\"\n                (finishedGame)=\"endGame($event)\">\n        </app-hardwork>\n\n        <!-- Modal -->\n        <div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\"\n             aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\"\n             *ngIf=\"onGame()\">\n\n            <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <h5 class=\"modal-title\" id=\"exampleModalCenterTitle\">Game finished</h5>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                            <span aria-hidden=\"true\">&times;</span>\n                        </button>\n                    </div>\n                    <div class=\"modal-body\">\n                        <blockquote class=\"blockquote text-center\">\n\n                            <br>\n                            <p class=\"mb-0\">Final score: {{currentGame.getScore()}} / {{currentGame.getGoal()}}</p>\n                        </blockquote>\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\" (click)=\"stopGame()\">Close</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n\n</div>\n\n<!-- Button trigger modal -->\n<button #openModalButton type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\"\n        [hidden]=\"true\"></button>\n\n"

/***/ }),

/***/ "./src/app/components/trombinoscope/trombinoscope.component.scss":
/***/ (function(module, exports) {

module.exports = ".btn-outline-light {\n  color: #282828; }\n\n.btn-info {\n  background-color: #00ADB5; }\n\n.modal-dialog {\n  -webkit-transform: translate(0, -50%);\n          transform: translate(0, -50%);\n  top: 25%;\n  margin: 0 auto; }\n"

/***/ }),

/***/ "./src/app/components/trombinoscope/trombinoscope.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrombinoscopeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_students_service__ = __webpack_require__("./src/app/services/students.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Game__ = __webpack_require__("./src/app/Game.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TrombinoscopeComponent = (function () {
    function TrombinoscopeComponent(studentsService) {
        this.studentsService = studentsService;
        this.photoBaseUrl = "https://cdn.local.epitech.eu/userprofil/profilview/";
        this.chosenGoal = 50;
        this.chosenPromotion = 0;
        this.finalScore = 0;
    }
    TrombinoscopeComponent.prototype.ngOnInit = function () {
        this.currentGame = null;
    };
    TrombinoscopeComponent.prototype.chooseGoal = function (goal) {
        this.chosenGoal = goal;
    };
    TrombinoscopeComponent.prototype.choosePromotion = function (promotion) {
        this.chosenPromotion = promotion;
    };
    TrombinoscopeComponent.prototype.onGame = function () {
        return this.currentGame != null;
    };
    TrombinoscopeComponent.prototype.startEasyGame = function () {
        this.currentGame = new __WEBPACK_IMPORTED_MODULE_2__Game__["a" /* EasyGame */](this.chosenGoal, this.chosenPromotion);
    };
    TrombinoscopeComponent.prototype.startHardGame = function () {
        this.currentGame = new __WEBPACK_IMPORTED_MODULE_2__Game__["c" /* HardGame */](this.chosenGoal, this.chosenPromotion);
    };
    TrombinoscopeComponent.prototype.stopGame = function () {
        console.log("stop");
        this.currentGame = null;
    };
    TrombinoscopeComponent.prototype.endGame = function (event) {
        this.openModalButton.nativeElement.click();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('openModalButton'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], TrombinoscopeComponent.prototype, "openModalButton", void 0);
    TrombinoscopeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-trombinoscope',
            template: __webpack_require__("./src/app/components/trombinoscope/trombinoscope.component.html"),
            styles: [__webpack_require__("./src/app/components/trombinoscope/trombinoscope.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_students_service__["a" /* StudentsService */]])
    ], TrombinoscopeComponent);
    return TrombinoscopeComponent;
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
        this.apiUserPath = '/user';
        this.apiSanctionPath = '/sanction';
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__["a" /* environment */].apiUrl;
    }
    ApiService_1 = ApiService;
    ApiService.getHeaders = function (method, path, data) {
        var algo = 'sha512';
        if (data) {
            data = __WEBPACK_IMPORTED_MODULE_2_crypto_js__["MD5"](JSON.stringify(data));
        }
        var hash = __WEBPACK_IMPORTED_MODULE_2_crypto_js__["HmacSHA512"]("" + method.toUpperCase() + path + data + Math.floor(Date.now() / 1000), JSON.parse(window.localStorage.getItem('session')).signatureToken);
        return new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpHeaders"]().set('Authorization', "HMAC algo=" + algo + ",time=" + Math.floor(Date.now() / 1000) + ",hash=" + hash);
    };
    ApiService.prototype.apiGet = function (path) {
        var headers = ApiService_1.getHeaders('GET', path, "");
        return this.http.get("" + this.apiUrl + path, { headers: headers, withCredentials: true }).toPromise();
    };
    ApiService.prototype.apiDelete = function (path, body) {
        var headers = ApiService_1.getHeaders('DELETE', path, body);
        return this.http.delete("" + this.apiUrl + path, { headers: headers, withCredentials: true }).toPromise();
    };
    ApiService.prototype.getUserPath = function (user) {
        return this.apiUserPath + "/" + user;
    };
    ApiService.prototype.getPermissions = function (user) {
        return this.apiGet(this.getUserPath(user) + "/permissions");
    };
    ApiService.prototype.getGroups = function (user) {
        return this.apiGet(this.getUserPath(user) + "/groups");
    };
    ApiService.prototype.getSanctions = function (user) {
        if (user === void 0) { user = -1; }
        if (user == -1) {
            return this.apiGet("" + this.apiSanctionPath);
        }
        else {
            return this.apiGet(this.getUserPath(user) + "/sanctions");
        }
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

/***/ "./src/app/services/permissions.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__("./src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__session_service__ = __webpack_require__("./src/app/services/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PermissionsService = (function () {
    function PermissionsService(http, apiService, sessionService) {
        this.http = http;
        this.apiService = apiService;
        this.sessionService = sessionService;
        this.aclUrl = '/assets/permissions.json';
        this.acl = null;
        this.permissions = null;
    }
    PermissionsService.prototype.getAcl = function () {
        return this.http.get(this.aclUrl).toPromise();
    };
    PermissionsService.prototype.getPermissions = function () {
        return this.apiService.getPermissions(this.sessionService.getID());
    };
    PermissionsService.prototype.hasPermission = function (action, target) {
        var _this = this;
        if (this.permissions === null) {
            this.getPermissions()
                .then(function (permissions) {
                _this.permissions = permissions.data;
                return _this.hasPermission(action, target);
            });
        }
        else if (this.acl === null) {
            this.getAcl()
                .then(function (acl) {
                _this.acl = acl.parameters.action_acl;
                return _this.hasPermission(action, target);
            });
        }
        else {
            if (!this.acl.hasOwnProperty(action)) {
                return false;
            }
            var _loop_1 = function (key) {
                if (!this_1.permissions.hasOwnProperty(key)) {
                    return { value: false };
                }
                var _loop_2 = function (ace) {
                    if (this_1.permissions[key].hasOwnProperty('*') &&
                        this_1.permissions[key]['*'].hasOwnProperty(ace) &&
                        this_1.permissions[key]['*'][ace]) {
                        return "continue";
                    }
                    if (target === -1) {
                        return { value: false };
                    }
                    this_1.apiService.getGroups(target)
                        .then(function (groups) {
                        groups = groups.data;
                        for (var group in groups) {
                            if (!_this.permissions[key].hasOwnProperty(group) ||
                                !_this.permissions[key][group].hasOwnProperty(ace) ||
                                !_this.permissions[key][group][ace]) {
                                return false;
                            }
                        }
                    })
                        .catch(function (error) {
                        console.log(error);
                    });
                };
                for (var _i = 0, _a = this_1.acl[action][key]; _i < _a.length; _i++) {
                    var ace = _a[_i];
                    var state_1 = _loop_2(ace);
                    if (typeof state_1 === "object")
                        return state_1;
                }
            };
            var this_1 = this;
            for (var _i = 0, _a = Object.keys(this.acl[action]); _i < _a.length; _i++) {
                var key = _a[_i];
                var state_2 = _loop_1(key);
                if (typeof state_2 === "object")
                    return state_2.value;
            }
            console.log("He has permission");
            return true;
        }
    };
    PermissionsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpClient"],
            __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_3__session_service__["a" /* SessionService */]])
    ], PermissionsService);
    return PermissionsService;
}());



/***/ }),

/***/ "./src/app/services/session.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionService; });
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

var SessionService = (function () {
    function SessionService() {
        this.session = JSON.parse(localStorage.getItem('session'));
    }
    SessionService.prototype.getSession = function () {
        return this.session;
    };
    SessionService.prototype.getID = function () {
        return this.session.user.id;
    };
    SessionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SessionService);
    return SessionService;
}());



/***/ }),

/***/ "./src/app/services/students.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__students__ = __webpack_require__("./src/app/students.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StudentsService = (function () {
    function StudentsService() {
    }
    StudentsService.prototype.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    StudentsService.prototype.getRandomStudent = function (promotion) {
        if (promotion === void 0) { promotion = null; }
        var randomStudent = null;
        if (promotion && this.getPromotions().indexOf(promotion) == -1) {
            return null;
        }
        do {
            randomStudent = __WEBPACK_IMPORTED_MODULE_1__students__["a" /* students */][this.getRandomInt(0, __WEBPACK_IMPORTED_MODULE_1__students__["a" /* students */].length - 1)];
        } while (promotion && randomStudent[1] != promotion);
        return randomStudent;
    };
    StudentsService.prototype.getRandomStudents = function (number, promotion) {
        if (promotion === void 0) { promotion = null; }
        var students = [];
        while (number > 0) {
            var student = this.getRandomStudent(promotion);
            var already = false;
            for (var _i = 0, students_1 = students; _i < students_1.length; _i++) {
                var st = students_1[_i];
                if (student[0] == st[0]) {
                    already = true;
                }
            }
            if (!already) {
                students.push(student);
                --number;
            }
        }
        return students;
    };
    StudentsService.prototype.getPromotions = function () {
        var promotions = [];
        for (var _i = 0, students_2 = __WEBPACK_IMPORTED_MODULE_1__students__["a" /* students */]; _i < students_2.length; _i++) {
            var student = students_2[_i];
            if (promotions.indexOf(student[1]) == -1) {
                promotions.push(student[1]);
            }
        }
        return promotions;
    };
    StudentsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], StudentsService);
    return StudentsService;
}());



/***/ }),

/***/ "./src/app/students.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return students; });
var students = [
    ["adrien.bedel", 2020],
    ["adrien1.masson", 2020],
    ["alexis.pelcik", 2020],
    ["arthur.hakobian", 2020],
    ["aurelien.toussaint", 2020],
    ["baptiste.heraud", 2020],
    ["charles-elie.taupin", 2020],
    ["clement.deseine", 2020],
    ["clement.dommerc", 2020],
    ["corentin.grandmaire", 2020],
    ["enes.koc", 2020],
    ["flavian.desverne", 2020],
    ["florent.baris", 2020],
    ["gaspard.thirion", 2020],
    ["gauthier.fernandez", 2020],
    ["guillaume.wasilewski", 2020],
    ["jean-gabriel.greco", 2020],
    ["jonathan.jean", 2020],
    ["jules.dupont", 2020],
    ["lucas.duval", 2020],
    ["lucas.vaxelaire", 2020],
    ["ludwig.poilve", 2020],
    ["marceau.tonelli", 2020],
    ["maxence.tisserant", 2020],
    ["maxime.thomas", 2020],
    ["mickael.bourgois", 2020],
    ["pascal.maury", 2020],
    ["pierre.dommerc", 2020],
    ["pierre.migani", 2020],
    ["remi.arnould", 2020],
    ["remi.cichy", 2020],
    ["sacha.rollin", 2020],
    ["thomas.lemoyne", 2020],
    ["thomas.pizzedaz", 2020],
    ["ugo.baldin", 2020],
    ["vincent1.picot", 2020],
    ["vladislav.vorobyev", 2020],
    ["alexandre.debeaumont", 2021],
    ["alexis.knob", 2021],
    ["anselme.schneider", 2021],
    ["antoine.stempfer", 2021],
    ["antonin.sordel", 2021],
    ["arthur.melin", 2021],
    ["axel.manasterski", 2021],
    ["baptiste.david", 2021],
    ["baptiste.fiorina", 2021],
    ["baptiste.kissel", 2021],
    ["benoit.bour", 2021],
    ["brice.aug", 2021],
    ["charles.claude", 2021],
    ["charlotte.huguenin", 2021],
    ["clement.royer", 2021],
    ["clement1.sanchez", 2021],
    ["dylan.jamet", 2021],
    ["edouard.loustau", 2021],
    ["fantin.bibas", 2021],
    ["faudil.puttilli", 2021],
    ["florent.grandjean", 2021],
    ["florian.dorre", 2021],
    ["gregoire.jeannot", 2021],
    ["gregoire.noel", 2021],
    ["gregory.eple", 2021],
    ["jean-baptiste.paulin", 2021],
    ["jean.laurain", 2021],
    ["jeremy.bouton", 2021],
    ["julian.ladjani", 2021],
    ["lilian.fund", 2021],
    ["lorine.forfert", 2021],
    ["louis.mallez", 2021],
    ["louison.harizi", 2021],
    ["lucas.boulacheb", 2021],
    ["lucas.depret", 2021],
    ["lucien.claussin", 2021],
    ["mathieu.bigare", 2021],
    ["mathieu.galvani", 2021],
    ["matthieu.andry", 2021],
    ["maxime.fragnieres", 2021],
    ["maxime.picot", 2021],
    ["miranto.razafindrazaka", 2021],
    ["nicolas.lemaire", 2021],
    ["paul.cridlig", 2021],
    ["pierre.janny", 2021],
    ["quentin.sanchez", 2021],
    ["romain.driat", 2021],
    ["roman.melentov", 2021],
    ["sacha.rollin", 2020],
    ["sofian.saada", 2021],
    ["steven.toussaint", 2021],
    ["sylvain.nauroy-bethune", 2021],
    ["tanguy.gerome", 2021],
    ["thomas.kauffmann", 2021],
    ["thomas.zaghini", 2021],
    ["tristan.hofgaertner", 2021],
    ["valentin.mareschal", 2021],
    ["vincent1.picot", 2020],
    ["yannick.suc", 2021],
    ["yoann.cayron", 2022],
    ["adam.lardeux", 2022],
    ["alexandre.frizzo", 2022],
    ["alexis.senechal", 2022],
    ["antoine.ferry", 2022],
    ["antoine.orion", 2022],
    ["arthur.elhoussine", 2022],
    ["arthur.lang", 2022],
    ["axel.denise", 2022],
    ["axel.millot", 2022],
    ["carl.lebrun", 2022],
    ["cedric.legendre", 2022],
    ["corentin.martin", 2022],
    ["david.leroy", 2022],
    ["davy.henry", 2022],
    ["dorian.nicolas", 2022],
    ["dylan.santos", 2022],
    ["elian.nicaise", 2022],
    ["elmer.lechaudel", 2022],
    ["erwan.cheviron", 2022],
    ["gabriel.colson", 2022],
    ["guillaume.assfeld", 2022],
    ["haroutioun.sargsyan", 2022],
    ["jonathan.lemoine", 2022],
    ["jules.esteves-duarte", 2022],
    ["julie.pecci", 2022],
    ["kylian.maugue", 2022],
    ["lise.knoll", 2022],
    ["loan.boye", 2022],
    ["lucas.hemmerle", 2022],
    ["lucas.tabis", 2022],
    ["mathieu.keller", 2022],
    ["matteo.volpi", 2022],
    ["moussa.taddrarat", 2022],
    ["nathan.malingre", 2022],
    ["nicolas.zona", 2022],
    ["paul.brunner", 2022],
    ["paulin.flammang", 2022],
    ["pierre.bolze", 2022],
    ["quentin.leuenberger", 2022],
    ["quentin.sanchez", 2022],
    ["raphael.ozdoba", 2022],
    ["remi.vuillemin", 2022],
    ["tanguy.raeymaekers", 2022],
    ["theo.steffanetti", 2022],
    ["thomas.lopvet", 2022],
    ["vincent.meurie-ichai", 2022]
];


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