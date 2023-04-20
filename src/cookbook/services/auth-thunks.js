import {createAsyncThunk} from "@reduxjs/toolkit";
import * as authService from "./auth-services";


export const loginThunk = createAsyncThunk(
    "user/login", async (credentials) => {
        return await authService.login(credentials);
    }
);

export const profileThunk = createAsyncThunk(
    "auth/profile", async () => {
        return await authService.profile();
    });

export const anonymousProfileThunk = createAsyncThunk(
    "auth/anonymousProfile", async (username) => {
        return await authService.anonymousProfile(username)
    }
);


export const logoutThunk = createAsyncThunk(
    "auth/logout", async () => {
        return await authService.logout();
    });


export const updateUserThunk = createAsyncThunk(
    "user/updateUser", async (user) => {
        return await authService.updateUser(user);
    }
);


export const registerThunk = createAsyncThunk(
    "user/registerUser", async (user) => {
        return await authService.registerUser(user);
    }
);
