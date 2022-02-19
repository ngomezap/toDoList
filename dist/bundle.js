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
___CSS_LOADER_EXPORT___.push([module.id, "html,\nbody{\n    height: 100%;\n}\n\nnav{\n    background-color: rgb(211, 211, 211);\n    margin-bottom: 10px;\n}\n\nnav button{\n    background-color: none;\n    border-style: none;\n    height: 50px;\n    width: 15%;\n    font-size: large;\n}\n\n/*Whiteboard*/\n\n#whiteboard{\n    display: flex;\n    gap: 10px;\n    width: 65%;\n    margin-left: auto;\n    margin-right: auto;\n    border: double 5px black;\n    height: 70%;\n}\n\n.postIt{\n    background-color: rgb(243, 243, 92);\n    width: 20%;\n    font-weight: bold;\n    height: 40%;\n}\n\n.postIt ul{\n    font-weight: 100;\n}\n\n/*Post It View*/\n\n#PView{\n    background-color: rgb(243, 243, 92);\n    width: 50%;\n    display: flex;\n    flex-direction: column;\n    margin-left: auto;\n    margin-right: auto;\n    font-size: 40px;\n}\n\n#titlePView{\n    font-weight: bold;\n    align-self: center;\n    margin-bottom: 15px;\n}\n\n/*Add PostIt*/\n\n#formContainer{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#addTitle{\n    font-size: large;\n    height: 30px;\n    margin-bottom: 20px;\n    border: 2px gray solid;\n}\n\n.addTask{\n    font-size: large;\n    height: 30px;\n    border: none;\n    border-bottom: 2px solid black;\n    margin-right: 15px;\n    margin-bottom: 10px;\n}\n\n.btnDelete{\n    font-size: large;\n    border: none;\n    background-color: red;\n    font-weight: bold;\n}\n\nlabel{\n    display: none;\n}\n\n#btnAddTask{\n    width: 20%;\n    font-size: large;\n    margin-bottom: 20px;\n}\n\n#btnStickPostIt{\n    width: 20%;\n    font-size: large;\n    background-color: rgb(87, 139, 87);\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;IAEI,YAAY;AAChB;;AAEA;IACI,oCAAoC;IACpC,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,YAAY;IACZ,UAAU;IACV,gBAAgB;AACpB;;AAEA,aAAa;;AAEb;IACI,aAAa;IACb,SAAS;IACT,UAAU;IACV,iBAAiB;IACjB,kBAAkB;IAClB,wBAAwB;IACxB,WAAW;AACf;;AAEA;IACI,mCAAmC;IACnC,UAAU;IACV,iBAAiB;IACjB,WAAW;AACf;;AAEA;IACI,gBAAgB;AACpB;;AAEA,eAAe;;AAEf;IACI,mCAAmC;IACnC,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA,aAAa;;AAEb;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,YAAY;IACZ,8BAA8B;IAC9B,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,qBAAqB;IACrB,iBAAiB;AACrB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,UAAU;IACV,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,UAAU;IACV,gBAAgB;IAChB,kCAAkC;AACtC","sourcesContent":["html,\nbody{\n    height: 100%;\n}\n\nnav{\n    background-color: rgb(211, 211, 211);\n    margin-bottom: 10px;\n}\n\nnav button{\n    background-color: none;\n    border-style: none;\n    height: 50px;\n    width: 15%;\n    font-size: large;\n}\n\n/*Whiteboard*/\n\n#whiteboard{\n    display: flex;\n    gap: 10px;\n    width: 65%;\n    margin-left: auto;\n    margin-right: auto;\n    border: double 5px black;\n    height: 70%;\n}\n\n.postIt{\n    background-color: rgb(243, 243, 92);\n    width: 20%;\n    font-weight: bold;\n    height: 40%;\n}\n\n.postIt ul{\n    font-weight: 100;\n}\n\n/*Post It View*/\n\n#PView{\n    background-color: rgb(243, 243, 92);\n    width: 50%;\n    display: flex;\n    flex-direction: column;\n    margin-left: auto;\n    margin-right: auto;\n    font-size: 40px;\n}\n\n#titlePView{\n    font-weight: bold;\n    align-self: center;\n    margin-bottom: 15px;\n}\n\n/*Add PostIt*/\n\n#formContainer{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#addTitle{\n    font-size: large;\n    height: 30px;\n    margin-bottom: 20px;\n    border: 2px gray solid;\n}\n\n.addTask{\n    font-size: large;\n    height: 30px;\n    border: none;\n    border-bottom: 2px solid black;\n    margin-right: 15px;\n    margin-bottom: 10px;\n}\n\n.btnDelete{\n    font-size: large;\n    border: none;\n    background-color: red;\n    font-weight: bold;\n}\n\nlabel{\n    display: none;\n}\n\n#btnAddTask{\n    width: 20%;\n    font-size: large;\n    margin-bottom: 20px;\n}\n\n#btnStickPostIt{\n    width: 20%;\n    font-size: large;\n    background-color: rgb(87, 139, 87);\n}\n"],"sourceRoot":""}]);
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


