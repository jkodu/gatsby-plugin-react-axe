"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime/helpers/interopRequireWildcard"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

exports.onClientEntry = function _callee(_) {
  var pluginOptions,
      _args = arguments;
  return _regenerator["default"].async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          pluginOptions = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
          console.log("We've started!");
          wireUpReactAxe(pluginOptions);

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.onInitialClientRender = function () {
  console.log("ReactDOM.render has executed");
};

function wireUpReactAxe(pluginOptions) {
  var _showInProduction$axe, showInProduction, axeOptions, _ref, axe;

  return _regenerator["default"].async(function wireUpReactAxe$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _showInProduction$axe = _objectSpread({
            showInProduction: false,
            axeOptions: {}
          }, pluginOptions), showInProduction = _showInProduction$axe.showInProduction, axeOptions = _showInProduction$axe.axeOptions;

          if (!(process.env.NODE_ENV === 'development' || showInProduction)) {
            _context2.next = 7;
            break;
          }

          _context2.next = 4;
          return _regenerator["default"].awrap(Promise.resolve().then(function () {
            return (0, _interopRequireWildcard2["default"])(require('react-axe'));
          }));

        case 4:
          _ref = _context2.sent;
          axe = _ref["default"];
          axe(_react["default"], _reactDom["default"], 1000, axeOptions);

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  });
}