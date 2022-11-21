import { createSlice } from '@reduxjs/toolkit';
import operations from './authOperations';

const initialState = {
    name: null,
    email: null,
    phone: null,
    token: null,
    isLoggedIn: false,
    isLoading: false,
    };

    const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [operations.register.pending](state, action) {
            state.isLoading = true;
        },
        [operations.register.fulfilled](state, action) {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.phone = action.payload.phone;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.isLoading = false;
        },
        [operations.register.rejected](state, action) {
            state.isLoading = false;
        },
        [operations.logIn.pending](state, action) {
            state.isLoading = true;
        },
        [operations.logIn.fulfilled](state, action) {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.phone = action.payload.phone;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.isLoading = false;
        },
        [operations.logIn.rejected](state, action) {
            state.isLoading = false;
        },
        [operations.logOut.fulfilled](state, action) {
            state.name = null;
            state.email = null;
            state.phone = null;
            state.token = null;
            state.token = null;
            state.isLoggedIn = false;
        },
        [operations.fetchCurrentUser.fulfilled](state, action) {
            state.user = action.payload;
            state.isLoggedIn = true;
        },
    },
    });

export default authSlice.reducer;