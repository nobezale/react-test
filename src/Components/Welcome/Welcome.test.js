import { Welcome } from "./Welcome";
// import ReactRouter from "react-router";
import { createMemoryHistory } from "history";
import {
  BrowserRouter,
  Router,
  Route,
  Routes,
  MemoryRouter,
} from "react-router-dom";

import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
const gender = "female";
const isMaybe = false;
const answers = {};

const makeSut = () => {
  return render(<Welcome />);
};

describe("<Login />", () => {
  test("Login rendered correctly", () => {
    const { getByText } = makeSut();
    expect(screen.getByText("Welcome")).toBeInTheDocument();
  });

  // describe(() => {
  //   test("...", () => {
  //     jest.spyOn(ReactRouter, "useParams").mockReturnValue({ id: "1234" });
  //     // id = "1234" in your tested component
  //   });
});
