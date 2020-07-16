import React from 'react'
import Header from './Header'

const Person = ({ person, onDelete }) => (
  <div style={{marginBottom: 10}} key={person.name}>
    <div>
      {`Name: ${person.name}`}
    </div>
    <div>
      {`Number: ${person.number}`}
    </div>
    <button onClick={()=>onDelete(person)}>Delete</button>
    <div style={{marginTop: 10, borderBottom: '1px solid black'}}/>
  </div>
)

const NameList = ({ persons = [], onDelete }) => (
  <>
    <Header text='Numbers' />
    {persons.map(currentPerson => (
      <Person person={currentPerson} onDelete={onDelete}/>
    ))}
  </>
)

export default NameList