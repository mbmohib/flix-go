import styled from 'styled-components';

const Paragraph = styled.h2`
    font-family: ${props =>
        props.titleFont ? props.theme.titleFont : props.theme.normalFont};
    font-size: ${props => props.small ? '0.9rem' : props.medium ? '1.1rem' : '1.3rem'};
    font-weight: ${props =>
        props.lightWeight ? props.theme.highWeight : props.theme.normalWeight};
    text-align: ${props => props.center ? 'center' : props.justify ? 'justify' : 'left'};
    color: ${props => (props.color ? props.color : props.theme.fontColor)};
    line-height: 1.2;
    word-spacing: 2px;
    margin: 10px 0;
`;

export default Paragraph;