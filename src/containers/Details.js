import React, { Component } from 'react';

import HeroDetails from '../components/HeroDetails';
import ReletedMovies from '../components/ReletedMovies';

class Details extends Component {
    render() {
        return (
            <React.Fragment>
                <HeroDetails />
                <ReletedMovies />
            </React.Fragment>
        )
    }
}

export default Details;