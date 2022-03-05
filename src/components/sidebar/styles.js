import styled from "styled-components";
import { themeColor, lightColor } from "../../styles/theme";

const SidebarContainer = styled.div`
    width: 260px;
    background-color: ${themeColor};
    height: 100vh;
`;

const Logo = styled.h1`
    padding: 1rem;
    font-size: 1.525rem;
    height: 60px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    font-family: "Leckerli One", cursive;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${lightColor};
`;

export { SidebarContainer, Logo };
