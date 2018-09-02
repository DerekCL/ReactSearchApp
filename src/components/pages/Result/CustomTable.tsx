import * as React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { pure } from "recompose";

const CustomTable: React.SFC<any> = props => (
    <div>
        <BootstrapTable data={props.data}>
            <TableHeaderColumn isKey dataField="id">
                ID
            </TableHeaderColumn>
            <TableHeaderColumn dataField="name">Name</TableHeaderColumn>
            <TableHeaderColumn dataField="value">Value</TableHeaderColumn>
        </BootstrapTable>
    </div>
);

export default pure(CustomTable);
