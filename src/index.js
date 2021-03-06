import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Admin from './admin'
import Router from './router'
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import configureStore from './redux/store'
const store = configureStore()
ReactDOM.render(
    <Provider store = {store}>
        <Router />
    </Provider>,
 document.getElementById('root'));
registerServiceWorker();
