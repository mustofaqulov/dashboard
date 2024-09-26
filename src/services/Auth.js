// src/services/Auth.js
import { axiosInstance } from "../utils/config/axios";

// Login Function
export const login = (data) => {
  return axiosInstance.post("/auth/login", data);
};
