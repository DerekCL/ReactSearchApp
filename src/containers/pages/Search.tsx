import * as React from "react";
import { connect } from "react-redux";

import Search from "@src/components/pages/Search";
import { searchEpicCreator, switchPage } from "@src/ducks/app/actions";
import { Action, State } from "@src/store/configureStore";

function mapStateToProps(state: State) {
    return {
        searchData: state.app.searchData,
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
)(Search) as React.ComponentType<any>;
