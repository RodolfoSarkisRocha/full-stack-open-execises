import React from 'react'

const Total = ({ parts }) => {

  const exercisesTotal = () => {
    const sum = parts.reduce((acc, currentValue) => {
      const exSum = acc.exercises + currentValue.exercises
      return {
        ...acc,
        exercises: exSum
      }
    })
    return sum.exercises
  }

  return (
    <p style={{ fontWeight: 'bold' }}>
      {`Total of ${exercisesTotal()} exercises`}
    </p>
  )
}

export default Total

