import React, { useState } from 'react'
import NameList from './components/NameList'
import Header from './components/Header'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '99999-9999' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newContact, setNewContact] = useState({
    name: '',
    number: ''
  })
  const [filter, setFilter] = useState('')

  const handleInputChange = (event) => {
    const value = event.target.value
    const name = event.target.name
    setNewContact({
      ...newContact,
      [name]: value
    })
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

  const addContact = (event) => {
    event.preventDefault()
    const { name, number } = newContact
    if (validateName(name)) {
      const newPerson = {
        name: name,
        number: number
      }
      const newList = persons.concat(newPerson)
      setPersons(newList)
    }
  }

  const handleFilter = (event) => {
    const value = event.target.value
    const formattedValue = value.trim()
    setFilter(formattedValue)
  }

  const getPersons = () => {
    if (filter) {
      const filteredPersons = persons.filter(currentPerson => {
        const personName = currentPerson.name.toLowerCase()
        const lowerCaseFilter = filter.toLowerCase()
        return personName.includes(lowerCaseFilter)
      })
      return (filteredPersons)
    }
    return persons
  }

  return (
    <div>
      <Header text='Phonebook' />
      <Header text='Filters' />
      <Filter
        filterValue={filter}
        filterName='Name'
        handleFilter={handleFilter}
      />
      <PersonForm
        onSubmit={addContact}
        handleInputChange={handleInputChange}
        contactFields={newContact}
      />
      <NameList persons={getPersons()} />
    </div>
  )
}

export default App