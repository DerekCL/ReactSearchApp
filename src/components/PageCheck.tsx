import * as React from "react";
import { pure } from "recompose";

import Login from "@src/components/pages/Login";
import Search from "@src/components/pages/Search";
import Page1 from "@src/components/pages/SocialLogin";
import SocialLogin from "@src/components/pages/SocialLogin";
import TOS from "@src/components/pages/TOS";

interface Props {
    loginEpicCreator: () => void;
    registerEpicCreator: () => void;
    switchPage: (page: string) => void;
    page: string;
}

const PageCheck: React.SFC<Props> = props => {
    switch (props.page) {
        case "Login":
            return (
                <Page1
                    switchPage={props.switchPage}
                    loginEpicCreator={props.loginEpicCreator}
                />
            );
        case "SocialLogin":
            return (
                <SocialLogin
                    switchPage={props.switchPage}
                    registerEpicCreator={props.registerEpicCreator}
                />
            );
        case "Search":
            return <Search switchPage={props.switchPage} />;
        case "TOS":
            return <TOS switchPage={props.switchPage} />;
        default:
            return <Login switchPage={props.switchPage} />;
    }
};

export default pure(PageCheck);
