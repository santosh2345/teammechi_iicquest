"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/detection/page",{

/***/ "(app-pages-browser)/./components/detectionComponents/page.jsx":
/*!*************************************************!*\
  !*** ./components/detectionComponents/page.jsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ui_progress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/progress */ \"(app-pages-browser)/./components/ui/progress.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nconst ResultPage = (param)=>{\n    let { data } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-row justify-around w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center flex flex-col justify-center items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl font-bold text-sky-500\",\n                        children: \"Predicted Health Status\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                        lineNumber: 11,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        src: data[0].imgurl,\n                        alt: \"emotion\",\n                        width: 300,\n                        height: 300\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-2xl font-bold \".concat(data[0].emotion === \"Happy\" ? \"text-green-600\" : \"text-black\"),\n                        children: \"\".concat(data[0].level, \" \").concat(data[0].emotion)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: data[0].top_5_predictions.map((prediction, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: prediction.label\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                                lineNumber: 27,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_progress__WEBPACK_IMPORTED_MODULE_3__.Progress, {\n                                value: \"\".concat(prediction.score * 100)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                                lineNumber: 28,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ResultPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ResultPage);\nvar _c;\n$RefreshReg$(_c, \"ResultPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvZGV0ZWN0aW9uQ29tcG9uZW50cy9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRStCO0FBQ0w7QUFDZ0I7QUFFMUMsTUFBTUcsYUFBYTtRQUFDLEVBQUVDLElBQUksRUFBRTtJQUMxQixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUdELFdBQVU7a0NBQWtDOzs7Ozs7a0NBR2hELDhEQUFDTixrREFBS0E7d0JBQUNRLEtBQUtKLElBQUksQ0FBQyxFQUFFLENBQUNLLE1BQU07d0JBQUVDLEtBQUk7d0JBQVVDLE9BQU87d0JBQUtDLFFBQVE7Ozs7OztrQ0FDOUQsOERBQUNDO3dCQUNDUCxXQUFXLHNCQUVWLE9BRENGLElBQUksQ0FBQyxFQUFFLENBQUNVLE9BQU8sS0FBSyxVQUFVLG1CQUFtQjtrQ0FHbEQsR0FBb0JWLE9BQWpCQSxJQUFJLENBQUMsRUFBRSxDQUFDVyxLQUFLLEVBQUMsS0FBbUIsT0FBaEJYLElBQUksQ0FBQyxFQUFFLENBQUNVLE9BQU87Ozs7Ozs7Ozs7OzswQkFHeEMsOERBQUNUOzBCQUVLRCxJQUFJLENBQUMsRUFBRSxDQUFDWSxpQkFBaUIsQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLFlBQVlDLHNCQUN2Qyw4REFBQ2Q7d0JBQWdCQyxXQUFVOzswQ0FDdkIsOERBQUNPOzBDQUFHSyxXQUFXRSxLQUFLOzs7Ozs7MENBQ3BCLDhEQUFDbEIsa0RBQVFBO2dDQUFFbUIsT0FBTyxHQUF3QixPQUFyQkgsV0FBV0ksS0FBSyxHQUFDOzs7Ozs7O3VCQUZoQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlMUI7S0FsQ01oQjtBQW9DTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2RldGVjdGlvbkNvbXBvbmVudHMvcGFnZS5qc3g/MDU2YyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFByb2dyZXNzIH0gZnJvbSBcIi4uL3VpL3Byb2dyZXNzXCI7XHJcblxyXG5jb25zdCBSZXN1bHRQYWdlID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWFyb3VuZCB3LWZ1bGxcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1za3ktNTAwXCI+XHJcbiAgICAgICAgICBQcmVkaWN0ZWQgSGVhbHRoIFN0YXR1c1xyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICAgPEltYWdlIHNyYz17ZGF0YVswXS5pbWd1cmx9IGFsdD1cImVtb3Rpb25cIiB3aWR0aD17MzAwfSBoZWlnaHQ9ezMwMH0gLz5cclxuICAgICAgICA8cFxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC0yeGwgZm9udC1ib2xkICR7XHJcbiAgICAgICAgICAgIGRhdGFbMF0uZW1vdGlvbiA9PT0gXCJIYXBweVwiID8gXCJ0ZXh0LWdyZWVuLTYwMFwiIDogXCJ0ZXh0LWJsYWNrXCJcclxuICAgICAgICAgIH1gfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtgJHtkYXRhWzBdLmxldmVsfSAke2RhdGFbMF0uZW1vdGlvbn1gfVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkYXRhWzBdLnRvcF81X3ByZWRpY3Rpb25zLm1hcCgocHJlZGljdGlvbiwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPntwcmVkaWN0aW9uLmxhYmVsfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8UHJvZ3Jlc3MgIHZhbHVlPXtgJHtwcmVkaWN0aW9uLnNjb3JlKjEwMH1gfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICApKVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc3VsdFBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIlJlYWN0IiwiUHJvZ3Jlc3MiLCJSZXN1bHRQYWdlIiwiZGF0YSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwic3JjIiwiaW1ndXJsIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJwIiwiZW1vdGlvbiIsImxldmVsIiwidG9wXzVfcHJlZGljdGlvbnMiLCJtYXAiLCJwcmVkaWN0aW9uIiwiaW5kZXgiLCJsYWJlbCIsInZhbHVlIiwic2NvcmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/detectionComponents/page.jsx\n"));

/***/ })

});