import 'isomorphic-fetch';
import { SEARCH_URL } from '../vars';

export const REQUEST_FILMS = 'REQUEST_FILMS';
export const RECEIVE_FILMS = 'RECEIVE_FILMS';

export function requestFilms(query) {
    return {
        type: REQUEST_FILMS,
        query,
        loading: true,
        films: [],
        totalResults: 0
    }
}

export function receiveFilms(response, query) {
    return {
        type: RECEIVE_FILMS,
        query,
        loading: false,
        films: response.results,
        page: response.page,
        totalPages: response.total_pages,
        totalResults: response.total_results
    }
}

export function loadFilms(query) {
    return dispatch => {
        dispatch( requestFilms(query) );
        return fetch(SEARCH_URL(query))
            .then( response => response.json() )
            .then( response => dispatch( receiveFilms(response, query) ) );
    };
}