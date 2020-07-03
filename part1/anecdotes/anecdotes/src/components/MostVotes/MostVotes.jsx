import React from 'react'
import Header from '../Header/Header'

const MostVotes = ({
  topAnecdote: { anecdote, votes }
}) => {
  const mostVotesHeader = 'Anecdote with most votes'
  if (votes === 0) return null
  return (
    <>
      <Header text={mostVotesHeader} />
      <div>
        {anecdote}
      </div>
      <div>
        has {votes} votes.
      </div>
    </>

  )
}

export default MostVotes