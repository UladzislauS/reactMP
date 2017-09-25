import React from 'react';
import FilmTiles from "../../../../common/components/FilmTiles/FilmTiles";
import mockData from  './mockTiles'

const SearchResults = (params) =>
    <FilmTiles list={mockData}/>;

export default SearchResults;