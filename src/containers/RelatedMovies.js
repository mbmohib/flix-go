import React, { Component } from 'react';

import axios from '../axios';
import SectionHeader from '../components/SectionHeader';
import ListView from '../components/ListView';
import Loader from '../components/style/Loader';
import withErrorHandler from '../hoc/withErrorHandler';

// TODO: Refactor and remove reduntant codes

class RelatedMovies extends Component {
    state = {
        movies: [],
        totolPages: null,
        currentPage: 1,
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

        if(prevState.currentPage !== this.state.currentPage) {
            this.getMovies();
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll);
    }

    /**
     * Change pagination if user scroll to
     * near end of the page
     *
     * @memberof Archive
     */
    listenToScroll = () => {
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;

        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        // Get current scrolled position
        const scrolled = winScroll / height;

        // Check if user reach to near to end of the page
        if(scrolled > 0.8) {
            // console.log('Archive: Scroll Event Detached');
            window.removeEventListener('scroll', this.listenToScroll);
            if(this.state.currentPage < this.state.totolPages) {
                this.setState((prevState) => {
                    return {
                        currentPage: prevState.currentPage + 1
                    }
                });
            }
        }
    };

    getMovies() {
        axios
            .get(
                `movie/${this.props.movieId}/similar?sort_by=${
                    this.state.sortValue
                }${this.state.currentPage > 0 &&
                    `&page=${this.state.currentPage}`}`
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

export default withErrorHandler(RelatedMovies);
