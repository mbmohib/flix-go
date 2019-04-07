import styled from 'styled-components';

const Title = styled.h1`
    font-family: ${props => props.theme.titleFont};
    font-size: ${props => props.size || '2rem'};
    font-weight: ${props => props.theme.lightWeight};
    text-align: ${props => props.center ? 'center' : 'left'};
    line-height: 1.2;
    word-spacing: 3px;
    letter-spacing: 2px;
`;

export default Title;