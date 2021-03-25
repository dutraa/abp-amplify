import styled from "styled-components";

import Search from "./Search";
import Title from "./Title";

const MyDiv = styled.div`
    text-align: center;
`;

export default function Body(props) {
    return(
        <MyDiv>
            <Title />
            <Search />
        </MyDiv>
    )
}