import { expect } from "chai";
import { shallow } from "enzyme";
import * as React from "react";

import TOS from "@src/components/pages/TOS";

describe("TOS", () => {
    it("is present", () => {
        const wrapper = shallow(<TOS />);
        expect(wrapper).to.be.present;
    });
});
