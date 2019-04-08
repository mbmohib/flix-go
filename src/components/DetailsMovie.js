import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';

import cover from '../images/cover.jpg';
import Title from './style/Title';
import Paragraph from './style/Paragraph';
import Wrapper from './style/Wrapper';
import Menu from './Menu';
import Rating from './Rating';
import Badge from './Badge';

const DetailsMovieWrapper = styled.div`
    padding: 50px 0;
`;

const MovieCover = styled.img`
    width: 80%;
    margin-bottom: ${props => props.theme.smallSpace};
`;

const DetailsMovie = props => (
    <DetailsMovieWrapper>
        <Title
            style={{ marginBottom: '30px' }}
            large
            normalFont
            color="white"
        >
            I Dream in Another Language
        </Title>
        <Grid container>
            <Grid item sm={6}>
                <MovieCover src={cover} alt="" />
            </Grid>
            <Grid item sm={6}>
                <Wrapper>
                    <Rating number="8.2" />
                    <Badge />
                </Wrapper>
                <Wrapper>
                    <p>Genre: </p>
                    <Menu />
                </Wrapper>
                <Paragraph medium>Release year: 2017</Paragraph>
                <Paragraph medium>Running time: 120 min</Paragraph>
                <Wrapper>
                    <p>Country: </p>
                    <Menu />
                </Wrapper>
                <Paragraph medium style={{ marginTop: '15px' }}>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. readable content of a page when looking at its
                    layout.
                </Paragraph>
            </Grid>
        </Grid>
    </DetailsMovieWrapper>
);

export default DetailsMovie;
