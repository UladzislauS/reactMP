import expect from 'expect';
import { films } from '../../app/src/reducers/films';
import { RECEIVE_FILMS, REQUEST_FILMS } from '../../app/src/actions/films';

describe('Reducers: Film', () => {
    it('by default returns initial state', () => {
        const defaultState = {
            loading: false,
            films: [],
            page: 0,
            totalPages: 0,
            totalResults: 0,
            query: ''
        };

        expect(films(undefined, {})).toEqual(defaultState);
    });

    it('returns correct state on RECEIVE_FILMS and REQUEST_FILMS actions', () => {
        const requestAction = {
            type: REQUEST_FILMS,
            loading: true,
            films: [],
            page: 0,
            totalPages: 0,
            totalResults: 0,
            query: ''
        };
        const receiveAction = {
            type: RECEIVE_FILMS,
            loading: false,
            films: [{ title: 'Title' }],
            page: 1,
            totalPages: 1,
            totalResults: 1,
            query: 'Title'
        };
        const expectedState = {
            loading: false,
            films: [{ title: 'Title' }],
            page: 1,
            totalPages: 1,
            totalResults: 1,
            query: 'Title'
        };
        const state = films(undefined, requestAction);
        expect( films(state, receiveAction) ).toEqual(expectedState);
    });
});