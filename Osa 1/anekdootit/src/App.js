import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setpoints] = useState({0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0})

  const ButtoneVote = ({ handleClick, text }) => {
    return (
      <button onClick={handleClick}>
        {text}
      </button>
    )
  }

  const ButtonNext = ({ handleClick, text }) => {
    return (
      <button onClick={handleClick}>
        {text}
      </button>
    )
  }

  const Anecdote = ({ anecdoteIndex, anecdote }) => {
    return (
      <>
        <p>{anecdote}<br></br>
        has {points[anecdoteIndex]} votes</p>
      </>
    )
  }

  const MostVoted = ({ anecdotes, points }) => {
    const max = Math.max(...Object.values(points))
    const maxIndex = Object.values(points).indexOf(max)
    if (max === 0) {
      return (
        <>
          <p>No votes given yet</p>
        </>
      )
    }
    return (
      <>
        <p>{anecdotes[maxIndex]}<br></br>
        has {max} votes</p>
      </>
    )
  }
  
  const voteAnecdote = (indexOfAnecdote) => {
    const copyOfPoints = {...points}
    copyOfPoints[indexOfAnecdote] = copyOfPoints[indexOfAnecdote] + 1
    setpoints(copyOfPoints)
  }

  const generateRandomAnecdote = () => {setSelected(Math.floor(Math.random() * anecdotes.length))}

  return (
    <div>
      <Anecdote anecdoteIndex={selected} anecdote={anecdotes[selected]} />
      <ButtoneVote handleClick={() => voteAnecdote(selected)} text={'Vote'} />
      <ButtonNext handleClick={() => generateRandomAnecdote()} text={'Next anecdote'} />
      <MostVoted anecdotes={anecdotes} points={points} />
    </div>
  )
}

export default App