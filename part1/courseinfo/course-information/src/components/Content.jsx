import React from 'react'

const Content = (props) => {
  const { parts } = props

  const Part = ({ part, exercises }) => (
    <p>
      {part} {exercises}
    </p>
  )

  return (
    <>
      {parts.map(currentPart => (
        <Part part={currentPart.name} exercises={currentPart.exercises} />)
      )}
    </>
  )
}

export default Content