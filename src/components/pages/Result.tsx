import { SearchDataElement } from "@src/ducks/app/state";
import * as React from "react";
import { pure } from "recompose";

interface Props {
    searchData: SearchDataElement[];
}

const Result: React.SFC<Props> = props => {
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
        <div className="Result">
            <table>
                {header}
                <tbody>{content}</tbody>
            </table>
        </div>
    );
};

export default pure(Result);
