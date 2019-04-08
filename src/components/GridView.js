import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';

import Title from './style/Title';
import Container from './style/Container';
import gridViewBg from '../images/gridview-bg.jpg';
import MovieGridView from './MovieGridView'

const GridViewWrapper = styled.div`
    padding: 60px 0;
    background: url(${gridViewBg}) center center / cover no-repeat;
`;

class GridView extends Component {
    render() {
        return (
            <GridViewWrapper>
                <Container>
                    <Title style={{ marginBottom: '30px' }} color="white" highWeight>Expected premiere</Title>

                    <Grid container>
                        <Grid item sm={3}>
                            <MovieGridView />
                        </Grid>
                        <Grid item sm={3}>
                            <MovieGridView />
                        </Grid>
                        <Grid item sm={3}>
                            <MovieGridView />
                        </Grid>
                        <Grid item sm={3}>
                            <MovieGridView />
                        </Grid>
                    </Grid>
                </Container>
            </GridViewWrapper>
        )
    }
}

export default GridView;