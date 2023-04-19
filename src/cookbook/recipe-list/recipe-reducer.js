import { createSlice } from "@reduxjs/toolkit";
import recipeArray from "./recipes.json";

const recipeSlice = createSlice({
    name: "recipe",
    initialState: recipeArray
});

export default recipeSlice.reducer;