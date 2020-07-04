import React from 'react'
import Header from './Header'

const PersonForm = ({onSubmit, handleInputChange, contactFields}) => (
  <>
  <Header text='Create new person' />
  <form onSubmit={onSubmit}>
    <div style={{ marginBottom: 10 }}>
      <label>Name: </label>
      <input
        value={contactFields.name}
        name='name'
        onChange={handleInputChange}
      />
    </div>
    <div style={{ marginBottom: 10 }}>
      <label>Number: </label>
      <input
        value={contactFields.number}
        name='number'
        onChange={handleInputChange}
      />
    </div>
    <div>
      <button type="submit">Add</button>
    </div>
  </form>
  </>
)

export default PersonForm