import React, { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import { fetchData } from './Functions';
import Login from './components/loginPage/Login';
import HomePage from './HomePage';

import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

import React, { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import fetchData from './Functions';
import Login from './components/loginPage/Login';
import HomePage from './HomePage';
import './App.css';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
let showSeeMore = null;
let done;
function App() {
  const [jobType, setJobType] = useState('Python developer');
  const [city, setCity] = useState('');
  const [jobCards, updateCards] = useState([]);

  // create two variables to hold city and state, then pass as props
  let state;
  let newCity;

  const getSearch = async (e) => {
    const cityArr = city.split(', ');
    state = cityArr[1];
    newCity = cityArr[0];
    showSeeMore = (
      <button
        className="see-more-button"
        type="submit"
        onClick={async (e) => await updateCount(e)}
      >
        See more
      </button>
    );
    const newData = await fetchData(newCity, state, jobType);
    const updatedData = jobCards.concat(newData);
    updateCards(updatedData);
  };

  const updateCity = (e) => {
    setCity(e.target.value);
  };

  const updateCount = async (e) => {
    console.log('-------clicked---------');
    const newData = await fetchData(newCity, state, jobType);
    updateCards(newData);

    let done = newData[0];
    if (done === 'true') {
      showSeeMore = null;
    }
  };

  const setJob = (e) => {
    setJobType(e.target.value);
  };

  return (
    <div>
      <CssBaseline />
      <Routes>
        <Route
          path="/home"
          element={
            <HomePage
              jobCards={jobCards}
              getSearch={getSearch}
              // setCards = {setCards}
              setJob={setJob}
              newCity={newCity}
              state={state}
              city={city}
              updateCity={updateCity}
              showSeeMore={showSeeMore}
            />
          }
        >
          {' '}
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
