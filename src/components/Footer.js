import React from "react";
import {browserSuggestion, copyright} from "../assets/data/data";

const Footer=()=>{
      return (<div className="footer">
          <p>{browserSuggestion}</p>
          <p id = "copyright">{copyright}</p>
        </div>);
   }

   module.exports = Footer;