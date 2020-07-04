import React from 'react'

const Filter = ({filterValue, filterName, handleFilter}) => (
  <div style={{ marginBottom: 10 }}>
    <label>{filterName}: </label>
    <input value={filterValue} onChange={handleFilter} />
  </div>
)

export default Filter