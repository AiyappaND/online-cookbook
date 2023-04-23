import axios from "axios";

const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;
const CONTACT_URL = `${SERVER_API_URL}/contact`;


export const getForms = async () => {
    const response = await axios.get(`${CONTACT_URL}`);
    return response.data;
};

export const createForm = async (form) => {
    const response = await axios.post(`${CONTACT_URL}`, form);
    return response.data;
};


export const updateForm = async (form) => {
    const response = await axios.put(`${CONTACT_URL}/${form._id}`, form);
    return response.data;
};
