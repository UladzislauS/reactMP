import React from 'react';
import Footer from './common/components/Footer/Footer';
import {
    AppContainer,
    Container
} from './common/styles/Container.styles';
import {Route} from 'react-router';
import NoFilmsFound from './pages/Search/NoFilmsFoundContainer';
import Film from './pages/Film/FilmContainer';
import Search from './pages/Search/SearchContainer';

const Netflix = ({children}) =>
    <AppContainer>
        <Container>
            <Route exact path='/' component={NoFilmsFound}/>
            <Route path='/search/:query' component={Search}/>
            <Route path='/film/:id' component={Film}/>
        </Container>
        <Footer/>
    </AppContainer>;

export default Netflix;
