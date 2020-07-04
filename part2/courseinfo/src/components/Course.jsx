import React from 'react'
import Content from './Content'
import Header from './Header'
import Total from './Total'

const Course = ({ course: {name, parts} }) => {

  return (
    <>
      <Header name={name} />
      <Content parts={parts} />
      <Total parts={parts} />
    </>
  )
}

export default Course