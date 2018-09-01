import * as React from "react";
import { connect } from "react-redux";

import App from "@src/components/App";
import { decrementCounter, incrementCounter } from "@src/ducks/app/actions";
import { Action, State } from "@src/store/configureStore";

function mapStateToProps(state: State) {
    return {
        count: state.app.count,
    };
}
function mapDispatchToProps(dispatch: (action: Action) => void) {
    return {
        decrementCounter: () => dispatch(decrementCounter()),
        incrementCounter: () => dispatch(incrementCounter()),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App) as React.ComponentType<any>;
