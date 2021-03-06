import * as React from "react";
import { pure } from "recompose";

const Nav: React.SFC<any> = props => {
    const logout = () => {
        props.googleLogout({ isAuthenticated: false, token: "", user: null });
        props.switchPage("Login");
    };

    const LoginRedirect = (event: any): void => {
        event.preventDefault();
        props.switchPage("Login");
    };

    const SearchRedirect = (event: any): void => {
        event.preventDefault();
        props.switchPage("Search");
    };

    const TOSRedirect = (event: any): void => {
        event.preventDefault();
        props.switchPage("TOS");
    };

    const content = !!props.isAuthenticated ? (
        <ul>
            <li className="Logout">
                <a onClick={logout}>Logout</a>
            </li>
            <li>
                <a href="" onClick={TOSRedirect}>
                    Terms Of Service
                </a>
            </li>
            <li>
                <a href="" onClick={SearchRedirect}>
                    Search
                </a>
            </li>
        </ul>
    ) : (
        <ul>
            <li>
                <a href="" onClick={LoginRedirect}>
                    Login
                </a>
            </li>
            <li>
                <a href="" onClick={TOSRedirect}>
                    Terms Of Service
                </a>
            </li>
        </ul>
    );
    return <nav className="Nav">{content}</nav>;
};

export default pure(Nav);
