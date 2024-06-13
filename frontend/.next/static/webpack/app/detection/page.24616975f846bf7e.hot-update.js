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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_audioInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/audioInput */ \"(app-pages-browser)/./components/audioInput.jsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _utils_generateEmotionList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/generateEmotionList */ \"(app-pages-browser)/./utils/generateEmotionList.js\");\n/* harmony import */ var _components_detectionComponents_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/detectionComponents/page */ \"(app-pages-browser)/./components/detectionComponents/page.jsx\");\n/* harmony import */ var react_loading_indicators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-loading-indicators */ \"(app-pages-browser)/./node_modules/react-loading-indicators/dist/esm/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Page = ()=>{\n    _s();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [isNext, setIsNext] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const handleSend = async (data)=>{\n        setLoading(true);\n        setIsNext(false);\n        const formData = new FormData();\n        formData.append(\"file\", data.audio); // Append the selected audio file, 'file' should match the name used in your Flask app\n        try {\n            // const res = await fetch(\"http://localhost:5000/predict\", {\n            //   method: \"POST\",\n            //   body: formData,\n            // });\n            // if (!res.ok) {\n            //   throw new Error(\"Network response was not ok\");\n            // }\n            // const result = await res.json();\n            const ress = {\n                predicted_emotion: \"hap\",\n                top_5_predictions: [\n                    {\n                        label: \"hap\",\n                        score: 0.7928280830383301\n                    },\n                    {\n                        label: \"neu\",\n                        score: 0.20054923595783308\n                    },\n                    {\n                        label: \"sad\",\n                        score: 0.006119635887444019\n                    },\n                    {\n                        label: \"ang\",\n                        score: 0.00020300208416301757\n                    }\n                ]\n            };\n            const extendedEmotionList = (0,_utils_generateEmotionList__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(ress);\n            setData(extendedEmotionList);\n            console.log(extendedEmotionList);\n        } catch (error) {\n            console.error(\"Error:\", error);\n        }\n        setLoading(false);\n    };\n    const handleNext = ()=>{\n        setIsNext(true);\n        setData(null);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center items-center h-[70vh] w-5/6 mx-auto\",\n        children: isNext && !loading && !data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_audioInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            handleSend: handleSend\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\app\\\\detection\\\\page.jsx\",\n            lineNumber: 74,\n            columnNumber: 9\n        }, undefined) : data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_detectionComponents_page__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            data: data,\n            handleNext: handleNext\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\app\\\\detection\\\\page.jsx\",\n            lineNumber: 76,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col text-center text-lg font-bold text-sky-500\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_loading_indicators__WEBPACK_IMPORTED_MODULE_6__.LifeLine, {\n                    color: \"#0EA5E9\",\n                    size: \"medium\",\n                    text: \"\",\n                    textColor: \"\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\app\\\\detection\\\\page.jsx\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Analyzing Audio Data...\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\app\\\\detection\\\\page.jsx\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\app\\\\detection\\\\page.jsx\",\n            lineNumber: 78,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ONC\\\\OneDrive\\\\Desktop\\\\iicquest\\\\teammechi_iicquest\\\\frontend\\\\app\\\\detection\\\\page.jsx\",\n        lineNumber: 72,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Page, \"ypX90z5zqOrfrxh4D5HSp5DgBho=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kZXRlY3Rpb24vcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFbUQ7QUFDRjtBQUNsQjtBQUMrQjtBQUNDO0FBQ3pCO0FBQ2M7QUFFcEQsTUFBTVMsT0FBTzs7SUFDWCxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1QsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDVSxNQUFNQyxRQUFRLEdBQUdYLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ1ksUUFBUUMsVUFBVSxHQUFHYiwrQ0FBUUEsQ0FBQztJQUVyQyxNQUFNYyxhQUFhLE9BQU9KO1FBQ3hCRCxXQUFXO1FBQ1hJLFVBQVU7UUFDVixNQUFNRSxXQUFXLElBQUlDO1FBQ3JCRCxTQUFTRSxNQUFNLENBQUMsUUFBUVAsS0FBS1EsS0FBSyxHQUFHLHNGQUFzRjtRQUUzSCxJQUFJO1lBQ0YsNkRBQTZEO1lBQzdELG9CQUFvQjtZQUNwQixvQkFBb0I7WUFDcEIsTUFBTTtZQUVOLGlCQUFpQjtZQUNqQixvREFBb0Q7WUFDcEQsSUFBSTtZQUVKLG1DQUFtQztZQUVuQyxNQUFNQyxPQUFPO2dCQUNYQyxtQkFBbUI7Z0JBQ25CQyxtQkFBbUI7b0JBQ2pCO3dCQUNFQyxPQUFPO3dCQUNQQyxPQUFPO29CQUNUO29CQUNBO3dCQUNFRCxPQUFPO3dCQUNQQyxPQUFPO29CQUNUO29CQUNBO3dCQUNFRCxPQUFPO3dCQUNQQyxPQUFPO29CQUNUO29CQUNBO3dCQUNFRCxPQUFPO3dCQUNQQyxPQUFPO29CQUNUO2lCQUNEO1lBQ0g7WUFFQSxNQUFNQyxzQkFBc0JyQixzRUFBbUJBLENBQUNnQjtZQUVoRFIsUUFBUWE7WUFDUkMsUUFBUUMsR0FBRyxDQUFDRjtRQUNkLEVBQUUsT0FBT0csT0FBTztZQUNkRixRQUFRRSxLQUFLLENBQUMsVUFBVUE7UUFDMUI7UUFDQWxCLFdBQVc7SUFDYjtJQUVBLE1BQU1tQixhQUFhO1FBQ2pCZixVQUFVO1FBQ1ZGLFFBQVE7SUFDVjtJQUVBLHFCQUNFLDhEQUFDa0I7UUFBSUMsV0FBVTtrQkFDWmxCLFVBQVUsQ0FBQ0osV0FBVyxDQUFDRSxxQkFDdEIsOERBQUNULDhEQUFVQTtZQUFDYSxZQUFZQTs7Ozs7d0JBQ3RCSixxQkFDRiw4REFBQ04sNEVBQVVBO1lBQUNNLE1BQU1BO1lBQU1rQixZQUFZQTs7Ozs7c0NBRXBDLDhEQUFDQztZQUFJQyxXQUFVOzs4QkFDZiw4REFBQ3hCLDhEQUFRQTtvQkFBQ3lCLE9BQU07b0JBQVVDLE1BQUs7b0JBQVNDLE1BQUs7b0JBQUdDLFdBQVU7Ozs7Ozs4QkFDMUQsOERBQUNDOzhCQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtYO0dBMUVNNUI7S0FBQUE7QUE0RU4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2RldGVjdGlvbi9wYWdlLmpzeD9lMTUxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEF1ZGlvSW5wdXQgZnJvbSBcIkAvY29tcG9uZW50cy9hdWRpb0lucHV0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgZ2VuZXJhdGVFbW90aW9uTGlzdCBmcm9tIFwiQC91dGlscy9nZW5lcmF0ZUVtb3Rpb25MaXN0XCI7XHJcbmltcG9ydCBSZXN1bHRQYWdlIGZyb20gXCJAL2NvbXBvbmVudHMvZGV0ZWN0aW9uQ29tcG9uZW50cy9wYWdlXCI7XHJcbmltcG9ydCB7IHNldCB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcclxuaW1wb3J0IHsgTGlmZUxpbmUgfSBmcm9tIFwicmVhY3QtbG9hZGluZy1pbmRpY2F0b3JzXCI7XHJcblxyXG5jb25zdCBQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbaXNOZXh0LCBzZXRJc05leHRdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlbmQgPSBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldElzTmV4dChmYWxzZSk7XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKFwiZmlsZVwiLCBkYXRhLmF1ZGlvKTsgLy8gQXBwZW5kIHRoZSBzZWxlY3RlZCBhdWRpbyBmaWxlLCAnZmlsZScgc2hvdWxkIG1hdGNoIHRoZSBuYW1lIHVzZWQgaW4geW91ciBGbGFzayBhcHBcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9wcmVkaWN0XCIsIHtcclxuICAgICAgLy8gICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAvLyAgIGJvZHk6IGZvcm1EYXRhLFxyXG4gICAgICAvLyB9KTtcclxuXHJcbiAgICAgIC8vIGlmICghcmVzLm9rKSB7XHJcbiAgICAgIC8vICAgdGhyb3cgbmV3IEVycm9yKFwiTmV0d29yayByZXNwb25zZSB3YXMgbm90IG9rXCIpO1xyXG4gICAgICAvLyB9XHJcblxyXG4gICAgICAvLyBjb25zdCByZXN1bHQgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgICAgY29uc3QgcmVzcyA9IHtcclxuICAgICAgICBwcmVkaWN0ZWRfZW1vdGlvbjogXCJoYXBcIixcclxuICAgICAgICB0b3BfNV9wcmVkaWN0aW9uczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDogXCJoYXBcIixcclxuICAgICAgICAgICAgc2NvcmU6IDAuNzkyODI4MDgzMDM4MzMwMSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIm5ldVwiLFxyXG4gICAgICAgICAgICBzY29yZTogMC4yMDA1NDkyMzU5NTc4MzMwOCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcInNhZFwiLFxyXG4gICAgICAgICAgICBzY29yZTogMC4wMDYxMTk2MzU4ODc0NDQwMTksXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDogXCJhbmdcIixcclxuICAgICAgICAgICAgc2NvcmU6IDAuMDAwMjAzMDAyMDg0MTYzMDE3NTcsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCBleHRlbmRlZEVtb3Rpb25MaXN0ID0gZ2VuZXJhdGVFbW90aW9uTGlzdChyZXNzKTtcclxuXHJcbiAgICAgIHNldERhdGEoZXh0ZW5kZWRFbW90aW9uTGlzdCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGV4dGVuZGVkRW1vdGlvbkxpc3QpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVOZXh0ID0gKCkgPT4ge1xyXG4gICAgc2V0SXNOZXh0KHRydWUpO1xyXG4gICAgc2V0RGF0YShudWxsKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLVs3MHZoXSB3LTUvNiBteC1hdXRvXCI+XHJcbiAgICAgIHtpc05leHQgJiYgIWxvYWRpbmcgJiYgIWRhdGEgPyAoXHJcbiAgICAgICAgPEF1ZGlvSW5wdXQgaGFuZGxlU2VuZD17aGFuZGxlU2VuZH0gLz5cclxuICAgICAgKSA6IGRhdGEgPyAoXHJcbiAgICAgICAgPFJlc3VsdFBhZ2UgZGF0YT17ZGF0YX0gaGFuZGxlTmV4dD17aGFuZGxlTmV4dH0gLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdGV4dC1jZW50ZXIgdGV4dC1sZyBmb250LWJvbGQgdGV4dC1za3ktNTAwXCI+XHJcbiAgICAgICAgPExpZmVMaW5lIGNvbG9yPVwiIzBFQTVFOVwiIHNpemU9XCJtZWRpdW1cIiB0ZXh0PVwiXCIgdGV4dENvbG9yPVwiXCIgLz5cclxuICAgICAgICA8cD5BbmFseXppbmcgQXVkaW8gRGF0YS4uLjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkF1ZGlvSW5wdXQiLCJJbWFnZSIsImdlbmVyYXRlRW1vdGlvbkxpc3QiLCJSZXN1bHRQYWdlIiwic2V0IiwiTGlmZUxpbmUiLCJQYWdlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJkYXRhIiwic2V0RGF0YSIsImlzTmV4dCIsInNldElzTmV4dCIsImhhbmRsZVNlbmQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiYXVkaW8iLCJyZXNzIiwicHJlZGljdGVkX2Vtb3Rpb24iLCJ0b3BfNV9wcmVkaWN0aW9ucyIsImxhYmVsIiwic2NvcmUiLCJleHRlbmRlZEVtb3Rpb25MaXN0IiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiaGFuZGxlTmV4dCIsImRpdiIsImNsYXNzTmFtZSIsImNvbG9yIiwic2l6ZSIsInRleHQiLCJ0ZXh0Q29sb3IiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/detection/page.jsx\n"));

/***/ })

});