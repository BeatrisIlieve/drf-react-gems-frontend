import { requestFactory } from "./requester";

import { HOST } from "../constants/host";

const baseUrl = `${HOST}/api/shipping-details`;

export const userShippingDetailsServiceFactory = (token) => {
  const request = requestFactory(token);

  return {
    create: (data) => request.post(`${baseUrl}/create/`, data),
  };
};
