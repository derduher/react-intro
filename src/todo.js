import React from 'react'

export default ({ text }) =>
  <div className='todo-item'>
    <span className='todo-content'>{text}</span>
    <button type='button'>edit</button>
    <button type='button'>delete</button>
  </div>
