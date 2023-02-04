"use strict";
(self["webpackChunkwebpack_build"] = self["webpackChunkwebpack_build"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_print_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/print.js */ "./src/js/print.js");
/* harmony import */ var _image_favicon_ico__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image/favicon.ico */ "./src/image/favicon.ico");
/* harmony import */ var _style_example_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style/example.sass */ "./src/style/example.sass");



// import './style/example.css';
// import './style/example.less';
// import './style/example.scss';


/*
import blockHTML from './html/block.html';
alert(blockHTML);

import Data from './data.xml';
alert(Data);
import Notes from './data.csv';
alert(Notes);

// No warning
import data from './data.json';
// Warning shown, this is not allowed by the spec.
import { foo } from './data.json';

import toml from './data.toml';
alert(toml.title); // output `TOML Example`
alert(toml.owner.name); // output `Tom Preston-Werner`

import yaml from './data.yaml';
alert(yaml.title); // output `YAML Example`
alert(yaml.owner.name); // output `Tom Preston-Werner`

import json from './data.json5';
alert(json.title); // output `JSON5 Example`
alert(json.owner.name); // output `Tom Preston-Werner`
*/

function component() {
  var element = document.createElement('div');
  // Lodash, now imported by this script
  element.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default().join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.
  var myIcon = new Image();
  myIcon.src = _image_favicon_ico__WEBPACK_IMPORTED_MODULE_2__;
  myIcon.onclick = _js_print_js__WEBPACK_IMPORTED_MODULE_1__["default"];
  element.appendChild(myIcon);
  return element;
}
document.body.appendChild(component());

/***/ }),

/***/ "./src/js/print.js":
/*!*************************!*\
  !*** ./src/js/print.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ printMe)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

function printMe() {
  alert('I get called from print.js!');
}

/***/ }),

