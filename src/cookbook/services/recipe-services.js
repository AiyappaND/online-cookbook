import axios from "axios";

const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;
const RECIPES_URL = `${SERVER_API_URL}/recipes`;

export const createRecipe = async (recipe) => {
    const response = await axios.post(`${RECIPES_URL}`, recipe);
    return response.data;
};

export const findOneRecipe = async (recipeId) => {
    const response = await axios.get(`${RECIPES_URL}/${recipeId}`);
    return response.data;
}
