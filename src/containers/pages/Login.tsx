import * as React from "react";
import { connect } from "react-redux";

import Login from "@src/components/pages/Login";
import { googleLogin, googleLogout, switchPage } from "@src/ducks/app/actions";
import { Action, State } from "@src/store/configureStore";

function mapStateToProps(state: State) {
    return {
        isAuthenticated: state.app.isAuthenticated,
        token: state.app.token,
        user: state.app.user,
    };
}
function mapDispatchToProps(dispatch: (action: Action) => void) {
    return {
        googleLogin: (authPayload: any) => dispatch(googleLogin(authPayload)),
        googleLogout: (authPayload: any) => dispatch(googleLogout(authPayload)),
        switchPage: (page: string) => dispatch(switchPage(page)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Login) as React.ComponentType<any>;
