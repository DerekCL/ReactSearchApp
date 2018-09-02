import * as React from "react";
import { connect } from "react-redux";

import Nav from "@src/components/Nav";
import { SwitchPage } from "@src/ducks/app/actions";
import { Action, State } from "@src/store/configureStore";

function mapStateToProps(state: State) {
    return {
        page: state.app.page,
    };
}
function mapDispatchToProps(dispatch: (action: Action) => void) {
    return {
        SwitchPage: (page: string) => dispatch(SwitchPage(page)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Nav) as React.ComponentType<any>;
