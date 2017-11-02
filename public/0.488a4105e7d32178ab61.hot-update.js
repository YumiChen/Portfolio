webpackHotUpdate(0,{

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var changeLang = function changeLang(event) {
  console.log(event.target.innerHTML);
  if (event.target.innerHTML == "中") return { type: "CHANGE_LANG", payload: "CH" };else return { type: "CHANGE_LANG", payload: "EN" };
};

module.exports = changeLang;

/***/ })

})