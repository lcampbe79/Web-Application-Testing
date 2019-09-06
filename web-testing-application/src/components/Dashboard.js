import React from 'react'

export const addStrike_NOTWORKING = currentStrikeCount => {
  if (currentStrikeCount === 2) {
    return 0;
  }

  return currentStrikeCount + 1;
}

const Dashboard = (props) => {
  const {ballCount, setBallCount, strikeCount, setStrikeCount} = props;

  
  const addStrike = currentStrikeCount => {
    if (currentStrikeCount === 2) {
      setBallCount(0)
      setStrikeCount(0)
    } else {
      setStrikeCount(currentStrikeCount + 1);
    }
  }
  
  return(
    <div className='dashboard'>
      <button 
        className='ball-count-button'
        onClick={() => {
          if (ballCount === 3) {
            setBallCount(0)
            setStrikeCount(0)
          } else {
            setBallCount(ballCount + 1)
          }
        }}
      >
        Balls
      </button>
      <button 
        className='strike-count-button'
        onClick={() => addStrike(strikeCount)}
      >
        Strikes
      </button>
      <button 
        className='foul-count-button'
        onClick={() => {
          if (strikeCount < 2) {
            setStrikeCount(strikeCount + 1)
          }
        }}
      >
        Fouls
      </button>
      <button 
        className='hit-count-button'
        onClick={() => {
          setBallCount(0);
          setStrikeCount(0);
        }}
      >
        Hits
      </button>
    </div>
  )
};

export default Dashboard;