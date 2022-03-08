import React from "react";
import { Link } from "react-router-dom";

import { SidebarContainer, Logo, SidebarItems, SidebarItem } from "./styles";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons/lib";

function SideBar() {
    return (
        <>
            <IconContext.Provider value={{ size: "25" }}>
                <SidebarContainer>
                    <Logo>JCFigures</Logo>
                    <SidebarItems>
                        <SidebarItem>
                            <Link to="#">
                                <AiIcons.AiOutlineDashboard />
                                <span>Dashboard</span>
                            </Link>
                        </SidebarItem>

                        <SidebarItem>
                            <Link to="#">
                                <AiIcons.AiOutlineDashboard />
                                <span>Dashboard</span>
                            </Link>
                        </SidebarItem>
                    </SidebarItems>
                </SidebarContainer>
            </IconContext.Provider>
        </>
    );
}

export default SideBar;
