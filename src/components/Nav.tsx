"use client"

import { faBars, faCircleXmark } from "../../node_modules/@fortawesome/free-solid-svg-icons/index";
import { useCallback, useEffect, useRef, useState } from "react";

import { Comp } from "@/app/types";
import { FontAwesomeIcon } from "../../node_modules/@fortawesome/react-fontawesome/index";
import Image from 'next/image';
import NavButtonImage from '../../public/rainbow.svg';
import SocialMedias from '@/components/SocialMedias';
import backgroundImage from '../../public/Momo01.jpg';

interface NavProps {
  comps: Comp[];
}
const Nav = ({comps}: NavProps) =>{
    const [showNav, setShowNav] = useState(false);
    const isNavOut = useRef(false);
    const toggleNav = useCallback(()=>{
      setShowNav(!showNav);
      isNavOut.current = showNav;
    }, [setShowNav, showNav]);

    const onNavItemClick = useCallback((name: string)=>{
      const target = document.getElementById(`${name}-container`);
      target?.scrollIntoView();

      setShowNav(false);
      isNavOut.current = true;
    }, []);

    useEffect(()=>{
      if(showNav){
        document.querySelector('html')?.setAttribute('style', 'overflow-y: hidden;');
      }else{
        document.querySelector('html')?.setAttribute("style", "overflow-y: auto;");
      }
    }, [showNav]);

    return (<nav className="z-40 font-lobster text-white">
      <div className={`${showNav? "pointer-events-auto nav-in" : "pointer-events-none"}
            ${isNavOut.current? "nav-out" : ""}
            fixed top-0 left-0 opacity-0 w-0 -ml-[100%] h-[100vh] text-5xl text-serif z-40
            overflow-hiddn bg-amber-300
          `}
      >
          <ul className="absolute top-24 md:top-28 left-[15vw] flex flex-col space-x-1 space-y-3 whitespace-no wrap">
            {comps.map(({nav, name})=>(<li key={nav} onClick={onNavItemClick.bind(null, name)}><a className="whitespace-nowrap hover:text-teal-400 hover:underline">{nav}</a></li>))}
            <li className="text-4xl pt-3"><SocialMedias linkClass={"hover:text-teal-400"} /></li>
          </ul>
          <button onClick={toggleNav} className="absolute right-6 md:right-8 lg:right-10 top-8 z-50 text-white text-4xl font-roboto hover:text-teal-400">
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          <Image src={backgroundImage} alt="nav menu background" className="absolute top-0 left-0 object-cover h-full w-screen mix-blend-overlay -z-10"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,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"
          ></Image>
      </div>
      <button className="fixed top-0 left-0 w-16 z-[60]">
        <Image src={NavButtonImage} alt="nav button image" className="absolute -top-10 -left-10 transform rotate-[125deg] scale-[4] -z-10 pointer-events-none"></Image>
        <a onClick={toggleNav}><FontAwesomeIcon icon={faBars} className="absolute top-0 left-0 p-3 text-4xl hover:text-yellow-200" /></a>
      </button>
    </nav>);
}

export default Nav;
