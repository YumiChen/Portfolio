import React,{Component} from "react";
import {connect} from "react-redux";
import Work from "../components/Work";
import debounce from "../functions/debounce";
import scroll from "../functions/scroll";
import detectMobile from "../functions/detectMobile";

import Slider from "react-slick";

import {demoUrls, githubUrls, content_EN, content_CH, links} from "../assets/data/data";

class Works_ extends React.Component{
    constructor(props){
      super(props);
      this.state = {showSwipe1: true, isMobile: detectMobile()};
      this.next = this.next.bind(this);
    }
    componentWillmount(){
   window.removeEventListener("resize",
      debounce(()=>{this.forceUpdate();},1000)
      );
    }
    componentDidMount(){
   window.addEventListener("resize",
      debounce(()=>{this.forceUpdate();},1000)
      );
    }
    next(){  
      scroll('.otherWorks');
    }
    render(){
      let content = (this.props.lang=="EN")? content_EN:content_CH;
      
      let works=[];
      for(var i =0;i<content.length;i++){
        works.push(<div key={i}><Work content={content[i]} demoUrls={demoUrls[i]} githubUrls={githubUrls[i]} data-index={i} key={i}/></div>);
      }
      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true
      };
  
      return (
        <div className="works">
          <p id="works" className="subTitle">WORKS</p>
          <div>
            {this.state.showSwipe1 && this.state.isMobile?<div className = "swipeHint1" onTouchStart={()=>{this.setState({showSwipe1:false})                 }} onMouseDown={()=>{this.setState({showSwipe1:false})}}>
            <div>
            <i className="fa fa-hand-pointer-o" aria-hidden="true"></i>
            <i className="fa fa-bars" aria-hidden="true"></i>
            <p>Swipe</p>
            </div>
          </div>:null}
            <Slider {...settings}>
              {works}
            </Slider>
            <p className="next" onClick={this.next}>︾</p>
          </div>

        </div>);
    }
  }
 
  const mapStateToProps_works=(state)=>{
    return {lang: state.lang};
  }
  const Works = connect(mapStateToProps_works)(Works_);

  module.exports = Works;