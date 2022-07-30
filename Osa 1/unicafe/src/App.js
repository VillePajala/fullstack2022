import { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const headerText = 'Give feedback'

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

  const Statistics = (props) => {
    return (
      <div>
        <p>
          Good: {props.good}<br/>
          Neutral: {props.neutral}<br/>
          Bad: {props.bad}
        </p>
      </div>
    )
  }

  
  const positiveFeedback = () => {setGood(good + 1)}
  const neutralFeedback = () => {setNeutral(neutral + 1)}
  const negativeFeedback = () => {setBad(bad + 1)}

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