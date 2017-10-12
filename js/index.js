"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function scroll(object) {
  $('html,body').animate({ scrollTop: object.top }, 500);
};

// TODO use ajax instead
var demoUrls = ["https://yumichen.github.io/Rhythm-Game/", "", "https://yumichen.github.io/React-calculator/", "https://yumichen.github.io/Website/", "https://yumichen.github.io/Shopping-Cart-UI/", "https://yumichen.github.io/Gallery-UI/", "https://yumichen.github.io/TicTacToe/", "", "https://yumichen.github.io/Sign-up-UI/", "https://yumichen.github.io/Fireworks/", "https://yumichen.github.io/Glowing-Colors/"],
    githubUrls = ["https://github.com/YumiChen/Rhythm-Game", "", "https://github.com/YumiChen/React-calculator", "https://github.com/YumiChen/Website", "https://github.com/YumiChen/Shopping-Cart-UI", "https://github.com/YumiChen/Gallery-UI", "https://github.com/YumiChen/TicTacToe", "", "https://github.com/YumiChen/Sign-up-UI", "https://github.com/YumiChen/Fireworks", "https://github.com/YumiChen/Glowing-Colors"],
    about = { EN: "My name's Yumi Chen. I'm a front-end developer and illustrator based in Taiwan.", CH: "我是Yumi，喜歡前端工程及繪圖。透過自學開始學習網頁前端，而後陸續接觸了手機程式及後端。對日新月異的前端科技感到驚艷，吸收新知識和解決問題時覺得特別有成就感。對透過程式展現的視覺效果特別有興趣。希望能在前端工程繼續精進之時，同時能讓自己有更多成長。" },
    content_EN = [{ title: "Rhythm Game", description: "Rhythm game with real-time music visualization, and customizable music selection.Modern browsers and strong beat music are highly suggested for this game.", tags: ["vanilla Javascript", "web audio API", "THREE.js"] }, { title: "CMS System", description: "CMS for POS system", tags: ["React.js", "Redux.js", "Spring", "MyBatis"] }, { title: "React Calculator", description: "Calculator built with React.js. Offering random color chips whenever numbers are inputted. Inspired by the frequent need of color palette inspiration.", tags: ["React.js"] }, { title: "Art portfolio website", description: "Theme designed for illustration portfolios.", tags: ["React.js", "React-slick", "SASS"] }, { title: "Shopping Cart UI", description: "UI design for shopping cart and credit card checkout", tags: ["Vue.js", "slick.js", "jQuery"] }, { title: "Gallery UI", description: "", tags: ["SASS"] }, { title: "Tictactoe", description: "TicTacToe game which includes two playing modes(single& dual)", tags: ["vanilla Javascript", "SASS"] }, { title: "BookShelf", description: "Web application for recording read books and explore new favorites. Built with Google Books API.", tags: ["React.js", "Redux.js"] }, { title: "Sign up UI", description: "", tags: ["SASS"] }, { title: "Fireworks", description: "", tags: ["vanilla Javascript", "SASS"] }, { title: "Glowing Colors", description: "", tags: ["canvas"] }],
    content_CH = [{ title: "實時節奏遊戲", description: "結合實時音樂視覺化的節奏遊戲，強烈建議使用現代瀏覽器搭配節奏感強的音樂遊玩。", tags: ["vanilla Javascript", "web audio API", "THREE.js"] }, { title: "資料庫管理系統", description: "物流系統資料庫的內容管理網站。此物流系統為多人合作的專案，提供商品盤點、庫存查詢及報表圖表生成功能。自身負責資料庫設計、前端Android部分功能，後端API及說明文件撰寫，後端程式使用Java Spring", tags: ["React.js", "Redux.js", "Spring", "MyBatis"] }, { title: "色票計算機", description: "在輸入數字時同時隨機顯示色票的計算機，靈感來自於日常搭配顏色時毫無頭緒的苦惱。", tags: ["React.js"] }, { title: "插畫作品集網站", description: "插畫作品集版型設計，將重點著重在展現插畫構圖及其自身的張力，力求簡潔俐落。", tags: ["React.js", "React-slick", "SASS"] }, { title: "購物車界面設計", description: "購物車及信用卡結帳介面設計", tags: ["Vue.js", "slick.js", "jQuery"] }, { title: "畫廊展示介面", description: "模擬相片效果的圖片展示介面", tags: ["SASS"] }, { title: "圈叉遊戲", description: "以原生Javascript撰寫的圈叉遊戲，包含單人及雙人模式。", tags: ["vanilla Javascript", "SASS"] }, { title: "BookShelf 書架", description: "記錄自己閱讀過的書籍並透過搜尋發現新書籍的網站，串接Google Books API撰寫而成。", tags: ["React.js", "Redux.js"] }, { title: "登入介面設計", description: "", tags: ["SASS"] }, { title: "絢爛煙火", description: "隨著滑鼠點擊產生隨機顏色煙火的互動效果", tags: ["vanilla Javascript", "SASS"] }, { title: "繽紛色彩", description: "", tags: ["canvas"] }],
    links = { mail: "mailto:monorhapsody@gmail.com", codepen: "https://codepen.io/Yumichen/", github: "https://github.com/YumiChen" };

