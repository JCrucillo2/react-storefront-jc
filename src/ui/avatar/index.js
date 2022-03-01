import styled from "styled-components";
import { lightColor } from "../../styles/theme";

const Avatar = styled.a`
    background-color: lightblue;
    color: ${lightColor};
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 50%;
    display: block;
    &:hover {
        color: ${lightColor};
        text-decoration: none;
    }
`;

export { Avatar };
