import * as React from "react";
import { pure } from "recompose";

import CustomTable from "@src/containers/pages/search/CustomTable";

const Search: React.SFC<any> = () => (
    <div className="Search">
        <p className="Table-header">Basic Table</p>
        <CustomTable />
    </div>
);

export default pure(Search);
