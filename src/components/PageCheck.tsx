import * as React from "react";
import { pure } from "recompose";

import TOS from "@src/components/pages/TOS";
import Login from "@src/containers/pages/Login";
import Search from "@src/containers/pages/Search";

import { User } from "@src/ducks/app/state";

interface Props {
    page: string;
}

const PageCheck: React.SFC<Props> = props => {
    switch (props.page) {
        case "Login":
            return <Login />;
        case "Search":
            return <Search />;
        case "TOS":
            return <TOS />;
        default:
            return <Login />;
    }
};

export default pure(PageCheck);
