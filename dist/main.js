/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/createPostIt.js":
/*!*****************************!*\
  !*** ./src/createPostIt.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "whiteboard": () => (/* binding */ whiteboard)
/* harmony export */ });

const taskCreator = (text, type) => {return {text, type}}

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

/***/ "./src/displayWhiteboard.js":
/*!**********************************!*\
  !*** ./src/displayWhiteboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayPostIts": () => (/* binding */ displayPostIts)
/* harmony export */ });
/* harmony import */ var _createPostIt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createPostIt */ "./src/createPostIt.js");


const displayPostIts = function(){
    _createPostIt__WEBPACK_IMPORTED_MODULE_0__.whiteboard.listOfPostIts.forEach(e => {
        const div = document.createElement('div');
        div.innerText = e.name;
        e.listOfTasks.forEach(lt => {
            const subdiv = document.createElement('div');
            subdiv.innerText = lt.text;
            div.appendChild(subdiv);
        })
        document.body.appendChild(div);
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
/******/ 			// no module.id needed
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
/* harmony import */ var _displayWhiteboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayWhiteboard */ "./src/displayWhiteboard.js");


(0,_displayWhiteboard__WEBPACK_IMPORTED_MODULE_0__.displayPostIts)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSxxQ0FBcUMsUUFBUTs7QUFFN0M7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsR0FBRyxRQUFRO0FBQzNEO0FBQ0EsaUNBQWlDLGtCQUFrQjtBQUNuRDs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQ0FBa0MsR0FBRyx1Q0FBdUM7O0FBRTVFLGdEQUFnRCxjQUFjO0FBQzlELENBQUM7O0FBRUQ7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hENEM7O0FBRTVDO0FBQ0EsSUFBSSwyRUFBZ0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMOzs7Ozs7OztVQ2JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOcUQ7O0FBRXJELGtFQUFjLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jcmVhdGVQb3N0SXQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZGlzcGxheVdoaXRlYm9hcmQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IHRhc2tDcmVhdG9yID0gKHRleHQsIHR5cGUpID0+IHtyZXR1cm4ge3RleHQsIHR5cGV9fVxuXG5jb25zdCB0YXNrMSA9IHRhc2tDcmVhdG9yKFwiSGFjZXIgcGFsb21pdGFzXCIsIFwiQ2hlY2tcIik7XG5jb25zdCB0YXNrMiA9IHRhc2tDcmVhdG9yKFwiRWxlZ2lyIHBlbGljdWxhc1wiLCBcIkNoZWNrXCIpO1xuY29uc3QgdGFzazMgPSB0YXNrQ3JlYXRvcihcIkNvbXByYXIgYmViaWRhXCIsIFwiQ2hlY2tcIik7XG5cbmNvbnN0IHRhc2s0ID0gdGFza0NyZWF0b3IoXCJGb3JyYXIgbGlicm9zIGNvbGVcIiwgXCJPcmRlcmVkTGlzdFwiKTtcblxuY29uc3QgcG9zdEl0Q3JlYXRvciA9IGZ1bmN0aW9uIChuYW1lKXtcbiAgICBjb25zdCBsaXN0T2ZUYXNrcyA9IFtdO1xuICAgIGNvbnN0IGFkZFRhc2sgPSBmdW5jdGlvbih0YXNrKXtcbiAgICAgICAgbGlzdE9mVGFza3MucHVzaCh0YXNrKTtcbiAgICB9XG4gICAgY29uc3QgcHJvdG8gPSBPYmplY3QuY3JlYXRlKE9iamVjdC5hc3NpZ24oe30sIHthZGRUYXNrfSkpO1xuICAgIFxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHByb3RvLCB7bmFtZSwgbGlzdE9mVGFza3N9KVxufVxuXG5cbmNvbnN0IHBvc3RJdDEgPSBwb3N0SXRDcmVhdG9yKFwiTm9jaGUgZGUgcGVsaVwiKTtcbmNvbnN0IHBvc3RJdDIgPSBwb3N0SXRDcmVhdG9yKFwiQ29zYXMgY29sZWdpbyBFZHVhcmRvXCIpO1xuXG5wb3N0SXQxLmFkZFRhc2sodGFzazEpO1xucG9zdEl0MS5hZGRUYXNrKHRhc2syKTtcbnBvc3RJdDEuYWRkVGFzayh0YXNrMyk7XG5cbnBvc3RJdDIuYWRkVGFzayh0YXNrNCk7XG5cbmNvbnN0IHdoaXRlYm9hcmQgPSAoZnVuY3Rpb24oKXtcbiAgICBjb25zdCBsaXN0T2ZQb3N0SXRzID0gW107XG4gICAgY29uc3Qgc3RpY2tQb3N0SXQgPSBmdW5jdGlvbihwb3N0SXQpe1xuICAgICAgICBsaXN0T2ZQb3N0SXRzLnB1c2gocG9zdEl0KTtcbiAgICB9XG4gICAgY29uc3QgcmVtb3ZlUG9zdEl0ID0gZnVuY3Rpb24ocG9zdEl0KXtcbiAgICAgICAgbGlzdE9mUG9zdEl0cyA9IGxpc3RPZlBvc3RJdHMuZmlsdGVyKGUgPT4gZSAhPT0gcG9zdEl0KTtcbiAgICB9XG4gICAgY29uc3Qgc2hvd1Bvc3RJdHMgPSBmdW5jdGlvbigpe1xuICAgICAgICBsaXN0T2ZQb3N0SXRzLmZvckVhY2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XG4gICAgfVxuXG4gICAgY29uc3QgcHJvdG8gPSBPYmplY3QuYXNzaWduKHt9LCB7c3RpY2tQb3N0SXQsIHJlbW92ZVBvc3RJdCwgc2hvd1Bvc3RJdHN9KTtcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUocHJvdG8pLCB7bGlzdE9mUG9zdEl0c30pO1xufSkoKVxuXG53aGl0ZWJvYXJkLnN0aWNrUG9zdEl0KHBvc3RJdDEpO1xud2hpdGVib2FyZC5zdGlja1Bvc3RJdChwb3N0SXQyKTtcbndoaXRlYm9hcmQuc2hvd1Bvc3RJdHMoKTtcblxuZXhwb3J0IHt3aGl0ZWJvYXJkfSIsImltcG9ydCB7IHdoaXRlYm9hcmQgfSBmcm9tIFwiLi9jcmVhdGVQb3N0SXRcIjtcblxuY29uc3QgZGlzcGxheVBvc3RJdHMgPSBmdW5jdGlvbigpe1xuICAgIHdoaXRlYm9hcmQubGlzdE9mUG9zdEl0cy5mb3JFYWNoKGUgPT4ge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LmlubmVyVGV4dCA9IGUubmFtZTtcbiAgICAgICAgZS5saXN0T2ZUYXNrcy5mb3JFYWNoKGx0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1YmRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgc3ViZGl2LmlubmVyVGV4dCA9IGx0LnRleHQ7XG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoc3ViZGl2KTtcbiAgICAgICAgfSlcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH0pXG59XG5cbmV4cG9ydCB7ZGlzcGxheVBvc3RJdHN9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBkaXNwbGF5UG9zdEl0cyB9IGZyb20gXCIuL2Rpc3BsYXlXaGl0ZWJvYXJkXCI7XG5cbmRpc3BsYXlQb3N0SXRzKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9