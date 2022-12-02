import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://delivery-back.onrender.com/api';

export const fetchAllShops = createAsyncThunk(
    'shops/getAllContacts',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`/shops`)
            return response.data

        } catch (error) {
            return rejectWithValue(error)
        }
    }
);



