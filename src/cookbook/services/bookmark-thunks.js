import {createAsyncThunk} from "@reduxjs/toolkit";
import * as bookmarkService from "./bookmark-services.js";


export const createOrUpdateBookmarkThunk = createAsyncThunk(
    "bookmarks/createOrUpdateBookmark", async (bookmarks) => {
        return await bookmarkService.createOrUpdateBookmarks(bookmarks);
    }
);

export const getBookmarkThunk = createAsyncThunk(
    "bookmarks/getBookmarks", async (username) => {
        return await bookmarkService.findUserBookmarks(username);
    });
