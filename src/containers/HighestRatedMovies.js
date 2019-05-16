import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

import SectionHeader from '../components/SectionHeader';
import ListView from '../components/ListView';
import Loader from '../components/style/Loader';
import withErrorHandler from '../hoc/withErrorHandler';
import * as actions from '../store/actions/index';

class HighestRatedMovies extends Component {
    state = {
        year: this.props.location.hash.replace('#', '') || moment().year(),
        sortValue: 'vote_average.desc'
    };

    componentDidMount() {
        this.props.onFetchMovies(this.state.year, this.state.sortValue);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.sortValue !== this.state.sortValue) {
            this.props.onFetchMovies(this.state.year, this.state.sortValue);
        }
    }

    /**
     * Set sort value on local state
     *
     * @memberof ListViewContainer
     */
    handleSortChange = event => {
        if (event.target.value !== this.state.sortValue) {
            this.setState({ sortValue: event.target.value, loading: true });
        }
    };

    render() {
        let titleValue;
        if (this.state.sortValue === 'vote_average.desc') {
            titleValue = 'Highest Rated';
        } else if (this.state.sortValue === 'revenue.desc') {
            titleValue = 'Highest Grossing';
        }
        const sectionTitle = titleValue + ' Movies of ' + this.state.year;

        return (
            <React.Fragment>
                <SectionHeader
                    title={sectionTitle}
                    sortValue={this.state.sortValue}
                    handleSortChange={this.handleSortChange}
                />

                {!this.props.movies ? (
                    <Loader />
                ) : (
                    <ListView movies={this.props.movies} />
                )}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        movies: state.highestRatedmovies
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchMovies: (year, sortValue) =>
            dispatch(actions.fetchHighestRatedMovies(year, sortValue))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withErrorHandler(HighestRatedMovies));
