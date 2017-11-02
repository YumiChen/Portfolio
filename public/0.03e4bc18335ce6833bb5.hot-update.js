webpackHotUpdate(0,{

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

var _react = __webpack_require__(6);

var _reactRedux = __webpack_require__(33);

var _redux = __webpack_require__(34);

var _changeLang = __webpack_require__(248);

var _changeLang2 = _interopRequireDefault(_changeLang);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Trans = function Trans(props) {
  return React.createElement(
    "p",
    { className: "trans" },
    React.createElement(
      "span",
      { onClick: props.changeLang },
      "EN"
    ),
    " | ",
    React.createElement(
      "span",
      { onClick: props.changeLang },
      "\u4E2D"
    )
  );
};

var mapDispatchToProps_lang = function mapDispatchToProps_lang(dispatch) {
  return (0, _redux.bindActionCreators)({ changeLang: _changeLang2.default }, dispatch);
};

Trans = (0, _reactRedux.connect)(null, mapDispatchToProps_lang)(Trans);

module.exports = Trans;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ })

})