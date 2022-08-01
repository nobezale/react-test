import { Login } from "./Login";
// import ReactRouter from "react-router";
import { createMemoryHistory } from "history";
import {
  Router,
  Route,
  MemoryRouter,
  Routes,
  BrowserRouter,
} from "react-router-dom";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const makeSut = () => {
  const history = createMemoryHistory();
  //   const route = "/login/1234";
  //   history.push(route);
  render(
    <MemoryRouter initialEntries={["/login/234"]}>
      <Routes>
        <Route>
          <Route path="/login/:id" element={<Login />} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
};

// function renderWithRouterMatch(
//   ui,
//   {
//     path = "/login/:id", // ie. "/project/:id"
//     route = "/login/aaa", // ie. "/project/ABC123"
//     history = createMemoryHistory({ initialEntries: [route] }),
//   } = {}
// ) {
//   return {
//     ...render(
//       <Router history={history}>
//         <Route path={path} component={ui} />
//       </Router>
//     ),
//   };
// }

describe("<Login />", () => {
  test("Login rendered correctly", () => {
    // const { getByText, getByTestId } = renderWithRouterMatch(Login);
    makeSut();
    // expect(screen.getByText("Login")).toBeInTheDocument();
    expect(screen.getByText("234")).toBeInTheDocument();
    expect(screen.getByTestId("loginId")).toBeDefined();
  });
});
