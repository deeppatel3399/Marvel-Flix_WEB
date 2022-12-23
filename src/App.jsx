import React from 'react';
import Home from './pages/home/Home';
import { Route , Routes } from 'react-router-dom';
import './App.css';
import MoviesInfo from './components/movies-info/MoviesInfo';
import SeriesInfo from './components/series-info/SeriesInfo';

function App() {
  return (
    <>
       <Routes>
         <Route exact path='/' element={<Home/>}/>
         <Route exact path='/home' element={<Home/>}/>
         <Route exact path='/home/movies-info/:movietitle/:movieid' element={<MoviesInfo/>}/>
         <Route exact path='/home/series-info/:seriestitle/:seriesid' element={<SeriesInfo/>}/>
       </Routes>
    </>
  );
}

export default App;
