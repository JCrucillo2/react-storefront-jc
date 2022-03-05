import styled from "styled-components";
import { alternateColor, lightColor, themeColor } from "../../styles/theme";

const AppBarContainer = styled.div`
    padding: 1rem;
    background-color: ${lightColor};
    height: 60px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
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
        color: ${alternateColor};
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
