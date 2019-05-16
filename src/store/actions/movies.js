import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const setNowPlayingMovies = movies => {
    return {
        type: actionTypes.SET_NOW_PLAYING_MOVIES,
        movies: movies
    };
};

export const fetchNowPlayingMovies = () => {
    return dispatch => {
        axios
            .get(`/movie/now_playing?language=en-US&sort_by=revenue.desc`)
            .then(res => {
                dispatch(setNowPlayingMovies(res.data.results));
            })
            .catch(err => {});
    };
};

export const setHighestRatedMovies = movies => {
    return {
        type: actionTypes.SET_HIGHEST_RATED_MOVIES,
        movies: movies
    };
};

export const fetchHighestRatedMovies = (year, sortValue) => {
    return dispatch => {
        axios
            .get(`/discover/movie?year=${year}&sort_by=${sortValue}`)
            .then(res => {
                dispatch(setHighestRatedMovies(res.data.results));
            })
            .catch(err => {});
    };
};

export const setUpcomingMovies = movies => {
    return {
        type: actionTypes.SET_UPCOMING_MOVIES,
        movies: movies
    };
};

export const fetchUpcomingMovies = () => {
    return dispatch => {
        axios
            .get(`movie/upcoming?language=en-US&page=1`)
            .then(res => {
                dispatch(setUpcomingMovies(res.data.results));
            })
            .catch(err => {});
    };
};

export const setRelatedMovies = (movies, totalPages, emptyArray) => {
    return {
        type: actionTypes.SET_RELATED_MOVIES,
        movies: movies,
        totalPages: totalPages,
        emptyArray: emptyArray
    };
};

export const fetchRelatedMovies = (movieId, sortValue, currentPage, emptyArray = false) => {
    return dispatch => {
        axios
            .get(`movie/${movieId}/similar?sort_by=${sortValue}&page=${currentPage}`)
            .then(res => {
                dispatch(
                    setRelatedMovies(res.data.results, res.data.total_results, emptyArray)
                );
            })
            .catch(err => {});
    };
};

export const setArchiveMovies = (movies, totalPages, emptyArray) => {
    return {
        type: actionTypes.SET_ARCHIVE_MOVIES,
        movies: movies,
        totalPages: totalPages,
        emptyArray: emptyArray
    };
};

export const fetchArchiveMovies = (filterData, sortValue, currentPage, emptyArray = false) => {
    return dispatch => {
        axios
            .get(
                `/discover/movie?${filterData.join(
                    '&'
                )}&sort_by=${sortValue}&page=${currentPage}`
            )
            .then(res => {
                dispatch(
                    setArchiveMovies(res.data.results, res.data.total_results, emptyArray)
                );
            })
            .catch(err => {});
    };
};

export const setMovie = movie => {
    return {
        type: actionTypes.SET_MOVIE,
        movie: movie
    };
};

export const fetchMovie = movieId => {
    return dispatch => {
        axios
            .get(`/movie/${movieId}`)
            .then(res => {
                dispatch(setMovie(res.data));
            })
            .catch(err => {});
    };
};
