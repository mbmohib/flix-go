import React, { Component } from 'react';

import Hero from './Hero';
import ListView from './ListView';
import GridView from './GridView';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Hero />
                <ListView />
                <GridView />
            </React.Fragment>
        )
    }
}

export default Home;