const task1 = taskCreator("Hacer palomitas", "Check");
const task2 = taskCreator("Elegir peliculas", "Check");
const task3 = taskCreator("Comprar bebida", "Check");

const task4 = taskCreator("Forrar libros cole", "OrderedList");


const postItCreator = function (name){
    const listOfTasks = [];
    const addTask = function(task){
        listOfTasks.push(task);
    }
    const proto = Object.create(Object.assign({}, {addTask}));
    
    return Object.assign(proto, {name, listOfTasks})
}





const postIt1 = postItCreator("Noche de peli");

const postIt2 = postItCreator("Cosas colegio Eduardo");

postIt1.addTask(task1);
postIt1.addTask(task2);
postIt1.addTask(task3);

postIt2.addTask(task4);

const whiteboard = (function(){
    const listOfPostIts = [];
    const stickPostIt = function(postIt){
        listOfPostIts.push(postIt);
    }
    const removePostIt = function(postIt){
        listOfPostIts = listOfPostIts.filter(e => e !== postIt);
    }
    const showPostIts = function(){
        listOfPostIts.forEach(e => console.log(e));
    }

    const proto = Object.assign({}, {stickPostIt, removePostIt, showPostIts});

    return Object.assign(Object.create(proto), {listOfPostIts});
})()

whiteboard.stickPostIt(postIt1);
whiteboard.stickPostIt(postIt2);
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



