"use client"
import { useCallback, useRef, useState } from "react";
import SocialMedias from '@/components/SocialMedias';
import { FontAwesomeIcon } from "../../node_modules/@fortawesome/react-fontawesome/index";
import { faBars, faCircleXmark } from "../../node_modules/@fortawesome/free-solid-svg-icons/index";
import { Comp } from "@/app/types";
import Image from 'next/image';
import backgroundImage from '../../public/Momo01.jpg';
import NavButtonImage from '../../public/rainbow.svg';
interface NavProps {
  comps: Comp[];
  displayIndex: number;
  setDisplayIndex: (displayIndex: number) => void;
}
const Nav = ({comps, displayIndex, setDisplayIndex}: NavProps) =>{
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

    return (<nav className="z-40 font-lobster text-white">
      <div className={`${showNav? "pointer-events-auto nav-in" : "pointer-events-none"}
            ${isNavOut.current? "nav-out" : ""}
            fixed top-0 left-0 opacity-0 w-0 -ml-[100%] h-[100dvh] text-5xl text-serif z-40
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
          <Image src={backgroundImage} alt="nav menu background" className="absolute top-0 left-0 object-cover h-full mix-blend-overlay -z-10"></Image>
      </div>
      <button className="fixed top-0 left-0 w-16 z-[60]">
        <Image src={NavButtonImage} alt="nav button image" className="absolute -top-10 -left-10 transform rotate-[125deg] scale-[4] -z-10 pointer-events-none"></Image>
        <a onClick={toggleNav}><FontAwesomeIcon icon={faBars} className="absolute top-0 left-0 p-3 text-4xl hover:text-yellow-200" /></a>
      </button>
      <div className={`fixed bottom-0 right-0 p-8 text-4xl hidden md:block md:transition-opacity md:ease-in-out md:delay-900 md:duration-1000 z-30
        ${displayIndex > 0 && displayIndex !== comps.length - 1 ? 'opacity-100': 'opacity-0 pointer-events-none'}`}>
        <SocialMedias/>
      </div>
    </nav>);
}

export default Nav;
