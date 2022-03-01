import React from "react";
import "../../layout/styles.css";

import { AppBar } from "../../components/appbar";
import { SideBar } from "../../components/sidebar";
import { Panels } from "../../components/panels";

function DashBoardPage(props) {
    return (
        <>
            <div className="layout-grid">
                <SideBar />
                <div className="content-area">
                    <AppBar />
                    <Panels />
                </div>
            </div>
        </>
    );
}

export default DashBoardPage;
