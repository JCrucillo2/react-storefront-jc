import styled from "styled-components";
import { lightColor, themeColor } from "../../styles/theme";

const AppBarContainer = styled.div`
    padding: 1rem;
    background-color: ${lightColor};
`;

const AppBarItems = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const AppBarContent = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    a:first-child {
        color: ${themeColor};
    }
`;

const Email = styled.a``;

const Notifications = styled.a``;

const Settings = styled.a``;

export {
    AppBarContainer,
    AppBarItems,
    AppBarContent,
    Email,
    Notifications,
    Settings,
};
