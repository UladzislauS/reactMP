import React from 'react';
import Footer from './common/components/Footer/Footer';
import {
    AppContainer,
    Container
} from './common/styles/Container.styles';
import { Route } from 'react-router';
import NoFilmsFound from './pages/Search/NoFilmsFoundContainer';
import Film from './pages/Film/FilmContainer';
import Search from './pages/Search/SearchContainer';

export const App = ({children}) =>
    <div>
        <Route path='/' component={() =>
            <AppContainer>
                <Container>
                    <Route exact path='/' component={NoFilmsFound}/>
                    <Route path='/search/:query' component={Search}/>
                    <Route path='/film/:id' component={Film}/>
                </Container>
                <Footer/>
            </AppContainer>
        }/>
    </div>;

export default App;
