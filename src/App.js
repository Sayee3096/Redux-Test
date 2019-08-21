import React,{Component} from "react";
import logo from "./logo.svg";
import "../src/App.css";
import {HashRouter,Route} from "react-router-dom";

import Testimonial from "./components/Testimonial";
import Todo from "./components/Todo";
import TextInput from "./components/TextInput";

class App extends Component{
  render(){
    return(
      <HashRouter>
        <Route path="/" exact component={Testimonial}></Route>
        <Route path="/todo" exact component={Todo}></Route>
        <Route path="/textinput" exact component={TextInput}></Route>
      </HashRouter>
    );
  }
}

export default App;