"use client";

import About from '@/components/About';
import Contact from '@/components/Contact';
import Experiences from '@/components/Experiences';
import Nav from '@/components/Nav';
import Projects from '@/components/Projects';
import ScrollDetect from '@/components/ScrollDetect';
import Skills from '@/components/Skills';
import Top from '@/components/Top';
import { cloneElement, useCallback, useEffect, useRef, useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { register } from 'swiper/element/bundle';
import { Comp } from './types';

library.add(faEnvelope, faFile, faLinkedin, faGithub);

export default function Home() {
  const comps = useRef<Comp[]>([{
    name: ' ',
    nav: 'Top',
    comp: <Top/>,
  },
  {
    name: 'ABOUT',
    nav: 'About',
    comp: <About/>,
  },
  {
    name: 'SKILLS',
    nav: 'Skills',
    comp: <Skills/>,
  },{
    name: 'EXPERIENCES',
    nav: 'Experiences',
    comp: <Experiences/>,
  },
  {
    name: 'PAST PROJECTS',
    nav: 'Past Projects',
    comp: <Projects/>,
  },
  {
    name: 'CONTACT',
    nav: 'Contact',
    comp: <Contact/>,
  }]);

  const [displayIndex, setDisplayIndex] = useState(0);
  const [isTransition, setIsTransition] = useState(false);
  const showPrev = useCallback(() => {
    if(displayIndex === 0 || isTransition){
      return;
    }
    setIsTransition(true);
    setDisplayIndex(displayIndex - 1);
  }, [displayIndex, isTransition]);
  const showNext = useCallback(() => {
    if(displayIndex === comps.current.length - 1 || isTransition){
      return;
    }
    setIsTransition(true);
    setDisplayIndex(displayIndex + 1);
  }, [displayIndex, isTransition]);

  useEffect(()=>{
    register();
  }, []);

  return (
    <>
      <Nav comps={comps.current} displayIndex={displayIndex} setDisplayIndex={setDisplayIndex} />
      <main className='text-white font-roboto text-3xl leading-10'>
        <div 
          className={`fixed top-0 left-0 w-0 h-screen pointer-events-none z-[70] bg-yellow-200 ${isTransition? 'page-transition' : ''}`} 
          onAnimationEnd={()=>{
            setIsTransition(false);
          }} 
        ></div>
        <div className="border-dotted fixed top-1/2 left-1/2 w-[calc(100vw-1rem)] md:w-[calc(100vw-2rem)] h-[calc(100vh-2rem)] -translate-x-1/2 -translate-y-1/2 border-white border-4 z-50 pointer-events-none"></div>
        {comps.current.map(({ comp , name}, index: number)=>(
            <ScrollDetect 
              key={name} 
              index={index}
              showPrev={showPrev}
              showNext={showNext}
              name={name}
              displayIndex={displayIndex}
            >
              {cloneElement(comp, {
                isDisplayed: displayIndex === index,
              })}
            </ScrollDetect>
          ))}
      </main>
    </>
  )
}
