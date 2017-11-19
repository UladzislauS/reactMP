import path from 'path';
import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import template from './indexTemplate';
import { App } from '../app/src/App';
import netflix from '../app/src/reducers/index';

const app = new Express();

app.use(Express.static(path.join(__dirname, 'static')));

app.get('*', (req, res) => {
    let status = 200;
    const context = {};
    const store = createStore( netflix, applyMiddleware(thunkMiddleware) );
    const finalState = store.getState();
    const styleSheet = new ServerStyleSheet();

    const markup = renderToString(
        <StyleSheetManager sheet={styleSheet.instance}>
            <Provider store={store}>
                <Router location={req.url} context={context}>
                    <App />
                </Router>
            </Provider>
        </StyleSheetManager>,
    );

    if (context.url) {
        return res.redirect(302, context.url);
    }

    if (context.is404) {
        status = 404;
    }

    return res
        .status(status)
        .send(template('ReactMP', markup, finalState ));
});

export default app;