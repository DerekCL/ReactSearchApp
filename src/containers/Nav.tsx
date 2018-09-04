import * as React from "react";
import { connect } from "react-redux";

import Nav from "@src/components/Nav";
import { googleLogout, switchPage } from "@src/ducks/app/actions";
import { Action, State } from "@src/store/configureStore";

function mapStateToProps(state: State) {
    return {
        isAuthenticated: state.app.isAuthenticated,
        user: state.app.user,
    };
}
function mapDispatchToProps(dispatch: (action: Action) => void) {
    return {
        switchPage: (page: string) => dispatch(switchPage(page)),
        googleLogout: (authPayload: any) => dispatch(googleLogout(authPayload)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Nav) as React.ComponentType<any>;
