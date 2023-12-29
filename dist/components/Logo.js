"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Logo = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Om Next.js useRouter finns, använd den, annars null
const useRouter = typeof window !== 'undefined' ? require('next/router').useRouter : null;
const Logo = props => {
  // Använd useRouter om den finns, annars fallback till window.location
  const router = useRouter ? useRouter() : null;
  function Home() {
    if (router) {
      router.push('https://www.146.se');
    } else {
      window.location.href = 'https://www.146.se';
    }
  }
  let size = {
    transform: "scale(".concat(props.logosize, ")")
  };
  let headerstyle = {
    marginTop: props.margin.split(',')[0],
    marginBottom: props.margin.split(',')[1]
  };
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("header", {
    style: headerstyle
  }, /*#__PURE__*/_react.default.createElement("h1", {
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
exports.Logo = Logo;
var _default = exports.default = Logo;