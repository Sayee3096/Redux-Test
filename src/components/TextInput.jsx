import React,{Component} from "react";
import Component1 from "./Component1";
import { connect } from 'react-redux';

class TextInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            value1: "component1",
            value2: "component2",
            multipliedData : null,
            dividedData: null
            
        }
    }
    callbackFunction1= (childData,data) => {
        console.log("Callback 1");
        this.setState({
            dividedData:data,
            multipliedData: childData
            
        })
    }

    callbackFunction2 = (childData,data) => {
        console.log("Callback 2")
        this.setState({
            multipliedData:data,
            dividedData: childData
        })
    }

    render(){
        return(
            <div>
                <Component1 value1={this.state.value1}  parentCallback1={this.callbackFunction1} data = {this.state.dividedData}></Component1>
                <Component1 value2={this.state.value2} parentCallback2={this.callbackFunction2} data = {this.state.multipliedData}></Component1>
            </div>
        );
    }
}

export default connect()(TextInput);