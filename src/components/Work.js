import {Component} from "react";

const Work = (props)=>{
     let tags=
     props.content.tags.map((tag,index)=>{
         return (<span className="tag" key={index}>{tag}</span>);
     });
    
     return (<div className="work">
           <div className="img"/>
         <p className="demoUrls">{props.demoUrls===""?null:<a href={props.demoUrls} target="_blank">Demo</a> } 
    {props.githubUrls===""?null:" |" }        {props.githubUrls===""?null:<a href={props.githubUrls} target="_blank">Github Source</a>}</p>
           <p>{props.content.title}</p>
           <p>{props.content.description}</p>
           <p>{tags}</p>
       </div>);
   };

   module.exports = Work;