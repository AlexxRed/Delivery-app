import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://delivery-backend-project.herokuapp.com/api';

// First, create the thunk
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



