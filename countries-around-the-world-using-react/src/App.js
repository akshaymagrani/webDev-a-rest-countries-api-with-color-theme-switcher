import './App.css';
import { useEffect, useState } from 'react';
import Header from './Header';
import { SearchAndFilter } from './SearchAndFilter';
import CountryCards from './CountryCards';
import { Provider } from 'react-redux';
import { store } from './store.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Details from './Details.js'

function App() {
  const [theme, setTheme] = useState(true);

  function changeTheme() {
    setTheme(prevTheme => !prevTheme);
  }

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <div className={`${theme ? 'lightTheme' : 'darkTheme'}`}>
              <Header theme={theme} changeTheme={changeTheme} />
            </div>}
          >
            <Route index='/' element={     
                <div className={`${theme ? 'lightTheme': 'darkTheme'}`}>
                  <div className='mx-auto max-w-5xl'>
                    <SearchAndFilter />
                    <CountryCards />
                  </div>
                </div>}
            />
            <Route path='details/:id' element={
              <div className={`${theme ? 'lightTheme' : 'darkTheme'}`}>
                <Details />
              </div>
            }/>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
