import React from 'react';
import {
    Input,
    InputContainer
} from './SearchInput.styles';

const SearchInput = ({onChange, value}) =>
    <InputContainer>
        <Input
            onChange={onChange}
            value={value}/>
    </InputContainer>;

export default SearchInput;