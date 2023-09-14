
import { Comp } from "@/app/types";
import React, { ReactNode, TouchList, useEffect, useRef } from "react";
import { UAParser } from 'ua-parser-js';
import ScrollDownHint from "./ScrollDownHint";

const throttle = (fn: Function, wait: number = 300) => {
    let inThrottle: boolean,
      lastFn: ReturnType<typeof setTimeout>,
      lastTime: number;
    return function (this: any) {
      const context = this,
        args = arguments;
      if (!inThrottle) {
        fn.apply(context, args);
        lastTime = Date.now();
        inThrottle = true;
      } else {
        clearTimeout(lastFn);
        lastFn = setTimeout(() => {
          if (Date.now() - lastTime >= wait) {
            fn.apply(context, args);
            lastTime = Date.now();
          }
        }, Math.max(wait - (Date.now() - lastTime), 0));
      }
    };
};

const parser = new UAParser("user-agent");
interface ScrollDetectProps {
    children: ReactNode, 
    displayIndex: number;
    index: number;
    showNext: ()=>void;
    showPrev: ()=>void;
    name: string;
    comps: Comp[];
}
const ScrollDetect = ({ children, displayIndex, index, showNext, showPrev, name, comps}: ScrollDetectProps) => {
    const touchStartY = useRef(-1);
    const target = useRef<HTMLDivElement | null>(null);
    const onTouchMove = useRef<(touches: TouchList, showNext: () => void, showPrev: () => void)=>void>(
        (touches: TouchList, showNext: () => void, showPrev: () => void)=>{
        if(touchStartY.current < 0 || 
            (target.current?.offsetHeight !== 0 && !target.current?.offsetHeight) || 
            (target.current?.scrollTop !== 0 && !target.current?.scrollTop)
        ){
            return;
        }
        if((touches?.[0]?.pageY - touchStartY.current) < 0 && (Math.ceil(target.current.offsetHeight + target.current.scrollTop) >= target.current.scrollHeight)){
            console.log("onTouchMove At the bottom!");
            showNext();
        }
        else if((touches?.[0]?.pageY - touchStartY.current) > 0 && target.current.scrollTop === 0){
            console.log('onTouchMove top');
            showPrev();
        }
    });
    const onWheel = useRef<(deltaY: number, eventCurrentTarget: HTMLDivElement, showNext: () => void, showPrev: () => void)=>void>(
        throttle((deltaY: number, eventCurrentTarget: HTMLDivElement, showNext: () => void, showPrev: () => void)=>{
        console.log(deltaY,
            eventCurrentTarget,
            eventCurrentTarget.offsetHeight,
            eventCurrentTarget.scrollTop,
            eventCurrentTarget.scrollHeight
        );
        if(deltaY > 0 && Math.ceil(eventCurrentTarget.offsetHeight + eventCurrentTarget.scrollTop) >= eventCurrentTarget.scrollHeight){
            console.log("At the bottom!");
            showNext();
        }
        else if(deltaY < 0 && eventCurrentTarget.scrollTop === 0){
            console.log('top');
            showPrev();
        }
    }, 1500));
    
    useEffect(()=>{
        console.log(displayIndex, index, target.current);
        if(displayIndex === index){
            setTimeout(()=>{
                if(!target.current){
                    return;
                }
                target.current.scrollTop = 10;
            }, 300);
        }
    }, [displayIndex, index]);

    return (<div 
        className={`absolute top-0 left-0 w-screen pt-[10px] overflow-x-hidden oveflow-y-auto h-[100dvh] transition-opacity ease-in-out delay-900 duration-1000
            ${displayIndex === index? 'opacity-100 pointer-events-auto ' : 'opacity-0 pointer-events-none '}
        `}
        onTouchStart={(event)=>{
            console.log('onTouchStart', touchStartY.current);
            touchStartY.current = event.touches?.[0].pageY;
        }}
        onTouchMove={(event)=>onTouchMove.current(event.touches, showNext, showPrev)}
        onWheel={(event)=>onWheel.current(event.deltaY, event.currentTarget, showNext, showPrev)}
        ref={target}
    >
        {children}
        {index !== 0 && index !== comps.length - 1 && <ScrollDownHint/>}
        <h3 className="fixed bottom-0 left-0 p-4 md:p-8 font-serif text-7xl md:text-9xl opacity-30 -z-10">{name}</h3>
        <h3 className="fixed top-0 right-0 text-right p-4 md:p-8 font-serif text-7xl md:text-9xl opacity-30 -z-10">{name}</h3>
    </div>);
};

export default ScrollDetect;