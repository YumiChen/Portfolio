import { Content } from "@/app/types";
import React from "react";

const tagStyle = "inline-block my-2 mr-1 py-1 px-2 bg-amber-300 rounded-md text-lg hover:bg-white hover:text-amber-300";

interface ProjectDescProps {
    content: Content;
}
const ProjectDesc = ({ content }: ProjectDescProps)=>{
    let tags=
    content.tags.map((tag, index: number) => {
        return (<span className={tagStyle} key={index}>{tag}</span>);
    });
       
    return (<div className="work text-center">
            <p className="demoUrl text-2xl md:text-3xl">
                {content.demoUrl === "" ? null : <a href={content.demoUrl} target="_blank" className="underline">Demo</a>} 
                {content.githubUrl && content.demoUrl ? " | " : null }        
                {content.githubUrl === "" ? null : <a href={content.githubUrl} target="_blank" className="underline">Github Source</a>}
            </p>
           <p className="font-serif font-bold">{content.title}</p>
           <ul className="px-10 w-full text-2xl md:text-3xl">
                {content.description}
            </ul>
            <p className="px-10 w-full">{tags}</p>
       </div>);
};

export default ProjectDesc;