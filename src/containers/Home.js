import React, { Component } from 'react';

import Hero from '../components/Hero';
import ListView from '../components/ListView';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Hero />
                <ListView />
            </React.Fragment>
        )
    }
}

export default Home;