import React, { Component } from 'react';
import styled from 'styled-components';
import Carousel from 'nuka-carousel';
import ArrowForward from '@material-ui/icons/ArrowForward';
import ArrowBack from '@material-ui/icons/ArrowBack';
import ButtonBase from '@material-ui/core/ButtonBase';
import moment from 'moment';

import axios from '../axios';
import Title from '../components/style/Title';
import Container from '../components/style/Container';
import MovieGridView from '../components/MovieGridView';
import Loader from '../components/style/Loader';
import heroBg from '../images/hero-bg.jpg';
import withErrorHandler from '../hoc/withErrorHandler';

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

const ArrowButton = styled(ButtonBase)`
    svg {
        color: #ffffff;
    }

    :first-child {
        margin-right: 10px;
    }

    :disabled {
        svg {
            color: #ffffff30;
        }
    }
`;

class Hero extends Component {
    state = {
        slidesToShow: 4,
        totalResult: 0,
        slideIndex: 0,
        loading: true,
        movies: []
    };

    componentDidMount() {
        console.log('Hero: ComponentDidMount');
        this.getMovies();
    }

    componentDidUpdate() {
        console.log('Hero: ComponentDidUpdate');
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 0);
    }

    getMovies() {
        const today = moment().format('YYYY-MM-DD');
        const lastDate = moment().subtract(60, 'days').format('YYYY-MM-DD');

        axios
            .get(
                `/discover/movie?primary_release_date.gte=${lastDate}&primary_release_date.lte=${today}&sort_by=revenue.desc`
            )
            .then(res => {
                this.setState({
                    movies: res.data.results,
                    totalResult: res.data.results.length,
                    loading: false
                });
            })
            .catch(err => {})
    }

    handleNextSlide = () => {
        if (
            this.state.slideIndex <
            this.state.totalResult - this.state.slidesToShow
        ) {
            this.setState(prevState => {
                return {
                    slideIndex: prevState.slideIndex + this.state.slidesToShow
                };
            });
        }
    };

    handlePrevSlide = () => {
        if (this.state.slideIndex > 0) {
            this.setState(prevState => {
                return {
                    slideIndex: prevState.slideIndex - this.state.slidesToShow
                };
            });
        }
    };

    render() {
        return (
            <HeroWrapper>
                <Container>
                    <HeroHeader>
                        <Title transform="uppercase" color="#ffffff" highWeight>
                            new grossing movies of this season
                        </Title>
                        <CarouselControls>
                            <ArrowButton
                                onClick={this.handlePrevSlide}
                                disabled={this.state.slideIndex === 0}
                            >
                                <ArrowBack />
                            </ArrowButton>
                            <ArrowButton
                                onClick={this.handleNextSlide}
                                disabled={
                                    this.state.slideIndex ===
                                    this.state.totalResult -
                                        this.state.slidesToShow
                                }
                            >
                                <ArrowForward />
                            </ArrowButton>
                        </CarouselControls>
                    </HeroHeader>

                    <HeroContainer>
                        {this.state.loading ? (
                            <Loader />
                        ) : (
                            <Carousel
                                slidesToShow={this.state.slidesToShow}
                                withoutControls
                                slideIndex={this.state.slideIndex}
                                afterSlide={slideIndex =>
                                    this.setState({ slideIndex })
                                }
                            >
                                {this.state.movies.length > 0 &&
                                    this.state.movies.map(movie => (
                                        <MovieGridView
                                            key={movie.id}
                                            movie={movie}
                                        />
                                    ))}
                            </Carousel>
                        )}
                    </HeroContainer>
                </Container>
            </HeroWrapper>
        );
    }
}

export default withErrorHandler(Hero);
