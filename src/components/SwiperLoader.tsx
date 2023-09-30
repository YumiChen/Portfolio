"use client";

import { useEffect, useState } from "react";
import Loader from "./Loader";
import { SwiperContainer } from "swiper/element";
import { SwiperOptions } from "swiper/types";

interface SwiperLoaderProps {
    ratio?: number;
    children: React.ReactNode[];
    keys: string[];
    id: string;
    className: string;
    swiperOptions: SwiperOptions;
    conatinerClassName?: string;
}
const SwiperLoader = ({ ratio, children, keys, id, className, swiperOptions, conatinerClassName }: SwiperLoaderProps) =>{
    const [displaySwiper, setDisplaySwiper] = useState(false);
    useEffect(()=>{
        setTimeout(()=>{
            const swiper: SwiperContainer | null = document.querySelector(`#${id}`);
            if(!swiper){
              return;
            }
    
            Object.assign(swiper, swiperOptions);
            swiper.initialize();

            setDisplaySwiper(true);
        },0);
    }, []);
    return (<div className={`relative w-full ${ratio? `overflow-hidden` : ''} ${conatinerClassName}`} style={{
            paddingTop: `${ratio}%`
        }}>
        <swiper-container id={id} class={`${displaySwiper? 'opacity-1 pointer-events-auto' : 'opacity-0 pointer-events-none'} ${ratio? 'absolute top-0 left-0' : ''} w-full transition-opacity ${className}`} init={false}>
            {children.map((child, index)=>(<swiper-slide key={keys[index]}>
                {child}
            </swiper-slide>))}
        </swiper-container>
        <Loader display={!displaySwiper}/>
    </div>);
}

export default SwiperLoader;
