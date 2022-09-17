import { useState, useEffect } from 'react'
import axios from 'axios'

const Countries = ({ countriesToShow }) => {
  if (countriesToShow().length === 0) {
    return <p>No countries found</p>
  }
  if (countriesToShow().length > 10) {
    return <p>Too many countries found. Specify new filter</p>
  }
  if (countriesToShow().length <=10 && countriesToShow().length > 1) {
    return (
      countriesToShow()
      .map(country => <p key={country.name.common}>{country.name.common}</p>)
    )
  }
  if (countriesToShow().length === 1){
    return (
      <Country country={countriesToShow()[0]} />
    )
  }
}

const Country = ({ country }) => {
  return (
    <>
      <h2>{country.name.official}</h2>
      <p>
        Capital: {country.capital[0]}<br></br>
        Area: {country.area}</p>
      
      <h3>Languages</h3>
      <ul>
        {Object.values(country.languages)
          .map((value, index) => <li key={index}>{value}</li>)}
      </ul>
      <br></br>
      <div>
        <img src={country.flags.png} alt={country.name.official}></img>
      </div>
    </>
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


  return (
    <div>
      <Filter filter={filter} handleFilterChange={handleFilterChange}/>
      <Countries 
        countriesToShow={countriesToShow}  />
    </div>
  );
}

export default App;
