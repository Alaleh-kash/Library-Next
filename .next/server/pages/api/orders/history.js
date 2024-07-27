"use strict";
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
exports.id = "pages/api/orders/history";
exports.ids = ["pages/api/orders/history"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "(api)/./models/order.js":
/*!*************************!*\
  !*** ./models/order.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst orderSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    user: {\n        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema.Types.ObjectId),\n        ref: \"User\"\n    },\n    orderItems: [\n        {\n            title: {\n                type: String\n            },\n            price: {\n                type: Number\n            },\n            quantity: {\n                type: Number\n            }\n        }, \n    ],\n    shippingData: {\n        name: {\n            type: String\n        },\n        address: {\n            type: String\n        },\n        postalCode: {\n            type: String\n        }\n    },\n    paymentMethod: {\n        type: String\n    },\n    totalPrice: {\n        type: Number\n    }\n});\nconst Order = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Order) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Order\", orderSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Order);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvb3JkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStCO0FBRS9CLE1BQU1DLFdBQVcsR0FBRyxJQUFJRCx3REFBZSxDQUFDO0lBQ3RDRyxJQUFJLEVBQUU7UUFBRUMsSUFBSSxFQUFFSix1RUFBOEI7UUFBRU8sR0FBRyxFQUFFLE1BQU07S0FBRTtJQUUzREMsVUFBVSxFQUFFO1FBQ1Y7WUFDRUMsS0FBSyxFQUFFO2dCQUFFTCxJQUFJLEVBQUVNLE1BQU07YUFBRTtZQUN2QkMsS0FBSyxFQUFFO2dCQUFFUCxJQUFJLEVBQUVRLE1BQU07YUFBRTtZQUN2QkMsUUFBUSxFQUFFO2dCQUFFVCxJQUFJLEVBQUVRLE1BQU07YUFBRTtTQUMzQjtLQUNGO0lBRURFLFlBQVksRUFBRTtRQUNaQyxJQUFJLEVBQUU7WUFBRVgsSUFBSSxFQUFFTSxNQUFNO1NBQUU7UUFDdEJNLE9BQU8sRUFBRTtZQUFFWixJQUFJLEVBQUVNLE1BQU07U0FBRTtRQUN6Qk8sVUFBVSxFQUFFO1lBQUViLElBQUksRUFBRU0sTUFBTTtTQUFFO0tBQzdCO0lBRURRLGFBQWEsRUFBRTtRQUFFZCxJQUFJLEVBQUVNLE1BQU07S0FBRTtJQUUvQlMsVUFBVSxFQUFFO1FBQUVmLElBQUksRUFBRVEsTUFBTTtLQUFFO0NBQzdCLENBQUM7QUFFRixNQUFNUSxLQUFLLEdBQUdwQiw4REFBcUIsSUFBSUEscURBQWMsQ0FBQyxPQUFPLEVBQUVDLFdBQVcsQ0FBQztBQUUzRSxpRUFBZW1CLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9wcGluZy8uL21vZGVscy9vcmRlci5qcz9lZjkzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcblxuY29uc3Qgb3JkZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgdXNlcjogeyB0eXBlOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQsIHJlZjogJ1VzZXInIH0sXG5cbiAgb3JkZXJJdGVtczogW1xuICAgIHtcbiAgICAgIHRpdGxlOiB7IHR5cGU6IFN0cmluZyB9LFxuICAgICAgcHJpY2U6IHsgdHlwZTogTnVtYmVyIH0sXG4gICAgICBxdWFudGl0eTogeyB0eXBlOiBOdW1iZXIgfSxcbiAgICB9LFxuICBdLFxuXG4gIHNoaXBwaW5nRGF0YToge1xuICAgIG5hbWU6IHsgdHlwZTogU3RyaW5nIH0sXG4gICAgYWRkcmVzczogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICBwb3N0YWxDb2RlOiB7IHR5cGU6IFN0cmluZyB9LFxuICB9LFxuXG4gIHBheW1lbnRNZXRob2Q6IHsgdHlwZTogU3RyaW5nIH0sXG5cbiAgdG90YWxQcmljZTogeyB0eXBlOiBOdW1iZXIgfSxcbn0pXG5cbmNvbnN0IE9yZGVyID0gbW9uZ29vc2UubW9kZWxzLk9yZGVyIHx8IG1vbmdvb3NlLm1vZGVsKCdPcmRlcicsIG9yZGVyU2NoZW1hKVxuXG5leHBvcnQgZGVmYXVsdCBPcmRlclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwib3JkZXJTY2hlbWEiLCJTY2hlbWEiLCJ1c2VyIiwidHlwZSIsIlR5cGVzIiwiT2JqZWN0SWQiLCJyZWYiLCJvcmRlckl0ZW1zIiwidGl0bGUiLCJTdHJpbmciLCJwcmljZSIsIk51bWJlciIsInF1YW50aXR5Iiwic2hpcHBpbmdEYXRhIiwibmFtZSIsImFkZHJlc3MiLCJwb3N0YWxDb2RlIiwicGF5bWVudE1ldGhvZCIsInRvdGFsUHJpY2UiLCJPcmRlciIsIm1vZGVscyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./models/order.js\n");

/***/ }),

