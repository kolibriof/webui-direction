import { render } from "@testing-library/react";
import React from "react";
import Progress from "../../src/sections/Progress";

jest.mock("../../src/components/ProgressContext", () => ({
  useTaskProgressContext: () => ({
    list: [],
    completedTasks: [],
  }),
}));

describe("Progress section test suite", () => {
  it("should render the component", () => {
    render(<Progress />);
  });
});
