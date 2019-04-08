import React from 'react';
import styled from 'styled-components';

const MenuWrapper = styled.div`
    display: flex;
`;

const MenuItem = styled.p`
    color: ${props => props.theme.primaryColor} !important;
    margin-right: 5px;

    :first-child {
        :after {
            content: ',';
            display: inline-block;
        }
    }
`;

const Menu = props => (
    <MenuWrapper>
        <MenuItem>Action</MenuItem>
        <MenuItem>Science</MenuItem>
    </MenuWrapper>
)

export default Menu;