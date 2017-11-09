import React from 'react';
import Tiles from './FilmTiles.styles';
import FilmTile from './components/FilmTile/FilmTile';

const TileList = (list = []) => {
    return list.map((film, key) =>
        <FilmTile key={key} film={film}/>
    );
};

const FilmTiles = ({films}) =>
    <Tiles>
        {TileList(films)}
    </Tiles>;

export default FilmTiles;