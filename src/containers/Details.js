import React, { Component } from 'react';
import styled from 'styled-components';

import axios from '../axios';
import HeroDetails from '../components/HeroDetails';
import ReletedMovies from '../components/ReletedMovies';
import Loader from '../components/style/Loader';

const PreLoader = styled.div`
    height: 300px;
`;

class Details extends Component {
    state = {
        movie: null
    }

    componentDidMount() {
        console.log('Details: ComponentDidMount')
        axios
        .get(
            `/movie/${this.props.match.params.id}`
        )
        .then(res => {
            this.setState({
                movie: res.data,
            });
        });
    }

    componentDidUpdate() {
        console.log('Details: ComponentDidUpdate')
    }

    render() {
        return (
            <React.Fragment>
                {
                    !this.state.movie ? 
                    <PreLoader>
                        <Loader /> 
                    </PreLoader> :
                    <HeroDetails movie={this.state.movie} />
                }
                <ReletedMovies />
            </React.Fragment>
        )
    }
}

export default Details;