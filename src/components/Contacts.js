import React,{Component} from "react";
import {links} from "../assets/data/data";

class Contacts extends Component{
    constructor(props){
      super(props);
    }
    render(){
      return (
          <p className="contacts">
            <a href={links.mail}><i className="fa fa-envelope-o" aria-hidden="true"></i></a>
            <a href={links.codepen}><i className="fa fa-codepen" aria-hidden="true"></i></a>
            <a href={links.github}><i className="fa fa-github" aria-hidden="true"></i></a>
          </p>
        );
    }
  }

  module.exports = Contacts;