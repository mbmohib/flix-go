import styled, { css } from 'styled-components';

const oneLine = `
    display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`;

const Title = styled.h1`
    font-family: ${props =>
        props.normalFont ? props.theme.normalFont : props.theme.titleFont};
    font-size: ${props =>
        props.small ? '1.3rem' : props.medium ? '1.5rem' : '2rem'};
    font-weight: ${props =>
        props.highWeight ? props.theme.highWeight : props.theme.lightWeight};
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
            : props.theme.fontColor};
    text-transform: ${props =>
        props.transform === 'uppercase'
            ? 'uppercase'
            : props.lowercase === 'lowercase'
            ? 'lowercase'
            : 'capitalize'};
    word-spacing: ${props =>
        props.small ? '0' : props.medium ? '1px' : '3px'};
    letter-spacing: ${props =>
        props.small ? '0' : props.medium ? '1px' : '2px'};
    line-height: 1.2;
    ${props =>
        props.oneLine
            ? css`
                  ${oneLine}
              `
            : ''}
`;

export default Title;
