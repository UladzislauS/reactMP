import React from 'react';
import Header from '../../../../common/components/Header/Header';
import PageTitle from '../../../../common/components/PageTitle/PageTitle';
import mockedFilm from './mockedFilm';
import FilmInfo from '../FilmInfo/FilmInfo';

const FilmHeader = () =>
    <Header>
        <PageTitle/>
        <FilmInfo film={mockedFilm}/>
    </Header>;

export default FilmHeader;