/***/ "./src/style/example.sass":
/*!********************************!*\
  !*** ./src/style/example.sass ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/image/favicon.ico":
/*!*******************************!*\
  !*** ./src/image/favicon.ico ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "33378dc45cc1c24ca017.ico";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF1QjtBQUNhO0FBQ0c7QUFDdkM7QUFDQTtBQUNBO0FBQzhCOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNHLFNBQVMsR0FBRztFQUNuQixJQUFNQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUM3QztFQUNBRixPQUFPLENBQUNHLFNBQVMsR0FBR1Asa0RBQU0sQ0FBQyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsRUFBRSxHQUFHLENBQUM7RUFDckRJLE9BQU8sQ0FBQ0ssU0FBUyxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDOztFQUU5QjtFQUNBLElBQU1DLE1BQU0sR0FBRyxJQUFJQyxLQUFLLEVBQUU7RUFDMUJELE1BQU0sQ0FBQ0UsR0FBRyxHQUFHWCwrQ0FBSTtFQUVqQlMsTUFBTSxDQUFDRyxPQUFPLEdBQUdiLG9EQUFPO0VBRXhCRyxPQUFPLENBQUNXLFdBQVcsQ0FBQ0osTUFBTSxDQUFDO0VBRTNCLE9BQU9QLE9BQU87QUFDaEI7QUFFQUMsUUFBUSxDQUFDVyxJQUFJLENBQUNELFdBQVcsQ0FBQ1osU0FBUyxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRGY7QUFFUixTQUFTRixPQUFPLEdBQUc7RUFDaENnQixLQUFLLENBQUMsNkJBQTZCLENBQUM7QUFDdEM7Ozs7Ozs7Ozs7O0FDSkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWJ1aWxkLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stYnVpbGQvLi9zcmMvanMvcHJpbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1idWlsZC8uL3NyYy9zdHlsZS9leGFtcGxlLnNhc3M/Y2Q0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHByaW50TWUgZnJvbSAnLi9qcy9wcmludC5qcyc7XG5pbXBvcnQgSWNvbiBmcm9tICcuL2ltYWdlL2Zhdmljb24uaWNvJztcbi8vIGltcG9ydCAnLi9zdHlsZS9leGFtcGxlLmNzcyc7XG4vLyBpbXBvcnQgJy4vc3R5bGUvZXhhbXBsZS5sZXNzJztcbi8vIGltcG9ydCAnLi9zdHlsZS9leGFtcGxlLnNjc3MnO1xuaW1wb3J0ICcuL3N0eWxlL2V4YW1wbGUuc2Fzcyc7XG5cbi8qXG5pbXBvcnQgYmxvY2tIVE1MIGZyb20gJy4vaHRtbC9ibG9jay5odG1sJztcbmFsZXJ0KGJsb2NrSFRNTCk7XG5cbmltcG9ydCBEYXRhIGZyb20gJy4vZGF0YS54bWwnO1xuYWxlcnQoRGF0YSk7XG5pbXBvcnQgTm90ZXMgZnJvbSAnLi9kYXRhLmNzdic7XG5hbGVydChOb3Rlcyk7XG5cbi8vIE5vIHdhcm5pbmdcbmltcG9ydCBkYXRhIGZyb20gJy4vZGF0YS5qc29uJztcbi8vIFdhcm5pbmcgc2hvd24sIHRoaXMgaXMgbm90IGFsbG93ZWQgYnkgdGhlIHNwZWMuXG5pbXBvcnQgeyBmb28gfSBmcm9tICcuL2RhdGEuanNvbic7XG5cbmltcG9ydCB0b21sIGZyb20gJy4vZGF0YS50b21sJztcbmFsZXJ0KHRvbWwudGl0bGUpOyAvLyBvdXRwdXQgYFRPTUwgRXhhbXBsZWBcbmFsZXJ0KHRvbWwub3duZXIubmFtZSk7IC8vIG91dHB1dCBgVG9tIFByZXN0b24tV2VybmVyYFxuXG5pbXBvcnQgeWFtbCBmcm9tICcuL2RhdGEueWFtbCc7XG5hbGVydCh5YW1sLnRpdGxlKTsgLy8gb3V0cHV0IGBZQU1MIEV4YW1wbGVgXG5hbGVydCh5YW1sLm93bmVyLm5hbWUpOyAvLyBvdXRwdXQgYFRvbSBQcmVzdG9uLVdlcm5lcmBcblxuaW1wb3J0IGpzb24gZnJvbSAnLi9kYXRhLmpzb241JztcbmFsZXJ0KGpzb24udGl0bGUpOyAvLyBvdXRwdXQgYEpTT041IEV4YW1wbGVgXG5hbGVydChqc29uLm93bmVyLm5hbWUpOyAvLyBvdXRwdXQgYFRvbSBQcmVzdG9uLVdlcm5lcmBcbiovXG5cbmZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAvLyBMb2Rhc2gsIG5vdyBpbXBvcnRlZCBieSB0aGlzIHNjcmlwdFxuICBlbGVtZW50LmlubmVySFRNTCA9IF8uam9pbihbJ0hlbGxvJywgJ3dlYnBhY2snXSwgJyAnKTtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoZWxsbycpO1xuICBcbiAgLy8gQWRkIHRoZSBpbWFnZSB0byBvdXIgZXhpc3RpbmcgZGl2LlxuICBjb25zdCBteUljb24gPSBuZXcgSW1hZ2UoKTtcbiAgbXlJY29uLnNyYyA9IEljb247XG4gIFxuICBteUljb24ub25jbGljayA9IHByaW50TWU7XG5cbiAgZWxlbWVudC5hcHBlbmRDaGlsZChteUljb24pO1xuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTsiLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmludE1lKCkge1xuICBhbGVydCgnSSBnZXQgY2FsbGVkIGZyb20gcHJpbnQuanMhJyk7XG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIl8iLCJwcmludE1lIiwiSWNvbiIsImNvbXBvbmVudCIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJqb2luIiwiY2xhc3NMaXN0IiwiYWRkIiwibXlJY29uIiwiSW1hZ2UiLCJzcmMiLCJvbmNsaWNrIiwiYXBwZW5kQ2hpbGQiLCJib2R5IiwiYWxlcnQiXSwic291cmNlUm9vdCI6IiJ9