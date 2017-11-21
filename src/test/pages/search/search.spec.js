import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import fetchMock from 'fetch-mock';
import Search from '../../../app/src/pages/Search/SearchContainer';
import { createMockStore } from 'redux-test-utils';
import mockState from './mockState';
import { SEARCH_URL } from '../../../app/src/vars';
import { CHANGE_SORT_VALUE } from '../../../app/src/actions/sortBy';

const query = 'Query';
const props = {
    match: {
        params: {
            query
        }
    },
    history: {
        push: jest.fn()
    }
};
const response = {
    results: [{
        title: 'Title'
    }],
    page: 1,
    total_pages: 1,
    total_results: 1
};

describe('Component: SearchContainer', () => {
    let store;
    let wrapper;

    beforeEach(() => {
        store = createMockStore( mockState );
        fetchMock.mock(SEARCH_URL(query), response);
        wrapper = shallow(<Search {...props}/>, { context: { store } } );
    });

    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore();
    });

    it('provides search value to the SearchHeader', () => {
        expect(wrapper.dive().find('SearchHeader').prop('searchValue')).toBe(mockState.films.query);
    });

    it('provides performSearch handler to the SearchHeader', () => {
        expect(wrapper.props().history.push.mock.calls.length).toBe(0);
        wrapper.dive().find('SearchHeader').props().performSearch();
        expect(wrapper.props().history.push.mock.calls.length).toBe(1);
    });

    it('provides properties to the SearchStatusBar', () => {
        expect(wrapper.dive().find('SearchStatusBar').prop('totalResults')).toBe(mockState.films.totalResults);
        expect(wrapper.dive().find('SearchStatusBar').prop('sortValues')).toBe(mockState.sortBy.sortValues);
        expect(wrapper.dive().find('SearchStatusBar').prop('activeSortValue')).toBe(mockState.sortBy.activeSortValue);
    });

    it('provides onSortValueChange handler to the SearchStatusBar', () => {
        const activeSortValue = 'date';
        const sortValues = ['date', 'rating'];
        const expectedAction = {
            type: CHANGE_SORT_VALUE,
            sortValues,
            activeSortValue
        };
        wrapper.dive().find('SearchStatusBar').props().onSortValueChange(sortValues, activeSortValue);
        expect(store.isActionDispatched(expectedAction)).toBeTruthy();
    });
});