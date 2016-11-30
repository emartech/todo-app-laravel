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
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

eval("var forms = document.querySelectorAll('form');\n\nvar todoAddHandler = function (event) {\n   event.preventDefault();\n\n   var form = event.target;\n   var todoTitle = form.querySelector('[name=\"title\"]').value;\n\n   fetch('/api/item', {\n       method: 'POST',\n       headers: {\n           'Content-Type': 'application/json'\n       },\n       body: JSON.stringify({ title: todoTitle })\n   })\n       .then(function () {\n           location.reload();\n       })\n       .catch(function (error) { return console.log(error); });\n};\n\nvar todoRemoveHandler = function (event) {\n    event.preventDefault();\n\n    var button = event.target;\n    var form = button.parentNode;\n    var listItem = button.parentNode.parentNode;\n    var todoItemId = form.querySelector('[name=id]').value;\n\n    fetch((\"/api/item/\" + todoItemId), { method: 'DELETE' })\n        .then(function (response) {\n            location.reload();\n        })\n        .catch(function (error) { return console.log(error); });\n};\n\nvar todoCompletionHandler = function (event) {\n    var todoItemId = event.target.parentNode.querySelector('[name=id]').value;\n\n    fetch((\"/api/item\" + todoItemId), { method: 'PUT' })\n        .then(function (response) {\n            console.log(response);\n        })\n        .catch(function (error) { return console.log(error); });\n};\n\nforms.forEach(function (form) {\n    var addButton = form.querySelector('[name=\"add\"]')\n    var deleteButton = form.querySelector('[name=\"delete\"]');\n    var checkbox = form.querySelector('[name=\"is_completed\"]');\n\n    if (addButton) {\n        form.addEventListener('submit', todoAddHandler);\n    }\n\n    if (deleteButton) {\n        deleteButton.addEventListener('click', todoRemoveHandler);\n    }\n\n    if (checkbox) {\n        checkbox.addEventListener('change', todoCompletionHandler);\n    }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcz84YjY3Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZvcm1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybScpO1xuXG5jb25zdCB0b2RvQWRkSGFuZGxlciA9IGV2ZW50ID0+IHtcbiAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgIGNvbnN0IGZvcm0gPSBldmVudC50YXJnZXQ7XG4gICBjb25zdCB0b2RvVGl0bGUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwidGl0bGVcIl0nKS52YWx1ZTtcblxuICAgZmV0Y2goJy9hcGkvaXRlbScsIHtcbiAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICB9LFxuICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdGl0bGU6IHRvZG9UaXRsZSB9KVxuICAgfSlcbiAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgIH0pXG4gICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG59O1xuXG5jb25zdCB0b2RvUmVtb3ZlSGFuZGxlciA9IGV2ZW50ID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgYnV0dG9uID0gZXZlbnQudGFyZ2V0O1xuICAgIGNvbnN0IGZvcm0gPSBidXR0b24ucGFyZW50Tm9kZTtcbiAgICBjb25zdCBsaXN0SXRlbSA9IGJ1dHRvbi5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgY29uc3QgdG9kb0l0ZW1JZCA9IGZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9aWRdJykudmFsdWU7XG5cbiAgICBmZXRjaChgL2FwaS9pdGVtLyR7dG9kb0l0ZW1JZH1gLCB7IG1ldGhvZDogJ0RFTEVURScgfSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xufTtcblxuY29uc3QgdG9kb0NvbXBsZXRpb25IYW5kbGVyID0gZXZlbnQgPT4ge1xuICAgIGNvbnN0IHRvZG9JdGVtSWQgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1pZF0nKS52YWx1ZTtcblxuICAgIGZldGNoKGAvYXBpL2l0ZW0ke3RvZG9JdGVtSWR9YCwgeyBtZXRob2Q6ICdQVVQnIH0pXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG59O1xuXG5mb3Jtcy5mb3JFYWNoKGZvcm0gPT4ge1xuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJhZGRcIl0nKVxuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJkZWxldGVcIl0nKTtcbiAgICBjb25zdCBjaGVja2JveCA9IGZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJpc19jb21wbGV0ZWRcIl0nKTtcblxuICAgIGlmIChhZGRCdXR0b24pIHtcbiAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0b2RvQWRkSGFuZGxlcik7XG4gICAgfVxuXG4gICAgaWYgKGRlbGV0ZUJ1dHRvbikge1xuICAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2RvUmVtb3ZlSGFuZGxlcik7XG4gICAgfVxuXG4gICAgaWYgKGNoZWNrYm94KSB7XG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRvZG9Db21wbGV0aW9uSGFuZGxlcik7XG4gICAgfVxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }
/******/ ]);