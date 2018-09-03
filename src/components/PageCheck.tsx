import * as React from "react";
import { pure } from "recompose";

import Search from "@src/components/pages/Search";
import TOS from "@src/components/pages/TOS";
import Login from "@src/containers/pages/Login";

interface Props {
    loginEpicCreator: () => void;
    switchPage: (page: string) => void;
    page: string;
}

const PageCheck: React.SFC<Props> = props => {
    switch (props.page) {
        case "Login":
            return (
                <Login
                    switchPage={props.switchPage}
                    loginEpicCreator={props.loginEpicCreator}
                />
            );
        case "Search":
            return <Search switchPage={props.switchPage} />;
        case "TOS":
            return <TOS switchPage={props.switchPage} />;
        default:
            return <Login switchPage={props.switchPage} />;
    }
};

export default pure(PageCheck);
