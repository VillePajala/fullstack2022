const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]


  const Header = (props) => {
    return (
      <>
        <h1>{props.courseName}</h1>
      </>
    )
  }

  const Content = (props) => {
    console.log(props.parts)
    return (
      <>
        <Part name={props.parts[0].name} amount={props.parts[0].exercises}/>
        <Part name={props.parts[1].name} amount={props.parts[1].exercises}/>
        <Part name={props.parts[2].name} amount={props.parts[2].exercises}/>
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
      <Content parts={parts}/>
      <Total totalAmount={parts[0].exercises + parts[1].exercises + parts[2].exercises} />
    </div>
  )
}

export default App
