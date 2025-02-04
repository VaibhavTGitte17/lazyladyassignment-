import { configureStore } from '@reduxjs/toolkit';
import leaderboardReducer from './leaderboardSlice';

export const store = configureStore({
  reducer: {
    leaderboard: leaderboardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
