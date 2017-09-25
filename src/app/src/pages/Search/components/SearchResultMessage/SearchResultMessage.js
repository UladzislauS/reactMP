import React from 'react';

const SearchResultMessage = ({result}) =>
    <p>{result} {result > 1 ? 'movies' : 'movies' } found</p>;

export default SearchResultMessage;