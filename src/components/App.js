import React,{Component} from "react";
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
import ScrollContainer from "./ScrollContainer";

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
      <ScrollContainer comp={<Top2/>}></ScrollContainer>
      <ScrollContainer comp={<About/>}></ScrollContainer>
      <ScrollContainer comp={<Skills/>}></ScrollContainer>
      <ScrollContainer comp={<Works/>}></ScrollContainer>
      <ScrollContainer comp={<OtherWorks/>}></ScrollContainer>
      <ScrollContainer comp={<Contact/>}></ScrollContainer>
      <ScrollContainer comp={<Footer/>}></ScrollContainer>
      <div className="BG"></div>
    </div>
    </Provider>
  );
  }
}

module.exports = App;