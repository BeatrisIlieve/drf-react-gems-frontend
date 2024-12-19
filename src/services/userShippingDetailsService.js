import { requestFactory } from "./requester";

import { HOST } from "../constants/host";

const baseUrl = `${HOST}/api/shipping-details`;

export const userShippingDetailsServiceFactory = (token) => {
  const request = requestFactory(token);

  return {
    get: (id) => request.get(`${baseUrl}/${id}/`),
    put: (id, data) => request.put(`${baseUrl}/${id}/`, data),
    create: (data) => request.post(`${baseUrl}/create/`, data),

    getCountries: () => request.get(`${baseUrl}/countries/`),
    getCities: (selectedCountry) =>
      request.get(`${baseUrl}/cities/?country=${selectedCountry}`),
  };
};
