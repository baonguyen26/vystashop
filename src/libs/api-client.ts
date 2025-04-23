import axios, { AxiosError } from "axios";

export const apiClient = axios.create({
    baseURL: "https://67cf1677823da0212a815bc7.mockapi.io/api/v1/product",
    // withCredentials: true,
});

apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);
