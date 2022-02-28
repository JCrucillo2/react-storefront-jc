import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    SplitScreen,
    Left,
    Right,
    MainHeading,
    SectionFirst,
    Form,
    SectionCopy,
    InputContainer,
    InputLabel,
    InputBox,
    CheckBoxZone,
} from "./styles";
import { Button } from "./../../ui/buttons";
import { FormCheck } from "react-bootstrap";

// Add Event Listener
// elem.addEventListener

function LoginPage(props) {
    let navigation = useNavigate();

    function onHandleSubmit(e) {
        e.preventDefault();
        navigation("dashboard");
        // firebase auth signInWithUsernameAndPassword({email, password})
    }

    return (
        <>
            {/* <header>
                <h1>Login Page Area</h1>
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

            <form onSubmit={onHandleSubmit}>
                <input type="text" name="username" id="username" required />

                <button type="submit">Form Submission</button>
            </form> */}
            <SplitScreen>
                <Left>
                    <SectionFirst>
                        <MainHeading>JCFigures Dashboard</MainHeading>
                        <p>
                            JC Storefront which sells gaming statues and
                            figurines
                        </p>
                    </SectionFirst>
                </Left>
                <Right>
                    <Form onSubmit={onHandleSubmit}>
                        <SectionCopy>
                            <h2>Sign In</h2>
                            <div>
                                <p>
                                    Don't have an account?{" "}
                                    <Link to="/">
                                        <strong>Sign Up</strong>
                                    </Link>
                                </p>
                                {/* <Link to="/">Login Page</Link>
                                <Link to="/dashboard">Dashboard Page</Link> */}
                            </div>
                        </SectionCopy>

                        <InputContainer>
                            <InputLabel htmlFor="username">Username</InputLabel>
                            <InputBox
                                type="text"
                                name="username"
                                required
                            ></InputBox>
                        </InputContainer>

                        <InputContainer>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <InputBox
                                type="password"
                                name="password"
                                required
                            ></InputBox>
                        </InputContainer>

                        <CheckBoxZone>
                            <FormCheck />
                            <p>Remember Password</p>
                        </CheckBoxZone>

                        <Button type="submit">Sign In</Button>
                    </Form>
                </Right>
            </SplitScreen>
        </>
    );
}

export default LoginPage;
