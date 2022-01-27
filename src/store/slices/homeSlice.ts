import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface HomeState {
  actionMenu: boolean;
  actionProject: boolean;
}

const initialState: HomeState = {
  actionMenu: false,
  actionProject: false,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    toggleMenu: state => {
      state.actionMenu = !state.actionMenu;
    },
    toggleProject: (state, action: PayloadAction<boolean>) => {
      state.actionProject = action.payload;
    },
  },
});

export const {toggleMenu, toggleProject} = homeSlice.actions;
export default homeSlice.reducer;
