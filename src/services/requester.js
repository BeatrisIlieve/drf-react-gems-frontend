import Cookies from "universal-cookie";

const requester = async (method, token, url, data) => {
  const cookies = new Cookies();

  const options = {};

  options.method = method;

  options.headers = {
    "content-type": "application/json",
    "X-CSRFToken": cookies.get("csrftoken"),
  };

  if (method !== "GET") {
    if (data) {
      options.body = JSON.stringify(data);
    }
  }

  if (token) {
    console.log("there is token", token);
    options.headers = {
      ...options.headers,
      Authorization: `Token ${token}`,
    };
  }

  const response = await fetch(url, options);

  if (response.status === 204) {
    return {};
  }

  const result = await response.json();

  if (!response.ok) {
    throw result;
  }

  return result;
};

export const requestFactory = (token) => {
  if (!token) {
    const serializedAuth = localStorage.getItem("authentication");

    if (serializedAuth) {
      const auth = JSON.stringify(serializedAuth);
      token = auth["token"];
    }
  }
  return {
    get: requester.bind(null, "GET", token),
    post: requester.bind(null, "POST", token),
    put: requester.bind(null, "PUT", token),
    patch: requester.bind(null, "PATCH", token),
    delete: requester.bind(null, "DELETE", token),
  };
};
