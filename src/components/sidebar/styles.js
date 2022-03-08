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

const SidebarItems = styled.ul`
    padding: 1rem;
`;

const SidebarItem = styled.li`
    text-transform: uppercase;
    margin-bottom: 12px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    a {
        font-size: 0.875rem;
        color: ${lightColor};
        transition: 0.2s;
        padding: 1rem;
        display: block;
        &:hover {
            background-color: rgba(255, 255, 255, 0.3);
            border-radius: 5px;
            text-decoration: none;
        }
    }
    span {
        margin-left: 1rem;
    }
`;

export { SidebarContainer, Logo, SidebarItems, SidebarItem };
