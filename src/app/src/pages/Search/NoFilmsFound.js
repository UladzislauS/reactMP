import React from 'react';
import SearchHeader from './components/SearchHeader/SearchHeader';
import NoFilmsFoundMessage from './components/NoFilmsFoundMessage/NoFilmsFoundMessage';
import {
    PageContainer
} from '../../common/styles/PageContainer.styles';
import StatusBar from '../../common/styles/StatusBar.styles';

const NoFilmsFound = ({performSearch}) =>
    <PageContainer>
        <SearchHeader performSearch={performSearch}/>
        <StatusBar/>
        <NoFilmsFoundMessage/>
    </PageContainer>;

export default NoFilmsFound;