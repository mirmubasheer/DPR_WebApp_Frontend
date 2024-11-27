import axios from "axios";
import Cookies from "js-cookie";


export const http = axios.create({
  baseURL: "http://localhost:8081", 
  // baseURL: "https://api.dprprop.com", 
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json, text/plain, */*",
  },
});


http.interceptors.request.use((config) => {
  const token = Cookies.get("access_token");


  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  if (config.data instanceof FormData) {
    delete config.headers["Content-Type"];
  } else {
    config.headers["Content-Type"] = "application/json";
  }

  
  return config;
});


http.interceptors.response.use(
  function (response) {
    return response;
  },
  function (err) {
    if (err.message === "Network Error") {
      alert("Network Error");
    } else if (err.response.status === 401) {
      Cookies.remove("access_token");
      localStorage.clear();
      window.location.href = "/login";
    }
    return Promise.reject(err);
  }
);
