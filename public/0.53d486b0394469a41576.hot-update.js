webpackHotUpdate(0,{

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _data = __webpack_require__(101);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Contact = function (_Component) {
  _inherits(Contact, _Component);

  function Contact(props) {
    _classCallCheck(this, Contact);

    return _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).call(this, props));
  }

  _createClass(Contact, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { id: "contact", className: "contact" },
        React.createElement(
          "p",
          null,
          "\uFE3E"
        ),
        React.createElement(
          "p",
          null,
          React.createElement(
            "a",
            { href: _data.links.mail },
            React.createElement("i", { className: "fa fa-envelope-o", "aria-hidden": "true" })
          ),
          React.createElement(
            "a",
            { href: _data.links.codepen },
            React.createElement("i", { className: "fa fa-codepen", "aria-hidden": "true" })
          ),
          React.createElement(
            "a",
            { href: _data.links.github },
            React.createElement("i", { className: "fa fa-github", "aria-hidden": "true" })
          )
        ),
        "\xA0 \xA0 \xA0"
      );
    }
  }]);

  return Contact;
}(_react.Component);

module.exports = Contact;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ })

})