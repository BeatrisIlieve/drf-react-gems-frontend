import { requestFactory } from "./requester";

import { HOST } from "../constants/host";

const baseUrl = `${HOST}/api/profile`;

export const userProfileServiceFactory = (token) => {
  const request = requestFactory(token);

  return {
    create: (data) => request.post(`${baseUrl}/create/`, data),
  };
};
