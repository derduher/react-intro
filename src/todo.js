import React, { Component } from 'react'

export default class ToDo extends Component {
  state = {
    isEditing: false
  }

  onEdit = e =>
    this.setState({isEditing: true, text: this.props.text})

  onChange = e =>
    this.setState({text: e.target.value})

  commitEdit = e => {
    this.setState({isEditing: false})
    this.props.commitEdit({id: this.props.todoId, text: this.state.text})
  }

  cancelEdit = e => {
    this.setState({isEditing: false})
  }

  render () {
    const {
      text
    } = this.props

    const {
      text: editText,
      isEditing
    } = this.state

    return <div className='todo-item'>
      {isEditing
        ? <span className='todo-item_editfield'>
          <input
            className='todo-item__input'
            onChange={this.onChange}
            value={editText}
          />
          <button
            type='button'
            onClick={this.commitEdit}
          >
            Save
          </button>
          <button
            type='button'
            onClick={this.cancelEdit}
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
