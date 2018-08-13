import React, { Component } from 'react'

import TodoInput from './components/input'
import List from './components/list'
import Filter from './components/filter'
export default class TodoList extends Component {
    render() {
        return (
            <div>
              <TodoInput />
              <List></List>
              <Filter></Filter>
            </div>
        )
    }
}
