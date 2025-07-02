import { configureStore } from '@reduxjs/toolkit';

import { usersApi } from '../api';
import { snackbarMiddleware } from './snackbarMiddleware';

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(usersApi.middleware)
      .concat(snackbarMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
