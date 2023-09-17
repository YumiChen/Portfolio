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

  useEffect(()=>{
    register();
  }, []);

  return (
    <>
      <Nav comps={comps.current} displayIndex={displayIndex} setDisplayIndex={setDisplayIndex} />
      <main className='text-white font-roboto text-3xl leading-10'>
        <div className="border-dotted fixed top-1/2 left-1/2 w-[calc(100vw-1rem)] md:w-[calc(100vw-2rem)] h-[calc(100dvh-2rem)] -translate-x-1/2 -translate-y-1/2 border-white border-4 z-50 pointer-events-none"></div>
        <div className='hidden md:block fixed right-7 bottom-6 z-50 text-4xl'>
          <SocialMedias/>
        </div>
        {comps.current.map(({ comp , name})=>(
            <div className='relative' id={name} key={name}>
              {comp}
              <h3 className="absolute bottom-0 left-0 p-4 md:p-8 font-serif text-7xl md:text-9xl opacity-30 -z-10">{name}</h3>
              <h3 className="absolute top-0 right-0 text-right p-4 md:p-8 font-serif text-7xl md:text-9xl opacity-30 -z-10">{name}</h3>
            </div>
          ))}
      </main>
    </>
  )
}
