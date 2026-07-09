// api.js
import axios from "axios";

const API_BASE_URL = "http://192.168.1.111:8080";

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export async function login(password) {
    try {
        const response = await api.post("/auth/login", { password });
        console.log(response.data.token);
        saveToken(response.data.token);
    } catch (error) {
    console.error(error);

    if (error.response) {
        alert(
            `Erro ${error.response.status}: ${JSON.stringify(error.response.data)}`
        );
    } else if (error.request) {
        alert("A requisição foi enviada, mas o servidor não respondeu.");
    } else {
        alert(error.message);
    }

    throw error;
}
}

export function saveToken(token) {
    localStorage.setItem("token", token);
}

export function getToken() {
    return localStorage.getItem("token");
}

export function removeToken() {
    localStorage.removeItem("token");
}

// --- GET / POST ---

export async function get(endpoint) {
    const response = await api.get(endpoint);
    return response.data;
}

export async function post(endpoint, data) {
    const response = await api.post(endpoint, data);
    return response.data;
}

export default api;