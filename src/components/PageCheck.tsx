import * as React from "react";
import { pure } from "recompose";

import Login from "@src/components/pages/Login";
import Register from "@src/components/pages/Register";
import Search from "@src/components/pages/Search";
import TOS from "@src/components/pages/TOS";

interface Props {
    loginEpicCreator: () => void;
    registerEpicCreator: () => void;
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
        case "Register":
            return (
                <Register
                    switchPage={props.switchPage}
                    registerEpicCreator={props.registerEpicCreator}
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
