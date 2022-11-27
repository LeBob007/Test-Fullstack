import React, { useState, useEffect } from 'react';
import axios from 'axios'

import Header from './Header.jsx'
import Add from './Add.jsx'
import Search from './Search.jsx'
import Tabs from './Tabs.jsx'
import MovieList from './MovieList.jsx'

const App = () => {

  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState('')
  const [render, setRender] = useState(false)
  const [current, setCurrent] = useState(false)

  useEffect(() => {
    axios.get('/api/movies')
      .then((res) => {
        setMovies(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [render])

  const addMovie = (title) => {
    let data = movies.map(movie => movie.title.toLowerCase())
    if (!data.includes(title.toLowerCase())) {
      axios.post('/api/movies', {title: title})
        .then((res) => {
          setRender(!render)
        })
    }
  }

  const updateWatched = (movie) => {
    axios.patch('/api/movies', movie)
      .then((res) => {
        setRender(!render)
      })
  }


  return (
    <div>
      <Header />
      <Add add={addMovie}/>
      <Search setQuery={setQuery}/>
      <Tabs set={setCurrent}/>
      <MovieList movies={movies} query={query} update={updateWatched} current={current}/>
    </div>

  )
}

export default App;