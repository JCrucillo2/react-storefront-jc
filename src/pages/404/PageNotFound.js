import React from "react";
import { Link } from "react-router-dom";

function PageNotFound(props) {
    return (
        <>
            <header>
                <h1>Page Not Found!</h1>
            </header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Login Page</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard Page</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default PageNotFound;
