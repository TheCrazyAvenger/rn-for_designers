import {configureStore} from '@reduxjs/toolkit';
import {userApi} from '../api';
import homeSlice from './slices/homeSlice';
import userSlice from './slices/userSlice';

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    home: homeSlice,
    user: userSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(userApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
