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
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('https://jsonplaceholder.typicode.com/posts').then(function (r) {
      setInfoList(r.data);
      setLoading(false);
      console.log(info);
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
          children: "item"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 33
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }, this) : 'No'
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xheW91dHMvSW5kZXgvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJ1c2VTdGF0ZSIsImluZm9MaXN0Iiwic2V0SW5mb0xpc3QiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImdldHBvc3QiLCJheGlvcyIsImdldCIsInRoZW4iLCJyIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJpbmZvIiwiZSIsInVzZUVmZmVjdCIsIm1hcCIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdlLFNBQVNBLEtBQVQsR0FBaUI7QUFBQTs7QUFBQTs7QUFBQSxrQkFDSUMsc0RBQVEsQ0FBQyxFQUFELENBRFo7QUFBQSxNQUNyQkMsUUFEcUI7QUFBQSxNQUNYQyxXQURXOztBQUFBLG1CQUVFRixzREFBUSxDQUFDLEtBQUQsQ0FGVjtBQUFBLE1BRXJCRyxPQUZxQjtBQUFBLE1BRVpDLFVBRlk7O0FBSTVCLFdBQVNDLE9BQVQsR0FBbUI7QUFDZkQsY0FBVSxDQUFDLElBQUQsQ0FBVjtBQUNBRSxnREFBSyxDQUFDQyxHQUFOLENBQVUsNENBQVYsRUFBd0RDLElBQXhELENBQTZELFVBQUFDLENBQUMsRUFBSTtBQUM5RFAsaUJBQVcsQ0FBQ08sQ0FBQyxDQUFDQyxJQUFILENBQVg7QUFDQU4sZ0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDQU8sYUFBTyxDQUFDQyxHQUFSLENBQVlDLElBQVo7QUFDSCxLQUpELFdBSVMsVUFBQUMsQ0FBQyxFQUFJO0FBQ1ZILGFBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7QUFDQVIsZ0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDSCxLQVBEO0FBUUg7O0FBRURXLHlEQUFTLENBQUMsWUFBTTtBQUNaVixXQUFPO0FBQ1YsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBLHNCQUNJO0FBQUEsY0FFUUYsT0FBTyxnQkFDSDtBQUFBLGdCQUVRRixRQUFRLENBQUNlLEdBQVQsQ0FBYSxVQUFBQyxJQUFJLEVBQUk7QUFDakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNILE9BRkQ7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREcsR0FTSDtBQVhaO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWdCSDs7R0FwQ3VCbEIsSzs7S0FBQUEsSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jYmNiOGQ4ZGZlMWIwNzM4YjJiZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XHJcbiAgICBjb25zdCBbaW5mb0xpc3QsIHNldEluZm9MaXN0XSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0cG9zdCgpIHtcclxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICAgICAgYXhpb3MuZ2V0KCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMnKS50aGVuKHIgPT4ge1xyXG4gICAgICAgICAgICBzZXRJbmZvTGlzdChyLmRhdGEpXHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGluZm8pXHJcbiAgICAgICAgfSkuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicpXHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldHBvc3QoKVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nID9cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmZvTGlzdC5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPml0ZW08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAnTm8nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=