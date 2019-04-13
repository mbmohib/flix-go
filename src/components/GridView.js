import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';

import Title from '../components/style/Title';
import Container from '../components/style/Container';
import MovieGridView from '../components/MovieGridView'
import gridViewBg from '../images/gridview-bg.jpg';
import Loader from '../components/style/Loader';


const GridViewWrapper = styled.div`
    padding: 60px 0;
    background: url(${gridViewBg}) center center / cover no-repeat;
`;

const GridView = props => (
    <GridViewWrapper>
        <Container>
            <Title style={{ marginBottom: '30px' }} color="white" highWeight>
                {props.title}
            </Title>

            <Grid container>
                {!props.movies ? (
                    <Loader />
                ) : (
                    props.movies.map(movie => (
                        <Grid item key={movie.id} sm={3}>
                            <MovieGridView movie={movie} upcoming />
                        </Grid>
                    ))
                )}
            </Grid>
        </Container>
    </GridViewWrapper>
);

export default GridView;
