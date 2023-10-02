/* eslint-disable testing-library/prefer-screen-queries */
import { cleanup, render } from "@testing-library/react";
import React from "react";
import Greetings from "../../src/sections/Greetings";
import "@testing-library/jest-dom/extend-expect";

describe("Greeting section suite", () => {
  afterEach(() => {
    cleanup();
    jest.clearAllTimers();
  });
  it("should render the component properly", () => {
    render(<Greetings />);
  });
  it("displays the correct message based on the current time (good afternoon)", () => {
    jest.useFakeTimers().setSystemTime(new Date("2023-09-05T15:00:00Z"));
    const { getByText } = render(<Greetings />);
    expect(getByText("Good afternoon")).toBeInTheDocument();
  });
  it("displays the correct message based on the current time (Good evening)", () => {
    jest.useFakeTimers().setSystemTime(new Date("2023-09-05T17:00:00Z"));
    const { getByText } = render(<Greetings />);
    expect(getByText("Good evening")).toBeInTheDocument();
  });
  it("displays the correct message based on the current time (Good night)", () => {
    jest.useFakeTimers().setSystemTime(new Date("2023-09-05T21:00:00Z"));
    const { getByText } = render(<Greetings />);
    expect(getByText("Good night")).toBeInTheDocument();
  });
});
