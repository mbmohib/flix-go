import React, { Component } from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

import Container from './style/Container';
import Logo from '../images/logo.svg';
import Nav from './Nav';
import Search from './Search';

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
`;

class Header extends Component {
    state = {
        headerHeight: '50px',
    }

    headerRef = React.createRef();

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
                                    <img src={Logo} alt="FlixGo" />
                                </LogoWrapper>
                            </Grid>
                            <Grid item sm={9}>
                                <HeaderRightContainer>
                                    <Search />
                                    <Nav/>
                                </HeaderRightContainer>
                            </Grid>
                        </Grid>
                    </Container>
                </HeaderContainer>
                <div style={{ height: this.state.headerHeight }} />
            </React.Fragment>
        );
    }
}

export default Header;
