import React, { Component } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuidv4 } from 'uuid';
class App extends Component{
  state={
    items:[],
    id:uuidv4(),//id ở đây bởi vì mỗi khi chúng ta chuẩn bị tạo ra item sẽ có một số
    //loại id và vì vậy chúng ta sẽ sử dụng UUID và thay vào đó
    item:'',
    editItem:false
  };
  handleChange =(e) =>{
    this.setState({
      item: e.target.value
    });
  };
  handleSubmit =(e) =>{
    e.preventDefault();
    const newItem ={
      id:this.state.id,
      title: this.state.item
    };
    console.log(newItem);
    const updateItems = [...this.state.items, newItem];
    this.setState({
      items:updateItems,
      item:'',
      id:uuidv4(),
      editItem: false
    })
  };
  render(){
    return (
      <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
        <h3 className="text-capitalize text-center">
          todo input
        </h3>
        <TodoInput item={this.state.item} 
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <TodoList items={this.state.items}/>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
