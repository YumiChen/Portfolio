import React,{Component} from "react";
import Slider from "react-slick";
import debounce from "../functions/debounce";

import {otherWorksDemoUrls, otherWorksGithubUrls, otherWorks_EN, otherWorks_CH} from "../assets/data/data";

class OtherWorks extends Component{
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
    const num = window.innerHeight > window.innerWidth?2:5,
    settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: num,
        slidesToScroll: 1,
        lazyLoad: true
      }, 
      works = otherWorksDemoUrls.map((work,index)=>{
        return (<div key={index}><div className="otherWork" onClick={()=>{location.href = work;}}></div></div>);
      });

     return (
        <div className="otherWorksContainer">
            <p className="subTitle">Other Works</p>
            <div id="otherWorks" className="otherWorks">
            <Slider {...settings}>
                {works}
            </Slider>
            </div>
       </div>    
    );
    }
};

   module.exports = OtherWorks;