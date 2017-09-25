import React from 'react';
import Tiles from './FilmTiles.styles';
import FilmTile from './components/FilmTile/FilmTile';

const TileList = (list) => {
    return list.map((film, key) =>
        <FilmTile key={key} film={film}/>
    );
};

const FilmTiles = ({list}) =>
    <Tiles>
        {TileList(list)}
    </Tiles>;

export default FilmTiles;