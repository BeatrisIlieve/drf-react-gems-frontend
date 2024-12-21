import { useState, useEffect } from "react";
import { useAuthenticationContext } from "../contexts/AuthenticationContext";

export const useUserData = ({ fetchFunction }) => {
  const { userId } = useAuthenticationContext();

  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetchFunction(userId)
      .then((data) => {
        setUserData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [fetchFunction]);

  const updateUserData = (name, value) => {
    setUserData((prevFormItems) => ({
      ...prevFormItems,
      [name]: value,
    }));
  };

  return { userData, updateUserData };
};
