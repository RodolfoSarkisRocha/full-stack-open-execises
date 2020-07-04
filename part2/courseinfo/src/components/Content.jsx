import React from 'react'

const Part = ({ part, exercises }) => (
  <p>
    {part} {exercises}
  </p>
)

const Content = ({parts}) => {

  return (
    <>
      {parts.map(currentPart => (
        <Part
          part={currentPart.name}
          key={currentPart.id}
          exercises={currentPart.exercises}
        />)
      )}
    </>
  )
}

export default Content