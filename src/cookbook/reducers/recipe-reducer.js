import { createSlice } from "@reduxjs/toolkit";
import {
    createRecipeThunk, findOneRecipeThunk, findLocalRecipesByNameThunk, getLatestRecipesThunk
} from "../services/recipe-thunks";


const authSlice = createSlice({
    name: "recipe",
    initialState: { currentRecipe: null, latestRecipeList: [], searchedLocalRecipeList: [], searchedRemoteRecipeList: []},
    reducers: {},
    extraReducers: {
        [createRecipeThunk.fulfilled]: (state, { payload }) => {
            state.currentRecipe = payload;
        },
        [findOneRecipeThunk.fulfilled]: (state, { payload }) => {
            state.currentRecipe = payload;
        },
        [findLocalRecipesByNameThunk.fulfilled]: (state, { payload }) => {
            state.searchedLocalRecipeList = payload;
        },
        [getLatestRecipesThunk.fulfilled]: (state, { payload }) => {
            state.latestRecipeList = payload;
        },
    },
});

export default authSlice.reducer;
