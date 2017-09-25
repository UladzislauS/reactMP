import React from 'react';
import StatusBar from '../../../../common/styles/StatusBar.styles';
import FilmsBy from '../FilmsBy/FilmsBy';

const SearchStatusBar = () =>
    <StatusBar>
        <FilmsBy director='Quentin Tarantino'/>
    </StatusBar>;

export default SearchStatusBar;