import React from 'react';
import Leaderboard from './components/Leaderboard';

import AddScorePopup from './components/AddScorePopup';
import './styles/global.css';


const App: React.FC = () => {
  return (
    <div className="app">
  
      <Leaderboard />
      <AddScorePopup />
      
    </div>
  );
};

export default App;
