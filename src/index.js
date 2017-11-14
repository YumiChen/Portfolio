import React from "react";
import {render} from "react-dom";
import App from "./components/App";

require("font-awesome-webpack");
require( "../node_modules/slick-carousel/slick/slick.css");
require("../node_modules/slick-carousel/slick/slick-theme.css");
require("./assets/stylesheets/style.sass");

render(<App/>,document.getElementById("container"));