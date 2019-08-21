import React from "react";
import TextInput from "./TextInput";
class Component2 extends React.Component{
    constructor(props){
        super(props);
       

    }

    render(){
        return(
            <div>
                <label>{this.props.name}</label>
            </div>
        );
    }
}

export default Component2;