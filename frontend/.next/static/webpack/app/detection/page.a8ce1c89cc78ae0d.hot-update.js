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

/***/ "(app-pages-browser)/./app/detection/page.jsx":
/*!********************************!*\
  !*** ./app/detection/page.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_audioInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/audioInput */ \"(app-pages-browser)/./components/audioInput.jsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _utils_generateEmotionList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/generateEmotionList */ \"(app-pages-browser)/./utils/generateEmotionList.js\");\n/* harmony import */ var _components_detectionComponents_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/detectionComponents/page */ \"(app-pages-browser)/./components/detectionComponents/page.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Page = ()=>{\n    _s();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [isNext, setIsNext] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const handleSend = async (data)=>{\n        setLoading(true);\n        setIsNext(false);\n        const formData = new FormData();\n        formData.append(\"file\", data.audio); // Append the selected audio file, 'file' should match the name used in your Flask app\n        try {\n            // const res = await fetch(\"http://localhost:5000/predict\", {\n            //   method: \"POST\",\n            //   body: formData,\n            // });\n            // if (!res.ok) {\n            //   throw new Error(\"Network response was not ok\");\n            // }\n            //   const result = await res.json();\n            const ress = {\n                predicted_emotion: \"hap\",\n                top_5_predictions: [\n                    {\n                        label: \"hap\",\n                        score: 0.7928280830383301\n                    },\n                    {\n                        label: \"neu\",\n                        score: 0.20054923595783308\n                    },\n                    {\n                        label: \"sad\",\n                        score: 0.006119635887444019\n                    },\n                    {\n                        label: \"ang\",\n                        score: 0.00020300208416301757\n                    }\n                ]\n            };\n            const extendedEmotionList = (0,_utils_generateEmotionList__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(ress);\n            setData(extendedEmotionList);\n            console.log(extendedEmotionList);\n        } catch (error) {\n            console.error(\"Error:\", error);\n        }\n        setLoading(false);\n    };\n    const handleNext = ()=>{\n        setIsNext(true);\n        setData(null);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center items-center h-[70vh] w-5/6 mx-auto\",\n        children: isNext && !loading && !data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_audioInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            handleSend: handleSend\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\app\\\\detection\\\\page.jsx\",\n            lineNumber: 77,\n            columnNumber: 7\n        }, undefined) : data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_detectionComponents_page__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            data: data,\n            handleNext: handleNext\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\app\\\\detection\\\\page.jsx\",\n            lineNumber: 79,\n            columnNumber: 7\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\app\\\\detection\\\\page.jsx\",\n            lineNumber: 81,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\app\\\\detection\\\\page.jsx\",\n        lineNumber: 75,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Page, \"ypX90z5zqOrfrxh4D5HSp5DgBho=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kZXRlY3Rpb24vcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVtRDtBQUNGO0FBQ2xCO0FBQytCO0FBQ0M7QUFDekI7QUFFdEMsTUFBTVEsT0FBTzs7SUFDWCxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1IsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDUyxNQUFNQyxRQUFRLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ1csUUFBUUMsVUFBVSxHQUFHWiwrQ0FBUUEsQ0FBQztJQUtyQyxNQUFNYSxhQUFhLE9BQU9KO1FBQ3hCRCxXQUFXO1FBQ1hJLFVBQVU7UUFDVixNQUFNRSxXQUFXLElBQUlDO1FBQ3JCRCxTQUFTRSxNQUFNLENBQUMsUUFBUVAsS0FBS1EsS0FBSyxHQUFHLHNGQUFzRjtRQUUzSCxJQUFJO1lBQ0YsNkRBQTZEO1lBQzdELG9CQUFvQjtZQUNwQixvQkFBb0I7WUFDcEIsTUFBTTtZQUVOLGlCQUFpQjtZQUNqQixvREFBb0Q7WUFDcEQsSUFBSTtZQUVKLHFDQUFxQztZQUduQyxNQUFNQyxPQUFPO2dCQUNYQyxtQkFBbUI7Z0JBQ25CQyxtQkFBbUI7b0JBQ2pCO3dCQUNFQyxPQUFPO3dCQUNQQyxPQUFPO29CQUNUO29CQUNBO3dCQUNFRCxPQUFPO3dCQUNQQyxPQUFPO29CQUNUO29CQUNBO3dCQUNFRCxPQUFPO3dCQUNQQyxPQUFPO29CQUNUO29CQUNBO3dCQUNFRCxPQUFPO3dCQUNQQyxPQUFPO29CQUNUO2lCQUNEO1lBQ0g7WUFFRixNQUFNQyxzQkFBc0JwQixzRUFBbUJBLENBQUNlO1lBRWhEUixRQUFRYTtZQUNSQyxRQUFRQyxHQUFHLENBQUNGO1FBQ2QsRUFBRSxPQUFPRyxPQUFPO1lBQ2RGLFFBQVFFLEtBQUssQ0FBQyxVQUFVQTtRQUMxQjtRQUNBbEIsV0FBVztJQUNiO0lBRUEsTUFBTW1CLGFBQWE7UUFDakJmLFVBQVU7UUFDVkYsUUFBUTtJQUNWO0lBRUEscUJBQ0UsOERBQUNrQjtRQUFJQyxXQUFVO2tCQUNkbEIsVUFBVSxDQUFDSixXQUFXLENBQUNFLHFCQUN0Qiw4REFBQ1IsOERBQVVBO1lBQUNZLFlBQVlBOzs7Ozt3QkFDdEJKLHFCQUNGLDhEQUFDTCw0RUFBVUE7WUFBQ0ssTUFBTUE7WUFBTWtCLFlBQVlBOzs7OztzQ0FFcEMsOERBQUNHO3NCQUFFOzs7Ozs7Ozs7OztBQUlUO0dBM0VNeEI7S0FBQUE7QUE2RU4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2RldGVjdGlvbi9wYWdlLmpzeD9lMTUxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEF1ZGlvSW5wdXQgZnJvbSBcIkAvY29tcG9uZW50cy9hdWRpb0lucHV0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgZ2VuZXJhdGVFbW90aW9uTGlzdCBmcm9tIFwiQC91dGlscy9nZW5lcmF0ZUVtb3Rpb25MaXN0XCI7XHJcbmltcG9ydCBSZXN1bHRQYWdlIGZyb20gXCJAL2NvbXBvbmVudHMvZGV0ZWN0aW9uQ29tcG9uZW50cy9wYWdlXCI7XHJcbmltcG9ydCB7IHNldCB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcclxuXHJcbmNvbnN0IFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtpc05leHQsIHNldElzTmV4dF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiBcclxuIFxyXG5cclxuICBjb25zdCBoYW5kbGVTZW5kID0gYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRJc05leHQoZmFsc2UpO1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcImZpbGVcIiwgZGF0YS5hdWRpbyk7IC8vIEFwcGVuZCB0aGUgc2VsZWN0ZWQgYXVkaW8gZmlsZSwgJ2ZpbGUnIHNob3VsZCBtYXRjaCB0aGUgbmFtZSB1c2VkIGluIHlvdXIgRmxhc2sgYXBwXHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvcHJlZGljdFwiLCB7XHJcbiAgICAgIC8vICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgLy8gICBib2R5OiBmb3JtRGF0YSxcclxuICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAvLyBpZiAoIXJlcy5vaykge1xyXG4gICAgICAvLyAgIHRocm93IG5ldyBFcnJvcihcIk5ldHdvcmsgcmVzcG9uc2Ugd2FzIG5vdCBva1wiKTtcclxuICAgICAgLy8gfVxyXG5cclxuICAgICAgLy8gICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuXHJcbiAgICAgICAgY29uc3QgcmVzcyA9IHtcclxuICAgICAgICAgIHByZWRpY3RlZF9lbW90aW9uOiBcImhhcFwiLFxyXG4gICAgICAgICAgdG9wXzVfcHJlZGljdGlvbnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxhYmVsOiBcImhhcFwiLFxyXG4gICAgICAgICAgICAgIHNjb3JlOiAwLjc5MjgyODA4MzAzODMzMDEsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsYWJlbDogXCJuZXVcIixcclxuICAgICAgICAgICAgICBzY29yZTogMC4yMDA1NDkyMzU5NTc4MzMwOCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxhYmVsOiBcInNhZFwiLFxyXG4gICAgICAgICAgICAgIHNjb3JlOiAwLjAwNjExOTYzNTg4NzQ0NDAxOSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxhYmVsOiBcImFuZ1wiLFxyXG4gICAgICAgICAgICAgIHNjb3JlOiAwLjAwMDIwMzAwMjA4NDE2MzAxNzU3LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgZXh0ZW5kZWRFbW90aW9uTGlzdCA9IGdlbmVyYXRlRW1vdGlvbkxpc3QocmVzcyk7XHJcblxyXG4gICAgICBzZXREYXRhKGV4dGVuZGVkRW1vdGlvbkxpc3QpO1xyXG4gICAgICBjb25zb2xlLmxvZyhleHRlbmRlZEVtb3Rpb25MaXN0KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyb3IpO1xyXG4gICAgfVxyXG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTmV4dCA9ICgpID0+IHtcclxuICAgIHNldElzTmV4dCh0cnVlKTtcclxuICAgIHNldERhdGEobnVsbCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1bNzB2aF0gdy01LzYgbXgtYXV0b1wiPlxyXG4gICAge2lzTmV4dCAmJiAhbG9hZGluZyAmJiAhZGF0YSA/IChcclxuICAgICAgPEF1ZGlvSW5wdXQgaGFuZGxlU2VuZD17aGFuZGxlU2VuZH0gLz5cclxuICAgICkgOiBkYXRhID8gKFxyXG4gICAgICA8UmVzdWx0UGFnZSBkYXRhPXtkYXRhfSBoYW5kbGVOZXh0PXtoYW5kbGVOZXh0fSAvPlxyXG4gICAgKSA6IChcclxuICAgICAgPHA+TG9hZGluZy4uLjwvcD5cclxuICAgICl9XHJcbiAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQXVkaW9JbnB1dCIsIkltYWdlIiwiZ2VuZXJhdGVFbW90aW9uTGlzdCIsIlJlc3VsdFBhZ2UiLCJzZXQiLCJQYWdlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJkYXRhIiwic2V0RGF0YSIsImlzTmV4dCIsInNldElzTmV4dCIsImhhbmRsZVNlbmQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiYXVkaW8iLCJyZXNzIiwicHJlZGljdGVkX2Vtb3Rpb24iLCJ0b3BfNV9wcmVkaWN0aW9ucyIsImxhYmVsIiwic2NvcmUiLCJleHRlbmRlZEVtb3Rpb25MaXN0IiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiaGFuZGxlTmV4dCIsImRpdiIsImNsYXNzTmFtZSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/detection/page.jsx\n"));

/***/ })

});