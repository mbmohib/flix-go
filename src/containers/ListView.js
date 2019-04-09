import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';

import SectionHeader from '../components/SectionHeader';
import MovieListView from '../components/MovieListView';
import Container from '../components/style/Container';

const ListViewWrapper = styled.div`
    padding: 50px 0;
`;

const ListView = props => (
    <React.Fragment>
        <SectionHeader title="Highest Rated Movies of 2019"/>

        <ListViewWrapper>
            <Container>
                <Grid container spacing={32}>
                    <Grid item sm={6}>
                        <MovieListView />
                    </Grid>
                    <Grid item sm={6}>
                        <MovieListView />
                    </Grid>
                    <Grid item sm={6}>
                        <MovieListView />
                    </Grid>
                    <Grid item sm={6}>
                        <MovieListView />
                    </Grid>
                </Grid>
            </Container>
        </ListViewWrapper>
    </React.Fragment>
)

export default ListView;