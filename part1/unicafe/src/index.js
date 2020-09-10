import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  

const setToGood = (newValue) => () => {
  setGood(newValue)
}
const setToNeutral = (newValue) => () => {
  setNeutral(newValue)
}
const setToBad = (newValue) => () => {
  setBad(newValue)
}
const Button = ({onClick, text}) => (
  <button onClick ={onClick}>{text}</button>
)
const Statistic = ({text, value}) => (
<>
  <td>{text}</td>
  <td>{value}</td>
</>
)
const Statistics = ({good, neutral, bad}) => {
  let all = good+neutral+bad
  if (all === 0) {
    return(
      <p>No feedback given</p>
    )
  }
  return(
    <>
      <table>
        <tbody>
          <tr>
            <Statistic text="good" value={good} />
          </tr>
          <tr>
            <Statistic text="neutral" value={neutral} />
          </tr>
          <tr>
            <Statistic text="bad" value={bad} />
          </tr>
          <tr>
            <td>all</td>
            <td>{all}</td>
          </tr>
          <tr>
            <td>average</td>
            <td>{(good-bad)/all}</td>
          </tr>
          <tr>
            <td>positive</td>
            <td>{100*good/all} %</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={setToGood(good+1)} text="good" />
      <Button onClick={setToNeutral(neutral+1)} text="neutral" />
      <Button onClick={setToBad(bad+1)} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)