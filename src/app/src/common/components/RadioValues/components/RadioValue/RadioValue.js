import React from 'react';
import {RadioValueContainer} from './RadioValue.styles';
import Button from '../../../Button/Button';
import Link from '../../../Link/Link';

const button = (label, type, isChecked, onClick) => {
    if (type === 'button') {
        return <Button
            onClick={onClick}
            title={label}
            size='small'
            color={isChecked ? 'red' : 'gray'}/>;
    }
    if (type === 'link') {
        return <Link
            onClick={onClick}
            title={label}
            color={isChecked ? 'red' : 'default'}/>;
    }
};

const RadioValue = ({label, type, isChecked, onClick}) =>
    <RadioValueContainer>
        {button(label, type, isChecked, onClick)}
    </RadioValueContainer>;

export default RadioValue;