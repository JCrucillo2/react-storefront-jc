import styled from "styled-components";
import { themeColor } from "../../styles/theme";

const Button = styled.button`
    display: block;
    width: 100%;
    background-color: ${themeColor};
    color: white;
    font-weight: 700;
    border: none;
    padding: 1rem;
    border-radius: 8px;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    transition: all 0.2s ease;
    &:hover {
        background: #2c4893;
        cursor: pointer;
    }
`;

export { Button };
