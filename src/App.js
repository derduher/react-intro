import React, { Component } from 'react'
import './App.css'
import ToDo from './todo.js'

export default class App extends Component {
  state = {
    toDos: [
      {
        id: 1,
        text: 'first todo'
      },
      {
        id: 2,
        text: 'second'
      }
    ]
  }

  commitEdit = updatedTodo => {
    this.setState({
      toDos: this.state.toDos.map(todo =>
        todo.id === updatedTodo.id
        ? updatedTodo
        : todo
      )
    })
  }

  render () {
    return (
      <div className='App'>
        <ol>
          {
            this.state.toDos.map(todo =>
              <li><ToDo
                text={todo.text}
                todoId={todo.id}
                commitEdit={this.commitEdit}
              /></li>
            )
          }
        </ol>
      </div>
    )
  }
}
