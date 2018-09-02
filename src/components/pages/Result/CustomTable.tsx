import * as React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { pure } from "recompose";

const CustomTable: React.SFC<any> = props => (
    <div>
        <BootstrapTable data={props.searchData}>
            <TableHeaderColumn isKey dataField="id">
                ID
            </TableHeaderColumn>
            <TableHeaderColumn dataField="name">Name</TableHeaderColumn>
            <TableHeaderColumn dataField="domain">Domain</TableHeaderColumn>
        </BootstrapTable>
    </div>
);

export default pure(CustomTable);
