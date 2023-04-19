import { createSlice } from "@reduxjs/toolkit";
import {
    createRecipeThunk, findOneRecipeThunk
} from "../services/recipe-thunks";


const authSlice = createSlice({
    name: "recipe",
    initialState: { currentRecipe: null },
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
