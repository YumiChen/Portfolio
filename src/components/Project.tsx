import React from "react";
import { Content } from "@/app/types";

interface ProjectProps {
    content: Content;
}
const Project = ({ content }: ProjectProps) => {
     return (<div className="work text-center">
        <a target="blank" href={content.demoUrl || content.githubUrl}>
            <img src={content.images[0].src} alt={content.images[0].alt} className="my-5 rounded" />
        </a>
       </div>);
   };

export default Project;