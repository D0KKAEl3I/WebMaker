webpackHotUpdate_N_E("pages/index",{

/***/ "./src/layouts/Index/index.js":
/*!************************************!*\
  !*** ./src/layouts/Index/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\S\\Desktop\\\uB07C\uC694\uC637\\\uD3EC\uD3F4\uAD00\uB9AC\uC571\\client-side\\src\\layouts\\Index\\index.js",
    _s = $RefreshSig$();



function Index() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      infoList = _useState[0],
      setInfoList = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      loading = _useState2[0],
      setLoading = _useState2[1];

  function getpost() {
    setLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('http://125.129.106.89:8080').then(function (r) {
      setInfoList(r);
      setLoading(false);
    })["catch"](function (e) {
      console.log('error');
      setLoading(false);
    });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    getpost();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: infoList.map(function (item) {
        /*#__PURE__*/
        Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: [item.code, item.code, item.code]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 33
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }, this) : 'No'
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }, this);
}

_s(Index, "+WjSKvK73Qkndw1cwehznAFIGTE=");

_c = Index;

var _c;

$RefreshReg$(_c, "Index");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xheW91dHMvSW5kZXgvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJ1c2VTdGF0ZSIsImluZm9MaXN0Iiwic2V0SW5mb0xpc3QiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImdldHBvc3QiLCJheGlvcyIsImdldCIsInRoZW4iLCJyIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJtYXAiLCJpdGVtIiwiY29kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR2UsU0FBU0EsS0FBVCxHQUFpQjtBQUFBOztBQUFBOztBQUFBLGtCQUNJQyxzREFBUSxDQUFDLEVBQUQsQ0FEWjtBQUFBLE1BQ3JCQyxRQURxQjtBQUFBLE1BQ1hDLFdBRFc7O0FBQUEsbUJBRUVGLHNEQUFRLENBQUMsS0FBRCxDQUZWO0FBQUEsTUFFckJHLE9BRnFCO0FBQUEsTUFFWkMsVUFGWTs7QUFJNUIsV0FBU0MsT0FBVCxHQUFtQjtBQUNmRCxjQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0FFLGdEQUFLLENBQUNDLEdBQU4sQ0FBVSw0QkFBVixFQUF3Q0MsSUFBeEMsQ0FBNkMsVUFBQUMsQ0FBQyxFQUFJO0FBQzlDUCxpQkFBVyxDQUFDTyxDQUFELENBQVg7QUFDQUwsZ0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDSCxLQUhELFdBR1MsVUFBQU0sQ0FBQyxFQUFJO0FBQ1ZDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7QUFDQVIsZ0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDSCxLQU5EO0FBT0g7O0FBRURTLHlEQUFTLENBQUMsWUFBTTtBQUNaUixXQUFPO0FBQ1YsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBLHNCQUNJO0FBQUEsY0FFUUYsT0FBTyxnQkFDSDtBQUFBLGdCQUVRRixRQUFRLENBQUNhLEdBQVQsQ0FBYSxVQUFBQyxJQUFJLEVBQUk7QUFDakI7QUFBQTtBQUFBLHFCQUFLQSxJQUFJLENBQUNDLElBQVYsRUFDS0QsSUFBSSxDQUFDQyxJQURWLEVBRUtELElBQUksQ0FBQ0MsSUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHSCxPQUpEO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURHLEdBV0g7QUFiWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFrQkg7O0dBckN1QmpCLEs7O0tBQUFBLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmFkYjk4ZjJjODU3MjJhZGI0YzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xyXG4gICAgY29uc3QgW2luZm9MaXN0LCBzZXRJbmZvTGlzdF0gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldHBvc3QoKSB7XHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgICAgIGF4aW9zLmdldCgnaHR0cDovLzEyNS4xMjkuMTA2Ljg5OjgwODAnKS50aGVuKHIgPT4ge1xyXG4gICAgICAgICAgICBzZXRJbmZvTGlzdChyKVxyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIH0pLmNhdGNoKGUgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InKVxyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXRwb3N0KClcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbG9hZGluZyA/XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5mb0xpc3QubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57aXRlbS5jb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5jb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5jb2RlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICdObydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==