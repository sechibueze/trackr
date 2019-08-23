import React from 'react';
import './css/style.css';
import ToDos from './ToDos'; //Temp ToDos
import AddItem from './AddItem';
import ToDoItem from './ToDoItem';
import Header from './Header';
import Footer from './Footer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDoItems: ToDos,
      /** Input fields placeholders */
      newItem: '',
      updateItem: ''
    };
    /**Methods bound to { this } keyword */
    this.toggleCompleted = this.toggleCompleted.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addNewItem = this.addNewItem.bind(this);
    this.toggleItemEditing = this.toggleItemEditing.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.updateToDoItem = this.updateToDoItem.bind(this);
  }

  toggleCompleted(id) {
    const updList = this.state.toDoItems.map(item => {
      if (item.id === id) {
        /**flip completed status */
        item.completed = !item.completed;
      }
      return item;
    });
    /***update { this.state } */
    this.setState({
      toDoItems: updList
    });
  }

  deleteItem(id) {
    const list = this.state.toDoItems.filter(item => {
      return item.id !== id;
    });
    //call setState
    this.setState({
      toDoItems: list
    });
  }
  toggleItemEditing(id) {
    const editableList = this.state.toDoItems.map(item => {
      item.editing = false;
      if (item.id === id) {
        item.editing = !item.editing
        this.setState({
          updateItem: item.task
        });
      }
      return item;
    });

    this.setState({
      toDoItems: editableList
    });
  }
  updateToDoItem(id) {
    const updList = this.state.toDoItems.map(item => {
      if (item.id === id) {
        item.task = this.state.updateItem;
        item.completed = false;
        item.editing = false;
      }
      return item;
    });

    this.setState({
      toDoItems: updList,
      updateItem: ''
    });
  }

  arrangeToDo() {
    const { toDoItems } = this.state;
    const toDoList = toDoItems.length === 0 ? <h2>No Task yet - Add task </h2> : toDoItems.map(toDo => {
      return (
        <ToDoItem
          key={toDo.id}
          id={toDo.id}
          task={toDo.task}
          updateItem={this.state.updateItem}
          completed={toDo.completed}
          handleCompleted={this.toggleCompleted}
          handleEdit={this.toggleItemEditing}
          editing={toDo.editing}
          handleDelete={this.deleteItem}
          handleChange={this.handleChange}
          handleUpdate={this.updateToDoItem}
        />
      );
    });

    return toDoList;
  }
  handleChange(e) {
    const { name, value } = e.target;
    if (value.trim().length > 0) {
      this.setState({
        [name]: value
      });
      return true;
    } else {
      return null;
    }
  }
  addNewItem(e) {
    e.preventDefault();
    //Take out/Copy init toDoItems
    const { newItem, toDoItems } = this.state;
    if (newItem.trim().length > 0) {
      const newToDo = {
        id: toDoItems.length + 1,
        task: newItem,
        completed: false,
        editing: false
      };

      //push newItem to it
      toDoItems.push(newToDo);

      //update state
      this.setState({
        toDoItems,
        newItem: ''
      });

      return true;
    } else {
      return;
    }


  }
  render() {
    const toDoList = this.arrangeToDo();
    return (
      <div>
        <Header />
        <div className='to-do-app'>

          {this.state.updateItem}
          <p className='courtesy'>Shipped with love from <a href='https://sechibueze.github.io' title='more apps for you - view my portfolio'>Samuel Chibueze</a></p>
          <h1>Taskr | <span>A proactive task management app</span></h1>
          <AddItem
            value={this.state.newItem}
            handleNewItem={this.handleChange}
            handleSubmit={this.addNewItem}
            isItemReady={this.state.newItem.trim().length > 0 ? true : false}
          />
          {toDoList}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;