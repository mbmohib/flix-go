import React, { Component } from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

import Container from './style/Container';
import Logo from '../images/logo.svg';
import Nav from './Nav';

const HeaderContainer = styled.header`
    padding: 20px 0;
    box-shadow: ${props => props.theme.largeShadow};
    position: absolute;
    width: 100%;
    top: 0;
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
    justify-content: flex-end;
`;

class Header extends Component {
    state = {
        headerHeight: '50px',
    }

    headerRef = React.createRef();

    navItems = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'Genres',
            path: '/genres'
        },
        {
            name: 'Archive',
            path: '/archive'
        }
    ]

    componentDidMount() {
        this.setState({ headerHeight: this.headerRef.current.clientHeight })
    }

    render() {
        return (
            <React.Fragment>
                <HeaderContainer ref={this.headerRef}>
                    <Container>
                        <Grid container>
                            <Grid item sm={3}>
                                <LogoWrapper>
                                    <Link to="/">
                                        <img src={Logo} alt="FlixGo" />
                                    </Link>
                                </LogoWrapper>
                            </Grid>
                            <Grid item sm={9}>
                                <HeaderRightContainer>
                                    <Nav navItems={this.navItems} position="right"/>
                                </HeaderRightContainer>
                            </Grid>
                        </Grid>
                    </Container>
                </HeaderContainer>
                <div style={{ height: this.state.headerHeight + 10 }} />
            </React.Fragment>
        );
    }
}

export default Header;
