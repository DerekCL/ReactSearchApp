import { expect } from "chai";
import { shallow } from "enzyme";
import * as React from "react";

import Nav from "@src/components/Nav";

describe("Nav", () => {
    const user = {
        id: 0,
        username: "",
        google_id: "",
        google_access_token: "",
        google_refresh_token: "",
        admin: false,
        date_added: "",
        updated: "",
    };
    it("is present for users that have not been authenticated", () => {
        const wrapper = shallow(
            <Nav
                isAuthenticated={false}
                user={user}
                googleLogout={({}) => null}
            />,
        );
        expect(wrapper).to.be.present;
    });
    it("is present for users that have been authenticated", () => {
        const wrapper = shallow(<Nav isAuthenticated={true} />);
        expect(wrapper).to.be.present;
    });
});

// googleLogout: (authPayload: any) => dispatch(googleLogout(authPayload)),
// switchPage; : (page: string) => dispatch(switchPage(page)), ;
