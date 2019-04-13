import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';

import MovieListView from '../components/MovieListView';
import Container from '../components/style/Container';
import Loader from '../components/style/Loader';

const ListViewWrapper = styled.div`
    padding: 50px 0;
`;

const ListView = props => (
    <ListViewWrapper>
        <Container>
            <Grid container spacing={32}>
                {!props.movies ? (
                    <Loader />
                ) : (
                    props.movies.map(movie => (
                        <Grid key={movie.id} item sm={6}>
                            <MovieListView movie={movie} />
                        </Grid>
                    ))
                )}
            </Grid>
        </Container>
    </ListViewWrapper>
);

export default ListView;
