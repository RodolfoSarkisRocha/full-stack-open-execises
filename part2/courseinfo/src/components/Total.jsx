import React from 'react'

const Total = ({parts}) => {

  const exercisesTotal = () => {
    let sum = 0
    parts.forEach(currentPart => {
      sum += currentPart.exercises
    })
    return sum
  }

  return (
    <p style={{fontWeight: 'bold'}}>
      {`Total of ${exercisesTotal()} exercises`}
    </p>
  )
}

export default Total

