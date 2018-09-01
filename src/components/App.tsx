import * as React from "react";
import { pure } from "recompose";

import Counter from "@src/containers/Counter";
import Login from "./Login";

interface Props {
    decrementCounter: () => void;
    incrementCounter: () => void;
    count: number;
}

const App: React.SFC<Props> = ({ decrementCounter, incrementCounter, count }) =>
    true ? <Login /> : <Login />;

export default pure(App);
