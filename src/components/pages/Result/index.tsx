import * as React from "react";
import { pure } from "recompose";

import CustomTable from "@src/containers/pages/Result/CustomTable";

const Result: React.SFC<any> = () => (
    <div className="Result">
        <CustomTable />
    </div>
);

export default pure(Result);
