import React, { Component } from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Link } from 'react-router-dom';

import axios from '../axios';
import Loader from '../components/style/Loader';
import Container from '../components/style/Container';
import Title from '../components/style/Title';
import GenresHeaderBg from '../images/gridview-bg.jpg';

const GenresHeader = styled.div`
    padding: 60px 0;
    background: url(${GenresHeaderBg}) center center / cover no-repeat;
`;

const Genre = styled.div`
    margin: 50px 0;
    padding: 60px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
        0px 1px 1px 0px rgba(0, 0, 0, 0.14),
        0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    text-align: center;
    background: ${props => props.theme.secondaryColor};
`;

class Genres extends Component {
    state = {
        genres: null,
        loading: true
    };

    componentDidMount() {
        this.getGenres();
    }

    getGenres() {
        axios.get('genre/movie/list').then(res => {
            this.setState({
                genres: res.data.genres,
                loading: false
            });
        });
    }

    render() {
        return (
            <React.Fragment>
                <GenresHeader>
                    <Container>
                        <Title highWeight color="white">
                            All Genres
                        </Title>
                    </Container>
                </GenresHeader>

                <Container>
                    <Grid container spacing={24} style={{ minHeight: '300px' }}>
                        {!this.state.loading ? (
                            this.state.genres.map(genre => (
                                <Grid key={genre.id} item sm={4}>
                                    <Link to={`/archive/${genre.id}`}>
                                        <Genre>
                                            <ButtonBase>
                                                <Title align="center">
                                                    {genre.name}
                                                </Title>
                                            </ButtonBase>
                                        </Genre>
                                    </Link>
                                </Grid>
                            ))
                        ) : (
                            <Loader />
                        )}
                    </Grid>
                </Container>
            </React.Fragment>
        );
    }
}

export default Genres;
