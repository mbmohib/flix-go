import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import moment from 'moment';

import axios from '../axios';
import Title from '../components/style/Title';
import Container from '../components/style/Container';
import MovieGridView from '../components/MovieGridView'
import gridViewBg from '../images/gridview-bg.jpg';
import Loader from '../components/style/Loader';

const GridViewWrapper = styled.div`
    padding: 60px 0;
    background: url(${gridViewBg}) center center / cover no-repeat;
`;

class GridView extends Component {
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
            <GridViewWrapper>
                <Container>
                    <Title style={{ marginBottom: '30px' }} color="white" highWeight>
                        Expected premiere
                    </Title>

                    <Grid container>
                        {
                            !this.state.movies ? 
                            <Loader /> :
                            this.state.movies.map( movie => (
                                <Grid item key={movie.id} sm={3}>
                                    <MovieGridView movie={movie} upcoming />
                                </Grid>
                            ))
                        }
                    </Grid>
                </Container>
            </GridViewWrapper>
        )
    }
}

export default GridView;