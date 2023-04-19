import { createSlice } from "@reduxjs/toolkit";
import {
    createRecipeThunk, findOneRecipeThunk
} from "../services/recipe-thunks";

import recipeArray from "../recipe-list/recipes.json"


const authSlice = createSlice({
    name: "recipe",
    initialState: { currentRecipe: null, recipeList: recipeArray},
    reducers: {},
    extraReducers: {
        [createRecipeThunk.fulfilled]: (state, { payload }) => {
            state.currentRecipe = payload;
        },
        [findOneRecipeThunk.fulfilled]: (state, { payload }) => {
            state.currentRecipe = payload;
        },
    },
});

export default authSlice.reducer;
