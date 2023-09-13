"use client";

import { useEffect } from "react";
import Project from "./Project";
import ProjectDesc from "./ProjectDesc";
import { Content, SwiperElement } from "@/app/types";

const data: Content[] = [
    {title:"Wat Po Service Reservation System", demoUrl: '', githubUrl: 'https://github.com/YumiChen/watpo-book', images: [
      {
        src: "/watpo01.jpg",
        alt: ""
      }, {
        src: "/watpo02.jpg",
        alt: ""
      }, {
        src: "/watpo03.jpg",
        alt: ""
      }, {
        src: "/watpo04.jpg",
        alt: ""
      }
    ], description:"Project collaborated with friend. I'm responsible for front-end developing and site design. Including lanpage, reservation form, calender, multiple locales, and automatic room distribution API integration. There're 3 layouts for RWD (desktop, pad, mobile)",tags:["react.js","redux.js","react-i18n","react-router","react-bootstrap"]},
    {title:"Zero Waste Taiwan", demoUrl: 'https://greenteamtaiwan.github.io/gt-home/index.html', githubUrl: 'https://github.com/greenteamtaiwan/green-map-taiwan-new', images: [
      {
        src: "/zeroWaste01.jpg",
        alt: ""
      }, 
      {
        src: "/zeroWaste02.jpg",
        alt: ""
      }, 
      {
        src: "/zeroWaste03.jpg",
        alt: ""
      },
      {
        src: "/zeroWaste04.jpg",
        alt: ""
      } 
    ], description: "Participated in Taiwan g0v hackthon event and contributed to official website of Taiwan Zero Waste. Integrated Google Spreadsheet and Firebase for data storage",tags:["React.js","Google Spreadsheet","Firebase"]},
    {title:"Rhythm Game", demoUrl: 'https://yumichen.github.io/Rhythm-Game/index.html', githubUrl: 'https://github.com/YumiChen/Rhythm-Game', images: [
      {
        src: "/mg01.jpg",
        alt: ""
      }, {
        src: "/mg02.jpg",
        alt: ""
      }, {
        src: "/mg03.jpg",
        alt: ""
      }, {
        src: "/mg04.jpg",
        alt: ""
      }, {
        src: "/mg05.jpg",
        alt: ""
      },      
    ], description:"Rhythm game with real-time music visualization, and customizable music selection. \r\nIncluding features like pause, set volume and calculating scores.\r\nModern browsers and strong beat music are highly suggested for this game.",tags:["vanilla Javascript","web audio API","THREE.js"]},
    {title:"CMS System", demoUrl: '', githubUrl: 'https://github.com/YumiChen/CMS-UI-Generator', images: [
      {
        src: "/cms03.jpg",
        alt: ""
      }, {
        src: "/cms04.jpg",
        alt: ""
      }, {
        src: "/cms05.jpg",
        alt: ""
      },
    ], description:"CMS for POS system, features dynamically rendered UI according to ajax data. \r\nSaves the trouble of adjusting UI to database schema changes.",tags:["React.js","Redux.js","Spring","MyBatis","RWD"]},
    {title:"Art Portfolio Website", demoUrl: 'https://yumichen.github.io/Website/', githubUrl: 'https://github.com/YumiChen/Website', images: [
      {
        src: "/illus01.jpg",
        alt: ""
      },{
        src: "/illus02.jpg",
        alt: ""
      },{
        src: "/illus03.jpg",
        alt: ""
      },
    ], description:"Theme designed for illustration portfolios. Including features like sidebars and lightbox.",tags:["React.js","React-slick","node.js","express","SASS","RWD"]},
];

const Projects = () =>{
  useEffect(()=>{
      setTimeout(()=>{
          const swiper: SwiperElement = document.querySelector('#projects-swiper')
          if(!swiper){
            return;
          }

          Object.assign(swiper, {
            slidesPerView: 1.5,
            effect: "coverflow",
            grabCursor: true,
            thumbs: {
              swiper: "#projects-desc-swiper"
            },
            centeredSlides: true,
            coverflowEffect: {
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            },
            loop: true,
            autoplay: {
              delay: 5000
            },
            breakpoints: {
              768: {
                  slidesPerView: 3
              },
            },
          });
          swiper.initialize();

          const descSwiper: SwiperElement = document.querySelector('#projects-desc-swiper')
          if(!descSwiper){
            return;
          }
          Object.assign(descSwiper, {
              loop: true,
              allowTouchMove: false,
            });
          descSwiper.initialize();
      }, 0);
  }, []);

    return (<section className='w-screen overflow-x-hidden overflow-y-auto pt-10 pb-20'>
            <swiper-container id="projects-swiper" class="w-screen" init={false}>
                {data.map((data)=>(<swiper-slide key={data.title}>
                    <Project content={data} />
                </swiper-slide>))}
            </swiper-container>
            <swiper-container id="projects-desc-swiper" init={false}>
                {data.map((data)=>(<swiper-slide key={data.title}>
                    <ProjectDesc content={data} />
                </swiper-slide>))}
            </swiper-container>
        </section>
        );
}

export default Projects;