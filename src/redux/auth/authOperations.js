import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://delivery-backend-project.herokuapp.com/api';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

const register = createAsyncThunk('/auth/users/signup', async credentials => {
    try {
        const response = await axios.post('/auth/users/signup', credentials);
        token.set(response.data.token);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});



const logIn = createAsyncThunk('/auth/users/login', async credentials => {
    try {
        const { data } = await axios.post('/auth/users/login', credentials);
        token.set(data.token);
        return data;
    } catch (error) {
        console.log(error);
    }
});



const logOut = createAsyncThunk('auth/logout', async () => {
    try {
        await axios.post('auth/logout');
        token.unset();
    } catch (error) {
        console.log(error);
    }
});



const operations = {
    register,
    logOut,
    logIn,
};
export default operations;