import * as React from "react";
import { pure } from "recompose";

import Counter from "@src/containers/Counter";

interface Props {
    decrementCounter: () => void;
    incrementCounter: () => void;
    count: number;
}

const App: React.SFC<Props> = ({ decrementCounter, incrementCounter, count }) =>
    true ? <Counter /> : <Counter />;

export default pure(App);
