/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(10);


/***/ }),

/***/ 10:
/***/ (function(module, exports) {

	eval("/*** IMPORTS FROM imports-loader ***/\nvar define = false;\n\nfunction Page() {\r\n\tthis.init();\r\n}\r\n\r\n$.extend(Page.prototype, {\r\n\t\r\n\tinit: function() {\r\n\t\tthis.bindEvents();\r\n\t},\r\n\t\r\n\tbindEvents: function() {\r\n\t\tvar loginLinkA = $(\".js-login a\");\r\n\t\tvar registerLinkA = $(\".js-register a\");\r\n\t\t\r\n\t\tloginLinkA.on(\"click\", $.proxy(this.handleLoginLinkAClick, this));\r\n\t\tregisterLinkA.on(\"click\", $.proxy(this.handleRegisterLinkAClick, this));\r\n\t},\r\n\t\r\n\thandleLoginLinkAClick: function() {\r\n\t\t$(\".js-login\").addClass(\"none\");\r\n\t\t$(\".js-register\").removeClass(\"none\");\r\n\t},\r\n\t\r\n\thandleRegisterLinkAClick: function() {\r\n\t\t$(\".js-register\").addClass(\"none\");\r\n\t\t$(\".js-login\").removeClass(\"none\");\r\n\t}\r\n})\r\n\r\nnew Page();\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXgvbG9naW5fcmVnaXN0ZXIuanM/NTkwOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQiLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqIElNUE9SVFMgRlJPTSBpbXBvcnRzLWxvYWRlciAqKiovXG52YXIgZGVmaW5lID0gZmFsc2U7XG5cbmZ1bmN0aW9uIFBhZ2UoKSB7XHJcblx0dGhpcy5pbml0KCk7XHJcbn1cclxuXHJcbiQuZXh0ZW5kKFBhZ2UucHJvdG90eXBlLCB7XHJcblx0XHJcblx0aW5pdDogZnVuY3Rpb24oKSB7XHJcblx0XHR0aGlzLmJpbmRFdmVudHMoKTtcclxuXHR9LFxyXG5cdFxyXG5cdGJpbmRFdmVudHM6IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIGxvZ2luTGlua0EgPSAkKFwiLmpzLWxvZ2luIGFcIik7XHJcblx0XHR2YXIgcmVnaXN0ZXJMaW5rQSA9ICQoXCIuanMtcmVnaXN0ZXIgYVwiKTtcclxuXHRcdFxyXG5cdFx0bG9naW5MaW5rQS5vbihcImNsaWNrXCIsICQucHJveHkodGhpcy5oYW5kbGVMb2dpbkxpbmtBQ2xpY2ssIHRoaXMpKTtcclxuXHRcdHJlZ2lzdGVyTGlua0Eub24oXCJjbGlja1wiLCAkLnByb3h5KHRoaXMuaGFuZGxlUmVnaXN0ZXJMaW5rQUNsaWNrLCB0aGlzKSk7XHJcblx0fSxcclxuXHRcclxuXHRoYW5kbGVMb2dpbkxpbmtBQ2xpY2s6IGZ1bmN0aW9uKCkge1xyXG5cdFx0JChcIi5qcy1sb2dpblwiKS5hZGRDbGFzcyhcIm5vbmVcIik7XHJcblx0XHQkKFwiLmpzLXJlZ2lzdGVyXCIpLnJlbW92ZUNsYXNzKFwibm9uZVwiKTtcclxuXHR9LFxyXG5cdFxyXG5cdGhhbmRsZVJlZ2lzdGVyTGlua0FDbGljazogZnVuY3Rpb24oKSB7XHJcblx0XHQkKFwiLmpzLXJlZ2lzdGVyXCIpLmFkZENsYXNzKFwibm9uZVwiKTtcclxuXHRcdCQoXCIuanMtbG9naW5cIikucmVtb3ZlQ2xhc3MoXCJub25lXCIpO1xyXG5cdH1cclxufSlcclxuXHJcbm5ldyBQYWdlKCk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9pbmRleC9sb2dpbl9yZWdpc3Rlci5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

/******/ });