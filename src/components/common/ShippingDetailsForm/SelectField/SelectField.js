import { CountrySelector } from "./CountrySelector/CountrySelector";
import { CitySelector } from "./CitySelector/CitySelector";

export const SelectField = ({
  userData,
  updateUserData,
  changeHandler,
  formItems,
  updateFormItems,
}) => {
  return (
    <>
      <CountrySelector
        userData={userData}
        updateUserData={updateUserData}
        changeHandler={changeHandler}
        formItems={formItems}
        updateFormItems={updateFormItems}
      />
      <CitySelector
        userData={userData}
        updateUserData={updateUserData}
        changeHandler={changeHandler}
        formItems={formItems}
        updateFormItems={updateFormItems}
      />
    </>
  );
};
