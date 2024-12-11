import { requestFactory } from "./requester";

import { HOST } from "../constants/host";

const baseUrl = `${HOST}/api/products`;

export const productServiceFactory = (token) => {
  const request = requestFactory(token);

  return {
    getList: (categoryId, colorId) =>
      request.get(`${baseUrl}/list/?category=${categoryId}&color=${colorId}`),
    getDetails: (categoryId, colorId) =>
      request.get(
        `${baseUrl}/details/?category=${categoryId}&color=${colorId}`
      ),
  };
};
