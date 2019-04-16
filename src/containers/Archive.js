import React, { Component } from 'react';
import styled from 'styled-components';

import axios from '../axios';
import Loader from '../components/style/Loader';
import Container from '../components/style/Container';
import Title from '../components/style/Title';
import ArchiveHeaderBg from '../images/gridview-bg.jpg';
import ListView from '../components/ListView';
import SectionHeader from '../components/SectionHeader';
import withErrorHandler from '../hoc/withErrorHandler';

const ArchiveHeader = styled.div`
    padding: 60px 0;
    background: url(${ArchiveHeaderBg}) center center / cover no-repeat;
`;

const PreLoader = styled.div`
    height: 400px;
`;

class Archive extends Component {
    state = {
        movies: [],
        filterData: null,
        totolPages: null,
        currentPage: 0,
        sortValue: '',
        loading: true
    };

    componentDidMount() {
        console.log('Archive: ComponentDidMount');
        // window.addEventListener('scroll', this.listenToScroll);
        this.getQueries();
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Archive: ComponentDidUpdate');
        if (
            prevState.filterData !== this.state.filterData ||
            prevState.sortValue !== this.state.sortValue
        ) {
            this.setState({ movies: [], loading: true, currentPage: 0 }, () => {
                this.getMovies();
            })
        }

        if(prevState.currentPage !== this.state.currentPage) {
            this.getMovies();
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll);
    }

    listenToScroll = () => {
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;

        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const scrolled = winScroll / height;

        if(scrolled > 0.8) {
            // console.log('Archive: Scroll Event Detached');
            window.removeEventListener('scroll', this.listenToScroll);
            if(this.state.currentPage < this.state.totolPages) {
                this.setState((prevState) => {
                    return {
                        currentPage: prevState.currentPage + 1
                    }
                });
            }
        }
    };

    getQueries() {
        const query = new URLSearchParams(this.props.location.search);
        const filterData = [];

        for (let param of query.entries()) {
            filterData.push(param[0] + '=' + param[1]);
        }

        this.setState({ filterData });
    }

    getMovies() {
        axios
            .get(
                `/discover/movie?${this.state.filterData.join('&')}&sort_by=${
                    this.state.sortValue
                }${this.state.currentPage > 0 &&
                    `&page=${this.state.currentPage}`}`
            )
            .then(res => {
                const movies = [...this.state.movies, ...res.data.results]
                this.setState({
                    movies: movies,
                    totolPages: res.data.total_pages,
                    loading: false
                });

                // console.log('Archive: Scroll Event Attached');
                window.addEventListener('scroll', this.listenToScroll);
            })
            .catch(error => {});
    }

    handleSortChange = event => {
        if (event.target.value !== this.state.sortValue) {
            this.setState({ sortValue: event.target.value, loading: true });
        }
    };

    submitDialog = data => {
        const queryParams = [];
        for (let i in data) {
            queryParams.push(
                encodeURIComponent(i) + '=' + encodeURIComponent(data[i])
            );
        }
        this.props.history.replace({
            pathname: '/archive',
            search: '?' + queryParams.join('&')
        });

        this.setState({ filterData: queryParams, loading: true });
    };

    render() {
        return (
            <React.Fragment>
                <ArchiveHeader>
                    <Container>
                        <Title highWeight color="white">
                            Archive
                        </Title>
                    </Container>
                </ArchiveHeader>

                <SectionHeader
                    title=""
                    sortValue={this.state.sortValue}
                    handleSortChange={this.handleSortChange}
                    submitDialog={this.submitDialog}
                />
                {this.state.loading ? (
                    <PreLoader>
                        <Loader />
                    </PreLoader>
                ) : (
                    <ListView movies={this.state.movies} />
                )}
            </React.Fragment>
        );
    }
}

export default withErrorHandler(Archive);
