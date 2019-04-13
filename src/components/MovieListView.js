import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import moment from 'moment';

import Ripple from './style/Ripple';
import Title from './style/Title';
import Paragraph from './style/Paragraph';
import Rating from './Rating';
import defaultCover from '../images/default-cover.jpg';

const MovieListViewWrapper = styled.div``;

const MovieCover = styled.img`
    margin-bottom: ${props => props.theme.smallSpace};
`;

const MovieListView = props => (
    <MovieListViewWrapper>
        <Grid container spacing={24}>
            <Grid item sm={4}>
                <Ripple>
                    <Link to={`/${props.movie.id}`}>
                        {props.movie.poster_path ? (
                            <MovieCover
                                src={`https://image.tmdb.org/t/p/w500${
                                    props.movie.poster_path
                                }`}
                                alt={props.movie.title}
                            />
                        ) : (
                            <MovieCover
                                src={defaultCover}
                                alt={props.movie.title}
                            />
                        )}
                    </Link>
                </Ripple>
            </Grid>
            <Grid item sm={8}>
                <Title small normalFont color="#ffffff">
                    {props.movie.title}
                </Title>
                <Paragraph medium>
                    Release Date:{' '}
                    <span>
                        {moment(props.movie.release_date).format(
                            'MMMM DD, YYYY'
                        )}
                    </span>
                </Paragraph>
                <Rating number={props.movie.vote_average} />
                <Paragraph style={{ marginTop: '10px' }} medium>
                    {props.movie.overview}
                </Paragraph>
            </Grid>
        </Grid>
    </MovieListViewWrapper>
);

export default MovieListView;
