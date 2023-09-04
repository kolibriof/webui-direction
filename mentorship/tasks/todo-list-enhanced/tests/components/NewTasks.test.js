/* eslint-disable testing-library/prefer-screen-queries */
import { cleanup, fireEvent, render } from "@testing-library/react";
import NewTasks from "../../src/components/NewTasks";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

jest.mock("react-icons/ai", () => ({
  AiOutlineEdit: () => {
    return <div>EditIcon</div>;
  },
  AiOutlineDelete: () => {
    return <div>DeleteIcon</div>;
  },
}));

jest.mock("react-icons/md", () => ({
  MdOutlineTaskAlt: () => {
    return <></>;
  },
  MdDownloadDone: () => {
    return <div>DoneButton</div>;
  },
}));

jest.mock("../../src/components/ProgressContext", () => ({
  useTaskProgressContext: () => ({
    formattedDate: "2023-08-30",
    formattedCompletedDate: "2023-09-20",
  }),
}));

jest.mock("../../src/components/List", () => {
  return jest.fn(() => <div data-testid="list-component">List</div>);
});

describe("NewTasks component suite", () => {
  afterEach(() => cleanup());

  afterAll(() => jest.clearAllMocks());

  it("should render component properly", () => {
    render(
      <NewTasks
        searchQuery={""}
        setSearchQuery={jest.fn()}
        handleModalWindow={jest.fn()}
        list={[]}
        editItem={jest.fn()}
        removeItem={jest.fn()}
        handleDoneTasks={jest.fn()}
        filteredList={[]}
        setShowModal={jest.fn()}
        deleteID={1}
        setDeleteID={jest.fn()}
        doneTask={""}
        setDoneTask={jest.fn()}
        setConfirmationState={jest.fn()}
        confirmationState={""}
        showConfirmationModal={false}
        setShowConfirmationModal={jest.fn()}
      />
    );
  });
  it("should render the List component properly", () => {
    const { getByTestId } = render(
      <NewTasks
        searchQuery={false}
        setSearchQuery={jest.fn()}
        handleModalWindow={jest.fn()}
        list={["A", "A"]}
        editItem={jest.fn()}
        removeItem={jest.fn()}
        handleDoneTasks={jest.fn()}
        filteredList={[]}
        setShowModal={jest.fn()}
        deleteID={1}
        setDeleteID={jest.fn()}
        doneTask={""}
        setDoneTask={jest.fn()}
        setConfirmationState={jest.fn()}
        confirmationState={""}
        showConfirmationModal={false}
        setShowConfirmationModal={jest.fn()}
      />
    );
    expect(getByTestId("list-component")).toBeInTheDocument();
  });
  it("should properly render the completed tasks", () => {
    const { queryAllByTestId } = render(
      <NewTasks
        searchQuery={"one"}
        setSearchQuery={jest.fn()}
        handleModalWindow={jest.fn()}
        list={[]}
        editItem={jest.fn()}
        removeItem={jest.fn()}
        handleDoneTasks={jest.fn()}
        filteredList={["A", "A"]}
        setShowModal={jest.fn()}
        deleteID={1}
        setDeleteID={jest.fn()}
        doneTask={""}
        setDoneTask={jest.fn()}
        setConfirmationState={jest.fn()}
        confirmationState={""}
        showConfirmationModal={false}
        setShowConfirmationModal={jest.fn()}
      />
    );

    expect(queryAllByTestId("completed-tasks-list")).toHaveLength(2);
  });
  it("should mark out-of-deadline tasks in red", () => {
    const mockedFilteredList = [{ id: 1, title: "Title", date: "2023-08-22" }];
    const { getByText } = render(
      <NewTasks
        searchQuery={"one"}
        setSearchQuery={jest.fn()}
        handleModalWindow={jest.fn()}
        list={[]}
        editItem={jest.fn()}
        removeItem={jest.fn()}
        handleDoneTasks={jest.fn()}
        filteredList={mockedFilteredList}
        setShowModal={jest.fn()}
        deleteID={1}
        setDeleteID={jest.fn()}
        doneTask={""}
        setDoneTask={jest.fn()}
        setConfirmationState={jest.fn()}
        confirmationState={""}
        showConfirmationModal={false}
        setShowConfirmationModal={jest.fn()}
      />
    );

    expect(getByText("2023-08-22")).toHaveClass(`out-of-deadline`);
  });
  it("should run the editItem function on Click", () => {
    const mockedFilteredList = [{ id: 1, title: "Title", date: "2023-08-22" }];
    const mockedEditItem = jest.fn();
    const { getByText } = render(
      <NewTasks
        searchQuery={"one"}
        setSearchQuery={jest.fn()}
        handleModalWindow={jest.fn()}
        list={[]}
        editItem={mockedEditItem}
        removeItem={jest.fn()}
        handleDoneTasks={jest.fn()}
        filteredList={mockedFilteredList}
        setShowModal={jest.fn()}
        deleteID={1}
        setDeleteID={jest.fn()}
        doneTask={""}
        setDoneTask={jest.fn()}
        setConfirmationState={jest.fn()}
        confirmationState={""}
        showConfirmationModal={false}
        setShowConfirmationModal={jest.fn()}
      />
    );
    fireEvent.click(getByText("EditIcon"));
    expect(mockedEditItem).toBeCalledWith(mockedFilteredList[0].id);
  });
  it("should properly delete the item on Click", () => {
    const mockedFilteredList = [{ id: 1, title: "Title", date: "2023-08-22" }];
    const mockedSetShowConfirmationModal = jest.fn();
    const mockedSetConfirmationState = jest.fn();
    const mockedSetDeleteId = jest.fn();
    const { getByText } = render(
      <NewTasks
        searchQuery={"one"}
        setSearchQuery={jest.fn()}
        handleModalWindow={jest.fn()}
        list={[]}
        editItem={jest.fn()}
        removeItem={jest.fn()}
        handleDoneTasks={jest.fn()}
        filteredList={mockedFilteredList}
        setShowModal={jest.fn()}
        deleteID={1}
        setDeleteID={mockedSetDeleteId}
        doneTask={""}
        setDoneTask={jest.fn()}
        setConfirmationState={mockedSetConfirmationState}
        confirmationState={""}
        showConfirmationModal={false}
        setShowConfirmationModal={mockedSetShowConfirmationModal}
      />
    );
    fireEvent.click(getByText("DeleteIcon"));
    expect(mockedSetConfirmationState).toBeCalledWith(1);
    expect(mockedSetShowConfirmationModal).toBeCalledWith(true);
    expect(mockedSetDeleteId).toBeCalledWith(mockedFilteredList[0].id);
  });
  it("should properly Complete the tasks", () => {
    const mockedFilteredList = [
      { id: 1, title: "Title", date: "2023-08-22", description: "desc" },
    ];
    const mockedSetShowConfirmationModal = jest.fn();
    const mockedSetConfirmationState = jest.fn();
    const mockedSetDoneTask = jest.fn();
    const { getByText } = render(
      <NewTasks
        searchQuery={"one"}
        setSearchQuery={jest.fn()}
        handleModalWindow={jest.fn()}
        list={[]}
        editItem={jest.fn()}
        removeItem={jest.fn()}
        handleDoneTasks={jest.fn()}
        filteredList={mockedFilteredList}
        setShowModal={jest.fn()}
        deleteID={1}
        setDeleteID={jest.fn()}
        doneTask={""}
        setDoneTask={mockedSetDoneTask}
        setConfirmationState={mockedSetConfirmationState}
        confirmationState={""}
        showConfirmationModal={false}
        setShowConfirmationModal={mockedSetShowConfirmationModal}
      />
    );
    fireEvent.click(getByText("DoneButton"));
    expect(mockedSetShowConfirmationModal).toBeCalledWith(true);
    expect(mockedSetConfirmationState).toBeCalledWith(null);
    expect(mockedSetDoneTask).toBeCalledWith({
      id: mockedFilteredList[0].id,
      name: mockedFilteredList[0].title,
      dateCompleted: "2023-09-20",
      deadline: mockedFilteredList[0].date,
      description: mockedFilteredList[0].description,
    });
  });
  it("should change the search value", () => {
    const mockedSearchQuery = "o";
    const mockedSetSearchQuery = jest.fn();
    const { getByPlaceholderText } = render(
      <NewTasks
        searchQuery={mockedSearchQuery}
        setSearchQuery={mockedSetSearchQuery}
        handleModalWindow={jest.fn()}
        list={[]}
        editItem={jest.fn()}
        removeItem={jest.fn()}
        handleDoneTasks={jest.fn()}
        filteredList={jest.fn()}
        setShowModal={jest.fn()}
        deleteID={1}
        setDeleteID={jest.fn()}
        doneTask={""}
        setDoneTask={jest.fn()}
        setConfirmationState={jest.fn()}
        confirmationState={""}
        showConfirmationModal={false}
        setShowConfirmationModal={jest.fn()}
      />
    );
    const searchInput = getByPlaceholderText("Search by the task name...");
    userEvent.type(searchInput, mockedSearchQuery);

    expect(mockedSetSearchQuery).toBeCalledWith(mockedSearchQuery + "o");
    expect(getByPlaceholderText("Search by the task name...").value).toBe(
      mockedSearchQuery
    );
  });
});
