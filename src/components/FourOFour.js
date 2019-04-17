import React from 'react';

import Container from '../components/style/Container';
import Title from '../components/style/Title';
import Wrapper from './style/Wrapper';


const FourOFour = () => (
    <Container>
        <Wrapper style={{ height: '70vh' }} alignItems="center" justifyContent="center">
            <Title>404! Page not Found!</Title>
        </Wrapper>
    </Container>
)

export default FourOFour;