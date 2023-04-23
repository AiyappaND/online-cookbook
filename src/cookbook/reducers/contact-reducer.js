import { createSlice } from "@reduxjs/toolkit";

import {
    getContactThunk,updateContactThunk, createContactThunk
} from "../services/contact-thunks";


const authSlice = createSlice({
    name: "bookmarks",
    initialState: { currentContact: {}, listOfContacts: []},
    reducers: {},
    extraReducers: {
        [getContactThunk.fulfilled]: (state, { payload }) => {
            state.listOfContacts = payload;
        },
        [createContactThunk.fulfilled]: (state, { payload }) => {
            state.currentContact = payload;
        },
        [updateContactThunk.fulfilled]: (state, { payload }) => {
            state.currentContact = payload;
        },
    },
});

export default authSlice.reducer;
