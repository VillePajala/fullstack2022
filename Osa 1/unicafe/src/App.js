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

  const Button = ({ good, neutral, bad }) => {
    return (
      <div>
        <FeedbackButton handleClick={() => positiveFeedback()} text={good}>Bad</FeedbackButton>
        <FeedbackButton handleClick={() => neutralFeedback()} text={neutral}>Bad</FeedbackButton>
        <FeedbackButton handleClick={() => negativeFeedback()} text={bad}>Bad</FeedbackButton>
      </div>
    )
  }

  const FeedbackButton = ({ handleClick, text }) => {
    return (
      <button onClick={handleClick}>
        {text}
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
        <div>
          <h2>Statistics</h2>
        </div>
        <table>
          <tbody>
            <StatisticLine text='good' value={good} />
            <StatisticLine text='neutral' value={neutral} />
            <StatisticLine text='bad' value={bad} />
            <StatisticLine text='all' value={sum} />
            <StatisticLine text='average' value={avg.toFixed(1)} />
            <StatisticLine text='positive' value={positive.toFixed(1) + " %"} />
          </tbody> 
        </table>
      </div>
    )
  }

  const StatisticLine = ({text, value}) => {
    return (
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
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
      <Button good={'Good'} neutral={'Neutral'} bad={'Bad'} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App