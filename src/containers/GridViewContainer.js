import React, { Component } from 'react';
import moment from 'moment';

import axios from '../axios';
import GridView from '../components/GridView';

class GridViewContainer extends Component {
    state = {
        movies: null
    };

    componentDidMount() {
        console.log('GridView: ComponentDidMount')
        this.getMovies();
    }

    componentDidUpdate() {
        console.log('GridView: ComponentDidUpdate')
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 0);
    }

    getMovies() {
        const today = moment().format('YYYY-MM-DD');
        const nextDate = moment().add(60, 'days').format('YYYY-MM-DD');

        axios
            .get(
                `/discover/movie?primary_release_date.gte=${today}&primary_release_date.lte=${nextDate}`
            )
            .then(res => {
                const results = res.data.results.slice(0, 4);

                this.setState({
                    movies: results
                });
            });
    }

    render() {
        return (
            <GridView title="Expected premiere" movies={this.state.movies}/>
        )
    }
}

export default GridViewContainer;