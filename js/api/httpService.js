import fetchService from "./fetchService.js";

function fetchFunction() {
  const get = (url, options = {}) => {
    const response = fetchService(url, {
      method: "GET",
      ...options,
    });
    return response;
  };

  const post = (url, data, options = {}) => {
    const response = fetchService(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        ...options.headers,
      },
    });
    return response;
  };
  const put = (url, data, options = {}) => {
    const response = fetchService(url, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        ...options.headers,
      },
    });
    return response;
  };

  return { get, post, put };
}

export const customFetch = fetchFunction();
