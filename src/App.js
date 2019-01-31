import React, { Component } from 'react'
import './App.css'
import ToDo from './todo.js'

export default class App extends Component {
  render () {
    return (
      <div className='App'>
        <ol>
          <li><ToDo text='first todo' /></li>
        </ol>
      </div>
    )
  }
}
