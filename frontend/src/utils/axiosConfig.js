import axios from "axios";

// Create an Axios instance
const instance = axios.create({
    baseURL: "http://localhost:3000", // Replace with your backend URL
});

// Add a request interceptor
instance.interceptors.request.use(
    (config) => {
        // Get token from localStorage
        const token = localStorage.getItem("token");
        if (token) {
            // Attach token to headers
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        // Handle request errors
        return Promise.reject(error);
    }
);

// Add a response interceptor
instance.interceptors.response.use(
    (response) => response,
    (error) => {
        // Handle response errors globally
        if (error.response && error.response.status === 401) {
            // Redirect to login if unauthorized
            window.location.href = "/login";
        }
        return Promise.reject(error);
    }
);

export default instance;
