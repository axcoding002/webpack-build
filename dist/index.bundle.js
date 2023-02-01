"use strict";
(self["webpackChunkwebpack"] = self["webpackChunkwebpack"] || []).push([["index"],{

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



// import './style.css';
// import "./style.less";
// import "./style.scss";


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2svLi9zcmMvcHJpbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL3NyYy9zdHlsZS5zYXNzIiwid2VicGFjazovL3dlYnBhY2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYnBhY2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vc3JjL3N0eWxlLnNhc3M/ZThmMiIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgcHJpbnRNZSBmcm9tICcuL3ByaW50LmpzJztcbmltcG9ydCBJY29uIGZyb20gJy4vZmF2aWNvbi5pY28nO1xuLy8gaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG4vLyBpbXBvcnQgXCIuL3N0eWxlLmxlc3NcIjtcbi8vIGltcG9ydCBcIi4vc3R5bGUuc2Nzc1wiO1xuaW1wb3J0IFwiLi9zdHlsZS5zYXNzXCI7XG5cblxuLypcbmltcG9ydCBEYXRhIGZyb20gJy4vZGF0YS54bWwnO1xuYWxlcnQoRGF0YSk7XG5pbXBvcnQgTm90ZXMgZnJvbSAnLi9kYXRhLmNzdic7XG5hbGVydChOb3Rlcyk7XG5cbi8vIE5vIHdhcm5pbmdcbmltcG9ydCBkYXRhIGZyb20gJy4vZGF0YS5qc29uJztcbi8vIFdhcm5pbmcgc2hvd24sIHRoaXMgaXMgbm90IGFsbG93ZWQgYnkgdGhlIHNwZWMuXG5pbXBvcnQgeyBmb28gfSBmcm9tICcuL2RhdGEuanNvbic7XG5cbmltcG9ydCB0b21sIGZyb20gJy4vZGF0YS50b21sJztcbmFsZXJ0KHRvbWwudGl0bGUpOyAvLyBvdXRwdXQgYFRPTUwgRXhhbXBsZWBcbmFsZXJ0KHRvbWwub3duZXIubmFtZSk7IC8vIG91dHB1dCBgVG9tIFByZXN0b24tV2VybmVyYFxuXG5pbXBvcnQgeWFtbCBmcm9tICcuL2RhdGEueWFtbCc7XG5hbGVydCh5YW1sLnRpdGxlKTsgLy8gb3V0cHV0IGBZQU1MIEV4YW1wbGVgXG5hbGVydCh5YW1sLm93bmVyLm5hbWUpOyAvLyBvdXRwdXQgYFRvbSBQcmVzdG9uLVdlcm5lcmBcblxuaW1wb3J0IGpzb24gZnJvbSAnLi9kYXRhLmpzb241JztcbmFsZXJ0KGpzb24udGl0bGUpOyAvLyBvdXRwdXQgYEpTT041IEV4YW1wbGVgXG5hbGVydChqc29uLm93bmVyLm5hbWUpOyAvLyBvdXRwdXQgYFRvbSBQcmVzdG9uLVdlcm5lcmBcbiovXG5cbmZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAvLyBMb2Rhc2gsIG5vdyBpbXBvcnRlZCBieSB0aGlzIHNjcmlwdFxuICBlbGVtZW50LmlubmVySFRNTCA9IF8uam9pbihbJ0hlbGxvJywgJ3dlYnBhY2snXSwgJyAnKTtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoZWxsbycpO1xuICBcbiAgLy8gQWRkIHRoZSBpbWFnZSB0byBvdXIgZXhpc3RpbmcgZGl2LlxuICBjb25zdCBteUljb24gPSBuZXcgSW1hZ2UoKTtcbiAgbXlJY29uLnNyYyA9IEljb247XG4gIFxuICBteUljb24ub25jbGljayA9IHByaW50TWU7XG5cbiAgZWxlbWVudC5hcHBlbmRDaGlsZChteUljb24pO1xuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTsiLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmludE1lKCkge1xuICBhbGVydCgnSSBnZXQgY2FsbGVkIGZyb20gcHJpbnQuanMhJyk7XG59IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvc2FpcmEtZXh0cmFjb25kZW5zZWQtYmxhY2sud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udHMvc2FpcmEtZXh0cmFjb25kZW5zZWQtYmxhY2sud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2FpcmEgRXh0cmFjb25kZW5zZWQgQmxhY2tcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbi8qICBTYXNzINC/0L7QtNC00LXRgNC20LjQstCw0LXRgiDRgdC/0LXRhtC40LDQu9GM0L3Ri9C5INGC0LjQvyDRgdC10LvQtdC60YLQvtGA0L7QsiDQv9C+0LQg0L3QsNC30LLQsNC90LjQtdC8INGI0LDQsdC70L7QvdC90YvQtSDRgdC10LvQtdC60YLQvtGA0YsuIFxcbiAqICAgINCe0L3QuCDQv9C+0YXQvtC20Lgg0L3QsCDRgdC10LvQtdC60YLQvtGA0Ysg0LrQu9Cw0YHRgdC+0LIg0Lgg0LjQtNC10L3RgtC40YTQuNC60LDRgtC+0YDQvtCyLCDRgtC+0LvRjNC60L4g0LLQvNC10YHRgtC+ICMg0LjQu9C4IC4g0YPQutCw0LfRi9Cy0LDQtdGC0YHRjyAlLiDQntC90Lgg0L/RgNC10LTQvdCw0LfQvdCw0YfQtdC90Ysg0LTQu9GPINC40YHQv9C+0LvRjNC30L7QstCw0L3QuNGPINGBINC00LjRgNC10LrRgtC40LLQvtC5IEBleHRlbmQuXFxuICogICAg0JTQu9GPINC/0L7Qu9GD0YfQtdC90LjRjyDQtNC+0L/QvtC70L3QuNGC0LXQu9GM0L3QvtC5INC40L3RhNC+0YDQvNCw0YbQuNC4INGB0LwuINGB0LXQu9C10LrRgtC+0YDRiyDRgNCw0YHRiNC40YDQtdC90LjRjy5cXG4gKiAgICDQodCw0LzQuCDQv9C+INGB0LXQsdC1LCDQsdC10Lcg0LjRgdC/0L7Qu9GM0LfQvtCy0LDQvdC40Y8gQGV4dGVuZCwg0L3QsNCx0L7RgNGLINC/0YDQsNCy0LjQuywg0LrQvtGC0L7RgNGL0LUg0LjRgdC/0L7Qu9GM0LfRg9GO0YJcXG4gKiAgICDRiNCw0LHQu9C+0L3QvdGL0LUg0YHQtdC70LXQutGC0L7RgNGLLCDQvdC1INC+0LrQsNC20YPRgiDQstC70LjRj9C90LjRjyDQvdCwIENTUy4g0J3QsNC/0YDQuNC80LXRgDpcXG4gKiAgICAqL1xcbmJvZHkgLmhlbGxvIHtcXG4gIGNvbG9yOiBvcmFuZ2U7XFxufVxcblxcbi8qICBTYXNzINC/0L7Qt9Cy0L7Qu9GP0LXRgiDQstC60LvQsNC00YvQstCw0YLRjCDQv9GA0LDQstC40LvQsCBDU1Mg0LTRgNGD0LMg0LIg0LTRgNGD0LPQsC4gXFxuICogICAg0JLQu9C+0LbQtdC90L3Ri9C1INC/0YDQsNCy0LjQu9CwINC/0YDQuNC80LXQvdGP0Y7RgtGB0Y8g0YLQvtC70YzQutC+INC00LvRjyDRjdC70LXQvNC10L3RgtC+0LIsIFxcbiAqICAgINGB0L7QvtGC0LLQtdGC0YHRgtCy0YPRjtGJ0LjRhSDQstC90LXRiNC90LjQvCDRgdC10LvQtdC60YLQvtGA0LDQvC4g0J3QsNC/0YDQuNC80LXRgDpcXG4gKiAgICAqL1xcbmJvZHkge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2FpcmEgRXh0cmFjb25kZW5zZWQgQmxhY2tcXFwiO1xcbiAgZm9udC1zaXplOiAxMGVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIC8qIENTUyDQuNC80LXQtdGCINC00L7QstC+0LvRjNC90L4g0LzQvdC+0LPQviDRgdCy0L7QudGB0YLQsiDQsiDQv9GA0L7RgdGC0YDQsNC90YHRgtCy0LUg0LjQvNC10L0sINC90LDQv9GA0LjQvNC10YAsIGZvbnQtZmFtaWx5LCBmb250LXNpemUg0LggZm9udC13ZWlnaHQg0L3QsNGF0L7QtNGP0YLRgdGPINCyINC/0YDQvtGB0YLRgNCw0L3RgdGC0LLQtSDQuNC80LXQvSBmb250LlxcbiAgKiAg0JIgQ1NTLCDQtdGB0LvQuCDQstGLINGF0L7RgtC40YLQtSDRg9GB0YLQsNC90L7QstC40YLRjCDQvdCw0LHQvtGAINGB0LLQvtC50YHRgtCyINCyINC+0LHRidC10Lwg0L/RgNC+0YHRgtGA0LDQvdGB0YLQstC1INC40LzQtdC9LCDQstGLXFxuICAqICDQtNC+0LvQttC90Ysg0LLQstC+0LTQuNGC0Ywg0LXQs9C+INC60LDQttC00YvQuSDRgNCw0LcuIFNhc3Mg0YPQv9GA0L7RidCw0LXRgiDRjdGC0L7RgiDQv9GA0L7RhtC10YHRgTog0L/RgNC+0YHRgtC+INC90LDQv9C40YjQuNGC0LVcXG4gICogINC/0YDQvtGB0YLRgNCw0L3RgdGC0LLQviDQuNC80LXQvSDQtdC00LjQvdC+0LbQtNGLLCDQsCDQstC90YPRgtGA0Lgg0LLRiyDQvNC+0LbQtdGC0LUg0LLQv9C40YHQsNGC0Ywg0LvRjtCx0L7QtSDQuNC3INCy0YLQvtGA0LjRh9C90YvRhVxcbiAgKiAg0YHQstC+0LnRgdGC0LIuINCd0LDQv9GA0LjQvNC10YA6XFxuICAqICAqL1xcbn1cXG5ib2R5OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5ib2R5IC5oZWxsbyB7XFxuICBmb250OiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi8qICDQmNC90L7Qs9C00LAg0L/QvtC70LXQt9C90L4g0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMINGA0L7QtNC40YLQtdC70YzRgdC60LjQuSDRgdC10LvQtdC60YLQvtGAINGBINC00YDRg9Cz0LjQvCDQv9GA0LXQtNC90LDQt9C90LDRh9C10L3QuNC10LwsINGH0LXQvCDQv9C+INGD0LzQvtC70YfQsNC90LjRji4gXFxuICogICAg0J3QsNC/0YDQuNC80LXRgCwg0LLRiyDQt9Cw0YXQvtGC0LjRgtC1INC40YHQv9C+0LvRjNC30L7QstCw0YLRjCDRgdC/0LXRhtC40LDQu9GM0L3Ri9C1INGB0YLQuNC70Lgg0LTQu9GPINGB0LvRg9GH0LDRjyxcXG4gKiAgICDQutC+0LPQtNCwINC90LDQtCDQstGL0LHRgNCw0L3QvdGL0LzQuCDRjdC70LXQvNC10L3RgtCw0LzQuCDQvdCw0YXQvtC00LjRgtGB0Y8g0LrRg9GA0YHQvtGAINC40LvQuCDQutC+0LPQtNCwINGC0LXQu9C+INGN0LvQtdC80LXQvdGC0LAg0LjQvNC10LXRglxcbiAqICAgINC+0L/RgNC10LTQtdC70LXQvdC90YvQuSDQutC70LDRgdGBLiDQkiDRjdGC0LjRhSDRgdC70YPRh9Cw0Y/RhSwg0YEg0L/QvtC80L7RidGM0Y4g0YHQuNC80LLQvtC70LAgJiDQstGLINC80L7QttC10YLQtSDRj9Cy0L3QviDRg9C60LDQt9Cw0YLRjCxcXG4gKiAgICDQmNC90L7Qs9C00LAg0L/QvtC70LXQt9C90L4g0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMINGA0L7QtNC40YLQtdC70YzRgdC60LjQuSDRgdC10LvQtdC60YLQvtGAINGBINC00YDRg9Cz0LjQvCDQv9GA0LXQtNC90LDQt9C90LDRh9C10L3QuNC10LwsINGH0LXQvCDQv9C+INGD0LzQvtC70YfQsNC90LjRji4g0J3QsNC/0YDQuNC80LXRgCwg0LLRiyDQt9Cw0YXQvtGC0LjRgtC1INC40YHQv9C+0LvRjNC30L7QstCw0YLRjCDRgdC/0LXRhtC40LDQu9GM0L3Ri9C1INGB0YLQuNC70Lgg0LTQu9GPINGB0LvRg9GH0LDRjywg0LrQvtCz0LTQsCDQvdCw0LQg0LLRi9Cx0YDQsNC90L3Ri9C80Lgg0Y3Qu9C10LzQtdC90YLQsNC80Lgg0L3QsNGF0L7QtNC40YLRgdGPINC60YPRgNGB0L7RgCDQuNC70Lgg0LrQvtCz0LTQsCDRgtC10LvQviDRjdC70LXQvNC10L3RgtCwINC40LzQtdC10YIg0L7Qv9GA0LXQtNC10LvQtdC90L3Ri9C5INC60LvQsNGB0YEuINCSINGN0YLQuNGFINGB0LvRg9GH0LDRj9GFLCDRgSDQv9C+0LzQvtGJ0YzRjiDRgdC40LzQstC+0LvQsCAmINCy0Ysg0LzQvtC20LXRgtC1INGP0LLQvdC+INGD0LrQsNC30LDRgtGMLCDQs9C00LUg0LTQvtC70LbQtdC9INCx0YvRgtGMINCy0YHRgtCw0LLQu9C10L0g0YDQvtC00LjRgtC10LvRjNGB0LrQuNC5INGB0LXQu9C10LrRgtC+0YAsIFxcbiAqICAgINC90LDQv9GA0LjQvNC10YA6XFxuICogICAgKi9cXG4jbWFpbiB7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbiNtYWluLXNpZGViYXIge1xcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zYXNzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdCQUFnQjtBQUloQjtFQUNFLHlDQUFBO0VBQ0EsMkRBQUE7RUFDQSw0REFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFGRjtBQUlBOzs7OztPQUFBO0FBT0E7RUFDRSxhQW5CTTtBQWdCUjs7QUFJQTs7O09BQUE7QUFLQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBM0JXO0VBNkJULHlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBR0Y7Ozs7O01BQUE7QUFBRjtBQUZFO0VBQ0UsdUJBaENlO0FBb0NuQjtBQUlFO0VBRUUsVUFBQTtFQUNFLGlCQUFBO0FBSE47O0FBS0E7Ozs7OztPQUFBO0FBUUE7RUFDRSxZQUFBO0FBSEY7QUFJRTtFQUNFLGlCQUFBO0FBRkpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJGNvbG9yOiBvcmFuZ2VcXG4kYm9keS1jb2xvcjogeWVsbG93XFxuJGJvZHktY29sb3ItYWZ0ZXI6IGdyZWVuXFxuXFxuQGZvbnQtZmFjZSBcXG4gIGZvbnQtZmFtaWx5OiAnU2FpcmEgRXh0cmFjb25kZW5zZWQgQmxhY2snXFxuICBzcmM6IHVybCgnLi9mb250cy9zYWlyYS1leHRyYWNvbmRlbnNlZC1ibGFjay53b2ZmJykgZm9ybWF0KCd3b2ZmJylcXG4gIHNyYzogdXJsKCcuL2ZvbnRzL3NhaXJhLWV4dHJhY29uZGVuc2VkLWJsYWNrLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpXFxuICBmb250LXdlaWdodDogNjAwXFxuICBmb250LXN0eWxlOiBub3JtYWxcXG5cXG4vKiBcXG4gICAgU2FzcyDQv9C+0LTQtNC10YDQttC40LLQsNC10YIg0YHQv9C10YbQuNCw0LvRjNC90YvQuSDRgtC40L8g0YHQtdC70LXQutGC0L7RgNC+0LIg0L/QvtC0INC90LDQt9Cy0LDQvdC40LXQvCDRiNCw0LHQu9C+0L3QvdGL0LUg0YHQtdC70LXQutGC0L7RgNGLLiBcXG4gICAgICDQntC90Lgg0L/QvtGF0L7QttC4INC90LAg0YHQtdC70LXQutGC0L7RgNGLINC60LvQsNGB0YHQvtCyINC4INC40LTQtdC90YLQuNGE0LjQutCw0YLQvtGA0L7Qsiwg0YLQvtC70YzQutC+INCy0LzQtdGB0YLQviAjINC40LvQuCAuINGD0LrQsNC30YvQstCw0LXRgtGB0Y8gJS4g0J7QvdC4INC/0YDQtdC00L3QsNC30L3QsNGH0LXQvdGLINC00LvRjyDQuNGB0L/QvtC70YzQt9C+0LLQsNC90LjRjyDRgSDQtNC40YDQtdC60YLQuNCy0L7QuSBAZXh0ZW5kLlxcbiAgICAgINCU0LvRjyDQv9C+0LvRg9GH0LXQvdC40Y8g0LTQvtC/0L7Qu9C90LjRgtC10LvRjNC90L7QuSDQuNC90YTQvtGA0LzQsNGG0LjQuCDRgdC8LiDRgdC10LvQtdC60YLQvtGA0Ysg0YDQsNGB0YjQuNGA0LXQvdC40Y8uXFxuICAgICAg0KHQsNC80Lgg0L/QviDRgdC10LHQtSwg0LHQtdC3INC40YHQv9C+0LvRjNC30L7QstCw0L3QuNGPIEBleHRlbmQsINC90LDQsdC+0YDRiyDQv9GA0LDQstC40LssINC60L7RgtC+0YDRi9C1INC40YHQv9C+0LvRjNC30YPRjtGCXFxuICAgICAg0YjQsNCx0LvQvtC90L3Ri9C1INGB0LXQu9C10LrRgtC+0YDRiywg0L3QtSDQvtC60LDQttGD0YIg0LLQu9C40Y/QvdC40Y8g0L3QsCBDU1MuINCd0LDQv9GA0LjQvNC10YA6XFxuICAgICAgKi9cXG4lZm9yLXRleHQgXFxuICBjb2xvcjogJGNvbG9yXFxuLyogXFxuICAgIFNhc3Mg0L/QvtC30LLQvtC70Y/QtdGCINCy0LrQu9Cw0LTRi9Cy0LDRgtGMINC/0YDQsNCy0LjQu9CwIENTUyDQtNGA0YPQsyDQsiDQtNGA0YPQs9CwLiBcXG4gICAgICDQktC70L7QttC10L3QvdGL0LUg0L/RgNCw0LLQuNC70LAg0L/RgNC40LzQtdC90Y/RjtGC0YHRjyDRgtC+0LvRjNC60L4g0LTQu9GPINGN0LvQtdC80LXQvdGC0L7QsiwgXFxuICAgICAg0YHQvtC+0YLQstC10YLRgdGC0LLRg9GO0YnQuNGFINCy0L3QtdGI0L3QuNC8INGB0LXQu9C10LrRgtC+0YDQsNC8LiDQndCw0L/RgNC40LzQtdGAOlxcbiAgICAgICovXFxuYm9keSBcXG4gIHdpZHRoOiAxMDB2d1xcbiAgaGVpZ2h0OiAxMDB2aFxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJvZHktY29sb3JcXG4gIGZvbnQ6XFxuICAgIGZhbWlseTogJ1NhaXJhIEV4dHJhY29uZGVuc2VkIEJsYWNrJ1xcbiAgICBzaXplOiAxMGVtXFxuICAgIHdlaWdodDogNjAwXFxuICAmOmhvdmVyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRib2R5LWNvbG9yLWFmdGVyXFxuICAvKiBcXG4gICAgQ1NTINC40LzQtdC10YIg0LTQvtCy0L7Qu9GM0L3QviDQvNC90L7Qs9C+INGB0LLQvtC50YHRgtCyINCyINC/0YDQvtGB0YLRgNCw0L3RgdGC0LLQtSDQuNC80LXQvSwg0L3QsNC/0YDQuNC80LXRgCwgZm9udC1mYW1pbHksIGZvbnQtc2l6ZSDQuCBmb250LXdlaWdodCDQvdCw0YXQvtC00Y/RgtGB0Y8g0LIg0L/RgNC+0YHRgtGA0LDQvdGB0YLQstC1INC40LzQtdC9IGZvbnQuXFxuICAgICAg0JIgQ1NTLCDQtdGB0LvQuCDQstGLINGF0L7RgtC40YLQtSDRg9GB0YLQsNC90L7QstC40YLRjCDQvdCw0LHQvtGAINGB0LLQvtC50YHRgtCyINCyINC+0LHRidC10Lwg0L/RgNC+0YHRgtGA0LDQvdGB0YLQstC1INC40LzQtdC9LCDQstGLXFxuICAgICAg0LTQvtC70LbQvdGLINCy0LLQvtC00LjRgtGMINC10LPQviDQutCw0LbQtNGL0Lkg0YDQsNC3LiBTYXNzINGD0L/RgNC+0YnQsNC10YIg0Y3RgtC+0YIg0L/RgNC+0YbQtdGB0YE6INC/0YDQvtGB0YLQviDQvdCw0L/QuNGI0LjRgtC1XFxuICAgICAg0L/RgNC+0YHRgtGA0LDQvdGB0YLQstC+INC40LzQtdC9INC10LTQuNC90L7QttC00YssINCwINCy0L3Rg9GC0YDQuCDQstGLINC80L7QttC10YLQtSDQstC/0LjRgdCw0YLRjCDQu9GO0LHQvtC1INC40Lcg0LLRgtC+0YDQuNGH0L3Ri9GFXFxuICAgICAg0YHQstC+0LnRgdGC0LIuINCd0LDQv9GA0LjQvNC10YA6XFxuICAgICAgKi9cXG4gIC5oZWxsbyBcXG4gICAgQGV4dGVuZCAlZm9yLXRleHRcXG4gICAgZm9udDogMTZweFxcbiAgICAgIHdlaWdodDogYm9sZFxcbiAgICAvL2JhY2tncm91bmQ6IHVybCgnLi9mYXZpY29uLmljbycpXFxuLyogXFxuICAgINCY0L3QvtCz0LTQsCDQv9C+0LvQtdC30L3QviDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0YDQvtC00LjRgtC10LvRjNGB0LrQuNC5INGB0LXQu9C10LrRgtC+0YAg0YEg0LTRgNGD0LPQuNC8INC/0YDQtdC00L3QsNC30L3QsNGH0LXQvdC40LXQvCwg0YfQtdC8INC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOLiBcXG4gICAgICDQndCw0L/RgNC40LzQtdGALCDQstGLINC30LDRhdC+0YLQuNGC0LUg0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMINGB0L/QtdGG0LjQsNC70YzQvdGL0LUg0YHRgtC40LvQuCDQtNC70Y8g0YHQu9GD0YfQsNGPLFxcbiAgICAgINC60L7Qs9C00LAg0L3QsNC0INCy0YvQsdGA0LDQvdC90YvQvNC4INGN0LvQtdC80LXQvdGC0LDQvNC4INC90LDRhdC+0LTQuNGC0YHRjyDQutGD0YDRgdC+0YAg0LjQu9C4INC60L7Qs9C00LAg0YLQtdC70L4g0Y3Qu9C10LzQtdC90YLQsCDQuNC80LXQtdGCXFxuICAgICAg0L7Qv9GA0LXQtNC10LvQtdC90L3Ri9C5INC60LvQsNGB0YEuINCSINGN0YLQuNGFINGB0LvRg9GH0LDRj9GFLCDRgSDQv9C+0LzQvtGJ0YzRjiDRgdC40LzQstC+0LvQsCAmINCy0Ysg0LzQvtC20LXRgtC1INGP0LLQvdC+INGD0LrQsNC30LDRgtGMLFxcbiAgICAgINCY0L3QvtCz0LTQsCDQv9C+0LvQtdC30L3QviDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0YDQvtC00LjRgtC10LvRjNGB0LrQuNC5INGB0LXQu9C10LrRgtC+0YAg0YEg0LTRgNGD0LPQuNC8INC/0YDQtdC00L3QsNC30L3QsNGH0LXQvdC40LXQvCwg0YfQtdC8INC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOLiDQndCw0L/RgNC40LzQtdGALCDQstGLINC30LDRhdC+0YLQuNGC0LUg0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMINGB0L/QtdGG0LjQsNC70YzQvdGL0LUg0YHRgtC40LvQuCDQtNC70Y8g0YHQu9GD0YfQsNGPLCDQutC+0LPQtNCwINC90LDQtCDQstGL0LHRgNCw0L3QvdGL0LzQuCDRjdC70LXQvNC10L3RgtCw0LzQuCDQvdCw0YXQvtC00LjRgtGB0Y8g0LrRg9GA0YHQvtGAINC40LvQuCDQutC+0LPQtNCwINGC0LXQu9C+INGN0LvQtdC80LXQvdGC0LAg0LjQvNC10LXRgiDQvtC/0YDQtdC00LXQu9C10L3QvdGL0Lkg0LrQu9Cw0YHRgS4g0JIg0Y3RgtC40YUg0YHQu9GD0YfQsNGP0YUsINGBINC/0L7QvNC+0YnRjNGOINGB0LjQvNCy0L7Qu9CwICYg0LLRiyDQvNC+0LbQtdGC0LUg0Y/QstC90L4g0YPQutCw0LfQsNGC0YwsINCz0LTQtSDQtNC+0LvQttC10L0g0LHRi9GC0Ywg0LLRgdGC0LDQstC70LXQvSDRgNC+0LTQuNGC0LXQu9GM0YHQutC40Lkg0YHQtdC70LXQutGC0L7RgCwgXFxuICAgICAg0L3QsNC/0YDQuNC80LXRgDpcXG4gICAgICAqL1xcbiNtYWluIFxcbiAgY29sb3I6IGJsYWNrXFxuICAmLXNpZGViYXIgXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zYXNzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Fzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiXSwibmFtZXMiOlsiXyIsInByaW50TWUiLCJJY29uIiwiY29tcG9uZW50IiwiZWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImpvaW4iLCJjbGFzc0xpc3QiLCJhZGQiLCJteUljb24iLCJJbWFnZSIsInNyYyIsIm9uY2xpY2siLCJhcHBlbmRDaGlsZCIsImJvZHkiLCJhbGVydCJdLCJzb3VyY2VSb290IjoiIn0=