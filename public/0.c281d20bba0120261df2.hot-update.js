webpackHotUpdate(0,{

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _reactRedux = __webpack_require__(33);

var _Work = __webpack_require__(252);

var _Work2 = _interopRequireDefault(_Work);

var _debounce = __webpack_require__(253);

var _debounce2 = _interopRequireDefault(_debounce);

var _reactSlick = __webpack_require__(265);

var _reactSlick2 = _interopRequireDefault(_reactSlick);

var _data = __webpack_require__(101);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Works_ = function (_React$Component) {
  _inherits(Works_, _React$Component);

  function Works_(props) {
    _classCallCheck(this, Works_);

    return _possibleConstructorReturn(this, (Works_.__proto__ || Object.getPrototypeOf(Works_)).call(this, props));
  }

  _createClass(Works_, [{
    key: "componentWillmount",
    value: function componentWillmount() {
      var _this2 = this;

      window.removeEventListener("resize", (0, _debounce2.default)(function () {
        _this2.forceUpdate();
      }, 1000));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      window.addEventListener("resize", (0, _debounce2.default)(function () {
        _this3.forceUpdate();
      }, 1000));
    }
  }, {
    key: "render",
    value: function render() {
      var content = this.props.lang == "EN" ? _data.content_EN : _data.content_CH;

      var works = [];
      for (var i = 0; i < content.length; i++) {
        works.push(React.createElement(
          "div",
          { key: i },
          React.createElement(_Work2.default, { content: content[i], demoUrls: _data.demoUrls[i], githubUrls: _data.githubUrls[i], "data-index": i, key: i })
        ));
      }
      var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

      return React.createElement(
        "div",
        { className: "works" },
        React.createElement(
          "p",
          null,
          "WORKS"
        ),
        React.createElement(
          _reactSlick2.default,
          settings,
          works
        ),
        "\xA0 \xA0 \xA0"
      );
    }
  }]);

  return Works_;
}(React.Component);

var mapStateToProps_works = function mapStateToProps_works(state) {
  return { lang: state.lang };
};
var Works = (0, _reactRedux.connect)(mapStateToProps_works)(Works_);

module.exports = Works;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ })

})