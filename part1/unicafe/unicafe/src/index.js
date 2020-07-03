import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import Button from './components/Button'
import Statistics from './components/Statistics'

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  useEffect(() => {
    const average = (good - bad) / 3
    const totalValue = (good+bad+neutral)
    const positivePercentage = 
    good 
    ? good / totalValue
    : 0
    setAverage(average)
    setPositive(positivePercentage)
  }, [good, bad, neutral])

  const reviews = {
    good,
    neutral,
    bad,
    average,
    positive
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