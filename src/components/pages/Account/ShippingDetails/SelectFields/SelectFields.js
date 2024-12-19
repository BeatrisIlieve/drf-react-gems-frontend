import { useShippingDetailsContext } from "../../../../../contexts/ShippingDetailsContext";
import { CountrySelector } from "../CountrySelector/CountrySelector";
import { CitySelector } from "../CitySelector/CitySelector";

export const SelectFields = () => {
  return (
    <>
      {/* <div className="form-floating mb-3"> */}
        <CountrySelector />
      {/* </div> */}
      {/* <div className="form-floating mb-3"> */}
        <CitySelector />
      {/* </div> */}
    </>
  );
};
