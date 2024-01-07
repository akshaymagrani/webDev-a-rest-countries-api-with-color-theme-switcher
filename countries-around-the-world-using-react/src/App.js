import './App.css';
import { useEffect, useState } from 'react';
import Header from './Header';
import { SearchAndFilter } from './SearchAndFilter';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CountryCards from './CountryCards';

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

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className={`${theme ? 'lightTheme': 'darkTheme'}`}>
        <Header theme={theme} changeTheme={changeTheme}/>
        <div className='mx-auto max-w-5xl'>
          <SearchAndFilter />
          <CountryCards />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
