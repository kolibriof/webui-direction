import { render } from "@testing-library/react";
import ModalWindow from "../../src/components/ModalWindow";
import React from "react";
import "@testing-library/jest-dom/extend-expect";

describe("ModalWindow test suite", () => {
  it("should render Modal Window properly", () => {
    render(<ModalWindow />);
  });
});
