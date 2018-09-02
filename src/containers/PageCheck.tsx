import * as React from "react";
import { connect } from "react-redux";

import PageCheck from "@src/components/PageCheck";
import { LoginEpicCreator, SwitchPage } from "@src/ducks/app/actions";
import { Action, State } from "@src/store/configureStore";

function mapStateToProps(state: State) {
    return {
        page: state.app.page,
    };
}
function mapDispatchToProps(dispatch: (action: Action) => void) {
    return {
        LoginEpicCreator: () => dispatch(LoginEpicCreator()),
        SwitchPage: (page: string) => dispatch(SwitchPage(page)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PageCheck) as React.ComponentType<any>;
