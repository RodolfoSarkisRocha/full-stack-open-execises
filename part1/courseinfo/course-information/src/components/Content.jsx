import React from 'react'

const Part = ({ part, exercises }) => (
  <p>
    {part} {exercises}
  </p>
)

const Content = (props) => {
  const { parts } = props

  return (
    <>
      {parts.map(currentPart => (
        <Part part={currentPart.name} exercises={currentPart.exercises} />)
      )}
    </>
  )
}

export default Content