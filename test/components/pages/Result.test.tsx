import { expect } from "chai";
import { shallow } from "enzyme";
import * as React from "react";

import Result from "@src/components/pages/Result";

describe("Result", () => {
    it("is present", () => {
        const wrapper = shallow(<Result />);
        expect(wrapper).to.be.present;
    });
});
