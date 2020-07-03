import React from 'react'

const Anecdote = ({ anecdote, votes }) => (
  <>
  <div>
    {anecdote}
  </div>
  <div>
    has {votes} votes.
  </div>
  </>
)

export default Anecdote