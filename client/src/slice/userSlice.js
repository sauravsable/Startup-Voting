import { createSlice } from "@reduxjs/toolkit";

import {
  login,
  register,
  loadUser,
  logout,
  updateProfile,
  updatePassword,
  forgotPassword,
  resetPassword,
} from '../thunk/userThunk.js';

const initialState = {
  user: {},
  isAuthenticated: false,
  loading: false,
  error: null,
  signModalState: false,
  loginModalState: false,
  success:false
};

const userSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    showSignModal(state) {
      state.signModalState = true;
    },

    showLoginModal(state) {
      state.loginModalState = true;
    },

    hideSignModal(state) {
      state.signModalState = false;
    },

    hideLoginModal(state) {
      state.loginModalState = false;
    },
    clearErrors: (state) => {
      state.error = null;
    },
    resetUpdateProfile: (state) => {
      state.isUpdated = false;
    },
    resetUpdatePassword: (state) => {
      state.isUpdated = false;
    }
  },
  extraReducers : (builder)=>{
    builder
    .addCase(login.pending, (state) => {
      state.loading = true;
      state.isAuthenticated = false;
    })
    .addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    })
    .addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.error = action.payload;
    })
    .addCase(register.pending, (state) => {
      state.loading = true;
      state.isAuthenticated = false;
    })
    .addCase(register.fulfilled, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    })
    .addCase(register.rejected, (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.error = action.payload;
    })
    .addCase(loadUser.pending, (state) => {
      state.loading = true;
    })
    .addCase(loadUser.fulfilled, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    })
    .addCase(loadUser.rejected, (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.error = action.payload;
    })
    .addCase(logout.pending, (state) => {
      state.loading = true;
    })
    .addCase(logout.fulfilled, (state) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
    })
    .addCase(logout.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(updateProfile.pending, (state) => {
      state.loading = true;
    })
    .addCase(updateProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.isUpdated = action.payload;
    })
    .addCase(updateProfile.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(updatePassword.pending, (state) => {
      state.loading = true;
    })
    .addCase(updatePassword.fulfilled, (state, action) => {
      state.loading = false;
      state.isUpdated = action.payload;
    })
    .addCase(updatePassword.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(forgotPassword.pending, (state) => {
      state.loading = true;
    })
    .addCase(forgotPassword.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(forgotPassword.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(resetPassword.pending, (state) => {
      state.loading = true;
    })
    .addCase(resetPassword.fulfilled, (state, action) => {
      state.loading = false;
      state.success = action.payload;
    })
    .addCase(resetPassword.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
  }
});

export const {
  clearErrors,
  showSignModal,
  showLoginModal,
  hideLoginModal,
  hideSignModal,
} = userSlice.actions;

export default userSlice.reducer;
