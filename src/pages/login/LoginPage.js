import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    Container,
    MainFlex,
    InputArea,
    DisplayArea,
    FormArea,
    FormItem,
    FormLabel,
    FormInput,
} from "./styles";

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
            <Container>
                <MainFlex>
                    <InputArea>
                        <FormArea>
                            <FormItem>
                                <FormLabel htmlFor="username">
                                    Username
                                </FormLabel>
                                <FormInput
                                    type="text"
                                    name="username"
                                    id="username"
                                />
                            </FormItem>
                            <FormItem>
                                <FormLabel htmlFor="password">
                                    Password
                                </FormLabel>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                />
                            </FormItem>
                            <button type="submit">Log In</button>
                        </FormArea>
                    </InputArea>
                    <DisplayArea>Some Test LOL</DisplayArea>
                </MainFlex>
            </Container>
        </>
    );
}

export default LoginPage;
