import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [state, setState] = useState(() => {
    const persistedStatesSerialized = localStorage.getItem(key);
    if (persistedStatesSerialized) {
      const persistedState = JSON.parse(persistedStatesSerialized);

      return persistedState;
    }

    return initialValue;
  });

  const setLocalStorageState = (value) => {
    setState(value);

    localStorage.setItem(key, JSON.stringify(value));
  };

  return [state, setLocalStorageState];
};
