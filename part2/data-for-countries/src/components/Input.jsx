import React from 'react'

const Input = ({ handleChange, label, value }) => (
  <div>
    <label>{label}</label>
    <input onChange={handleChange} value={value} />
  </div>
)

export default Input