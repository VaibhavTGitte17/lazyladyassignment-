import React from 'react';
import { Score } from '../redux/leaderboardSlice';
import './ScoreItem.css';

interface ScoreItemProps {
  serialNumber: number; // Add serialNumber prop
  score: Score;
}

const ScoreItem: React.FC<ScoreItemProps> = ({ serialNumber, score }) => {
  return (
    <li className="score-item">
      <span className="serial" style={{ fontWeight: 'bold', color: 'white', marginRight: '6px' }}>{serialNumber}</span>
      <span className="username">{score.username}</span>
      <span className="score">{score.score}</span>
    </li>
  );
};

export default ScoreItem;
