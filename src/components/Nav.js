import React from 'react';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

const NavWrapper = styled.nav`
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: flex-end;
    
    a {
        padding: 0px 15px;
        color: ${props => props.theme.whiteColor};
        text-transform: uppercase;

        :hover {
            color: ${props => props.theme.primaryColor};
        }
    }
`;



const Nav = () => (
    <NavWrapper>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
    </NavWrapper>
)

export default Nav;