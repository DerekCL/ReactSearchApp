import * as React from "react";
import { pure } from "recompose";

interface Props {
    decrementCounter: () => void;
    incrementCounter: () => void;
    count: number;
}

const Counter: React.SFC<Props> = ({
    decrementCounter,
    incrementCounter,
    count,
}) => (
    <div className="counter">
        <h1>Counter: {count}</h1>
        <button onClick={incrementCounter}>+</button>
        <button onClick={decrementCounter}>-</button>
        <hr />
    </div>
);

export default pure(Counter);
