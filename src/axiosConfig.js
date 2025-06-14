import axios from "axios";
import store from "./store/store"; // Import Redux store
import { logout } from "./store/authSlice"; // Import logout action

const BASE_URL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // 10 seconds timeout
  headers: { "Content-Type": "application/json" },
});

// Request Interceptor: Attach Token
api.interceptors.request.use(
  (config) => {
    const token = store.getState().auth.authToken; // Get token from Redux store
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor: Handle Errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      if (error.response.status === 403) {
        console.warn("403 Forbidden - Logging out user...");
        
        store.dispatch(logout()); // Dispatch logout action
        
      }
    }
    return Promise.reject(error);
  }
);

export default api;
