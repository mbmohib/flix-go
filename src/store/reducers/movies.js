import * as actionTypes from '../actions/actionTypes';
import { getUnique } from '../../utility';

const initialState = {
    nowPlayingmovies: null,
    highestRatedmovies: null,
    upcomingMovies: null,
    relatedMovies: [],
    relatedMoviesTotalPages: null,
    archiveMovies: [],
    archiveMoviesTotalPages: null,
    movie: null,
    error: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_NOW_PLAYING_MOVIES:
            return {
                ...state,
                nowPlayingmovies: action.movies
            };
        case actionTypes.SET_HIGHEST_RATED_MOVIES:
            return {
                ...state,
                highestRatedmovies: action.movies
            };
        case actionTypes.SET_UPCOMING_MOVIES:
            return {
                ...state,
                upcomingMovies: action.movies
            };
        case actionTypes.SET_RELATED_MOVIES:
            // console.log(action.emptyArray);
            if(action.emptyArray) {
                console.log(action.emptyArray);
                // let removeRelatedMovies = [...state.RelatedMovies];
                // const updatedRelatedMovies = action.movies;
                // const updatedRelatedMovies = removeRelatedMovies.concat(action.movies);
                console.log('action.emptyArray');
                return {
                    ...state,
                    relatedMovies: [],
                    relatedMoviesTotalPages: action.totalPages
                };
            } else {
                // Concact with relatedMovies
                const relatedMovies = state.relatedMovies.concat(action.movies);
                // Remove duplicate movie
                const relatedUniqueMovies = getUnique(relatedMovies, 'id');
                return {
                    ...state,
                    relatedMovies: relatedUniqueMovies,
                    relatedMoviesTotalPages: action.totalPages
                };
            }
        case actionTypes.SET_ARCHIVE_MOVIES:
            if(action.emptyArray) {
                let removeArchiveMovies = [...state.archiveMovies];
                removeArchiveMovies = [];
                const updatedArchiveMovies = removeArchiveMovies.concat(action.movies)
                return {
                    ...state,
                    archiveMovies: updatedArchiveMovies,
                    archiveMoviesTotalPages: action.totalPages
                };
            }
            else {
                // Concact with relatedMovies
                const archiveMovies = state.archiveMovies.concat(action.movies);
                // Remove duplicate movie
                const archiveUniqueMovies = getUnique(archiveMovies, 'id');

                return {
                    ...state,
                    archiveMovies: archiveUniqueMovies,
                    archiveMoviesTotalPages: action.totalPages
                };
            }

            
        case actionTypes.SET_MOVIE:
            return {
                ...state,
                movie: action.movie
            };

        default: {
            return state;
        }
    }
};

export default reducer;
