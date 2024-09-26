import { axiosInstance } from "../utils/config/axios";

export function getUsers() {
  return axiosInstance.get("users");
}
