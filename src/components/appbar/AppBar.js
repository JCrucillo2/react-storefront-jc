import React from "react";

import { IoNotificationsOutline } from "react-icons/io5";
import { AppBarStyles, AppBarItems, AppBarItem } from "./styles";
import { Link } from "react-router-dom";

function AppBar(props) {
    return (
        <AppBarStyles>
            <AppBarItems>
                <AppBarItem>Branding</AppBarItem>
                <AppBarItem>
                    <Link to="/">
                        <IoNotificationsOutline color="tomato" size="1.75rem" />
                    </Link>
                </AppBarItem>
            </AppBarItems>
        </AppBarStyles>
    );
}

export default AppBar;
