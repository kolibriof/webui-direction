import { render } from "@testing-library/react";
import React from "react";
import MainPage from "../../src/sections/MainPage";

jest.mock("../../src/sections/Greetings", () => {
  return jest.fn(() => <></>);
});
jest.mock("../../src/sections/Calendar", () => {
  return jest.fn(() => <></>);
});
jest.mock("../../src/sections/Progress", () => {
  return jest.fn(() => <></>);
});
jest.mock("../../src/sections/Tasks", () => {
  return jest.fn(() => <></>);
});

describe("MainPage section test suite", () => {
  it("should render component with no errors", () => {
    render(<MainPage />);
  });
});
