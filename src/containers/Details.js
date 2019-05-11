import React, { Component } from 'react';
import styled from 'styled-components';

import axios from '../axios';
import HeroDetails from '../components/HeroDetails';
import RelatedMovies from './RelatedMovies';
import Loader from '../components/style/Loader';
import withErrorHandler from '../hoc/withErrorHandler';

const PreLoader = styled.div`
    height: 300px;
`;

class Details extends Component {
    state = {
        movie: null,
        loading: true
    };

    componentDidMount() {
        // console.log('Details: ComponentDidMount');
        this.getMovie();
    }

    componentDidUpdate(prevProps) {
        // console.log('Details: ComponentDidUpdate');
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.setState({ loading: true })
            this.getMovie();
        }
    }

    /**
     * Get Movies
     *
     * @memberof Details
     */
    getMovie() {
        axios.get(`/movie/${this.props.match.params.id}`).then(res => {
            this.setState({
                movie: res.data,
                loading: false
            });

            window.scrollTo(0, 0)
        });
    }

    render() {
        return (
            <React.Fragment>
                {!this.state.movie ? (
                    <PreLoader>
                        <Loader />
                    </PreLoader>
                ) : (
                    <HeroDetails movie={this.state.movie} />
                )}
                {this.state.movie && (
                    <RelatedMovies movieId={this.props.match.params.id} />
                )}
            </React.Fragment>
        );
    }
}

export default withErrorHandler(Details);
