import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Ripple from './style/Ripple';
import cover from '../images/cover.jpg';
import Title from './style/Title';
import GridList from './GridList';
import Rating from './Rating';

const MoviePrimaryWrapper = styled(Link)`
    /* padding: 0 50px; */
    display: block;
`;

const MovieCover = styled.img`
    margin-bottom: ${props => props.theme.smallSpace};
    width: 70%;
    margin-right: auto;
`;

const MovieGridView = props => (
    <MoviePrimaryWrapper to="/12">
        <Ripple>
            <MovieCover src={cover} alt="" />
        </Ripple>
        <Title 
            style={{ width: '80%' }}
            color="#ffffff" 
            small 
            normalFont 
            oneLine
        >
            {props.title}
        </Title>
        <GridList />
        <Rating number="7.2" />
    </MoviePrimaryWrapper>
);

export default MovieGridView;
