import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export type AppDispatchType = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
