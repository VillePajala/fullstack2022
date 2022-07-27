const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  
  const part3 = {
    name: 'State of a component',
    excercises: 14
  }


  const Header = (props) => {
    return (
      <>
        <h1>{props.courseName}</h1>
      </>
    )
  }

  const Content = () => {
    return (
      <>
        <Part name={part1.name} amount={part1.exercises}/>
        <Part name={part2.name} amount={part3.excercises}/>
        <Part name={part3.name} amount={part3.excercises}/>
      </>
    )
  }

  const Part = (props) => {
    return (
      <>
      <p>{props.name} {props.amount}</p>
      </>
    )
  }

  const Total = (props) => {
    console.log(props)
    return (
      <>
        <p>Number of exercises {props.totalAmount}</p>
      </>
    )
  }

  return (
    <div>
      <Header courseName={course}/>
      <Content />
      <Total totalAmount={part1.exercises + part2.exercises + part3.excercises} />
    </div>
  )
}

export default App
