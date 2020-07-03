import React from 'react'

const Statistics = ({
  reviews: {
    good,
    neutral,
    bad,
    average,
    positive
  }
}) => {
  const getStatistics = () => {
    
    if (
      good === 0 &&
      neutral === 0 &&
      bad === 0
    ) return <div>No feedback given</div>

    return (
      <>
        <div>{`Good ${good}`}</div>
        <div>{`Neutral ${neutral}`}</div>
        <div>{`Bad ${bad}`}</div>
        <div>{`Average ${average}`}</div>
        <div>{`Positive ${positive}%`}</div>
      </>
    )
  }
  return (
    <>
      <h1>Statistics</h1>
      {getStatistics()}
    </>
  )
}

export default Statistics