import React, { Component } from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import axios from '../axios';
import FormFilter from './FormFilter';
import Title from './style/Title';
import Container from './style/Container';
import Wrapper from './style/Wrapper';

const SectionHeaderWrapper = styled.div`
    padding: 30px;
    box-shadow: ${props => props.theme.largeShadow};
    background: ${props => props.theme.secondaryColor};
    border-top: 2px solid ${props => props.theme.primaryColor};

    h1 {
        margin-bottom: 0;
    }
`;

class SectionHeader extends Component {
    state = {
        dialog: false,
        genre: '',
        genres: null,
        year: '',
        years: [],
        language: '',
        languages: [
            {
                id: 'en',
                name: 'English'
            },
            {
                id: 'bn',
                name: 'Bangla'
            },
            {
                id: 'hi',
                name: 'Hindi'
            }
        ],
        sortValues: [
            {
                id: 'vote_average.desc',
                name: 'Rating'
            },
            {
                id: 'revenue.desc',
                name: 'Grossing'
            }
        ]
    };

    componentDidMount() {
        const createYearsObj = [];
        const createYears = Array.from(new Array(30));
        let currentyear = 2019;
        for (let i =0; i<createYears.length; i++) {
            createYearsObj.push({
                id: currentyear,
                name: currentyear
            })
            currentyear --;
        }
        this.setState({ years: createYearsObj })
        this.getGenres();
    }

    getGenres() {
        axios.get('genre/movie/list').then(res => {
            this.setState({
                genres: res.data.genres
            });
        });
    }

    handleDialog = () => {
        this.setState(prevState => {
            return {
                dialog: !prevState.dialog
            };
        });
    };

    handleYearChange = event => {
        if (event.target.value !== this.state.year) {
            this.setState({ year: event.target.value });
        }
    };

    handleGenreChange = event => {
        if (event.target.value !== this.state.genre) {
            this.setState({ genre: event.target.value });
        }
    };

    handleLanguageChange = event => {
        if (event.target.value !== this.state.language) {
            this.setState({ language: event.target.value });
        }
    };

    submitDialog = () => {
        this.props.submitDialog({
            with_genres: this.state.genre,
            year: this.state.year,
            with_original_language: this.state.language
        });
        this.handleDialog();
    };

    render() {
        return (
            <SectionHeaderWrapper>
                <Container>
                    <Grid container alignItems="center">
                        <Grid item sm={7}>
                            <Title color="#ffffff" highWeight>
                                {this.props.title}
                            </Title>
                        </Grid>
                        <Grid item sm={5}>
                            <Wrapper justifyContent="space-around">
                                <FormFilter
                                    white
                                    title="Sort"
                                    item={this.props.sortValue}
                                    items={this.state.sortValues}
                                    handleFilterChange={
                                        this.props.handleSortChange
                                    }
                                />
                                <Button
                                    style={{ padding: '0 60px' }}
                                    variant="contained"
                                    color="primary"
                                    onClick={this.handleDialog}
                                >
                                    Filter
                                </Button>

                            </Wrapper>
                        </Grid>
                    </Grid>

                    <Dialog
                        disableEscapeKeyDown
                        open={this.state.dialog}
                        onClose={this.handleDialog}
                    >
                        <DialogContent>
                            <FormFilter
                                title="Genre"
                                item={this.state.genre}
                                items={this.state.genres}
                                handleFilterChange={this.handleGenreChange}
                            />
                            <FormFilter
                                title="Year"
                                item={this.state.year}
                                items={this.state.years}
                                handleFilterChange={this.handleYearChange}
                            />

                            <FormFilter
                                title="Language"
                                item={this.state.language}
                                items={this.state.languages}
                                handleFilterChange={this.handleLanguageChange}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button
                                variant="outlined"
                                onClick={this.handleDialog}
                                color="primary"
                            >
                                Cancel
                            </Button>
                            <Button
                                variant="contained"
                                onClick={this.submitDialog}
                                color="primary"
                            >
                                Apply Filter
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Container>
            </SectionHeaderWrapper>
        );
    }
}

export default SectionHeader;
