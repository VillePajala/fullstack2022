const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  const Course = ({ course }) => {
    return (
      <div>
        <Header course={course} />
        {course.parts.map(part => <Part key={part.id} part={part} />)}
      </div>
    )
  }

  const Part = ({ part }) => {
    return (
      <div>
        <p>{part.name} {part.exercises}</p>
      </div>
    )
  }

  const Header = ({ course }) => {
    return (
      <>
        <h1>{course.name}</h1>
      </>
    )
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App