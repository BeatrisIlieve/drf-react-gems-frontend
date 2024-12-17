import { requestFactory } from "./requester";

import { HOST } from "../constants/host";

const baseUrl = `${HOST}/api/shipping-details`;

export const userShippingDetailsServiceFactory = (token) => {
  const request = requestFactory(token);

  return {

    get: () => request.get(`${baseUrl}/users/`),
    put: (data) => request.put(`${baseUrl}/users-update/`, data),
    create: (data) => request.post(`${baseUrl}/create/`, data),

    getCountries: () => request.get(`${baseUrl}/countries/`),
  };
};
