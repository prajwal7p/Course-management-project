import axios from "axios";

// In development, Vite proxies /api to the local JSON server. In a deployed
// build, set VITE_API_URL to the public URL of the API (without a trailing /).
const baseURL = (import.meta.env.VITE_API_URL || "/api").replace(/\/$/, "");

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
