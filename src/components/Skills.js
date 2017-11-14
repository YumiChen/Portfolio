import {Component} from "react";
import {skills} from "../assets/data/data";
import scroll from "../functions/scroll";
import tagCloud from "../functions/tagCloud";

class Skill extends Component{
    constructor(props){
      super(props);
      this.next = this.next.bind(this);
      
    }
    componentDidMount(){
      // tagCloud("#tagCloud");
    }
   next(event){
     const el =document.querySelector('.works');
     if(el.scrollIntoView){
       el.scrollIntoView({ 
         behavior: 'smooth' 
         });
        return;
     }

     scroll('.works');
    }
    render(){
      return (
        <div id="skills" className="skills">
          <div className="context">
            <p className="subTitle">Skills</p>
            <div className="sections">
              <div className="section">
                <div className="skillTitle">
                  <i className="fa fa-window-maximize" aria-hidden="true"></i>
                  <p>Front-End</p>
                </div>
                <p className="skill">{skills.frontEnd}</p>
              </div>
              <div className="section">
                <div className="skillTitle">
                  <i className="fa fa-desktop" aria-hidden="true"></i>
                  <p>Back-End</p>
                </div>
                <p className="skill">{skills.backEnd}</p>
              </div>
              <div className="section">
                <div className="skillTitle">
                    <i className="fa fa-wrench" aria-hidden="true"></i>
                    <p>DevTools</p>
                </div>
                <p className="skill">{skills.devTool}</p>
              </div>
            </div>
          </div>
          <p className="next" onClick={this.next}>︾</p>

        </div>
      );
    }
  }

  module.exports = Skill;