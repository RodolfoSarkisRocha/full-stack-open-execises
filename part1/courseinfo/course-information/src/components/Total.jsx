import React from 'react'

const Total = (props) => {
  const { parts } = props;

  const exercisesTotal = () => {
    let sum = 0
    parts.forEach(currentPart => {
      sum += currentPart.exercises
    })
    return sum
  }

  return (
    <p>
      {`Number of exercises ${exercisesTotal()}`}
    </p>
  )
}

export default Total

