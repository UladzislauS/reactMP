import React from 'react';
import FilmTiles from '../../../../common/components/FilmTiles/FilmTiles';

const SearchResults = ({
   page,
   totalPages,
   films
}) =>
    <FilmTiles
        page={page}
        totalPages={totalPages}
        films={films}/>;

export default SearchResults;