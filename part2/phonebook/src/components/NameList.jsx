import React from 'react'

const Person = ({person}) => (
  <div key={person.name}>
    {person.name}
  </div>
)

const NameList = ({ persons }) => (
  <>
    {persons.map(currentPerson => (
      <Person person={currentPerson} />
    ))}
  </>
)

export default NameList