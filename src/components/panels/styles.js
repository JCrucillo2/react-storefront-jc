import styled from "styled-components";
import { lightColor, themeColor } from "styles/theme";

const PanelStyles = styled.section`
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.3);
    background-color: ${lightColor};
    border-radius: 5px;
    flex: 1;
    margin: 1.5rem;
`;

const PanelHeader = styled.header`
    h2 {
        background-color: ${lightColor};
        padding: 0.5rem;
        border-radius: 5px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        color: ${themeColor};
    }
`;

const PanelBody = styled.div`
    margin: ${(props) => props.margin || "3rem"}; ;
`;

export { PanelStyles, PanelHeader, PanelBody };
