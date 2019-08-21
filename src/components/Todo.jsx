import React,{Component} from "react";

class Todo extends Component{
    constructor(props){
        super(props);

        this.state = {
            todoList : [],
            item :"",
            formData: {}
        }


    }


    handleSubmit = (event) =>{
        event.preventDefault();
        let formData = new FormData(event.target);
        this.setState({
            todoList: this.state.todoList.concat(formData.get("task"))
        })
        document.getElementById("task").value = "";
        }

    handleChange = (event) => {
        const formData = {...this.state.formData};
        formData[event.target.name] = event.target.value;

        this.setState({formData});
    }

    deleteItem = (task) =>{

        
        this.setState({
            todoList: this.state.todoList.filter(function(value){
                return task!==value;
            })
        })
    }

    
  
        

    render(){
        
        const displayList = this.state.todoList.map((task,index)=>{
            console.log(task,index);
            return (<div><li>{task}&nbsp;&nbsp;<button onClick = { () => this.deleteItem(task)}>Delete</button></li></div>);
        });
       
    
        return(
        <div>
        
        <h3>Todo List</h3>
        <form onSubmit={this.handleSubmit}>
        <label htmlFor="todo">Enter Task</label>
        <input id="task" name="task" type="text" onChange={this.handleChange} />
        <label htmlFor="todo">Enter Task 1</label>
        <input id="task" name="task1" type="text" onChange={this.handleChange} />
        <button onClick={this.displayList}>Add Task</button>
        </form>

        
          <ul>{displayList}</ul>  
        
            
        
            </div>

        );
        
    }
}

export default Todo;