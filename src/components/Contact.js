import {Component} from "react";
import {links} from "../assets/data/data";

class Contact extends Component{
    constructor(props){
      super(props);
    }
    render(){
      return (
        <div id = "contact" className="contact">
          <p>︾</p>
          <p>
            <a href={links.mail}><i className="fa fa-envelope-o" aria-hidden="true"></i></a>
            <a href={links.codepen}><i className="fa fa-codepen" aria-hidden="true"></i></a>
            <a href={links.github}><i className="fa fa-github" aria-hidden="true"></i></a>
          </p>
        </div>);
    }
  }

  module.exports = Contact;