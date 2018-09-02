import * as React from "react";
import { pure } from "recompose";

const Nav: React.SFC<any> = props => {
    const LoginRedirect = (event: any): void => {
        event.preventDefault();
        props.SwitchPage("Login");
    };

    const RegisterRedirect = (event: any): void => {
        event.preventDefault();
        props.SwitchPage("Register");
    };

    return (
        <div className="Nav">
            <p>
                <a href="" onClick={LoginRedirect}>
                    Login
                </a>{" "}
                <a href="" onClick={RegisterRedirect}>
                    Register
                </a>
            </p>
        </div>
    );
};

export default pure(Nav);
