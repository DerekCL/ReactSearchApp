import * as React from "react";
import { pure } from "recompose";

import Counter from "@src/containers/Counter";
import Login from "./Login";
import Register from "./Register";
import Search from "./Search";

interface Props {
    decrementCounter: () => void;
    incrementCounter: () => void;
    count: number;
}

const App: React.SFC<Props> = ({ decrementCounter, incrementCounter, count }) =>
    true ? <Search /> : <Search />;

export default pure(App);
