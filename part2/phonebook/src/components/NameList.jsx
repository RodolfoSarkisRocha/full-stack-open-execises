import React from 'react'
import Header from './Header'

const Person = ({ person }) => (
  <div style={{marginBottom: 10}} key={person.name}>
    <div>
      {`Name: ${person.name}`}
    </div>
    <div>
      {`Number: ${person.number}`}
    </div>
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