/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    font-family: Arial, Helvetica, sans-serif;\n}\n\nhtml,\nbody{\n    height: 88%;\n    background-color: rgb(170, 240, 216);\n}\n\nnav{\n    background-color: rgb(211, 211, 211);\n    margin-bottom: 10px;\n    display: flex;\n}\n\nnav h1{\n    text-shadow: 0 0 2px #000;\n    color: white;\n    margin: 0;\n    margin-left: auto;\n    margin-right: 15%;\n    font-size: 40px;\n}\n\nnav button{\n    background-color: none;\n    border-style: none;\n    height: 50px;\n    width: 15%;\n    font-size: large;\n}\n\n/*Whiteboard*/\n\n.wbTop{\n    display: flex;\n    height: 20px;\n    align-items: center;\n    justify-content: space-between;\n    background-color: rgb(199, 194, 194);\n    margin-left: -10px;\n    margin-right: -10px;\n}\n\n.wbTopCorner{\n    width: 70px;\n    height: 30px;\n    background-color: grey;\n    border-radius: 10px;\n}\n\n.wbBottomCorner{\n    width: 70px;\n    height: 30px;\n    background-color: grey;\n    border-radius: 10px;\n}\n\n#wbCenter{\n    background-color: white;\n    display: flex;\n    height: 100%;\n    justify-content: space-between;\n}\n\n#canvas{\n    padding: 20px;\n    flex: 1;\n    display: flex;\n    gap: 20px;\n    width: 65%;\n    margin-left: auto;\n    margin-right: auto;\n    height: 100%;\n}\n\n.wbLateral{\n    margin-left: -5px;\n    margin-right: -5px;\n    background-color: rgb(199, 194, 194);\n    width: 20px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n.wbLateralTop,\n.wbLateralBottom{\n    width: 30px;\n    height: 40px;\n    align-self: center;\n    background-color: grey;\n    border-radius: 10px;\n}\n\n.wbLateralTop{\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n}\n\n.wbLateralBottom{\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n}\n\n.postIt{\n    background-color: rgb(243, 243, 92);\n    width: 10%;\n    font-weight: bold;\n    height: 20%;\n}\n\n#canvas h5{\n    text-align: center;\n    margin-top: 0;\n    background-color: rgb(240, 240, 41);\n    height: 30%;\n    margin-bottom: 0;\n}\n\n#tkCont{\n    margin-top: 0;\n    height: 80%;\n    box-shadow: 3px 6px 7px black;\n}\n\n.postIt ul{\n    padding-top: 5%;\n    margin-top: 0;\n    font-weight: 100;\n}\n\n#whiteboard{\n    margin-left: 15px;\n    margin-right: 15px;\n    height: 100%;\n}\n\n/*Post It View*/\n\n#PView{\n    background-color: rgb(243, 243, 92);\n    width: 50%;\n    display: flex;\n    flex-direction: column;\n    margin-left: auto;\n    margin-right: auto;\n    font-size: 40px;\n    height: 90%;\n}\n\n#topPView{\n    display: flex;\n    background-color: rgb(240, 240, 41);\n    width: 100%;\n    margin-bottom: 15px;\n}\n\n#titlePView{\n    margin-left: auto;\n    margin-right: auto;\n    font-weight: bold;\n    align-self: center;\n}\n\n#rmvPView{\n    font-size: 40px;\n    margin-right: 15px;\n    color: rgb(189, 189, 0);\n    background-color: transparent;\n    margin-left: auto;\n    border-style: none;\n}\n\n.taskPView{\n    margin-left: 10%;\n}\n\n/*Add PostIt*/\n\n#formContainer{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#addTitle{\n    font-size: large;\n    height: 30px;\n    margin-bottom: 20px;\n    border: 2px gray solid;\n}\n\n.addTask{\n    font-size: large;\n    height: 30px;\n    border: none;\n    border-bottom: 2px solid black;\n    margin-right: 15px;\n    margin-bottom: 10px;\n}\n\n.btnDelete{\n    font-size: large;\n    border: none;\n    background-color: red;\n    font-weight: bold;\n}\n\nlabel{\n    display: none;\n}\n\n#btnAddTask{\n    width: 20%;\n    font-size: large;\n    margin-bottom: 20px;\n}\n\n#btnStickPostIt{\n    width: 20%;\n    font-size: large;\n    background-color: rgb(87, 139, 87);\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,yCAAyC;AAC7C;;AAEA;;IAEI,WAAW;IACX,oCAAoC;AACxC;;AAEA;IACI,oCAAoC;IACpC,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,SAAS;IACT,iBAAiB;IACjB,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,YAAY;IACZ,UAAU;IACV,gBAAgB;AACpB;;AAEA,aAAa;;AAEb;IACI,aAAa;IACb,YAAY;IACZ,mBAAmB;IACnB,8BAA8B;IAC9B,oCAAoC;IACpC,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,YAAY;IACZ,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,OAAO;IACP,aAAa;IACb,SAAS;IACT,UAAU;IACV,iBAAiB;IACjB,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,oCAAoC;IACpC,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,8BAA8B;AAClC;;AAEA;;IAEI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;IACzB,0BAA0B;AAC9B;;AAEA;IACI,4BAA4B;IAC5B,6BAA6B;AACjC;;AAEA;IACI,mCAAmC;IACnC,UAAU;IACV,iBAAiB;IACjB,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,mCAAmC;IACnC,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,6BAA6B;AACjC;;AAEA;IACI,eAAe;IACf,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,YAAY;AAChB;;AAEA,eAAe;;AAEf;IACI,mCAAmC;IACnC,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,kBAAkB;IAClB,eAAe;IACf,WAAW;AACf;;AAEA;IACI,aAAa;IACb,mCAAmC;IACnC,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,uBAAuB;IACvB,6BAA6B;IAC7B,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;AACpB;;AAEA,aAAa;;AAEb;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,YAAY;IACZ,8BAA8B;IAC9B,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,qBAAqB;IACrB,iBAAiB;AACrB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,UAAU;IACV,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,UAAU;IACV,gBAAgB;IAChB,kCAAkC;AACtC","sourcesContent":["*{\n    font-family: Arial, Helvetica, sans-serif;\n}\n\nhtml,\nbody{\n    height: 88%;\n    background-color: rgb(170, 240, 216);\n}\n\nnav{\n    background-color: rgb(211, 211, 211);\n    margin-bottom: 10px;\n    display: flex;\n}\n\nnav h1{\n    text-shadow: 0 0 2px #000;\n    color: white;\n    margin: 0;\n    margin-left: auto;\n    margin-right: 15%;\n    font-size: 40px;\n}\n\nnav button{\n    background-color: none;\n    border-style: none;\n    height: 50px;\n    width: 15%;\n    font-size: large;\n}\n\n/*Whiteboard*/\n\n.wbTop{\n    display: flex;\n    height: 20px;\n    align-items: center;\n    justify-content: space-between;\n    background-color: rgb(199, 194, 194);\n    margin-left: -10px;\n    margin-right: -10px;\n}\n\n.wbTopCorner{\n    width: 70px;\n    height: 30px;\n    background-color: grey;\n    border-radius: 10px;\n}\n\n.wbBottomCorner{\n    width: 70px;\n    height: 30px;\n    background-color: grey;\n    border-radius: 10px;\n}\n\n#wbCenter{\n    background-color: white;\n    display: flex;\n    height: 100%;\n    justify-content: space-between;\n}\n\n#canvas{\n    padding: 20px;\n    flex: 1;\n    display: flex;\n    gap: 20px;\n    width: 65%;\n    margin-left: auto;\n    margin-right: auto;\n    height: 100%;\n}\n\n.wbLateral{\n    margin-left: -5px;\n    margin-right: -5px;\n    background-color: rgb(199, 194, 194);\n    width: 20px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n.wbLateralTop,\n.wbLateralBottom{\n    width: 30px;\n    height: 40px;\n    align-self: center;\n    background-color: grey;\n    border-radius: 10px;\n}\n\n.wbLateralTop{\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n}\n\n.wbLateralBottom{\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n}\n\n.postIt{\n    background-color: rgb(243, 243, 92);\n    width: 10%;\n    font-weight: bold;\n    height: 20%;\n}\n\n#canvas h5{\n    text-align: center;\n    margin-top: 0;\n    background-color: rgb(240, 240, 41);\n    height: 30%;\n    margin-bottom: 0;\n}\n\n#tkCont{\n    margin-top: 0;\n    height: 80%;\n    box-shadow: 3px 6px 7px black;\n}\n\n.postIt ul{\n    padding-top: 5%;\n    margin-top: 0;\n    font-weight: 100;\n}\n\n#whiteboard{\n    margin-left: 15px;\n    margin-right: 15px;\n    height: 100%;\n}\n\n/*Post It View*/\n\n#PView{\n    background-color: rgb(243, 243, 92);\n    width: 50%;\n    display: flex;\n    flex-direction: column;\n    margin-left: auto;\n    margin-right: auto;\n    font-size: 40px;\n    height: 90%;\n}\n\n#topPView{\n    display: flex;\n    background-color: rgb(240, 240, 41);\n    width: 100%;\n    margin-bottom: 15px;\n}\n\n#titlePView{\n    margin-left: auto;\n    margin-right: auto;\n    font-weight: bold;\n    align-self: center;\n}\n\n#rmvPView{\n    font-size: 40px;\n    margin-right: 15px;\n    color: rgb(189, 189, 0);\n    background-color: transparent;\n    margin-left: auto;\n    border-style: none;\n}\n\n.taskPView{\n    margin-left: 10%;\n}\n\n/*Add PostIt*/\n\n#formContainer{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#addTitle{\n    font-size: large;\n    height: 30px;\n    margin-bottom: 20px;\n    border: 2px gray solid;\n}\n\n.addTask{\n    font-size: large;\n    height: 30px;\n    border: none;\n    border-bottom: 2px solid black;\n    margin-right: 15px;\n    margin-bottom: 10px;\n}\n\n.btnDelete{\n    font-size: large;\n    border: none;\n    background-color: red;\n    font-weight: bold;\n}\n\nlabel{\n    display: none;\n}\n\n#btnAddTask{\n    width: 20%;\n    font-size: large;\n    margin-bottom: 20px;\n}\n\n#btnStickPostIt{\n    width: 20%;\n    font-size: large;\n    background-color: rgb(87, 139, 87);\n}\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/clear.js":
/*!**********************!*\
  !*** ./src/clear.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ clear)
/* harmony export */ });
function clear(){
    document.body.querySelectorAll('div').forEach(node => {
        node.remove();
    })
}

