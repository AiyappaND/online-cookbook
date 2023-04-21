import { createSlice } from "@reduxjs/toolkit";

import {
    createOrUpdateBookmarkThunk,
    getBookmarkThunk,
} from "../services/bookmark-thunks";


const authSlice = createSlice({
    name: "bookmarks",
    initialState: { currentBookmarks: []},
    reducers: {},
    extraReducers: {
        [createOrUpdateBookmarkThunk.fulfilled]: (state, { payload }) => {
            state.currentBookmarks = payload;
        },
        [getBookmarkThunk.fulfilled]: (state, { payload }) => {
            state.currentBookmarks = payload;
        },
    },
});

export default authSlice.reducer;
