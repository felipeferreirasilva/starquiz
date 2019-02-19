// IMPORT MDBOOTSTRAP AND JQUERY
import 'mdbootstrap/css/bootstrap.min.css'
import 'mdbootstrap/css/mdb.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css'

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
