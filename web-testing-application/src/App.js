import React, { useState } from 'react';
import './App.css';

import Display from './components/Display'
import Dashboard from './components/Dashboard'
  
function App() {
  const [ballCount, setBallCount] = useState(0);
  const [strikeCount, setStrikeCount] = useState(0); 

  
  return (
    <div className="App">
      <h4>Baseball Scoreboard</h4>
      <Display 
        ballCount={ballCount}
        strikeCount={strikeCount}
      />
      <Dashboard 
        ballCount={ballCount}
        strikeCount={strikeCount}
        setBallCount={setBallCount}
        setStrikeCount={setStrikeCount}

      />
    </div>
  );
}

export default App;
