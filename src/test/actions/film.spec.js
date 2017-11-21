import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import expect from 'expect';
import {
    loadFilm,
    loadRecommendations,
    RECEIVE_FILM,
    RECEIVE_RECOMMENDATIONS,
    REQUEST_FILM,
    REQUEST_RECOMMENDATIONS
} from '../../app/src/actions/film';
import {
    GET_MOVIE_URL,
    GET_RECOMMENDED_URL
} from '../../app/src/vars';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('Actions: Film', () => {
    let store;

    beforeEach(() => {
        store = mockStore({
            film: {}
        });
    });

    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore();
    });

    it('creates REQUEST_FILM, when film requested, and RECEIVE_FILM, when fetching is finished', () => {
        const id = 1;
        const film = {
            title: 'Title'
        };
        const expectedActions = [{
            type: REQUEST_FILM,
            id,
            loading: true,
            film: {}
        }, {
            type: RECEIVE_FILM,
            id,
            loading: false,
            film
        }];

        fetchMock.getOnce(GET_MOVIE_URL(id), film);

        return store.dispatch( loadFilm(id) ).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('creates REQUEST_RECOMMENDATIONS, when recommendations requested, and RECEIVE_RECOMMENDATIONS, when fetching is finished', () => {
        const recId = 1;
        const recommendations = [
            { title: 'First recommendation'},
            { title: 'Second recommendation'}
        ];
        const expectedActions = [{
            type: REQUEST_RECOMMENDATIONS,
            recId,
            loadingRec: true,
            recommendations: []
        }, {
            type: RECEIVE_RECOMMENDATIONS,
            recId,
            recommendations,
            loadingRec: false
        }];

        fetchMock.getOnce(GET_RECOMMENDED_URL(recId), { results: recommendations });

        return store.dispatch( loadRecommendations(recId) ).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});