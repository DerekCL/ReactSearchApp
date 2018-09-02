import * as React from "react";
import { pure } from "recompose";

import Login from "@src/components/pages/Login";
import Register from "@src/components/pages/Register";
import Search from "@src/components/pages/Search";
import TOS from "@src/components/pages/TOS";

interface Props {
    LoginEpicCreator: () => void;
    SwitchPage: (page: string) => void;
    page: string;
}

const PageCheck: React.SFC<Props> = props => {
    switch (props.page) {
        case "Login":
            return (
                <Login
                    SwitchPage={props.SwitchPage}
                    LoginEpicCreator={props.LoginEpicCreator}
                />
            );
        case "Register":
            return <Register SwitchPage={props.SwitchPage} />;
        case "Search":
            return <Search SwitchPage={props.SwitchPage} />;
        case "TOS":
            return <TOS SwitchPage={props.SwitchPage} />;
        default:
            return <Login SwitchPage={props.SwitchPage} />;
    }
};

export default pure(PageCheck);
