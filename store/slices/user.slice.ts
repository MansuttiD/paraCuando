import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { User, UserState } from '../../lib/interfaces/slices.interfaces';

let initialState: User = {
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserGlobal: (state, action: PayloadAction<UserState>) => {
      state.user = action.payload;
    },
    setRemoveUser: (state, action: PayloadAction<null>) => {
      state.user = action.payload;
    },
  },
});

export const { setUserGlobal, setRemoveUser } = userSlice.actions;

export default userSlice.reducer;
