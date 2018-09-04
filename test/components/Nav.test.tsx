import { expect } from "chai";
import { shallow } from "enzyme";
import * as React from "react";

import Nav from "@src/components/Nav";

describe("Nav", () => {
    it("is present", () => {
        const wrapper = shallow(<Nav />);
        expect(wrapper).to.be.present;
    });
});
