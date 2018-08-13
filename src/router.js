import React , { Component } from 'react'

import {HashRouter, Route , Switch } from 'react-router-dom'
import App from './App'
import Admin from './admin'
import Buttons from './pages/ui/buttons'
import NoMatch from './pages/noMatch'
import Login from './pages/form/login'
import Registered from './pages/form/registered'
import TodoList from './pages/todoList'
export default class IRouter extends Component {
    
    render () {
        return (
            <HashRouter>
                <div >
                    <Route path='/admin' render = { () => 
                        <Admin>
                            <Switch>
                                <Route   path='/admin/ui/buttons' component={Buttons}/>
                                <Route   path='/admin/form/login' component={Login}/>
                                <Route   path='/admin/form/reg' component={Registered}/>
                                <Route   path='/admin/todolist' component={TodoList}/>
                                <Route component={NoMatch}/>
                            </Switch>
                        </Admin> 
                    }/>
                    <Route path='/login' component={Login}/>
                    
                </div>
            </HashRouter>
        )
    }
}