import { expect } from "chai";
import { shallow } from "enzyme";
import * as React from "react";

import PageCheck from "@src/components/PageCheck";

describe("PageCheck", () => {
    it("is present", () => {
        const wrapper = shallow(<PageCheck page="login" />);
        expect(wrapper).to.be.present;
    });
});
