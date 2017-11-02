webpackHotUpdate(0,{

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reducer = function reducer(state, action) {
  console.log(action.payload);
  return action.payload ? action.payload : "CH";
};

module.exports = reducer;

/***/ })

})