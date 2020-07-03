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

  return (
    <>
      <h1>Statistics</h1>
      <div>{`Good ${good}`}</div>
      <div>{`Neutral ${neutral}`}</div>
      <div>{`Bad ${bad}`}</div>
      <div>{`Average ${average}`}</div>
      <div>{`Positive ${positive}%`}</div>
    </>
  )
}

export default Statistics