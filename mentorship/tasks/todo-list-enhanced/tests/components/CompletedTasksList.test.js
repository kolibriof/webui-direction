/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable testing-library/prefer-screen-queries */
import { cleanup, fireEvent, render } from "@testing-library/react";
import CompletedTasksList from "../../src/components/CompletedTasksList";
import React from "react";
import "@testing-library/jest-dom/extend-expect";

describe("CompletedTasksList test suite", () => {
  afterEach(() => cleanup());

  const mockedCompletedTasks = [
    { id: 1, name: "Task 1", dateCompleted: "8/29/2023" },
    { id: 2, name: "Task 1", dateCompleted: "8/29/2024" },
  ];

  it("render the completed tasks", () => {
    const { getByText, getAllByText } = render(
      <CompletedTasksList
        completedTasksfilteredList={mockedCompletedTasks}
        setCompletedTasksSearchQuery={() => {}}
        completedTasksSearchQuery=""
        isClicked={false}
        handleItemView={jest.fn()}
      />
    );
    expect(getByText("8/29/2023")).toBeInTheDocument();
    expect(getByText("8/29/2024")).toBeInTheDocument();
    expect(getAllByText("Task 1")).toHaveLength(mockedCompletedTasks.length);
  });
  it("should update search query when typing in the search input", () => {
    const setSearchQueryMock = jest.fn();

    const { getByPlaceholderText } = render(
      <CompletedTasksList
        completedTasksfilteredList={mockedCompletedTasks}
        setCompletedTasksSearchQuery={setSearchQueryMock}
        completedTasksSearchQuery=""
        isClicked={false}
        handleItemView={() => {}}
      />
    );

    const searchInput = getByPlaceholderText("Search by the task name...");
    fireEvent.change(searchInput, { target: { value: "Task 2" } });
    expect(setSearchQueryMock).toHaveBeenCalledWith("Task 2");
  });
  it("should bring up the window", () => {
    const mockedHandleItemView = jest.fn();
    const { getByTestId } = render(
      <CompletedTasksList
        completedTasksfilteredList={mockedCompletedTasks}
        setCompletedTasksSearchQuery={() => {}}
        completedTasksSearchQuery=""
        isClicked={false}
        handleItemView={mockedHandleItemView}
      />
    );
    fireEvent.click(getByTestId("handle-item-1"));
    expect(mockedHandleItemView).toBeCalledTimes(1);
  });
  it("should say `No completed tasks found!` if there's no completed tasks", () => {
    const { getByText } = render(
      <CompletedTasksList
        completedTasksfilteredList={[]}
        setCompletedTasksSearchQuery={() => {}}
        completedTasksSearchQuery=""
        isClicked={false}
        handleItemView={() => {}}
      />
    );
    expect(getByText("No completed tasks found!")).toBeInTheDocument();
  });
  it("should assign proper class name for the completed items", () => {
    const { getByTestId } = render(
      <CompletedTasksList
        completedTasksfilteredList={mockedCompletedTasks}
        setCompletedTasksSearchQuery={() => {}}
        completedTasksSearchQuery=""
        isClicked={true}
        handleItemView={() => {}}
      />
    );
    const itemDOM = getByTestId(2);
    expect(itemDOM).toHaveClass("completed");
  });
});
