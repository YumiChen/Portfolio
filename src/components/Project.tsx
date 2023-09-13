import React from "react";
import { Content } from "@/app/types";
import Image from 'next/image';

interface ProjectProps {
    content: Content;
}
const Project = ({ content }: ProjectProps) => {
     return (<div className="work text-center">
        <a target="blank" href={content.demoUrl || content.githubUrl}>
            <Image src={content.images[0].src} alt={content.images[0].alt} className="my-5 rounded border-4 border-yellow-200" width={500} height={400}/>
        </a>
       </div>);
   };

export default Project;