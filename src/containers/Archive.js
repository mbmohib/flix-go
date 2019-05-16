import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Loader from '../components/style/Loader';
import Container from '../components/style/Container';
import Title from '../components/style/Title';
import ArchiveHeaderBg from '../images/gridview-bg.jpg';
import ListView from '../components/ListView';
import SectionHeader from '../components/SectionHeader';
import withErrorHandler from '../hoc/withErrorHandler';
import withInfiniteLoading from '../hoc/withInfiniteLoading';
import * as actions from '../store/actions/index';

const ArchiveHeader = styled.div`
    padding: 60px 0;
    background: url(${ArchiveHeaderBg}) center center / cover no-repeat;
`;

const PreLoader = styled.div`
    height: 400px;
`;

class Archive extends Component {
    state = {
        filterData: null,
        sortValue: '',
    };

    componentDidMount() {
        this.getQueries();
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.location.search !== this.props.location.search) {
            this.getQueries();
        }
        if (
            prevState.filterData !== this.state.filterData ||
            prevState.sortValue !== this.state.sortValue
        ) {
            this.props.onFetchMovies(
                this.state.filterData,
                this.state.sortValue,
                this.props.currentPage,
                true
            );
        }

        // Get next page's data on pagination
        if (
            prevProps.currentPage !== this.props.currentPage &&
            this.props.currentPage < this.props.totolPages
        ) {
            this.props.onFetchMovies(
                this.state.filterData,
                this.state.sortValue,
                this.props.currentPage
            );
        }
    }

    /**
     * Set filter data from query params
     *
     * @memberof Archive
     */
    getQueries() {
        const query = new URLSearchParams(this.props.location.search);
        const filterData = [];

        for (let param of query.entries()) {
            filterData.push(param[0] + '=' + param[1]);
        }

        this.setState({ filterData });
    }
    

    /**
     * Set sort value
     *
     * @memberof Archive
     */
    handleSortChange = event => {
        if (event.target.value !== this.state.sortValue) {
            this.setState({ sortValue: event.target.value, loading: true });
        }
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
                />
                {this.props.movies.length <= 0 ? (
                    <PreLoader>
                        <Loader />
                    </PreLoader>
                ) : (
                    <ListView movies={this.props.movies} />
                )}
            </React.Fragment>
        );
    }
}


const mapStateToProps = state => {
    return {
        movies: state.archiveMovies,
        totolPages: state.archiveMoviesTotalPages
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchMovies: (filterData, sortValue, currentPage, emptyArray) =>
            dispatch(actions.fetchArchiveMovies(filterData, sortValue, currentPage, emptyArray))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withErrorHandler(withInfiniteLoading(Archive)));

