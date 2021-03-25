import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import React from 'react';
import ReactDOM from 'react-dom';

import {createStore, applyMiddleware, compose} from 'redux'
//reducers

import thunk from 'redux-thunk'
//middleware extends the store's abilities
//actions can now return function INSTEAD of an action
//used to delay dispatch of action/only dispatch if condition is met
//thunk is a function that wraps an expression to delay its evaluation

import { Provider } from 'react-redux'
//makes redux store available to ANY nested components
//that need to access redux store
//connect then connects other comps to
//the redux store

//the store holds the whole state tree of app
//can only change it by dispatching an action on it
//can be seen in reducer

import {BrowserRouter as Router} from 'react-router-dom'
import characterReducer from './reducers/characterReducer'

import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(characterReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
document.getElementById('root'));
