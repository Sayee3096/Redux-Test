import React from "react";
import { connect } from 'react-redux';
import {productValue} from '../actions';
import {divisionValue} from '../actions';
var resultValue = 0;
class Component1 extends React.Component{
    constructor(props){
        super(props);
              
    }
    
    handleChange = (event) =>{

        if(this.props.value1){
            
             resultValue = parseInt(event.target.value) * 10;
            // this.props.parentCallback1(resultValue,event.target.value);
            this.props.dispatch(productValue(resultValue));
           
        }
        else if(this.props.value2){
            // debugger
             resultValue = parseInt(event.target.value)/10;
             this.props.dispatch(divisionValue(resultValue));
            // this.props.parentCallback2(resultValue,event.target.value);
        }   
    }
    render(){
        
        return(
            <div>
                <label>Enter Value:</label>
                <input type="text" onChange={this.handleChange} value = {this.props.data}></input>
            </div>
        );
    }
}

export default connect()(Component1);