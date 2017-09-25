import React from 'react';
import RadioValues from '../../../../common/components/RadioValues/RadioValues';

const searchByLabel = 'Sort by';
const searchByValues = [{
    label: 'release date',
    value: 'date'
}, {
    label: 'rating',
    value: 'rating'
}];

const SortRadio = (params) =>
    <div>
        <RadioValues label={searchByLabel} values={searchByValues}/>
    </div>;

export default SortRadio;