/***/ }),

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "controller": () => (/* binding */ controller)
/* harmony export */ });
/* harmony import */ var _displayWhiteboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayWhiteboard */ "./src/displayWhiteboard.js");
/* harmony import */ var _displayPostIt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayPostIt */ "./src/displayPostIt.js");
/* harmony import */ var _displayAddPostIt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayAddPostIt */ "./src/displayAddPostIt.js");
/* harmony import */ var _clear__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clear */ "./src/clear.js");





const controller = function(){
    //Display the whiteboard by default
    
    (0,_displayWhiteboard__WEBPACK_IMPORTED_MODULE_0__.displayWhiteboard)();

    //Create Listeners
    listeners();

}

const listeners = function(){
    const homeBtn = document.getElementById('homeBtn');
    const addBtn = document.getElementById('addBtn');
    const wb = document.getElementById('whiteboard').querySelectorAll('.postIt');
    
    homeBtn.addEventListener('click', () => {
        (0,_clear__WEBPACK_IMPORTED_MODULE_3__["default"])();
        controller();
    });
    
    addBtn.addEventListener('click',() => {
        (0,_clear__WEBPACK_IMPORTED_MODULE_3__["default"])();
        (0,_displayAddPostIt__WEBPACK_IMPORTED_MODULE_2__.displayAddPostIt)();
    });

    //Add event listeners to post its
    wb.forEach(e => {
        e.addEventListener('click', _displayPostIt__WEBPACK_IMPORTED_MODULE_1__.displayPostIt);
    })
}




/***/ }),

/***/ "./src/createPostIt.js":
/*!*****************************!*\
  !*** ./src/createPostIt.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "whiteboard": () => (/* binding */ whiteboard),
/* harmony export */   "taskCreator": () => (/* binding */ taskCreator),
/* harmony export */   "postItCreator": () => (/* binding */ postItCreator)
/* harmony export */ });

const taskCreator = (text) => {return {text}}


const task1 = taskCreator("Hacer palomitas");
const task2 = taskCreator("Elegir peliculas");
const task3 = taskCreator("Comprar bebida");

const task4 = taskCreator("Forrar libros cole", "OrderedList");


const postItCreator = function (name){
    const listOfTasks = [];
    const id = 0;
    const addTask = function(task){
        listOfTasks.push(task);
    }
    const proto = Object.create(Object.assign({}, {addTask, id}));
    
    return Object.assign(proto, {name, listOfTasks})
}

/*
const postIt1 = postItCreator("Noche de peli");

const postIt2 = postItCreator("Cosas colegio Eduardo");

postIt1.addTask(task1);
postIt1.addTask(task2);
postIt1.addTask(task3);

postIt2.addTask(task4);
*/
const whiteboard = (function(){
    const listOfPostIts = [];
    let counter = 0;

    const stickPostIt = function(postIt){
        counter++;
        postIt.id = counter;
        listOfPostIts.push(postIt);
        
        //--------Save Post-Its in Local Storage-----------//
        //Save Post-It in Local Storage
        window.localStorage.setItem(`p${postIt.id}`, postIt.name);
        
        //Save tasks in Local Storage
        let tkCount = 1;
        postIt.listOfTasks.forEach(tk => {
            window.localStorage.setItem(`t${postIt.id}-${tkCount}`, tk.text);
            tkCount++;
        })
    }

    
    const removePostIt = function(postIt){
        listOfPostIts.splice(listOfPostIts.findIndex(e => e === postIt),1);
        
        //It's necessary to remove them from LocalStorage
        window.localStorage.removeItem(`p${postIt.id}`);
        for(let i = 1; i <= window.localStorage.length; i++){
            window.localStorage.removeItem(`t${postIt.id}-${i}`)
        }
    }
    const showPostIts = function(){
        listOfPostIts.forEach(e => console.log(e));
    }

    //Add Local Sotorage post-its
    if(window.localStorage.length > 0){
        for(let i = 1; i <= window.localStorage.length; i++){
            if(window.localStorage.getItem(`p${i}`)){
                const postIt = postItCreator(window.localStorage.getItem(`p${i}`));
                for(let j = 1; j <= window.localStorage.length; j++){
                    if(window.localStorage.getItem(`t${i}-${j}`)){
                        postIt.addTask(taskCreator(window.localStorage.getItem(`t${i}-${j}`)));
                    }
                }
                stickPostIt(postIt);
            }
        }
    }


    const proto = Object.assign({}, {stickPostIt, removePostIt, showPostIts});

    return Object.assign(Object.create(proto), {listOfPostIts, counter});
})()

/*
whiteboard.stickPostIt(postIt1);
whiteboard.stickPostIt(postIt2);*/
whiteboard.showPostIts();




/***/ }),

/***/ "./src/displayAddPostIt.js":
/*!*********************************!*\
  !*** ./src/displayAddPostIt.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayAddPostIt": () => (/* binding */ displayAddPostIt),
/* harmony export */   "getFinalTasks": () => (/* binding */ getFinalTasks)
/* harmony export */ });
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ "./src/controller.js");
/* harmony import */ var _clear__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clear */ "./src/clear.js");
/* harmony import */ var _createPostIt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createPostIt */ "./src/createPostIt.js");






