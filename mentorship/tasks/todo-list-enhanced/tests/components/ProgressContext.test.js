/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react";

import React from "react";
import ProgressContext, {
  TaskProgressContext,
  useTaskProgressContext,
} from "../../src/components/ProgressContext";
import "@testing-library/jest-dom/extend-expect";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: jest.fn(),
}));

describe("ProgressContext component suite", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render the children and provide context value", () => {
    render(
      <ProgressContext>
        <TaskProgressContext.Consumer>
          {(value) => (
            <>
              <div>{value.completedTasks}</div>
            </>
          )}
        </TaskProgressContext.Consumer>
      </ProgressContext>
    );
  });
  it("should properly implement useTaskProgressContext", () => {
    useTaskProgressContext();
    expect(React.useContext).toBeCalledWith(TaskProgressContext);
  });
  it("should return items from localStorage", () => {
    localStorage.setItem("list", '{"result":"pending", "count":1}');
    localStorage.setItem("completedTasks", '{"result":"done", "count":2}');
    const { getByText } = render(
      <ProgressContext>
        <TaskProgressContext.Consumer>
          {(value) => (
            <>
              <div>{value.completedTasks.result}</div>
              <div>{value.completedTasks.count}</div>
            </>
          )}
        </TaskProgressContext.Consumer>
      </ProgressContext>
    );
    expect(getByText(2)).toBeInTheDocument();
  });
});
