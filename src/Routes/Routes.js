import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Welcome } from "../Components/Welcome/Welcome";
import { Login } from "../Components/Login/Login";
export const CustomRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login/:id" element={<Login />} />
    </Routes>
  </BrowserRouter>
);
