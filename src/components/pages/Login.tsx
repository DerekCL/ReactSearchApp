import * as React from "react";
import { GoogleLogin } from "react-google-login";
import { pure } from "recompose";

import * as config from "../../../config/authKeys";

const Login: React.SFC<any> = props => {
    const logout = () => {
        props.googleLogout({ isAuthenticated: false, token: "", user: null });
    };

    const onFailure = (error: any) => {
        alert(error);
    };

    const googleResponse = (response: any) => {
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
                        props.googleLogin({
                            isAuthenticated: true,
                            token,
                            user,
                        });
                    }
                });
            },
        );
    };

    const TOSRedirect = (event: any): void => {
        event.preventDefault();
        props.switchPage("TOS");
    };

    const content = !!props.isAuthenticated ? (
        <div>
            <p>Authenticated</p>
            <div>{props.user.email}</div>
            <div>
                <button onClick={logout} className="button">
                    Log out
                </button>
            </div>
        </div>
    ) : (
        <div>
            <GoogleLogin
                clientId={config.google.client_id}
                buttonText="Google Login"
                onSuccess={googleResponse}
                onFailure={onFailure}
            />
            <div>
                <p>
                    By entering you agree to our{" "}
                    <a href="" onClick={TOSRedirect}>
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
};

export default pure(Login);
