// about, demoUrls, githubUrls, content_EN, content_CH, links

const data = {
    title_main: "Yumi Chen", title_sub: "Front-End Developer",
    about: {
        EN:"My name's Yumi Chen. I'm a front-end developer and illustrator based in Taiwan. I love learning new things for it makes it possible to know more about the world and see the different side of it. The beauty and possibilities of programming  are also my favorites.",
CH:"我是Yumi, 畢業於國立政治大學數位內容與日文系, 於在學期間透過學校課程與自學學習了React.js, SASS等當代前端技術, 並利用前端技術實作了網頁實時視覺化音樂遊戲及線上聊天室, 書籍查詢網站等作品。\r\n由於自身外語學院與數位內容的相關背景, 吸收一手資訊與查閱文件沒有障礙, \r\n對於吸收新知與自行解決問題有信心, 也對嘗試新的解決方案有興趣。\r\n畢業後於職訓局學習了後端程式(Java)與手機程式撰寫, 於結案專案時負責了後台網站, 近百後端API, API說明文件及資料庫設計。\r\n由於自身的興趣對於設計也有所涉略, 願意為改善使用者體驗與網站美感付出心力,\r\n期望未來能與公司的同僚一同開發出不僅友善好用且易於維護的產品。"
    },
    demoUrls: [
    "https://chatchatiscool.herokuapp.com/",
    "https://yumichen.github.io/Rhythm-Game/index.html",
    "https://yumichen.github.io/CMS-UI-Generator/public/index.html" ,  
    "https://yumichen.github.io/BookShelf/public/index.html#/",
    "https://yumichen.github.io/Website/public/index.html"
  ],githubUrls:[
    "https://github.com/YumiChen/ChatChat",
    "https://github.com/YumiChen/Rhythm-Game",
    "https://github.com/YumiChen/CMS-UI-Generator",
    "https://github.com/YumiChen/BookShelf",
    "https://github.com/YumiChen/Website"
  ],
      content_EN:[
        {title:"ChatChat線上聊天室",description:"Online chatroom system with membership management system, with which user can chat with others thru inviting others with invitaion code or by searching user ID. Data of Kaomoji was crawled with cheerio.js and request.js. JWT and password encryption are used in this project.",tags:["react.js","redux.js","socket.io","Material UI","node.js","mongoDB","SASS","autoprefixer","Heroku"]},
        {title:"Rhythm Game",description:"Rhythm game with real-time music visualization, and customizable music selection. Including features like pause, set volume and calculating scores.Modern browsers and strong beat music are highly suggested for this game.",tags:["vanilla Javascript","web audio API","THREE.js"]},
        {title:"CMS System",description:"CMS for POS system, features dynamically rendered UI according to ajax data. Saves the trouble of adjusting UI to database schema changes.",tags:["React.js","Redux.js","Spring","MyBatis","RWD"]},
        {title:"BookShelf",description:"Web application for recording read books and explore new favorites. Built with Google Books API.",tags:["React.js","Redux.js","Firebase","RWD"]},
        {title:"Art portfolio website",description:"Theme designed for illustration portfolios. Including features like sidebars and lightbox.",tags:["React.js","React-slick","node.js","express","SASS","RWD"]}
      ],  content_CH:[
        {title:"ChatChat線上聊天室",description:"● 聊天室系統,會員系統(含信箱驗證)\r\n● 可透過邀請碼或用ID搜尋的方式邀請會員進入聊天室, 可使用純文字，表符或顏文字\r\n● 顏文字資料使用爬蟲取得( cheerio.js, request, fs)\r\n● 安全性: 會員密碼加密, 使用JWT及passport確保每次請求的安全性",tags:["react.js","redux.js","socket.io","Material UI","node.js","mongoDB","SASS","autoprefixer","Heroku"]},
        {title:"實時節奏遊戲",description:"● 結合實時音樂視覺化的節奏遊戲\r\n● 背景3d動畫及譜面由電腦即時運算產生，有調節音量、計分及暫停等功能\r\n● 使用者可以用自己喜歡的音樂遊玩音樂遊戲\r\n● 此專案使用原生Javascript撰寫",tags:["vanilla Javascript","web audio API","THREE.js"]},
        {title:"資料庫管理系統",description:"● 進銷存Android App及後台網站\r\n● 為多人合作的專案，提供商品盤點、庫存查詢及報表圖表生成功能\r\n● 自身負責資料庫設計,前端Android部分功能,後台網站,後端API及說明文件撰寫\r\n● 結案後將網站版型抽離成為新的模板，只需定義資料即可產生新的網站(模板放置於Github)",tags:["React.js","Redux.js","Java","Spring","MyBatis","RWD"]},
        {title:"BookShelf 書架",description:"● 能記錄使用者閱讀過的書籍及搜尋新書籍的網站\r\n● 包含Infinite Loading及編輯功能，串接Google Books API撰寫而成，使用Firebase做為後端儲存會員資料及會員系統。",tags:["React.js","Redux.js","Firebase","RWD"]},
        {title:"插畫作品集網站",description:"● 插畫作品集網站,將重點著重在展現插畫構圖及其自身的張力,力求簡潔俐落\r\n● 使用node.js撰寫email server傳送信件,及Heroku雲端服務佈署。",tags:["React.js","React-slick","node.js","express","SASS","RWD"]}
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
        "https://yumichen.github.io/React-calculator/",
        "https://yumichen.github.io/Shopping-Cart-UI/",
        "https://yumichen.github.io/Gallery-UI/",
        "https://yumichen.github.io/TicTacToe/",
        "https://yumichen.github.io/Sign-up-UI/",
        "https://yumichen.github.io/Fireworks/",
        "https://yumichen.github.io/Glowing-Colors/"
      ], 
      otherWorksGithubUrls: [
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
          backEnd: "node.js, \r\nSpring,\r\nMyBatis,\r\nExpress,\r\n MYSQL,\r\nFirebase,\r\nSQL",
          devTool: "Webpack,\r\nBabel,\r\nyarn,\r\nGit,\r\nSVN"
        }
    };

    // 瀏覽器建議: Chrome49以上, Opera47以上, Firefox55以上, Safari10.1以上, IE11以上, Edge15以上
      module.exports = data;