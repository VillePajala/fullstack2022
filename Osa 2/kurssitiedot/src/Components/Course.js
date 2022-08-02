const Course = ({ course }) => {
    return (
      <div>
        <Header course={course} />
        <Content course={course} />
        <Total course={course} />
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

  const Content = ({ course }) => {
    return (
      <div>
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

  const Total = ({ course }) => {
    const total = course.parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
      <div>
        <p><b>Total of {total} Excercises</b></p>
      </div>
    )
  }

  export default Course