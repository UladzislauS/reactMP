import React from 'react';
import SearchResultMessage from '../SearchResultMessage/SearchResultMessage';
import StatusBar from '../../../../common/styles/StatusBar.styles';
import RadioValues from '../../../../common/components/RadioValues/RadioValues';

const sortByLabel = 'Sort by';
const sortByValues = [{
    label: 'release date',
    value: 'date'
}, {
    label: 'rating',
    value: 'rating'
}];

const SearchStatusBar = () =>
    <StatusBar>
        <SearchResultMessage result={7}/>
        <RadioValues
            label={sortByLabel}
            values={sortByValues}
            buttonType='link'
            active='date'/>
    </StatusBar>;

export default SearchStatusBar;