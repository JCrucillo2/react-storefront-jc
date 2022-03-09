import React from "react";

import { Link } from "react-router-dom";
import {
    AppBarContainer,
    AppBarItems,
    AppBarGroup,
    Email,
    Notifications,
    Settings,
} from "./styles";

// react icons
import * as MdIcons from "react-icons/md";
import { IconContext } from "react-icons/lib";
import { Button } from "ui/buttons";
import { signOut } from "firebase/auth";
import { auth } from "libs/firebase";

function AppBar(props) {
    function onLogoutRequest(e) {
        signOut(auth);
    }

    return (
        <>
            <IconContext.Provider value={{ size: "25", color: "#ff7b00" }}>
                <AppBarContainer>
                    <AppBarItems>
                        <AppBarGroup>
                            <Button padding="0.5rem" onClick={onLogoutRequest}>
                                Sign Out
                            </Button>
                            <Email href="#">
                                <MdIcons.MdOutlineEmail />
                            </Email>
                            <Notifications href="#">
                                <MdIcons.MdOutlineNotificationsNone />
                            </Notifications>
                            <Link to="/">
                                <img
                                    src="https://avatars.dicebear.com/api/initials/JC.svg?r=50&size=75"
                                    alt="avatar"
                                />
                            </Link>
                            <Settings href="#">
                                <MdIcons.MdOutlineSettings />
                            </Settings>
                        </AppBarGroup>
                    </AppBarItems>
                </AppBarContainer>
            </IconContext.Provider>
        </>
    );
}

export default AppBar;