/***/ "(api)/./pages/api/orders/history.js":
/*!*************************************!*\
  !*** ./pages/api/orders/history.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/db */ \"(api)/./utils/db.js\");\n/* harmony import */ var _models_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/order */ \"(api)/./models/order.js\");\n\n\n\nasync function handler(req, res) {\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_0__.getSession)({\n        req\n    });\n    const { user  } = session;\n    await _utils_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].connect();\n    const orders = await _models_order__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find({\n        user: user._id\n    });\n    res.send(orders);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvb3JkZXJzL2hpc3RvcnkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNEM7QUFFVjtBQUNPO0FBRXpDLGVBQWVHLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDL0IsTUFBTUMsT0FBTyxHQUFHLE1BQU1OLDJEQUFVLENBQUM7UUFBRUksR0FBRztLQUFFLENBQUM7SUFFekMsTUFBTSxFQUFFRyxJQUFJLEdBQUUsR0FBR0QsT0FBTztJQUV4QixNQUFNTCx5REFBVSxFQUFFO0lBRWxCLE1BQU1RLE1BQU0sR0FBRyxNQUFNUCwwREFBVSxDQUFDO1FBQUVLLElBQUksRUFBRUEsSUFBSSxDQUFDSSxHQUFHO0tBQUUsQ0FBQztJQUVuRE4sR0FBRyxDQUFDTyxJQUFJLENBQUNILE1BQU0sQ0FBQztDQUNqQjtBQUVELGlFQUFlTixPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hvcHBpbmcvLi9wYWdlcy9hcGkvb3JkZXJzL2hpc3RvcnkuanM/NGY4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0J1xuXG5pbXBvcnQgZGIgZnJvbSAnLi4vLi4vLi4vdXRpbHMvZGInXG5pbXBvcnQgT3JkZXIgZnJvbSAnLi4vLi4vLi4vbW9kZWxzL29yZGVyJ1xuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHsgcmVxIH0pXG5cbiAgY29uc3QgeyB1c2VyIH0gPSBzZXNzaW9uXG5cbiAgYXdhaXQgZGIuY29ubmVjdCgpXG5cbiAgY29uc3Qgb3JkZXJzID0gYXdhaXQgT3JkZXIuZmluZCh7IHVzZXI6IHVzZXIuX2lkIH0pXG5cbiAgcmVzLnNlbmQob3JkZXJzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyXG4iXSwibmFtZXMiOlsiZ2V0U2Vzc2lvbiIsImRiIiwiT3JkZXIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwic2Vzc2lvbiIsInVzZXIiLCJjb25uZWN0Iiwib3JkZXJzIiwiZmluZCIsIl9pZCIsInNlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/orders/history.js\n");

/***/ }),

/***/ "(api)/./utils/db.js":
/*!*********************!*\
  !*** ./utils/db.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function connect() {\n    await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(\"mongodb://127.0.0.1:27017/library\");\n    console.log(\"Connected.\");\n}\nfunction convertToObj(doc) {\n    doc._id = doc._id.toString();\n    return doc;\n}\nconst db = {\n    connect,\n    convertToObj\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0I7QUFFL0IsZUFBZUMsT0FBTyxHQUFHO0lBQ3ZCLE1BQU1ELHVEQUFnQixDQUFDLG1DQUFtQyxDQUFDO0lBRTNERSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUM7Q0FDMUI7QUFFRCxTQUFTQyxZQUFZLENBQUNDLEdBQUcsRUFBRTtJQUN6QkEsR0FBRyxDQUFDQyxHQUFHLEdBQUdELEdBQUcsQ0FBQ0MsR0FBRyxDQUFDQyxRQUFRLEVBQUU7SUFFNUIsT0FBT0YsR0FBRztDQUNYO0FBRUQsTUFBTUcsRUFBRSxHQUFHO0lBQUVQLE9BQU87SUFBRUcsWUFBWTtDQUFFO0FBQ3BDLGlFQUFlSSxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hvcHBpbmcvLi91dGlscy9kYi5qcz83Y2IyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcblxuYXN5bmMgZnVuY3Rpb24gY29ubmVjdCgpIHtcbiAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdCgnbW9uZ29kYjovLzEyNy4wLjAuMToyNzAxNy9saWJyYXJ5JylcblxuICBjb25zb2xlLmxvZygnQ29ubmVjdGVkLicpXG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRUb09iaihkb2MpIHtcbiAgZG9jLl9pZCA9IGRvYy5faWQudG9TdHJpbmcoKVxuXG4gIHJldHVybiBkb2Ncbn1cblxuY29uc3QgZGIgPSB7IGNvbm5lY3QsIGNvbnZlcnRUb09iaiB9XG5leHBvcnQgZGVmYXVsdCBkYiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3QiLCJjb25zb2xlIiwibG9nIiwiY29udmVydFRvT2JqIiwiZG9jIiwiX2lkIiwidG9TdHJpbmciLCJkYiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./utils/db.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/orders/history.js"));
module.exports = __webpack_exports__;

})();