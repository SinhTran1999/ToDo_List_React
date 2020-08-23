import React, { Component } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';
class App extends Component{
  state={
    items:[],
    id:0,//id ở đây bởi vì mỗi khi chúng ta chuẩn bị tạo ra item sẽ có một số
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
      item: this.state.item
    }
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
        <TodoList/>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
