import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { APIURL } from '../utils/API';

export const login = createAsyncThunk('login', async ({ email, password }, { rejectWithValue }) => {
    try {
        const config = { header: { "Content-Type": "application/json" }, withCredentials: true }
        const { data } = await axios.post(`${APIURL}/login`, { email, password }, config);
        return data.user;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});

export const register = createAsyncThunk('register', async ({ name, email, password }, { rejectWithValue }) => {
    try {
        const config = { header: { "Content-Type": "application/json" }, withCredentials: true }
        const { data } = await axios.post(`${APIURL}/register`, { name, email, password }, config);
        return data.user;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});

export const loadUser = createAsyncThunk('loadUser', async (_, { rejectWithValue }) => {
    try {
        const config = { header: { "Content-Type": "application/json" }, withCredentials: true }
        const { data } = await axios.get(`${APIURL}/me`, config);
        return data.user;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});

export const logout = createAsyncThunk('logout', async (_, { rejectWithValue }) => {
    try {
        const config = { header: { "Content-Type": "application/json" }, withCredentials: true }
        await axios.get(`${APIURL}/logout`, config);
        return {};
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});

export const updateProfile = createAsyncThunk('updateProfile', async ({ name, email, avatar }, { rejectWithValue }) => {
    try {
        const config = { header: { "Content-Type": "application/json" }, withCredentials: true }
        const { data } = await axios.put(`${APIURL}/me/update`, { name, email, avatar }, config);
        return data.success;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});

export const updatePassword = createAsyncThunk('updatePassword', async ({ oldPassword, newPassword, confirmPassword }, { rejectWithValue }) => {
    try {
        const config = { header: { "Content-Type": "application/json" }, withCredentials: true }
        const { data } = await axios.put(`${APIURL}/password/update`, { oldPassword, newPassword, confirmPassword }, config);
        return data.success;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});

export const forgotPassword = createAsyncThunk('forgotPassword', async (email, { rejectWithValue }) => {
    try {
        const { data } = await axios.post(`${APIURL}/password/forgot`, { email });
        return data.message;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});

export const resetPassword = createAsyncThunk('resetPassword', async ({ token, passwords }, { rejectWithValue }) => {
    try {
        const { data } = await axios.put(`${APIURL}/password/reset/${token}`, passwords);
        return data.success;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});
