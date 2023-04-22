import {createAsyncThunk} from "@reduxjs/toolkit";
import * as recipeService from "./recipe-services.js";


export const createRecipeThunk = createAsyncThunk(
    "recipes/createRecipe", async (recipe) => {
        return await recipeService.createRecipe(recipe);
    }
);

export const findOneRecipeThunk = createAsyncThunk(
    "recipes/findOneRecipe", async (rid) => {
        return await recipeService.findOneRecipe(rid);
    });

export const findLocalRecipesByNameThunk = createAsyncThunk(
    "recipes/findLocalRecipeByTitle", async (recipeTitle) => {
        return await recipeService.findLocalRecipesByTitle(recipeTitle);
    }
)

export const getLatestRecipesThunk = createAsyncThunk(
    "recipes/getLatestRecipes", async () => {
        return await recipeService.getLatestRecipes();
    }
)

export const getRecipesByAuthorUsernameThunk = createAsyncThunk(
    "recipes/getRecipesByUsername", async (username) => {
        return await recipeService.getRecipesByUsername(username);
    }
)

export const findRemoteRecipesByNameThunk = createAsyncThunk(
    "recipes/findRemoteRecipeByTitle", async (recipeTitle) => {
        return await recipeService.findRemoteRecipesByTitle(recipeTitle);
    }
)
