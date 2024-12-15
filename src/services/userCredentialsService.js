import { requestFactory } from "./requester";

import { HOST } from "../constants/host";

const baseUrl = `${HOST}/api/auth`;

export const userCredentialsServiceFactory = (token) => {
  const request = requestFactory(token);

  return {
    register: (data) => request.post(`${baseUrl}/register/`, data),
    login: (data) => request.post(`${baseUrl}/login/`, data),

    emailCheck: (data) => request.post(`${baseUrl}/email-check/`, data),
  };
};
