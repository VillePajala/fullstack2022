import { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Button = (props) => {
    return (
      <button onClick={props.handleClick}>
        {props.text}
      </button>
    )
  }

  const Statistics = (props) => {
    return (
      <>
        <p>Good: {props.good} Neutral: {props.neutral} Bad: {props.bad}</p>
      </>
    )
  }

  
  const positiveFeedback = () => {
    console.log('Positive feedback')
    return setGood(good + 1)
  }

  const neutralFeedback = () => {
    console.log('Neutral feedback')
    return setNeutral(neutral + 1)
  }

  const negativeFeedback = () => {
    console.log('Negative feedback')
    return setBad(bad + 1)
  }

  return (
    <div>
      <Button handleClick={() => positiveFeedback()} text={'Good'}>Bad</Button>
      <Button handleClick={() => neutralFeedback()} text={'Neutral'}>Bad</Button>
      <Button handleClick={() => negativeFeedback()} text={'Bad'}>Bad</Button>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App