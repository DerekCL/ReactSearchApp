import * as React from "react";
import { pure } from "recompose";

import CustomTable from "@src/containers/pages/Result/CustomTable";

const Search: React.SFC<any> = () => (
    <div className="Search">
        <CustomTable />
    </div>
);

export default pure(Search);
