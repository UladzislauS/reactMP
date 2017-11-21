import { CHANGE_SORT_VALUE, toggleSortValue } from '../../app/src/actions/sortBy';
import expect from 'expect';

describe('Actions: SortBy', () => {
    it('by default creates action of changing sort value with empty value', () => {
        const activeSortValue = 'date';
        const sortValues = [];
        const expectedAction = {
            type: CHANGE_SORT_VALUE,
            sortValues,
            activeSortValue
        };

        expect( toggleSortValue() ).toEqual(expectedAction);
    });

    it('creates action of changing sort value', () => {
        const activeSortValue = 'date';
        const sortValues = ['date', 'rating'];
        const expectedAction = {
            type: CHANGE_SORT_VALUE,
            sortValues,
            activeSortValue
        };

        expect( toggleSortValue(sortValues, activeSortValue) ).toEqual(expectedAction);
    });
});