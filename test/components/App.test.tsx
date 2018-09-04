import { expect } from "chai";
import { shallow } from "enzyme";
import * as React from "react";

import App from "@src/components/App";

describe("App", () => {
    it("is present", () => {
        const wrapper = shallow(<App />);
        expect(wrapper).to.be.present;
    });
});
