import {Component} from "react";
import {about,links} from "../assets/data/data";
import {connect} from "react-redux";
import scroll from "../functions/scroll";

class About_ extends Component{
    constructor(props){
      super(props);
    }
   next(event){
    document.querySelector('.works').scrollIntoView({ 
    behavior: 'smooth' 
    });
     const offset = $('.contact').offset();
     scroll(offset);
    }
    render(){
      this.next = this.next.bind(this);
      let des = (this.props.lang=="EN")?about.EN:about.CH;
      return (
        <div className="about">
          <div id="aboutText">
          <p>Hello!</p>
          <p>{des}
          </p>
          <p>
            <a href={links.mail}><i className="fa fa-envelope-o" aria-hidden="true"></i></a>
            <a href={links.codepen}><i className="fa fa-codepen" aria-hidden="true"></i></a>
            <a href={links.codepen}><i className="fa fa-github" aria-hidden="true"></i></a>
          </p>
          </div>
        <p className="next" onClick={this.next}>︾</p>
         <div className="aboutBG"></div>
        </div>);
    }
  }
  
  const mapStateToProps_about=(state)=>{
    return {lang: state.lang};
  }
  
  const About = connect(mapStateToProps_about)(About_);

  module.exports = About;