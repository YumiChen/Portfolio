import {Component} from "react";
import {skills} from "../assets/data/data";
import scroll from "../functions/scroll";

class Skill extends Component{
    constructor(props){
      super(props);
      this.next = this.next.bind(this);
      
    }
   next(event){
     const el =document.querySelector('.works');
     if(el.scrollIntoView){
       el.scrollIntoView({ 
         behavior: 'smooth' 
         });
        return;
     }
     const offset = el.offset();
     scroll(offset);
    }
    render(){
      return (
        <div id="skills" className="skills">
          <div className="context">
          <p className="subTitle">Skills</p>
          <p>
            {skills}
          </p>
          </div>
        <p className="next" onClick={this.next}>︾</p>

        </div>);
    }
  }

  module.exports = Skill;