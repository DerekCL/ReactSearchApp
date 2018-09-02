import * as React from "react";
import { pure } from "recompose";

const Counter: React.SFC<any> = () => (
    <div className="counter">
        <p>Hello</p>
    </div>
);

export default pure(Counter);
