import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header/Header'
import Button from './components/Button/Button'
import Anecdote from './components/Anecdote/Anecdote'

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(anecdotes.map(() => 0))

  const voteForAnecdote = () => {
    const votesCopy = [...votes]
    votesCopy[selected] += 1
    setVotes(votesCopy)
  }

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const generateRandomAnecdote = () => {
    const anecdotesLength = anecdotes.length
    const randomNumber = getRandomIntInclusive(0, anecdotesLength - 1)
    setSelected(randomNumber)
  }

  return (
    <div>
      <Header />
      <Anecdote
        anecdote={anecdotes[selected]}
        votes={votes[selected] ?? 0}
      />
      {console.log(votes)}
      <Button
        text='Vote'
        handleClick={voteForAnecdote}
      />
      <Button
        handleClick={generateRandomAnecdote}
        text='Generate'
      />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)