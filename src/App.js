import React, { Component } from 'react';
import { ToDoAdd } from './todoAdd';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      todoList: ["task1","task2","task3","task4"]
    }
  }

  handleTask = (name) => {
    const newList = this.state.todoList.slice();
    newList.push(name);
    this.setState({ todoList: newList });
  }

  render() {
    var peeps = this.state.todoList.map(p => {
      return <p key={p}>{p}</p>;
    });
    return (
      <div>
        <div>{peeps}
        </div>
        <ToDoAdd addTodo={this.handleTask}></ToDoAdd>
      </div>
    );
  }
}