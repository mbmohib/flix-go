import styled from 'styled-components';

const SubTitle = styled.h2`
    font-family: ${props => props.theme.normalFont};
    font-size: ${props => props.small ? '0.8rem' : props.medium ? '1rem' : '1.1rem'};
    font-weight: ${props => props.theme.lightWeight};
    text-align: ${props =>
        props.align === 'center'
            ? 'center'
            : props.align === 'right'
            ? 'right'
            : 'left'};
    color: ${props =>
        props.color === 'white'
            ? '#ffffff'
            : props.color
            ? props.color
            : '#ccc'};
    line-height: 1.2;
    word-spacing: 3px;
`;

export default SubTitle;