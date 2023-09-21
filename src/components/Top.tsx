import SocialMedias from '@/components/SocialMedias';
import ScrollDownHint from './ScrollDownHint';
import Image from 'next/image';
import TopImage from '../../public/Momo01.jpg';
import gsap from "gsap";
import { useEffect } from 'react';

const Top = () =>{
    useEffect(()=>{
        const context = gsap.context(()=>{
          const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#TOP-container",
                start: "top bottom",
                end: "bottom-=50% top",
                markers:true,
                toggleActions: "play reverse restart reverse"
              }
          });
          timeline.from('#top-image-1', {
            scale: 0,
            duration: 1.5,
          }, 0);
          timeline.from('#top-image-2', {
            scale: 0,
            duration: 1.5,
          }, 1);
          timeline.from(['#name', '#position'], {
            yPercent: 150,
            duration: 1.5,
          }, 0);
        });
    
        return () => {
          context.clear();
        };
      }, []);

    return (<section className='w-screen overflow-x-hidden overflow-y-auto'>
        <div className="absolute bottom-40 lg:bottom-32 md:bottom-52 text-left pl-10">
            <p className="font-serif text-2xl md:text-4xl">{"Hello! I'm"}</p>
            <div className='table overflow-hidden pr-5 pb-5'>
                <h1 id="name" className="playful underline font-lobster text-8xl text-white md:text-9xl">Yumi Chen</h1>
            </div>
            <div className='table overflow-hidden pr-5 pb-5'>
                <h2 id="position" className="playful underline my-5 text-4xl whitespace-nowrap font-lobster md:text-8xl">Front-end Engineer</h2>
            </div>
            <div className={`py-2 text-3xl table h-14 md:h-20 md:text-5xl`}>
                <SocialMedias/>
            </div>
        </div>
        {/* <div id="top-image-1" className='w-[90dvh] h-[90dvh] rounded-full overflow-hidden absolute -top-2 -right-2 -z-10 border-white border-8 outline-dotted outline-8 outline-white'>
            <Image src={TopImage} alt="top image" className='h-[100%] object-cover'></Image>
        </div>
        <div id="top-image-2" className='w-[30dvh] h-[30dvh] rounded-full overflow-hidden absolute top-2 right-1/2 -z-10 border-white border-8 outline-dotted outline-8 outline-white'>
            <Image src={TopImage} alt="top image" className='h-[100%] object-cover'></Image>
        </div> */}
        <div className='w-full text-center absolute bottom-7 px-5 text-sm md:text-lg'>
            <ScrollDownHint hintClass='pb-1'/>
            <p>Latest versions of Chrome, Edge, Safari, Firefox, Opera are recommended</p>
        </div>
    </section>);
}

export default Top;