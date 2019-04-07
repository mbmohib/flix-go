import styled from 'styled-components';

const SubTitle = styled.h2`
    font-family: ${props => props.theme.normalFont};
    font-size: ${props => props.size || '1.3rem'};
    font-weight: ${props => props.theme.lightWeight};
    text-align: ${props => props.center ? 'center' : 'left'};
    line-height: 1.2;
    word-spacing: 3px;
`;

export default SubTitle;