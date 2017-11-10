import {Component} from "react";
import Slider from "react-slick";
import debounce from "../functions/debounce";

import {otherWorksDemoUrls, otherWorksGithubUrls, otherWorks_EN, otherWorks_CH} from "../assets/data/data";

class OtherWorks extends Component{
    constructor(props){
        super(props);
        this.state = {index: null};
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
    settings1 = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: num,
        slidesToScroll: 1
      }, 
      settings2 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      },
      works = otherWorksDemoUrls.map((work,index)=>{
        return (<div><div className="otherWork" onClick={()=>{location.href = work;}}></div></div>);
      }),
      details = this.state.index?otherWorksDemoUrls.map((work,index)=>{
        return (<div><div className="otherWork" onClick={()=>{}}></div></div>);
      }):null;
     return (
        <div className="otherWorksContainer">
            <p>Other Works</p>
            <div className="otherWorks">
            <Slider {...settings1}>
                {works}
            </Slider>
            </div>
            {this.state.index?<Slider {...settings2}>
                {details}
            </Slider>:null}
       </div>    
    );
    }
};

   module.exports = OtherWorks;