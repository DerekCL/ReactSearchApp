import { expect } from "chai";
import { shallow } from "enzyme";
import * as React from "react";

import Search from "@src/components/pages/Search";

describe("Search", () => {
    it("is present", () => {
        const wrapper = shallow(<Search />);
        expect(wrapper).to.be.present;
    });
});
