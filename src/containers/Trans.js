import {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import changeLang from "../actions/changeLang";

let Trans =(props)=>{
    return (<p className="trans">
      <span onClick={props.changeLang}>EN</span> | <span onClick={props.changeLang}>中</span>
    </p>);
   }
   
   const mapDispatchToProps_lang = (dispatch)=>{
     return bindActionCreators({changeLang:changeLang},dispatch);
   }
   
   Trans = connect(null,mapDispatchToProps_lang)(Trans);

   module.exports = Trans;