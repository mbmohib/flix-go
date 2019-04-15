import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavWrapper = styled.nav`
    display: flex;
    align-items: center;
    justify-content: ${props =>
        props.position === 'center'
            ? 'center'
            : props.position === 'right'
            ? 'flex-end'
            : 'flex-start'};

    a {
        padding: 0px 15px;
        color: ${props => props.theme.whiteColor};
        text-transform: uppercase;

        :first-child {
            padding-left: 0;
        }

        :last-child {
            padding-right: 0;
        }

        :hover {
            color: ${props => props.theme.primaryColor};
        }

        &.active {
            color: ${props => props.theme.primaryColor};
        }
    }
`;

const Nav = props => {
    return (
        <NavWrapper>
            {props.navItems &&
                props.navItems.map(item => (
                    <NavLink
                        key={item.name}
                        to={item.path}
                        exact
                    >
                        {item.name}
                    </NavLink>
                ))}
        </NavWrapper>
    );
};

export default Nav;
