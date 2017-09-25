import React from 'react';
import RadioValue from './components/RadioValue/RadioValue';
import {
    RadioValuesContainer,
    RadioValuesLabel
} from './RadioValues.styles';

const RadioValues = ({label, values, active, buttonType}) =>
    <RadioValuesContainer>
        <RadioValuesLabel>{label}</RadioValuesLabel>
        {values.map((value, key) =>
            <RadioValue
                key={key}
                label={value.label}
                value={value.value}
                isChecked={active === value.value}
                type={buttonType}/>
        )}
    </RadioValuesContainer>;

export default RadioValues;