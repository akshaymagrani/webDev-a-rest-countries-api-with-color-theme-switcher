import './App.css';
import { useEffect, useState } from 'react';
import CountryCard from './CountryCard';

function App() {
  const [country, setCountry] = useState({});

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name,capital,currencies,population')
    .then((res) => res.json())
    .then((data) => setCountry(data));
  }
  ,[]);

  return (
    <CountryCard country={country} />
  )

}

export default App;
