(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/_raw-loader@1.0.0@raw-loader/index.js!./src/pages/home/index.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/_raw-loader@1.0.0@raw-loader!./src/pages/home/index.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<ngx-datatable class=\"material\" [rows]=\"rows\" [limit]=\"pageSize\" [sorts]=\"sortOption\" [columnMode]=\"'force'\"\r\n[headerHeight]=\"50\"\r\n[footerHeight]=\"50\"\r\n[rowHeight]=\"50\"\r\n[count]=\"totalCount\" [offset]=\"currentPageNum\" (sort)=\"onSort($event)\" (page)=\"onPage($event)\" [externalPaging]=\"true\">\r\n<ngx-datatable-column name=\"\" prop=\"id\"></ngx-datatable-column>\r\n<ngx-datatable-column prop=\"account_executive\" name=\"Account Executive\"></ngx-datatable-column>\r\n<ngx-datatable-column prop=\"daily_turnover\" name=\"Daily Turnover\"></ngx-datatable-column>\r\n<ngx-datatable-column prop=\"accumulated_turnover\" name=\"Accumulated Turnover\"></ngx-datatable-column>\r\n</ngx-datatable>\r\n\r\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.10.0@tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/_@angular_platform-browser@8.0.2@@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@8.0.2@@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/_@angular_common@8.0.2@@angular/common/fesm5/http.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/_@swimlane_ngx-datatable@15.0.2@@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _pages_home_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/home/index */ "./src/pages/home/index.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/_@angular_platform-browser@8.0.2@@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/_ngx-toastr@10.0.4@ngx-toastr/fesm5/ngx-toastr.js");






 //需要

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _pages_home_index__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["NgxDatatableModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_pages_home_index__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/common/apiUrl.ts":
/*!******************************!*\
  !*** ./src/common/apiUrl.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");

/* harmony default export */ __webpack_exports__["default"] = ({
    getSecurities: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiPrefix + '/securities'
});


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiPrefix: 'http://rtq.chicheongweng.com:3000'
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@8.0.2@@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/_@angular_platform-browser-dynamic@8.0.2@@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/pages/home/index.less":
/*!***********************************!*\
  !*** ./src/pages/home/index.less ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvcGFnZXMvaG9tZS9pbmRleC5sZXNzIn0= */"

/***/ }),

/***/ "./src/pages/home/index.ts":
/*!*********************************!*\
  !*** ./src/pages/home/index.ts ***!
  \*********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/_tslib@1.10.0@tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/_@angular_core@8.0.2@@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/_@angular_common@8.0.2@@angular/common/fesm5/http.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model */ "./src/pages/home/model.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/_ngx-toastr@10.0.4@ngx-toastr/fesm5/ngx-toastr.js");





var AppComponent = /** @class */ (function () {
    function AppComponent(http, toastr) {
        this.http = http;
        this.toastr = toastr;
        this.title = 'angularTest';
        this.timer = '';
        this.pageSize = 10;
        this.currentPageNum = 0;
        this.totalCount = 0;
        this.timePeriod = 5000;
        this.sortOption = [
            { prop: 'account_executive', dir: 'asc' }
        ];
        this.rows = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        _model__WEBPACK_IMPORTED_MODULE_3__["default"].getData(this);
    };
    AppComponent.prototype.onSort = function (event) {
        this.sortOption[0] = { prop: event.column.prop, dir: event.newValue };
        _model__WEBPACK_IMPORTED_MODULE_3__["default"].getData(this);
    };
    AppComponent.prototype.onPage = function (event) {
        this.currentPageNum = event.offset;
        _model__WEBPACK_IMPORTED_MODULE_3__["default"].getData(this);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./index.html */ "./node_modules/_raw-loader@1.0.0@raw-loader/index.js!./src/pages/home/index.html"),
            styles: [__webpack_require__(/*! ./index.less */ "./src/pages/home/index.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/pages/home/model.ts":
/*!*********************************!*\
  !*** ./src/pages/home/model.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_apiUrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/apiUrl */ "./src/common/apiUrl.ts");

/* harmony default export */ __webpack_exports__["default"] = ({
    getData: function (_this) {
        clearTimeout(_this.timer);
        var params = {
            _start: _this.pageSize * _this.currentPageNum,
            _limit: _this.pageSize
        };
        if (_this.sortOption.length > 0) {
            params['_sort'] = _this.sortOption[0].prop;
            params['_order'] = _this.sortOption[0].dir.toUpperCase();
        }
        var that = this;
        _this.http.get(_common_apiUrl__WEBPACK_IMPORTED_MODULE_0__["default"].getSecurities, { params: params })
            .subscribe(function (res) {
            _this.rows = that.decorateData(res);
            _this.totalCount = 30;
            that.setTimer(_this);
        }, function (err) {
            that.setTimer(_this);
            _this.toastr.error('获取数据失败', '', {
                timeOut: 2000,
                positionClass: 'toast-top-center'
            });
            _this.totalCount = 0;
        });
    },
    setTimer: function (_this) {
        var _this_1 = this;
        _this.timer = setTimeout(function () {
            _this_1.getData(_this);
        }, _this.timePeriod);
    },
    decorateData: function (list) {
        var _this_1 = this;
        list.forEach(function (item, index) {
            item.id = index + 1;
            item.accumulated_turnover = _this_1.setCommaInNumberFixed(item.accumulated_turnover);
            item.daily_turnover = _this_1.setCommaInNumberFixed(item.daily_turnover);
        });
        return list;
    },
    setCommaInNumberFixed: function (num) {
        var newStr = '';
        var count = 0;
        num = num.toFixed(2);
        for (var i = num.indexOf('.') - 1; i >= 0; i--) {
            if (count % 3 == 0 && count != 0) {
                newStr = num.charAt(i) + ',' + newStr;
            }
            else {
                newStr = num.charAt(i) + newStr; // 逐个字符相接起来
            }
            count++;
        }
        return newStr + num.substr(num.indexOf('.'), 3);
    }
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\My Project\AngularJs_learning\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map