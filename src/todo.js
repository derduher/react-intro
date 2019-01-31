import React, { Component } from 'react'

export default class ToDo extends Component {
  state = {
    isEditing: false,
    text: ''
  }

  onEdit = e =>
    this.setState({isEditing: true})

  render () {
    const {
      text
    } = this.props

    const {
      isEditing
    } = this.state

    return <div className='todo-item'>
      {isEditing
        ? <span className='todo-item_editfield'>
          <input
            className='todo-item__input'
            value={text}
          />
          <button
            type='button'
          >
            Save
          </button>
          <button
            type='button'
          >
            Cancel
          </button>
        </span>
        : <span>
          <span className='todo-content'>{text}</span>
          <button type='button' onClick={this.onEdit}>edit</button>
          <button type='button'>delete</button>
        </span>
      }
    </div>
  }
}
