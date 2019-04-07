import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

import Container from './style/Container';
import Logo from '../images/logo.svg';
import Nav from './Nav';
import Search from './Search';

const HeaderWrapper = styled.header`
    padding: 20px 0;
    box-shadow: ${props => props.theme.largeShadow};
`;

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`;

const HeaderRightContainer = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`;

const Header = props => (
    <HeaderWrapper>
        <Container>
            <Grid container>
                <Grid item sm={3}>
                    <LogoWrapper>
                        <img src={Logo} alt="FlixGo"/>
                    </LogoWrapper>
                </Grid>
                <Grid item sm={9}>
                    <HeaderRightContainer>
                        <Search />
                        <Nav />
                    </HeaderRightContainer>
                </Grid>
            </Grid>
        </Container>
    </HeaderWrapper>
)

export default Header;