import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface UserState {
  name: string;
  avatar: string | null;
  showLogin: boolean;
}

const initialState: UserState = {
  name: '',
  avatar: null,
  showLogin: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setAvatar: (state, action: PayloadAction<string | null>) => {
      state.avatar = action.payload;
    },
    openLogin: state => {
      state.showLogin = true;
    },
    hideLogin: state => {
      state.showLogin = false;
    },
  },
});

export const {setName, openLogin, hideLogin, setAvatar} = userSlice.actions;
export default userSlice.reducer;
