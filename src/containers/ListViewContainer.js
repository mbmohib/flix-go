import React, { Component } from 'react';
import { withRouter } from 'react-router';
import moment from 'moment';

import axios from '../axios';
import SectionHeader from '../components/SectionHeader';
import ListView from '../components/ListView';
import Loader from '../components/style/Loader';

class ListViewContainer extends Component {
    state = {
        movies: null,
        year: this.props.location.hash.replace('#', '') || moment().year(),
        sortValue: 'vote_average.desc',
        loading: true
    };

    navItems = [
        {
            name: '2019',
            path: '#2019'
        },
        {
            name: '2018',
            path: '#2018'
        },
        {
            name: '2017',
            path: '#2017'
        },
        {
            name: '2016',
            path: '#2016'
        }
    ];

    componentDidMount() {
        console.log('Hero: ComponentDidMount');
        this.getMovies(this.state.year);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('ListView: ComponentDidUpdate');

        if (
            this.props.location.hash.replace('#', '') &&
            prevState.year !== this.props.location.hash.replace('#', '')
        ) {
            this.setState({ year: this.props.location.hash.replace('#', '') });
            this.getMovies(this.state.year);
        }

        if (prevState.sortValue !== this.state.sortValue) {
            this.getMovies(this.state.year);
        }
    }

    getMovies(year) {
        axios
            .get(
                `/discover/movie?primary_release_year=${year}&sort_by=${
                    this.state.sortValue
                }`
            )
            .then(res => {
                const results = res.data.results.slice(0, 8);
                this.setState({
                    movies: results,
                    loading: false
                });
            });
    }

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
        const sectionTitle = titleValue + " Movies of " + this.state.year;

        return (
            <React.Fragment>
                <SectionHeader
                    title={sectionTitle}
                    navItems={this.navItems}
                    sortValue={this.state.sortValue}
                    handleSortChange={this.handleSortChange}
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

export default withRouter(ListViewContainer);
