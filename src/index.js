import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import characterReducer from './reducers/characterReducer'

import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//set up our store
let store = createStore(characterReducer, composeEnhancers(applyMiddleware(thunk)))



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
        ,
document.getElementById('root'));
