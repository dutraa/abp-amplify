import styled from "styled-components";


export default styled.button`
    width: 50px; // 10%
    height: 50px;
    margin: 10px 25px;

    text-align: center;
    font-size: 2em;

    border: none;
    border-radius: 5px;
    background-color: ${props => props.theme.primary};

    :hover {
        background-color: ${props => props.theme.secondary};
        color: white;
    }
`;