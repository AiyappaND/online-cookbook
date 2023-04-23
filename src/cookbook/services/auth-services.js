import axios from "axios";

const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;
const USERS_URL = `${SERVER_API_URL}/users`;


const api = axios.create({ withCredentials: true });


export const login = async ({ username, password }) => {
    const response = await api.post(`${USERS_URL}/login`, { username, password });
    return response.data;
};

export const logout = async () => {
    const response = await api.post(`${USERS_URL}/logout`);
    return response.data;
};


export const profile = async () => {
    const response = await api.post(`${USERS_URL}/profile`);
    return response.data;
};

export const anonymousProfile = async (username) => {
    const response = await api.get(`${USERS_URL}/${username}`);
    return response.data;
}

 
export const updateUser = async (user) => {
    const response = await api.put(`${USERS_URL}/${user._id}`, user);
    return response.data;
};


export const registerUser = async (user) => {
    const response = await api.post(`${USERS_URL}/register`, user);
    return response.data;
}

export const contact = async ({ name, email, subject, message }) => {
    const response = await api.post(`${USERS_URL}/contact_us`, { name, email, subject, message });
    return response.data;
};

export const contactList= async () => {
    const response = await api.post(`${USERS_URL}/get_contact_us`);
    return response.data;
};

export const contactListUpdate= async (id) => {
    const response = await api.put(`${USERS_URL}/contactUs/${id}`);
    return response.data;
};
