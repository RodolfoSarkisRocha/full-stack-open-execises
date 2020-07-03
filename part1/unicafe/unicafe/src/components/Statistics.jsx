import React from 'react'

const Statistics = ({ reviews: { good, neutral, bad } }) => {

  return (
    <>
      <h1>Statistics</h1>
      <div>{`Good ${good}`}</div>
      <div>{`Neutral ${neutral}`}</div>
      <div>{`Bad ${bad}`}</div>
    </>
  )
}

export default Statistics