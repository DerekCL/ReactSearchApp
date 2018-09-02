import * as React from "react";
import { connect } from "react-redux";

import CustomTable from "@src/components/pages/Search/CustomTable";
import { Action, State } from "@src/store/configureStore";

const data = [
    { id: 1, name: "Gob", value: "2" },
    { id: 2, name: "Buster", value: "5" },
    { id: 3, name: "George Michael", value: "4" },
];

function mapStateToProps(state: State) {
    return {
        data,
    };
}
function mapDispatchToProps(dispatch: (action: Action) => void) {
    return {};
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CustomTable) as React.ComponentType<any>;
