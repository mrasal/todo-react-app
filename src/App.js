import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/Input'

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="todo-app-card">
        <form onSubmit={this.handleSubmit}>
          <Input inputPlaceholder="add task" 
          enterEvent={this.handleChange} 
          />
        </form>

        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
        </div>
      </div>
    );
  }
}

export default App;
