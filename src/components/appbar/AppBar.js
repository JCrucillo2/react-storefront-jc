import React from "react";

import { IoNotificationsOutline } from "react-icons/io5";
import { AppBarStyles, AppBarItems, AppBarItem } from "./styles";

function AppBar(props) {
    return (
        <AppBarStyles>
            <AppBarItems>
                <AppBarItem>Branding</AppBarItem>
                <AppBarItem>
                    <a>
                        <IoNotificationsOutline color="tomato" size="1.75rem" />
                    </a>
                </AppBarItem>
            </AppBarItems>
        </AppBarStyles>
    );
}

export default AppBar;
