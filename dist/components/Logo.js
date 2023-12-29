"use strict";
'use client';

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Logo = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Logo = props => {
  const [isClient, setIsClient] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    // Uppdatera isClient till true när komponenten mountas på klienten
    setIsClient(true);
  }, []);
  function Home() {
    if (isClient) {
      // Eftersom vi är på klient-sidan kan vi säkert använda window-objektet
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
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "header",
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
  }, props.text));
};
exports.Logo = Logo;
var _default = exports.default = Logo;