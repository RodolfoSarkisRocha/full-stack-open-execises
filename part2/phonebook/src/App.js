import React, { useState } from 'react'
import NameList from './components/NameList'
import Header from './components/Header'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '99999-9999' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleInputChange = (stateFunc) => (event) => {
    const value = event.target.value
    stateFunc(value)
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
        name: newName,
        number: newNumber
      }
      const newList = persons.concat(newPerson)
      setPersons(newList)
    }
  }

  return (
    <div>
      <Header text='Phonebook' />
      <form onSubmit={addName}>
        <div>
          <label>Name: </label>
          <input
            value={newName}
            onChange={handleInputChange(setNewName)}
          />
        </div>
        <div>
          <label>Number: </label>
          <input
            value={newNumber}
            onChange={handleInputChange(setNewNumber)}
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