import axios, { AxiosError } from "axios";

export const apiClient = axios.create({
  baseURL: "/api/products",
});

apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);
