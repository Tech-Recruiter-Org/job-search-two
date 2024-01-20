import React, { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import { fetchData } from './Functions';
import Login from './components/loginPage/Login';
import HomePage from './HomePage';

import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

function App() {
  const [jobType, setJobType] = useState('Python developer');
  const [city, setCity] = useState('');
  const [jobCards, updateCards] = useState([]);
  const [count, setCount] = useState(15);

  // create two variables to hold city and state, then pass as props
  let state;
  let newCity;

  const getSearch = async (e) => {
    const cityArr = city.split(', ');
    state = cityArr[1];
    newCity = cityArr[0];
    console.log(count, newCity, state, jobType);

    // get data from fetchData (in functions.js) which will return an array of the necessary data, then update cards state with the
    // returned array, then react will render the updatedcards into job display

    const newData = await fetchData(count, newCity, state, jobType);
    updateCards(newData);
  };
  const updateCity = (e) => {
    setCity(e.target.value);
  };

  const updateCount = async (e) => {
    setCount(count + 20);
    const newData = await fetchData(count, newCity, state, jobType);
    updateCards(newData);
  };

  // const setCards = (arr) =>{
  //   updateCards(arr)
  // }
  const setJob = (e) => {
    setJobType(e.target.value);
  };

  return (
    <div>
      <CssBaseline />
      <Routes>
        <Route
          path="/"
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
              updateCount={updateCount}
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
