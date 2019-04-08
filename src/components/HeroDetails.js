import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';

import Container from './style/Container';
import Iframe from './style/Iframe';
import DetailsMovie from './DetailsMovie';

const HeroDetailsWrapper = styled.div`
`;

const HeroDetails = props => (
    <HeroDetailsWrapper>
        <Container>
            <Grid container>
                <Grid item sm={6}>
                    <DetailsMovie />
                </Grid>
                <Grid item sm={6}>
                    <Iframe />
                </Grid>
            </Grid>
        </Container>
    </HeroDetailsWrapper>
)

export default HeroDetails;