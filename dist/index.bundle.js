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
/* harmony import */ var _print_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print.js */ "./src/print.js");
/* harmony import */ var _favicon_ico__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./favicon.ico */ "./src/favicon.ico");
/* harmony import */ var _style_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.sass */ "./src/style.sass");
/* harmony import */ var _block_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.html */ "./src/block.html");



// import './style.css';
// import "./style.less";
// import "./style.scss";


alert(_block_html__WEBPACK_IMPORTED_MODULE_4__["default"]);

/*
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
  myIcon.src = _favicon_ico__WEBPACK_IMPORTED_MODULE_2__;
  myIcon.onclick = _print_js__WEBPACK_IMPORTED_MODULE_1__["default"];
  element.appendChild(myIcon);
  return element;
}
document.body.appendChild(component());

/***/ }),

/***/ "./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.sass":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.sass ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/saira-extracondensed-black.woff */ "./src/fonts/saira-extracondensed-black.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/saira-extracondensed-black.woff2 */ "./src/fonts/saira-extracondensed-black.woff2"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n@font-face {\n  font-family: \"Saira Extracondensed Black\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff\");\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff2\");\n  font-weight: 600;\n  font-style: normal;\n}\n/*  Sass поддерживает специальный тип селекторов под названием шаблонные селекторы. \n *    Они похожи на селекторы классов и идентификаторов, только вместо # или . указывается %. Они предназначены для использования с директивой @extend.\n *    Для получения дополнительной информации см. селекторы расширения.\n *    Сами по себе, без использования @extend, наборы правил, которые используют\n *    шаблонные селекторы, не окажут влияния на CSS. Например:\n *    */\nbody .hello {\n  color: orange;\n}\n\n/*  Sass позволяет вкладывать правила CSS друг в друга. \n *    Вложенные правила применяются только для элементов, \n *    соответствующих внешним селекторам. Например:\n *    */\nbody {\n  width: 100vw;\n  height: 100vh;\n  background-color: yellow;\n  font-family: \"Saira Extracondensed Black\";\n  font-size: 10em;\n  font-weight: 600;\n  /* CSS имеет довольно много свойств в пространстве имен, например, font-family, font-size и font-weight находятся в пространстве имен font.\n  *  В CSS, если вы хотите установить набор свойств в общем пространстве имен, вы\n  *  должны вводить его каждый раз. Sass упрощает этот процесс: просто напишите\n  *  пространство имен единожды, а внутри вы можете вписать любое из вторичных\n  *  свойств. Например:\n  *  */\n}\nbody:hover {\n  background-color: green;\n}\nbody .hello {\n  font: 16px;\n  font-weight: bold;\n}\n\n/*  Иногда полезно использовать родительский селектор с другим предназначением, чем по умолчанию. \n *    Например, вы захотите использовать специальные стили для случая,\n *    когда над выбранными элементами находится курсор или когда тело элемента имеет\n *    определенный класс. В этих случаях, с помощью символа & вы можете явно указать,\n *    Иногда полезно использовать родительский селектор с другим предназначением, чем по умолчанию. Например, вы захотите использовать специальные стили для случая, когда над выбранными элементами находится курсор или когда тело элемента имеет определенный класс. В этих случаях, с помощью символа & вы можете явно указать, где должен быть вставлен родительский селектор, \n *    например:\n *    */\n#main {\n  color: black;\n}\n#main-sidebar {\n  border: 1px solid;\n}", "",{"version":3,"sources":["webpack://./src/style.sass"],"names":[],"mappings":"AAAA,gBAAgB;AAIhB;EACE,yCAAA;EACA,2DAAA;EACA,4DAAA;EACA,gBAAA;EACA,kBAAA;AAFF;AAIA;;;;;OAAA;AAOA;EACE,aAnBM;AAgBR;;AAIA;;;OAAA;AAKA;EACE,YAAA;EACA,aAAA;EACA,wBA3BW;EA6BT,yCAAA;EACA,eAAA;EACA,gBAAA;EAGF;;;;;MAAA;AAAF;AAFE;EACE,uBAhCe;AAoCnB;AAIE;EAEE,UAAA;EACE,iBAAA;AAHN;;AAKA;;;;;;OAAA;AAQA;EACE,YAAA;AAHF;AAIE;EACE,iBAAA;AAFJ","sourcesContent":["$color: orange\n$body-color: yellow\n$body-color-after: green\n\n@font-face \n  font-family: 'Saira Extracondensed Black'\n  src: url('./fonts/saira-extracondensed-black.woff') format('woff')\n  src: url('./fonts/saira-extracondensed-black.woff2') format('woff2')\n  font-weight: 600\n  font-style: normal\n\n/* \n    Sass поддерживает специальный тип селекторов под названием шаблонные селекторы. \n      Они похожи на селекторы классов и идентификаторов, только вместо # или . указывается %. Они предназначены для использования с директивой @extend.\n      Для получения дополнительной информации см. селекторы расширения.\n      Сами по себе, без использования @extend, наборы правил, которые используют\n      шаблонные селекторы, не окажут влияния на CSS. Например:\n      */\n%for-text \n  color: $color\n/* \n    Sass позволяет вкладывать правила CSS друг в друга. \n      Вложенные правила применяются только для элементов, \n      соответствующих внешним селекторам. Например:\n      */\nbody \n  width: 100vw\n  height: 100vh\n  background-color: $body-color\n  font:\n    family: 'Saira Extracondensed Black'\n    size: 10em\n    weight: 600\n  &:hover\n    background-color: $body-color-after\n  /* \n    CSS имеет довольно много свойств в пространстве имен, например, font-family, font-size и font-weight находятся в пространстве имен font.\n      В CSS, если вы хотите установить набор свойств в общем пространстве имен, вы\n      должны вводить его каждый раз. Sass упрощает этот процесс: просто напишите\n      пространство имен единожды, а внутри вы можете вписать любое из вторичных\n      свойств. Например:\n      */\n  .hello \n    @extend %for-text\n    font: 16px\n      weight: bold\n    //background: url('./favicon.ico')\n/* \n    Иногда полезно использовать родительский селектор с другим предназначением, чем по умолчанию. \n      Например, вы захотите использовать специальные стили для случая,\n      когда над выбранными элементами находится курсор или когда тело элемента имеет\n      определенный класс. В этих случаях, с помощью символа & вы можете явно указать,\n      Иногда полезно использовать родительский селектор с другим предназначением, чем по умолчанию. Например, вы захотите использовать специальные стили для случая, когда над выбранными элементами находится курсор или когда тело элемента имеет определенный класс. В этих случаях, с помощью символа & вы можете явно указать, где должен быть вставлен родительский селектор, \n      например:\n      */\n#main \n  color: black\n  &-sidebar \n    border: 1px solid\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/block.html":
/*!************************!*\
  !*** ./src/block.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<div id=\"block\">\n  hi i'm block\n</div>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/style.sass":
/*!************************!*\
  !*** ./src/style.sass ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.sass");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/favicon.ico":
/*!*************************!*\
  !*** ./src/favicon.ico ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "33378dc45cc1c24ca017.ico";

/***/ }),

