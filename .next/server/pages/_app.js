/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/StateContext.js":
/*!*********************************!*\
  !*** ./context/StateContext.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StateContext\": () => (/* binding */ StateContext),\n/* harmony export */   \"useStateContext\": () => (/* binding */ useStateContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst StateContext = ({ children  })=>{\n    const { 0: activeDepart , 1: setActiveDepart  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: activeUser , 1: setActiveUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Context.Provider, {\n        value: {\n            activeUser,\n            setActiveUser,\n            activeDepart,\n            setActiveDepart\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/mac/vscode/pharmbills/fingerchek/context/StateContext.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n};\nconst useStateContext = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Context)\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L1N0YXRlQ29udGV4dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUE4RTtBQUU5RSxNQUFNSyxPQUFPLGlCQUFHSixvREFBYSxFQUFFO0FBRXhCLE1BQU1LLFlBQVksR0FBRyxDQUFDLEVBQUVDLFFBQVEsR0FBRSxHQUFLO0lBQzVDLE1BQU0sRUFMUixHQUtTQyxZQUFZLEdBTHJCLEdBS3VCQyxlQUFlLE1BQUlMLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQ3BELE1BQU0sRUFOUixHQU1TTSxVQUFVLEdBTm5CLEdBTXFCQyxhQUFhLE1BQUlQLCtDQUFRLEVBQUU7SUFFOUMscUJBQ0UsOERBQUNDLE9BQU8sQ0FBQ08sUUFBUTtRQUNmQyxLQUFLLEVBQUU7WUFDTEgsVUFBVTtZQUNWQyxhQUFhO1lBQ2JILFlBQVk7WUFDWkMsZUFBZTtTQUNoQjtrQkFFQUYsUUFBUTs7Ozs7aUJBQ1EsQ0FDbkI7Q0FDSCxDQUFDO0FBRUssTUFBTU8sZUFBZSxHQUFHLElBQU1aLGlEQUFVLENBQUNHLE9BQU8sQ0FBQztBQUFBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maW5nZXJjaGVrLy4vY29udGV4dC9TdGF0ZUNvbnRleHQuanM/YjFiMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgY29uc3QgU3RhdGVDb250ZXh0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbYWN0aXZlRGVwYXJ0LCBzZXRBY3RpdmVEZXBhcnRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFthY3RpdmVVc2VyLCBzZXRBY3RpdmVVc2VyXSA9IHVzZVN0YXRlKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgYWN0aXZlVXNlcixcbiAgICAgICAgc2V0QWN0aXZlVXNlcixcbiAgICAgICAgYWN0aXZlRGVwYXJ0LFxuICAgICAgICBzZXRBY3RpdmVEZXBhcnQsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0NvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlU3RhdGVDb250ZXh0ID0gKCkgPT4gdXNlQ29udGV4dChDb250ZXh0KTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDb250ZXh0IiwiU3RhdGVDb250ZXh0IiwiY2hpbGRyZW4iLCJhY3RpdmVEZXBhcnQiLCJzZXRBY3RpdmVEZXBhcnQiLCJhY3RpdmVVc2VyIiwic2V0QWN0aXZlVXNlciIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VTdGF0ZUNvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/StateContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/index.css */ \"./styles/index.css\");\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var context_StateContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! context/StateContext */ \"./context/StateContext.js\");\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(context_StateContext__WEBPACK_IMPORTED_MODULE_4__.StateContext, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/mac/vscode/pharmbills/fingerchek/pages/_app.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/mac/vscode/pharmbills/fingerchek/pages/_app.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUE2QjtBQUNLO0FBQ1I7QUFDMEI7QUFFcEQsU0FBU0UsS0FBSyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFFLEVBQUU7SUFDdkMscUJBQ0UsOERBQUNILDhEQUFZO2tCQUNYLDRFQUFDRSxTQUFTO1lBQUUsR0FBR0MsU0FBUzs7Ozs7Z0JBQUk7Ozs7O1lBQ2YsQ0FDZjtDQUNIO0FBRUQsaUVBQWVGLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpbmdlcmNoZWsvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2luZGV4LmNzc1wiO1xuaW1wb3J0IFwidGFpbHdpbmRjc3MvdGFpbHdpbmQuY3NzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTdGF0ZUNvbnRleHQgfSBmcm9tIFwiY29udGV4dC9TdGF0ZUNvbnRleHRcIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPFN0YXRlQ29udGV4dD5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1N0YXRlQ29udGV4dD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJTdGF0ZUNvbnRleHQiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./node_modules/tailwindcss/tailwind.css":
/*!***********************************************!*\
  !*** ./node_modules/tailwindcss/tailwind.css ***!
  \***********************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/index.css":
/*!**************************!*\
  !*** ./styles/index.css ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();