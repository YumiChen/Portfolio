import {Component} from "react";
import {links} from "../assets/data/data";
import Contacts from "./Contacts";
import scroll from "../functions/scroll";

class Contact extends Component{
    constructor(props){
      super(props);
      this.next = this.next.bind(this);
    }
     next(event){  
      const el =  document.querySelector('#copyright');
      if(el.scrollIntoView){
        el.scrollIntoView({ 
          behavior: 'smooth' 
        });
        return;
      }

      scroll('#copyright');
    }
    render(){
      return (
        <div className="contact">
          <p className="next" onClick={this.next}>︾</p>
          <Contacts/>
        </div>);
    }
  }

  module.exports = Contact;