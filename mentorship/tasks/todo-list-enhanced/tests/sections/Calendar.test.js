import { render } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import Calendar from "../../src/sections/Calendar";

describe("Calendar section suite", () => {
  it("should render the component properly", () => {
    render(<Calendar />);
  });
});
