import {createAsyncThunk} from "@reduxjs/toolkit";
import * as contactServices from "./contact-services.js";


export const createContactThunk = createAsyncThunk(
    "contact/createContact", async (form) => {
        return await contactServices.createForm(form);
    }
);

export const getContactThunk = createAsyncThunk(
    "contact/getContact", async () => {
        return await contactServices.getForms();
    });

export const updateContactThunk = createAsyncThunk(
    "contact/updateContact", async (form) => {
        return await contactServices.updateForm(form);
    });
