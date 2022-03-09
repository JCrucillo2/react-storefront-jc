import styled from "styled-components";
import { themeColor, lightColor, darkColor } from "styles/theme";

const SidebarContainer = styled.div`
    width: 289px;
    background-color: ${themeColor};
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
            color: ${darkColor};
        }
    }
    span {
        margin-left: 1rem;
    }
`;

export { SidebarContainer, SidebarItems, SidebarItem };
