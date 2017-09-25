import React from 'react';
import SearchHeader from './components/SearchHeader/SearchHeader';
import SearchStatusBar from './components/SearchStatusBar/SearchStatusBar';
import SearchResults from './components/SearchResults/SearchResults';
import {
    PageContainer,
    PageMainArea
} from '../../common/styles/PageContainer.styles';

const Search = () =>
    <PageContainer>
        <SearchHeader/>
        <SearchStatusBar/>
        <PageMainArea>
            <SearchResults/>
        </PageMainArea>
    </PageContainer>;

export default Search;