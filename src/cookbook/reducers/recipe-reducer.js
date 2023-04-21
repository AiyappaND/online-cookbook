import { createSlice } from "@reduxjs/toolkit";
import {
    createRecipeThunk,
    findOneRecipeThunk,
    findLocalRecipesByNameThunk,
    getLatestRecipesThunk,
    getRecipesByAuthorUsernameThunk
} from "../services/recipe-thunks";


const authSlice = createSlice({
    name: "recipe",
    initialState: { currentRecipe: null, latestRecipeList: [], searchedLocalRecipeList: [], searchedRemoteRecipeList: [], authorRecipeList: []},
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
        [getLatestRecipesThunk.fulfilled]: (state, { payload }) => {
            state.latestRecipeList = payload;
        },
        [getRecipesByAuthorUsernameThunk.fulfilled]: (state, { payload }) => {
            state.authorRecipeList = payload;
        },
    },
});

export default authSlice.reducer;
