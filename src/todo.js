import React, { Component } from 'react'

export default class ToDo extends Component {
  render () {
    const {
      text
    } = this.props

    return <div className='todo-item'>
      <span className='todo-content'>{text}</span>
      <button type='button'>edit</button>
      <button type='button'>delete</button>
    </div>
  }
}