const displayAddPostIt = function(){

    //Number of tasks counter
    let counter = 0;

    //Form container
    const formContainer = document.createElement('div');
    formContainer.setAttribute('id', 'formContainer');

    //Title container
    const titleContainer = document.createElement('div');
    titleContainer.setAttribute('id', 'titleContainer');

    //Tasks container
    const tasksContainer = document.createElement('div');
    tasksContainer.setAttribute('id', 'tasksContainer');

    //Title
    const addTitle = document.createElement('input');
    const addTitleLabel = document.createElement('label');
    addTitle.setAttribute('type', 'text');
    addTitle.setAttribute('id', 'addTitle');
    addTitle.setAttribute('placeholder', 'Title');
    addTitleLabel.setAttribute('for', 'addTitle');
    addTitleLabel.innerText = "Title";
    titleContainer.appendChild(addTitleLabel);
    titleContainer.appendChild(addTitle);

    //Button Add Task
    const btnAddTask = document.createElement('button');
    btnAddTask.innerText = "Add Task";
    btnAddTask.setAttribute('id', 'btnAddTask');
    btnAddTask.addEventListener('click', () =>{

        removeEmptyTasks(tasksContainer);
        const newTask = createTask(counter);
        tasksContainer.appendChild(newTask.taskCont);
        counter ++;
    });

    //Button Send PostIt
    const btnStickPostIt = document.createElement('button');
    btnStickPostIt.innerText = "StickPostIt";
    btnStickPostIt.setAttribute('id', 'btnStickPostIt');
    btnStickPostIt.addEventListener('click', () =>{

        //Not stick post-it in case title and tasks are empty
        if(getFinalTasks().tasks.length === 0 && addTitle.value.length === 0){
            return;
        }

        const postIt = (0,_createPostIt__WEBPACK_IMPORTED_MODULE_2__.postItCreator)(addTitle.value);
        
        getFinalTasks().tasks.forEach(t => {
            postIt.addTask((0,_createPostIt__WEBPACK_IMPORTED_MODULE_2__.taskCreator)(t));
        })
        _createPostIt__WEBPACK_IMPORTED_MODULE_2__.whiteboard.stickPostIt(postIt);
        (0,_clear__WEBPACK_IMPORTED_MODULE_1__["default"])();
        (0,_controller__WEBPACK_IMPORTED_MODULE_0__.controller)();
    });

    //Append all
    formContainer.appendChild(titleContainer);
    formContainer.appendChild(tasksContainer);
    formContainer.appendChild(btnAddTask);
    formContainer.appendChild(btnStickPostIt);
    document.body.appendChild(formContainer);
}


//This function if a task creator that returns a 'div'
//with all the tasks added to the postIt

function createTask(counter){
    //Task container
    const taskCont = document.createElement('div');
    taskCont.setAttribute('id', `taskCont${counter}`);

    //Task inpunt and label
    const addTask = document.createElement('input');
    const addTaskLabel = document.createElement('label');
    addTask.setAttribute('type', 'text');
    addTask.classList.add('addTask');
    addTask.setAttribute('id', `task${counter}`);
    addTaskLabel.setAttribute('for', `task${counter}`);
    addTaskLabel.innerText = "Task";

    //Remove task button
    const btnRmvTask = document.createElement('button');
    btnRmvTask.innerText = "X";
    btnRmvTask.classList.add('btnDelete');
    btnRmvTask.addEventListener('click', removeTask);


    taskCont.appendChild(addTaskLabel);
    taskCont.appendChild(addTask);
    taskCont.appendChild(btnRmvTask);

    return {taskCont}
}

function removeTask(e){
    e.target.parentNode.remove();  
}

function removeEmptyTasks(tasksC){
    /*Check that every task has text on it when
    adding a new task. If so, remove the empty ones*/
    const tC = [...tasksC.childNodes]
    tC.forEach((t) => {
        if([...t.childNodes].at(1).value.length === 0){
            t.remove();
        }
    })
}

function getFinalTasks(){
    const tasks = []; //Array of tasks to send
    const tC = document.getElementById('tasksContainer');
    const result = [...tC.childNodes].filter((t) => {
        return [...t.childNodes].at(1).value.length > 0;
    })
    result.forEach((e) => {
        if([...e.childNodes].at(1).value.length > 0){
            tasks.push([...e.childNodes].at(1).value);
        }
    })
    return {tasks};
}



/***/ }),

/***/ "./src/displayPostIt.js":
/*!******************************!*\
  !*** ./src/displayPostIt.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayPostIt": () => (/* binding */ displayPostIt)
/* harmony export */ });
/* harmony import */ var _createPostIt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createPostIt */ "./src/createPostIt.js");
/* harmony import */ var _clear__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clear */ "./src/clear.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller */ "./src/controller.js");




const displayPostIt = function(e){
    (0,_clear__WEBPACK_IMPORTED_MODULE_1__["default"])();
    
    _createPostIt__WEBPACK_IMPORTED_MODULE_0__.whiteboard.listOfPostIts.forEach(postIt => {
        if(postIt.name === this.firstChild.innerText){
            //Post-It container
            const container = document.createElement('div');
            container.setAttribute('id', 'PView');
            
            //Top part of Post-It
            const top = document.createElement('div');
            top.setAttribute('id', 'topPView');
                //Title (TOP)
            const title = document.createElement('div');
            title.innerText = postIt.name;
            title.setAttribute('id', 'titlePView');
            top.appendChild(title);
                //Remove Button (TOP)
            const rmvButtonPView = document.createElement('button');
            rmvButtonPView.innerText = "X";
            rmvButtonPView.setAttribute('id', 'rmvPView');
            rmvButtonPView.addEventListener('click', () => {
                _createPostIt__WEBPACK_IMPORTED_MODULE_0__.whiteboard.removePostIt(postIt);
                (0,_clear__WEBPACK_IMPORTED_MODULE_1__["default"])();
                (0,_controller__WEBPACK_IMPORTED_MODULE_2__.controller)();
            })
            top.appendChild(rmvButtonPView);

            container.appendChild(top);
            

            //Tasks container
            postIt.listOfTasks.forEach( task => {
                const taskDiv = document.createElement('div');
                taskDiv.innerText = task.text;
                taskDiv.classList.add('taskPView');
                container.appendChild(taskDiv);
            })
            document.body.appendChild(container);
        }
    })
}





/***/ }),

/***/ "./src/displayWhiteboard.js":
/*!**********************************!*\
  !*** ./src/displayWhiteboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayWhiteboard": () => (/* binding */ displayWhiteboard)
/* harmony export */ });
/* harmony import */ var _createPostIt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createPostIt */ "./src/createPostIt.js");


const displayWhiteboard = function(){

    const whiteBoard = designWhiteBoard().wb;

    document.body.appendChild(whiteBoard);

    _createPostIt__WEBPACK_IMPORTED_MODULE_0__.whiteboard.listOfPostIts.forEach(e => {
        //Post It container
        const div = document.createElement('div');
        div.classList.add('postIt');

        //Post It title
        const title = document.createElement('h5');
        title.innerText = e.name;
        div.appendChild(title)
        
        //Post It task container
        const tkCont = document.createElement('div');
        tkCont.setAttribute('id', 'tkCont');

        //List of Tasks
        /*
        const list = document.createElement('ul');
        tkCont.appendChild(list);
        div.appendChild(tkCont);

        e.listOfTasks.forEach(lt => {
            const task = document.createElement('li');
            task.innerText = lt.text;
            list.appendChild(task);
        });
        */
        //Stick Post It to Canvas
        [...whiteBoard.childNodes].forEach((e) => {
            [...e.childNodes].forEach((n) => {
                if(n.id === "canvas"){
                    n.appendChild(div);
                }
            })
        })
    })
}

