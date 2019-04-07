import React, { Component } from 'react';

import Header from '../components/Header';

class Layout extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <main>{this.props.children}</main>
                <footer />
            </React.Fragment>
        );
    }
}

export default Layout;
