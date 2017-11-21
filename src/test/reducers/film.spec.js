import { film } from '../../app/src/reducers/film';
import expect from 'expect';
import {
    RECEIVE_FILM, RECEIVE_RECOMMENDATIONS, REQUEST_FILM,
    REQUEST_RECOMMENDATIONS
} from '../../app/src/actions/film';

describe('Reducers: Film', () => {
    it('by default returns initial state', () => {
        const defaultState = {
            loading: false,
            film: {},
            id: ''
        };

        expect( film(undefined, {}) ).toEqual(defaultState);
    });

    it('returns correct state on RECEIVE_FILM and REQUEST_FILM actions', () => {
        const requestAction = {
            type: REQUEST_FILM,
            loading: true,
            film: {},
            id: 1
        };
        const receiveAction = {
            type: RECEIVE_FILM,
            loading: false,
            film: { title: 'Title' },
            id: 1
        };
        const expectedState = {
            loading: false,
            film: { title: 'Title' },
            id: 1
        };
        const state = film(undefined, requestAction);
        expect( film(state, receiveAction) ).toEqual(expectedState);
    });

    it('returns correct state on RECEIVE_RECOMMENDATIONS and REQUEST_RECOMMENDATIONS actions', () => {
        const requestAction = {
            type: REQUEST_RECOMMENDATIONS,
            recId: 1,
            recommendations: [],
            loadingRec: true
        };
        const receiveAction = {
            type: RECEIVE_RECOMMENDATIONS,
            recId: 1,
            recommendations: [{ title: 'Title' }],
            loadingRec: false
        };
        const expectedState = {
            loading: false,
            film: {},
            id: '',
            recId: 1,
            recommendations: [{ title: 'Title' }],
            loadingRec: false
        };
        const state = film(undefined, requestAction);
        expect( film(state, receiveAction) ).toEqual(expectedState);
    });
});