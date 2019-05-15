import React, { Component } from 'react';

import axios from '../axios';
import SectionHeader from '../components/SectionHeader';
import ListView from '../components/ListView';
import Loader from '../components/style/Loader';
import withErrorHandler from '../hoc/withErrorHandler';
import withInfiniteLoading from '../hoc/withInfiniteLoading';


class RelatedMovies extends Component {
    state = {
        movies: [],
        totolPages: null,
        sortValue: '',
        genreIds: null,
        loading: true
    };

    componentDidMount() {
        // console.log('RelatedMovies: ComponentDidMount');
        this.getMovies();
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log('RelatedMovies: componentDidUpdate');
        if (prevState.sortValue !== this.state.sortValue) {
            this.setState({ movies: [], loading: true, currentPage: 0 }, () => {
                this.getMovies();
            })
        }

        if (
            prevProps.currentPage !== this.props.currentPage &&
            this.props.currentPage < this.state.totolPages
        ) {
            this.getMovies();
        }
    }


    getMovies() {
        axios
            .get(
                `movie/${this.props.movieId}/similar?sort_by=${
                    this.state.sortValue
                }&page=${this.props.currentPage + 1}`
            )
            .then(res => {
                const movies = [...this.state.movies, ...res.data.results]
                this.setState({
                    movies: movies,
                    totolPages: res.data.total_pages,
                    loading: false
                });
                window.addEventListener('scroll', this.listenToScroll);
            })
            .catch( err => {})
    }

    /** 
     * Set sort value
     *
     * @memberof RelatedMovies
     */
    handleSortChange = event => {
        if(event.target.value !== this.state.sortValue) {
            this.setState({ sortValue: event.target.value, loading: true });
        }
    };

    /** 
     * Set filter data and query params
     *
     * @memberof RelatedMovies
     */
    submitDialog = (data) => {
        // Format data into query params
        const queryParams = [];
        for (let i in data) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(data[i]))
        }

        // Set query params
        this.props.history.push({
            pathname: '/archive',
            search: '?' + queryParams.join('&')
        })
    }

    render() {
        return (
            <React.Fragment>
                <SectionHeader
                    title="Related Movies"
                    sortValue={this.state.sortValue}
                    handleSortChange={this.handleSortChange}
                    submitDialog={this.submitDialog}
                />
                {this.setState.loading ? (
                    <Loader />
                ) : (
                    <ListView movies={this.state.movies} />
                )}
            </React.Fragment>
        );
    }
}

export default withErrorHandler(withInfiniteLoading(RelatedMovies));
