import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list:[],
      selectedFilter: 'all',
      
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    //console.log(this.state.value);
    if(this.state.value !==""){
      let listItem = {
        label: this.state.value,
        key: this.state.list.length,
        id: 'list'+this.state.list.length,
        isChecked : false,
      }
      //console.log(listItem);
      
      this.setState((prevState)=>{
        return{
          list: prevState.list.concat(listItem)
        };
      });
    }

    this.clearInput();
    //console.log(this.state.list);
    event.preventDefault();
  }

  clearInput(){
    this.setState({
      value:''
    })
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  onchangeCheckbox(e, key){
    let isChecked = e.target.checked;
    let list = this.state.list;
    list[key].isChecked = isChecked;
    this.setState({
      list,
    })
  }

  handleFilter(event){
    this.setState({
      selectedFilter: event.target.value,
    })
  }


  render() {

    let isChecked, filterList;
    const todoList = this.state.list;

    const selectedFilter = this.state.selectedFilter;
    if(selectedFilter === 'all'){
      filterList = todoList;
    }else{
     if(selectedFilter === 'checkedList'){
      isChecked = true;
    }else{
      isChecked = false;
    }
    filterList = todoList.filter((todo, index)=>{
      return  todo.isChecked === isChecked;
    });
  }
   
    return (
      <div className="App">

        <div className="todo-app-card">
          <form onSubmit={this.handleSubmit}>
            <input className="form-field" placeholder="Add a task" onChange={this.handleChange} />
          </form>
          <form>
            <ul className="list-items">
              {
                filterList.map((item) => {
                  return <li key={item.key}>
                    <span>
                      <input 
                        type="checkbox" 
                        id={item.id}
                        checked={item.isChecked} 
                        onChange={(e) => this.onchangeCheckbox(e, item.key)}
                        />
                      <label htmlFor={item.id}>{item.label}</label>
                    </span>
                    <button>Delete</button>
                  </li>
                })
              }
            </ul>
          </form>
          <footer>
            <button onClick={this.handleFilter.bind(this)} value="all">All</button>
            <button onClick={this.handleFilter.bind(this)} value="checkedList">Completed</button>
            <button onClick={this.handleFilter.bind(this)} value="unCheckedList">Incomplete</button>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
