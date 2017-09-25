import React from 'react';
import {
    Tile,
    TileImage,
    TileTitle,
    TileFilmInfo,
    TileFilmYear,
    TileFilmGroup,
    TileFilmDescription
} from './FilmTile.styles';

const FilmTile = ({film}) =>
    <Tile to={`/film/${film.title}`}>
        <TileImage url={film.image}/>
        <TileFilmDescription>
            <TileFilmInfo>
                <TileTitle>{film.title}</TileTitle>
                <TileFilmYear>{film.year}</TileFilmYear>
            </TileFilmInfo>
            <TileFilmGroup>{film.category}</TileFilmGroup>
        </TileFilmDescription>
    </Tile>;

export default FilmTile;