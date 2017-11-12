import {Component} from "react";
import {Provider} from "react-redux";
import {createStore} from "redux"
import rootReducer from "../reducers/rootReducer";
import Trans from "../containers/Trans";
import Top2 from "./Top2";
import About from "../containers/About"
import Skills from "./Skills";
import Works from "../containers/Works";
import OtherWorks from "../components/OtherWorks";
import Contact from "./Contact";
import Footer from "./Footer";

const store = createStore(rootReducer);

class App extends Component{
constructor(props){
super(props);
}
render(){
return (
<Provider store={store}>
<div>
       <Trans/>
       <Top2/>
  <About/>
  <Skills/>
  <Works/>
  <OtherWorks/>
  <Contact/>
       <Footer/>
      <div className="BG"></div>
       </div>
  </Provider>
);
}
}

<About/>

module.exports = App;