// action creator
var changeLang = function changeLang(event) {
  if (event.target.innerHTML == "中") return { type: "CHANGE_LANG", payload: "CH" };else return { type: "CHANGE_LANG", payload: "EN" };
};

//reducer
var reducer = function reducer(state, action) {
  return action.payload ? action.payload : "CH";
};

// root reducer
var rootReducer = Redux.combineReducers({
  lang: reducer
});

// UI comps
var count = 0,
    interval = undefined;

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
      "中"
    )
  );
};

var mapDispatchToProps_lang = function mapDispatchToProps_lang(dispatch) {
  return Redux.bindActionCreators({ changeLang: changeLang }, dispatch);
};

Trans = ReactRedux.connect(null, mapDispatchToProps_lang)(Trans);

var Top = function (_React$Component) {
  _inherits(Top, _React$Component);

  function Top(props) {
    _classCallCheck(this, Top);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = { title: "" };
    _this.type = _this.type.bind(_this);
    interval = setInterval(_this.type, 500);
    return _this;
  }

  Top.prototype.type = function type() {
    var title = "Hello!";
    var str = this.state.title + title[count];
    this.setState({ title: str });
    count++;
    if (count == title.length) clearInterval(interval);
  };

  Top.prototype.next = function next(event) {
    document.querySelector('#aboutText').scrollIntoView({
      behavior: 'smooth'
    });
    var offset = $('.about').offset();
    scroll(offset);
  };

  Top.prototype.render = function render() {
    this.next = this.next.bind(this);
    return React.createElement(
      "div",
      { className: "top" },
      React.createElement(
        "p",
        { className: "title" },
        this.state.title,
        React.createElement("span", { className: "typing" })
      ),
      React.createElement(
        "p",
        { className: "next", onClick: this.next },
        "︾"
      )
    );
  };

  return Top;
}(React.Component);

var About_ = function (_React$Component2) {
  _inherits(About_, _React$Component2);

  function About_(props) {
    _classCallCheck(this, About_);

    return _possibleConstructorReturn(this, _React$Component2.call(this, props));
  }

  About_.prototype.next = function next(event) {
    document.querySelector('.works').scrollIntoView({
      behavior: 'smooth'
    });
    var offset = $('.contact').offset();
    scroll(offset);
  };

  About_.prototype.render = function render() {
    this.next = this.next.bind(this);
    var des = this.props.lang == "EN" ? about.EN : about.CH;
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
            { href: links.mail },
            React.createElement("i", { className: "fa fa-envelope-o", "aria-hidden": "true" })
          ),
          React.createElement(
            "a",
            { href: links.codepen },
            React.createElement("i", { className: "fa fa-codepen", "aria-hidden": "true" })
          ),
          React.createElement(
            "a",
            { href: links.codepen },
            React.createElement("i", { className: "fa fa-github", "aria-hidden": "true" })
          )
        )
      ),
      React.createElement(
        "p",
        { className: "next", onClick: this.next },
        "︾"
      ),
      "      ",
      React.createElement("div", { className: "aboutBG" })
    );
  };

  return About_;
}(React.Component);

