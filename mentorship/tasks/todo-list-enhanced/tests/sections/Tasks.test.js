import { render } from "@testing-library/react";
import React from "react";

import Tasks from "../../src/sections/Tasks";

jest.mock("../../src/components/NewTasks", () => {
  return jest.fn(() => <></>);
});
jest.mock("../../src/components/CompletedTasksList", () => {
  return jest.fn(() => <></>);
});
jest.mock("../../src/components/ConfirmationModal", () => {
  return jest.fn(() => <></>);
});
jest.mock("../../src/components/ModalWindow", () => {
  return jest.fn(() => <></>);
});

jest.mock("../../src/components/ProgressContext", () => ({
  useTaskProgressContext: () => ({
    list: [],
    setList: jest.fn(),
    completedTasks: [],
    setCompletedTasks: jest.fn(),
    isClicked: false,
    setIsClicked: jest.fn(),
    selectedDate: new Date(),
    setSelectedDate: jest.fn(),
    showModal: false,
    setShowModal: jest.fn(),
    showConfirmationModal: false,
    setShowConfirmationModal: jest.fn(),
  }),
}));

describe("Tasks section test suite", () => {
  it("should render the component properly", () => {
    render(<Tasks />);
  });
});
