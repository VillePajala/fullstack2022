const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }


  const Header = (props) => {
    return (
      <>
        <h1>{props.courseName.name}</h1>
      </>
    )
  }

  const Content = (props) => {
    return (
      <>
        <Part name={props.course.parts[0].name} amount={props.course.parts[0].exercises}/>
        <Part name={props.course.parts[1].name} amount={props.course.parts[1].exercises}/>
        <Part name={props.course.parts[2].name} amount={props.course.parts[2].exercises}/>
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
        <p>Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
      </>
    )
  }

  return (
    <div>
      <Header courseName={course}/>
      <Content course={course}/>
      <Total course={course} />
    </div>
  )
}

export default App
