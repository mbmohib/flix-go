import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Ripple from './style/Ripple';
import Title from './style/Title';
import Menu from './Menu';
import Rating from './Rating';

const MoviePrimaryWrapper = styled(Link)`
    display: block;
`;

const MovieCover = styled.img`
    margin-bottom: ${props => props.theme.smallSpace};
    width: 70%;
    margin-right: auto;
`;

const MovieGridView = props => (
    <MoviePrimaryWrapper to={`/${props.movie.id}`}>
        <Ripple>
            <MovieCover src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`} alt="" />
        </Ripple>
        <Title 
            style={{ width: '80%' }}
            color="#ffffff" 
            small 
            normalFont 
            oneLine
        >
            {props.movie.title}
        </Title>
        <Menu />
        <Rating number={props.movie.vote_average} />
    </MoviePrimaryWrapper>
);

export default MovieGridView;
