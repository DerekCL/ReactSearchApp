import * as React from "react";
import { Button, ControlLabel, FormControl, FormGroup } from "react-bootstrap";

export default class Register extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            email: "",
            password: "",
        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = (event: any): void => {
        this.setState({
            [event.currentTarget.id]: event.currentTarget.value,
        });
    };

    handleSubmit = (event: any): void => {
        event.preventDefault();
        this.props.SwitchPage("Login");
    };

    render() {
        return (
            <div className="Register">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="email" bsSize="large">
                        <ControlLabel>Email</ControlLabel>
                        <FormControl
                            autoFocus
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                        />
                    </FormGroup>
                    <Button
                        block
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit"
                    >
                        Register
                    </Button>
                </form>
            </div>
        );
    }
}
