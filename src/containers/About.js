import {Component} from "react";
import {about} from "../assets/data/data";
import {connect} from "react-redux";
import scroll from "../functions/scroll";
import Contacts from "../components/Contacts";
// import Waypoint from "react-waypoint";

class About_ extends Component{
    constructor(props){
      super(props);
      this.next = this.next.bind(this);
      // this.state = {enter: false};
    }
    componentDidMount(){
      // this.setState({enter: false});
    }
   next(event){
     const el =document.querySelector('.skills');
     if(el.scrollIntoView){
       el.scrollIntoView({ 
         behavior: 'smooth' 
         });
        return;
     }

     scroll('.skills');
    }
    render(){
      let des = (this.props.lang=="EN")?about.EN:about.CH;
      return (
        <div className="about">

          <div id="aboutText">
          <p className="subTitle">Hello!</p>
            <div className="context">
              <p>{des}</p>
              <Contacts/>
            </div>
          
          </div>
        <p className="next" onClick={this.next}>︾</p>

        </div>);
    }
  }

        // <div className="parallax"></div>

  const mapStateToProps_about=(state)=>{
    return {lang: state.lang};
  }
  
  const About = connect(mapStateToProps_about)(About_);

  module.exports = About;