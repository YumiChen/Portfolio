// about, demoUrls, githubUrls, content_EN, content_CH, links

const data = {
    about: {
        EN:"My name's Yumi Chen. I'm a front-end developer and illustrator based in Taiwan. I love learning new things for it makes it possible to know more about the world and see the different side of it. The beauty and possibilities of programming  are also my favorites.",
CH:"我是Yumi，喜歡前端工程及繪圖。\n透過學校課程與自學開始學習網頁前端，而後陸續接觸了手機程式及後端。\n對日新月異的前端科技感到驚艷，吸收新知識和解決問題時覺得特別有成就感。\n其中對透過程式展現的視覺效果特別有興趣。\n希望能在前端工程繼續精進之時，同時能讓自己有更多成長。"
    },
    demoUrls: [
    "https://yumichen.github.io/Rhythm-Game/",
    "http://35.189.183.246/POS/login.do" ,  
    "https://yumichen.github.io/BookShelf/public/index.html#/",
    "https://yumichen.github.io/Website/public/index.html"
  ],githubUrls:[
    "https://github.com/YumiChen/Rhythm-Game",
    "https://github.com/YumiChen/CMS-UI-Generator",
    "https://github.com/YumiChen/BookShelf",
    "https://github.com/YumiChen/Website"
  ],
      content_EN:[
        {title:"Rhythm Game",description:"Rhythm game with real-time music visualization, and customizable music selection. Including features like pause, set volume and calculating scores.Modern browsers and strong beat music are highly suggested for this game.",tags:["vanilla Javascript","web audio API","THREE.js"]},
        {title:"CMS System",description:"CMS for POS system, features dynamically rendered UI according to ajax data. Saves the trouble of adjusting UI to database schema changes.",tags:["React.js","Redux.js","Spring","MyBatis","RWD"]},
        {title:"BookShelf",description:"Web application for recording read books and explore new favorites. Built with Google Books API.",tags:["React.js","Redux.js","Firebase","RWD"]},
        {title:"Art portfolio website",description:"Theme designed for illustration portfolios. Including features like sidebars and lightbox.",tags:["React.js","React-slick","node.js","express","SASS","RWD"]}
      ],  content_CH:[
        {title:"實時節奏遊戲",description:"結合實時音樂視覺化的節奏遊戲，使用了web audio API及three.js等一直想嘗試的技術，背景動畫及譜面由電腦運算產生，備有調節音量、計分及暫停功能，建議使用現代瀏覽器搭配節奏感強的音樂遊玩。",tags:["vanilla Javascript","web audio API","THREE.js"]},
        {title:"資料庫管理系統",description:"物流系統資料庫的內容管理網站。此物流系統為多人合作的專案，提供商品盤點、庫存查詢及報表圖表生成功能。自身負責資料庫設計、前端Android部分功能，後端API及說明文件撰寫，後端程式使用Java Spring",tags:["React.js","Redux.js","Java","Spring","MyBatis","RWD"]},
        {title:"BookShelf 書架",description:"記錄自己閱讀過的書籍並透過搜尋發現新書籍的網站，包含Lazy Loading及編輯功能，串接Google Books API撰寫而成，使用Firebase做為後端儲存會員資料及會員系統。",tags:["React.js","Redux.js","Firebase","RWD"]},
        {title:"插畫作品集網站",description:"插畫作品集網站及版型設計，將重點著重在展現插畫構圖及其自身的張力，力求簡潔俐落，使用node.js將訊息傳送自信箱及Heroku雲端服務佈署。",tags:["React.js","React-slick","node.js","express","SASS","RWD"]}
      ],
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
        }
    };

      module.exports = data;