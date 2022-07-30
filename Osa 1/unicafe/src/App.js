import { useState } from 'react'

const App = () => {

  // --------- states and constants---------

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const headerText = 'Give feedback'

  // ----------Components-------------------

  const Header = ({text}) => {
    return (
      <div>
        <h1>{headerText}</h1>
      </div>
    )
  }

  const Button = (props) => {
    return (
      <button onClick={props.handleClick}>
        {props.text}
      </button>
    )
  }

  const Statistics = ({ good, neutral, bad }) => {
    const sum = good + neutral + bad
    const avg = (good - bad) / sum
    const positive = good / sum * 100 

    if (sum === 0) {
      return (
        <div>
          <h2>No feedback given</h2>
        </div>
      )
    }
    return (
      <div>
        <p>
          Good: {good}<br/>
          Neutral: {neutral}<br/>
          Bad: {bad}<br/>
          All: {sum}<br/>
          Average: {avg}<br/>
          Positive: {positive} %
        </p>
      </div>
    )
  }

  // -----Functions- ------------------------------

  const positiveFeedback = () => {setGood(good + 1)}
  const neutralFeedback = () => {setNeutral(neutral + 1)}
  const negativeFeedback = () => {setBad(bad + 1)}

  // ----------Render-------------------------------

  return (
    <div>
      <Header text={headerText} />
      <Button handleClick={() => positiveFeedback()} text={'Good'}>Bad</Button>
      <Button handleClick={() => neutralFeedback()} text={'Neutral'}>Bad</Button>
      <Button handleClick={() => negativeFeedback()} text={'Bad'}>Bad</Button>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App