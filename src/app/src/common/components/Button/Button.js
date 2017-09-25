import React from 'react';
import StyledButton from './Button.styles';

const Button = ({onClick, color, size, title}) =>
    <StyledButton
        onClick={onClick}
        color={color}
        size={size}>
        {title}
    </StyledButton>;

export default Button;
