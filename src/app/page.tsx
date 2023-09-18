"use client";

import About from '@/components/About';
import Contact from '@/components/Contact';
import Experiences from '@/components/Experiences';
import Nav from '@/components/Nav';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Top from '@/components/Top';
import { useEffect, useRef, useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { register } from 'swiper/element/bundle';
import { Comp } from './types';
import SocialMedias from '@/components/SocialMedias';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

library.add(faEnvelope, faFile, faLinkedin, faGithub);
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const comps = useRef<Comp[]>([{
    name: 'TOP',
    nav: 'Top',
    comp: <Top/>,
    animate: false,
  },
  {
    name: 'ABOUT',
    nav: 'About',
    comp: <About/>,
    animate: true,
  },
  {
    name: 'SKILLS',
    nav: 'Skills',
    comp: <Skills/>,
    animate: true,
  },{
    name: 'JOURNEY',
    nav: 'Journey',
    comp: <Experiences/>,
    animate: true,
  },
  {
    name: 'PROJECTS',
    nav: 'Projects',
    comp: <Projects/>,
    animate: true,
  },
  {
    name: 'CONTACT',
    nav: 'Contact',
    comp: <Contact/>,
    animate: true,
  }]);

  const [displayIndex, setDisplayIndex] = useState(0);

  useEffect(()=>{
    register();
    const context = gsap.context(()=>{
      comps.current.forEach(({name, animate})=>{
        if(!animate){
          return;
        }
        gsap.timeline({
          scrollTrigger: {
            trigger: `#${name}-container`,
            // markers: true,
            start: "-50px bottom-=71",
            end: "bottom-=50 top",
            toggleActions: "play reset restart reset"
          }
        })
        .from(`#${name}-header-1`, {
          x: "90vw",
          xPercent: -100,
          opacity: 0,
          duration: 1.5
        }, 0)
        .fromTo(`#${name}`, {
          x: "80px",
          y: "80px",
          opacity: 0.7,
          duration: 1
        }, {
          x: "0px",
          y: "0px",
          opacity: 1
        }, 0);
      });

      gsap.to('#network-hint', {
        x: '-1.8rem',
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: `#${comps.current[1].name}`,
          markers: true,
          start: "top bottom",
          toggleActions: "play none none reverse"
        }
      });
    });

    return () => {
      context.clear();
    };
  }, []);

  return (
    <>
      <Nav comps={comps.current} displayIndex={displayIndex} setDisplayIndex={setDisplayIndex} />
      <main className='text-white font-roboto text-3xl leading-10'>
        <div className="border-dotted fixed top-1/2 left-1/2 w-[calc(100vw-1rem)] md:w-[calc(100vw-2rem)] h-[calc(100dvh-2rem)] -translate-x-1/2 -translate-y-1/2 border-white border-4 z-50 pointer-events-none"></div>
        <div id="network-hint" className='md:block fixed right-0 transform(translateX(100%)) bottom-6 opacity-0 z-50 text-4xl'>
          <SocialMedias/>
        </div>
        {comps.current.map(({ comp , name}, index)=>{
            return (<div className={`relative min-h-[100dvh] py-[50px] md:py-[70px]`} id={`${name}-container`} key={name}>
              <div id={name}>{comp}</div>
              {index !== 0 && <h3 id={`${name}-header-1`} className="absolute top-[50px] left-0 text-right p-4 md:p-8 font-serif text-7xl md:text-9xl opacity-30 -z-10">{name}</h3>}
            </div>);
        })}
        <footer className="absolute bottom-5 text-sm md:text-lg text-center pb-7 w-full leading-6">
          <p>Latest versions of Chrome, Edge, Safari, Firefox, Opera are recommended</p>
          <p>© 2023 Yumi Chen | All Rights Reserved</p>
          <a href="https://lordicon.com/">Icons by Lordicon.com</a>
        </footer>
      </main>
    </>
  )
}
