import React from 'react';
import styled from 'styled-components';
import { BallTriangle } from 'svg-loaders-react';

const LoaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

const Loader = () => (
    <LoaderWrapper>
        <BallTriangle />
    </LoaderWrapper>
)

export default Loader;