import React, { Component } from 'react';
import "./TodoApp.css";


class TodoApp extends Component {

  state={
    input:"",
    items:[]
  }
  handleChange=(event)=>{
    this.setState({
      input:event.target.value
    });
    
  }

  storeInput=(event)=>{
    event.preventDefault();
    const{input}=this.state;
    this.setState({
      items:[...this.state.items , input],//spread operator
      input:""
    });
  }

  deleteItem=(key)=>{
    //const allItems=this.state.items;
    //allItems.splice(key,1);
    //this.setState({
     // items:allItems
    //})

    this.setState({
      items:this.state.items.filter((data,index)=>index!==key)
    });

    }

  
   
  

  render() {
    const{input,items} =this.state;
   
    return (
      <div className="todo-container">

        
        <form className='input-section' onSubmit={this.storeInput}>
        <h1>Todo App</h1>
            <input type='text' value={input} onChange={this.handleChange} placeholder='Enter Items...'></input>
            
        </form>
        <div>
                <ul>
                    {items.map((data,index)=>(
                      <li key={index}>{data}<i className="fa-solid fa-trash-can" onClick={()=>this.deleteItem(index)}></i></li>
                    ))}
                    
                </ul>
            </div>
      </div>
    )
  }
}
export default TodoApp;
