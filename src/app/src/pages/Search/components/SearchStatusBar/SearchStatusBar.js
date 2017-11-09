import React from 'react';
import SearchResultMessage from '../SearchResultMessage/SearchResultMessage';
import StatusBar from '../../../../common/styles/StatusBar.styles';
import RadioValues from '../../../../common/components/RadioValues/RadioValues';

const SearchStatusBar = ({
    totalResults,
    sortValues,
    activeSortValue,
    onSortValueChange
}) =>
    <StatusBar>
        <SearchResultMessage result={totalResults}/>
        <RadioValues
            label='Search by'
            values={sortValues}
            buttonType='link'
            active={activeSortValue}
            onClick={(value) => onSortValueChange(sortValues, value)}/>
    </StatusBar>;

export default SearchStatusBar;