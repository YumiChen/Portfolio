import {Component} from "react";
import scroll from "../functions/scroll";

let count = 0,interval;

class Top extends Component{
    constructor(props){
      super(props);
      
      this.state={title:""};
      this.type = this.type.bind(this);
      interval = setInterval(this.type,500);
    }
    type(){
      const title="Hello!";
      let str = this.state.title+title[count];
      this.setState({title:str});
      count++;
      if(count==title.length) clearInterval(interval);
    }
    next(event){  
    const el =  document.querySelector('#aboutText');
    if(el.scrollIntoView){
      el.scrollIntoView({ 
        behavior: 'smooth' 
      });
    }
      const offset = $('.about').offset();
      scroll(offset);
    }
    render(){
      this.next = this.next.bind(this);
      return (
        <div className="top">
          <p className="title">{this.state.title}
            <span className="typing"></span>
          </p>
          <p className="next" onClick={this.next}>︾</p>
        </div>);
    }
  }

  module.exports = Top;