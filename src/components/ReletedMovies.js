import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';

import SectionHeader from './SectionHeader';
import MovieListView from './MovieListView';
import Container from './style/Container';

const ReletedMoviesWrapper = styled.div`
    padding: 50px 0;
`;

class ReletedMovies extends Component {
    render() {
        return (
            <React.Fragment>
                <SectionHeader title="Releted Movies"/>
                <ReletedMoviesWrapper>
                    <Container>
                        <Grid container>
                            <Grid item sm={6}>
                                <MovieListView />
                            </Grid>
                        </Grid>
                    </Container>
                </ReletedMoviesWrapper>
            </React.Fragment>
        )
    }
}

export default ReletedMovies;