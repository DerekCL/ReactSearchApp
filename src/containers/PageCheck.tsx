import * as React from "react";
import { connect } from "react-redux";

import PageCheck from "@src/components/PageCheck";
import {
    decrementCounter,
    incrementCounter,
    SwitchPage,
} from "@src/ducks/app/actions";
import { Action, State } from "@src/store/configureStore";

function mapStateToProps(state: State) {
    return {
        count: state.app.count,
        page: state.app.page,
    };
}
function mapDispatchToProps(dispatch: (action: Action) => void) {
    return {
        SwitchPage: (page: string) => dispatch(SwitchPage(page)),
        decrementCounter: () => dispatch(decrementCounter()),
        incrementCounter: () => dispatch(incrementCounter()),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PageCheck) as React.ComponentType<any>;
