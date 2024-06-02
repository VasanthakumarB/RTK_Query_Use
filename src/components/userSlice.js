// features/user/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [], // Initially, the users array is empty
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.users = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.users = [];
      state.isLoggedIn = false;
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
