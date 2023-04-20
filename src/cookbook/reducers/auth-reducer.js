import { createSlice } from "@reduxjs/toolkit";
import {
    loginThunk, logoutThunk, registerThunk,
    profileThunk, updateUserThunk, anonymousProfileThunk,
} from "../services/auth-thunks";


const authSlice = createSlice({
    name: "auth",
    initialState: { currentUser: null, anonymousUser: null },
    reducers: {},
    extraReducers: {
        [loginThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
        },
        [logoutThunk.fulfilled]: (state) => {
            state.currentUser = null;
        },
        [profileThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
        },
        [updateUserThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
        },
        [registerThunk.fulfilled]: (state, { payload }) => {
            state.currentUser = payload;
        },
        [anonymousProfileThunk.fulfilled]: (state, {payload}) => {
            state.anonymousUser = payload;
        }
    },
});

export default authSlice.reducer;
