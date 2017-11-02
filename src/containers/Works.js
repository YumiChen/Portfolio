import {Component} from "react";
import {connect} from "react-redux";
import Work from "../components/Work";
import debounce from "../functions/debounce";
import Slider from "react-slick";

import {demoUrls, githubUrls, content_EN, content_CH, links} from "../assets/data/data";

class Works_ extends React.Component{
    constructor(props){
      super(props);
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
    render(){
      let content = (this.props.lang=="EN")? content_EN:content_CH;
      
      let works=[];
      for(var i =0;i<content.length;i++){
        works.push(<div key={i}><Work content={content[i]} demoUrls={demoUrls[i]} githubUrls={githubUrls[i]} data-index={i} key={i}/></div>);
      }
      let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  
      return (
        <div className="works">
          <p>WORKS</p>
          <Slider {...settings}>
          {works}
            </Slider>
        </div>);
    }
  }
  
  const mapStateToProps_works=(state)=>{
    return {lang: state.lang};
  }
  const Works = connect(mapStateToProps_works)(Works_);

  module.exports = Works;