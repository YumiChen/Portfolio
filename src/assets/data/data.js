// about, demoUrls, githubUrls, content_EN, content_CH, links

const data = {
    title_main: "Yumi Chen", title_sub: "Web Developer",
    about: {
        EN:"My name's Yumi Chen. I'm a front-end developer and illustrator based in Taiwan. I love learning new things for it makes it possible to know more about the world and see the different side of it. The beauty and possibilities of programming  are also my favorites.",
CH:"我是Yumi, 現為任職於科技公司的前端工程師，具開發大型商業網站經驗，負責台灣大哥大行動創作獎，孝親獎等網站合作活動的線上功能開發。於工作中亦對優化工作流程不遺餘力。曾有與他人合作接案開發預約系統經驗，現服務已於應用程式商店開放下載。\r\n由於對設計也有所涉略, 願意為改善使用者體驗與產品美感付出心力,\r\n期望未來能與同僚一同開發不僅友善好用且易於維護的產品。"
    },
    demoUrls: [
    "https://www.musicbravo.com.tw/",
    "https://play.google.com/store/apps/details?id=com.stevia_network.watpo",
    "https://yumichen.github.io/Rhythm-Game/index.html",
    "https://yumichen.github.io/CMS-UI-Generator/public/index.html#" ,  
    "https://yumichen.github.io/Website/",
    // "https://chatchatiscool.herokuapp.com/",
    "",
    "https://yumichen.github.io/BookShelf/public/index.html#/"
  ],githubUrls:[
    "",
    "https://github.com/YumiChen/watpo-book",
    "https://github.com/YumiChen/Rhythm-Game",
    "https://github.com/YumiChen/CMS-UI-Generator",
    "https://github.com/YumiChen/Website",
    "https://github.com/YumiChen/ChatChat",
    "https://github.com/YumiChen/BookShelf"
  ],
      content_EN:[
        {title:"MusicBravo",description:"● Collaborate with UI/UX designer and back-end engineer, DBA to build and maintain web application product\r\n● Build event sites for events like Myfone Mobile Creation Award, Want Want China Filial Piety Songwriting Creation Award\r\n● Participate in discussion of product designing and assure feasibility\r\n● Responsible for front-end development, code optimization, SEO, interacting with RESTful API services provided by back-end developer, ensuring cross browser compatility, developing process optimization.\r\n● Work with third party services providers,  including JKO pay,  Ali pay, Wechat pay and social share APIs of multiple platforms.",tags:["react.js","redux.js","react-router"]},
        {title:"Wat Po Service Reservation System",description:"● Project codeveloped with friend. I'm responsible for front-end developing and site design.\r\n● Content including lanpage, reservation form, calender, multiple locales, \r\noption modification based on user input, and automatic room distribution\r\n● 3 layouts for RWD (desktop, pad, mobile)",tags:["react.js","redux.js","react-i18n","react-router","react-bootstrap"]},
        {title:"Rhythm Game",description:"Rhythm game with real-time music visualization, and customizable music selection. \r\nIncluding features like pause, set volume and calculating scores.\r\nModern browsers and strong beat music are highly suggested for this game.",tags:["vanilla Javascript","web audio API","THREE.js"]},
        {title:"CMS System",description:"CMS for POS system, features dynamically rendered UI according to ajax data. \r\nSaves the trouble of adjusting UI to database schema changes.",tags:["React.js","Redux.js","Spring","MyBatis","RWD"]},
        {title:"Art Portfolio Website",description:"Theme designed for illustration portfolios. Including features like sidebars and lightbox.",tags:["React.js","React-slick","node.js","express","SASS","RWD"]},
        {title:"ChatChat Online Chatroom",description:"Online chatroom system with membership management system, \r\nwith which user can chat with others thru inviting others with invitaion code or by searching user ID. \r\nData of Kaomoji was crawled with cheerio.js and request.js. \r\nJWT and password encryption are used in this project.",tags:["react.js","socket.io","Material UI","node.js","mongoDB","autoprefixer"]},
        {title:"BookShelf",description:"Web application for recording read books and explore new favorites. Built with Google Books API.",tags:["React.js","Redux.js","Firebase","RWD"]}
        
      ],  content_CH:[
        {title:"音樂霸 MusicBravo",description: "● 為數位音樂銷售及線上音樂人才專案媒合的平台。\r\n負責前端程式開發、架構設計、SEO、前端程式優化、後端 API 串接、跨瀏覽器樣式調校、優化開發流程\r\n● 和設計師、後端工程師、DBA 合作開發及維護產品、開發活動行銷網頁,\r\n如: 台灣大哥大行動創作獎、旺旺孝親獎，及參與產品規格討論會議，確保方案可行性及提供技術建議\r\n● 網站功能串接了第三方金流服務及分享服務, 如: 街口支付、支付寶、微信支付、台灣及中國社交平台分享功能。",tags:["react.js","redux.js","react-router"]},
        {title:"泰和殿服務預約網站",description:"● 為與朋友合作開發的案子，自身負責服務預約網站前端開發、設計\r\n● 網站包含Lanpage、預約表單、日曆、多語系、根據使用者輸入的資料調整選項及自動分配房間等功能\r\n● 包含RWD設計，有三種版型(桌機，平板，手機)",tags:["react.js","redux.js","react-i18n","react-router","react-bootstrap"]},
        {title:"實時節奏遊戲",description:"● 結合實時音樂視覺化的節奏遊戲\r\n● 背景3d動畫及譜面由電腦即時運算產生，有調節音量、計分及暫停等功能\r\n● 使用者可以用自己喜歡的音樂遊玩音樂遊戲\r\n● 此專案使用原生Javascript撰寫",tags:["vanilla Javascript","web audio API","THREE.js"]},
        {title:"資料庫管理系統",description:"● 進銷存Android App及後台網站\r\n● 為多人合作的專案，提供商品盤點、庫存查詢及報表圖表生成功能\r\n● 自身負責資料庫設計,前端Android部分功能,後台網站,後端API及說明文件撰寫\r\n● 結案後將網站版型抽離成為新的模板，只需定義資料即可產生新的網站(模板放置於Github)",tags:["React.js","Redux.js","Java","Spring","MyBatis","RWD"]},
        {title:"插畫作品集網站",description:"● 插畫作品集網站,將重點著重在展現插畫構圖及其自身的張力,力求簡潔俐落\r\n● 使用node.js撰寫email server傳送信件,及Heroku雲端服務佈署。",tags:["React.js","React-slick","node.js","express","SASS","RWD"]},
        {title:"ChatChat線上聊天室",description:"● 聊天室系統,會員系統(含信箱驗證)\r\n● 可透過邀請碼或用ID搜尋的方式邀請會員進入聊天室, 可使用純文字，表符或顏文字\r\n● 顏文字資料使用爬蟲取得( cheerio.js, request, fs)\r\n● 安全性: 會員密碼加密, 使用JWT及passport確保每次請求的安全性",tags:["react.js","socket.io","Material UI","node.js","mongoDB","autoprefixer"]},
        {title:"BookShelf 書架",description:"● 能記錄使用者閱讀過的書籍及搜尋新書籍的網站\r\n● 包含Infinite Loading及編輯功能，串接Google Books API撰寫而成，使用Firebase做為後端儲存會員資料及會員系統。",tags:["React.js","Redux.js","Firebase","RWD"]}
      ],
      swipeHint_CH: "滑動",
      swipeHint_EN: "Swipe",
      otherWorks_EN: [
               {title:"React Calculator",description:"Calculator built with React.js. Offering random color chips whenever numbers are inputted. Inspired by the frequent need of color palette inspiration.",tags:["React.js","RWD"]},
               {title:"Shopping Cart UI",description:"UI design for shopping cart and credit card checkout. Developed with Vue.js. Intented to bring a different experience when browsing products.",tags:["Vue.js","slick.js","jQuery","RWD"]},
               {title:"Gallery UI",description:"Gallery UI design with photo-like effects and lightbox, which made use of CSS box-shadow property.",tags:["SASS"]},
               {title:"Tictactoe",description:"TicTacToe game which includes two playing modes(single& dual). Including RWD.",tags:["vanilla Javascript","SASS","RWD"]},   
               {title:"Sign up UI",description:"Sign up UI design. Coded according to PSD file.",tags:["SASS"]},     {title:"Fireworks",description:"Firework effects built with SASS. Fireworks and the color of sparks are dynamically generated.",tags:["vanilla Javascript","SASS"]},
               {title:"Glowing Colors",description:"Exploring the possibilities of Javascript canvas and simple physics.",tags:["canvas"]}
      ],
      otherWorks_CH: [
               {title:"色票計算機",description:"在輸入數字時同時隨機顯示色票的計算機，為開始學習React後初次撰寫的作品，靈感來自於日常搭配顏色時毫無頭緒的苦惱。",tags:["React.js","RWD"]},
               {title:"購物車界面設計",description:"購物車及信用卡結帳介面設計，共有預覽商品及購物車預覽和信用卡資訊輸入等頁面，技術使用Vue.js",tags:["Vue.js","slick.js","jQuery","RWD"]},
               {title:"畫廊展示介面",description:"模擬相片效果的簡單圖片展示介面，為思考CSS陰影效果後產生的作品",tags:["SASS"]},
               {title:"圈叉遊戲",description:"以原生Javascript撰寫的圈叉遊戲，包含單人及雙人模式。",tags:["vanilla Javascript","SASS","RWD"]},
               {title:"登入介面設計",description:"簡單的登入介面設計，為嘗試由PSD轉換成程式的作品。",tags:["SASS"]},
               {title:"絢爛煙火",description:"隨著滑鼠點擊產生隨機顏色煙火的互動效果",tags:["vanilla Javascript","SASS"]},
               {title:"繽紛色彩",description:"運用Canvas及簡單的物理所產生的作品，試圖運用網頁及簡單的數學創造出特別的視覺效果",tags:["canvas"]}
      ],
      otherWorksDemoUrls: [
        "https://yumichen.github.io/Bubbles/",
        "https://yumichen.github.io/React-calculator/",
        "https://codepen.io/Yumichen/pen/vxzbbG",
        "https://yumichen.github.io/Gallery-UI/",
        "https://yumichen.github.io/TicTacToe/",
        "https://yumichen.github.io/Sign-up-UI/",
        "https://yumichen.github.io/Fireworks/",
        "https://yumichen.github.io/Glowing-Colors/"
      ], 
      otherWorksGithubUrls: [
        "https://github.com/YumiChen/Bubbles",
        "https://github.com/YumiChen/React-calculator",
        "https://github.com/YumiChen/Shopping-Cart-UI",
        "https://github.com/YumiChen/Gallery-UI",
        "https://github.com/YumiChen/TicTacToe",
        "https://github.com/YumiChen/Sign-up-UI",
        "https://github.com/YumiChen/Fireworks",    
        "https://github.com/YumiChen/Glowing-Colors"
      ],
      links: {
            mail:"mailto:monorhapsody@gmail.com",
            codepen:"https://codepen.io/Yumichen/",
            github:"https://github.com/YumiChen"
        },
        browserSuggestion: "瀏覽器建議: Chrome, Opera, Firefox, Safari",
        copyright: "Copyright © 2017 Yumi Chen",
        skills: {
          frontEnd:"React.js,\r\nRedux.js,\r\nSASS,\r\nUI/UX",
          backEnd: "Express,\r\n MYSQL,\r\nSQL,\r\nFirebase",
          devTool: "Webpack,\r\nBabel,\r\nyarn,\r\nGit"
        }
    };

    // 瀏覽器建議: Chrome49以上, Opera47以上, Firefox55以上, Safari10.1以上, IE11以上, Edge15以上
      module.exports = data;