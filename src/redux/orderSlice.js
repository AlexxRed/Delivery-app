import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    order: [],
};

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setOrder: (state, action) => {
            state.order.push(action.payload)
        },
        removeOrder: (state, action) => {
            state.order = state.order.filter(
                order => order !== action.payload)
        }
    }
});

export const orderSliceReducer = orderSlice.reducer;
export const { setOrder, removeOrder } = orderSlice.actions;

export const getOrder = state => state.order.order