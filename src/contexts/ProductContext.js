import { createContext, useContext, useEffect, useMemo, useState } from "react";

export const ProductCardContext = createContext();

export const ProductCardProvider = ({ children }) => {
  const [firstImageIsActive, setFirstImageIsActive] = useState(true);

  const toggleFirstImageIsActiveHandler = () => {
    console.log("HERE")
    setFirstImageIsActive((firstImageIsActive) => !firstImageIsActive);
  };

  const context = {
    firstImageIsActive,
    toggleFirstImageIsActiveHandler,
  };

  return (
    <ProductCardContext.Provider value={context}>
      {children}
    </ProductCardContext.Provider>
  );
};

export const useProductCardContext = () => {
  const context = useContext(ProductCardContext);

  return context;
};
