import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

import axios from '../axios';
import GridView from '../components/GridView';
import withErrorHandler from '../hoc/withErrorHandler';
import * as actions from '../store/actions/index';


class UpcomingMovies extends Component {

    componentDidMount() {
        this.props.onFetchMovies();
    }

    componentDidUpdate() {
        setTimeout(() => {
            // Handle nuke carousal bug on navigation
            window.dispatchEvent(new Event('resize'));
        }, 0);
    }

    getMovies() {
        const today = moment().format('YYYY-MM-DD');
        const nextDate = moment()
            .add(60, 'days')
            .format('YYYY-MM-DD');

        axios
            .get(
                `/discover/movie?primary_release_date.gte=${today}&primary_release_date.lte=${nextDate}`
            )
            .then(res => {
                const results = res.data.results.slice(0, 4);

                this.setState({
                    movies: results
                });
            })
            .catch(err => {});
    }

    render() {
        return (
            <GridView title="Expected premiere" movies={this.props.movies} />
        );
    }
}

const mapStateToProps = state => {
    return {
        movies: state.upcomingMovies
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchMovies: () =>
            dispatch(actions.fetchUpcomingMovies())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withErrorHandler(UpcomingMovies));
