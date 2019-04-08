import React from 'react';
import styled from 'styled-components';

const CategoryWrapper = styled.div`
    display: flex;
`;

const Category = styled.p`
    color: ${props => props.theme.primaryColor} !important;
    margin-right: 5px;

    :first-child {
        :after {
            content: ',';
            display: inline-block;
        }
    }
`;

const Categories = props => (
    <CategoryWrapper>
        <Category>Action</Category>
        <Category>Science</Category>
    </CategoryWrapper>
)

export default Categories;