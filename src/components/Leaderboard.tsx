import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import ScoreItem from './ScoreItem';
import '../styles/Leaderboard.css';

const Leaderboard: React.FC = () => {
  const scores = useSelector((state: RootState) => state.leaderboard.scores);

  return (
    <div className="leaderboard">
      <h1>Add your daily score on leaderboard</h1>
      <ul>
        {scores.map((score, index) => (
          <ScoreItem key={index} score={score} />
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
