import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import moment from 'moment';
import CalendarToday from '@material-ui/icons/CalendarTodayTwoTone' 

import Ripple from './style/Ripple';
import Title from './style/Title';
import Rating from './Rating';

const MoviePrimaryWrapper = styled(Link)`
    display: block;
`;

const MovieCover = styled.img`
    margin-bottom: ${props => props.theme.smallSpace};
    width: 70%;
    margin-right: auto;
`;

const ExpectedPremiere = styled.p`
    font-size: 1.2rem;
    color: ${props => props.theme.tertiaryColor};
    display: flex;
    align-items: center;

    svg {
        margin-right: 5px;
    }
`;

const MovieGridView = props => (
    <MoviePrimaryWrapper to={`/movie/${props.movie.id}`}>
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
        {
            !props.upcoming &&
            <Rating number={props.movie.vote_average} />
        }
        {
            props.upcoming &&
            <ExpectedPremiere>
                <CalendarToday />
                {moment(props.movie.release_date, "YYYY-MM-DD").fromNow()}
            </ExpectedPremiere>
        }
    </MoviePrimaryWrapper>
);

export default MovieGridView;
