import React from 'react';
import { Route } from 'react-router';
import Netflix from './Netflix';
import { BrowserRouter } from 'react-router-dom';
import NoFilmsFound from "./pages/Search/NoFilmsFound";

const NetflixRouter = () =>
    <BrowserRouter>
        <div>
            <Route path='/' component={Netflix}/>
        </div>
    </BrowserRouter>;

export default NetflixRouter;
