import React, { Component } from 'react';
import FilmHeader from './components/FilmHeader/FilmHeader';
import FilmStatusBar from './components/FilmStatusBar/FilmStatusBar';
import {
    PageContainer,
    PageMainArea
} from '../../common/styles/PageContainer.styles';
import RecommendedFilms from './components/RecommendedFilms/RecommendedFilms';

class Film extends Component {
    componentDidMount() {
        const {
            loadFilm,
            loadRecommendations,
            match
        } = this.props;
        loadFilm(match.params.id);
        loadRecommendations(match.params.id);
    }

    render() {
        return <PageContainer>
            <FilmHeader film={this.props.film}/>
            <FilmStatusBar/>
            <PageMainArea>
                <RecommendedFilms recommendations={this.props.recommendations}/>
            </PageMainArea>
        </PageContainer>;
    }}

export default Film;