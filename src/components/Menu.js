import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MenuWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const LinkItem = styled(Link)`
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
    return props.link ? (
        <MenuWrapper>
            {props.items.map(item => (
                <LinkItem
                    key={item['name']}
                    to={`/archive?with_genres=${item['id']}`}
                >
                    {item['name']}
                </LinkItem>
            ))}
        </MenuWrapper>
    ) : (
        <MenuWrapper>
            {props.items.map(item => (
                <MenuItem
                    key={item['name']}
                    to={`/archive?with_genres=${item['id']}`}
                >
                    {item['name']}
                </MenuItem>
            ))}
        </MenuWrapper>
    );
};

export default Menu;
