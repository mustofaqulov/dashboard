// src/utils/config/axios.js
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com/", // Replace with your actual backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to attach token if available
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`; // Adjust based on your backend's expected format
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.request.use((config) => {
  let token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor for global error handling (optional)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Optionally handle specific status codes
    return Promise.reject(error);
  }
);
