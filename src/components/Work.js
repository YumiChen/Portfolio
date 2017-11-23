import React from "react";
import scroll from "../functions/scroll";

const Work = (props)=>{
     let tags=
     props.content.tags.map((tag,index)=>{
         return (<span className="tag" key={index}>{tag}</span>);
     });
    
     return (<div className="work">
        <a target="blank" href={props.demoUrls}>
           <div className="img"/>
        </a>
         <p className="demoUrls">{props.demoUrls===""?null:<a href={props.demoUrls} target="_blank">Demo</a> } 
    {props.githubUrls===""?null:" |" }        {props.githubUrls===""?null:<a href={props.githubUrls} target="_blank">Github Source</a>}</p>
           <p>{props.content.title}</p>
           <p className="context">{props.content.description}</p>
           <p>{tags}</p>
       </div>);
   };
//    && this.state.isMobile
   module.exports = Work;