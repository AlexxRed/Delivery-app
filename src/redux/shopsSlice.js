import { createSlice } from '@reduxjs/toolkit';
import { fetchAllShops } from './shopsOperations';

const initialState = {
    items: [],
    isLoading: true,
    error: null,
}

export const shopsSlice = createSlice({
    name: 'shops',
    initialState,
    reducers: {
    // standard reducer logic, with auto-generated action types per reducer
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



export const shopsSliceReducer = shopsSlice.reducer;


export const getShops = state => state.shops.items;
