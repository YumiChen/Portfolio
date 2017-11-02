import {Component} from "react";
import {Provider} from "react-redux";
import {createStore} from "redux"
import rootReducer from "../reducers/rootReducer";
import Trans from "../containers/Trans";
import Top from "./Top";
import About from "../containers/About"
import Works from "../containers/Works";
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
       <Top/>
  <About/>
  <Works/>
  <Contact/>
       <Footer/>
       </div>
  </Provider>
);
}
}

module.exports = App;