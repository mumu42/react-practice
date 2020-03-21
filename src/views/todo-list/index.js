import React, { Component } from 'react'
import store from '../../store'

class TodoList extends Component {
  constructor(props) {
    super(props)

    this.state = store.getState()
    console.log(this.state, 'ss')
  }

  render() {
    return (
      <div>todo list</div>
    )
  }
}

export default TodoList