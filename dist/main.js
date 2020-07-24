/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ToyReact.js":
/*!*********************!*\
  !*** ./ToyReact.js ***!
  \*********************/
/*! exports provided: Component, ToyReact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return Component; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ToyReact\", function() { return ToyReact; });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Node = /*#__PURE__*/function () {\n  function Node(tag) {\n    _classCallCheck(this, Node);\n\n    this.root = document.createElement(tag);\n  }\n\n  _createClass(Node, [{\n    key: \"setAttribute\",\n    value: function setAttribute(name, value) {\n      if (name.match(/^on[\\S\\s+]$/)) {\n        console.log(RegExp.$1.toLowerCase());\n        this.root.addEventListener(RegExp.$1.toLowerCase(), value);\n      }\n\n      this.root.setAttribute(name, value);\n    }\n  }, {\n    key: \"appendChild\",\n    value: function appendChild(vchild) {\n      vchild.$mount(this.root);\n    }\n  }, {\n    key: \"$mount\",\n    value: function $mount(parent) {\n      parent.appendChild(this.root);\n    }\n  }]);\n\n  return Node;\n}();\n\nvar TextNode = /*#__PURE__*/function () {\n  function TextNode(content) {\n    _classCallCheck(this, TextNode);\n\n    this.root = document.createTextNode(content);\n  }\n\n  _createClass(TextNode, [{\n    key: \"$mount\",\n    value: function $mount(parent) {\n      parent.appendChild(this.root);\n    }\n  }]);\n\n  return TextNode;\n}();\n\nvar Component = /*#__PURE__*/function () {\n  function Component() {\n    _classCallCheck(this, Component);\n\n    this.children = [];\n    this.props = Object.create(null);\n  }\n\n  _createClass(Component, [{\n    key: \"$mount\",\n    value: function $mount(parent) {\n      var dom = this.render();\n      dom.$mount(parent);\n    }\n  }, {\n    key: \"setAttribute\",\n    value: function setAttribute(name, value) {\n      this.props[name] = value;\n      this[name] = value;\n    }\n  }, {\n    key: \"appendChild\",\n    value: function appendChild(vchild) {\n      this.children.push(vchild);\n    }\n  }]);\n\n  return Component;\n}();\nvar ToyReact = {\n  createElement: function createElement(type, attrs) {\n    var element;\n    if (typeof type === 'string') element = new Node(type);else element = new type();\n\n    for (var name in attrs) {\n      element.setAttribute(name, attrs[name]);\n    }\n\n    var insertChildren = function insertChildren(children) {\n      children.forEach(function (ele) {\n        if (_typeof(ele) === 'object' && ele instanceof Array) {\n          insertChildren(ele);\n        } else {\n          if (!(ele instanceof Component) && !(ele instanceof Node) && !(ele instanceof TextNode)) ele = String(ele);\n\n          if (typeof ele === 'string') {\n            ele = new TextNode(ele);\n          }\n\n          element.appendChild(ele);\n        }\n      });\n    };\n\n    for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n      children[_key - 2] = arguments[_key];\n    }\n\n    insertChildren(children);\n    return element;\n  },\n  render: function render(vdom, element) {\n    vdom.$mount(element);\n  }\n};\n\n//# sourceURL=webpack:///./ToyReact.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ToyReact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToyReact */ \"./ToyReact.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar MyComponent = /*#__PURE__*/function (_Component) {\n  _inherits(MyComponent, _Component);\n\n  var _super = _createSuper(MyComponent);\n\n  function MyComponent() {\n    _classCallCheck(this, MyComponent);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(MyComponent, [{\n    key: \"render\",\n    value: function render() {\n      return _ToyReact__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].createElement(\"div\", null, _ToyReact__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].createElement(\"span\", null, \"hello\"), _ToyReact__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].createElement(\"span\", null, \"word\"), _ToyReact__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].createElement(\"span\", null, \"!!!\"), _ToyReact__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].createElement(\"div\", null, this.children));\n    }\n  }]);\n\n  return MyComponent;\n}(_ToyReact__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar Square = /*#__PURE__*/function (_Component2) {\n  _inherits(Square, _Component2);\n\n  var _super2 = _createSuper(Square);\n\n  function Square() {\n    _classCallCheck(this, Square);\n\n    return _super2.apply(this, arguments);\n  }\n\n  _createClass(Square, [{\n    key: \"render\",\n    value: function render() {\n      return _ToyReact__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].createElement(\"button\", {\n        className: \"square\",\n        onClick: function onClick() {\n          alert('click');\n        }\n      }, this.props.value);\n    }\n  }]);\n\n  return Square;\n}(_ToyReact__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar Board = /*#__PURE__*/function (_Component3) {\n  _inherits(Board, _Component3);\n\n  var _super3 = _createSuper(Board);\n\n  function Board() {\n    _classCallCheck(this, Board);\n\n    return _super3.apply(this, arguments);\n  }\n\n  _createClass(Board, [{\n    key: \"renderSquare\",\n    value: function renderSquare(i) {\n      var _this = this;\n\n      return _ToyReact__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].createElement(Square, {\n        value: i,\n        onClick: function onClick() {\n          return _this.props.onClick(i);\n        }\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return _ToyReact__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].createElement(\"div\", null, _ToyReact__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].createElement(\"div\", {\n        className: \"board-row\"\n      }, this.renderSquare(0), this.renderSquare(1), this.renderSquare(2)), _ToyReact__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].createElement(\"div\", {\n        className: \"board-row\"\n      }, this.renderSquare(3), this.renderSquare(4), this.renderSquare(5)), _ToyReact__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].createElement(\"div\", {\n        className: \"board-row\"\n      }, this.renderSquare(6), this.renderSquare(7), this.renderSquare(8)));\n    }\n  }]);\n\n  return Board;\n}(_ToyReact__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar b = _ToyReact__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].createElement(Board, null);\n_ToyReact__WEBPACK_IMPORTED_MODULE_0__[\"ToyReact\"].render(b, document.body);\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });