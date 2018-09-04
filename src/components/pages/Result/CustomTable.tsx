import * as React from "react";
import { pure } from "recompose";

const CustomTable: React.SFC<any> = props => {
    const header = (
        <thead>
            <tr>
                <th>name</th>
                <th>domain</th>
            </tr>
        </thead>
    );
    const content = props.searchData.map((row: any) => {
        return (
            <tr key={row.id.toString()}>
                <th>{row.name}</th>
                <th>{row.domain}</th>
            </tr>
        );
    });
    return (
        <table>
            {header}
            <tbody>{content}</tbody>
        </table>
    );
};

export default pure(CustomTable);