const designWhiteBoard = function(){
    //Whiteboar containing the div
    const wb = document.createElement('div');
    wb.setAttribute('id', 'whiteboard');

    //Top
    const wbTop = document.createElement('div');
    wbTop.setAttribute('class', 'wbTop');
    const wbTopLcorner = document.createElement('div');
    wbTopLcorner.setAttribute('class', 'wbTopCorner');
    const wbTopRcorner = document.createElement('div');
    wbTopRcorner.setAttribute('class', 'wbTopCorner');

    wbTop.appendChild(wbTopLcorner);
    wbTop.appendChild(wbTopRcorner);
    

    //Central part of whiteboar
    const wbCentral = document.createElement('div');
    wbCentral.setAttribute('id', 'wbCenter');

    const canvas = document.createElement('div');
    canvas.setAttribute('id', 'canvas');
    
    //Left 
    const wbLeft = document.createElement('div');
    wbLeft.classList.add('wbLateral');
    const wbLeftTop = document.createElement('div');
    wbLeftTop.classList.add('wbLateralTop');
    const wbLeftBottom = document.createElement('div');
    wbLeftBottom.classList.add('wbLateralBottom');

    wbLeft.appendChild(wbLeftTop);
    wbLeft.appendChild(wbLeftBottom);

    //Right
    const wbRight = document.createElement('div');
    wbRight.classList.add('wbLateral');
    const wbRightTop = document.createElement('div');
    wbRightTop.classList.add('wbLateralTop');
    const wbRightBottom = document.createElement('div');
    wbRightBottom.classList.add('wbLateralBottom');

    wbRight.appendChild(wbRightTop);
    wbRight.appendChild(wbRightBottom);

    wbCentral.appendChild(wbLeft);
    wbCentral.appendChild(canvas);
    wbCentral.appendChild(wbRight);
    

    //Bottom

    const wbBottom = document.createElement('div');
    wbBottom.setAttribute('class', 'wbTop');
    const wbBottomLcorner = document.createElement('div');
    wbBottomLcorner.setAttribute('class', 'wbBottomCorner');
    const wbBottomRcorner = document.createElement('div');
    wbBottomRcorner.setAttribute('class', 'wbBottomCorner');

    wbBottom.appendChild(wbBottomLcorner);
    wbBottom.appendChild(wbBottomRcorner);
    
    wb.appendChild(wbTop);
    wb.appendChild(wbCentral);
    wb.appendChild(wbBottom);

    return {wb}
    
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ "./src/controller.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




const nav = document.createElement('nav');
const name = document.createElement('h1');
name.innerText = "WHITEBOARD";
const homeBtn = document.createElement('button');
homeBtn.setAttribute('id', 'homeBtn');
const addBtn = document.createElement('button');
addBtn.setAttribute('id', 'addBtn');
addBtn.innerText = "ADD";
homeBtn.innerText = 'HOME';
nav.appendChild(homeBtn);
nav.appendChild(addBtn);
nav.appendChild(name);
document.body.appendChild(nav);


(0,_controller__WEBPACK_IMPORTED_MODULE_0__.controller)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjtBQUNBOzs7Ozs7OztVQ2xIQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ04wQztBQUN0Qjs7O0FBR3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSx1REFBVSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY2xlYXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jcmVhdGVQb3N0SXQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZGlzcGxheUFkZFBvc3RJdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9kaXNwbGF5UG9zdEl0LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2Rpc3BsYXlXaGl0ZWJvYXJkLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqe1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuaHRtbCxcXG5ib2R5e1xcbiAgICBoZWlnaHQ6IDg4JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MCwgMjQwLCAyMTYpO1xcbn1cXG5cXG5uYXZ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTEsIDIxMSwgMjExKTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxubmF2IGgxe1xcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDJweCAjMDAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogMTUlO1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxufVxcblxcbm5hdiBidXR0b257XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogMTUlO1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbn1cXG5cXG4vKldoaXRlYm9hcmQqL1xcblxcbi53YlRvcHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTksIDE5NCwgMTk0KTtcXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xcbn1cXG5cXG4ud2JUb3BDb3JuZXJ7XFxuICAgIHdpZHRoOiA3MHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi53YkJvdHRvbUNvcm5lcntcXG4gICAgd2lkdGg6IDcwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuI3diQ2VudGVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiNjYW52YXN7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjBweDtcXG4gICAgd2lkdGg6IDY1JTtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ud2JMYXRlcmFse1xcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAtNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk5LCAxOTQsIDE5NCk7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi53YkxhdGVyYWxUb3AsXFxuLndiTGF0ZXJhbEJvdHRvbXtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ud2JMYXRlcmFsVG9we1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcXG59XFxuXFxuLndiTGF0ZXJhbEJvdHRvbXtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XFxufVxcblxcbi5wb3N0SXR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDMsIDI0MywgOTIpO1xcbiAgICB3aWR0aDogMTAlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgaGVpZ2h0OiAyMCU7XFxufVxcblxcbiNjYW52YXMgaDV7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCA0MSk7XFxuICAgIGhlaWdodDogMzAlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG4jdGtDb250e1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgYm94LXNoYWRvdzogM3B4IDZweCA3cHggYmxhY2s7XFxufVxcblxcbi5wb3N0SXQgdWx7XFxuICAgIHBhZGRpbmctdG9wOiA1JTtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG59XFxuXFxuI3doaXRlYm9hcmR7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLypQb3N0IEl0IFZpZXcqL1xcblxcbiNQVmlld3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MywgMjQzLCA5Mik7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgaGVpZ2h0OiA5MCU7XFxufVxcblxcbiN0b3BQVmlld3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCA0MSk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG5cXG4jdGl0bGVQVmlld3tcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuI3JtdlBWaWV3e1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcXG4gICAgY29sb3I6IHJnYigxODksIDE4OSwgMCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4udGFza1BWaWV3e1xcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xcbn1cXG5cXG4vKkFkZCBQb3N0SXQqL1xcblxcbiNmb3JtQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jYWRkVGl0bGV7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgYm9yZGVyOiAycHggZ3JheSBzb2xpZDtcXG59XFxuXFxuLmFkZFRhc2t7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmJ0bkRlbGV0ZXtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5sYWJlbHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI2J0bkFkZFRhc2t7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbiNidG5TdGlja1Bvc3RJdHtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg3LCAxMzksIDg3KTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHlDQUF5QztBQUM3Qzs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQSxhQUFhOztBQUViO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixZQUFZO0lBQ1osOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLE9BQU87SUFDUCxhQUFhO0lBQ2IsU0FBUztJQUNULFVBQVU7SUFDVixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyxXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7QUFDbEM7O0FBRUE7O0lBRUksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUEsZUFBZTs7QUFFZjtJQUNJLG1DQUFtQztJQUNuQyxVQUFVO0lBQ1YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2Qiw2QkFBNkI7SUFDN0IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQSxhQUFhOztBQUViO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsa0NBQWtDO0FBQ3RDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5odG1sLFxcbmJvZHl7XFxuICAgIGhlaWdodDogODglO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcwLCAyNDAsIDIxNik7XFxufVxcblxcbm5hdntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMSwgMjExLCAyMTEpO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5uYXYgaDF7XFxuICAgIHRleHQtc2hhZG93OiAwIDAgMnB4ICMwMDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNSU7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuXFxubmF2IGJ1dHRvbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiAxNSU7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxufVxcblxcbi8qV2hpdGVib2FyZCovXFxuXFxuLndiVG9we1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5OSwgMTk0LCAxOTQpO1xcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogLTEwcHg7XFxufVxcblxcbi53YlRvcENvcm5lcntcXG4gICAgd2lkdGg6IDcwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLndiQm90dG9tQ29ybmVye1xcbiAgICB3aWR0aDogNzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4jd2JDZW50ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI2NhbnZhc3tcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICB3aWR0aDogNjUlO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi53YkxhdGVyYWx7XFxuICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IC01cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTksIDE5NCwgMTk0KTtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLndiTGF0ZXJhbFRvcCxcXG4ud2JMYXRlcmFsQm90dG9te1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi53YkxhdGVyYWxUb3B7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xcbn1cXG5cXG4ud2JMYXRlcmFsQm90dG9te1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcXG59XFxuXFxuLnBvc3RJdHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MywgMjQzLCA5Mik7XFxuICAgIHdpZHRoOiAxMCU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBoZWlnaHQ6IDIwJTtcXG59XFxuXFxuI2NhbnZhcyBoNXtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDQxKTtcXG4gICAgaGVpZ2h0OiAzMCU7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbiN0a0NvbnR7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIGhlaWdodDogODAlO1xcbiAgICBib3gtc2hhZG93OiAzcHggNnB4IDdweCBibGFjaztcXG59XFxuXFxuLnBvc3RJdCB1bHtcXG4gICAgcGFkZGluZy10b3A6IDUlO1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbn1cXG5cXG4jd2hpdGVib2FyZHtcXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4vKlBvc3QgSXQgVmlldyovXFxuXFxuI1BWaWV3e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQzLCAyNDMsIDkyKTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDkwJTtcXG59XFxuXFxuI3RvcFBWaWV3e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDQxKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcblxcbiN0aXRsZVBWaWV3e1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4jcm12UFZpZXd7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbiAgICBjb2xvcjogcmdiKDE4OSwgMTg5LCAwKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi50YXNrUFZpZXd7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxufVxcblxcbi8qQWRkIFBvc3RJdCovXFxuXFxuI2Zvcm1Db250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNhZGRUaXRsZXtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBib3JkZXI6IDJweCBncmF5IHNvbGlkO1xcbn1cXG5cXG4uYWRkVGFza3tcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uYnRuRGVsZXRle1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmxhYmVse1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jYnRuQWRkVGFza3tcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuI2J0blN0aWNrUG9zdEl0e1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODcsIDEzOSwgODcpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNsZWFyKCl7XG4gICAgZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yQWxsKCdkaXYnKS5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICBub2RlLnJlbW92ZSgpO1xuICAgIH0pXG59IiwiaW1wb3J0IHsgZGlzcGxheVdoaXRlYm9hcmQgfSBmcm9tIFwiLi9kaXNwbGF5V2hpdGVib2FyZFwiXG5pbXBvcnQgeyBkaXNwbGF5UG9zdEl0IH0gZnJvbSBcIi4vZGlzcGxheVBvc3RJdFwiXG5pbXBvcnQgeyBkaXNwbGF5QWRkUG9zdEl0IH0gZnJvbSBcIi4vZGlzcGxheUFkZFBvc3RJdFwiO1xuaW1wb3J0IGNsZWFyIGZyb20gJy4vY2xlYXInO1xuXG5jb25zdCBjb250cm9sbGVyID0gZnVuY3Rpb24oKXtcbiAgICAvL0Rpc3BsYXkgdGhlIHdoaXRlYm9hcmQgYnkgZGVmYXVsdFxuICAgIFxuICAgIGRpc3BsYXlXaGl0ZWJvYXJkKCk7XG5cbiAgICAvL0NyZWF0ZSBMaXN0ZW5lcnNcbiAgICBsaXN0ZW5lcnMoKTtcblxufVxuXG5jb25zdCBsaXN0ZW5lcnMgPSBmdW5jdGlvbigpe1xuICAgIGNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZUJ0bicpO1xuICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRCdG4nKTtcbiAgICBjb25zdCB3YiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aGl0ZWJvYXJkJykucXVlcnlTZWxlY3RvckFsbCgnLnBvc3RJdCcpO1xuICAgIFxuICAgIGhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNsZWFyKCk7XG4gICAgICAgIGNvbnRyb2xsZXIoKTtcbiAgICB9KTtcbiAgICBcbiAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHtcbiAgICAgICAgY2xlYXIoKTtcbiAgICAgICAgZGlzcGxheUFkZFBvc3RJdCgpO1xuICAgIH0pO1xuXG4gICAgLy9BZGQgZXZlbnQgbGlzdGVuZXJzIHRvIHBvc3QgaXRzXG4gICAgd2IuZm9yRWFjaChlID0+IHtcbiAgICAgICAgZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlQb3N0SXQpO1xuICAgIH0pXG59XG5cblxuZXhwb3J0IHtjb250cm9sbGVyfSIsIlxuY29uc3QgdGFza0NyZWF0b3IgPSAodGV4dCkgPT4ge3JldHVybiB7dGV4dH19XG5cblxuY29uc3QgdGFzazEgPSB0YXNrQ3JlYXRvcihcIkhhY2VyIHBhbG9taXRhc1wiKTtcbmNvbnN0IHRhc2syID0gdGFza0NyZWF0b3IoXCJFbGVnaXIgcGVsaWN1bGFzXCIpO1xuY29uc3QgdGFzazMgPSB0YXNrQ3JlYXRvcihcIkNvbXByYXIgYmViaWRhXCIpO1xuXG5jb25zdCB0YXNrNCA9IHRhc2tDcmVhdG9yKFwiRm9ycmFyIGxpYnJvcyBjb2xlXCIsIFwiT3JkZXJlZExpc3RcIik7XG5cblxuY29uc3QgcG9zdEl0Q3JlYXRvciA9IGZ1bmN0aW9uIChuYW1lKXtcbiAgICBjb25zdCBsaXN0T2ZUYXNrcyA9IFtdO1xuICAgIGNvbnN0IGlkID0gMDtcbiAgICBjb25zdCBhZGRUYXNrID0gZnVuY3Rpb24odGFzayl7XG4gICAgICAgIGxpc3RPZlRhc2tzLnB1c2godGFzayk7XG4gICAgfVxuICAgIGNvbnN0IHByb3RvID0gT2JqZWN0LmNyZWF0ZShPYmplY3QuYXNzaWduKHt9LCB7YWRkVGFzaywgaWR9KSk7XG4gICAgXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ocHJvdG8sIHtuYW1lLCBsaXN0T2ZUYXNrc30pXG59XG5cbi8qXG5jb25zdCBwb3N0SXQxID0gcG9zdEl0Q3JlYXRvcihcIk5vY2hlIGRlIHBlbGlcIik7XG5cbmNvbnN0IHBvc3RJdDIgPSBwb3N0SXRDcmVhdG9yKFwiQ29zYXMgY29sZWdpbyBFZHVhcmRvXCIpO1xuXG5wb3N0SXQxLmFkZFRhc2sodGFzazEpO1xucG9zdEl0MS5hZGRUYXNrKHRhc2syKTtcbnBvc3RJdDEuYWRkVGFzayh0YXNrMyk7XG5cbnBvc3RJdDIuYWRkVGFzayh0YXNrNCk7XG4qL1xuY29uc3Qgd2hpdGVib2FyZCA9IChmdW5jdGlvbigpe1xuICAgIGNvbnN0IGxpc3RPZlBvc3RJdHMgPSBbXTtcbiAgICBsZXQgY291bnRlciA9IDA7XG5cbiAgICBjb25zdCBzdGlja1Bvc3RJdCA9IGZ1bmN0aW9uKHBvc3RJdCl7XG4gICAgICAgIGNvdW50ZXIrKztcbiAgICAgICAgcG9zdEl0LmlkID0gY291bnRlcjtcbiAgICAgICAgbGlzdE9mUG9zdEl0cy5wdXNoKHBvc3RJdCk7XG4gICAgICAgIFxuICAgICAgICAvLy0tLS0tLS0tU2F2ZSBQb3N0LUl0cyBpbiBMb2NhbCBTdG9yYWdlLS0tLS0tLS0tLS0vL1xuICAgICAgICAvL1NhdmUgUG9zdC1JdCBpbiBMb2NhbCBTdG9yYWdlXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShgcCR7cG9zdEl0LmlkfWAsIHBvc3RJdC5uYW1lKTtcbiAgICAgICAgXG4gICAgICAgIC8vU2F2ZSB0YXNrcyBpbiBMb2NhbCBTdG9yYWdlXG4gICAgICAgIGxldCB0a0NvdW50ID0gMTtcbiAgICAgICAgcG9zdEl0Lmxpc3RPZlRhc2tzLmZvckVhY2godGsgPT4ge1xuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGB0JHtwb3N0SXQuaWR9LSR7dGtDb3VudH1gLCB0ay50ZXh0KTtcbiAgICAgICAgICAgIHRrQ291bnQrKztcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBcbiAgICBjb25zdCByZW1vdmVQb3N0SXQgPSBmdW5jdGlvbihwb3N0SXQpe1xuICAgICAgICBsaXN0T2ZQb3N0SXRzLnNwbGljZShsaXN0T2ZQb3N0SXRzLmZpbmRJbmRleChlID0+IGUgPT09IHBvc3RJdCksMSk7XG4gICAgICAgIFxuICAgICAgICAvL0l0J3MgbmVjZXNzYXJ5IHRvIHJlbW92ZSB0aGVtIGZyb20gTG9jYWxTdG9yYWdlXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShgcCR7cG9zdEl0LmlkfWApO1xuICAgICAgICBmb3IobGV0IGkgPSAxOyBpIDw9IHdpbmRvdy5sb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGB0JHtwb3N0SXQuaWR9LSR7aX1gKVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHNob3dQb3N0SXRzID0gZnVuY3Rpb24oKXtcbiAgICAgICAgbGlzdE9mUG9zdEl0cy5mb3JFYWNoKGUgPT4gY29uc29sZS5sb2coZSkpO1xuICAgIH1cblxuICAgIC8vQWRkIExvY2FsIFNvdG9yYWdlIHBvc3QtaXRzXG4gICAgaWYod2luZG93LmxvY2FsU3RvcmFnZS5sZW5ndGggPiAwKXtcbiAgICAgICAgZm9yKGxldCBpID0gMTsgaSA8PSB3aW5kb3cubG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGlmKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShgcCR7aX1gKSl7XG4gICAgICAgICAgICAgICAgY29uc3QgcG9zdEl0ID0gcG9zdEl0Q3JlYXRvcih3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oYHAke2l9YCkpO1xuICAgICAgICAgICAgICAgIGZvcihsZXQgaiA9IDE7IGogPD0gd2luZG93LmxvY2FsU3RvcmFnZS5sZW5ndGg7IGorKyl7XG4gICAgICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShgdCR7aX0tJHtqfWApKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RJdC5hZGRUYXNrKHRhc2tDcmVhdG9yKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShgdCR7aX0tJHtqfWApKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3RpY2tQb3N0SXQocG9zdEl0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgY29uc3QgcHJvdG8gPSBPYmplY3QuYXNzaWduKHt9LCB7c3RpY2tQb3N0SXQsIHJlbW92ZVBvc3RJdCwgc2hvd1Bvc3RJdHN9KTtcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUocHJvdG8pLCB7bGlzdE9mUG9zdEl0cywgY291bnRlcn0pO1xufSkoKVxuXG4vKlxud2hpdGVib2FyZC5zdGlja1Bvc3RJdChwb3N0SXQxKTtcbndoaXRlYm9hcmQuc3RpY2tQb3N0SXQocG9zdEl0Mik7Ki9cbndoaXRlYm9hcmQuc2hvd1Bvc3RJdHMoKTtcblxuXG5leHBvcnQge3doaXRlYm9hcmQsIHRhc2tDcmVhdG9yLCBwb3N0SXRDcmVhdG9yfSIsImltcG9ydCB7IGNvbnRyb2xsZXIgfSBmcm9tIFwiLi9jb250cm9sbGVyXCI7XG5pbXBvcnQgY2xlYXIgZnJvbSAnLi9jbGVhcic7XG5pbXBvcnQgeyB0YXNrQ3JlYXRvciB9IGZyb20gXCIuL2NyZWF0ZVBvc3RJdFwiO1xuaW1wb3J0IHsgcG9zdEl0Q3JlYXRvciB9IGZyb20gXCIuL2NyZWF0ZVBvc3RJdFwiO1xuaW1wb3J0IHsgd2hpdGVib2FyZCB9IGZyb20gXCIuL2NyZWF0ZVBvc3RJdFwiO1xuXG5jb25zdCBkaXNwbGF5QWRkUG9zdEl0ID0gZnVuY3Rpb24oKXtcblxuICAgIC8vTnVtYmVyIG9mIHRhc2tzIGNvdW50ZXJcbiAgICBsZXQgY291bnRlciA9IDA7XG5cbiAgICAvL0Zvcm0gY29udGFpbmVyXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1Db250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdmb3JtQ29udGFpbmVyJyk7XG5cbiAgICAvL1RpdGxlIGNvbnRhaW5lclxuICAgIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGVDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICd0aXRsZUNvbnRhaW5lcicpO1xuXG4gICAgLy9UYXNrcyBjb250YWluZXJcbiAgICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tzQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFza3NDb250YWluZXInKTtcblxuICAgIC8vVGl0bGVcbiAgICBjb25zdCBhZGRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgYWRkVGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgYWRkVGl0bGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBhZGRUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZFRpdGxlJyk7XG4gICAgYWRkVGl0bGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdUaXRsZScpO1xuICAgIGFkZFRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnYWRkVGl0bGUnKTtcbiAgICBhZGRUaXRsZUxhYmVsLmlubmVyVGV4dCA9IFwiVGl0bGVcIjtcbiAgICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUaXRsZUxhYmVsKTtcbiAgICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUaXRsZSk7XG5cbiAgICAvL0J1dHRvbiBBZGQgVGFza1xuICAgIGNvbnN0IGJ0bkFkZFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidG5BZGRUYXNrLmlubmVyVGV4dCA9IFwiQWRkIFRhc2tcIjtcbiAgICBidG5BZGRUYXNrLnNldEF0dHJpYnV0ZSgnaWQnLCAnYnRuQWRkVGFzaycpO1xuICAgIGJ0bkFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcblxuICAgICAgICByZW1vdmVFbXB0eVRhc2tzKHRhc2tzQ29udGFpbmVyKTtcbiAgICAgICAgY29uc3QgbmV3VGFzayA9IGNyZWF0ZVRhc2soY291bnRlcik7XG4gICAgICAgIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Rhc2sudGFza0NvbnQpO1xuICAgICAgICBjb3VudGVyICsrO1xuICAgIH0pO1xuXG4gICAgLy9CdXR0b24gU2VuZCBQb3N0SXRcbiAgICBjb25zdCBidG5TdGlja1Bvc3RJdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0blN0aWNrUG9zdEl0LmlubmVyVGV4dCA9IFwiU3RpY2tQb3N0SXRcIjtcbiAgICBidG5TdGlja1Bvc3RJdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2J0blN0aWNrUG9zdEl0Jyk7XG4gICAgYnRuU3RpY2tQb3N0SXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcblxuICAgICAgICAvL05vdCBzdGljayBwb3N0LWl0IGluIGNhc2UgdGl0bGUgYW5kIHRhc2tzIGFyZSBlbXB0eVxuICAgICAgICBpZihnZXRGaW5hbFRhc2tzKCkudGFza3MubGVuZ3RoID09PSAwICYmIGFkZFRpdGxlLnZhbHVlLmxlbmd0aCA9PT0gMCl7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwb3N0SXQgPSBwb3N0SXRDcmVhdG9yKGFkZFRpdGxlLnZhbHVlKTtcbiAgICAgICAgXG4gICAgICAgIGdldEZpbmFsVGFza3MoKS50YXNrcy5mb3JFYWNoKHQgPT4ge1xuICAgICAgICAgICAgcG9zdEl0LmFkZFRhc2sodGFza0NyZWF0b3IodCkpO1xuICAgICAgICB9KVxuICAgICAgICB3aGl0ZWJvYXJkLnN0aWNrUG9zdEl0KHBvc3RJdCk7XG4gICAgICAgIGNsZWFyKCk7XG4gICAgICAgIGNvbnRyb2xsZXIoKTtcbiAgICB9KTtcblxuICAgIC8vQXBwZW5kIGFsbFxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVDb250YWluZXIpO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodGFza3NDb250YWluZXIpO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoYnRuQWRkVGFzayk7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChidG5TdGlja1Bvc3RJdCk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcbn1cblxuXG4vL1RoaXMgZnVuY3Rpb24gaWYgYSB0YXNrIGNyZWF0b3IgdGhhdCByZXR1cm5zIGEgJ2Rpdidcbi8vd2l0aCBhbGwgdGhlIHRhc2tzIGFkZGVkIHRvIHRoZSBwb3N0SXRcblxuZnVuY3Rpb24gY3JlYXRlVGFzayhjb3VudGVyKXtcbiAgICAvL1Rhc2sgY29udGFpbmVyXG4gICAgY29uc3QgdGFza0NvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrQ29udC5zZXRBdHRyaWJ1dGUoJ2lkJywgYHRhc2tDb250JHtjb3VudGVyfWApO1xuXG4gICAgLy9UYXNrIGlucHVudCBhbmQgbGFiZWxcbiAgICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBhZGRUYXNrTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGFkZFRhc2suc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBhZGRUYXNrLmNsYXNzTGlzdC5hZGQoJ2FkZFRhc2snKTtcbiAgICBhZGRUYXNrLnNldEF0dHJpYnV0ZSgnaWQnLCBgdGFzayR7Y291bnRlcn1gKTtcbiAgICBhZGRUYXNrTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBgdGFzayR7Y291bnRlcn1gKTtcbiAgICBhZGRUYXNrTGFiZWwuaW5uZXJUZXh0ID0gXCJUYXNrXCI7XG5cbiAgICAvL1JlbW92ZSB0YXNrIGJ1dHRvblxuICAgIGNvbnN0IGJ0blJtdlRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidG5SbXZUYXNrLmlubmVyVGV4dCA9IFwiWFwiO1xuICAgIGJ0blJtdlRhc2suY2xhc3NMaXN0LmFkZCgnYnRuRGVsZXRlJyk7XG4gICAgYnRuUm12VGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZVRhc2spO1xuXG5cbiAgICB0YXNrQ29udC5hcHBlbmRDaGlsZChhZGRUYXNrTGFiZWwpO1xuICAgIHRhc2tDb250LmFwcGVuZENoaWxkKGFkZFRhc2spO1xuICAgIHRhc2tDb250LmFwcGVuZENoaWxkKGJ0blJtdlRhc2spO1xuXG4gICAgcmV0dXJuIHt0YXNrQ29udH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlVGFzayhlKXtcbiAgICBlLnRhcmdldC5wYXJlbnROb2RlLnJlbW92ZSgpOyAgXG59XG5cbmZ1bmN0aW9uIHJlbW92ZUVtcHR5VGFza3ModGFza3NDKXtcbiAgICAvKkNoZWNrIHRoYXQgZXZlcnkgdGFzayBoYXMgdGV4dCBvbiBpdCB3aGVuXG4gICAgYWRkaW5nIGEgbmV3IHRhc2suIElmIHNvLCByZW1vdmUgdGhlIGVtcHR5IG9uZXMqL1xuICAgIGNvbnN0IHRDID0gWy4uLnRhc2tzQy5jaGlsZE5vZGVzXVxuICAgIHRDLmZvckVhY2goKHQpID0+IHtcbiAgICAgICAgaWYoWy4uLnQuY2hpbGROb2Rlc10uYXQoMSkudmFsdWUubGVuZ3RoID09PSAwKXtcbiAgICAgICAgICAgIHQucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5mdW5jdGlvbiBnZXRGaW5hbFRhc2tzKCl7XG4gICAgY29uc3QgdGFza3MgPSBbXTsgLy9BcnJheSBvZiB0YXNrcyB0byBzZW5kXG4gICAgY29uc3QgdEMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza3NDb250YWluZXInKTtcbiAgICBjb25zdCByZXN1bHQgPSBbLi4udEMuY2hpbGROb2Rlc10uZmlsdGVyKCh0KSA9PiB7XG4gICAgICAgIHJldHVybiBbLi4udC5jaGlsZE5vZGVzXS5hdCgxKS52YWx1ZS5sZW5ndGggPiAwO1xuICAgIH0pXG4gICAgcmVzdWx0LmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgaWYoWy4uLmUuY2hpbGROb2Rlc10uYXQoMSkudmFsdWUubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICB0YXNrcy5wdXNoKFsuLi5lLmNoaWxkTm9kZXNdLmF0KDEpLnZhbHVlKTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHt0YXNrc307XG59XG5cbmV4cG9ydCB7ZGlzcGxheUFkZFBvc3RJdCwgZ2V0RmluYWxUYXNrc30iLCJpbXBvcnQgeyB3aGl0ZWJvYXJkIH0gZnJvbSBcIi4vY3JlYXRlUG9zdEl0XCI7XG5pbXBvcnQgY2xlYXIgZnJvbSAnLi9jbGVhcic7XG5pbXBvcnQgeyBjb250cm9sbGVyIH0gZnJvbSBcIi4vY29udHJvbGxlclwiO1xuXG5jb25zdCBkaXNwbGF5UG9zdEl0ID0gZnVuY3Rpb24oZSl7XG4gICAgY2xlYXIoKTtcbiAgICBcbiAgICB3aGl0ZWJvYXJkLmxpc3RPZlBvc3RJdHMuZm9yRWFjaChwb3N0SXQgPT4ge1xuICAgICAgICBpZihwb3N0SXQubmFtZSA9PT0gdGhpcy5maXJzdENoaWxkLmlubmVyVGV4dCl7XG4gICAgICAgICAgICAvL1Bvc3QtSXQgY29udGFpbmVyXG4gICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ1BWaWV3Jyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vVG9wIHBhcnQgb2YgUG9zdC1JdFxuICAgICAgICAgICAgY29uc3QgdG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0b3Auc2V0QXR0cmlidXRlKCdpZCcsICd0b3BQVmlldycpO1xuICAgICAgICAgICAgICAgIC8vVGl0bGUgKFRPUClcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0aXRsZS5pbm5lclRleHQgPSBwb3N0SXQubmFtZTtcbiAgICAgICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAndGl0bGVQVmlldycpO1xuICAgICAgICAgICAgdG9wLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgICAgICAgICAvL1JlbW92ZSBCdXR0b24gKFRPUClcbiAgICAgICAgICAgIGNvbnN0IHJtdkJ1dHRvblBWaWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBybXZCdXR0b25QVmlldy5pbm5lclRleHQgPSBcIlhcIjtcbiAgICAgICAgICAgIHJtdkJ1dHRvblBWaWV3LnNldEF0dHJpYnV0ZSgnaWQnLCAncm12UFZpZXcnKTtcbiAgICAgICAgICAgIHJtdkJ1dHRvblBWaWV3LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHdoaXRlYm9hcmQucmVtb3ZlUG9zdEl0KHBvc3RJdCk7XG4gICAgICAgICAgICAgICAgY2xlYXIoKTtcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdG9wLmFwcGVuZENoaWxkKHJtdkJ1dHRvblBWaWV3KTtcblxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRvcCk7XG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgLy9UYXNrcyBjb250YWluZXJcbiAgICAgICAgICAgIHBvc3RJdC5saXN0T2ZUYXNrcy5mb3JFYWNoKCB0YXNrID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgdGFza0Rpdi5pbm5lclRleHQgPSB0YXNrLnRleHQ7XG4gICAgICAgICAgICAgICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKCd0YXNrUFZpZXcnKTtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgICAgICB9XG4gICAgfSlcbn1cblxuXG5cbmV4cG9ydCB7ZGlzcGxheVBvc3RJdH0iLCJpbXBvcnQgeyB3aGl0ZWJvYXJkIH0gZnJvbSBcIi4vY3JlYXRlUG9zdEl0XCI7XG5cbmNvbnN0IGRpc3BsYXlXaGl0ZWJvYXJkID0gZnVuY3Rpb24oKXtcblxuICAgIGNvbnN0IHdoaXRlQm9hcmQgPSBkZXNpZ25XaGl0ZUJvYXJkKCkud2I7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHdoaXRlQm9hcmQpO1xuXG4gICAgd2hpdGVib2FyZC5saXN0T2ZQb3N0SXRzLmZvckVhY2goZSA9PiB7XG4gICAgICAgIC8vUG9zdCBJdCBjb250YWluZXJcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdwb3N0SXQnKTtcblxuICAgICAgICAvL1Bvc3QgSXQgdGl0bGVcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xuICAgICAgICB0aXRsZS5pbm5lclRleHQgPSBlLm5hbWU7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgICAgICAgXG4gICAgICAgIC8vUG9zdCBJdCB0YXNrIGNvbnRhaW5lclxuICAgICAgICBjb25zdCB0a0NvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGtDb250LnNldEF0dHJpYnV0ZSgnaWQnLCAndGtDb250Jyk7XG5cbiAgICAgICAgLy9MaXN0IG9mIFRhc2tzXG4gICAgICAgIC8qXG4gICAgICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICB0a0NvbnQuYXBwZW5kQ2hpbGQobGlzdCk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZCh0a0NvbnQpO1xuXG4gICAgICAgIGUubGlzdE9mVGFza3MuZm9yRWFjaChsdCA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIHRhc2suaW5uZXJUZXh0ID0gbHQudGV4dDtcbiAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQodGFzayk7XG4gICAgICAgIH0pO1xuICAgICAgICAqL1xuICAgICAgICAvL1N0aWNrIFBvc3QgSXQgdG8gQ2FudmFzXG4gICAgICAgIFsuLi53aGl0ZUJvYXJkLmNoaWxkTm9kZXNdLmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgICAgIFsuLi5lLmNoaWxkTm9kZXNdLmZvckVhY2goKG4pID0+IHtcbiAgICAgICAgICAgICAgICBpZihuLmlkID09PSBcImNhbnZhc1wiKXtcbiAgICAgICAgICAgICAgICAgICAgbi5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuY29uc3QgZGVzaWduV2hpdGVCb2FyZCA9IGZ1bmN0aW9uKCl7XG4gICAgLy9XaGl0ZWJvYXIgY29udGFpbmluZyB0aGUgZGl2XG4gICAgY29uc3Qgd2IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3Yi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3doaXRlYm9hcmQnKTtcblxuICAgIC8vVG9wXG4gICAgY29uc3Qgd2JUb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3YlRvcC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3diVG9wJyk7XG4gICAgY29uc3Qgd2JUb3BMY29ybmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd2JUb3BMY29ybmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnd2JUb3BDb3JuZXInKTtcbiAgICBjb25zdCB3YlRvcFJjb3JuZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3YlRvcFJjb3JuZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICd3YlRvcENvcm5lcicpO1xuXG4gICAgd2JUb3AuYXBwZW5kQ2hpbGQod2JUb3BMY29ybmVyKTtcbiAgICB3YlRvcC5hcHBlbmRDaGlsZCh3YlRvcFJjb3JuZXIpO1xuICAgIFxuXG4gICAgLy9DZW50cmFsIHBhcnQgb2Ygd2hpdGVib2FyXG4gICAgY29uc3Qgd2JDZW50cmFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd2JDZW50cmFsLnNldEF0dHJpYnV0ZSgnaWQnLCAnd2JDZW50ZXInKTtcblxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NhbnZhcycpO1xuICAgIFxuICAgIC8vTGVmdCBcbiAgICBjb25zdCB3YkxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3YkxlZnQuY2xhc3NMaXN0LmFkZCgnd2JMYXRlcmFsJyk7XG4gICAgY29uc3Qgd2JMZWZ0VG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd2JMZWZ0VG9wLmNsYXNzTGlzdC5hZGQoJ3diTGF0ZXJhbFRvcCcpO1xuICAgIGNvbnN0IHdiTGVmdEJvdHRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdiTGVmdEJvdHRvbS5jbGFzc0xpc3QuYWRkKCd3YkxhdGVyYWxCb3R0b20nKTtcblxuICAgIHdiTGVmdC5hcHBlbmRDaGlsZCh3YkxlZnRUb3ApO1xuICAgIHdiTGVmdC5hcHBlbmRDaGlsZCh3YkxlZnRCb3R0b20pO1xuXG4gICAgLy9SaWdodFxuICAgIGNvbnN0IHdiUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3YlJpZ2h0LmNsYXNzTGlzdC5hZGQoJ3diTGF0ZXJhbCcpO1xuICAgIGNvbnN0IHdiUmlnaHRUb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3YlJpZ2h0VG9wLmNsYXNzTGlzdC5hZGQoJ3diTGF0ZXJhbFRvcCcpO1xuICAgIGNvbnN0IHdiUmlnaHRCb3R0b20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3YlJpZ2h0Qm90dG9tLmNsYXNzTGlzdC5hZGQoJ3diTGF0ZXJhbEJvdHRvbScpO1xuXG4gICAgd2JSaWdodC5hcHBlbmRDaGlsZCh3YlJpZ2h0VG9wKTtcbiAgICB3YlJpZ2h0LmFwcGVuZENoaWxkKHdiUmlnaHRCb3R0b20pO1xuXG4gICAgd2JDZW50cmFsLmFwcGVuZENoaWxkKHdiTGVmdCk7XG4gICAgd2JDZW50cmFsLmFwcGVuZENoaWxkKGNhbnZhcyk7XG4gICAgd2JDZW50cmFsLmFwcGVuZENoaWxkKHdiUmlnaHQpO1xuICAgIFxuXG4gICAgLy9Cb3R0b21cblxuICAgIGNvbnN0IHdiQm90dG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd2JCb3R0b20uc2V0QXR0cmlidXRlKCdjbGFzcycsICd3YlRvcCcpO1xuICAgIGNvbnN0IHdiQm90dG9tTGNvcm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdiQm90dG9tTGNvcm5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3diQm90dG9tQ29ybmVyJyk7XG4gICAgY29uc3Qgd2JCb3R0b21SY29ybmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd2JCb3R0b21SY29ybmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnd2JCb3R0b21Db3JuZXInKTtcblxuICAgIHdiQm90dG9tLmFwcGVuZENoaWxkKHdiQm90dG9tTGNvcm5lcik7XG4gICAgd2JCb3R0b20uYXBwZW5kQ2hpbGQod2JCb3R0b21SY29ybmVyKTtcbiAgICBcbiAgICB3Yi5hcHBlbmRDaGlsZCh3YlRvcCk7XG4gICAgd2IuYXBwZW5kQ2hpbGQod2JDZW50cmFsKTtcbiAgICB3Yi5hcHBlbmRDaGlsZCh3YkJvdHRvbSk7XG5cbiAgICByZXR1cm4ge3difVxuICAgIFxufVxuXG5leHBvcnQge2Rpc3BsYXlXaGl0ZWJvYXJkfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBjb250cm9sbGVyIH0gZnJvbSBcIi4vY29udHJvbGxlclwiO1xuaW1wb3J0ICcuL3N0eWxlLmNzcydcblxuXG5jb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbmNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xubmFtZS5pbm5lclRleHQgPSBcIldISVRFQk9BUkRcIjtcbmNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmhvbWVCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdob21lQnRuJyk7XG5jb25zdCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmFkZEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZEJ0bicpO1xuYWRkQnRuLmlubmVyVGV4dCA9IFwiQUREXCI7XG5ob21lQnRuLmlubmVyVGV4dCA9ICdIT01FJztcbm5hdi5hcHBlbmRDaGlsZChob21lQnRuKTtcbm5hdi5hcHBlbmRDaGlsZChhZGRCdG4pO1xubmF2LmFwcGVuZENoaWxkKG5hbWUpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChuYXYpO1xuXG5cbmNvbnRyb2xsZXIoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=