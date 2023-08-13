import { configureStore } from '@reduxjs/toolkit';
import { langSlice } from 'entities/lang';

export const store = configureStore({
  reducer: {
    lang: langSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
