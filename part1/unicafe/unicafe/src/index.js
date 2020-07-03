import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import Button from './components/Button'
import Statistics from './components/Statistics'

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const reviews = {
    good,
    neutral,
    bad
  }

  const setReview = (stateSet, value) =>
    () => { stateSet(value + 1) }


  return (
    <>
      <Header />
      <Button
        handleClick={setReview(setGood, good)}
        text={'Good'}
      />
      <Button
        handleClick={setReview(setNeutral, neutral)}
        text={'Neutral'}
      />
      <Button
        handleClick={setReview(setBad, bad)}
        text={'Bad'}
      />
      <Statistics reviews={reviews} />
    </>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)