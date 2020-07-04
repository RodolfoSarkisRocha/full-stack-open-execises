import React from 'react'
import Header from './Header'

const Person = ({ person }) => (
  <div key={person.name}>
    {person.name}
  </div>
)

const NameList = ({ persons }) => (
  <>
    <Header text='Numbers' />
    {persons.map(currentPerson => (
      <Person person={currentPerson} />
    ))}
  </>
)

export default NameList