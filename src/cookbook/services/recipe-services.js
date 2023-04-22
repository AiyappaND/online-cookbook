import axios from "axios";

const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;
const RAPID_API_HOST = process.env.REACT_APP_X_RAPID_API_HOST;
const RAPID_API_KEY = process.env.REACT_APP_X_RAPID_API_KEY;
const RECIPES_URL = `${SERVER_API_URL}/recipes`;
const REMOTE_RECIPES_SEARCH = `https://${RAPID_API_HOST}/recipes`

export const createRecipe = async (recipe) => {
    const response = await axios.post(`${RECIPES_URL}`, recipe);
    return response.data;
};

export const findOneRecipe = async (recipeId) => {
    const response = await axios.get(`${RECIPES_URL}/getOne/${recipeId}`);
    return response.data;
}

export const findLocalRecipesByTitle = async (recipeTitle) => {
    const response = await axios.get(`${RECIPES_URL}/findLocal/${recipeTitle}`);
    return response.data;
}

export const findRemoteRecipesByTitle = async (recipeTitle) => {
    const options = {
        method: 'GET',
        url: `${REMOTE_RECIPES_SEARCH}/complexSearch`,
        params: {
            query: recipeTitle,
        },
        headers: {
            'X-RapidAPI-Key': RAPID_API_KEY,
            'X-RapidAPI-Host': RAPID_API_HOST
        }
    };
    const response = await axios.request(options);
    return response.data;
}

export const getLatestRecipes = async () => {
    const response = await axios.get(`${RECIPES_URL}/`);
    return response.data;
}

export const getRecipesByUsername = async (username) => {
    const response = await axios.get(`${RECIPES_URL}/findByUsername/${username}`);
    return response.data;
}

export const findRemoteRecipeDetails = async (recipeId) => {
    const options = {
        method: 'GET',
        url: `${REMOTE_RECIPES_SEARCH}/${recipeId}/information`,
        headers: {
            'X-RapidAPI-Key': RAPID_API_KEY,
            'X-RapidAPI-Host': RAPID_API_HOST
        }
    };
    const response = await axios.request(options);
    return response.data;
}