import React from 'react';
import StyledLink from './Link.styles';

const Link = ({onClick, color, title}) =>
    <StyledLink
        onClick={onClick}
        color={color}>
        {title}
    </StyledLink>;

export default Link;
