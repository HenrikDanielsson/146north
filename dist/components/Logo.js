"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Logo146 = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Logo146.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Call this using <Logo146 text="Layout | Design | Code" />

const Logo146 = props => {
  function Home() {
    window.location.href = 'https://www.146.se';
  }
  let size = {
    transform: "scale(" + props.size + ")"
  };
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("header", null, /*#__PURE__*/_react.default.createElement("h1", {
    onClick: Home,
    style: size
  }, "14", /*#__PURE__*/_react.default.createElement("span", {
    className: "reverse"
  }, "6"), /*#__PURE__*/_react.default.createElement("span", {
    className: "small"
  }, ".S", /*#__PURE__*/_react.default.createElement("span", {
    className: "rotate"
  }, "E"))), /*#__PURE__*/_react.default.createElement("h2", {
    className: "slogan"
  }, props.text)));
};
exports.Logo146 = Logo146;
var _default = exports.default = Logo146;