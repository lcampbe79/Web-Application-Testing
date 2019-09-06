import React from 'react'

const Dashboard = (props) => {
  const {ballCount, setBallCount, strikeCount, setStrikeCount} = props;

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
        onClick={() => {
          if (strikeCount === 2) {
            setBallCount(0)
            setStrikeCount(0)
          } else {
            setStrikeCount(strikeCount + 1)
          }
        }} 
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