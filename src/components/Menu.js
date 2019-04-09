import React from 'react';
import styled from 'styled-components';

const MenuWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const MenuItem = styled.p`
    color: ${props => props.theme.primaryColor} !important;
    margin-right: 5px;
    display: inline-flex;

    :not(:last-child) {
        :after {
            content: ',';
            display: inline-block;
        }
    }
`;

const Menu = props => {
    const items = [];
    props.items && props.items.forEach( item => {
        items.push(item['name'])
    })
    
    return (
        <MenuWrapper>
            {items.map( item => <MenuItem key={item}>{item}</MenuItem>)}
        </MenuWrapper>
    )
}

export default Menu;