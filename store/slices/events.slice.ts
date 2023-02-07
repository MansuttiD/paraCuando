import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { EventInitial, Events } from '../../lib/interfaces/slices.interfaces';

let initialState: EventInitial = {
  events: null,
};

const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setEvents: (state, action: PayloadAction<Events[]>) => {
      state.events = action.payload;
    },
  },
});
export const { setEvents } = eventSlice.actions;

export default eventSlice.reducer;
