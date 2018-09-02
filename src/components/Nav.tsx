import * as React from "react";
import { pure } from "recompose";

const Nav: React.SFC<any> = props => {
    const LoginRedirect = (event: any): void => {
        event.preventDefault();
        props.switchPage("Login");
    };

    const RegisterRedirect = (event: any): void => {
        event.preventDefault();
        props.switchPage("Register");
    };

    return (
        <nav className="Nav">
            <ul>
                <li>
                    <a href="" onClick={LoginRedirect}>
                        Login
                    </a>
                </li>
                <li>
                    <a href="" onClick={RegisterRedirect}>
                        Register
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default pure(Nav);
