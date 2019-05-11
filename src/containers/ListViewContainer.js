import React, { Component } from 'react';
import moment from 'moment';

import axios from '../axios';
import SectionHeader from '../components/SectionHeader';
import ListView from '../components/ListView';
import Loader from '../components/style/Loader';
import withErrorHandler from '../hoc/withErrorHandler';

class ListViewContainer extends Component {
    state = {
        movies: null,
        year: this.props.location.hash.replace('#', '') || moment().year(),
        sortValue: 'vote_average.desc',
        loading: true,
    };

    componentDidMount() {
        console.log('Hero: ComponentDidMount');;
        this.getMovies(this.state.year);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('ListView: ComponentDidUpdate');
        if (prevState.sortValue !== this.state.sortValue) {
            this.getMovies(this.state.year);
        }
    }

    getMovies(year) {
        axios
            .get(
                `/discover/movie?year=${year}&sort_by=${
                    this.state.sortValue
                }`
            )
            .then(res => {
                const results = res.data.results.slice(0, 8);
                this.setState({
                    movies: results,
                    loading: false
                });
            })
            .catch(err => {});
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

    /**
     * Set filter data and query params
     *
     * @memberof ListViewContainer
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
        let titleValue;
        if (this.state.sortValue === 'vote_average.desc') {
            titleValue = 'Highest Rated';
        } else if (this.state.sortValue === 'revenue.desc') {
            titleValue = 'Highest Grossing';
        }
        const sectionTitle = titleValue + " Movies of " + this.state.year;

        return (
            <React.Fragment>
                <SectionHeader
                    title={sectionTitle}
                    sortValue={this.state.sortValue}
                    handleSortChange={this.handleSortChange}
                    submitDialog={this.submitDialog}
                />

                {this.state.loading ? (
                    <Loader />
                ) : (
                    <ListView movies={this.state.movies} />
                )}
            </React.Fragment>
        );
    }
}

export default withErrorHandler(ListViewContainer);
