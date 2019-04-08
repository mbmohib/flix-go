import React, { Component } from 'react';

import Hero from '../components/Hero';
import ListView from '../components/ListView';
import GridView from '../components/GridView';

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