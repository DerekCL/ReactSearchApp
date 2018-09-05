import * as React from "react";
import { pure } from "recompose";

import Nav from "@src/containers/Nav";
import PageCheck from "@src/containers/PageCheck";

const App: React.SFC<any> = () => (
    <div>
        <Nav />
        <PageCheck />
    </div>
);

export default pure(App);
