import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {
    applyMiddleware,
    createStore
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import NetflixRouter from './Router';
import netflix from './reducers/index';

const store = createStore( netflix, applyMiddleware(thunkMiddleware) );

render(
    <Provider store={store}>
        <NetflixRouter/>
    </Provider>,
    document.getElementById('root')
);
