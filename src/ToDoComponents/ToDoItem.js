import React, { Component } from 'react';

class ToDoItem extends Component {
  state = {
    completedStyle: {
      backgroundColor: '#690',
      color: '#f1f1f1',
      textDecoration: 'line-through',
    },
    editingStyle: {
      display: 'none'
    }
  }

  render() {
    return (
      <div className='to-do-item'>
        <input
          disabled={this.props.editing}
          type='checkbox'
          checked={this.props.completed}
          onChange={() => this.props.handleCompleted(this.props.id)}
        />
        <p
          className='task'
          style={
            this.props.completed ?
              this.state.completedStyle :
              null}>
          {this.props.task}
        </p>

        <button
          disabled={this.props.editing}
          onClick={() => this.props.handleEdit(this.props.id)}
          className={`btn ${this.props.editing ? null : 'edit-btn'}`}>
          Edit
        </button>
        <button
          disabled={this.props.editing}
          onClick={() => this.props.handleDelete(this.props.id)}
          className={`btn ${this.props.editing ? null : 'delete-btn'}`}>
          Delete
        </button>
        <p style={this.props.editing ? null : this.state.editingStyle} >
          <input
            className='update-item'
            type='text'
            name='updateItem'
            value={this.props.updateItem}
            onChange={this.props.handleChange}
          />
          <button
            onClick={() => this.props.handleUpdate(this.props.id)}
            className='btn update-btn'
          >
            Update
        </button>
        </p>
      </div>
    );
  }
}

export default ToDoItem;