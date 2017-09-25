import React from 'react';
import {RadioValueContainer} from './RadioValue.styles';
import Button from '../../../Button/Button';
import Link from '../../../Link/Link';

const button = (label, type, isChecked) => {
    if (type === 'button') {
        return <Button
            title={label}
            size='small'
            color={isChecked ? 'red' : 'gray'}/>;
    }
    if (type === 'link') {
        return <Link
            title={label}
            color={isChecked ? 'red' : 'default'}/>;
    }
};

const RadioValue = ({label, type, isChecked}) =>
    <RadioValueContainer>
        {button(label, type, isChecked)}
    </RadioValueContainer>;

export default RadioValue;