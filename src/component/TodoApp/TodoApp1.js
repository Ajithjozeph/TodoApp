import React, { Component } from 'react';
import "./TodoApp.css";

class TodoApp1 extends Component {
  state = {
    input: "",
    items: [],
    editingIndex: null,
    isEditing: false,
  };

  handleChange = (event) => {
    this.setState({ input: event.target.value });
  };

  storeInput = (event) => {
    event.preventDefault();
    const { input, items, editingIndex,isEditing } = this.state;

    if (isEditing) {
      // Update the existing item
      const updatedItems = [...items];
      updatedItems[editingIndex] = input;
      this.setState({ items: updatedItems, input: "", isEditing: false, editingIndex: null });
    } else {
      // Add a new item
      this.setState({ items: [...items, input], input: "" });
    }
  };

  deleteItem = (index) => {
    this.setState({ items: this.state.items.filter((_, i) => i !== index) });
  };

  startEditing = (index) => {
    this.setState({ input: this.state.items[index], editingIndex: index, isEditing: true });
  };

  closeEditPopup = () => {
    this.setState({ isEditing: false, editingIndex: null, input: "" });
  };

  render() {
    const { input, items, isEditing } = this.state;

    return (
      <div className="todo-container">
        <form className='input-section' onSubmit={this.storeInput}>
          <h1>Todo App</h1>
          <input type='text' value={input} onChange={this.handleChange} placeholder='Enter Items...' />
          
        </form>
        
        <div>
          <ul>
            {items.map((data, index) => (
              <li key={index}>
                {data}
                <i className="fa-regular fa-pen-to-square" id="edit" onClick={() => this.startEditing(index)}></i>
                <i className="fa-solid fa-trash-can" onClick={() => this.deleteItem(index)}></i>
              </li>
            ))}
          </ul>
        </div>

        {isEditing && (
          <div className='pop-up'>
            <input type='text' id="editbox" value={input} onChange={this.handleChange} />
            <button type="button" onClick={this.storeInput}>Edit</button>
            <button type="button" onClick={this.closeEditPopup}>Cancel</button>
          </div>
        )}
      </div>
    );
  }
}

export default TodoApp1;
