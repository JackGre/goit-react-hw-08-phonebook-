import { createSlice } from "@reduxjs/toolkit";
import authOperation from "./auth-operations";


const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  error: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    unsetError: (state) => ({ ...state, error: null }),
  },
  extraReducers: {
    [authOperation.register.pending](state, action) {
      state.isLoading = true;
      state.error = false;
    },
    [authOperation.register.rejected](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = true;
    },
    [authOperation.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },

    [authOperation.logIn.pending](state, action) {
      state.isLoading = true;
      state.error = false;
    },
    [authOperation.logIn.rejected](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = true;
    },
    [authOperation.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },

    [authOperation.logOut.pending](state) {
      state.isLoading = true;
      state.error = false;
    },
    [authOperation.logOut.rejected](state) {
      state = {
        ...state,
        isLoading: false,
        error: true,
      };
    },
    [authOperation.logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
  },
});

export const unsetError = authSlice.actions.unsetError;
export default authSlice.reducer;