import React, { Component , PropTypes} from 'react'

import { connect } from 'react-redux'
import { timingSafeEqual } from 'crypto';
import {FilterTypes} from '../contants'
import Item from './item' 
const List  =  ({todoList}) => {
        console.log(todoList)
        return (
            <div>
                <ul>
                   {
                      todoList.map(item => {
                           return <Item key={item.id}  id={item.id} text={item.text} state = {item.state}>
                           </Item>
                       })
                   }
                </ul>
            </div>
        )
}
const selectVisibleTodos = (todos,filter) => {
    console.log(filter)

    switch (filter) {
        case FilterTypes.All:
            return todos
            break;
        case FilterTypes.COMPLETED:

                return todos.filter(item => {
                    return item.state 
                })
            break;
        case FilterTypes.UNCOMPLETED:

            return todos.filter(item => {
                return !item.state 
            })
            break;
        default:
        return todos
            break;
    }
 }
const mapStateToProps  = state => {
    return {
        todoList : selectVisibleTodos(state.todoList,state.filter)
    }
}
export default connect(mapStateToProps)(List)