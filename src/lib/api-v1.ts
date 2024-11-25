import axios from "axios";

export const apiV1 = axios.create({
  baseURL: "http://localhost:9000/api/v1",
});

apiV1.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
