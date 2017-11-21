import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import expect from 'expect';
import {
    loadFilms,
    RECEIVE_FILMS,
    REQUEST_FILMS
} from '../../app/src/actions/films';
import { SEARCH_URL } from '../../app/src/vars';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('Actions: Films', () => {
    let store;

    beforeEach(() => {
        store = mockStore({
            films: {}
        });
    });

    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore();
    });

    it('creates REQUEST_FILMS, when films requested, and RECEIVE_FILMS, when fetching is finished', () => {
        const query = 'Query';
        const response = {
            results: [{
                title: 'Title'
            }],
            page: 1,
            total_pages: 1,
            total_results: 1
        };
        const expectedActions = [{
            type: REQUEST_FILMS,
            query,
            loading: true,
            films: [],
            totalResults: 0
        }, {
            type: RECEIVE_FILMS,
            query,
            loading: false,
            films: response.results,
            page: response.page,
            totalPages: response.total_pages,
            totalResults: response.total_results
        }];

        fetchMock.getOnce(SEARCH_URL(query), response);

        return store.dispatch( loadFilms(query) ).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});