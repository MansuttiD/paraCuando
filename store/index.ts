import { configureStore } from '@reduxjs/toolkit';
import events from './slices/events.slice';
import user from './slices/user.slice';

export const store = configureStore({
  reducer: { user, events },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
