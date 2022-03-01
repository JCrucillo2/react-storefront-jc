import React from "react";

import { Link } from "react-router-dom";
import {
    AppBarContainer,
    AppBarItems,
    AppBarContent,
    Email,
    Notifications,
    Settings,
} from "./styles";
import { Avatar } from "../../ui/avatar";

// react icons
import * as MdIcons from "react-icons/md";
import { IconContext } from "react-icons/lib";

function AppBar(props) {
    return (
        <>
            <IconContext.Provider value={{ size: "25", color: "#ff7b00" }}>
                <AppBarContainer>
                    <AppBarItems>
                        <AppBarContent>
                            <Link to="/">Sign Out</Link>
                            <Email href="#">
                                <MdIcons.MdOutlineEmail />
                            </Email>
                            <Notifications href="#">
                                <MdIcons.MdOutlineNotificationsNone />
                            </Notifications>
                            <Avatar href="#">JC</Avatar>
                            <Settings href="#">
                                <MdIcons.MdOutlineSettings />
                            </Settings>
                        </AppBarContent>
                    </AppBarItems>
                </AppBarContainer>
            </IconContext.Provider>
        </>
    );
}

export default AppBar;
