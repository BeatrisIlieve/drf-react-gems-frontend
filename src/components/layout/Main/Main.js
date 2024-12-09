import { Routes, Route } from "react-router-dom";

import { Register } from "../../pages/Register/Register";

import "./Main.module.scss"

export const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
    </main>
  );
};
