import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';

import Subtitle from './style/Subtitle';
import Container from './style/Container';

const FooterWrapper = styled.div`
    background: ${props => props.theme.secondaryColor};
    border-top: 2px solid ${props => props.theme.primaryColor};
    padding: 20px 0;
    color:  ${props => props.theme.whiteColor};
`;

const Footer = () => (
    <FooterWrapper>
        <Container>
            <Grid container>
                <Grid item sm={6}>
                    <Subtitle>©2019 Mohib</Subtitle>
                </Grid>
                <Grid item sm={6}>
                    <Subtitle align="right">Designed & Developed by Mohib</Subtitle>
                </Grid>
            </Grid>
        </Container>
    </FooterWrapper>
)

export default Footer;
