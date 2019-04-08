import React from 'react';
import Star from '@material-ui/icons/Star'
import styled from 'styled-components';
import { withStyles } from '@material-ui/core';

const RatingWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 3px;

    p {
        margin-left: 10px;
        color: #ffffff;
        margin: 0;
    }
`;

const StarIcon = withStyles({
    root: {
        width: '20px',
        marginRight: '5px'
    }
})(Star)

const Rating = props => (
    <RatingWrapper>
        <StarIcon color="primary"/>
        <p>{props.number}</p>
    </RatingWrapper>
)

export default Rating;