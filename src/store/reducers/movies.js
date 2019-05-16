import * as actionTypes from '../actions/actionTypes';

const initialState = {
    nowPlayingmovies: null,
    highestRatedmovies: null,
    upcomingMovies: null,
    movie: null,
    totalPages: null,
    error: false,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_NOW_PLAYING_MOVIES:
            return {
                ...state,
                nowPlayingmovies: action.movies,
            }
        case actionTypes.SET_HIGHEST_RATED_MOVIES:
            return {
                ...state,
                highestRatedmovies: action.movies,
            }
        case actionTypes.SET_UPCOMING_MOVIES:
            return {
                ...state,
                upcomingMovies: action.movies,
            }
        case actionTypes.SET_MOVIE:
            return {
                ...state,
                movie: action.movie,
            }

        default: {
            return state;
        }
    }
}

export default reducer;