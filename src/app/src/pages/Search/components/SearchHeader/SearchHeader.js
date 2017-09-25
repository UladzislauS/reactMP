import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Header from '../../../../common/components/Header/Header';
import PageTitle from '../../../../common/components/PageTitle/PageTitle';

const SearchHeader = () =>
    <Header>
        <PageTitle/>
        <SearchBar/>
    </Header>;

export default SearchHeader;
