import React, { Component } from 'react';

class AddItem extends Component {
  render() {
    return (
      <div className='add-item'>

        <form onSubmit={this.props.handleSubmit}>
          <input
            type='text'
            name='newItem'
            value={this.props.value}
            placeholder='Add New Item...'
            onChange={this.props.handleNewItem}
          />
          <button
            disabled={this.props.isItemReady ? false : true}
            className={`btn ${this.props.isItemReady ? 'add-btn' : ''}`}
          >Add</button>
        </form>
      </div>
    );
  }
}

export default AddItem;