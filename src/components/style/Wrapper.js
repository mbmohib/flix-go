import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    align-items: ${props => props.alignItems ? props.alignItems : '' };
    justify-content: ${props => props.justifyContent ? props.justifyContent : '' };
    margin-bottom: 5px;

    p {
        font-size: 1.1rem;
        margin-right: 5px;
        color: ${props => props.theme.fontColor};
    }
`;

export default Wrapper;