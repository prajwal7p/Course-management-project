import axios from "axios";

// In development, Vite proxies /api to the local JSON server. Production uses
// the deployed API unless VITE_API_URL supplies another public API URL.
const defaultBaseURL = import.meta.env.DEV
  ? "/api"
  : "https://course-management-project-2.onrender.com";
const baseURL = (import.meta.env.VITE_API_URL || defaultBaseURL).replace(/\/$/, "");

const api = axios.create({
  baseURL,
  timeout: 10000,
});

export const getApiErrorMessage = error => {
  if (error.code === "ECONNABORTED") {
    return "The server took too long to respond. Please try again.";
  }

  if (!error.response) {
    return "Cannot reach the course service. Check that the API is running and configured.";
  }

  return error.response.data?.message || "The request could not be completed.";
};

export default api;
