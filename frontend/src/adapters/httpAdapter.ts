import axios from "axios";

const api = axios.create();

const httpAdapter = {
  get: <T>(url: string, params = {}) =>
    api.get<T>(url, {
      params,
    }),
  post: <T>(url: string, data: any) =>
    api.post<T>(url, data, {
      headers: {
        "Content-Type": "application/json",
      },
    }),
};

export default httpAdapter;
