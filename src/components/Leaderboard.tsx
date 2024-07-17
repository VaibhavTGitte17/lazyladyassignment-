import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import ScoreItem from './ScoreItem';
import bannerImage from '../assets/banner.png'; // Import images directly

import '../styles/Leaderboard.css';

const Leaderboard: React.FC = () => {
  const scores = useSelector((state: RootState) => state.leaderboard.scores);
  
  return (
    <div className="page-container">
      <div className="leaderboard-container">
        <h1 className="leaderboard-title">Add your daily score on leaderboard</h1>
        <div className='userdata'>
          <h1 className='usehead'>UserName</h1>
          <h1 className='useScore'>Score</h1>
        </div>
        <div className="leaderboard">
          <ul>
            {scores.map((score, index) => (
              <ScoreItem key={index} serialNumber={index + 1} score={score} />
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-container">
        <div className="card">
          <img
            className="card-image"
            src={bannerImage}
            alt="Rotating banner or image" 
          />
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
