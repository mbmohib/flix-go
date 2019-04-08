import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';

import Ripple from './style/Ripple';
import cover from '../images/cover.jpg';
import Title from './style/Title';
import Paragraph from './style/Paragraph';
import Categories from './Categories';
import Rating from './Rating';

const MovieListViewWrapper = styled.div``;

const MovieCover = styled.img`
    margin-bottom: ${props => props.theme.smallSpace};
`;

const MovieListView = props => (
    <MovieListViewWrapper>
        <Grid container spacing={24}>
            <Grid item sm={4}>
                <Ripple>
                    <Link to="/3">
                        <MovieCover src={cover} alt="" />
                    </Link>
                </Ripple>
            </Grid>
            <Grid item sm={8}>
                <Title small normalFont color="#ffffff">
                    I Dream in Another Language
                </Title>
                <Categories />
                <Rating number="8.2" />
                <Paragraph color="#ffffff70" medium>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. readable content of a page when looking at
                    its layout.
                </Paragraph>
            </Grid>
        </Grid>
    </MovieListViewWrapper>
);

export default MovieListView;
