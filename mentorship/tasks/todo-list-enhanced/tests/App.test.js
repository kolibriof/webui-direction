/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render } from "@testing-library/react";
import App from "../src/App";
import "@testing-library/jest-dom/extend-expect";

import * as ProgressContextModule from "../src/components/ProgressContext";

jest.mock("../src/sections/MainPage", () => {
  return jest.fn(() => {
    return "TestMainPage";
  });
});
describe("App component test suite", () => {
  afterEach(() => jest.clearAllMocks());
  it("should render the MainPage", () => {
    jest
      .spyOn(ProgressContextModule, "useTaskProgressContext")
      .mockImplementationOnce(() => ({
        showConfirmationModal: false,
        showModal: false,
      }));
    const { getByText } = render(<App />);
    expect(getByText("TestMainPage")).toBeInTheDocument();
  });
  it("should assign a proper className", () => {
    jest
      .spyOn(ProgressContextModule, "useTaskProgressContext")
      .mockReturnValueOnce({
        showModal: true,
        showConfirmationModal: true,
      });
    const { getByText } = render(<App />);
    expect(getByText("TestMainPage")).toHaveClass(`hidden`);
  });
});
