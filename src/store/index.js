import { configureStore, createSlice } from "@reduxjs/toolkit";
import counterReducer from './counter'
import authReducer from './auth'
const initialAuthState = { isAuthenticated: false };
const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});
export const authActions = authSlice.actions;

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});
export default store;
