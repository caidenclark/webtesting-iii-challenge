import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Dashboard from "./Dashboard";

// Test away


test("Render Parent Snapshot", async () => {
    const wrapper = rtl.render(<Dashboard />);
   expect(wrapper).toBeDefined();
   expect(wrapper.asFragment()).toMatchSnapshot();

})