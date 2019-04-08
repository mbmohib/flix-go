import React from 'react';
import styled from 'styled-components';

const BadgeWrapper = styled.ul`
    display: flex;
    margin-left: 15px;

    li {
        margin-right: 5px;
        font-size: 12px;
        padding: 3px 5px;
        border: 1px solid rgba(255,255,255,0.26);
        border-radius: 4px;
    }
`;

const Badge = props => (
    <BadgeWrapper>
        <li>HD</li>
        <li>16+</li>
    </BadgeWrapper>
)

export default Badge;
