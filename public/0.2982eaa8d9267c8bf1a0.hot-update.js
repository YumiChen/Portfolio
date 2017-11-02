webpackHotUpdate(0,{

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _data = __webpack_require__(101);

var _reactRedux = __webpack_require__(33);

var _scroll = __webpack_require__(100);

var _scroll2 = _interopRequireDefault(_scroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About_ = function (_Component) {
  _inherits(About_, _Component);

  function About_(props) {
    _classCallCheck(this, About_);

    return _possibleConstructorReturn(this, (About_.__proto__ || Object.getPrototypeOf(About_)).call(this, props));
  }

  _createClass(About_, [{
    key: "next",
    value: function next(event) {
      document.querySelector('.works').scrollIntoView({
        behavior: 'smooth'
      });
      var offset = $('.contact').offset();
      (0, _scroll2.default)(offset);
    }
  }, {
    key: "render",
    value: function render() {
      this.next = this.next.bind(this);
      var des = this.props.lang == "EN" ? _data.about.EN : _data.about.CH;
      return React.createElement(
        "div",
        { className: "about" },
        React.createElement(
          "div",
          { id: "aboutText" },
          React.createElement(
            "p",
            null,
            "Hello!"
          ),
          React.createElement(
            "p",
            null,
            des
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
              { href: _data.links.codepen },
              React.createElement("i", { className: "fa fa-github", "aria-hidden": "true" })
            )
          )
        ),
        React.createElement(
          "p",
          { className: "next", onClick: this.next },
          "\uFE3E"
        ),
        "\xA0 \xA0 \xA0 ",
        React.createElement("div", { className: "aboutBG" })
      );
    }
  }]);

  return About_;
}(_react.Component);

var mapStateToProps_about = function mapStateToProps_about(state) {
  return { lang: state.lang };
};

var About = (0, _reactRedux.connect)(mapStateToProps_about)(About_);

module.exports = About;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ })

})