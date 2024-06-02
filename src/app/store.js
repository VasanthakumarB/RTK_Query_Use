// app/store.js
import { configureStore } from '@reduxjs/toolkit';
import { LoginServices } from '../servies/loginServies';
import userReducer from '../components/userSlice';

const store = configureStore({
  reducer: {
    [LoginServices.reducerPath]: LoginServices.reducer,
    user: userReducer, // Add the user reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(LoginServices.middleware),
});

export default store;
