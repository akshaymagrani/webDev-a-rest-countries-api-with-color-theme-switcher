import './App.css';
import { useEffect, useState } from 'react';
import CountryCard from './CountryCard';
import Header from './Header';
import { SearchAndFilter } from './SearchAndFilter';

function App() {
  const [theme, setTheme] = useState(true);

  function changeTheme() {
    setTheme(prevTheme => !prevTheme);
  }

  const [country, setCountry] = useState([]);

  useEffect(() => {
    // fetch('https://restcountries.com/v3.1/all?fields=name,capital,currencies,population')
    fetch('https://restcountries.com/v3.1/all')
    .then((res) => res.json())
    .then((data) => setCountry(data));
  }
  ,[]);

  return (
    <div>
      <Header theme={theme} changeTheme={changeTheme}/>
      <div className='mx-auto max-w-5xl'>
        <SearchAndFilter />
        <div className='flex flex-wrap justify-evenly'>
          {country.map((country) => (<CountryCard key={country.cca2} countryData={country} />)).slice(0,20)}
        </div>
      </div>
    </div>
  );
}

export default App;
