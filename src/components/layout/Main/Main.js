import { Routes, Route } from "react-router-dom";

import { Register } from "../../pages/Register/Register";
import { Collection } from "../../pages/Collection/Collection";
import { Product } from "../../pages/Product/Product";

import "./Main.module.scss";

export const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Collection />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/:slugifiedCategoryTitle/:slugifiedColorTitle"
          element={<Product />}
        />
      </Routes>
    </main>
  );
};
