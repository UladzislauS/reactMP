import { sortBy } from '../../app/src/reducers/sortBy';
import { CHANGE_SORT_VALUE } from '../../app/src/actions/sortBy';
import expect from 'expect';

describe('Reducers: SortBy', () => {
    const sortValues = [{
        label: 'release date',
        value: 'date'
    }, {
        label: 'rating',
        value: 'rating'
    }];

    it('by default returns initial state', () => {
        const defaultState = {
            sortValues: sortValues,
            activeSortValue: 'rating'
        };

        expect( sortBy(undefined, {}) ).toEqual(defaultState);
    });

    it('returns correct state on CHANGE_SORT_VALUE actions', () => {
        const action = {
            type: CHANGE_SORT_VALUE,
            sortValues: sortValues,
            activeSortValue: 'date'
        };
        const expectedState = {
            sortValues: sortValues,
            activeSortValue: 'date'
        };

        expect( sortBy(undefined, action) ).toEqual(expectedState);
    });
});