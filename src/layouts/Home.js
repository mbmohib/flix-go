import React, { Component } from 'react';

import NowPlayingMovies from '../containers/NowPlayingMovies';
import HighestRatedMovies from '../containers/HighestRatedMovies';
import UpcomingMovies from '../containers/UpcomingMovies';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <NowPlayingMovies />
                <HighestRatedMovies {...this.props}/>
                <UpcomingMovies />
            </React.Fragment>
        )
    }
}

export default Home;