var mapStateToProps_about = function mapStateToProps_about(state) {
  return { lang: state.lang };
};

var About = ReactRedux.connect(mapStateToProps_about)(About_);

var Work = function Work(props) {
  var tags = props.content.tags.map(function (tag) {
    return React.createElement(
      "span",
      { className: "tag" },
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
      props.demoUrls === "" ? null : " |",
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
    "       ",
    React.createElement(
      "p",
      null,
      tags
    )
  );
};

var Works_ = function (_React$Component3) {
  _inherits(Works_, _React$Component3);

  function Works_(props) {
    _classCallCheck(this, Works_);

    return _possibleConstructorReturn(this, _React$Component3.call(this, props));
  }

  Works_.prototype.componentWillmount = function componentWillmount() {
    var _this4 = this;

    window.removeEventListener("resize", debounce(function () {
      _this4.forceUpdate();
    }, 1000));
  };

  Works_.prototype.componentDidMount = function componentDidMount() {
    var _this5 = this;

    window.addEventListener("resize", debounce(function () {
      _this5.forceUpdate();
    }, 1000));
  };

  Works_.prototype.render = function render() {
    var content = this.props.lang == "EN" ? content_EN : content_CH;

    var works = [];
    for (var i = 0; i < content.length; i++) {
      works.push(React.createElement(
        "div",
        null,
        React.createElement(Work, { content: content[i], demoUrls: demoUrls[i], githubUrls: githubUrls[i], "data-index": i, key: i })
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
        Slider,
        settings,
        works
      ),
      "     "
    );
  };

  return Works_;
}(React.Component);

var mapStateToProps_works = function mapStateToProps_works(state) {
  return { lang: state.lang };
};
var Works = ReactRedux.connect(mapStateToProps_works)(Works_);

var Contact = function (_React$Component4) {
  _inherits(Contact, _React$Component4);

  function Contact(props) {
    _classCallCheck(this, Contact);

    return _possibleConstructorReturn(this, _React$Component4.call(this, props));
  }

  Contact.prototype.render = function render() {
    return React.createElement(
      "div",
      { id: "contact", className: "contact" },
      React.createElement(
        "p",
        null,
        "︾"
      ),
      React.createElement(
        "p",
        null,
        React.createElement(
          "a",
          { href: links.mail },
          React.createElement("i", { className: "fa fa-envelope-o", "aria-hidden": "true" })
        ),
        React.createElement(
          "a",
          { href: links.codepen },
          React.createElement("i", { className: "fa fa-codepen", "aria-hidden": "true" })
        ),
        React.createElement(
          "a",
          { href: links.github },
          React.createElement("i", { className: "fa fa-github", "aria-hidden": "true" })
        )
      ),
      "     "
    );
  };

  return Contact;
}(React.Component);

var Footer = function Footer() {
  return React.createElement(
    "p",
    { className: "footer" },
    "Copyright © 2017 Yumi Chen"
  );
};

// TODO set storage and provider
var Provider = ReactRedux.Provider,
    store = Redux.createStore(rootReducer);

var App = function (_React$Component5) {
  _inherits(App, _React$Component5);

  function App(props) {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _React$Component5.call(this, props));
  }

  App.prototype.render = function render() {
    return React.createElement(
      Provider,
      { store: store },
      React.createElement(
        "div",
        null,
        "       ",
        React.createElement(Trans, null),
        "       ",
        React.createElement(Top, null),
        React.createElement(About, null),
        React.createElement(Works, null),
        React.createElement(Contact, null),
        "       ",
        React.createElement(Footer, null),
        "       "
      )
    );
  };

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.body);

function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
        args = arguments;
    var later = function later() {
      timeout = null;if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};