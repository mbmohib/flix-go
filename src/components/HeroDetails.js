import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';

import Container from './style/Container';
import DetailsMovie from './DetailsMovie';

const HeroDetailsWrapper = styled.div`
    background-position: center center;
    background-size: cover;
`;

const HeroDetails = props => (
    <HeroDetailsWrapper style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(https://image.tmdb.org/t/p/w500' + props.movie.backdrop_path + ')'
    }}>
        <Container>
            <Grid container>
                <Grid item sm={8}>
                    <DetailsMovie movie={props.movie} />
                </Grid>
            </Grid>
        </Container>
    </HeroDetailsWrapper>
);

export default HeroDetails;
