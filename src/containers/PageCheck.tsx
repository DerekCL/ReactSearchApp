import * as React from "react";
import { connect } from "react-redux";

import PageCheck from "@src/components/PageCheck";
import { searchEpicCreator, switchPage } from "@src/ducks/app/actions";
import { Action, State } from "@src/store/configureStore";

function mapStateToProps(state: State) {
    return {
        page: state.app.page,
        user: state.app.user,
    };
}
function mapDispatchToProps(dispatch: (action: Action) => void) {
    return {
        searchEpicCreator: (googleAccessToken: string) =>
            dispatch(searchEpicCreator(googleAccessToken)),
        switchPage: (page: string) => dispatch(switchPage(page)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PageCheck) as React.ComponentType<any>;
