import React from 'react'

const Statistic = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td> {value}</td>
  </tr>
)

const Statistics = ({
  reviews: {
    good,
    neutral,
    bad,
    average,
    positive
  }
}) => {
  const getStatistics = () => {

    if (
      good === 0 &&
      neutral === 0 &&
      bad === 0
    ) return <div>No feedback given</div>

    return (
      <table>
        <tbody>
          <Statistic text={'Good'} value={good} />
          <Statistic text={'Neutral'} value={neutral} />
          <Statistic text={'Bad'} value={bad} />
          <Statistic text={'Average'} value={average} />
          <Statistic text={'Positive'} value={positive} />
        </tbody>
      </table>
    )
  }
  return (
    <>
      <h1>Statistics</h1>
      {getStatistics()}
    </>
  )
}

export default Statistics