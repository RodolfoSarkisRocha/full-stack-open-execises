import React, { useState } from 'react'
import NameList from './components/NameList'
import Header from './components/Header'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const handleNameChange = (event) => {
    const value = event.target.value;
    setNewName(value)
  }

  const validateName = (name) => {
    const nameValidation = persons.some(currentPerson =>
      currentPerson.name === name
    )
    if (nameValidation) {
      alert(`${name} is already added to phonebook`)
      return false
    }
    return true
  }

  const addName = (event) => {
    event.preventDefault()
    if (validateName(newName)) {
      const newPerson = {
        name: newName
      }
      const newList = persons.concat(newPerson)
      setPersons(newList)
    }
  }

  return (
    <div>
      <Header text='Phonebook'/>
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
      <NameList persons={persons} />
    </div>
  )
}

export default App