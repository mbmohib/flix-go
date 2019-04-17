import React from 'react';
import SearchFormIcon from '@material-ui/icons/Search';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core';

const SearchFormWrapper = styled.div`
    position: relative;
    margin-left: 0;
    width: 100%;
    margin-right: 5%;
`;

const SearchFormImage = withStyles({
    root: {
        color: '#fff',
        width: '25px',
        height: '100%',
        left: '8px',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
})(SearchFormIcon)

const SearchFormInput = styled.input`
    background-color: #4d4d4d;
    padding: 10px;
    border-radius: 5px;
    padding-left: 45px;
    border: none;
    width: 100%;
    font-size: 1.3rem;
    color: ${props => props.theme.whiteColor};
    font-weight: ${props => props.theme.mediumWeight};
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    
    :focus {
        outline: none;
        background-color: #4d4d4d80;
    }
`;

const SearchForm = props => (
    <SearchFormWrapper>
        <SearchFormImage />
        <SearchFormInput
            placeholder="SearchForm…"
        />
    </SearchFormWrapper>
);

export default SearchForm;
