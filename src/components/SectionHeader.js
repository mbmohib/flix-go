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
    border-top: 2px solid ${props => props.theme.primaryColor};
`;

const SectionHeader = props => (
    <SectionHeaderWrapper>
        <Container>
            <Title style={{ marginBottom: '20px' }} color="#ffffff" highWeight>
                {props.title}
            </Title>
            <Nav position="center" navItems={props.navItems} />
        </Container>
    </SectionHeaderWrapper>
);

export default SectionHeader;
