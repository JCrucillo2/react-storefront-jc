import styled from "styled-components";
import { alternateColor, lightColor, themeColor } from "../../styles/theme";

const AppBarContainer = styled.div`
    background-color: ${lightColor};
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;

const AppBarItems = styled.div`
    display: flex;
    justify-content: space-between;
`;

const AppBarGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    margin-right: 1.5rem;
    a:first-child {
        color: ${alternateColor};
    }
`;

const Logo = styled.h1`
    background-color: ${themeColor};
    padding: 1rem;
    width: 289px;
    text-align: center;
    font-size: 1.525rem;
    font-family: "Leckerli One", cursive;
    color: ${lightColor};
`;

const Email = styled.a``;

const Notifications = styled.a``;

const Settings = styled.a``;

export {
    AppBarContainer,
    AppBarItems,
    AppBarGroup,
    Email,
    Notifications,
    Settings,
    Logo,
};
