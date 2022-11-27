import React from 'react'

import MovieEntry from './MovieEntry.jsx'

const MovieList = ({movies, query, update, current}) => {

  const filteredList = movies.filter((movie) => { return movie.title.toLowerCase().includes(query.toLowerCase())})

  return (
    <div>
      {filteredList.filter((movie) => {return movie.watched == current}).map(movie => <MovieEntry key={movie._id} movie={movie} update={update}/>)}
    </div>
  )
}

export default MovieList