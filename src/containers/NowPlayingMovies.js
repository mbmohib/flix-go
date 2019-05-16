import React, { Component } from 'react';
import styled from 'styled-components';
import Carousel from 'nuka-carousel';
import ArrowForward from '@material-ui/icons/ArrowForward';
import ArrowBack from '@material-ui/icons/ArrowBack';
import ButtonBase from '@material-ui/core/ButtonBase';
import { connect } from 'react-redux';

import Title from '../components/style/Title';
import Container from '../components/style/Container';
import MovieGridView from '../components/MovieGridView';
import Loader from '../components/style/Loader';
import NowPlayingMoviesBg from '../images/hero-bg.jpg';
import withErrorHandler from '../hoc/withErrorHandler';
import * as actions from '../store/actions/index';

const NowPlayingMoviesWrapper = styled.div`
    padding: 70px 0 40px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
        url(${NowPlayingMoviesBg});
    background-position: center center;
    background-size: cover;
`;

const NowPlayingMoviesContainer = styled.div`
    padding: 50px 0;
`;

const NowPlayingMoviesHeader = styled.div`
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

class NowPlayingMovies extends Component {
    state = {
        slidesToShow: 4,
        totalResult: 0,
        slideIndex: 0,
    };

    componentDidMount() {
        this.props.onFetchMovies();
    }

    componentDidUpdate() {
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 0);
    }

    /**
     * Chnage Slide index value on clicking
     * next arrow button
     *
     * @memberof NowPlayingMovies
     */
    handleNextSlide = () => {
        if (
            this.state.slideIndex <
            this.props.movies.length - this.state.slidesToShow
        ) {
            this.setState(prevState => {
                return {
                    slideIndex: prevState.slideIndex + this.state.slidesToShow
                };
            });
        }
    };

    /**
     * Chnage Slide index value on clicking
     * prev arrow button
     *
     * @memberof NowPlayingMovies
     */
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
            <NowPlayingMoviesWrapper>
                <Container>
                    <NowPlayingMoviesHeader>
                        <Title transform="uppercase" color="#ffffff" highWeight>
                            now playing
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
                    </NowPlayingMoviesHeader>

                    <NowPlayingMoviesContainer>
                        {!this.props.movies ? (
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
                                {this.props.movies.length > 0 &&
                                    this.props.movies.map(movie => (
                                        <MovieGridView
                                            key={movie.id}
                                            movie={movie}
                                        />
                                    ))}
                            </Carousel>
                        )}
                    </NowPlayingMoviesContainer>
                </Container>
            </NowPlayingMoviesWrapper>
        );
    }
}

const mapStateToProps = state => {
    return {
        movies: state.nowPlayingmovies,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchMovies: () => dispatch(actions.fetchNowPlayingMovies()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(NowPlayingMovies));
