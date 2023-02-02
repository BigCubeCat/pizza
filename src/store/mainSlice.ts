import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

import { TPizza, TCategory } from '../types/pizza';

export interface MainState {
  box: TPizza[];
  category: TCategory;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: MainState = {
  box: [],
  category: "recomend",
  status: 'idle',
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<TCategory>) => {
      state.category = action.payload;
    },
    setBox: (state, action: PayloadAction<TPizza[]>) => {
      state.box = action.payload;
    },
    addPizza: (state, action: PayloadAction<TPizza>) => {
      state.box.push(action.payload);
    },
    removePizza: (state, action: PayloadAction<TPizza>) => {
      state.box = state.box.filter(pizza => pizza !== action.payload);
    },
    emptyBox: (state) => {
      state.box = [];
    }
  },
});

export const {
  setCategory, setBox, addPizza, removePizza, emptyBox
} = mainSlice.actions;

export const selectBox = (state: RootState) => state.main.box;
export const selectCategory = (state: RootState) => state.main.category;
export default mainSlice.reducer;

