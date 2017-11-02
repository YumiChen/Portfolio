webpackHotUpdate(0,{

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

var _react = __webpack_require__(6);

var Work = function Work(props) {
       var tags = props.content.tags.map(function (tag, index) {
              return React.createElement(
                     "span",
                     { className: "tag", key: index },
                     tag
              );
       });

       return React.createElement(
              "div",
              { className: "work" },
              React.createElement("div", { className: "img" }),
              React.createElement(
                     "p",
                     { className: "demoUrls" },
                     props.demoUrls === "" ? null : React.createElement(
                            "a",
                            { href: props.demoUrls, target: "_blank" },
                            "Demo"
                     ),
                     props.githubUrls === "" ? null : " |",
                     "        ",
                     props.githubUrls === "" ? null : React.createElement(
                            "a",
                            { href: props.githubUrls, target: "_blank" },
                            "Github Source"
                     )
              ),
              React.createElement(
                     "p",
                     null,
                     props.content.title
              ),
              React.createElement(
                     "p",
                     null,
                     props.content.description
              ),
              "\xA0 \xA0 \xA0 \xA0",
              React.createElement(
                     "p",
                     null,
                     tags
              )
       );
};

module.exports = Work;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ })

})