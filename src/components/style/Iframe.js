import React from 'react';
import styled from 'styled-components';

const IframeWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    iframe {
        width: 80%;
        height: 300px;
    }
`;

const Iframe = props => (
    <IframeWrapper>
        <iframe src="https://www.youtube.com/embed/9QbltzIUV6w" title="trailer"></iframe> 
    </IframeWrapper>
)

export default Iframe;