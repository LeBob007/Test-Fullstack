import React, {useState, useEffect} from 'react';
import axios from 'axios'

import Header from './Header.jsx'
import MovieList from './MovieList.jsx'
import Search from './Search.jsx'
import AddMovie from './AddMovie.jsx'
import Tabs from './Tabs.jsx'

const data = [
  {title: 'Mean Girls', watched: false},
  {title: 'Hackers', watched: false},
  {title: 'The Grey', watched: false},
  {title: 'Sunshine', watched: false},
  {title: 'Ex Machina', watched: false},
];

const App = () => {

  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState('')
  const [selectedTab, setSelectedTab] = useState(false)

  const [renderer, setRenderer] = useState(false)


  const add = (newMovie) => {
    // let titles = movies.map(movie => movie.title)
    // if (!titles.includes(newMovie.title)) {
    //   let copy = [...movies]
    //   copy.push(newMovie)
    //   setMovies(copy)
    // }

    axios.post('/api/movies', newMovie)
      .then((res) => {
        console.log(res)
        setRenderer(!renderer)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const updateMovieWatch = (movie) => {
    // let copy = [...movies]
    // let index = copy.indexOf(movie)
    // copy[index].watched = !copy[index].watched
    // setMovies(copy)

    axios.patch('/api/movies', movie)
      .then((res) => {
        console.log(res)
        setRenderer(!renderer)
      })
      .catch((err) => {
        console.log(err)
      })

  }

  useEffect(() => {
    axios.get('/api/movies')
      .then((res) => {
        setMovies(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [renderer])

  return (
    <div>
      <Header />
      <AddMovie add={add}/>
      <Search setQuery={setQuery}/>
      <Tabs setSelectedTab={setSelectedTab}/>
      <MovieList movies={movies} query={query} update={updateMovieWatch} selectedTab={selectedTab}/>
    </div>
  )
}

export default App;