const displayPostIt = function(e){
    (0,_clear__WEBPACK_IMPORTED_MODULE_1__["default"])();
    
    _createPostIt__WEBPACK_IMPORTED_MODULE_0__.whiteboard.listOfPostIts.forEach(postIt => {
        if(postIt.name === this.firstChild.nodeValue){
            
            const container = document.createElement('div');
            container.setAttribute('id', 'PView');
            const title = document.createElement('div');
            title.innerText = postIt.name;
            title.setAttribute('id', 'titlePView');
            container.appendChild(title);

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
    const whiteBoard = document.createElement('div');
    whiteBoard.setAttribute('id', 'whiteboard');
    document.body.appendChild(whiteBoard);
    _createPostIt__WEBPACK_IMPORTED_MODULE_0__.whiteboard.listOfPostIts.forEach(e => {
        const div = document.createElement('div');
        div.innerText = e.name;
        div.classList.add('postIt');
        const list = document.createElement('ul');
        div.appendChild(list);
        e.listOfTasks.forEach(lt => {
            const task = document.createElement('li');
            task.innerText = lt.text;
            list.appendChild(task);
        })
        whiteBoard.appendChild(div);
    })
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
const homeBtn = document.createElement('button');
homeBtn.setAttribute('id', 'homeBtn');
const addBtn = document.createElement('button');
addBtn.setAttribute('id', 'addBtn');
addBtn.innerText = "ADD";
homeBtn.innerText = 'HOME';
nav.appendChild(homeBtn);
nav.appendChild(addBtn);
document.body.appendChild(nav);


(0,_controller__WEBPACK_IMPORTED_MODULE_0__.controller)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLElBQUksMkVBQWdDO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI0Qzs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDJFQUFnQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7O1VDbkJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjBDO0FBQ3RCOzs7QUFHcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLHVEQUFVLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jbGVhci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NyZWF0ZVBvc3RJdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9kaXNwbGF5QWRkUG9zdEl0LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2Rpc3BsYXlQb3N0SXQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZGlzcGxheVdoaXRlYm9hcmQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsXFxuYm9keXtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5uYXZ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTEsIDIxMSwgMjExKTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxubmF2IGJ1dHRvbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiAxNSU7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxufVxcblxcbi8qV2hpdGVib2FyZCovXFxuXFxuI3doaXRlYm9hcmR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgd2lkdGg6IDY1JTtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgYm9yZGVyOiBkb3VibGUgNXB4IGJsYWNrO1xcbiAgICBoZWlnaHQ6IDcwJTtcXG59XFxuXFxuLnBvc3RJdHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MywgMjQzLCA5Mik7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBoZWlnaHQ6IDQwJTtcXG59XFxuXFxuLnBvc3RJdCB1bHtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG59XFxuXFxuLypQb3N0IEl0IFZpZXcqL1xcblxcbiNQVmlld3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MywgMjQzLCA5Mik7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuXFxuI3RpdGxlUFZpZXd7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcblxcbi8qQWRkIFBvc3RJdCovXFxuXFxuI2Zvcm1Db250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNhZGRUaXRsZXtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBib3JkZXI6IDJweCBncmF5IHNvbGlkO1xcbn1cXG5cXG4uYWRkVGFza3tcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uYnRuRGVsZXRle1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmxhYmVse1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jYnRuQWRkVGFza3tcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuI2J0blN0aWNrUG9zdEl0e1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODcsIDEzOSwgODcpO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztJQUVJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQSxhQUFhOztBQUViO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBLGVBQWU7O0FBRWY7SUFDSSxtQ0FBbUM7SUFDbkMsVUFBVTtJQUNWLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUEsYUFBYTs7QUFFYjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0lBQ1osOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGtDQUFrQztBQUN0Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLFxcbmJvZHl7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxubmF2e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjExLCAyMTEsIDIxMSk7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbm5hdiBidXR0b257XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogMTUlO1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbn1cXG5cXG4vKldoaXRlYm9hcmQqL1xcblxcbiN3aGl0ZWJvYXJke1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHdpZHRoOiA2NSU7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIGJvcmRlcjogZG91YmxlIDVweCBibGFjaztcXG4gICAgaGVpZ2h0OiA3MCU7XFxufVxcblxcbi5wb3N0SXR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDMsIDI0MywgOTIpO1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgaGVpZ2h0OiA0MCU7XFxufVxcblxcbi5wb3N0SXQgdWx7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcblxcbi8qUG9zdCBJdCBWaWV3Ki9cXG5cXG4jUFZpZXd7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDMsIDI0MywgOTIpO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxufVxcblxcbiN0aXRsZVBWaWV3e1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG5cXG4vKkFkZCBQb3N0SXQqL1xcblxcbiNmb3JtQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jYWRkVGl0bGV7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgYm9yZGVyOiAycHggZ3JheSBzb2xpZDtcXG59XFxuXFxuLmFkZFRhc2t7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmJ0bkRlbGV0ZXtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5sYWJlbHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI2J0bkFkZFRhc2t7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbiNidG5TdGlja1Bvc3RJdHtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg3LCAxMzksIDg3KTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjbGVhcigpe1xuICAgIGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvckFsbCgnZGl2JykuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgbm9kZS5yZW1vdmUoKTtcbiAgICB9KVxufSIsImltcG9ydCB7IGRpc3BsYXlXaGl0ZWJvYXJkIH0gZnJvbSBcIi4vZGlzcGxheVdoaXRlYm9hcmRcIlxuaW1wb3J0IHsgZGlzcGxheVBvc3RJdCB9IGZyb20gXCIuL2Rpc3BsYXlQb3N0SXRcIlxuaW1wb3J0IHsgZGlzcGxheUFkZFBvc3RJdCB9IGZyb20gXCIuL2Rpc3BsYXlBZGRQb3N0SXRcIjtcbmltcG9ydCBjbGVhciBmcm9tICcuL2NsZWFyJztcblxuY29uc3QgY29udHJvbGxlciA9IGZ1bmN0aW9uKCl7XG4gICAgLy9EaXNwbGF5IHRoZSB3aGl0ZWJvYXJkIGJ5IGRlZmF1bHRcbiAgICBkaXNwbGF5V2hpdGVib2FyZCgpO1xuXG4gICAgLy9DcmVhdGUgTGlzdGVuZXJzXG4gICAgbGlzdGVuZXJzKCk7XG5cbn1cblxuY29uc3QgbGlzdGVuZXJzID0gZnVuY3Rpb24oKXtcbiAgICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWVCdG4nKTtcbiAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkQnRuJyk7XG4gICAgY29uc3Qgd2IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2hpdGVib2FyZCcpLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3N0SXQnKTtcbiAgICBcbiAgICBob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjbGVhcigpO1xuICAgICAgICBjb250cm9sbGVyKCk7XG4gICAgfSk7XG4gICAgXG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PiB7XG4gICAgICAgIGNsZWFyKCk7XG4gICAgICAgIGRpc3BsYXlBZGRQb3N0SXQoKTtcbiAgICB9KTtcblxuICAgIC8vQWRkIGV2ZW50IGxpc3RlbmVycyB0byBwb3N0IGl0c1xuICAgIHdiLmZvckVhY2goZSA9PiB7XG4gICAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5UG9zdEl0KTtcbiAgICB9KVxufVxuXG5cbmV4cG9ydCB7Y29udHJvbGxlcn0iLCJcbmNvbnN0IHRhc2tDcmVhdG9yID0gKHRleHQpID0+IHtyZXR1cm4ge3RleHR9fVxuXG5cbmNvbnN0IHRhc2sxID0gdGFza0NyZWF0b3IoXCJIYWNlciBwYWxvbWl0YXNcIiwgXCJDaGVja1wiKTtcbmNvbnN0IHRhc2syID0gdGFza0NyZWF0b3IoXCJFbGVnaXIgcGVsaWN1bGFzXCIsIFwiQ2hlY2tcIik7XG5jb25zdCB0YXNrMyA9IHRhc2tDcmVhdG9yKFwiQ29tcHJhciBiZWJpZGFcIiwgXCJDaGVja1wiKTtcblxuY29uc3QgdGFzazQgPSB0YXNrQ3JlYXRvcihcIkZvcnJhciBsaWJyb3MgY29sZVwiLCBcIk9yZGVyZWRMaXN0XCIpO1xuXG5cbmNvbnN0IHBvc3RJdENyZWF0b3IgPSBmdW5jdGlvbiAobmFtZSl7XG4gICAgY29uc3QgbGlzdE9mVGFza3MgPSBbXTtcbiAgICBjb25zdCBhZGRUYXNrID0gZnVuY3Rpb24odGFzayl7XG4gICAgICAgIGxpc3RPZlRhc2tzLnB1c2godGFzayk7XG4gICAgfVxuICAgIGNvbnN0IHByb3RvID0gT2JqZWN0LmNyZWF0ZShPYmplY3QuYXNzaWduKHt9LCB7YWRkVGFza30pKTtcbiAgICBcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihwcm90bywge25hbWUsIGxpc3RPZlRhc2tzfSlcbn1cblxuXG5cblxuXG5jb25zdCBwb3N0SXQxID0gcG9zdEl0Q3JlYXRvcihcIk5vY2hlIGRlIHBlbGlcIik7XG5cbmNvbnN0IHBvc3RJdDIgPSBwb3N0SXRDcmVhdG9yKFwiQ29zYXMgY29sZWdpbyBFZHVhcmRvXCIpO1xuXG5wb3N0SXQxLmFkZFRhc2sodGFzazEpO1xucG9zdEl0MS5hZGRUYXNrKHRhc2syKTtcbnBvc3RJdDEuYWRkVGFzayh0YXNrMyk7XG5cbnBvc3RJdDIuYWRkVGFzayh0YXNrNCk7XG5cbmNvbnN0IHdoaXRlYm9hcmQgPSAoZnVuY3Rpb24oKXtcbiAgICBjb25zdCBsaXN0T2ZQb3N0SXRzID0gW107XG4gICAgY29uc3Qgc3RpY2tQb3N0SXQgPSBmdW5jdGlvbihwb3N0SXQpe1xuICAgICAgICBsaXN0T2ZQb3N0SXRzLnB1c2gocG9zdEl0KTtcbiAgICB9XG4gICAgY29uc3QgcmVtb3ZlUG9zdEl0ID0gZnVuY3Rpb24ocG9zdEl0KXtcbiAgICAgICAgbGlzdE9mUG9zdEl0cyA9IGxpc3RPZlBvc3RJdHMuZmlsdGVyKGUgPT4gZSAhPT0gcG9zdEl0KTtcbiAgICB9XG4gICAgY29uc3Qgc2hvd1Bvc3RJdHMgPSBmdW5jdGlvbigpe1xuICAgICAgICBsaXN0T2ZQb3N0SXRzLmZvckVhY2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XG4gICAgfVxuXG4gICAgY29uc3QgcHJvdG8gPSBPYmplY3QuYXNzaWduKHt9LCB7c3RpY2tQb3N0SXQsIHJlbW92ZVBvc3RJdCwgc2hvd1Bvc3RJdHN9KTtcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUocHJvdG8pLCB7bGlzdE9mUG9zdEl0c30pO1xufSkoKVxuXG53aGl0ZWJvYXJkLnN0aWNrUG9zdEl0KHBvc3RJdDEpO1xud2hpdGVib2FyZC5zdGlja1Bvc3RJdChwb3N0SXQyKTtcbndoaXRlYm9hcmQuc2hvd1Bvc3RJdHMoKTtcblxuXG5leHBvcnQge3doaXRlYm9hcmQsIHRhc2tDcmVhdG9yLCBwb3N0SXRDcmVhdG9yfSIsImltcG9ydCB7IGNvbnRyb2xsZXIgfSBmcm9tIFwiLi9jb250cm9sbGVyXCI7XG5pbXBvcnQgY2xlYXIgZnJvbSAnLi9jbGVhcic7XG5pbXBvcnQgeyB0YXNrQ3JlYXRvciB9IGZyb20gXCIuL2NyZWF0ZVBvc3RJdFwiO1xuaW1wb3J0IHsgcG9zdEl0Q3JlYXRvciB9IGZyb20gXCIuL2NyZWF0ZVBvc3RJdFwiO1xuaW1wb3J0IHsgd2hpdGVib2FyZCB9IGZyb20gXCIuL2NyZWF0ZVBvc3RJdFwiO1xuXG5jb25zdCBkaXNwbGF5QWRkUG9zdEl0ID0gZnVuY3Rpb24oKXtcblxuICAgIC8vTnVtYmVyIG9mIHRhc2tzIGNvdW50ZXJcbiAgICBsZXQgY291bnRlciA9IDA7XG5cbiAgICAvL0Zvcm0gY29udGFpbmVyXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1Db250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdmb3JtQ29udGFpbmVyJyk7XG5cbiAgICAvL1RpdGxlIGNvbnRhaW5lclxuICAgIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGVDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICd0aXRsZUNvbnRhaW5lcicpO1xuXG4gICAgLy9UYXNrcyBjb250YWluZXJcbiAgICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tzQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFza3NDb250YWluZXInKTtcblxuICAgIC8vVGl0bGVcbiAgICBjb25zdCBhZGRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgYWRkVGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgYWRkVGl0bGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBhZGRUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZFRpdGxlJyk7XG4gICAgYWRkVGl0bGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdUaXRsZScpO1xuICAgIGFkZFRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnYWRkVGl0bGUnKTtcbiAgICBhZGRUaXRsZUxhYmVsLmlubmVyVGV4dCA9IFwiVGl0bGVcIjtcbiAgICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUaXRsZUxhYmVsKTtcbiAgICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUaXRsZSk7XG5cbiAgICAvL0J1dHRvbiBBZGQgVGFza1xuICAgIGNvbnN0IGJ0bkFkZFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidG5BZGRUYXNrLmlubmVyVGV4dCA9IFwiQWRkIFRhc2tcIjtcbiAgICBidG5BZGRUYXNrLnNldEF0dHJpYnV0ZSgnaWQnLCAnYnRuQWRkVGFzaycpO1xuICAgIGJ0bkFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcblxuICAgICAgICByZW1vdmVFbXB0eVRhc2tzKHRhc2tzQ29udGFpbmVyKTtcbiAgICAgICAgY29uc3QgbmV3VGFzayA9IGNyZWF0ZVRhc2soY291bnRlcik7XG4gICAgICAgIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Rhc2sudGFza0NvbnQpO1xuICAgICAgICBjb3VudGVyICsrO1xuICAgIH0pO1xuXG4gICAgLy9CdXR0b24gU2VuZCBQb3N0SXRcbiAgICBjb25zdCBidG5TdGlja1Bvc3RJdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0blN0aWNrUG9zdEl0LmlubmVyVGV4dCA9IFwiU3RpY2tQb3N0SXRcIjtcbiAgICBidG5TdGlja1Bvc3RJdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2J0blN0aWNrUG9zdEl0Jyk7XG4gICAgYnRuU3RpY2tQb3N0SXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcblxuICAgICAgICAvL05vdCBzdGljayBwb3N0LWl0IGluIGNhc2UgdGl0bGUgYW5kIHRhc2tzIGFyZSBlbXB0eVxuICAgICAgICBpZihnZXRGaW5hbFRhc2tzKCkudGFza3MubGVuZ3RoID09PSAwICYmIGFkZFRpdGxlLnZhbHVlLmxlbmd0aCA9PT0gMCl7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwb3N0SXQgPSBwb3N0SXRDcmVhdG9yKGFkZFRpdGxlLnZhbHVlKTtcbiAgICAgICAgXG4gICAgICAgIGdldEZpbmFsVGFza3MoKS50YXNrcy5mb3JFYWNoKHQgPT4ge1xuICAgICAgICAgICAgcG9zdEl0LmFkZFRhc2sodGFza0NyZWF0b3IodCkpO1xuICAgICAgICB9KVxuICAgICAgICB3aGl0ZWJvYXJkLnN0aWNrUG9zdEl0KHBvc3RJdCk7XG4gICAgICAgIGNsZWFyKCk7XG4gICAgICAgIGNvbnRyb2xsZXIoKTtcbiAgICB9KTtcblxuICAgIC8vQXBwZW5kIGFsbFxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVDb250YWluZXIpO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodGFza3NDb250YWluZXIpO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoYnRuQWRkVGFzayk7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChidG5TdGlja1Bvc3RJdCk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcbn1cblxuXG4vL1RoaXMgZnVuY3Rpb24gaWYgYSB0YXNrIGNyZWF0b3IgdGhhdCByZXR1cm5zIGEgJ2Rpdidcbi8vd2l0aCBhbGwgdGhlIHRhc2tzIGFkZGVkIHRvIHRoZSBwb3N0SXRcblxuZnVuY3Rpb24gY3JlYXRlVGFzayhjb3VudGVyKXtcbiAgICAvL1Rhc2sgY29udGFpbmVyXG4gICAgY29uc3QgdGFza0NvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrQ29udC5zZXRBdHRyaWJ1dGUoJ2lkJywgYHRhc2tDb250JHtjb3VudGVyfWApO1xuXG4gICAgLy9UYXNrIGlucHVudCBhbmQgbGFiZWxcbiAgICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBhZGRUYXNrTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGFkZFRhc2suc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBhZGRUYXNrLmNsYXNzTGlzdC5hZGQoJ2FkZFRhc2snKTtcbiAgICBhZGRUYXNrLnNldEF0dHJpYnV0ZSgnaWQnLCBgdGFzayR7Y291bnRlcn1gKTtcbiAgICBhZGRUYXNrTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBgdGFzayR7Y291bnRlcn1gKTtcbiAgICBhZGRUYXNrTGFiZWwuaW5uZXJUZXh0ID0gXCJUYXNrXCI7XG5cbiAgICAvL1JlbW92ZSB0YXNrIGJ1dHRvblxuICAgIGNvbnN0IGJ0blJtdlRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidG5SbXZUYXNrLmlubmVyVGV4dCA9IFwiWFwiO1xuICAgIGJ0blJtdlRhc2suY2xhc3NMaXN0LmFkZCgnYnRuRGVsZXRlJyk7XG4gICAgYnRuUm12VGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZVRhc2spO1xuXG5cbiAgICB0YXNrQ29udC5hcHBlbmRDaGlsZChhZGRUYXNrTGFiZWwpO1xuICAgIHRhc2tDb250LmFwcGVuZENoaWxkKGFkZFRhc2spO1xuICAgIHRhc2tDb250LmFwcGVuZENoaWxkKGJ0blJtdlRhc2spO1xuXG4gICAgcmV0dXJuIHt0YXNrQ29udH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlVGFzayhlKXtcbiAgICBlLnRhcmdldC5wYXJlbnROb2RlLnJlbW92ZSgpOyAgXG59XG5cbmZ1bmN0aW9uIHJlbW92ZUVtcHR5VGFza3ModGFza3NDKXtcbiAgICAvKkNoZWNrIHRoYXQgZXZlcnkgdGFzayBoYXMgdGV4dCBvbiBpdCB3aGVuXG4gICAgYWRkaW5nIGEgbmV3IHRhc2suIElmIHNvLCByZW1vdmUgdGhlIGVtcHR5IG9uZXMqL1xuICAgIGNvbnN0IHRDID0gWy4uLnRhc2tzQy5jaGlsZE5vZGVzXVxuICAgIHRDLmZvckVhY2goKHQpID0+IHtcbiAgICAgICAgaWYoWy4uLnQuY2hpbGROb2Rlc10uYXQoMSkudmFsdWUubGVuZ3RoID09PSAwKXtcbiAgICAgICAgICAgIHQucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5mdW5jdGlvbiBnZXRGaW5hbFRhc2tzKCl7XG4gICAgY29uc3QgdGFza3MgPSBbXTsgLy9BcnJheSBvZiB0YXNrcyB0byBzZW5kXG4gICAgY29uc3QgdEMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza3NDb250YWluZXInKTtcbiAgICBjb25zdCByZXN1bHQgPSBbLi4udEMuY2hpbGROb2Rlc10uZmlsdGVyKCh0KSA9PiB7XG4gICAgICAgIHJldHVybiBbLi4udC5jaGlsZE5vZGVzXS5hdCgxKS52YWx1ZS5sZW5ndGggPiAwO1xuICAgIH0pXG4gICAgcmVzdWx0LmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgaWYoWy4uLmUuY2hpbGROb2Rlc10uYXQoMSkudmFsdWUubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICB0YXNrcy5wdXNoKFsuLi5lLmNoaWxkTm9kZXNdLmF0KDEpLnZhbHVlKTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHt0YXNrc307XG59XG5cbmV4cG9ydCB7ZGlzcGxheUFkZFBvc3RJdCwgZ2V0RmluYWxUYXNrc30iLCJpbXBvcnQgeyB3aGl0ZWJvYXJkIH0gZnJvbSBcIi4vY3JlYXRlUG9zdEl0XCI7XG5pbXBvcnQgY2xlYXIgZnJvbSAnLi9jbGVhcic7XG5cbmNvbnN0IGRpc3BsYXlQb3N0SXQgPSBmdW5jdGlvbihlKXtcbiAgICBjbGVhcigpO1xuICAgIFxuICAgIHdoaXRlYm9hcmQubGlzdE9mUG9zdEl0cy5mb3JFYWNoKHBvc3RJdCA9PiB7XG4gICAgICAgIGlmKHBvc3RJdC5uYW1lID09PSB0aGlzLmZpcnN0Q2hpbGQubm9kZVZhbHVlKXtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdQVmlldycpO1xuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRpdGxlLmlubmVyVGV4dCA9IHBvc3RJdC5uYW1lO1xuICAgICAgICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsICd0aXRsZVBWaWV3Jyk7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgICAgICAgICBwb3N0SXQubGlzdE9mVGFza3MuZm9yRWFjaCggdGFzayA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHRhc2tEaXYuaW5uZXJUZXh0ID0gdGFzay50ZXh0O1xuICAgICAgICAgICAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZCgndGFza1BWaWV3Jyk7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEaXYpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgIH0pXG59XG5cblxuXG5leHBvcnQge2Rpc3BsYXlQb3N0SXR9IiwiaW1wb3J0IHsgd2hpdGVib2FyZCB9IGZyb20gXCIuL2NyZWF0ZVBvc3RJdFwiO1xuXG5jb25zdCBkaXNwbGF5V2hpdGVib2FyZCA9IGZ1bmN0aW9uKCl7XG4gICAgY29uc3Qgd2hpdGVCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdoaXRlQm9hcmQuc2V0QXR0cmlidXRlKCdpZCcsICd3aGl0ZWJvYXJkJyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh3aGl0ZUJvYXJkKTtcbiAgICB3aGl0ZWJvYXJkLmxpc3RPZlBvc3RJdHMuZm9yRWFjaChlID0+IHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdi5pbm5lclRleHQgPSBlLm5hbWU7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdwb3N0SXQnKTtcbiAgICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChsaXN0KTtcbiAgICAgICAgZS5saXN0T2ZUYXNrcy5mb3JFYWNoKGx0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgdGFzay5pbm5lclRleHQgPSBsdC50ZXh0O1xuICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZCh0YXNrKTtcbiAgICAgICAgfSlcbiAgICAgICAgd2hpdGVCb2FyZC5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH0pXG59XG5cbmV4cG9ydCB7ZGlzcGxheVdoaXRlYm9hcmR9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNvbnRyb2xsZXIgfSBmcm9tIFwiLi9jb250cm9sbGVyXCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJ1xuXG5cbmNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuaG9tZUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWVCdG4nKTtcbmNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuYWRkQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkQnRuJyk7XG5hZGRCdG4uaW5uZXJUZXh0ID0gXCJBRERcIjtcbmhvbWVCdG4uaW5uZXJUZXh0ID0gJ0hPTUUnO1xubmF2LmFwcGVuZENoaWxkKGhvbWVCdG4pO1xubmF2LmFwcGVuZENoaWxkKGFkZEJ0bik7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5hdik7XG5cblxuY29udHJvbGxlcigpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==