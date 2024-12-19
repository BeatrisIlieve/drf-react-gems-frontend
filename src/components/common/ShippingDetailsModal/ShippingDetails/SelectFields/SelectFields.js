import { useShippingDetailsContext } from "../../../../../contexts/ShippingDetailsContext";
import { CountrySelector } from "../CountrySelector/CountrySelector";
import { CitySelector } from "../CitySelector/CitySelector";

export const SelectFields = () => {
  return (
    <>
      <CountrySelector />
      <CitySelector />
    </>
  );
};
