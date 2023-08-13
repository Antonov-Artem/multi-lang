import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Lang } from './types';

interface LangState {
  lang: Lang;
}

const initialState = {
  lang: 'en',
} as LangState;

export const langSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    select(state, action: PayloadAction<Lang>) {
      state.lang = action.payload;
    },
  },
});

export const { select } = langSlice.actions;

export const selectLang = (state: RootState) => state.lang.lang;
