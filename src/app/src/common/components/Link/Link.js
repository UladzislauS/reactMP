import React from 'react';
import StyledLink from './Link.styles';

const Link = ({color, title}) =>
    <StyledLink
        color={color}>
        {title}
    </StyledLink>;

export default Link;
