import { expect } from "chai";
import { shallow } from "enzyme";
import * as React from "react";

import Login from "@src/components/pages/Login";

describe("Login", () => {
    it("is present", () => {
        const wrapper = shallow(<Login />);
        expect(wrapper).to.be.present;
    });
});
