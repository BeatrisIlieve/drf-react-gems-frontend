import { Routes, Route } from "react-router-dom";

import { Collection } from "../../pages/Collection/Collection";
import { Product } from "../../pages/Product/Product";

import { Account } from "../../pages/Account/Account";

import "./Main.module.scss";

export const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Collection />} />
        <Route path="/account" element={<Account />} />
        <Route
          path="/:slugifiedCategoryTitle/:slugifiedColorTitle"
          element={<Product />}
        />
      </Routes>
    </main>
  );
};
