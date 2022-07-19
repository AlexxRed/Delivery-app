import { createSlice } from '@reduxjs/toolkit';
import { fetchAllShops } from './shopsOperations';

const initialState = {
    items: [],
    isLoading: true,
    error: null,
}

export const contactsSlice = createSlice({
    name: 'shops',
    initialState,
    reducers: {
    setFilter: (state, action) => {
        state.filter = action.payload;
        },
    },
    extraReducers: {
        [fetchAllShops.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.isLoading = false;
            state.error = null;
        },
        [fetchAllShops.pending]: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        [fetchAllShops.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
})



export const shopsSliceReducer = contactsSlice.reducer;


export const getShops = state => state.shops.items;
