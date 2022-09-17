import { useState, useEffect } from 'react'
import axios from 'axios'

const Countries = ({ countriesToShow }) => {
  console.log(countriesToShow().length)
  if (countriesToShow().length === 0) {
    return <p>No countries found</p>
  }
  if (countriesToShow().length > 10) {
    return <p>Too many countries found. Specify new filter</p>
  }
  return (
      countriesToShow()
      .map(country => <p key={country.name.common}>{country.name.common}</p>)
  )
}

const Filter = ({ filter, handleFilterChange }) => {
  return (
    <div>
      <div>Find Countries</div>  
      <input value={filter} onChange={handleFilterChange}/>
    </div>
  )
}

function App() {
  const [countries, setCountries] = useState([]) 
  const [filter, setFilter] = useState('')
  const countriesToShow = () => countries.filter(country => country.name.common.toLowerCase().includes(filter.toLocaleLowerCase()))
  

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }
  console.log(typeof(countries))

  return (
    <div>
      <Filter filter={filter} handleFilterChange={handleFilterChange}/>
      <Countries 
        countriesToShow={countriesToShow}  />
    </div>
  );
}

export default App;
