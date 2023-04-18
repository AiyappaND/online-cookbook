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
