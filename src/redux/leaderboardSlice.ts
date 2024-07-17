import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Score {
  username: string;
  score: string;
}

interface LeaderboardState {
  scores: Score[];
}

const initialState: LeaderboardState = {
  scores: [],
};

const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState,
  reducers: {
    addScore: (state, action: PayloadAction<Score>) => {
      state.scores.push(action.payload);
      state.scores.sort((a, b) => a.score.localeCompare(b.score));
      state.scores = state.scores.slice(0, 100);
    },
  },
});

export const { addScore } = leaderboardSlice.actions;
export default leaderboardSlice.reducer;
