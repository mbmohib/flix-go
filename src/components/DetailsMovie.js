import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import moment from 'moment';
import { Button } from '@material-ui/core';
import LocalMovies from '@material-ui/icons/LocalMovies';
import Home from '@material-ui/icons/Home';

import Title from './style/Title';
import Paragraph from './style/Paragraph';
import Wrapper from './style/Wrapper';
import Menu from './Menu';
import Rating from './Rating';

const DetailsMovieWrapper = styled.div`
    padding: 50px 0;
`;

const MovieCover = styled.img`
    width: 80%;
    margin-bottom: ${props => props.theme.smallSpace};
`;

const MovieActions = styled.div`
    a {
        :first-child {
            margin-right: 10px;
        }
    }
`;

const DetailsMovie = props => (
    <DetailsMovieWrapper>
        <Title style={{ marginBottom: '30px' }} large normalFont color="white">
            {props.movie.title}
        </Title>
        <Grid container>
            <Grid item sm={6}>
                <MovieCover
                    src={`https://image.tmdb.org/t/p/w500${
                        props.movie.poster_path
                    }`}
                    alt=""
                />
            </Grid>
            <Grid item sm={6}>
                <Rating number={props.movie.vote_average} />
                <Wrapper>
                    <p>Genre: </p>
                    <Menu items={props.movie.genres} />
                </Wrapper>
                <Paragraph medium>
                    Release year:{' '}
                    {moment(props.movie.release_date).format('MMMM DD, YYYY')}
                </Paragraph>
                <Paragraph medium>
                    Running time: {props.movie.runtime}
                </Paragraph>
                <Paragraph medium>Status: {props.movie.status}</Paragraph>
                <Wrapper>
                    <p>Country: </p>
                    <Menu items={props.movie.production_countries} />
                </Wrapper>
                <Wrapper>
                    <p>Languages: </p>
                    <Menu items={props.movie.spoken_languages} />
                </Wrapper>
                <Paragraph medium style={{ marginTop: '15px' }}>
                    {props.movie.overview}
                </Paragraph>
            </Grid>
        </Grid>

        <MovieActions>
            <Button
                target="_blank"
                disabled={!props.movie.imdb_id}
                variant="outlined"
                color="primary"
                href={'https://www.imdb.com/title/' + props.movie.imdb_id}
            >
                <LocalMovies />
                Imdb
            </Button>
            <Button
                target="_blank"
                disabled={!props.movie.homepage}
                variant="outlined"
                color="primary"
                href={props.movie.homepage}
            >
                <Home />
                Homepage
            </Button>
        </MovieActions>
    </DetailsMovieWrapper>
);

export default DetailsMovie;
