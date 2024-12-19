import { useShippingDetailsContext } from "../../../../../contexts/ShippingDetailsContext";
import { CountrySelector } from "../CountrySelector/CountrySelector";
import { CitySelector } from "../CitySelector/CitySelector";

export const SelectFields = () => {
  const {
    userData,
    updateSelectedCountry,
    countryError,
    updateCountryError,
    updateSelectedCity,
    cityError,
    updateCityError,
  } = useShippingDetailsContext();
  return (
    <>
      <div className="form-floating mb-3">
        <CountrySelector
          selectedCountry={userData.country}
          updateSelectedCountry={updateSelectedCountry}
          error={countryError}
          setError={updateCountryError}
        />
      </div>
      <div className="form-floating mb-3">
        <CitySelector
          selectedCity={userData.city}
          updateSelectedCity={updateSelectedCity}
          error={cityError}
          setError={updateCityError}
        />
      </div>
    </>
  );
};
