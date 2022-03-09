import React from "react";
import "../../layout/styles.css";

import { AppBar } from "../../components/appbar";
import { SideBar } from "../../components/sidebar";
import { Panels } from "../../components/panels";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "libs/firebase";

function DashBoardPage(props) {
    const [isUser, setIsUser] = useState(false);
    const navigator = useNavigate();

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setIsUser(true);
        } else {
            setIsUser(false);
            navigator("/");
        }
    });

    if (isUser) {
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
    } else {
        return null;
    }
}

export default DashBoardPage;