/***/ "./src/fonts/saira-extracondensed-black.woff":
/*!***************************************************!*\
  !*** ./src/fonts/saira-extracondensed-black.woff ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "12e8c74bc44495638830.woff";

/***/ }),

/***/ "./src/fonts/saira-extracondensed-black.woff2":
/*!****************************************************!*\
  !*** ./src/fonts/saira-extracondensed-black.woff2 ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "31832b96178824721084.woff2";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1idWlsZC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJ1aWxkLy4vc3JjL3ByaW50LmpzIiwid2VicGFjazovL3dlYnBhY2stYnVpbGQvLi9zcmMvc3R5bGUuc2FzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJ1aWxkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJ1aWxkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJ1aWxkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1idWlsZC8uL3NyYy9ibG9jay5odG1sIiwid2VicGFjazovL3dlYnBhY2stYnVpbGQvLi9zcmMvc3R5bGUuc2Fzcz9lOGYyIiwid2VicGFjazovL3dlYnBhY2stYnVpbGQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1idWlsZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1idWlsZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJ1aWxkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stYnVpbGQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJ1aWxkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBwcmludE1lIGZyb20gJy4vcHJpbnQuanMnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9mYXZpY29uLmljbyc7XG4vLyBpbXBvcnQgJy4vc3R5bGUuY3NzJztcbi8vIGltcG9ydCBcIi4vc3R5bGUubGVzc1wiO1xuLy8gaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XG5pbXBvcnQgXCIuL3N0eWxlLnNhc3NcIjtcbmltcG9ydCBibG9ja0hUTUwgZnJvbSBcIi4vYmxvY2suaHRtbFwiO1xuXG5hbGVydChibG9ja0hUTUwpO1xuXG4vKlxuaW1wb3J0IERhdGEgZnJvbSAnLi9kYXRhLnhtbCc7XG5hbGVydChEYXRhKTtcbmltcG9ydCBOb3RlcyBmcm9tICcuL2RhdGEuY3N2JztcbmFsZXJ0KE5vdGVzKTtcblxuLy8gTm8gd2FybmluZ1xuaW1wb3J0IGRhdGEgZnJvbSAnLi9kYXRhLmpzb24nO1xuLy8gV2FybmluZyBzaG93biwgdGhpcyBpcyBub3QgYWxsb3dlZCBieSB0aGUgc3BlYy5cbmltcG9ydCB7IGZvbyB9IGZyb20gJy4vZGF0YS5qc29uJztcblxuaW1wb3J0IHRvbWwgZnJvbSAnLi9kYXRhLnRvbWwnO1xuYWxlcnQodG9tbC50aXRsZSk7IC8vIG91dHB1dCBgVE9NTCBFeGFtcGxlYFxuYWxlcnQodG9tbC5vd25lci5uYW1lKTsgLy8gb3V0cHV0IGBUb20gUHJlc3Rvbi1XZXJuZXJgXG5cbmltcG9ydCB5YW1sIGZyb20gJy4vZGF0YS55YW1sJztcbmFsZXJ0KHlhbWwudGl0bGUpOyAvLyBvdXRwdXQgYFlBTUwgRXhhbXBsZWBcbmFsZXJ0KHlhbWwub3duZXIubmFtZSk7IC8vIG91dHB1dCBgVG9tIFByZXN0b24tV2VybmVyYFxuXG5pbXBvcnQganNvbiBmcm9tICcuL2RhdGEuanNvbjUnO1xuYWxlcnQoanNvbi50aXRsZSk7IC8vIG91dHB1dCBgSlNPTjUgRXhhbXBsZWBcbmFsZXJ0KGpzb24ub3duZXIubmFtZSk7IC8vIG91dHB1dCBgVG9tIFByZXN0b24tV2VybmVyYFxuKi9cblxuZnVuY3Rpb24gY29tcG9uZW50KCkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIC8vIExvZGFzaCwgbm93IGltcG9ydGVkIGJ5IHRoaXMgc2NyaXB0XG4gIGVsZW1lbnQuaW5uZXJIVE1MID0gXy5qb2luKFsnSGVsbG8nLCAnd2VicGFjayddLCAnICcpO1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hlbGxvJyk7XG4gIFxuICAvLyBBZGQgdGhlIGltYWdlIHRvIG91ciBleGlzdGluZyBkaXYuXG4gIGNvbnN0IG15SWNvbiA9IG5ldyBJbWFnZSgpO1xuICBteUljb24uc3JjID0gSWNvbjtcbiAgXG4gIG15SWNvbi5vbmNsaWNrID0gcHJpbnRNZTtcblxuICBlbGVtZW50LmFwcGVuZENoaWxkKG15SWNvbik7XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpOyIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByaW50TWUoKSB7XG4gIGFsZXJ0KCdJIGdldCBjYWxsZWQgZnJvbSBwcmludC5qcyEnKTtcbn0iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9zYWlyYS1leHRyYWNvbmRlbnNlZC1ibGFjay53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy9zYWlyYS1leHRyYWNvbmRlbnNlZC1ibGFjay53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTYWlyYSBFeHRyYWNvbmRlbnNlZCBCbGFja1xcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuLyogIFNhc3Mg0L/QvtC00LTQtdGA0LbQuNCy0LDQtdGCINGB0L/QtdGG0LjQsNC70YzQvdGL0Lkg0YLQuNC/INGB0LXQu9C10LrRgtC+0YDQvtCyINC/0L7QtCDQvdCw0LfQstCw0L3QuNC10Lwg0YjQsNCx0LvQvtC90L3Ri9C1INGB0LXQu9C10LrRgtC+0YDRiy4gXFxuICogICAg0J7QvdC4INC/0L7RhdC+0LbQuCDQvdCwINGB0LXQu9C10LrRgtC+0YDRiyDQutC70LDRgdGB0L7QsiDQuCDQuNC00LXQvdGC0LjRhNC40LrQsNGC0L7RgNC+0LIsINGC0L7Qu9GM0LrQviDQstC80LXRgdGC0L4gIyDQuNC70LggLiDRg9C60LDQt9GL0LLQsNC10YLRgdGPICUuINCe0L3QuCDQv9GA0LXQtNC90LDQt9C90LDRh9C10L3RiyDQtNC70Y8g0LjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40Y8g0YEg0LTQuNGA0LXQutGC0LjQstC+0LkgQGV4dGVuZC5cXG4gKiAgICDQlNC70Y8g0L/QvtC70YPRh9C10L3QuNGPINC00L7Qv9C+0LvQvdC40YLQtdC70YzQvdC+0Lkg0LjQvdGE0L7RgNC80LDRhtC40Lgg0YHQvC4g0YHQtdC70LXQutGC0L7RgNGLINGA0LDRgdGI0LjRgNC10L3QuNGPLlxcbiAqICAgINCh0LDQvNC4INC/0L4g0YHQtdCx0LUsINCx0LXQtyDQuNGB0L/QvtC70YzQt9C+0LLQsNC90LjRjyBAZXh0ZW5kLCDQvdCw0LHQvtGA0Ysg0L/RgNCw0LLQuNC7LCDQutC+0YLQvtGA0YvQtSDQuNGB0L/QvtC70YzQt9GD0Y7RglxcbiAqICAgINGI0LDQsdC70L7QvdC90YvQtSDRgdC10LvQtdC60YLQvtGA0YssINC90LUg0L7QutCw0LbRg9GCINCy0LvQuNGP0L3QuNGPINC90LAgQ1NTLiDQndCw0L/RgNC40LzQtdGAOlxcbiAqICAgICovXFxuYm9keSAuaGVsbG8ge1xcbiAgY29sb3I6IG9yYW5nZTtcXG59XFxuXFxuLyogIFNhc3Mg0L/QvtC30LLQvtC70Y/QtdGCINCy0LrQu9Cw0LTRi9Cy0LDRgtGMINC/0YDQsNCy0LjQu9CwIENTUyDQtNGA0YPQsyDQsiDQtNGA0YPQs9CwLiBcXG4gKiAgICDQktC70L7QttC10L3QvdGL0LUg0L/RgNCw0LLQuNC70LAg0L/RgNC40LzQtdC90Y/RjtGC0YHRjyDRgtC+0LvRjNC60L4g0LTQu9GPINGN0LvQtdC80LXQvdGC0L7QsiwgXFxuICogICAg0YHQvtC+0YLQstC10YLRgdGC0LLRg9GO0YnQuNGFINCy0L3QtdGI0L3QuNC8INGB0LXQu9C10LrRgtC+0YDQsNC8LiDQndCw0L/RgNC40LzQtdGAOlxcbiAqICAgICovXFxuYm9keSB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTYWlyYSBFeHRyYWNvbmRlbnNlZCBCbGFja1xcXCI7XFxuICBmb250LXNpemU6IDEwZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgLyogQ1NTINC40LzQtdC10YIg0LTQvtCy0L7Qu9GM0L3QviDQvNC90L7Qs9C+INGB0LLQvtC50YHRgtCyINCyINC/0YDQvtGB0YLRgNCw0L3RgdGC0LLQtSDQuNC80LXQvSwg0L3QsNC/0YDQuNC80LXRgCwgZm9udC1mYW1pbHksIGZvbnQtc2l6ZSDQuCBmb250LXdlaWdodCDQvdCw0YXQvtC00Y/RgtGB0Y8g0LIg0L/RgNC+0YHRgtGA0LDQvdGB0YLQstC1INC40LzQtdC9IGZvbnQuXFxuICAqICDQkiBDU1MsINC10YHQu9C4INCy0Ysg0YXQvtGC0LjRgtC1INGD0YHRgtCw0L3QvtCy0LjRgtGMINC90LDQsdC+0YAg0YHQstC+0LnRgdGC0LIg0LIg0L7QsdGJ0LXQvCDQv9GA0L7RgdGC0YDQsNC90YHRgtCy0LUg0LjQvNC10L0sINCy0YtcXG4gICogINC00L7Qu9C20L3RiyDQstCy0L7QtNC40YLRjCDQtdCz0L4g0LrQsNC20LTRi9C5INGA0LDQty4gU2FzcyDRg9C/0YDQvtGJ0LDQtdGCINGN0YLQvtGCINC/0YDQvtGG0LXRgdGBOiDQv9GA0L7RgdGC0L4g0L3QsNC/0LjRiNC40YLQtVxcbiAgKiAg0L/RgNC+0YHRgtGA0LDQvdGB0YLQstC+INC40LzQtdC9INC10LTQuNC90L7QttC00YssINCwINCy0L3Rg9GC0YDQuCDQstGLINC80L7QttC10YLQtSDQstC/0LjRgdCw0YLRjCDQu9GO0LHQvtC1INC40Lcg0LLRgtC+0YDQuNGH0L3Ri9GFXFxuICAqICDRgdCy0L7QudGB0YLQsi4g0J3QsNC/0YDQuNC80LXRgDpcXG4gICogICovXFxufVxcbmJvZHk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcbmJvZHkgLmhlbGxvIHtcXG4gIGZvbnQ6IDE2cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLyogINCY0L3QvtCz0LTQsCDQv9C+0LvQtdC30L3QviDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0YDQvtC00LjRgtC10LvRjNGB0LrQuNC5INGB0LXQu9C10LrRgtC+0YAg0YEg0LTRgNGD0LPQuNC8INC/0YDQtdC00L3QsNC30L3QsNGH0LXQvdC40LXQvCwg0YfQtdC8INC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOLiBcXG4gKiAgICDQndCw0L/RgNC40LzQtdGALCDQstGLINC30LDRhdC+0YLQuNGC0LUg0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMINGB0L/QtdGG0LjQsNC70YzQvdGL0LUg0YHRgtC40LvQuCDQtNC70Y8g0YHQu9GD0YfQsNGPLFxcbiAqICAgINC60L7Qs9C00LAg0L3QsNC0INCy0YvQsdGA0LDQvdC90YvQvNC4INGN0LvQtdC80LXQvdGC0LDQvNC4INC90LDRhdC+0LTQuNGC0YHRjyDQutGD0YDRgdC+0YAg0LjQu9C4INC60L7Qs9C00LAg0YLQtdC70L4g0Y3Qu9C10LzQtdC90YLQsCDQuNC80LXQtdGCXFxuICogICAg0L7Qv9GA0LXQtNC10LvQtdC90L3Ri9C5INC60LvQsNGB0YEuINCSINGN0YLQuNGFINGB0LvRg9GH0LDRj9GFLCDRgSDQv9C+0LzQvtGJ0YzRjiDRgdC40LzQstC+0LvQsCAmINCy0Ysg0LzQvtC20LXRgtC1INGP0LLQvdC+INGD0LrQsNC30LDRgtGMLFxcbiAqICAgINCY0L3QvtCz0LTQsCDQv9C+0LvQtdC30L3QviDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0YDQvtC00LjRgtC10LvRjNGB0LrQuNC5INGB0LXQu9C10LrRgtC+0YAg0YEg0LTRgNGD0LPQuNC8INC/0YDQtdC00L3QsNC30L3QsNGH0LXQvdC40LXQvCwg0YfQtdC8INC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOLiDQndCw0L/RgNC40LzQtdGALCDQstGLINC30LDRhdC+0YLQuNGC0LUg0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMINGB0L/QtdGG0LjQsNC70YzQvdGL0LUg0YHRgtC40LvQuCDQtNC70Y8g0YHQu9GD0YfQsNGPLCDQutC+0LPQtNCwINC90LDQtCDQstGL0LHRgNCw0L3QvdGL0LzQuCDRjdC70LXQvNC10L3RgtCw0LzQuCDQvdCw0YXQvtC00LjRgtGB0Y8g0LrRg9GA0YHQvtGAINC40LvQuCDQutC+0LPQtNCwINGC0LXQu9C+INGN0LvQtdC80LXQvdGC0LAg0LjQvNC10LXRgiDQvtC/0YDQtdC00LXQu9C10L3QvdGL0Lkg0LrQu9Cw0YHRgS4g0JIg0Y3RgtC40YUg0YHQu9GD0YfQsNGP0YUsINGBINC/0L7QvNC+0YnRjNGOINGB0LjQvNCy0L7Qu9CwICYg0LLRiyDQvNC+0LbQtdGC0LUg0Y/QstC90L4g0YPQutCw0LfQsNGC0YwsINCz0LTQtSDQtNC+0LvQttC10L0g0LHRi9GC0Ywg0LLRgdGC0LDQstC70LXQvSDRgNC+0LTQuNGC0LXQu9GM0YHQutC40Lkg0YHQtdC70LXQutGC0L7RgCwgXFxuICogICAg0L3QsNC/0YDQuNC80LXRgDpcXG4gKiAgICAqL1xcbiNtYWluIHtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuI21haW4tc2lkZWJhciB7XFxuICBib3JkZXI6IDFweCBzb2xpZDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNhc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FBSWhCO0VBQ0UseUNBQUE7RUFDQSwyREFBQTtFQUNBLDREQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUZGO0FBSUE7Ozs7O09BQUE7QUFPQTtFQUNFLGFBbkJNO0FBZ0JSOztBQUlBOzs7T0FBQTtBQUtBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSx3QkEzQlc7RUE2QlQseUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFHRjs7Ozs7TUFBQTtBQUFGO0FBRkU7RUFDRSx1QkFoQ2U7QUFvQ25CO0FBSUU7RUFFRSxVQUFBO0VBQ0UsaUJBQUE7QUFITjs7QUFLQTs7Ozs7O09BQUE7QUFRQTtFQUNFLFlBQUE7QUFIRjtBQUlFO0VBQ0UsaUJBQUE7QUFGSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkY29sb3I6IG9yYW5nZVxcbiRib2R5LWNvbG9yOiB5ZWxsb3dcXG4kYm9keS1jb2xvci1hZnRlcjogZ3JlZW5cXG5cXG5AZm9udC1mYWNlIFxcbiAgZm9udC1mYW1pbHk6ICdTYWlyYSBFeHRyYWNvbmRlbnNlZCBCbGFjaydcXG4gIHNyYzogdXJsKCcuL2ZvbnRzL3NhaXJhLWV4dHJhY29uZGVuc2VkLWJsYWNrLndvZmYnKSBmb3JtYXQoJ3dvZmYnKVxcbiAgc3JjOiB1cmwoJy4vZm9udHMvc2FpcmEtZXh0cmFjb25kZW5zZWQtYmxhY2sud29mZjInKSBmb3JtYXQoJ3dvZmYyJylcXG4gIGZvbnQtd2VpZ2h0OiA2MDBcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbFxcblxcbi8qIFxcbiAgICBTYXNzINC/0L7QtNC00LXRgNC20LjQstCw0LXRgiDRgdC/0LXRhtC40LDQu9GM0L3Ri9C5INGC0LjQvyDRgdC10LvQtdC60YLQvtGA0L7QsiDQv9C+0LQg0L3QsNC30LLQsNC90LjQtdC8INGI0LDQsdC70L7QvdC90YvQtSDRgdC10LvQtdC60YLQvtGA0YsuIFxcbiAgICAgINCe0L3QuCDQv9C+0YXQvtC20Lgg0L3QsCDRgdC10LvQtdC60YLQvtGA0Ysg0LrQu9Cw0YHRgdC+0LIg0Lgg0LjQtNC10L3RgtC40YTQuNC60LDRgtC+0YDQvtCyLCDRgtC+0LvRjNC60L4g0LLQvNC10YHRgtC+ICMg0LjQu9C4IC4g0YPQutCw0LfRi9Cy0LDQtdGC0YHRjyAlLiDQntC90Lgg0L/RgNC10LTQvdCw0LfQvdCw0YfQtdC90Ysg0LTQu9GPINC40YHQv9C+0LvRjNC30L7QstCw0L3QuNGPINGBINC00LjRgNC10LrRgtC40LLQvtC5IEBleHRlbmQuXFxuICAgICAg0JTQu9GPINC/0L7Qu9GD0YfQtdC90LjRjyDQtNC+0L/QvtC70L3QuNGC0LXQu9GM0L3QvtC5INC40L3RhNC+0YDQvNCw0YbQuNC4INGB0LwuINGB0LXQu9C10LrRgtC+0YDRiyDRgNCw0YHRiNC40YDQtdC90LjRjy5cXG4gICAgICDQodCw0LzQuCDQv9C+INGB0LXQsdC1LCDQsdC10Lcg0LjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40Y8gQGV4dGVuZCwg0L3QsNCx0L7RgNGLINC/0YDQsNCy0LjQuywg0LrQvtGC0L7RgNGL0LUg0LjRgdC/0L7Qu9GM0LfRg9GO0YJcXG4gICAgICDRiNCw0LHQu9C+0L3QvdGL0LUg0YHQtdC70LXQutGC0L7RgNGLLCDQvdC1INC+0LrQsNC20YPRgiDQstC70LjRj9C90LjRjyDQvdCwIENTUy4g0J3QsNC/0YDQuNC80LXRgDpcXG4gICAgICAqL1xcbiVmb3ItdGV4dCBcXG4gIGNvbG9yOiAkY29sb3JcXG4vKiBcXG4gICAgU2FzcyDQv9C+0LfQstC+0LvRj9C10YIg0LLQutC70LDQtNGL0LLQsNGC0Ywg0L/RgNCw0LLQuNC70LAgQ1NTINC00YDRg9CzINCyINC00YDRg9Cz0LAuIFxcbiAgICAgINCS0LvQvtC20LXQvdC90YvQtSDQv9GA0LDQstC40LvQsCDQv9GA0LjQvNC10L3Rj9GO0YLRgdGPINGC0L7Qu9GM0LrQviDQtNC70Y8g0Y3Qu9C10LzQtdC90YLQvtCyLCBcXG4gICAgICDRgdC+0L7RgtCy0LXRgtGB0YLQstGD0Y7RidC40YUg0LLQvdC10YjQvdC40Lwg0YHQtdC70LXQutGC0L7RgNCw0LwuINCd0LDQv9GA0LjQvNC10YA6XFxuICAgICAgKi9cXG5ib2R5IFxcbiAgd2lkdGg6IDEwMHZ3XFxuICBoZWlnaHQ6IDEwMHZoXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm9keS1jb2xvclxcbiAgZm9udDpcXG4gICAgZmFtaWx5OiAnU2FpcmEgRXh0cmFjb25kZW5zZWQgQmxhY2snXFxuICAgIHNpemU6IDEwZW1cXG4gICAgd2VpZ2h0OiA2MDBcXG4gICY6aG92ZXJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJvZHktY29sb3ItYWZ0ZXJcXG4gIC8qIFxcbiAgICBDU1Mg0LjQvNC10LXRgiDQtNC+0LLQvtC70YzQvdC+INC80L3QvtCz0L4g0YHQstC+0LnRgdGC0LIg0LIg0L/RgNC+0YHRgtGA0LDQvdGB0YLQstC1INC40LzQtdC9LCDQvdCw0L/RgNC40LzQtdGALCBmb250LWZhbWlseSwgZm9udC1zaXplINC4IGZvbnQtd2VpZ2h0INC90LDRhdC+0LTRj9GC0YHRjyDQsiDQv9GA0L7RgdGC0YDQsNC90YHRgtCy0LUg0LjQvNC10L0gZm9udC5cXG4gICAgICDQkiBDU1MsINC10YHQu9C4INCy0Ysg0YXQvtGC0LjRgtC1INGD0YHRgtCw0L3QvtCy0LjRgtGMINC90LDQsdC+0YAg0YHQstC+0LnRgdGC0LIg0LIg0L7QsdGJ0LXQvCDQv9GA0L7RgdGC0YDQsNC90YHRgtCy0LUg0LjQvNC10L0sINCy0YtcXG4gICAgICDQtNC+0LvQttC90Ysg0LLQstC+0LTQuNGC0Ywg0LXQs9C+INC60LDQttC00YvQuSDRgNCw0LcuIFNhc3Mg0YPQv9GA0L7RidCw0LXRgiDRjdGC0L7RgiDQv9GA0L7RhtC10YHRgTog0L/RgNC+0YHRgtC+INC90LDQv9C40YjQuNGC0LVcXG4gICAgICDQv9GA0L7RgdGC0YDQsNC90YHRgtCy0L4g0LjQvNC10L0g0LXQtNC40L3QvtC20LTRiywg0LAg0LLQvdGD0YLRgNC4INCy0Ysg0LzQvtC20LXRgtC1INCy0L/QuNGB0LDRgtGMINC70Y7QsdC+0LUg0LjQtyDQstGC0L7RgNC40YfQvdGL0YVcXG4gICAgICDRgdCy0L7QudGB0YLQsi4g0J3QsNC/0YDQuNC80LXRgDpcXG4gICAgICAqL1xcbiAgLmhlbGxvIFxcbiAgICBAZXh0ZW5kICVmb3ItdGV4dFxcbiAgICBmb250OiAxNnB4XFxuICAgICAgd2VpZ2h0OiBib2xkXFxuICAgIC8vYmFja2dyb3VuZDogdXJsKCcuL2Zhdmljb24uaWNvJylcXG4vKiBcXG4gICAg0JjQvdC+0LPQtNCwINC/0L7Qu9C10LfQvdC+INC40YHQv9C+0LvRjNC30L7QstCw0YLRjCDRgNC+0LTQuNGC0LXQu9GM0YHQutC40Lkg0YHQtdC70LXQutGC0L7RgCDRgSDQtNGA0YPQs9C40Lwg0L/RgNC10LTQvdCw0LfQvdCw0YfQtdC90LjQtdC8LCDRh9C10Lwg0L/QviDRg9C80L7Qu9GH0LDQvdC40Y4uIFxcbiAgICAgINCd0LDQv9GA0LjQvNC10YAsINCy0Ysg0LfQsNGF0L7RgtC40YLQtSDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0YHQv9C10YbQuNCw0LvRjNC90YvQtSDRgdGC0LjQu9C4INC00LvRjyDRgdC70YPRh9Cw0Y8sXFxuICAgICAg0LrQvtCz0LTQsCDQvdCw0LQg0LLRi9Cx0YDQsNC90L3Ri9C80Lgg0Y3Qu9C10LzQtdC90YLQsNC80Lgg0L3QsNGF0L7QtNC40YLRgdGPINC60YPRgNGB0L7RgCDQuNC70Lgg0LrQvtCz0LTQsCDRgtC10LvQviDRjdC70LXQvNC10L3RgtCwINC40LzQtdC10YJcXG4gICAgICDQvtC/0YDQtdC00LXQu9C10L3QvdGL0Lkg0LrQu9Cw0YHRgS4g0JIg0Y3RgtC40YUg0YHQu9GD0YfQsNGP0YUsINGBINC/0L7QvNC+0YnRjNGOINGB0LjQvNCy0L7Qu9CwICYg0LLRiyDQvNC+0LbQtdGC0LUg0Y/QstC90L4g0YPQutCw0LfQsNGC0YwsXFxuICAgICAg0JjQvdC+0LPQtNCwINC/0L7Qu9C10LfQvdC+INC40YHQv9C+0LvRjNC30L7QstCw0YLRjCDRgNC+0LTQuNGC0LXQu9GM0YHQutC40Lkg0YHQtdC70LXQutGC0L7RgCDRgSDQtNGA0YPQs9C40Lwg0L/RgNC10LTQvdCw0LfQvdCw0YfQtdC90LjQtdC8LCDRh9C10Lwg0L/QviDRg9C80L7Qu9GH0LDQvdC40Y4uINCd0LDQv9GA0LjQvNC10YAsINCy0Ysg0LfQsNGF0L7RgtC40YLQtSDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0YHQv9C10YbQuNCw0LvRjNC90YvQtSDRgdGC0LjQu9C4INC00LvRjyDRgdC70YPRh9Cw0Y8sINC60L7Qs9C00LAg0L3QsNC0INCy0YvQsdGA0LDQvdC90YvQvNC4INGN0LvQtdC80LXQvdGC0LDQvNC4INC90LDRhdC+0LTQuNGC0YHRjyDQutGD0YDRgdC+0YAg0LjQu9C4INC60L7Qs9C00LAg0YLQtdC70L4g0Y3Qu9C10LzQtdC90YLQsCDQuNC80LXQtdGCINC+0L/RgNC10LTQtdC70LXQvdC90YvQuSDQutC70LDRgdGBLiDQkiDRjdGC0LjRhSDRgdC70YPRh9Cw0Y/RhSwg0YEg0L/QvtC80L7RidGM0Y4g0YHQuNC80LLQvtC70LAgJiDQstGLINC80L7QttC10YLQtSDRj9Cy0L3QviDRg9C60LDQt9Cw0YLRjCwg0LPQtNC1INC00L7Qu9C20LXQvSDQsdGL0YLRjCDQstGB0YLQsNCy0LvQtdC9INGA0L7QtNC40YLQtdC70YzRgdC60LjQuSDRgdC10LvQtdC60YLQvtGALCBcXG4gICAgICDQvdCw0L/RgNC40LzQtdGAOlxcbiAgICAgICovXFxuI21haW4gXFxuICBjb2xvcjogYmxhY2tcXG4gICYtc2lkZWJhciBcXG4gICAgYm9yZGVyOiAxcHggc29saWRcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8ZGl2IGlkPVxcXCJibG9ja1xcXCI+XFxuICBoaSBpJ20gYmxvY2tcXG48L2Rpdj5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zYXNzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Fzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiXSwibmFtZXMiOlsiXyIsInByaW50TWUiLCJJY29uIiwiYmxvY2tIVE1MIiwiYWxlcnQiLCJjb21wb25lbnQiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiam9pbiIsImNsYXNzTGlzdCIsImFkZCIsIm15SWNvbiIsIkltYWdlIiwic3JjIiwib25jbGljayIsImFwcGVuZENoaWxkIiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=