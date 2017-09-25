import React from 'react';
import FilmTiles from '../../../../common/components/FilmTiles/FilmTiles';
import mockData from './mockTiles';

const RecommendedFilms = () =>
    <FilmTiles list={mockData}/>;

export default RecommendedFilms;