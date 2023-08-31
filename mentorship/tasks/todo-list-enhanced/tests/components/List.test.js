/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/prefer-screen-queries */
import { cleanup, fireEvent, render } from "@testing-library/react";
import List from "../../src/components/List";
import React from "react";
import "@testing-library/jest-dom/extend-expect";

jest.mock("../../src/components/ProgressContext", () => ({
  useTaskProgressContext: jest.fn(() => ({
    formattedDate: "2023-08-30",
    formattedCompletedDate: "2023-09-20",
  })),
}));

describe("List component suite", () => {
  beforeEach(cleanup);
  const mockedList = [
    { id: 1, title: "Task", date: "2022-12-20", description: "desc" },
  ];
  const mockedDone = jest.fn();
  const mockedEdit = jest.fn();
  const mockedDelete = jest.fn();
  const mockedConfirmationModal = jest.fn();
  const mockedConfirmationState = jest.fn();

  it("should render the component", () => {
    render(
      <List
        list={mockedList}
        editItem={jest.fn()}
        setDoneTask={jest.fn()}
        setDeleteID={jest.fn()}
        setConfirmationState={jest.fn()}
        setShowConfirmationModal={jest.fn()}
      />
    );
  });
  it("should edit the task", () => {
    const { getByTestId } = render(
      <List
        list={mockedList}
        editItem={mockedEdit}
        setDoneTask={jest.fn()}
        setDeleteID={jest.fn()}
        setConfirmationState={jest.fn()}
        setShowConfirmationModal={jest.fn()}
      />
    );
    const editSpan = getByTestId("list-span-container").firstChild;
    fireEvent.click(editSpan);

    expect(mockedEdit).toHaveBeenCalled();
  });
  it("should delete the task", () => {
    const { getByTestId } = render(
      <List
        list={mockedList}
        editItem={jest.fn()}
        setDoneTask={jest.fn()}
        setDeleteID={mockedDelete}
        setConfirmationState={mockedConfirmationState}
        setShowConfirmationModal={mockedConfirmationModal}
      />
    );
    const deleteSpan = getByTestId("list-span-container").children[1];
    fireEvent.click(deleteSpan);

    expect(mockedDelete).toHaveBeenCalledWith(1);
    expect(mockedConfirmationModal).toHaveBeenCalledWith(true);
    expect(mockedConfirmationState).toHaveBeenCalledWith(1);
  });
  it("should complete the task", () => {
    const { getByTestId } = render(
      <List
        list={mockedList}
        editItem={jest.fn()}
        setDoneTask={mockedDone}
        setDeleteID={jest.fn()}
        setConfirmationState={mockedConfirmationState}
        setShowConfirmationModal={mockedConfirmationModal}
      />
    );
    const doneSpan = getByTestId("list-span-container").children[2];
    fireEvent.click(doneSpan);
    expect(mockedConfirmationModal).toHaveBeenCalledWith(true);
    expect(mockedConfirmationState).toHaveBeenCalledWith(null);
    expect(mockedDone).toHaveBeenCalledWith({
      id: mockedList[0].id,
      name: mockedList[0].title,
      dateCompleted: "2023-09-20",
      deadline: mockedList[0].date,
      description: mockedList[0].description,
    });
  });
  it("should assign a proper class name", () => {
    const { getByTestId } = render(
      <List
        list={mockedList}
        editItem={jest.fn()}
        setDoneTask={mockedDone}
        setDeleteID={jest.fn()}
        setConfirmationState={mockedConfirmationState}
        setShowConfirmationModal={mockedConfirmationModal}
      />
    );
    const paragraphClass = getByTestId("task-item").children[2];
    expect(paragraphClass).toHaveClass(`out-of-deadline`);
  });
});
