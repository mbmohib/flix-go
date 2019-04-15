import React, { Component } from 'react';
import { withRouter } from 'react-router';

import axios from '../axios';
import SectionHeader from '../components/SectionHeader';
import ListView from '../components/ListView';
import Loader from '../components/style/Loader';

class RelatedMovies extends Component {
    state = {
        movies: null,
        sortValue: '',
        genreIds: null,
        loading: true
    };

    componentDidMount() {
        console.log('RelatedMovies: ComponentDidMount');
        const genreIds = this.props.genres.map(genre => {
            return genre['id'];
        });

        this.setState({ genreIds }, () => {
            this.getMovies(this.state.genreIds);
        });
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('RelatedMovies: componentDidUpdate');
        if (prevState.sortValue !== this.state.sortValue) {
            this.getMovies(this.state.genreIds);
        }
    }

    getMovies(genreIds) {
        axios
            .get(
                `/discover/movie?with_genres=${genreIds}&sort_by=${
                    this.state.sortValue
                }`
            )
            .then(res => {
                const results = res.data.results;
                this.setState({
                    movies: results,
                    loading: false
                });
            });
    }

    handleSortChange = event => {
        if(event.target.value !== this.state.sortValue) {
            this.setState({ sortValue: event.target.value, loading: true });
        }
    };

    submitDialog = (data) => {
        const queryParams = [];
        for (let i in data) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(data[i]))
        }
        this.props.history.push({
            pathname: '/archive',
            search: '?' + queryParams.join('&')
        })
    }

    render() {
        console.log('RelatedMovies: Render');
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

export default withRouter(RelatedMovies);
