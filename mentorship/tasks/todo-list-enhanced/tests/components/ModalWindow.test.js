/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/prefer-screen-queries */
import { cleanup, fireEvent, render } from "@testing-library/react";
import ModalWindow from "../../src/components/ModalWindow";
import React from "react";
import "@testing-library/jest-dom/extend-expect";

describe("ModalWindow test suite", () => {
  afterEach(() => {
    cleanup();
  });
  afterAll(() => {
    document.body.removeChild(portalRoot);
  });

  const mockedCompletedTasks = [
    {
      id: 1,
      name: "name",
      description: "desc",
      deadline: "22",
      dateCompleted: "21",
    },
  ];

  const portalRoot = document.createElement("div");
  portalRoot.id = "modal-window-container";
  document.body.appendChild(portalRoot);

  it("should render Modal Window properly", () => {
    render(
      <ModalWindow
        name=""
        handleSubmit={jest.fn()}
        setName={jest.fn()}
        showModal={true}
        isEditing={false}
        handleModalWindow={jest.fn()}
        error=""
        selectedDate=""
        setSelectedDate={jest.fn()}
        description=""
        errorDate=""
        handleDescription={jest.fn()}
        viewCompletedTasks=""
        completedTasks=""
        viewID=""
      />
    );
    const portalContent = portalRoot.querySelector(".modal-window-container");
    expect(portalContent).toBeInTheDocument();
  });
  it("should call setName function with proper value", () => {
    const mockedSetName = jest.fn();
    const { getByPlaceholderText } = render(
      <ModalWindow
        name=""
        handleSubmit={jest.fn()}
        setName={mockedSetName}
        showModal={true}
        isEditing={false}
        handleModalWindow={jest.fn()}
        error=""
        selectedDate=""
        setSelectedDate={jest.fn()}
        description=""
        errorDate=""
        handleDescription={jest.fn()}
        viewCompletedTasks=""
        completedTasks=""
        viewID=""
      />
    );
    fireEvent.change(getByPlaceholderText("Enter your task..."), {
      target: { value: "value" },
    });
    expect(mockedSetName).toHaveBeenCalledWith("value");
  });
  it("should call setSelectedDate with a proper value", () => {
    const mockedSetSelectedDate = jest.fn();
    const { getByPlaceholderText } = render(
      <ModalWindow
        name=""
        handleSubmit={jest.fn()}
        setName={jest.fn()}
        showModal={true}
        isEditing={false}
        handleModalWindow={jest.fn()}
        error=""
        selectedDate=""
        setSelectedDate={mockedSetSelectedDate}
        description=""
        errorDate=""
        handleDescription={jest.fn()}
        viewCompletedTasks=""
        completedTasks=""
        viewID=""
      />
    );
    fireEvent.change(getByPlaceholderText("Select deadline for your task.."), {
      target: { value: "8/31/2023" },
    });
    expect(mockedSetSelectedDate).toHaveBeenCalledWith(new Date("8/31/2023"));
  });
  it("should render completedTasks properly while viewing completed tasks", () => {
    const { getByTestId } = render(
      <ModalWindow
        name=""
        handleSubmit={jest.fn()}
        setName={jest.fn()}
        showModal={true}
        isEditing={false}
        handleModalWindow={jest.fn()}
        error=""
        selectedDate=""
        setSelectedDate={jest.fn()}
        description=""
        errorDate=""
        handleDescription={jest.fn()}
        viewCompletedTasks={true}
        completedTasks={mockedCompletedTasks}
        viewID={1}
      />
    );
    expect(getByTestId("test-main-container")).toBeInTheDocument();
  });
  it("should not render completedTasks while viewing completed tasks", () => {
    const mockedCompletedTasks = [
      {
        id: 2,
        name: "name",
        description: "desc",
        deadline: "22",
        dateCompleted: "21",
      },
    ];
    const { queryByTestId } = render(
      <ModalWindow
        name=""
        handleSubmit={jest.fn()}
        setName={jest.fn()}
        showModal={true}
        isEditing={false}
        handleModalWindow={jest.fn()}
        error=""
        selectedDate=""
        setSelectedDate={jest.fn()}
        description=""
        errorDate=""
        handleDescription={jest.fn()}
        viewCompletedTasks={true}
        completedTasks={mockedCompletedTasks}
        viewID={1}
      />
    );
    expect(queryByTestId("test-main-container")).not.toBeInTheDocument();
  });
  it("should assign proper class characterCountClassName", () => {
    const { getByTestId } = render(
      <ModalWindow
        name=""
        handleSubmit={jest.fn()}
        setName={jest.fn()}
        showModal={true}
        isEditing={false}
        handleModalWindow={jest.fn()}
        error=""
        selectedDate=""
        setSelectedDate={jest.fn()}
        description={"a".repeat(120)}
        errorDate=""
        handleDescription={jest.fn()}
        viewCompletedTasks={false}
        completedTasks={""}
        viewID={1}
      />
    );
    expect(getByTestId("test-characterCount-className")).toHaveClass(
      "modified"
    );
  });
  it("should assign proper class modalWindowClassName", () => {
    const { getByTestId } = render(
      <ModalWindow
        name=""
        handleSubmit={jest.fn()}
        setName={jest.fn()}
        showModal={false}
        isEditing={false}
        handleModalWindow={jest.fn()}
        error=""
        selectedDate=""
        setSelectedDate={jest.fn()}
        description={"a"}
        errorDate=""
        handleDescription={jest.fn()}
        viewCompletedTasks={false}
        completedTasks={""}
        viewID={1}
      />
    );
    expect(getByTestId("test-modalWindow-className")).toHaveClass("hide-modal");
  });
  it("should assign proper class disabledButtonClassName=modal-window-buttons", () => {
    const { getByTestId } = render(
      <ModalWindow
        name="1202"
        handleSubmit={jest.fn()}
        setName={jest.fn()}
        showModal={false}
        isEditing={false}
        handleModalWindow={jest.fn()}
        error=""
        selectedDate={new Date()}
        setSelectedDate={jest.fn()}
        description={"a"}
        errorDate=""
        handleDescription={jest.fn()}
        viewCompletedTasks={false}
        completedTasks={""}
        viewID={1}
      />
    );

    expect(getByTestId("test-disabledButton-className")).toHaveClass(
      "modal-window-buttons"
    );
  });
  it("should assign proper class disabledButtonClassName=disabled", () => {
    const { getByTestId } = render(
      <ModalWindow
        name={undefined}
        handleSubmit={jest.fn()}
        setName={jest.fn()}
        showModal={false}
        isEditing={false}
        handleModalWindow={jest.fn()}
        error=""
        selectedDate={undefined}
        setSelectedDate={jest.fn()}
        description={"a"}
        errorDate=""
        handleDescription={jest.fn()}
        viewCompletedTasks={false}
        completedTasks={""}
        viewID={1}
      />
    );

    expect(getByTestId("test-disabledButton-className")).toHaveClass(
      "disabled"
    );
  });
  // it("should assign proper class errorMessageClassName", () => {
  //   const { getByTestId } = render(
  //     <ModalWindow
  //       name={undefined}
  //       handleSubmit={jest.fn()}
  //       setName={jest.fn()}
  //       showModal={false}
  //       isEditing={false}
  //       handleModalWindow={jest.fn()}
  //       error={true}
  //       selectedDate={undefined}
  //       setSelectedDate={jest.fn()}
  //       description={""}
  //       errorDate=""
  //       handleDescription={jest.fn()}
  //       viewCompletedTasks={false}
  //       completedTasks={""}
  //       viewID={1}
  //     />
  //   );

  //   expect(getByTestId("error-message-test")).toHaveClass("show");
  // });
  it("should assign proper text when Editing", () => {
    const { getByTestId } = render(
      <ModalWindow
        name="name"
        handleSubmit={jest.fn()}
        setName={jest.fn()}
        showModal={false}
        isEditing={true}
        handleModalWindow={jest.fn()}
        error={true}
        selectedDate=""
        setSelectedDate={jest.fn()}
        description={""}
        errorDate=""
        handleDescription={jest.fn()}
        viewCompletedTasks={false}
        completedTasks={""}
        viewID={1}
      />
    );

    expect(getByTestId("test-editing-text").innerHTML).toBe(
      `Editing task 'name' ...`
    );
  });
  it("should show OK button when viewing completed tasks", () => {
    const { getByText } = render(
      <ModalWindow
        name="name"
        handleSubmit={jest.fn()}
        setName={jest.fn()}
        showModal={true}
        isEditing={false}
        handleModalWindow={jest.fn()}
        error={true}
        selectedDate=""
        setSelectedDate={jest.fn()}
        description={""}
        errorDate=""
        handleDescription={jest.fn()}
        viewCompletedTasks={true}
        completedTasks={mockedCompletedTasks}
        viewID={1}
      />
    );

    expect(getByText("OK")).toBeInTheDocument();
  });
  it("should show proper error message on invalid date", () => {
    const { getByTestId } = render(
      <ModalWindow
        name="name"
        handleSubmit={jest.fn()}
        setName={jest.fn()}
        showModal={true}
        isEditing={false}
        handleModalWindow={jest.fn()}
        error={true}
        selectedDate=""
        setSelectedDate={jest.fn()}
        description={""}
        errorDate={true}
        handleDescription={jest.fn()}
        viewCompletedTasks={false}
        completedTasks={mockedCompletedTasks}
        viewID={1}
      />
    );

    expect(getByTestId("error-message-test").innerHTML).toBe(
      "Please enter a valid date that is today or in the future!"
    );
  });
});
