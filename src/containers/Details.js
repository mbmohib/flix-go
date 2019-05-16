import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import HeroDetails from '../components/HeroDetails';
import RelatedMovies from './RelatedMovies';
import Loader from '../components/style/Loader';
import withErrorHandler from '../hoc/withErrorHandler';
import * as actions from '../store/actions/index';


const PreLoader = styled.div`
    height: 300px;
`;

class Details extends Component {

    componentDidMount() {
        this.props.onFetchMovie(this.props.match.params.id)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.props.onFetchMovie(this.props.match.params.id);
        }

        if(prevProps.movie !== this.props.movie) {
            window.scrollTo(0, 0);
        }
    }

    render() {
        return (
            <React.Fragment>
                {!this.props.movie ? (
                    <PreLoader>
                        <Loader />
                    </PreLoader>
                ) : (
                    <HeroDetails movie={this.props.movie} />
                )}
                {this.props.movie && (
                    <RelatedMovies movieId={this.props.match.params.id} />
                )}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        movie: state.movie
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchMovie: (id) => dispatch(actions.fetchMovie(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Details));
