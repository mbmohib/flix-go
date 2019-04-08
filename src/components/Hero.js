import React, { Component } from 'react';
import styled from 'styled-components';
import Carousel from 'nuka-carousel';
import ArrowForward from '@material-ui/icons/ArrowForward';
import ArrowBack from '@material-ui/icons/ArrowBack';
import { withStyles } from '@material-ui/core';

import Title from '../components/style/Title';
import Container from '../components/style/Container';
import MovieGridView from './MovieGridView';
import heroBg from '../images/hero-bg.jpg';

const HeroWrapper = styled.div`
    padding: 70px 0 40px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
        url(${heroBg});
    background-position: center center;
    background-size: cover;
`;

const HeroContainer = styled.div`
    padding: 50px 0;
`;

const HeroHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;

const CarouselControls = styled.div`
    margin-right: 50px;
`;

const ArrowBackIcon = withStyles({
    root: {
        color: '#ffffff',
        cursor: 'pointer',
        marginRight: '10px'
    }
})(ArrowBack);

const ArrowForwardIcon = withStyles({
    root: {
        color: '#ffffff',
        cursor: 'pointer'
    }
})(ArrowForward);

class Hero extends Component {
    state = {
        slideIndex: 0
    };


    handleNextSlide = () => {
        if(this.state.slideIndex < 5 - 4) {
            this.setState(prevState => {
                return {
                    slideIndex: prevState.slideIndex + 1
                };
            });
        }
    };

    handlePrevSlide = () => {
        if(this.state.slideIndex > 0) {
            this.setState(prevState => {
                return {
                    slideIndex: prevState.slideIndex - 1
                };
            });
        }
    };

    render() {
        return (
            <HeroWrapper>
                <Container>
                    <HeroHeader>
                        <Title
                            transform="uppercase"
                            color="#ffffff"
                            highWeight
                        >
                            new items of this season
                        </Title>
                        <CarouselControls>
                            <ArrowBackIcon onClick={this.handlePrevSlide} />
                            <ArrowForwardIcon onClick={this.handleNextSlide} />
                        </CarouselControls>
                    </HeroHeader>

                    <HeroContainer>
                        <Carousel
                            slidesToShow={4}
                            withoutControls
                            slideIndex={this.state.slideIndex}
                            afterSlide={slideIndex =>
                                this.setState({ slideIndex })
                            }
                        >
                            <MovieGridView title="I Dream in Another Language" />
                            <MovieGridView title="Benched" />
                            <MovieGridView title="Whitney" />
                            <MovieGridView title="Benched" />
                            <MovieGridView title="Benched" />
                        </Carousel>
                    </HeroContainer>
                </Container>
            </HeroWrapper>
        );
    }
}

export default Hero;
