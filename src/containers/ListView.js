import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import axios from '../axios';

import SectionHeader from '../components/SectionHeader';
import MovieListView from '../components/MovieListView';
import Container from '../components/style/Container';
import Loader from '../components/style/Loader';

const ListViewWrapper = styled.div`
    padding: 50px 0;
`;


class ListView extends Component {
    state = {
        movies: null
    };

    navItems = [
        {
            name: '2019',
            path: '2019'
        },
        {
            name: '2018',
            path: '2018'
        },
        {
            name: '2017',
            path: '2017'
        },
        {
            name: '2016',
            path: '2016'
        }
    ]

    componentDidMount() {
        console.log('Hero: ComponentDidMount');
        this.getMovies();
    }

    getMovies() {
        axios
            .get(
                '/discover/movie?primary_release_year=2019&sort_by=vote_average.desc'
            )
            .then(res => {
                const results = res.data.results.slice(0, 8);
                this.setState({
                    movies: results
                });
            });
    }

    render() {
        return (
            <React.Fragment>
                <SectionHeader
                    title="Highest Rated Movies"
                    navItems={this.navItems}
                />

                <ListViewWrapper>
                    <Container>
                        <Grid container spacing={32}>
                            {!this.state.movies ? (
                                <Loader />
                            ) : (
                                this.state.movies.map(movie => (
                                    <Grid key={movie.id} item sm={6}>
                                        <MovieListView movie={movie} />
                                    </Grid>
                                ))
                            )}
                        </Grid>
                    </Container>
                </ListViewWrapper>
            </React.Fragment>
        );
    }
}

export default ListView;
