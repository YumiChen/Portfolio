import Image from 'next/image';
import LINE001Image from '../../public/line001.jpg';
import LINE002Image from '../../public/line002.jpg';
import LINE003Image from '../../public/line003.jpg';
import MB001Image from '../../public/mb001.jpg';
import MB002Image from '../../public/mb002.jpg';
import MB003Image from '../../public/mb003.jpg';
import { useEffect } from 'react';
import { SwiperContainer } from "swiper/element";
import gsap from "gsap";

const highlightStyle = "absolute -left-2 h-[100%] w-[10px] bg-amber-300 top-0";
const Experiences = () =>{
  useEffect(()=>{
    setTimeout(()=>{
        const lineSwiper: SwiperContainer | null = document.querySelector('#line-swiper')
        if(!lineSwiper){
          return;
        }

        Object.assign(lineSwiper, {
          pagination: true,
          autoplay: true,
          loop: true,
          spaceBetween: 10
        });
        lineSwiper.initialize();

        const musicbravoSwiper: SwiperContainer | null = document.querySelector('#musicbravo-swiper')
        if(!musicbravoSwiper){
          return;
        }
        Object.assign(musicbravoSwiper, {
          pagination: true,
          autoplay: true,
          loop: true,
          spaceBetween: 10
        });
        musicbravoSwiper.initialize();
    }, 0);

    const context = gsap.context(()=>{
      let companies = gsap.utils.toArray<HTMLElement>(".company"); 
      let highlights = gsap.utils.toArray<HTMLElement>(".highlight"); 
      let experienceItems = gsap.utils.toArray<HTMLElement>(".experience-item"); 
      companies.forEach((company)=>{
        gsap.from(company, {
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: company,
            start: "top-=50 bottom",
            end: "bottom+=50 top",
            toggleActions: "play reset restart reset"
          }
        });
      });

      highlights.forEach((highlight)=>{
        gsap.from(highlight, {
          transformOrigin: "50% 0",
          scaleY: 0,
          duration: 1,
          scrollTrigger: {
            trigger: highlight,
            start: "top-=50 bottom",
            end: "bottom+=50 top",
            toggleActions: "play reset restart reset"
          }
        });
      });

      experienceItems.forEach((experienceItem) => {
        gsap.from(experienceItem, {
          x: 200,
          duration: 1,
          scrollTrigger: {
            trigger: experienceItem,
            start: "top-=50 bottom",
            end: "bottom+=50 top",
            toggleActions: "play reset restart reset"
          }
        });
      });
    });

    return () => {
      context.clear();
    };
  }, []);

    return (<section className='md:min-h-[85vh] overflow-x-hidden overflow-y-auto px-10 md:px-40 pt-24'>
        <div id="line" className="company relative pl-4">
          <h3 className="font-serif font-bold mt-10 text-4xl md:text-5xl md:mb-3">LINE Corp.</h3>
          <h4 className="text-lg">2020 Oct. - 2023 Jul.</h4>
          <p className="text-lg">{"Product links: "}
            <a href="https://spot.line.me/article/SPOT-88a77e7a-33c1-4f58-bf1a-838eb8fa37ce" target="_blank" className="underline">1</a>{" | "}
            <a href="https://event.line.me/campaign/6e35da61-a7bc-440f-9020-c14352fe310a" target="_blank" className="underline">2</a>{" | "}
            <a href="https://today.line.me/tw/v2/tab" target="_blank" className="underline">3</a>
          </p>
          <div className={`highlight ${highlightStyle}`}></div>
        </div>
        <div className="flex flex-col lg:flex-row-reverse items-start">
          <swiper-container id="line-swiper" class="experience-item w-full lg:w-1/2" init={false}>
            <swiper-slide>
              <Image src={LINE001Image} alt="LINE Today" width={500} height={378} className="my-10 mx-auto lg:ml-auto lg:mr-0" />
            </swiper-slide>
            <swiper-slide>
              <Image src={LINE002Image} alt="LINE article" width={500} height={378} className="my-10 mx-auto lg:ml-auto lg:mr-0" />
            </swiper-slide>
            <swiper-slide>
              <Image src={LINE003Image} alt="LINE event" width={500} height={378} className="my-10 mx-auto lg:ml-auto lg:mr-0" />
            </swiper-slide>    
          </swiper-container>
          <ul className="text-2xl md:text-3xl lg:pr-1">
            <li className='experience-item'>
              <h5 className="text-yellow-200 font-bold mt-5">Campaign & Article Generation tools</h5>
              <p>With which thousands of campaign pages and millions of article pages are created by editors in the company</p>
            </li>
            <li className='experience-item'>
              <h5 className="text-yellow-200 font-bold mt-5 ">LINE Today</h5>
              <p>Contributed to LINE&#39;s popular news aggregator platform</p>
            </li>
            <li className='experience-item'>
            <h5 className="text-yellow-200 font-bold mt-5">High Traffic and large audience</h5>
            <p>
              Exposed to millions of users of LINE and promoted through LINE mobile push notifications on a daily basis</p>
            </li>
            <li className='experience-item'>
              <h5 className="text-yellow-200 font-bold mt-5">Integration & Monetization</h5>
              <p>Integrated company internal tools and IMA SDK to news video players for content monetization</p>
            </li>
            <li className='experience-item'>
              <h5 className="text-yellow-200 font-bold mt-5">Browser and Device Compatibility Optimization</h5>
              <p>Enhanced compatibility across browsers, devices, and in-app browsers through rigorous testing and analysis.</p>
            </li>
          </ul>
        </div>

        <div className="company relative pl-4">
          <h3 className="font-serif font-bold mt-10 text-4xl md:text-5xl md:mb-3">Change Healthcare, Innova Solutions</h3>
          <h4 className="text-lg">2019 May - 2020 Sep.</h4>
          <div className={`highlight ${highlightStyle}`}></div>
        </div>
        <div className="flex flex-col items-start lg:flex-row-reverse">
          <ul className="text-2xl md:text-3xl">
            <li className='experience-item'>
              <h5 className="text-yellow-200 font-bold mt-5">International Communication</h5>
              <p>Worked with members from San Franscisco, Nashville, and Chennai on a B2B medical statement printing system</p>
            </li>
            <li className='experience-item'>
              <h5 className="text-yellow-200 font-bold mt-5">Back-End Experiences</h5>
              <p>Worked on Front-end, Back-end( Node.js) and databases( MSSQL & stored procedures)</p>
            </li>
          </ul>
        </div>

        <div className="company relative pl-4">
          <h3 className="font-serif font-bold mt-10 text-4xl md:text-5xl md:mb-3">Music Bravo</h3>
          <h4 className="text-lg">2018 Jan. - 2019 Apr.</h4>
          <p className="text-lg">{"Product links: "}
            <a href="https://www.musicbravo.com.tw/Home/newpc/home" target="_blank" className="underline">1</a>{" | "}
            <a href="https://www.musicbravo.com.tw/" target="_blank" className="underline">2</a>
          </p>
          <div className={`highlight ${highlightStyle}`}></div>
        </div>
        <div className="flex flex-col lg:flex-row-reverse items-start">          
          <swiper-container id="musicbravo-swiper" class="experience-item w-full lg:w-1/2" init={false}>
            <swiper-slide>
              <Image src={MB001Image} width={500} height={293} alt="Music Bravo home page" className="my-10 mx-auto lg:ml-auto lg:mr-0" />
            </swiper-slide>
            <swiper-slide>
              <Image src={MB002Image} width={500} height={293} alt="Payment integration" className="my-10 mx-auto lg:ml-auto lg:mr-0" />
            </swiper-slide>
            <swiper-slide>
              <Image src={MB003Image} width={500} height={293} alt="Campaign page" className="my-10 mx-auto lg:ml-auto lg:mr-0" />
            </swiper-slide>    
          </swiper-container>
          <ul className="text-2xl md:text-3xl lg:pr-1">
            <li className='experience-item'>
              <h5 className="text-yellow-200 font-bold mt-5">Digital Music Platform</h5>
              <p>Worked on online indie music steaming and monetization website. Responsible for front-end development, code optimization, SEO, cross-browser compatility, and development process optimization</p>
            </li>
            <li className='experience-item'>
              <h5 className="text-yellow-200 font-bold mt-5">Campaign Cooperation & Website Exposure</h5>
              <p>Created campaign pages for indie music competition, Myfone Mobile Creation Award, Want Want China Filial Piety Songwriting Creation Award .etc</p>
            </li>
            <li className='experience-item'>
              <h5 className="text-yellow-200 font-bold mt-5">Third-Party Service Integration</h5>
              <p>Integrated third-party services like mobile payment platforms, including LINE Pay and JKO pay, Ali pay, and Wechat pay, and third-party social share APIs</p>
            </li>
          </ul>
        </div>
    </section>);
}

export default Experiences;
