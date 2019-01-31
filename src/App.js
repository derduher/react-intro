import React, { Component } from 'react'
import './App.css'
import ToDo from './todo.js'

let toDos = [
  {
    id: 1,
    text: 'first todo'
  },
  {
    id: 2,
    text: 'second'
  }
]

function commitEdit (updatedTodo) {
  toDos = toDos.map(todo => {
    if (todo.id === updatedTodo.id) {
      return updatedTodo
    }
    return todo
  })
}

export default class App extends Component {
  render () {
    return (
      <div className='App'>
        <ol>
          {
            toDos.map(todo =>
              <li><ToDo
                text={todo.text}
                todoId={todo.id}
                commitEdit={commitEdit}
              /></li>
            )
          }
        </ol>
      </div>
    )
  }
}
