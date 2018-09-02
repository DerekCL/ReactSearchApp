import * as React from "react";
import { connect } from "react-redux";

import App from "@src/components/App";

import { Action, State } from "@src/store/configureStore";

function mapStateToProps(state: State) {
    return {};
}
function mapDispatchToProps(dispatch: (action: Action) => void) {
    return {};
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App) as React.ComponentType<any>;
