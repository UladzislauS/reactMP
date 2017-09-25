import React from 'react';
import Footer from './common/components/Footer/Footer';
import {
    AppContainer,
    Container
} from './common/styles/Container.styles';
import {Route} from 'react-router';
import NoFilmsFound from './pages/Search/NoFilmsFound';
import Search from './pages/Search/Search';
import Film from './pages/Film/Film';

const Netflix = ({children}) =>
    <AppContainer>
        <Container>
            <Route exact path='/' component={NoFilmsFound}/>
            <Route path='/search/:query' component={Search}/>
            <Route path='/film/:title' component={Film}/>
        </Container>
        <Footer/>
    </AppContainer>;

export default Netflix;
