// IMPORTA O MDBOOTSTRAP
import 'mdbootstrap/css/bootstrap.min.css'
import 'mdbootstrap/css/mdb.min.css'

// IMPORTA O JQUERY
import 'bootstrap/dist/js/bootstrap.bundle.min';

// IMPORTA O CUSTOM CSS
import './index.css'

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

// REDUX
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

// STORE
const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
