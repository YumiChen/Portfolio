import React,{Component} from "react";
import scroll from "../functions/scroll";
import {title_main,title_sub} from "../assets/data/data";
import Contacts from "./Contacts";

class Top2 extends Component{
    constructor(props){
      super(props);
      
      this.state={title:""};
      this.next = this.next.bind(this);
    }
    next(event){  
    const el =  document.querySelector('.about');
    if(el.scrollIntoView){
      el.scrollIntoView({ 
        behavior: 'smooth' 
      });
      return;
    }
      scroll('.about');
    }
    render(){
      return (
        <div className="top2">
          <div className="title">
            <p className="main"> {title_main}</p>
            <p className= "sub"> {title_sub}</p>
            <Contacts/>
          </div>
          <p className="next" onClick={this.next}>︾</p>
        </div>
        );
    }
  }

  module.exports = Top2;