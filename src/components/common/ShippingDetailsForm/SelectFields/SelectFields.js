import { CountrySelector } from "./CountrySelector/CountrySelector";
import { CitySelector } from "./CitySelector/CitySelector";

export const SelectFields = ({ userData, updateUserData }) => {
  return (
    <>
      <CountrySelector userData={userData} updateUserData={updateUserData} />
      <CitySelector userData={userData} updateUserData={updateUserData} />
    </>
  );
};
