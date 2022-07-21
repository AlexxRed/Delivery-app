import { createSlice } from '@reduxjs/toolkit';
import { fetchAllShops } from './shopsOperations';

const initialState = {
    items: [],
    activeShop: '',
    isLoading: true,
    error: null,
};

export const shopsSlice = createSlice({
    name: 'shops',
    initialState,
    reducers: {
        setShop: (state, action) => {
        state.activeShop = action.payload;
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



export const shopsSliceReducer = shopsSlice.reducer;
export const { setShop } = shopsSlice.actions;


export const getShops = state => state.shops.items;
export const getActiveShop = state => state.shops.activeShop;
