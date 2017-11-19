import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import {
    applyMiddleware,
    createStore
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import netflix from './reducers/index';

const store = createStore( netflix, applyMiddleware(thunkMiddleware) );

render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
