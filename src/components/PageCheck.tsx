import * as React from "react";
import { pure } from "recompose";

import Search from "@src/components/pages/Search";
import TOS from "@src/components/pages/TOS";
import Login from "@src/containers/pages/Login";

import { User } from "@src/ducks/app/state";

interface Props {
    searchEpicCreator: (searchStuff: any) => void;
    switchPage: (page: string) => void;
    page: string;
    user: User;
}

const PageCheck: React.SFC<Props> = props => {
    switch (props.page) {
        case "Login":
            return <Login switchPage={props.switchPage} />;
        case "Search":
            return (
                <Search
                    switchPage={props.switchPage}
                    searchEpicCreator={props.searchEpicCreator}
                    user={props.user}
                />
            );
        case "TOS":
            return <TOS switchPage={props.switchPage} />;
        default:
            return <Login switchPage={props.switchPage} />;
    }
};

export default pure(PageCheck);
