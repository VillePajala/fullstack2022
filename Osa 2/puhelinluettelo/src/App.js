import { useState, useEffect } from 'react'
import axios from 'axios'
import personService from './services/persons'

const Persons = ({ persons, filter, deletePerson }) => {
  return (
    persons
      .filter(person => person.name.toLowerCase()
      .includes(filter.toLocaleLowerCase()))
      .map(person => 
        <p key={person.name}>{person.name} {person.number} <button onClick={() => deletePerson(person.id)}>Delete</button></p>)
  )
}

const PersonForm = ({ checkUpdateOrAdd, newName, newNumber, handleNameChange, handleNumberChange }) => {
  return (
    <form onSubmit={checkUpdateOrAdd}>
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
    personService
      .getAll()
      .then(initialNotes => {
        setPersons(initialNotes)
      })
  }, [])

  const checkUpdateOrAdd = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name.toLocaleLowerCase() === newName.toLocaleLowerCase())) {
      console.log("moi")
      if (window.confirm(`${newName} is already in the phonebook. Replace the phone number?`)) {
        updatePerson(newName)
      }
    } else {
      addPerson()
    }
  }

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

  const addPerson = () => {
    const personObject = {
      name: newName,
      number: newNumber
    }

    if (persons.map(person => person.name).includes(newName)) {
      alert(`${newName} is already added to phonebook`)
      setNewName('')
      setNewNumber('')
    }else{
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewNumber('')
          setNewName('')
      })
    } 
  }

  const updatePerson = (nameToUpdate) => {
    const personToUpdate = persons.filter(person => person.name.toLocaleLowerCase() === nameToUpdate.toLocaleLowerCase())
    const changedPerson = { ...personToUpdate[0], number: newNumber }
    const id = changedPerson.id

    personService
      .update(id, changedPerson)
      .then(returnedPerson => {
        setPersons(persons.map(person => person.id != id ? person : returnedPerson))
        setNewName('')
        setNewNumber('')
    })
  }

  const deletePerson = (id) => {
    const deletedPerson = persons.filter(person => person.id === id)
    personService
      .remove(id)
      .then(response => {
        window.confirm(`Delete ${deletedPerson[0].name}?`)
        setPersons(persons.filter(person => person.id !== id))
      })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter}
        handleFilterChange={handleFilterChange}/>
      <h2>add a new</h2>
      <PersonForm 
        checkUpdateOrAdd={checkUpdateOrAdd}
        newName={newName} 
        newNumber={newNumber} 
        handleNameChange={handleNameChange} 
        handleNumberChange={handleNumberChange}/>
      <h3>Numbers</h3>
      <Persons 
        persons={persons} 
        filter={filter}
        deletePerson={deletePerson} />
    </div>
  )
}

export default App
