import React, { Component } from 'react';

import Hero from './Hero';
import ListViewContainer from './ListViewContainer';
import GridViewContainer from './GridViewContainer';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Hero />
                <ListViewContainer {...this.props}/>
                <GridViewContainer />
            </React.Fragment>
        )
    }
}

export default Home;