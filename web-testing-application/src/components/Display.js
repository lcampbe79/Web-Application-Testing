import React from 'react';


const Display = (props) => {
  const {ballCount, strikeCount} =props;

  return(
    <div className='display'>
      <h2>Balls</h2>
      <div className='ball-score'>{ballCount}</div>
      <h2>Strikes</h2>
      <div className='strike-score'>{strikeCount}</div>
    </div>
  )
}

export default Display;