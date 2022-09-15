import { useState, useEffect } from 'react'
import axios from 'axios'

const Persons = ({ persons, filter }) => {
  return persons.filter(person => person.name.toLowerCase().includes(filter.toLocaleLowerCase())).map(person => <p key={person.name}>{person.name} {person.number}</p>)
}

const PersonForm = ({ addPerson, newName, newNumber, handleNameChange, handleNumberChange }) => {
  return (
    <form onSubmit={addPerson}>
        <div>
          name: <input
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          number: <input
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

const Filter = ({ filter, handleFilterChange }) => {
  return (
    <div>
      filter shown with <input
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  
  console.log('render', persons.length, 'notes')

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }

    if (persons.map(person => person.name).includes(newName)) {
      alert(`${newName} is already added to phonebook`)
      setNewName('')
      setNewNumber('')
    }else{
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    } 
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
        filter={filter}
        handleFilterChange={handleFilterChange}/>
      <h2>add a new</h2>
      <PersonForm 
        addPerson={addPerson} 
        newName={newName} 
        newNumber={newNumber} 
        handleNameChange={handleNameChange} 
        handleNumberChange={handleNumberChange}/>
      <h3>Numbers</h3>
      <Persons 
        persons={persons} 
        filter={filter} />
    </div>
  )

}

export default App
