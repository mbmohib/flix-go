import React, { Component } from 'react';
import { connect } from 'react-redux';

import SectionHeader from '../components/SectionHeader';
import ListView from '../components/ListView';
import Loader from '../components/style/Loader';
import withErrorHandler from '../hoc/withErrorHandler';
import withInfiniteLoading from '../hoc/withInfiniteLoading';
import * as actions from '../store/actions/index';

class RelatedMovies extends Component {
    state = {
        sortValue: ''
    };

    componentDidMount() {
        this.props.onFetchMovies(
            this.props.movieId,
            this.state.sortValue,
            this.props.currentPage
        );
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.sortValue !== this.state.sortValue) {
            this.props.onFetchMovies(
                this.props.movieId,
                this.state.sortValue,
                this.props.currentPage,
                true
            );
        }

        if (
            prevProps.currentPage !== this.props.currentPage &&
            this.props.currentPage < this.props.totolPages
        ) {
            // FIXME: Fix Related movies updated issue
            // console.log('Changed currentPage', this.props.totolPages);
            this.props.onFetchMovies(
                this.props.movieId,
                this.state.sortValue,
                this.props.currentPage
            );
        }

        if (prevProps.movieId !== this.props.movieId) {
            // console.log('Changed MovieId');
            this.props.onFetchMovies(
                this.props.movieId,
                this.state.sortValue,
                this.props.currentPage,
                true
            );
        }
    }

    /**
     * Set sort value
     *
     * @memberof RelatedMovies
     */
    handleSortChange = event => {
        if (event.target.value !== this.state.sortValue) {
            this.setState({ sortValue: event.target.value });
        }
    };

    render() {
        return (
            <React.Fragment>
                <SectionHeader
                    title="Related Movies"
                    sortValue={this.state.sortValue}
                    handleSortChange={this.handleSortChange}
                />
                {this.props.movies.length <= 0 ? (
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
        movies: state.relatedMovies,
        totolPages: state.relatedMoviesTotalPages
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchMovies: (id, sortValue, currentPage, emptyArray) =>
            dispatch(
                actions.fetchRelatedMovies(
                    id,
                    sortValue,
                    currentPage,
                    emptyArray
                )
            )
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withErrorHandler(withInfiniteLoading(RelatedMovies)));
