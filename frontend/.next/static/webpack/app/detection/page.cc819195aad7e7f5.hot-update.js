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

/***/ "(app-pages-browser)/./node_modules/next/dist/api/navigation.js":
/*!**************************************************!*\
  !*** ./node_modules/next/dist/api/navigation.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../client/components/navigation */ \"(app-pages-browser)/./node_modules/next/dist/client/components/navigation.js\");\n/* harmony import */ var _client_components_navigation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_client_components_navigation__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceMappingURL=navigation.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYXBpL25hdmlnYXRpb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdEOztBQUVoRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2FwaS9uYXZpZ2F0aW9uLmpzP2E1ZTciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSBcIi4uL2NsaWVudC9jb21wb25lbnRzL25hdmlnYXRpb25cIjtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bmF2aWdhdGlvbi5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/next/dist/api/navigation.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/detectionComponents/page.jsx":
/*!*************************************************!*\
  !*** ./components/detectionComponents/page.jsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ui_progress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/progress */ \"(app-pages-browser)/./components/ui/progress.jsx\");\n/* harmony import */ var rc_progress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-progress */ \"(app-pages-browser)/./node_modules/rc-progress/es/index.js\");\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/button */ \"(app-pages-browser)/./components/ui/button.jsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst ResultPage = (param)=>{\n    let { data, handleNext } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    console.log(\"from the fsdff\", data);\n    const detectedEmotion = data[0].emotion == \"Happy\" ? \"No sign of difficulties, in a proper mental status\" : data[0].emotion == \"Neutral\" ? \"Emotionally Neutral\" : data[0].emotion == \"Sad\" ? \"Sadness detected, seek help\" : \"Unwell, possible  explosive/bipolar disorder\";\n    const handleNextClick = ()=>{\n        handleNext();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-row justify-around w-full \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center flex flex-col justify-around items-center gap-12\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full flex flex-col items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-2xl font-bold text-sky-500\",\n                                children: \"Predicted Health Status\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                src: data[0].imgurl,\n                                alt: \"emotion\",\n                                width: 250,\n                                height: 250\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-2xl font-bold text-green-600\\n          }\",\n                                children: detectedEmotion\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                                lineNumber: 36,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined),\n                    data[0].emotion === \"Happy\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                        onClick: handleNextClick,\n                        className: \"bg-sky-500 hover:bg-sky-600 p-6 text-xl\",\n                        children: \"Detect Next\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                        onClick: router.push(\"/diagnose\"),\n                        className: \"\",\n                        children: \"Diagnose\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-3/6 flex flex-col items-center text-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl w-full font-bold text-sky-500\",\n                        children: \"Degree of Emotions\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-4/6 grid grid-cols-2 \",\n                        children: data[0].top_5_predictions.map((prediction, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-center font-bold flex flex-col items-center gap-4 mt-6\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: prediction.label\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(rc_progress__WEBPACK_IMPORTED_MODULE_4__.Circle, {\n                                        percent: \"\".concat(prediction.score * 100),\n                                        trailWidth: 6,\n                                        strokeWidth: 6,\n                                        strokeColor: \"\".concat(prediction.label === \"Happy\" ? \"#34eb59\" : prediction.label === \"Neutral\" ? \"#0EA5E9\" : prediction.label === \"Sad\" ? \"#964B00\" : \"#f0140c\"),\n                                        className: \"w-4/6\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, index, true, {\n                                fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                                lineNumber: 58,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\components\\\\detectionComponents\\\\page.jsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ResultPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = ResultPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ResultPage);\nvar _c;\n$RefreshReg$(_c, \"ResultPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvZGV0ZWN0aW9uQ29tcG9uZW50cy9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUUrQjtBQUNMO0FBQ2dCO0FBQ0M7QUFDTDtBQUNNO0FBRTVDLE1BQU1PLGFBQWE7UUFBQyxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRTs7SUFHcEMsTUFBTUMsU0FBU0osMERBQVNBO0lBQzFCSyxRQUFRQyxHQUFHLENBQUMsa0JBQWtCSjtJQUM5QixNQUFNSyxrQkFDSkwsSUFBSSxDQUFDLEVBQUUsQ0FBQ00sT0FBTyxJQUFJLFVBQ2YsdURBQ0FOLElBQUksQ0FBQyxFQUFFLENBQUNNLE9BQU8sSUFBSSxZQUNuQix3QkFDQU4sSUFBSSxDQUFDLEVBQUUsQ0FBQ00sT0FBTyxJQUFJLFFBQ25CLGdDQUNBO0lBRU4sTUFBTUMsa0JBQWtCO1FBQ3RCTjtJQUNGO0lBRUEscUJBQ0UsOERBQUNPO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0M7Z0NBQUdELFdBQVU7MENBQWtDOzs7Ozs7MENBR2hELDhEQUFDakIsa0RBQUtBO2dDQUFDbUIsS0FBS1gsSUFBSSxDQUFDLEVBQUUsQ0FBQ1ksTUFBTTtnQ0FBRUMsS0FBSTtnQ0FBVUMsT0FBTztnQ0FBS0MsUUFBUTs7Ozs7OzBDQUM5RCw4REFBQ0M7Z0NBQ0NQLFdBQVk7MENBR1hKOzs7Ozs7Ozs7Ozs7b0JBR0pMLElBQUksQ0FBQyxFQUFFLENBQUNNLE9BQU8sS0FBSyx3QkFDbkIsOERBQUNULDhDQUFNQTt3QkFDTG9CLFNBQVNWO3dCQUNURSxXQUFVO2tDQUNYOzs7OztrREFJRCw4REFBQ1osOENBQU1BO3dCQUFDb0IsU0FBU2YsT0FBT2dCLElBQUksQ0FBQzt3QkFBY1QsV0FBVTtrQ0FBRzs7Ozs7Ozs7Ozs7OzBCQUc1RCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBR0QsV0FBVTtrQ0FBeUM7Ozs7OztrQ0FDdkQsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNaVCxJQUFJLENBQUMsRUFBRSxDQUFDbUIsaUJBQWlCLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxZQUFZQyxzQkFDMUMsOERBQUNkO2dDQUVDQyxXQUFVOztrREFFViw4REFBQ087a0RBQUdLLFdBQVdFLEtBQUs7Ozs7OztrREFDcEIsOERBQUM1QiwrQ0FBTUE7d0NBQ0w2QixTQUFTLEdBQTBCLE9BQXZCSCxXQUFXSSxLQUFLLEdBQUc7d0NBQy9CQyxZQUFZO3dDQUNaQyxhQUFhO3dDQUNiQyxhQUNJLEdBQTZJLE9BQTFJUCxXQUFXRSxLQUFLLEtBQUssVUFBUyxZQUFZRixXQUFXRSxLQUFLLEtBQUssWUFBWSxZQUFZRixXQUFXRSxLQUFLLEtBQUssUUFBUSxZQUFZO3dDQUd2SWQsV0FBVTs7Ozs7OzsrQkFaUGE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQm5CO0dBckVNdkI7O1FBR2FELHNEQUFTQTs7O0tBSHRCQztBQXVFTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2RldGVjdGlvbkNvbXBvbmVudHMvcGFnZS5qc3g/MDU2YyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFByb2dyZXNzIH0gZnJvbSBcIi4uL3VpL3Byb2dyZXNzXCI7XHJcbmltcG9ydCB7IENpcmNsZSwgTGluZSB9IGZyb20gXCJyYy1wcm9ncmVzc1wiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vdWkvYnV0dG9uXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuXHJcbmNvbnN0IFJlc3VsdFBhZ2UgPSAoeyBkYXRhLCBoYW5kbGVOZXh0IH0pID0+IHtcclxuXHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc29sZS5sb2coXCJmcm9tIHRoZSBmc2RmZlwiLCBkYXRhKTtcclxuICBjb25zdCBkZXRlY3RlZEVtb3Rpb24gPVxyXG4gICAgZGF0YVswXS5lbW90aW9uID09IFwiSGFwcHlcIlxyXG4gICAgICA/IFwiTm8gc2lnbiBvZiBkaWZmaWN1bHRpZXMsIGluIGEgcHJvcGVyIG1lbnRhbCBzdGF0dXNcIlxyXG4gICAgICA6IGRhdGFbMF0uZW1vdGlvbiA9PSBcIk5ldXRyYWxcIlxyXG4gICAgICA/IFwiRW1vdGlvbmFsbHkgTmV1dHJhbFwiXHJcbiAgICAgIDogZGF0YVswXS5lbW90aW9uID09IFwiU2FkXCJcclxuICAgICAgPyBcIlNhZG5lc3MgZGV0ZWN0ZWQsIHNlZWsgaGVscFwiXHJcbiAgICAgIDogXCJVbndlbGwsIHBvc3NpYmxlICBleHBsb3NpdmUvYmlwb2xhciBkaXNvcmRlclwiO1xyXG5cclxuICBjb25zdCBoYW5kbGVOZXh0Q2xpY2sgPSAoKSA9PiB7XHJcbiAgICBoYW5kbGVOZXh0KCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWFyb3VuZCB3LWZ1bGwgXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWFyb3VuZCBpdGVtcy1jZW50ZXIgZ2FwLTEyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1za3ktNTAwXCI+XHJcbiAgICAgICAgICAgIFByZWRpY3RlZCBIZWFsdGggU3RhdHVzXHJcbiAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgPEltYWdlIHNyYz17ZGF0YVswXS5pbWd1cmx9IGFsdD1cImVtb3Rpb25cIiB3aWR0aD17MjUwfSBoZWlnaHQ9ezI1MH0gLz5cclxuICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LWdyZWVuLTYwMFxyXG4gICAgICAgICAgfWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtkZXRlY3RlZEVtb3Rpb259XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge2RhdGFbMF0uZW1vdGlvbiA9PT0gXCJIYXBweVwiID8gKFxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVOZXh0Q2xpY2t9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXNreS01MDAgaG92ZXI6Ymctc2t5LTYwMCBwLTYgdGV4dC14bFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIERldGVjdCBOZXh0XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtyb3V0ZXIucHVzaCgnL2RpYWdub3NlJyl9IGNsYXNzTmFtZT1cIlwiPkRpYWdub3NlPC9CdXR0b24+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0zLzYgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgdy1mdWxsIGZvbnQtYm9sZCB0ZXh0LXNreS01MDBcIj5EZWdyZWUgb2YgRW1vdGlvbnM8L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy00LzYgZ3JpZCBncmlkLWNvbHMtMiBcIj5cclxuICAgICAgICAgIHtkYXRhWzBdLnRvcF81X3ByZWRpY3Rpb25zLm1hcCgocHJlZGljdGlvbiwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgZm9udC1ib2xkIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGdhcC00IG10LTZcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHA+e3ByZWRpY3Rpb24ubGFiZWx9PC9wPlxyXG4gICAgICAgICAgICAgIDxDaXJjbGVcclxuICAgICAgICAgICAgICAgIHBlcmNlbnQ9e2Ake3ByZWRpY3Rpb24uc2NvcmUgKiAxMDB9YH1cclxuICAgICAgICAgICAgICAgIHRyYWlsV2lkdGg9ezZ9XHJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17Nn1cclxuICAgICAgICAgICAgICAgIHN0cm9rZUNvbG9yPXtcclxuICAgICAgICAgICAgICAgICAgICBgJHtwcmVkaWN0aW9uLmxhYmVsID09PSBcIkhhcHB5XCI/IFwiIzM0ZWI1OVwiIDogcHJlZGljdGlvbi5sYWJlbCA9PT0gXCJOZXV0cmFsXCIgPyBcIiMwRUE1RTlcIiA6IHByZWRpY3Rpb24ubGFiZWwgPT09IFwiU2FkXCIgPyBcIiM5NjRCMDBcIiA6IFwiI2YwMTQwY1wifWBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy00LzZcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc3VsdFBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIlJlYWN0IiwiUHJvZ3Jlc3MiLCJDaXJjbGUiLCJMaW5lIiwiQnV0dG9uIiwidXNlUm91dGVyIiwiUmVzdWx0UGFnZSIsImRhdGEiLCJoYW5kbGVOZXh0Iiwicm91dGVyIiwiY29uc29sZSIsImxvZyIsImRldGVjdGVkRW1vdGlvbiIsImVtb3Rpb24iLCJoYW5kbGVOZXh0Q2xpY2siLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInNyYyIsImltZ3VybCIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwicCIsIm9uQ2xpY2siLCJwdXNoIiwidG9wXzVfcHJlZGljdGlvbnMiLCJtYXAiLCJwcmVkaWN0aW9uIiwiaW5kZXgiLCJsYWJlbCIsInBlcmNlbnQiLCJzY29yZSIsInRyYWlsV2lkdGgiLCJzdHJva2VXaWR0aCIsInN0cm9rZUNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/detectionComponents/page.jsx\n"));

/***/ })

});