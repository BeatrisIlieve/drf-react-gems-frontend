import { useShippingDetailsContext } from "../../../../../contexts/ShippingDetailsContext";
import { CountrySelector } from "../CountrySelector/CountrySelector";
import { CitySelector } from "../CitySelector/CitySelector";


export const SelectFields = () => {
    const {selectedCountry} = useShippingDetailsContext()
  return (
    <>
      <CountrySelector />
      {
        selectedCountry && (<CitySelector />)
      }
    </>
  );
};
