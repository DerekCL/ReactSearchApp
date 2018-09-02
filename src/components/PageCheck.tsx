import * as React from "react";
import { pure } from "recompose";

import Counter from "@src/containers/Counter";
import Login from "@src/components/pages/Login";
import Register from "@src/components/pages/Register";
import Search from "@src/components/pages/Search";
import TOS from "@src/components/pages/TOS";

interface Props {
    decrementCounter: () => void;
    incrementCounter: () => void;
    SwitchPage: (page: string) => void;
    count: number;
    page: string;
}

const PageCheck: React.SFC<Props> = props => {
    switch (props.page) {
        case "Login":
            return <Login SwitchPage={props.SwitchPage} />;
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
