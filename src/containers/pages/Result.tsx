import * as React from "react";
import { connect } from "react-redux";

import Result from "@src/components/pages/Result";
import { Action, State } from "@src/store/configureStore";

function mapStateToProps(state: State) {
    return {
        searchData: state.app.searchData,
    };
}
function mapDispatchToProps(dispatch: (action: Action) => void) {
    return {};
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Result) as React.ComponentType<any>;
