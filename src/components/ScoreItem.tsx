import React from 'react';
import { Score } from '../redux/leaderboardSlice';
import './ScoreItem.css';

interface ScoreItemProps {
  score: Score;
}

const ScoreItem: React.FC<ScoreItemProps> = ({ score }) => {
  return (
    <li className="score-item">
      <span className="username">{score.username}</span>
      <span className="score">{score.score}</span>
    </li>
  );
};

export default ScoreItem;
