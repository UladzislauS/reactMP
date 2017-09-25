import React from 'react';
import FilmHeader from './components/FilmHeader/FilmHeader';
import FilmStatusBar from './components/FilmStatusBar/FilmStatusBar';
import {
    PageContainer,
    PageMainArea
} from '../../common/styles/PageContainer.styles';
import RecommendedFilms from './components/RecommendedFilms/RecommendedFilms';

const Film = () =>
    <PageContainer>
        <FilmHeader/>
        <FilmStatusBar/>
        <PageMainArea>
            <RecommendedFilms/>
        </PageMainArea>
    </PageContainer>;

export default Film;