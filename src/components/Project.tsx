import { Content } from "@/app/types";
import Image from 'next/image';
import React from "react";
import { SwiperContainer } from "swiper/element";

interface ProjectProps {
    content: Content;
    index: number;
}
const Project = ({ content, index }: ProjectProps) => {
     return (<div className="work text-center">
        <div onClick={() => {
            const descSwiper: SwiperContainer | null = document.querySelector('#projects-desc-swiper')
            descSwiper?.swiper.slideToLoop(index);
        }}>
            <Image src={content.images[0].src} alt={content.images[0].alt} className="my-5 rounded border-4 border-yellow-200 hover:border-amber-300" width={500} height={400}
                placeholder="blur"
                blurDataURL={content.images[0].blurDataURL}
            />
        </div>
       </div>);
   };

export default Project;