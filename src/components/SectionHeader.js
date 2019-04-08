import React from 'react';
import styled from 'styled-components';

import Nav from './Nav';
import Title from './style/Title';
import Container from './style/Container';

const SectionHeaderWrapper = styled.div`
    padding-top: 40px;
    padding-bottom: 10px;
    box-shadow: ${props => props.theme.largeShadow};
    background: ${props => props.theme.secondaryColor};
`;

const SectionHeader = props => (
    <SectionHeaderWrapper>
        <Container>
            <Title style={{ marginBottom: '20px' }} color="#ffffff" highWeight>New items</Title>
            <Nav position="center"/>
        </Container>
    </SectionHeaderWrapper>
)

export default SectionHeader;