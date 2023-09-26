"use client";

import { useEffect } from "react";
import Project from "./Project";
import ProjectDesc from "./ProjectDesc";
import { Content } from "@/app/types";
import Watpo01Image from '../../public/watpo01.jpg';
import ZeroWaste01Image from '../../public/zeroWaste01.jpg';
import Mg01Image from '../../public/mg01.jpg';
import CMS03Image from '../../public/cms03.jpg';
import Illus01Image from '../../public/illus01.jpg';
import { SwiperContainer } from "swiper/element";
import SwiperLoader from "./SwiperLoader";

const data: Content[] = [
    {title:"Wat Po Service Reservation System", demoUrl: '', githubUrl: 'https://github.com/YumiChen/watpo-book', images: [
      {
        src: Watpo01Image,
        alt: ""
      }
    ], description:"Responsible for front-end developing and responsive design. Including lanpage, reservation form, calender, multiple locales, and automatic room distribution API integration",tags:["react.js","redux.js","react-i18n","react-router","react-bootstrap"]},
    {title:"Zero Waste Taiwan", demoUrl: 'https://greenteamtaiwan.github.io/gt-home/index.html', githubUrl: 'https://github.com/greenteamtaiwan/green-map-taiwan-new', images: [
      {
        src: ZeroWaste01Image,
        alt: ""
      }
    ], description: "Participated in Taiwan g0v hackthon event and contributed to official website of Taiwan Zero Waste. Integrated Google Spreadsheet and Firebase for data storage",tags:["React.js","Google Spreadsheet","Firebase"]},
    {title:"Rhythm Game", demoUrl: 'https://yumichen.github.io/Rhythm-Game/index.html', githubUrl: 'https://github.com/YumiChen/Rhythm-Game', images: [
      {
        src: Mg01Image,
        alt: ""
      }  
    ], description:"Rhythm game with real-time music visualization, and customizable music selection. \r\nModern browsers and strong beat music are highly suggested for this game.",tags:["vanilla Javascript","web audio API","THREE.js"]},
    {title:"CMS System", demoUrl: '', githubUrl: 'https://github.com/YumiChen/CMS-UI-Generator', images: [
      {
        src: CMS03Image,
        alt: ""
      }
    ], description:"CMS for POS system, features dynamically rendered UI according to ajax data. \r\nSaves the trouble of adjusting UI to database schema changes.",tags:["React.js","Redux.js","Spring","MyBatis","RWD"]},
    {title:"Art Portfolio Website", demoUrl: 'https://yumichen.github.io/Website/', githubUrl: 'https://github.com/YumiChen/Website', images: [
      {
        src: Illus01Image,
        alt: ""
      }
    ], description:"Theme designed for illustration portfolios. Including features like sidebars and lightbox.",tags:["React.js","React-slick","node.js","express","SASS","RWD"]},
];

const projectsSwiperOptions = {
  slidesPerView: 1.5,
  effect: "coverflow",
  grabCursor: true,
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
    delay: 5000,
    disableOnInteraction: false
  },
  breakpoints: {
    768: {
        slidesPerView: 3
    },
  },
};
const projectsDescSwiperOptions = {
  loop: true,
};

const Projects = () =>{
  useEffect(()=>{
      setTimeout(()=>{
          const swiper: SwiperContainer | null = document.querySelector('#projects-swiper')
          const descSwiper: SwiperContainer | null = document.querySelector('#projects-desc-swiper')
          
          descSwiper?.addEventListener('activeindexchange', () => {
            if(swiper?.swiper.realIndex !== descSwiper.swiper.realIndex){
              swiper?.swiper.slideToLoop(descSwiper.swiper.realIndex);
            }
          });
          swiper?.addEventListener('activeindexchange', () => {
            if(swiper.swiper.realIndex !== descSwiper?.swiper.realIndex){
              descSwiper?.swiper.slideToLoop(swiper.swiper.realIndex);
            }
          });
      }, 0);
  }, []);

    return (<section className='relative md:min-h-[85vh] w-[100%] overflow-x-hidden overflow-y-auto pt-20'>
            <SwiperLoader id={"projects-swiper"} className="w-full" keys={data.map(data=>(data.title))} swiperOptions={projectsSwiperOptions}>
              {data.map((data, index)=>(
                    <Project content={data} index={index} key={data.title}/>
              ))}
            </SwiperLoader>
            <SwiperLoader id={"projects-desc-swiper"} className="w-full" keys={data.map(data=>(data.title))} swiperOptions={projectsDescSwiperOptions}>
              {data.map((data)=>(
                    <ProjectDesc content={data} key={data.title}/>
              ))}
            </SwiperLoader>
        </section>
        );
}

export default Projects;
