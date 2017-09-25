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

const FilmInfo = ({film}) =>
    <FilmPreview>
        <FilmPoster image={film.poster}/>
        <FilmSummary>
            <FilmLabel>
                <FilmTitle>{film.show_title}</FilmTitle>
                <FilmRating>{film.rating}</FilmRating>
            </FilmLabel>
            <FilmDescription>{film.category}</FilmDescription>
            <FilmNote>{film.release_year}</FilmNote>
            <FilmNote>{film.runtime}</FilmNote>
            <FilmDescription>{film.summary}</FilmDescription>
            <FilmCast>{`Director: ${film.director}`}</FilmCast>
            <FilmCast>{`Cast: ${film.show_cast}`}</FilmCast>
        </FilmSummary>
    </FilmPreview>;

export default FilmInfo;