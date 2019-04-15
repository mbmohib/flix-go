import React, { Component } from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

class Layout extends Component {
    render() {
        return (
            <Wrapper>
                <Header />
                <main style={{ flexGrow: 1 }}>{this.props.children}</main>
                <Footer />
            </Wrapper>
        );
    }
}

export default Layout;
