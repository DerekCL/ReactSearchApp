import * as React from "react";
import { GoogleLogin } from "react-google-login";
import * as config from "../../../config/authKeys";

class SocialLogin extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { isAuthenticated: false, user: null, token: "" };
    }

    logout = () => {
        this.setState({ isAuthenticated: false, token: "", user: null });
    }

    onFailure = (error: any) => {
        alert(error);
    }

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
    }

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
                    buttonText="Login"
                    onSuccess={this.googleResponse}
                    onFailure={this.onFailure}
                />
            </div>
        );

        return <div className="SocialLogin">{content}</div>;
    }
}

export default SocialLogin;
