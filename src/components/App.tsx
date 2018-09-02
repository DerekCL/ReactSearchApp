import * as React from "react";
import { pure } from "recompose";

import Counter from "@src/containers/Counter";
import Login from "./Login";
import Register from "./Register";
import Search from "./Search";
import TOS from "./TOS";

interface Props {
    decrementCounter: () => void;
    incrementCounter: () => void;
    SwitchPage: (page: string) => void;
    count: number;
    page: string;
}

const App: React.SFC<Props> = props => {
    switch (props.page) {
        case "Login":
            return <Login SwitchPage={props.SwitchPage} />;
        case "Register":
            return <Register SwitchPage={props.SwitchPage} />;
        case "Search":
            return <Search />;
        case "TOS":
            return <TOS />;
        default:
            return <Login SwitchPage={props.SwitchPage} />;
    }
};

export default pure(App);
