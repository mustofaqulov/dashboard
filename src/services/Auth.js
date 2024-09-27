import { axiosInstance } from "../utils/config/axios";

export const login = (data) => {
  return axiosInstance.post("/auth/login", data);
};
