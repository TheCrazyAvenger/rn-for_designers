import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface HomeState {
  actionMenu: boolean;
}

const initialState: HomeState = {
  actionMenu: false,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    toggleMenu: state => {
      state.actionMenu = !state.actionMenu;
    },
  },
});

export const {toggleMenu} = homeSlice.actions;
export default homeSlice.reducer;
