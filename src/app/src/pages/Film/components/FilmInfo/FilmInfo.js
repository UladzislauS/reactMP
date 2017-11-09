import React from 'react';

import {
    FilmCast,
    FilmDescription,
    FilmLabel,
    FilmNote,
    FilmPoster,
    FilmPreview,
    FilmRating,
    FilmSummary,
    FilmTitle
} from './FilmInfo.styles';
import { IMAGE_URL } from '../../../../vars';

const FilmInfo = ({film}) =>
    <FilmPreview>
        <FilmPoster image={film.poster_path ? IMAGE_URL(film.poster_path) : ''}/>
        <FilmSummary>
            <FilmLabel>
                <FilmTitle>{film.title}</FilmTitle>
                <FilmRating>{film.vote_average}</FilmRating>
            </FilmLabel>
            <FilmDescription>{film.genres.map((genre) => genre.name).join(', ')}</FilmDescription>
            <FilmNote>{film.release_date.split('-')[0]}</FilmNote>
            <FilmNote>{film.runtime} min</FilmNote>
            <FilmDescription>{film.overview}</FilmDescription>
        </FilmSummary>
    </FilmPreview>;

export default FilmInfo;