import * as React from "react";
import { Button, ControlLabel, FormControl, FormGroup } from "react-bootstrap";

import { GoogleLogin } from "react-google-login";
import * as config from "../../../config/authKeys";

export default class Login extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            email: "",
            password: "",
        };
    }

    TOSRedirect = (event: any): void => {
        event.preventDefault();
        this.props.switchPage("TOS");
    };

    logout = () => {
        this.setState({ isAuthenticated: false, token: "", user: null });
    };

    onFailure = (error: any) => {
        alert(error);
    };

    googleResponse = (response: any) => {
        const tokenBlob = new Blob(
            [JSON.stringify({ access_token: response.accessToken }, null, 2)],
            { type: "application/json" },
        );
        const defaultString: "default" = "default";
        const corsString: "cors" = "cors";
        const options = {
            body: tokenBlob,
            cache: defaultString,
            method: "POST",
            mode: corsString,
        };
        fetch("http://localhost:9000/auth/google/token", options).then(
            (r: any) => {
                const token = r.headers.get("x-auth-token");
                r.json().then((user: any) => {
                    if (token) {
                        this.setState({ isAuthenticated: true, user, token });
                    }
                });
            },
        );
    };

    render() {
        const content = !!this.state.isAuthenticated ? (
            <div>
                <p>Authenticated</p>
                <div>{this.state.user.email}</div>
                <div>
                    <button onClick={this.logout} className="button">
                        Log out
                    </button>
                </div>
            </div>
        ) : (
            <div>
                <GoogleLogin
                    clientId={config.google.client_id}
                    buttonText="Google Login"
                    onSuccess={this.googleResponse}
                    onFailure={this.onFailure}
                />
                <div>
                    <p>
                        By entering you agree to our{" "}
                        <a href="" onClick={this.TOSRedirect}>
                            Terms of Service
                        </a>
                        .
                    </p>
                </div>
            </div>
        );
        return (
            <div className="Login">
                <h1>Login</h1>
                <hr />
                {content}
            </div>
        );
    }
}
