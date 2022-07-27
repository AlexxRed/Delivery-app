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
                order => order.name !== action.payload)
        },
        increaseQuantity: (state, action) => {
            state.order = state.order.map(item => {
            if (item.name === action.payload) {
                return  { ...item, quantity: item.quantity + 1 }
            } else {
                return item
            }
        })
        },
        decreaseQuantity: (state, action) => {
            state.order = state.order.map(item => {
                if (item.quantity === 1 && item.name === action.payload) {
                state.order.filter(order => order.name !== action.payload)
            }
            if (item.quantity !== 1 && item.name === action.payload) {
                return  { ...item, quantity: item.quantity - 1 }
            }
            else {
                return item
            }
        })
        },
        clearOrder: (state) => {
            state.order = []
        }
    }
});

export const orderSliceReducer = orderSlice.reducer;
export const { setOrder, removeOrder, increaseQuantity, decreaseQuantity, clearOrder } = orderSlice.actions;

export const getOrder = state => state.order.order