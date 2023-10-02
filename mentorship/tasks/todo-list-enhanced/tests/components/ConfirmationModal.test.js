/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/prefer-screen-queries */
import { cleanup, fireEvent, render } from "@testing-library/react";
import ConfirmationModal from "../../src/components/ConfirmationModal";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { act } from "react-test-renderer";

describe("ConfirmationModal test suite", () => {
  afterEach(() => cleanup());
  it("should render the component", () => {
    render(
      <ConfirmationModal
        showConfirmationModal={true}
        confirmationState={1}
        removeItem={jest.fn()}
        handleDoneTasks={jest.fn()}
        setShowConfirmationModal={jest.fn()}
        confirmationMessage={"Task has been deleted successfully!"}
        setConfirmationMessage={jest.fn()}
      />
    );
  });
  it("should call the delete function", async () => {
    const mockedDeleteFn = jest.fn();
    const { getByText } = render(
      <ConfirmationModal
        showConfirmationModal={true}
        confirmationState={1}
        removeItem={mockedDeleteFn}
        handleDoneTasks={jest.fn()}
        setShowConfirmationModal={jest.fn()}
        confirmationMessage={""}
        setConfirmationMessage={jest.fn()}
      />
    );
    const yesButton = getByText("YES");
    fireEvent.click(yesButton);
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1500));
    });
    expect(mockedDeleteFn).toHaveBeenCalledTimes(1);
  });
  it("should call the complete function", async () => {
    const mockedCompleteFn = jest.fn();
    const { getByText } = render(
      <ConfirmationModal
        showConfirmationModal={true}
        confirmationState={0}
        removeItem={jest.fn()}
        handleDoneTasks={mockedCompleteFn}
        setShowConfirmationModal={jest.fn()}
        confirmationMessage={""}
        setConfirmationMessage={jest.fn()}
      />
    );
    const yesButton = getByText("YES");
    fireEvent.click(yesButton);
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1500));
    });
    expect(mockedCompleteFn).toHaveBeenCalledTimes(1);
  });
  it("should close if the NO button is clicked", async () => {
    const mockedSetShowConfirmationModal = jest.fn();
    const { getByText } = render(
      <ConfirmationModal
        showConfirmationModal={true}
        confirmationState={0}
        removeItem={jest.fn()}
        handleDoneTasks={jest.fn()}
        setShowConfirmationModal={mockedSetShowConfirmationModal}
        confirmationMessage={""}
        setConfirmationMessage={jest.fn()}
      />
    );
    const noButton = getByText("NO");
    fireEvent.click(noButton);
    expect(mockedSetShowConfirmationModal).toHaveBeenCalledWith(false);
  });
  it("should assign `show-modal` class name for the DIV", () => {
    const { container } = render(
      <ConfirmationModal
        showConfirmationModal={true}
        confirmationState={0}
        removeItem={jest.fn()}
        handleDoneTasks={jest.fn()}
        setShowConfirmationModal={() => {}}
        confirmationMessage={""}
        setConfirmationMessage={jest.fn()}
      />
    );
    const divDOM = container.querySelector("div").className;
    expect(divDOM).toBe("modal-window-container show-modal");
  });
  it("should assign `hide-modal` class name for the DIV", () => {
    const { container } = render(
      <ConfirmationModal
        showConfirmationModal={false}
        confirmationState={0}
        removeItem={jest.fn()}
        handleDoneTasks={jest.fn()}
        setShowConfirmationModal={() => {}}
        confirmationMessage={""}
        setConfirmationMessage={jest.fn()}
      />
    );
    const divDOM = container.querySelector("div").className;
    expect(divDOM).toBe("modal-window-container hide-modal");
  });
});
