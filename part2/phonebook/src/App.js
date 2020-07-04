import React, { useState } from 'react'
import NameList from './components/NameList'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const handleNameChange = (event) => {
    const value = event.target.value;
    setNewName(value)
  }

  const addName = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName
    }
    const newList = persons.concat(newPerson)
    setPersons(newList)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          Name:
          <input
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <NameList persons={persons} />
    </div>
  )
}

export default App