import * as React from "react";
import { pure } from "recompose";
import CustomTable from "./CustomTable";

const data = [
    { id: 1, name: "Gob", value: "2" },
    { id: 2, name: "Buster", value: "5" },
    { id: 3, name: "George Michael", value: "4" },
];

const Search: React.SFC<any> = () => (
    <div className="Search">
        <p className="Table-header">Basic Table</p>
        <CustomTable data={data} />
    </div>
);

export default pure(Search);
