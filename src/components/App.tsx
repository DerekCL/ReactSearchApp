import * as React from "react";
import { pure } from "recompose";

import PageCheck from "@src/containers/PageCheck";
import Nav from "./Nav";

const App: React.SFC<any> = () => (
    <div>
        <Nav />
        <PageCheck />
    </div>
);

export default pure(App);
